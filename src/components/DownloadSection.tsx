import React from 'react';
import { Download, Globe, Clock, Info } from 'lucide-react';
import { useVersion } from '../hooks/useVersion';

export const DownloadSection: React.FC = () => {
  const { data, loading } = useVersion();

  return (
    <section id="download" className="py-32 px-6 bg-gradient-to-b from-brand-dark to-black">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Download Main */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to <span className="text-gradient">Upgrade?</span></h2>
              <p className="text-white/60 mb-10 leading-relaxed max-w-md">
                Get the latest version of ZarPresence. Always open-source, always free.
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href={data?.platforms['windows-x86_64'].url || '#'} 
                  className={`btn-primary flex items-center justify-center gap-3 ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <Download className="w-5 h-5" />
                  {loading ? 'Fetching Latest...' : `Download for Windows (V${data?.version})`}
                </a>
                
                <a 
                  href="https://chromewebstore.google.com/detail/cjajceiejgjpmkbcokjhfcpemaoiakjh" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-secondary flex items-center justify-center gap-3"
                >
                  <Globe className="w-5 h-5" />
                  Install Browser Extension
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Open Source
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Latest Update: {data ? new Date(data.pub_date).toLocaleDateString() : '...'}
                </div>
              </div>
            </div>

            {/* Version History / Notes */}
            <div className="bg-white/5 p-8 md:p-16 border-l border-white/5">
              <div className="flex items-center gap-2 mb-8">
                <Info className="w-5 h-5 text-brand-primary" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-white/80">Release Notes</h3>
              </div>

              <div className="space-y-8">
                {data?.history.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-brand-primary/20">
                    <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(0,209,255,0.8)]" />
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-brand-primary">V{item.version}</span>
                      <span className="text-xs text-white/20">{item.date}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.notes}
                    </p>
                  </div>
                ))}
                
                {!data && loading && (
                  <div className="animate-pulse space-y-4">
                    <div className="h-20 bg-white/5 rounded-2xl" />
                    <div className="h-20 bg-white/5 rounded-2xl" />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
