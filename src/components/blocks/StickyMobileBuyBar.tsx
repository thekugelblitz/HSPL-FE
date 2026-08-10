import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export function StickyMobileBuyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-zinc-950/95 backdrop-blur-xl border-t border-emerald-500/30 md:hidden shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-black text-white">
            <span className="bg-emerald-500 text-slate-950 text-[9px] font-black uppercase px-1.5 py-0.5 rounded">75% OFF</span>
            <span className="truncate">NVMe Cloud Hosting</span>
          </div>
          <div className="text-[11px] text-emerald-400 font-extrabold font-mono mt-0.5">
            $1.29<span className="text-[9px] text-zinc-400 font-normal">/mo</span> • Free Domain
          </div>
        </div>

        <a
          href="/pricing"
          className="shrink-0 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-black text-xs shadow-lg shadow-primary/30 flex items-center gap-1 hover:opacity-90 transition-all"
        >
          <span>Claim Deal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
