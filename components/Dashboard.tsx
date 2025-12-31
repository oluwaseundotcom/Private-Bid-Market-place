
import React, { useState } from 'react';
import { MOCK_NFTS, MOCK_AUCTIONS } from '../constants';
import NFTCard from './NFTCard';
import { Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Art' | 'ENS'>('All');

  const filteredAuctions = MOCK_AUCTIONS.filter(auction => {
    const nft = MOCK_NFTS.find(n => n.id === auction.nftId);
    if (!nft) return false;
    if (filter === 'All') return true;
    return nft.category === filter;
  });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-zinc-700 text-white text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Zama FHE Confidential Auctions
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            PRIVATE <span className="text-white bg-black px-2">BIDDING</span> MARKETPLACE
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl font-medium">
            Confidentiality by design. Use Fully Homomorphic Encryption to keep your bid amounts secret while ensuring the highest bidder wins fairly.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-white hover:bg-zinc-200 text-black px-8 py-3 rounded-2xl font-black transition-all">
              Browse Active
            </button>
            <button className="bg-black hover:bg-zinc-800 text-white border border-zinc-700 px-8 py-3 rounded-2xl font-black transition-all">
              Learn FHE
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-sm aspect-square relative group">
          <img 
            src="https://picsum.photos/id/10/800/800" 
            alt="Hero NFT" 
            className="w-full h-full object-cover rounded-3xl border border-zinc-800 grayscale shadow-2xl transition-transform duration-500"
          />
        </div>
      </section>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-black tracking-tight uppercase">Trending Auctions</h2>
        <div className="flex items-center gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
          {(['All', 'Art', 'ENS'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                filter === cat ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="w-px h-6 bg-zinc-800 mx-1"></div>
          <button className="p-1.5 text-zinc-400 hover:text-white transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAuctions.map((auction) => {
          const nft = MOCK_NFTS.find(n => n.id === auction.nftId);
          if (!nft) return null;
          return <NFTCard key={auction.id} auction={auction} nft={nft} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
