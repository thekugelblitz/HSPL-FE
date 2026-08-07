import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export function StickyUrgencyBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Special Offer Announcement" className="bg-zinc-950/95 text-foreground text-xs py-2 px-3 sm:px-4 relative z-50 border-b border-emerald-500/20 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between gap-2 max-w-screen-xl">
        
        {/* Desktop View (>= 640px) */}
        <div className="hidden sm:flex items-center gap-2 font-medium min-w-0">
          <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-extrabold px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider shrink-0">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>75% OFF</span>
          </span>
          <span className="text-xs font-semibold text-zinc-300 truncate">
            Limited Time: Save 75% on Cloud NVMe Hosting + Free Domain
          </span>
        </div>

        {/* Mobile View (< 640px) - Zero Truncation, Clean Single Line */}
        <div className="flex sm:hidden items-center gap-1.5 font-bold text-xs text-zinc-200 whitespace-nowrap min-w-0">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>75% OFF Cloud Hosting</span>
        </div>

        {/* Right Side: CTA & Close */}
        <div className="flex items-center gap-2 shrink-0">
          <a 
            href="/pricing" 
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-extrabold text-xs transition-colors py-0.5 px-2 rounded-md hover:bg-emerald-500/10 whitespace-nowrap"
          >
            <span>Claim Deal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button 
            onClick={() => setIsVisible(false)} 
            className="p-1 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400 hover:text-zinc-200"
            aria-label="Close Announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
