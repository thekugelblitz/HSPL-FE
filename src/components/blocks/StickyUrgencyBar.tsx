import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, ArrowRight, X } from 'lucide-react';

export function StickyUrgencyBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-xs py-2 px-4 relative z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between max-w-screen-xl">
        <div className="flex items-center gap-2 font-medium overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-yellow-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider shrink-0">
            <Sparkles className="w-3 h-3" /> FLASH SALE
          </span>
          <span className="truncate hidden sm:inline">
            Get <strong>75% OFF</strong> Cloud NVMe Hosting + Free Domain & Free Migration!
          </span>
          <span className="truncate sm:hidden">
            <strong>75% OFF</strong> NVMe Hosting + Free Migration!
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1 font-mono font-bold bg-black/20 px-2 py-0.5 rounded text-[11px]">
            <Clock className="w-3 h-3 text-yellow-300" />
            <span>{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>

          <a 
            href="/pricing" 
            className="inline-flex items-center gap-1 bg-white text-blue-700 hover:bg-yellow-300 hover:text-slate-950 font-bold px-3 py-1 rounded-md transition-all text-xs shadow"
          >
            <span>Claim Discount</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button 
            onClick={() => setIsVisible(false)} 
            className="p-1 hover:bg-white/20 rounded transition-colors text-white/80"
            aria-label="Close Announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
