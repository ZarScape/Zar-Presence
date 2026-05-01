import React from 'react';


export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
      <nav className="max-w-5xl mx-auto flex items-center justify-between glass rounded-full px-8 py-4 border border-white/5 shadow-2xl backdrop-blur-2xl">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/Zar-Presence/logo.png" alt="ZarPresence Logo" className="w-7 h-7 object-contain" />
          <span className="text-lg font-bold tracking-tight brand-font">ZarPresence</span>
        </a>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Features</a>
          <a href="#download" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Download</a>
          <a 
            href="https://github.com/ZarScape/ZarPresence" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            Github
          </a>
        </div>

        {/* Call to Action */}
        <div className="flex items-center">
          <a href="#download" className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-primary/20">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
};
