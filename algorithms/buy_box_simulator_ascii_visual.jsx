import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Info, AlertTriangle, HelpCircle } from "lucide-react";

/**
 * BUY BOX SIMULATOR (visual)
 * - Split UI: Inputs on the left, Results on the right
 * - Prefilled with dummy Categra and Amazon data
 * - No raw angle-bracket symbols in text (<=, >=) to avoid JSX issues
 * - "INTEGRATE" comments mark where to wire real APIs
 */

// =============================
// DUMMY DATA (replace with real API calls)
// =============================
const DUMMY_CATEGRA = {
  productId: "CAT-12345",
  sku: "TEE-BLK-M",
  markets: { EU: { vatPercent: 19 } },
  cogs: 11.75,
  map: 19.9,
  defaultFulfillment: "FBA",
  typicalPromisedDays: 2,
  sellerHealth: { odr: 0.007, lateShip: 0.018, preCancel: 0.009 },
  reputation: { stars: 4.72, reviews: 1024 },
  inventory: { onHandQty: 420, avgDailySales: 38 }
};

const DUMMY_AMAZON = {
  sellerId: "A1ABCDEF12345",
  summary: {
    LowestPrices: [{ condition: "New", LandedPrice: { Amount: 21.8, CurrencyCode: "EUR" } }],
    BuyBoxPrices: [{ condition: "New", LandedPrice: { Amount: 21.99, CurrencyCode: "EUR" } }]
  },
  offers: [
    { isMyOffer: true, ListingPrice: { Amount: 22.33, CurrencyCode: "EUR" }, Shipping: { Amount: 0.0, CurrencyCode: "EUR" }, Price: { LandedPrice: { Amount: 22.33, CurrencyCode: "EUR" } }, IsFulfilledByAmazon: true, PrimeInformation: { IsPrime: true } },
    { isMyOffer: false, ListingPrice: { Amount: 21.8, CurrencyCode: "EUR" }, Shipping: { Amount: 0.0, CurrencyCode: "EUR" }, Price: { LandedPrice: { Amount: 21.8, CurrencyCode: "EUR" } }, IsFulfilledByAmazon: true, PrimeInformation: { IsPrime: true } },
    { isMyOffer: false, ListingPrice: { Amount: 22.1, CurrencyCode: "EUR" }, Shipping: { Amount: 0.0, CurrencyCode: "EUR" }, Price: { LandedPrice: { Amount: 22.1, CurrencyCode: "EUR" } }, IsFulfilledByAmazon: false, PrimeInformation: { IsPrime: true } }
  ]
};

// =============================
// CONFIG: Weights and Caps (shorter, still clear)
// =============================
const PRICE_GAP_CLIP = 0.10; // clip price advantage within 10%
const SOFT_T = 0.8;          // softmax temperature (lower = sharper)
const W_PRICE = 6.0;
const W_FBA = 1.1;
const W_SFP = 0.9;
const W_MFN_PRIME = 0.6;
const W_DAYS = 0.35;         // per day faster than market median
const W_ODR = 4.0;
const W_LATE = 1.8;
const W_PRECAN = 1.2;
const W_REP = 0.6;
const W_INV = 0.4;
const W_COND_NEW = 0.3;

// =============================
// Utilities
// =============================
function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }
function fmtMoney(x, ccy){ if (!isFinite(x)) return "-"; try { return new Intl.NumberFormat(undefined, { style: "currency", currency: ccy||"USD" }).format(x); } catch { return (x||0).toFixed(2); } }
function tanh(x){ return Math.tanh(x); }
function approxEq(a,b,eps){ return Math.abs((a||0)-(b||0)) <= (eps||1e-9); }

// =============================
// Domain helpers
// =============================
function landed(priceInc, buyerShip){ return (priceInc||0) + (buyerShip||0); }

