
import React from 'react';
import { User, Shield, Gavel, Wallet, Grid, List, Settings, History, RotateCcw, CheckCircle2 } from 'lucide-react';
import { MOCK_NFTS } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Banner */}
      <div className="relative h-48 sm:h-64 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 overflow-hidden">
        <div className="absolute -bottom-10 left-10 w-32 h-32 rounded-3xl bg-black border-4 border-zinc-900 overflow-hidden flex items-center justify-center shadow-2xl">
           <User className="w-16 h-16 text-zinc-800" />
        </div>
      </div>

      {/* Header */}
      <div className="px-10 pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
            0X71C...3E41
            <span className="bg-white text-black text-[10px] px-2 py-0.5 rounded font-black uppercase">PRO</span>
          </h1>
          <p className="text-zinc-500 mt-2 font-mono text-xs uppercase font-bold tracking-widest">Collector since 2024</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-white transition-all font-black uppercase text-xs">
            <Settings className="w-4 h-4" /> Settings
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-xl hover:bg-zinc-200 transition-all font-black uppercase text-xs">
            <Wallet className="w-4 h-4" /> Wallet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-4">
           <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-4">
              <h3 className="font-black text-zinc-500 text-[10px] uppercase tracking-widest">Statistics</h3>
              <div className="space-y-4 font-bold uppercase text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Bids</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Wins</span>
                  <span>7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Active</span>
                  <span className="text-white">12</span>
                </div>
              </div>
           </div>

           <div className="bg-black border border-zinc-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-4 h-4" />
                <h3 className="font-black text-[10px] uppercase tracking-widest">Privacy Integrity</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase">Encryption Rate</span>
                  <span className="text-white font-black">100%</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full">
                   <div className="w-full h-full bg-white rounded-full"></div>
                </div>
              </div>
           </div>
        </div>

        <div className="md:col-span-3 space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex gap-8 font-black uppercase text-xs tracking-widest">
              <button className="text-white border-b-2 border-white pb-4">Activity</button>
              <button className="text-zinc-500 hover:text-white pb-4 transition-colors">Owned</button>
              <button className="text-zinc-500 hover:text-white pb-4 transition-colors">History</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group">
                 <div className="aspect-[16/9] overflow-hidden">
                    {MOCK_NFTS[3].category === 'ENS' ? (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-950 p-6 opacity-60 grayscale">
                        <span className="text-xl font-black text-white">{MOCK_NFTS[3].name}</span>
                      </div>
                    ) : (
                      <img src={MOCK_NFTS[3].image} className="w-full h-full object-cover opacity-60 grayscale" />
                    )}
                 </div>
                 <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-black text-lg uppercase tracking-tighter">{MOCK_NFTS[3].name}</h4>
                      <div className="flex items-center gap-1.5 bg-black px-2 py-1 rounded text-[10px] font-black text-white uppercase tracking-widest border border-zinc-800">
                         <RotateCcw className="w-3 h-3" /> REFUNDED
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-zinc-800 text-[10px] font-black uppercase tracking-widest">
                       <span className="text-zinc-500">Result</span>
                       <span className="text-white">OUTBID</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                       <span className="text-zinc-500">Status</span>
                       <span className="text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 100% RETURNED
                       </span>
                    </div>
                 </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group border-white/20">
                 <div className="aspect-[16/9] overflow-hidden">
                    {MOCK_NFTS[0].category === 'ENS' ? (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-950 p-6">
                        <span className="text-xl font-black text-white">{MOCK_NFTS[0].name}</span>
                      </div>
                    ) : (
                      <img src={MOCK_NFTS[0].image} className="w-full h-full object-cover group-hover:opacity-100 transition-all" />
                    )}
                 </div>
                 <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-black text-lg uppercase tracking-tighter">{MOCK_NFTS[0].name}</h4>
                      <div className="flex items-center gap-1.5 bg-white text-black px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                         <Lock className="w-3 h-3" /> ACTIVE
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-zinc-800 text-[10px] font-black uppercase tracking-widest">
                       <span className="text-zinc-500">Bid Amount</span>
                       <span className="text-white italic">PRIVATE</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                       <span className="text-zinc-500">Refund Lock</span>
                       <span className="text-white flex items-center gap-1.5 underline decoration-zinc-700 underline-offset-4">
                          SECURED
                       </span>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
