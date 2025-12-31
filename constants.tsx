
import { NFTMetadata, Auction } from './types';

export const MOCK_NFTS: NFTMetadata[] = [
  {
    id: 'nft-1',
    name: 'Bored Ape Yacht Club #9312',
    description: 'A legendary collectible from the BAYC collection.',
    image: 'https://picsum.photos/id/101/600/600',
    creator: '0x71C...3E41',
    owner: '0x123...ABCD',
    category: 'Art',
    floorPrice: 42.5
  },
  {
    id: 'nft-2',
    name: 'vitalik.eth',
    description: 'Premium 7-letter ENS domain for the founder of Ethereum.',
    image: 'https://picsum.photos/id/102/600/600',
    creator: 'ENS Registrar',
    owner: '0x888...9999',
    category: 'ENS',
    floorPrice: 1500
  },
  {
    id: 'nft-3',
    name: 'CyberPunk #4451',
    description: 'Ultra rare punk from the OG 2017 collection.',
    image: 'https://picsum.photos/id/103/600/600',
    creator: 'Larva Labs',
    owner: '0xABC...DEF0',
    category: 'Art',
    floorPrice: 78.2
  },
  {
    id: 'nft-4',
    name: 'Doodles #772',
    description: 'Community-driven collectibles featuring art by Burnt Toast.',
    image: 'https://picsum.photos/id/104/600/600',
    creator: 'Doodles',
    owner: '0x555...6666',
    category: 'Art',
    floorPrice: 5.4
  },
  {
    id: 'nft-5',
    name: 'metaverse.eth',
    description: 'The definitive ENS name for the future of the internet.',
    image: 'https://picsum.photos/id/105/600/600',
    creator: 'ENS Registrar',
    owner: '0x999...8888',
    category: 'ENS',
    floorPrice: 250
  }
];

export const MOCK_AUCTIONS: Auction[] = [
  {
    id: 'auc-1',
    nftId: 'nft-1',
    startTime: Date.now() - 3600000,
    endTime: Date.now() + 86400000,
    status: 'Active',
    bidCount: 14
  },
  {
    id: 'auc-2',
    nftId: 'nft-2',
    startTime: Date.now() - 7200000,
    endTime: Date.now() + 172800000,
    status: 'Active',
    bidCount: 3
  },
  {
    id: 'auc-3',
    nftId: 'nft-3',
    startTime: Date.now() - 100000,
    endTime: Date.now() + 50000,
    status: 'Active',
    bidCount: 27
  }
];

export const TREASURY_FEE_PERCENT = 0.05;
