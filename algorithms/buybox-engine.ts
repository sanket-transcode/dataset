// buybox-engine.ts
// Categra — Buy Box decision & scoring engine (pure TypeScript, no deps)

/////////////////////////////
// 0) DOMAIN TYPES & CONST //
/////////////////////////////

export type Fulfillment = "FBA" | "MFN";

export interface OfferInput {
  sellerId: string;                 // "YOU" (your internal id) or competitor seller id
  currency: string;                 // "EUR", "USD", etc.
  itemPrice: number;                // price excluding shipping
  shippingPrice: number;            // shipping component
  fulfillment: Fulfillment;         // FBA or MFN
  isPrime: boolean;                 // true if Prime-eligible
  handlingTimeDays: number;         // 0,1,2...
  etaDaysMin: number;               // promised delivery speed lower bound
  etaDaysMax: number;               // promised delivery speed upper bound
  onTimeRate: number;               // 0..1  (your telemetry if MFN; infer 1 for FBA by default)
  ratingStars?: number;             // 0..5 (optional)
  ratingCount?: number;             // optional
}

export interface SellerHealthInput {
  orderDefectRate: number;          // e.g., 0.006 for 0.6%
  lateShipmentRate: number;         // 0..1
  cancellationRate: number;         // 0..1
  ratingQuality: number;            // 0..1 (convert 4.8/5 -> 0.96, etc.)
}

export interface OfferQualityInput {
  contentOk: boolean;               // compliant main image, core attrs/bullets present
  conditionMatch: boolean;          // matches listing condition
  inStockStreakDays: number;        // consecutive in-stock days
  oosDaysLast30: number;            // out-of-stock days in last 30
  isBrandOwnerAPlus?: boolean;      // optional: A+ available/used
}

export interface EligibilityInput {
  isEligible: boolean;              // Amazon says you can win (yes/no)
  reasons?: string[];               // if not eligible, raw reasons
}

export interface SuppressionContext {
  hasFeaturedOffer: boolean;        // listing currently shows a BB
  recentMedianPrice?: number;       // your 30-90d rolling median
  fairBandPct?: number;             // e.g., 0.12 = 12% above median triggers suppression risk
}

export interface MarketplaceConfig {
  marketplaceId: string;            // e.g., "A1PA6795UKMFR9" (DE)
  // tie bands (% of featured price) depending on fulfillment matchup
  tieBandPrimeVsMFN: number;        // e.g., 0.015 (1.5%)
  tieBandPrimeVsPrime: number;      // e.g., 0.005 (0.5%)
  tieBandMFNVsMFN: number;          // e.g., 0.003 (0.3%)
  atRiskGapPct: number;             // e.g., 0.003 (0.3%)
  deliverySlackPts: number;         // allowed delivery score delta vs competitor, e.g., 2
  fairPricingHeuristicPct: number;  // 0.10..0.15 used if SuppressionContext.fairBandPct missing
}

export type BuyBoxState =
  | "WINNING"
  | "COMPETITIVE"
  | "AT_RISK"
  | "NOT_COMPETITIVE"
  | "NO_BUY_BOX"
  | "INELIGIBLE"
  | "UNKNOWN";

export interface EngineOutput {
  marketplaceId: string;
  state: BuyBoxState;
  owner: "YOU" | "COMPETITOR" | "—";
  currency: string;
  landedPriceYou?: number;
  landedPriceFeatured?: number;
  gapAbs?: number;                  // you vs featured (positive = you are higher)
  gapPct?: number;                  // signed
  competitiveScore?: number;        // 0..100
  deliveryScoreYou?: number;        // 0..100
  deliveryScoreFeatured?: number;   // 0..100
  sellerHealthScore?: number;       // 0..100
  offerQualityScore?: number;       // 0..100
  reasons: string[];                // top 1-3 concise reasons
  suggestedActions: string[];       // prioritized actions
  suppressionHint?: string;         // present when state is NO_BUY_BOX
  targetPrice?: number;             // estimated price to enter tie band
}