function calcFinancials(p){
  const priceInc = p.itemPriceInclTax;
  const buyerShip = p.buyerShipping;
  const vatPct = p.vatPercent;
  const refPct = p.referralPercent;
  const fbaFee = p.fbaPickPackFlat;
  const other = p.otherFlatFees;
  const cogs = p.unitCOGS;

  const landedVal = landed(priceInc, buyerShip);
  const vat = (vatPct||0)/100;
  const ref = (refPct||0)/100;
  const vatPart = (priceInc||0) * (vat/(1+vat));
  const refBase = (priceInc||0) - vatPart;
  const refFee = refBase * ref;
  const netExVAT = refBase - refFee - (fbaFee||0) - (other||0);
  const profit = netExVAT - (cogs||0);
  const breakevenGross = ((fbaFee||0)+(other||0)+(cogs||0))*(1+vat)/(1-ref);
  const breakevenExShip = breakevenGross - (buyerShip||0);
  return { landed: landedVal, vatPortion: vatPart, referralFee: refFee, netRevenueExVAT: netExVAT, profitPerUnit: profit, breakevenPriceExclShipping: breakevenExShip };
}

function repLift(stars, reviews){
  const starCenter = ((stars||0)-4.6)/0.2; // relative to strong baseline
  const revLift = 0.15*Math.log(1+Math.max(0,reviews||0));
  return tanh(starCenter)+revLift;
}
function invLift(days){ return tanh(((days||0)-3)/5); }

function scoreOffer(offer, mkt){
  const cheap = mkt.cheapestCompetitorLandedPrice;
  const myLand = (offer.landedPrice != null) ? offer.landedPrice : landed(offer.itemPriceInclTax, offer.buyerShipping);
  const gapFrac = (myLand - cheap) / Math.max(0.01, cheap);
  const dayAdv = clamp((mkt.marketMedianPromisedDays||0) - (offer.promisedDays||0), -3, 3);
  const odrBonus = Math.max(0, 0.01 - (offer.odr||0));
  const lateBonus = Math.max(0, 0.04 - (offer.lateShip||0));
  const preBonus = Math.max(0, 0.025 - (offer.preCancel||0));
  const fulfillLift = (
    (offer.fulfillment==='FBA'?W_FBA:0)+
    (offer.fulfillment==='SFP'?W_SFP:0)+
    (offer.fulfillment==='MFN_PRIME'?W_MFN_PRIME:0)
  );
  const priceLift = W_PRICE * clamp(-gapFrac, -PRICE_GAP_CLIP, PRICE_GAP_CLIP);
  const daysLift = W_DAYS * dayAdv;
  const healthLift = W_ODR*odrBonus + W_LATE*lateBonus + W_PRECAN*preBonus;
  const repScore = W_REP * repLift(offer.stars, offer.reviews);
  const invScore = W_INV * invLift(offer.daysCover);
  const condLift = offer.condition==='New' ? W_COND_NEW : 0;
  const total = priceLift + fulfillLift + daysLift + healthLift + repScore + invScore + condLift;
  return { total, components:{ priceLift, fulfillmentLift: fulfillLift, deliveryLift: daysLift, healthLift, reputationScore: repScore, inventoryScore: invScore, conditionLift: condLift }, priceGapFraction: gapFrac, myLanded: myLand };
}

function softmax(arr){
  const exps = arr.map(function(s){ return Math.exp(s/SOFT_T); });
  const denom = exps.reduce(function(a,b){ return a+b; }, 0) || 1;
  return exps.map(function(e){ return e/denom; });
}
function deltaQForP(p){ var c = clamp(p, 0.0001, 0.9999); return SOFT_T * Math.log(c/(1-c)); }

function buildAdvice(deltaNeeded){
  var items=[
    {label:"Promise faster delivery (up to about 3 days faster than your market typical Prime speed)", max:+W_DAYS*3},
    {label:"Use FBA Prime instead of MFN or SFP if possible", max:+W_FBA},
    {label:"Reduce your landed price within a ten percent window to be more competitive", max:+W_PRICE*PRICE_GAP_CLIP},
    {label:"Improve seller metrics: keep ODR at most 1 percent, Late Ship at most 4 percent, Pre-cancel at most 2.5 percent", max:+W_ODR+W_LATE+W_PRECAN},
    {label:"Boost reputation and keep stock depth healthy (more reviews, DOC at least 10)", max:+W_REP*0.8+W_INV*0.8}
  ];
  return items.map(function(i){ return Object.assign({}, i, { covers: i.max>=deltaNeeded }); }).sort(function(a,b){ return b.max-a.max; });
}

