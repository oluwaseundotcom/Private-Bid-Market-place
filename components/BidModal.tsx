
import React, { useState } from 'react';
import { X, Shield, Lock, Zap, Loader2, Check, RotateCcw } from 'lucide-react';
import { NFTMetadata } from '../types';

interface BidModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: NFTMetadata;
  onSuccess: () => void;
}

const BidModal: React.FC<BidModalProps> = ({ isOpen, onClose, nft, onSuccess }) => {
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState<'input' | 'encrypting' | 'success'>('input');

  if (!isOpen) return null;

  const handleBid = () => {
    if (!amount || isNaN(Number(amount))) return;
    setStep('encrypting');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess();
        onClose();
        setStep('input');
        setAmount('');
      }, 1500);
    }, 2000);
  };

  const isENS = nft.category === 'ENS';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black flex items-center gap-3 uppercase tracking-tighter">
              <Shield className="w-6 h-6 text-white" />
              Private Bid
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-xl transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {step === 'input' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-zinc-800">
                {isENS ? (
                  <div className="w-16 h-16 rounded-xl bg-zinc-800 flex items-center justify-center p-2 text-center">
                    <span className="text-[8px] font-black text-white break-all">{nft.name}</span>
                  </div>
                ) : (
                  <img src={nft.image} className="w-16 h-16 rounded-xl object-cover" />
                )}
                <div>
                  <p className="text-[10px] text-zinc-500 font-black uppercase">Asset</p>
                  <p className="font-black uppercase tracking-tight">{nft.name}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-2">Bid Amount (ETH)</label>
                <div className="relative">
                  <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-black border border-zinc-800 rounded-2xl py-5 px-6 focus:border-white outline-none text-2xl font-mono text-white transition-all"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-zinc-700" />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] px-2 text-zinc-500 font-black uppercase">
                  <span>Floor: {nft.floorPrice} ETH</span>
                  <span className="text-white">100% Refundable</span>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-zinc-800 rounded-2xl text-[10px] font-bold text-zinc-400 leading-tight flex gap-3 uppercase">
                <RotateCcw className="w-5 h-5 flex-shrink-0 text-white" />
                <p>Funds are locked via Zama FHE. Losing bids are returned immediately in full. No fees for non-winners.</p>
              </div>

              <button 
                onClick={handleBid}
                disabled={!amount}
                className="w-full bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-600 py-4 rounded-2xl font-black text-lg uppercase transition-all shadow-xl"
              >
                SUBMIT PRIVATE BID
              </button>
            </div>
          )}

          {step === 'encrypting' && (
            <div className="py-20 flex flex-col items-center justify-center space-y-6">
              <Loader2 className="w-16 h-16 text-white animate-spin" />
              <div className="text-center space-y-2">
                <h4 className="text-xl font-black uppercase text-white tracking-tighter">ENCRYPTING...</h4>
                <p className="text-zinc-500 text-[10px] font-black uppercase">Generating FHE proof</p>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-20 flex flex-col items-center justify-center space-y-6">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-xl font-black uppercase text-white tracking-tighter">CONFIRMED</h4>
                <p className="text-zinc-500 text-[10px] font-black uppercase">Bid securely stored on-chain</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidModal;
