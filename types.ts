
export interface NFTMetadata {
  id: string;
  name: string;
  description: string;
  image: string;
  creator: string;
  owner: string;
  category: 'Art' | 'ENS' | 'Collectibles' | 'Music';
  floorPrice: number;
}

export interface Auction {
  id: string;
  nftId: string;
  startTime: number;
  endTime: number;
  status: 'Active' | 'Ended' | 'Settled';
  bidCount: number;
  confidentialHighBid?: string; // Represented as an encrypted hash in FHE context
}

export interface Bid {
  id: string;
  auctionId: string;
  bidder: string;
  encryptedAmount: string;
  timestamp: number;
  status: 'Pending' | 'Active' | 'Won' | 'Refunded';
}

export interface AIInsight {
  suggestedBidRange: string;
  marketSentiment: string;
  fairValueEstimate: string;
  rationale: string;
}
