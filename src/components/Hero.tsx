import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, ShieldCheck } from 'lucide-react';
import { useVersion } from '../hooks/useVersion';

export const Hero: React.FC = () => {
  const { data, loading } = useVersion();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Generated Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/20 via-[#0d1117]/60 to-[#0d1117] z-10" />
        <img 
          src="/Zar-Presence/hero-bg.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-8">
            <ShieldCheck className="w-3 h-3" />
            {loading ? 'CHECKING VERSION...' : `V${data?.version} NOW AVAILABLE`}
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tight mb-8 leading-none brand-font">
            <span className="text-white text-echo">Zar</span>
            <span className="text-[#007BFF] text-echo">Presence</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed">
            Modern Discord Rich Presence for the power user. <br />
            Automate your activity with privacy, speed, and a sleek interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#download" className="btn-primary flex items-center gap-3 group px-10">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Now
            </a>
            <a href="#features" className="btn-secondary flex items-center gap-3 px-10">
              Explore Features
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
