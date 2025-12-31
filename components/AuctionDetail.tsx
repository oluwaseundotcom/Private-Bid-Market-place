
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Shield, Clock, Gavel, ArrowLeft, Share2, MoreHorizontal, 
  Info, Lock, BrainCircuit, AlertCircle, CheckCircle2,
  TrendingUp, Activity, RotateCcw
} from 'lucide-react';
import { MOCK_NFTS, MOCK_AUCTIONS, TREASURY_FEE_PERCENT } from '../constants';
import { NFTMetadata, Auction, AIInsight } from '../types';
import { getNFTInsights } from '../services/geminiService';
import AIAnalysis from './AIAnalysis';
import BidModal from './BidModal';

const AuctionDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [auction, setAuction] = useState<Auction | null>(null);
  const [nft, setNft] = useState<NFTMetadata | null>(null);
  const [insights, setInsights] = useState<AIInsight | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [bidSuccess, setBidSuccess] = useState(false);

  useEffect(() => {
    const foundAuction = MOCK_AUCTIONS.find(a => a.id === id);
    if (foundAuction) {
      setAuction(foundAuction);
      const foundNft = MOCK_NFTS.find(n => n.id === foundAuction.nftId);
      if (foundNft) {
        setNft(foundNft);
        loadAIInsights(foundNft);
      }
    }
  }, [id]);

  const loadAIInsights = async (nftData: NFTMetadata) => {
    setLoadingInsights(true);
    const data = await getNFTInsights(nftData);
    setInsights(data);
    setLoadingInsights(false);
  };

  if (!auction || !nft) {
    return (
      <div className="h-96 flex items-center justify-center text-zinc-500">
        Auction not found
      </div>
    );
  }

  const isENS = nft.category === 'ENS';

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase font-black text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Marketplace
        </button>
        <div className="flex gap-2">
          <button className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-white transition-all text-white">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-white transition-all text-white">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl relative min-h-[400px] flex items-center justify-center">
            {isENS ? (
               <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-zinc-950 p-12 text-center">
                  <div className="w-20 h-20 mb-8 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 shadow-2xl shadow-white/5">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-5xl font-black text-white tracking-tighter break-all lowercase mb-4">
                    {nft.name}
                  </h1>
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest">
                      ENS Domain
                    </span>
                    <span className="px-4 py-1.5 rounded-full border border-zinc-700 text-zinc-500 text-xs font-black uppercase tracking-widest">
                      ERC-721
                    </span>
                  </div>
               </div>
            ) : (
              <img 
                src={nft.image} 
                alt={nft.name} 
                className="w-full h-auto object-cover"
              />
            )}
            
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-black border border-zinc-700 px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" />
                FHE SECURED
              </span>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-6">
            <h2 className="text-xl font-black uppercase flex items-center gap-2">
              <Info className="w-5 h-5 text-white" />
              Details
            </h2>
            <p className="text-zinc-400 font-medium leading-relaxed">
              {nft.description}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-black rounded-2xl border border-zinc-800">
                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Creator</span>
                <span className="block font-mono text-sm mt-1 text-white truncate">{nft.creator}</span>
              </div>
              <div className="p-4 bg-black rounded-2xl border border-zinc-800">
                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Owner</span>
                <span className="block font-mono text-sm mt-1 text-white truncate">{nft.owner}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-black tracking-tighter uppercase">{nft.name}</h1>
                  <p className="text-zinc-500 font-black uppercase text-xs tracking-widest mt-1">{nft.category}</p>
                </div>
                <div className="bg-white text-black px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  {auction.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black p-4 rounded-2xl border border-zinc-800">
                  <span className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-black uppercase mb-2">
                    <Clock className="w-3.5 h-3.5" /> Time left
                  </span>
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-xl font-black">14</span>
                    <span className="text-xs font-black">H</span>
                    <span className="text-xl font-black ml-2">22</span>
                    <span className="text-xs font-black">M</span>
                  </div>
                </div>
                <div className="bg-black p-4 rounded-2xl border border-zinc-800">
                  <span className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-black uppercase mb-2">
                    <Shield className="w-3.5 h-3.5" /> Bids
                  </span>
                  <div className="text-xl font-black text-white">{auction.bidCount}</div>
                </div>
              </div>

              <div className="space-y-3 p-6 bg-black rounded-3xl border border-zinc-800">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-xs font-black uppercase">Floor</span>
                  <span className="text-xl font-mono font-black text-white">{nft.floorPrice} ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-xs font-black uppercase">Privacy</span>
                  <span className="flex items-center gap-1.5 text-white text-xs font-black uppercase tracking-widest">
                    <Lock className="w-3 h-3" /> FHE-256
                  </span>
                </div>
                <div className="h-px bg-zinc-800 my-2"></div>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-zinc-500">Refund Policy</span>
                  <span className="text-white flex items-center gap-1">
                    <RotateCcw className="w-3.5 h-3.5" /> 100% Guaranteed
                  </span>
                </div>
              </div>

              {bidSuccess ? (
                <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                  <div>
                    <h4 className="font-black uppercase text-xs">Bid Recorded</h4>
                    <p className="text-[10px] text-zinc-500 font-bold">Encrypted and confirmed.</p>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setIsBidModalOpen(true)}
                  className="w-full bg-white text-black hover:bg-zinc-200 py-4 rounded-2xl font-black text-lg uppercase transition-all shadow-xl shadow-white/5"
                >
                  <Gavel className="w-5 h-5 inline mr-2" />
                  Place Bid
                </button>
              )}

              <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-500 bg-black p-4 rounded-2xl border border-zinc-800 uppercase leading-tight">
                <AlertCircle className="w-4 h-4 text-white flex-shrink-0" />
                <p>Confidential sorting via FHE. All losing bids are refunded 100%. Winner pays 5% fee to treasury.</p>
              </div>
            </div>
          </div>

          <AIAnalysis 
            nft={nft} 
            insights={insights} 
            loading={loadingInsights} 
          />
        </div>
      </div>

      <BidModal 
        isOpen={isBidModalOpen} 
        onClose={() => setIsBidModalOpen(false)}
        nft={nft}
        onSuccess={() => {
          setBidSuccess(true);
          setAuction(prev => prev ? { ...prev, bidCount: prev.bidCount + 1 } : null);
        }}
      />
    </div>
  );
};

export default AuctionDetail;
