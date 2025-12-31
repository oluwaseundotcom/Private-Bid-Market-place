
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, LayoutGrid, Search, User, Zap, Lock, EyeOff, Info, ArrowUpRight } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AuctionDetail from './components/AuctionDetail';
import Profile from './components/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auction/:id" element={<AuctionDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <footer className="border-t border-zinc-800 py-12 bg-black mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-white" />
              <span className="text-xl font-bold tracking-tight">Bidlock</span>
            </div>
            <p className="text-zinc-500 text-sm font-medium">
              &copy; 2024 Bidlock Marketplace. Powered by Zama FHE & Gemini AI.
            </p>
            <div className="flex gap-6 text-sm text-zinc-500 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Developer API</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
