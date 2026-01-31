interface BuyBoxCalculationDataset {
  // 1. ELIGIBILITY DATA
  isEligible: boolean;
  // Source: From Amazon API's pricing eligibility check or seller metrics
  // Calculation: Check if seller meets Amazon's requirements (ODR < 1%, LSR < 4%, etc.)

  // 2. OWNERSHIP DATA
  owner?: 'YOU' | 'COMPETITOR' | string;
  // Source: From Amazon's current Buy Box winner API response
  // Values: 'YOU', 'COMPETITOR', or specific seller ID

  // 3. YOUR PRICING DATA
  yourLanded: number;
  // Source: itemPrice + shippingToBuyer from your pricing records
  // Calculation: variant.prices[].price + variant.shipping (if applicable)

  currency: string;
  // Source: variant.prices[].currency.currency or marketplace currency
  // Example: 'USD', 'EUR', 'GBP'

  // 4. COMPETITOR PRICING DATA
  lowestLanded?: number;
  // Source: From Amazon's competitive pricing API (Get Competitive Pricing for ASIN)
  // This is the lowest landed price among all competitors

  hasCompetitors: boolean;
  // Calculation: competitors.length > 0
  // Source: Derived from competitors array

  gapWithLowest?: number;
  // Calculation: yourLanded - lowestLanded
  // Can be positive (you're more expensive) or negative (you're cheaper)

  // 5. FULFILLMENT DATA
  fulfillment?: 'FBA' | 'MFN' | 'SFP';
  // Source: variant.marketplaceData.isFba or fulfillment settings
  // Values:
  //   - 'FBA' (Fulfilled by Amazon)
  //   - 'MFN' (Merchant Fulfilled Network)
  //   - 'SFP' (Seller Fulfilled Prime)

  isPrime?: boolean;
  // Source: variant.marketplaceData.isPrime or fulfillment?.isPrime
  // Calculation: fulfillment === 'FBA' || fulfillment === 'SFP'

  // 6. COMPETITORS DATA (Array of competitor offers)
  competitors?: Array<{
    sellerId?: string;
    // Source: From Amazon's competitive pricing API

    pricing?: {
      landed?: {
        amount: number; // Landed price (item + shipping)
        currency: string; // Currency code
      };
      item?: {
        amount: number; // Item price only
        currency: string;
      };
    };
    // Source: From Amazon's Get Competitive Pricing API

    fulfillment?: {
      type?: 'FBA' | 'MFN' | 'SFP';
      isPrime?: boolean;
    };
    // Source: From Amazon's offer listings API
  }>;

  // 7. OFFER COUNT
  offerCount?: number;
  // Source: Total number of offers for this ASIN from Amazon API
  // Used to determine if Buy Box is suppressed (offerCount === 0)
}
