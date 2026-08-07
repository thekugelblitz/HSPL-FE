import React, { useState, useEffect } from 'react';
import { Sparkles, Gift, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    setClaimed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-white/20 rounded-3xl p-8 shadow-2xl text-white overflow-hidden glow-card">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {claimed ? (
          <div className="py-8 text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold">Coupon Code Activated!</h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto">
              Use code <strong className="text-yellow-400 font-mono text-base px-2 py-1 bg-yellow-400/10 rounded border border-yellow-400/20">EXTRA15</strong> at checkout to claim your additional 15% discount + free migration.
            </p>
            <a 
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all text-sm shadow-lg shadow-emerald-500/20"
            >
              <span>Apply Code & Choose Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" /> Special Departure Offer
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Wait! Don't Leave Empty Handed!
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Get an <strong>Extra 15% OFF</strong> on any hosting plan + <strong>Free Zero-Downtime Migration Assistance</strong> from our senior Linux engineers.
            </p>

            <form onSubmit={handleClaim} className="space-y-3">
              <div>
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email to reveal promo code..." 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 font-bold text-sm text-white transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Extra 15% OFF Discount</span>
              </button>
            </form>

            <p className="text-[11px] text-zinc-500 text-center">
              30-Day Money-Back Guarantee • Instant Setup • No Obligation
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