// =============================
// Unit tests (displayed in UI)
// =============================
function runUnitTests(){
  var tests = [];

  // Price -> score monotonicity
  var mkt = { cheapestCompetitorLandedPrice: 21.8, marketMedianPromisedDays: 2 };
  var a = { itemPriceInclTax: 22.5, buyerShipping: 0, fulfillment: "FBA", promisedDays: 2 };
  var b = { itemPriceInclTax: 22.0, buyerShipping: 0, fulfillment: "FBA", promisedDays: 2 };
  var sA = scoreOffer(a, mkt).total;
  var sB = scoreOffer(b, mkt).total;
  tests.push({ name: "Lower price improves score", pass: sB > sA, details: sB.toFixed(3) + " vs " + sA.toFixed(3) });

  // COGS -> profit monotonicity
  var p1 = calcFinancials({ itemPriceInclTax: 25, buyerShipping: 0, vatPercent: 19, referralPercent: 15, fbaPickPackFlat: 3, otherFlatFees: 0.5, unitCOGS: 10 });
  var p2 = calcFinancials({ itemPriceInclTax: 25, buyerShipping: 0, vatPercent: 19, referralPercent: 15, fbaPickPackFlat: 3, otherFlatFees: 0.5, unitCOGS: 12 });
  tests.push({ name: "Higher COGS lowers profit", pass: p2.profitPerUnit < p1.profitPerUnit, details: p2.profitPerUnit.toFixed(3) + " vs " + p1.profitPerUnit.toFixed(3) });

  // Tie -> equal probability
  var tie = softmax([2.5, 2.5]);
  tests.push({ name: "Exact tie yields equal probability", pass: approxEq(tie[0], tie[1], 1e-9), details: tie[0].toFixed(3) + " vs " + tie[1].toFixed(3) });

  // Additional: price gap clipping works
  var far = { itemPriceInclTax: 15.0, buyerShipping: 0, fulfillment: "FBA", promisedDays: 2 };
  var near = { itemPriceInclTax: 21.0, buyerShipping: 0, fulfillment: "FBA", promisedDays: 2 };
  var sFar = scoreOffer(far, mkt).total;
  var sNear = scoreOffer(near, mkt).total;
  tests.push({ name: "Price gap clipping caps extreme advantage", pass: (sFar - sNear) < W_PRICE*PRICE_GAP_CLIP + 0.001, details: (sFar - sNear).toFixed(3) });

  // Additional: delivery advantage helps
  var slow = { itemPriceInclTax: 22.0, buyerShipping: 0, fulfillment: "FBA", promisedDays: 4 };
  var fast = { itemPriceInclTax: 22.0, buyerShipping: 0, fulfillment: "FBA", promisedDays: 1 };
  var sSlow = scoreOffer(slow, mkt).total;
  var sFast = scoreOffer(fast, mkt).total;
  tests.push({ name: "Faster delivery improves score", pass: sFast > sSlow, details: sFast.toFixed(3) + " vs " + sSlow.toFixed(3) });

  return tests;
}