//////////////////////////
// 1) HELPER FUNCTIONS  //
//////////////////////////

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export function calcLandedPrice(item: number, ship: number) {
  return +(item + ship).toFixed(2);
}

export function calcGap(you: number, ref: number) {
  const gapAbs = +(you - ref).toFixed(2);
  const gapPct = ref > 0 ? (you - ref) / ref : 0;
  return { gapAbs, gapPct };
}

/** Map promised delivery to a 0..1 speed factor.
 *  You can replace this with percentile mapping by category if you have it.
 */
function deliverySpeedFactor(etaDaysMax: number): number {
  if (etaDaysMax <= 1) return 1.0;
  if (etaDaysMax <= 2) return 0.9;
  if (etaDaysMax <= 3) return 0.8;
  if (etaDaysMax <= 4) return 0.7;
  if (etaDaysMax <= 5) return 0.6;
  if (etaDaysMax <= 7) return 0.45;
  return 0.3;
}

export function calcDeliveryScore(offer: OfferInput): number {
  const primeFlag = offer.isPrime ? 1 : 0;
  const speed = deliverySpeedFactor(offer.etaDaysMax);              // 0..1
  const reliability = clamp(offer.onTimeRate, 0, 1);                // 0..1
  const score = 50 * speed + 30 * reliability + 20 * primeFlag;    // 0..100
  return +score.toFixed(1);
}

export function calcSellerHealthScore(h: SellerHealthInput): number {
  // Amazon typical thresholds: ODR ≤ 1%, Late ≤ 4%, Cancel ≤ 2.5%
  const odrScaled = clamp(h.orderDefectRate / 0.01, 0, 1);      // 0 = perfect, 1 = bad
  const lateScaled = clamp(h.lateShipmentRate / 0.04, 0, 1);
  const cancelScaled = clamp(h.cancellationRate / 0.025, 0, 1);
  const ratingQ = clamp(h.ratingQuality, 0, 1);

  const score =
    40 * (1 - odrScaled) +
    25 * (1 - lateScaled) +
    15 * (1 - cancelScaled) +
    20 * ratingQ;

  return +clamp(score, 0, 100).toFixed(1);
}

export function calcOfferQualityScore(q: OfferQualityInput): number {
  const content = q.contentOk ? 1 : 0;
  const condition = q.conditionMatch ? 1 : 0;
  const stockContinuity = clamp(q.inStockStreakDays / 30, 0, 1); // full points after 30d streak
  let score = 50 * content + 20 * condition + 30 * stockContinuity;

  // Tiny bonus if A+ present
  if (q.isBrandOwnerAPlus) score = Math.min(100, score + 5);

  return +score.toFixed(1);
}

function pickTieBand(cfg: MarketplaceConfig, you: OfferInput, featured: OfferInput) {
  const a = you.isPrime || you.fulfillment === "FBA";
  const b = featured.isPrime || featured.fulfillment === "FBA";
  if (a && b) return cfg.tieBandPrimeVsPrime;
  if (a && !b) return cfg.tieBandPrimeVsMFN;     // you have Prime advantage
  if (!a && b) return cfg.tieBandPrimeVsMFN;     // you are disadvantaged; still use same band for symmetry
  return cfg.tieBandMFNVsMFN;
}

function priceComponentFromGap(gapPct: number, tieCeilingPct: number) {
  // gapPct positive means you are more expensive than featured.
  if (gapPct <= 0) return 100; // you’re cheaper or equal -> full score
  const over = gapPct / tieCeilingPct; // 0..∞
  const score = Math.max(0, 100 - 100 * over);
  return +score.toFixed(1);
}

/////////////////////////////
// 2) CORE ENGINE FUNCTION //
/////////////////////////////

