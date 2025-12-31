
import React from 'react';
import { BrainCircuit, TrendingUp, Sparkles, Activity, ShieldQuestion } from 'lucide-react';
import { AIInsight, NFTMetadata } from '../types';

interface AIAnalysisProps {
  nft: NFTMetadata;
  insights: AIInsight | null;
  loading: boolean;
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({ nft, insights, loading }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <BrainCircuit className="w-24 h-24 text-white" />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-white" />
        <h3 className="text-xl font-black uppercase tracking-tighter">Gemini Intelligence</h3>
      </div>

      {loading ? (
        <div className="space-y-4 py-4">
          <div className="h-4 bg-zinc-800 rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-zinc-800 rounded animate-pulse w-1/2"></div>
          <div className="h-20 bg-zinc-800 rounded animate-pulse w-full"></div>
        </div>
      ) : insights ? (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3" /> Sentiment
              </span>
              <p className="font-black text-white uppercase text-sm">{insights.marketSentiment}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest flex items-center gap-1.5">
                <Activity className="w-3 h-3" /> Value
              </span>
              <p className="font-black text-white uppercase text-sm">{insights.fairValueEstimate}</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-white">
            <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest block mb-1">Target Zone</span>
            <p className="text-lg font-black text-black tracking-tight uppercase">{insights.suggestedBidRange}</p>
          </div>

          <div className="space-y-2">
             <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest flex items-center gap-1.5">
                <ShieldQuestion className="w-3 h-3" /> Rationale
              </span>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed italic">
                "{insights.rationale}"
              </p>
          </div>
        </div>
      ) : (
        <div className="text-zinc-500 text-xs font-black uppercase">Analysis Unavailable</div>
      )}
    </div>
  );
};

export default AIAnalysis;
