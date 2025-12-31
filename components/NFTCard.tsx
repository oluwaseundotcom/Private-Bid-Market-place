
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Gavel, User } from 'lucide-react';
import { NFTMetadata, Auction } from '../types';

interface NFTCardProps {
  nft: NFTMetadata;
  auction: Auction;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, auction }) => {
  const isENS = nft.category === 'ENS';

  return (
    <Link to={`/auction/${auction.id}`} className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-white transition-all flex flex-col">
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-700 text-[10px] font-black uppercase tracking-widest text-white">
          <Shield className="w-3 h-3" />
          Confidential
        </div>
      </div>

      {/* Image Wrapper */}
      <div className="relative aspect-square overflow-hidden bg-black flex items-center justify-center">
        {isENS ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-zinc-900 text-center border-b border-zinc-800">
             <div className="w-12 h-12 mb-4 rounded-full border border-white/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
             </div>
             <span className="text-xl font-black text-white tracking-tight break-all lowercase">
               {nft.name}
             </span>
             <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
               ENS Domain
             </span>
          </div>
        ) : (
          <img 
            src={nft.image} 
            alt={nft.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="w-full bg-white text-black py-3 rounded-xl font-black flex items-center justify-center gap-2 uppercase text-xs">
            <Gavel className="w-4 h-4" />
            Place Bid
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-bold mb-1 uppercase tracking-tighter">
            <User className="w-3 h-3" />
            {nft.creator.slice(0, 10)}
          </div>
          <h3 className="text-lg font-black truncate group-hover:underline transition-all uppercase tracking-tight">
            {nft.name}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-t border-zinc-800 mt-auto">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-0.5">Floor</span>
            <span className="font-mono font-bold text-white">{nft.floorPrice} ETH</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-0.5">Bids</span>
            <span className="font-mono font-bold text-white">{auction.bidCount} Hidden</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
           <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-black uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>Ends in 14h</span>
           </div>
           <div className="bg-white/10 px-2 py-1 rounded-lg">
              <Shield className="w-3 h-3 text-white" />
           </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
