import React from 'react';
import { Code, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src="/Zar-Presence/logo.png" alt="ZarPresence Logo" className="w-6 h-6 object-contain" />
            <span className="font-bold tracking-tight brand-font">ZarPresence</span>
          </div>
          <p className="text-white/20 text-sm max-w-xs text-center md:text-left">
            Modern Discord Rich Presence, redefined for the next generation of power users.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/ZarScape/ZarPresence" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Code className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-1.5 text-xs text-white/30 font-medium">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by <a href="https://github.com/ZarScape" className="text-white/60 hover:text-brand-primary">ZarScape</a>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/10">
            © {new Date().getFullYear()} ZarPresence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
