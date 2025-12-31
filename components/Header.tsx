
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Search, User, LayoutGrid, Wallet } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Marketplace', path: '/', icon: LayoutGrid },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold tracking-tighter text-white">Bidlock</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors" />
          <input 
            type="text" 
            placeholder="Search NFTs, ENS domains..." 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-2.5 pl-11 pr-4 focus:outline-none focus:border-white transition-all text-sm text-white"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.path 
                  ? 'bg-white text-black' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{link.name}</span>
            </Link>
          ))}
          
          <button className="ml-2 flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-xl text-sm font-bold transition-all">
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
