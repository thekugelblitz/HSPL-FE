import React, { useState } from 'react';
import { DollarSign, ShieldCheck, ArrowRight, Zap, Check } from 'lucide-react';

export function SavingsCalculator() {
  const [siteCount, setSiteCount] = useState(5);
  const [currentCostPerSite, setCurrentCostPerSite] = useState(15);

  const currentAnnualTotal = siteCount * currentCostPerSite * 12;
  const hostingSpellAnnualTotal = 2.99 * 12 * (siteCount > 5 ? Math.ceil(siteCount / 5) : 1);
  const annualSavings = Math.max(0, currentAnnualTotal - hostingSpellAnnualTotal);
  const savingsPercent = currentAnnualTotal > 0 ? Math.round((annualSavings / currentAnnualTotal) * 100) : 0;

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-10 border border-border/80 glow-card shadow-2xl relative overflow-hidden bg-card/90 backdrop-blur-xl my-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-extrabold uppercase tracking-wider mb-3">
          <Zap className="w-4 h-4" /> Total Cost of Ownership (TCO) Calculator
        </div>
        <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground">
          See How Much You Save by Switching
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-2">
          Compare the cost of your current hosting provider vs. HostingSpell's all-inclusive NVMe cloud platform.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Sliders (7 cols) */}
        <div className="lg:col-span-7 space-y-6 bg-muted/20 p-6 sm:p-8 rounded-2xl border border-border/60">
          <div>
            <div className="flex items-center justify-between text-xs font-extrabold text-foreground mb-2">
              <span>Number of Hosted Websites:</span>
              <span className="text-lg font-black text-primary font-mono">{siteCount} Websites</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={siteCount}
              onChange={(e) => setSiteCount(Number(e.target.value))}
              className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-extrabold text-foreground mb-2">
              <span>Current Price Paid Per Site (Monthly):</span>
              <span className="text-lg font-black text-emerald-400 font-mono">${currentCostPerSite}/mo</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={currentCostPerSite}
              onChange={(e) => setCurrentCostPerSite(Number(e.target.value))}
              className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div className="pt-2 text-xs text-muted-foreground font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Includes Free Zero-Downtime Migration Managed by Expert Engineers</span>
          </div>
        </div>

        {/* Savings Display (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-card border border-emerald-500/30 p-6 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-full shadow-md inline-block mb-3">
              SAVE UP TO {savingsPercent}% ANNUALLY 💰
            </span>

            <div className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider mb-1">
              Your Annual Total Savings
            </div>

            <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight">
              ${annualSavings.toLocaleString()}
              <span className="text-sm text-muted-foreground font-normal"> /year</span>
            </div>

            <div className="text-xs text-muted-foreground font-semibold mt-3 space-y-1">
              <div>Other Hosts: <span className="line-through text-destructive">${currentAnnualTotal.toLocaleString()}/yr</span></div>
              <div>HostingSpell: <strong className="text-emerald-400 font-mono font-black">${hostingSpellAnnualTotal.toFixed(2)}/yr</strong></div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-500/20">
            <a
              href="https://manage.hostingspell.com"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-between transition-all shadow-lg shadow-emerald-500/25 group"
            >
              <span>Switch & Save Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