export interface EngineInput {
  marketplace: MarketplaceConfig;
  you: OfferInput;
  featuredOffer: OfferInput | null;     // null if none (suppressed or unknown)
  featuredOwnerIsYou: boolean | null;   // null if unknown
  eligibility: EligibilityInput;        // your offer eligibility
  sellerHealth: SellerHealthInput;      // your account/offer health
  offerQuality: OfferQualityInput;      // your listing/offer quality
  suppression: SuppressionContext;      // signals for suppressed/no-BB
  // Optional: Expected Featured Offer (SP-API) if available
  expectedFeaturedOfferPrice?: number;  // EFO
}

export function evaluateBuyBox(input: EngineInput): EngineOutput {
  const {
    marketplace: cfg,
    you,
    featuredOffer,
    featuredOwnerIsYou,
    eligibility,
    sellerHealth,
    offerQuality,
    suppression,
    expectedFeaturedOfferPrice,
  } = input;

  const currency = you.currency;
  const landedYou = calcLandedPrice(you.itemPrice, you.shippingPrice);

  // Scores
  const deliveryYou = calcDeliveryScore(you);
  const healthScore = calcSellerHealthScore(sellerHealth);
  const qualityScore = calcOfferQualityScore(offerQuality);

  // If no featured offer present
  if (!suppression.hasFeaturedOffer) {
    // Heuristic suppression hint
    const median = suppression.recentMedianPrice;
    const band = suppression.fairBandPct ?? cfg.fairPricingHeuristicPct;
    let hint = "No featured offer on this listing.";
    if (median && landedYou > median * (1 + band)) {
      hint =
        `Price likely above fair-pricing band. Target ≤ ${currency} ${(median * (1 + band)).toFixed(2)} ` +
        `(median ${currency} ${median.toFixed(2)}, yours ${currency} ${landedYou.toFixed(2)}).`;
    }
    return {
      marketplaceId: cfg.marketplaceId,
      state: "NO_BUY_BOX",
      owner: "—",
      currency,
      landedPriceYou: landedYou,
      reasons: ["Listing has no Buy Box (suppressed)"],
      suggestedActions: [
        "Reduce price into fair band (match recent median ±10–15%)",
        "Fix content compliance (main image 1000px+, required attributes)",
        "Normalize shipping fees/handling time",
      ],
      suppressionHint: hint,
    };
  }

  // If featured owner is you
  if (featuredOffer && featuredOwnerIsYou) {
    const landedFeat = calcLandedPrice(featuredOffer.itemPrice, featuredOffer.shippingPrice);
    const { gapAbs, gapPct } = calcGap(landedYou, landedFeat); // should be ~0
    const deliveryFeat = calcDeliveryScore(featuredOffer);

    const reasons: string[] = [];
    if (gapPct > cfg.atRiskGapPct) reasons.push(`Price gap +${(gapPct * 100).toFixed(2)}% vs featured`);
    if (deliveryYou + 10 < deliveryFeat) reasons.push("Delivery promise weakening vs competitors");

    return {
      marketplaceId: cfg.marketplaceId,
      state: reasons.length > 0 ? "AT_RISK" : "WINNING",
      owner: "YOU",
      currency,
      landedPriceYou: landedYou,
      landedPriceFeatured: landedFeat,
      gapAbs,
      gapPct,
      deliveryScoreYou: deliveryYou,
      deliveryScoreFeatured: deliveryFeat,
      sellerHealthScore: healthScore,
      offerQualityScore: qualityScore,
      reasons: reasons.length ? reasons.slice(0, 3) : ["You own the Buy Box"],
      suggestedActions: reasons.length
        ? ["Hold/match price parity", "Tighten handling time", "Monitor competitor ETA"]
        : ["Maintain parity", "Monitor competitor price/ETA"],
    };
  }

  // Featured offer exists and is not you
  if (featuredOffer && !featuredOwnerIsYou) {
    const landedFeat = calcLandedPrice(featuredOffer.itemPrice, featuredOffer.shippingPrice);
    const { gapAbs, gapPct } = calcGap(landedYou, landedFeat);
    const deliveryFeat = calcDeliveryScore(featuredOffer);
    const tieBand = pickTieBand(cfg, you, featuredOffer); // e.g., 0.5% .. 1.5%

    // Competitive score composition
    const priceComp = priceComponentFromGap(gapPct, tieBand);
    const competitiveScore = +(0.45 * priceComp + 0.30 * deliveryYou + 0.15 * healthScore + 0.10 * qualityScore).toFixed(1);

    // Decide state
    let state: BuyBoxState;
    if (!eligibility.isEligible) {
      state = "INELIGIBLE";
    } else if (Math.abs(gapPct) <= tieBand && deliveryYou >= deliveryFeat - cfg.deliverySlackPts) {
      state = "COMPETITIVE";
    } else {
      state = "NOT_COMPETITIVE";
    }

    // Reasons
    const reasons: string[] = [];
    if (eligibility.isEligible) {
      if (gapPct > 0) reasons.push(`Price +${(gapPct * 100).toFixed(2)}% vs featured`);
      if (deliveryYou + cfg.deliverySlackPts < deliveryFeat) reasons.push("Slower delivery promise than featured");
    } else {
      reasons.push("Offer not eligible to win Buy Box");
      (eligibility.reasons ?? []).slice(0, 2).forEach(r => reasons.push(r));
    }

    // Suggested actions
    const actions: string[] = [];
    if (!eligibility.isEligible) {
      actions.push("Resolve eligibility blockers (ODR, late ship, policy/compliance)");
    } else {
      if (gapPct > tieBand) actions.push(`Reduce landed price by ≥ ${( (gapPct - tieBand) * 100 ).toFixed(2)}%`);
      if (deliveryYou + cfg.deliverySlackPts < deliveryFeat) actions.push("Improve ETA (enable FBA/Prime or reduce handling time)");
      actions.push("Monitor competitor price changes");
    }

    // Target price (use EFO if present; else estimate)
    let targetPrice: number | undefined = undefined;
    if (eligibility.isEligible) {
      if (expectedFeaturedOfferPrice && expectedFeaturedOfferPrice > 0) {
        targetPrice = +expectedFeaturedOfferPrice.toFixed(2);
      } else {
        const tieAdj = Math.max(0, tieBand - 0.0001); // slight bias under tie band
        targetPrice = +(landedFeat * (1 - tieAdj)).toFixed(2);
      }
    }

    return {
      marketplaceId: cfg.marketplaceId,
      state,
      owner: "COMPETITOR",
      currency,
      landedPriceYou: landedYou,
      landedPriceFeatured: landedFeat,
      gapAbs,
      gapPct,
      competitiveScore,
      deliveryScoreYou: deliveryYou,
      deliveryScoreFeatured: deliveryFeat,
      sellerHealthScore: healthScore,
      offerQualityScore: qualityScore,
      reasons: reasons.slice(0, 3),
      suggestedActions: actions.slice(0, 4),
      targetPrice,
    };
  }

  // Fallback when data is incomplete
  return {
    marketplaceId: cfg.marketplaceId,
    state: "UNKNOWN",
    owner: "—",
    currency,
    landedPriceYou: landedYou,
    reasons: ["Insufficient data to classify (throttled or fresh listing)"],
    suggestedActions: ["Retry pricing API", "Cache-bust this ASIN/marketplace snapshot"],
  };
}