// =============================
// React Component
// =============================
export default function BuyBoxSimulator(){
  // Inputs: price and fees
  var [curr, setCurr] = useState("EUR");
  var [priceInc, setPriceInc] = useState(22.33);
  var [shipBuyer, setShipBuyer] = useState(0);
  var [refPct, setRefPct] = useState(15);
  var [fbaFee, setFbaFee] = useState(3.2);
  var [feeOther, setFeeOther] = useState(0.3);
  var [vatPct, setVatPct] = useState(19);
  var [cogs, setCogs] = useState(12);
  var [mapP, setMapP] = useState(19.9);

  // Inputs: offer quality
  var [fulfill, setFulfill] = useState("FBA");
  var [daysPromise, setDaysPromise] = useState(2);
  var [odr, setOdr] = useState(0.008);
  var [late, setLate] = useState(0.02);
  var [precan, setPrecan] = useState(0.01);
  var [stars, setStars] = useState(4.7);
  var [reviews, setReviews] = useState(850);
  var [doc, setDoc] = useState(10); // days of cover
  var [cond, setCond] = useState("New");

  // Inputs: market
  var [mktMedianDays, setMktMedianDays] = useState(2);
  var [useAmzLow, setUseAmzLow] = useState(true);
  var [amzLow, setAmzLow] = useState(null);
  var [manualLow, setManualLow] = useState("");

  // Assumptions
  var [assumeFBA, setAssumeFBA] = useState(true);
  var [assumeMFNPrime, setAssumeMFNPrime] = useState(true);
  var [assumeExtraFBA, setAssumeExtraFBA] = useState(false);

  // From Amazon
  var [amzOffers, setAmzOffers] = useState([]);
  var [tests, setTests] = useState([]);

  // Prefill from dummy sources (replace with real API calls)
  var loadInitial = React.useCallback(function(){
    // INTEGRATE: Replace DUMMY_CATEGRA and DUMMY_AMAZON with live calls.
    var cg = DUMMY_CATEGRA;
    var amz  = DUMMY_AMAZON;

    // Categra prefill
    setVatPct(cg.markets.EU.vatPercent);
    setCogs(cg.cogs);
    setMapP(cg.map);
    setFulfill(cg.defaultFulfillment);
    setDaysPromise(cg.typicalPromisedDays);
    setOdr(cg.sellerHealth.odr);
    setLate(cg.sellerHealth.lateShip);
    setPrecan(cg.sellerHealth.preCancel);
    setStars(cg.reputation.stars);
    setReviews(cg.reputation.reviews);
    if (cg.inventory && cg.inventory.onHandQty && cg.inventory.avgDailySales){
      setDoc(Math.max(1, Math.round(cg.inventory.onHandQty / Math.max(0.1, cg.inventory.avgDailySales))));
    }

    // Amazon prefill
    var my = (amz.offers||[]).find(function(o){ return o.isMyOffer; });
    if (my){
      var myP = Number(my && my.ListingPrice && my.ListingPrice.Amount);
      var myS = Number(my && my.Shipping && my.Shipping.Amount);
      if (isFinite(myP)) setPriceInc(myP);
      if (isFinite(myS)) setShipBuyer(myS);
      var isFBA   = !!(my && my.IsFulfilledByAmazon);
      var isPrime = !!(my && my.PrimeInformation && my.PrimeInformation.IsPrime);
      setFulfill(isFBA ? "FBA" : (isPrime ? "MFN_PRIME" : "MFN"));
      var ccy = (my && my.ListingPrice && my.ListingPrice.CurrencyCode) || (my && my.Price && my.Price.LandedPrice && my.Price.LandedPrice.CurrencyCode);
      if (ccy) setCurr(ccy);
    }

    var comps = (amz.offers||[]).filter(function(o){ return !o.isMyOffer; }).map(function(o){
      var price = Number(o && o.ListingPrice && o.ListingPrice.Amount);
      var ship  = Number((o && o.Shipping && o.Shipping.Amount) || 0);
      var land  = Number((o && o.Price && o.Price.LandedPrice && o.Price.LandedPrice.Amount) != null ? (o.Price.LandedPrice.Amount) : (isFinite(price+ship)?price+ship:undefined));
      var isFBA = !!(o && o.IsFulfilledByAmazon);
      var isPrime = !!(o && o.PrimeInformation && o.PrimeInformation.IsPrime);
      var mode = isFBA ? "FBA" : (isPrime ? "MFN_PRIME" : "MFN");
      return { landedPrice: land, itemPriceInclTax: price, buyerShipping: ship, fulfillment: mode };
    }).filter(function(c){ return isFinite(c.landedPrice); });
    setAmzOffers(comps);

    var low = (amz && amz.summary && amz.summary.LowestPrices && amz.summary.LowestPrices[0] && amz.summary.LowestPrices[0].LandedPrice && amz.summary.LowestPrices[0].LandedPrice.Amount) != null ?
      amz.summary.LowestPrices[0].LandedPrice.Amount :
      (amz && amz.summary && amz.summary.BuyBoxPrices && amz.summary.BuyBoxPrices[0] && amz.summary.BuyBoxPrices[0].LandedPrice && amz.summary.BuyBoxPrices[0].LandedPrice.Amount);
    if (isFinite(Number(low))){
      setAmzLow(Number(low));
      setUseAmzLow(true);
      setAssumeFBA(false);
      setAssumeMFNPrime(false);
      setAssumeExtraFBA(false);
    }
  }, []);

  function refreshAmazon(){ loadInitial(); }

  React.useEffect(function(){
    loadInitial();
    setTests(runUnitTests());
  }, [loadInitial]);

  // Derived calculations
  var fin = useMemo(function(){ return calcFinancials({
    itemPriceInclTax: priceInc, buyerShipping: shipBuyer, vatPercent: vatPct,
    referralPercent: refPct, fbaPickPackFlat: fbaFee, otherFlatFees: feeOther, unitCOGS: cogs
  }); }, [priceInc, shipBuyer, vatPct, refPct, fbaFee, feeOther, cogs]);

  var youLanded = fin.landed;

  var lowEff = useMemo(function(){
    if (useAmzLow && amzLow != null) return amzLow;
    if (!useAmzLow && manualLow !== "" && isFinite(Number(manualLow))) return Number(manualLow);
    if (amzOffers.length) return Math.min.apply(null, amzOffers.map(function(c){ return c.landedPrice; }));
    return Math.max(0.01, youLanded - 0.5);
  }, [useAmzLow, amzLow, manualLow, amzOffers, youLanded]);

  var compMin = useMemo(function(){
    if (isFinite(lowEff)) return lowEff;
    return Math.max(0.01, youLanded - 0.5);
  }, [lowEff, youLanded]);

  var yourOffer = useMemo(function(){ return { isMine:true, itemPriceInclTax: priceInc, buyerShipping: shipBuyer, fulfillment: fulfill, promisedDays: daysPromise, odr: odr, lateShip: late, preCancel: precan, stars: stars, reviews: reviews, daysCover: doc, condition: cond }; }, [priceInc, shipBuyer, fulfill, daysPromise, odr, late, precan, stars, reviews, doc, cond]);

  var competitors = useMemo(function(){
    var list = [];
    if (amzOffers.length){
      amzOffers.forEach(function(c){ list.push(Object.assign({}, c, { promisedDays: isFinite(c.promisedDays) ? c.promisedDays : mktMedianDays })); });
    } else if (isFinite(lowEff)){
      list.push({ landedPrice: lowEff, fulfillment:"FBA", promisedDays: Math.max(1, mktMedianDays-1) });
      list.push({ landedPrice: lowEff+0.3, fulfillment:"MFN_PRIME", promisedDays: mktMedianDays+1 });
    } else {
      if (assumeFBA)        list.push({ landedPrice: youLanded-0.5, fulfillment:"FBA", promisedDays: Math.max(1, mktMedianDays-1) });
      if (assumeMFNPrime)   list.push({ landedPrice: youLanded-0.2, fulfillment:"MFN_PRIME", promisedDays: mktMedianDays+1 });
      if (assumeExtraFBA)   list.push({ landedPrice: youLanded-0.3, fulfillment:"FBA", promisedDays: Math.max(1, mktMedianDays-1) });
    }
    return list;
  }, [amzOffers, lowEff, assumeFBA, assumeMFNPrime, assumeExtraFBA, mktMedianDays, youLanded]);

  var medianDays = useMemo(function(){
    var days = [daysPromise].concat(competitors.map(function(c){ return c.promisedDays; }).filter(function(v){ return isFinite(v); }));
    if (!days.length) return mktMedianDays;
    var sorted = days.slice().sort(function(a,b){ return a-b; });
    var mid = Math.floor(sorted.length/2);
    return sorted.length%2 ? sorted[mid] : (sorted[mid-1]+sorted[mid])/2;
  }, [competitors, daysPromise, mktMedianDays]);

  var mkt = { cheapestCompetitorLandedPrice: Math.min(compMin, youLanded), marketMedianPromisedDays: medianDays };

  var allOffers = [yourOffer].concat(competitors);
  var parts = allOffers.map(function(o){ return scoreOffer(o, mkt); });
  var probs = softmax(parts.map(function(s){ return s.total; }));
  var myPct = Math.round((probs[0]||0)*100);
  var target95 = deltaQForP(0.95);
  var bestComp = Math.max.apply(null, [0].concat(parts.slice(1).map(function(s){ return s.total; })));
  var myDelta = (parts[0] && parts[0].total ? parts[0].total : 0) - bestComp;
  var extraDelta = Math.max(0, target95 - myDelta);
  var advise = buildAdvice(extraDelta);
  var mapWarn = priceInc < mapP;

  var c = (parts[0] && parts[0].components) ? parts[0].components : { priceLift:0, fulfillmentLift:0, deliveryLift:0, healthLift:0, reputationScore:0, inventoryScore:0, conditionLift:0 };
  var factors = [
    { label: "Price competitiveness", value: c.priceLift },
    { label: "Fulfillment tier FBA or SFP or Prime", value: c.fulfillmentLift },
    { label: "Delivery speed vs market", value: c.deliveryLift },
    { label: "Seller health ODR or Late or Pre-cancel", value: c.healthLift },
    { label: "Reputation stars and reviews", value: c.reputationScore },
    { label: "Inventory depth", value: c.inventoryScore },
    { label: "Item condition", value: c.conditionLift }
  ];

  function pctStyle(pct){ return { width: String(pct) + "%" }; }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.25 }} className="mb-4">
          <h1 className="text-2xl font-semibold text-slate-900">Buy Box Simulator</h1>
          <p className="text-slate-600 text-sm">Inputs on the left prefilled with dummy Categra and Amazon. Results on the right. Replace the dummy loaders with your real APIs.</p>
          <div className="mt-2 inline-flex items-center gap-3 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Amazon sourced</span>
            <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra sourced</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Manual or Derived</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* LEFT: Inputs */}
          <div className="space-y-4">
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-4 border-b border-slate-200 font-medium text-slate-900">1) Your Price and Fees</div>
              <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-slate-600 mb-1">Currency</div>
                  <select className="h-10 w-full rounded-xl border border-slate-300 px-3" value={curr} onChange={function(e){ setCurr(e.target.value); }}>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                  </select>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Your item price tax included <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Amazon</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01" value={priceInc} onChange={function(e){ setPriceInc(parseFloat(e.target.value)||0); }} />
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-1"><HelpCircle className="w-3.5 h-3.5"/>Set from Amazon ListingPrice.Amount in loader.</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Shipping the buyer pays <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Amazon</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01" value={shipBuyer} onChange={function(e){ setShipBuyer(parseFloat(e.target.value)||0); }} />
                  <div className="text-xs text-slate-500 mt-1">From Amazon Shipping.Amount in loader. Often zero for Prime.</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Referral fee percent platform commission</div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.1" value={refPct} onChange={function(e){ setRefPct(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">FBA pick and pack flat</div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01" value={fbaFee} onChange={function(e){ setFbaFee(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Other flat fees labeling or storage</div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01" value={feeOther} onChange={function(e){ setFeeOther(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">VAT percent if price includes VAT <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.1" value={vatPct} onChange={function(e){ setVatPct(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Your cost per unit COGS <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01" value={cogs} onChange={function(e){ setCogs(parseFloat(e.target.value)||0); }} />
                </div>
                <div className="col-span-2">
                  <div className="text-slate-600 mb-1">Minimum Advertised Price optional <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01" value={mapP} onChange={function(e){ setMapP(parseFloat(e.target.value)||0); }} />
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-4 border-b border-slate-200 font-medium text-slate-900">2) Your Offer Quality</div>
              <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-slate-600 mb-1">Fulfillment method <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Amazon current offer</span></div>
                  <select className="h-10 w-full rounded-xl border border-slate-300 px-3" value={fulfill} onChange={function(e){ setFulfill(e.target.value); }}>
                    <option value="FBA">FBA fulfilled by platform</option>
                    <option value="SFP">SFP you ship Prime</option>
                    <option value="MFN_PRIME">MFN Prime you ship Prime</option>
                    <option value="MFN">MFN you ship non Prime</option>
                  </select>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Your promised delivery time days <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="1" value={daysPromise} onChange={function(e){ setDaysPromise(parseFloat(e.target.value)||0); }} />
                  <div className="text-xs text-slate-500 mt-1">Enter your typical Prime or standard promise. SP API does not expose exact promise here.</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Order Defect Rate (e.g., 0.008 means 0.8 percent) <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.001" value={odr} onChange={function(e){ setOdr(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Late shipment rate <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.001" value={late} onChange={function(e){ setLate(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Pre cancellation rate <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.001" value={precan} onChange={function(e){ setPrecan(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Your star rating zero to five <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.1" value={stars} onChange={function(e){ setStars(parseFloat(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Public feedback count <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="1" value={reviews} onChange={function(e){ setReviews(parseInt(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Estimated days of stock cover <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Categra</span></div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="1" value={doc} onChange={function(e){ setDoc(parseInt(e.target.value)||0); }} />
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Item condition</div>
                  <select className="h-10 w-full rounded-xl border border-slate-300 px-3" value={cond} onChange={function(e){ setCond(e.target.value); }}>
                    <option>New</option>
                    <option>Used - Like New</option>
                    <option>Used - Good</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-4 border-b border-slate-200 font-medium text-slate-900">3) Competitors and Market</div>
              <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                <div className="col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-slate-600">Lowest competitor landed price</div>
                    {useAmzLow && amzLow != null && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">from Amazon</span>
                    )}
                    <label className="ml-auto flex items-center gap-2 text-xs">
                      <input type="checkbox" checked={!useAmzLow} onChange={function(e){ setUseAmzLow(!e.target.checked); }} />
                      Override Amazon price
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01"
                      value={useAmzLow ? (amzLow==null ? "" : String(amzLow)) : manualLow}
                      onChange={function(e){ setManualLow(e.target.value); }} disabled={useAmzLow} />
                    <button className="px-3 rounded-xl border border-slate-300 text-slate-700" onClick={refreshAmazon} disabled={!useAmzLow} title="Refresh from Amazon">Refresh</button>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Pulled from getItemOffersLatest summary or Buy Box price.</div>
                </div>

                <div>
                  <div className="text-slate-600 mb-1">Otherwise assume the lowest competitor is cheaper than you by</div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="0.01"
                    value={Math.max(0, (youLanded - compMin) || 0).toFixed(2)}
                    onChange={function(e){
                      var v = parseFloat(e.target.value) || 0;
                      if (!useAmzLow && (manualLow === "" || !isFinite(Number(manualLow)))) {
                        var guess = Math.max(0.01, youLanded - v);
                        setManualLow(String(guess));
                      }
                    }}
                    disabled={useAmzLow || amzLow != null || amzOffers.length > 0}
                  />
                </div>

                <div>
                  <div className="text-slate-600 mb-1">Market median delivery days typical Prime speed</div>
                  <input className="h-10 w-full rounded-xl border border-slate-300 px-3" type="number" step="1" value={mktMedianDays} onChange={function(e){ setMktMedianDays(parseInt(e.target.value)||0); }} />
                </div>

                <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                  <label className="flex gap-2 items-center">
                    <input type="checkbox" checked={assumeFBA} onChange={function(e){ setAssumeFBA(e.target.checked); }} disabled={amzOffers.length > 0 || (useAmzLow && amzLow != null)} />
                    Assume an FBA competitor at the lowest price
                  </label>
                  <label className="flex gap-2 items-center">
                    <input type="checkbox" checked={assumeMFNPrime} onChange={function(e){ setAssumeMFNPrime(e.target.checked); }} disabled={amzOffers.length > 0 || (useAmzLow && amzLow != null)} />
                    Assume an MFN Prime competitor slightly higher
                  </label>
                  <label className="flex gap-2 items-center">
                    <input type="checkbox" checked={assumeExtraFBA} onChange={function(e){ setAssumeExtraFBA(e.target.checked); }} disabled={amzOffers.length > 0 || (useAmzLow && amzLow != null)} />
                    Include another FBA competitor slightly higher
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: Results */}
          <div className="lg:sticky lg:top-4 self-start space-y-4">
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-4 border-b border-slate-200 font-medium text-slate-900">Results updates as you type</div>
              <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                <div className="col-span-2">
                  <div className="text-slate-600 mb-1">Estimated chance to win the Buy Box</div>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-semibold text-slate-900">{myPct}%</div>
                    <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden"><div className="h-full bg-emerald-500" style={pctStyle(myPct)} /></div>
                  </div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Your landed price price plus shipping</div>
                  <div className="text-slate-900 font-semibold">{fmtMoney(fin.landed, curr)}</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Gap vs lowest competitor landed</div>
                  <div className="text-slate-900 font-semibold">{fmtMoney(fin.landed - compMin, curr)}</div>
                  <div className="text-xs text-slate-500">(your price plus your shipping) minus (lowest competitor price plus their shipping)</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Net revenue after fees and VAT</div>
                  <div className="text-slate-900 font-semibold">{fmtMoney(fin.netRevenueExVAT, curr)}</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Profit per unit approximate</div>
                  <div className="text-slate-900 font-semibold">{fmtMoney(fin.profitPerUnit, curr)}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-slate-600 mb-1">Breakeven price excludes buyer shipping</div>
                  <div className="text-slate-900 font-semibold">{fmtMoney(fin.breakevenPriceExclShipping, curr)} <span className="text-slate-500 font-normal">(MAP {fmtMoney(mapP, curr)})</span></div>
                </div>

                {mapWarn && (
                  <div className="col-span-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex gap-2 items-start">
                    <AlertTriangle className="w-5 h-5 mt-0.5"/>
                    <div>Your item price is below MAP. This may trigger policy issues or Buy Box suppression.</div>
                  </div>
                )}

                <div className="col-span-2 border-t pt-3">
                  <div className="font-medium text-slate-900 mb-2">Offer probabilities live</div>
                  <ul className="space-y-1 mb-3">
                    {["You"].concat(competitors.map(function(_,i){ return "Competitor "+String(i+1); })).map(function(name, i){
                      var p = Math.round((probs[i]||0)*100);
                      return (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-36 text-slate-700 text-xs">{name}</div>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500" style={pctStyle(p)} />
                          </div>
                          <div className="w-10 text-right text-xs text-slate-700">{p}%</div>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="font-medium text-slate-900 mb-2">What contributes to your chance</div>
                  <ul className="space-y-1">
                    {factors.map(function(f, i){
                      var w = clamp(((f.value||0)+1)/2*100,0,100);
                      return (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-48 text-slate-700 text-xs">{f.label}</div>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-900" style={pctStyle(w)} />
                          </div>
                          <div className="w-16 text-right text-xs text-slate-600">{(f.value||0)>=0?"+":""}{(f.value||0).toFixed(2)}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-span-2 border-t pt-3">
                  <div className="font-medium text-slate-900 mb-1">How to get closer to about ninety five percent</div>
                  <div className="text-slate-600 text-xs mb-2">You need Delta Q about equal to {SOFT_T} multiplied by natural log nineteen which is about {deltaQForP(0.95).toFixed(2)} above the next best competitor. You currently have {myDelta.toFixed(2)}.</div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {advise.map(function(a, idx){ return (
                      <li key={idx}><span className="font-medium">{a.label}</span>{" - "}{a.covers?"this alone could reach about ninety five percent":"max impact +"+a.max.toFixed(2)}</li>
                    ); })}
                  </ul>
                </div>

                <div className="col-span-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <div className="font-medium mb-1">Field mapping for your APIs</div>
                    <ul className="list-disc pl-4">
                      <li><b>Categra:</b> VAT, COGS, MAP, default fulfillment, typical promised days, seller metrics, reputation, inventory. Wire this in <b>loadInitial</b>.</li>
                      <li><b>Amazon:</b> ListingPrice, Shipping, fulfillment flags, summary lowest landed, competitor offers. Wire this in <b>loadInitial</b>.</li>
                    </ul>
                  </div>
                </div>

                <div className="col-span-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700">
                  <div className="font-medium text-slate-900 mb-1">Developer diagnostics</div>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    {tests.map(function(t, i){ return (
                      <li key={i} className={t.pass ? "text-emerald-700" : "text-rose-700"}>
                        {t.pass ? "PASS" : "FAIL"}: {t.name} - {t.details}
                      </li>
                    ); })}
                  </ul>
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