/////////////////////////////////////////
// 3) DUMMY INPUTS (REPLACE WITH APIs) //
/////////////////////////////////////////

// -- Replace these with SP-API/Categra values --
const DUMMY_CFG: MarketplaceConfig = {
  marketplaceId: "A1PA6795UKMFR9", // Amazon DE
  tieBandPrimeVsMFN: 0.015,        // 1.5%
  tieBandPrimeVsPrime: 0.005,      // 0.5%
  tieBandMFNVsMFN: 0.003,          // 0.3%
  atRiskGapPct: 0.003,             // 0.3%
  deliverySlackPts: 2,             // allow 2 points worse than competitor and still call it "parity"
  fairPricingHeuristicPct: 0.12,   // 12% over recent median risks suppression
};

const DUMMY_YOU: OfferInput = {
  sellerId: "YOU",
  currency: "EUR",
  itemPrice: 24.90,
  shippingPrice: 0,
  fulfillment: "FBA",
  isPrime: true,
  handlingTimeDays: 0,
  etaDaysMin: 2,
  etaDaysMax: 3,
  onTimeRate: 0.98,
  ratingStars: 4.8,
  ratingCount: 1200,
};

const DUMMY_FEATURED: OfferInput = {
  sellerId: "A3COMPET1TOR",
  currency: "EUR",
  itemPrice: 24.80,
  shippingPrice: 0,
  fulfillment: "FBA",
  isPrime: true,
  handlingTimeDays: 0,
  etaDaysMin: 1,
  etaDaysMax: 2,
  onTimeRate: 0.995,
  ratingStars: 4.9,
  ratingCount: 5000,
};

const DUMMY_HEALTH: SellerHealthInput = {
  orderDefectRate: 0.006,   // 0.6%
  lateShipmentRate: 0.018,  // 1.8%
  cancellationRate: 0.012,  // 1.2%
  ratingQuality: 0.96,      // ~4.8/5
};

const DUMMY_QUALITY: OfferQualityInput = {
  contentOk: true,
  conditionMatch: true,
  inStockStreakDays: 26,
  oosDaysLast30: 4,
  isBrandOwnerAPlus: true,
};

const DUMMY_ELIGIBILITY: EligibilityInput = {
  isEligible: true,
};

const DUMMY_SUPPRESSION: SuppressionContext = {
  hasFeaturedOffer: true,
  recentMedianPrice: 23.90,
  fairBandPct: 0.12,
};

// Example runner (you can delete below in prod)
if (require?.main === module) {
  const out = evaluateBuyBox({
    marketplace: DUMMY_CFG,
    you: DUMMY_YOU,
    featuredOffer: DUMMY_FEATURED,
    featuredOwnerIsYou: false,
    eligibility: DUMMY_ELIGIBILITY,
    sellerHealth: DUMMY_HEALTH,
    offerQuality: DUMMY_QUALITY,
    suppression: DUMMY_SUPPRESSION,
    // expectedFeaturedOfferPrice: 24.85, // uncomment if you have EFO from SP-API
  });

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(out, null, 2));
}

/*
/////////////////////////
// 4) WIRING TO SP-API //
/////////////////////////

Replace DUMMY_* with:

- Pricing:
  - getItemOffers / getListingOffers → featured owner, Buy Box price, lowest price, Prime flags, promised delivery.
  - getCompetitivePricing → arrays of competitive/buybox prices (backup).
  - getFeaturedOfferExpectedPriceBatch → expectedFeaturedOfferPrice (optional but great for targetPrice).

- Eligibility & Health:
  - Account health surfaces or internal aggregates from Orders + your MFN telemetry (ODR, late, cancel).

- Suppression:
  - If no featured offer → suppression likely. Compare your landed vs recent median price (compute 30–90d).
  - fairBandPct default 0.10–0.15; override per marketplace if you learn better bands.

- Offer Quality:
  - Categra content completeness validators (main image ≥ 1000px, brand/GTIN present, key attrs).
  - Condition match from your listing vs offer condition.

Batch/caching:
  - Poll top ASINs hourly, long tail daily.
  - Cache keys by (ASIN, marketplace, minute bucket).
  - Trigger on-demand refresh on UI interactions or your price/stock changes.
*/
