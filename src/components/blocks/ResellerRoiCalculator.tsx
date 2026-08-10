import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Shield, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export function ResellerRoiCalculator() {
  const [clientCount, setClientCount] = useState(25);
  const [pricePerClient, setPricePerClient] = useState(15);

  const monthlyRevenue = clientCount * pricePerClient;
  const resellerCost = clientCount <= 25 ? 12.99 : clientCount <= 50 ? 24.99 : 49.99;
  const monthlyProfit = Math.max(0, monthlyRevenue - resellerCost);
  const annualProfit = monthlyProfit * 12;
  const marginPercent = monthlyRevenue > 0 ? Math.round((monthlyProfit / monthlyRevenue) * 100) : 0;

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-10 border border-indigo-500/30 glow-card shadow-2xl relative overflow-hidden bg-card/90 backdrop-blur-xl my-12">
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400"></div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-extrabold uppercase tracking-wider mb-3">
          <TrendingUp className="w-4 h-4" /> Agency & Reseller Profit Calculator
        </div>
        <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground">
          Estimate Your Monthly Net Profit
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-2">
          Calculate your revenue potential selling 100% white-labeled cPanel hosting under your own brand.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6 bg-muted/20 p-6 sm:p-8 rounded-2xl border border-border/60">
          {/* Slider 1: Number of Clients */}
          <div>
            <div className="flex items-center justify-between text-xs font-extrabold text-foreground mb-2">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-400" /> Active Client Accounts:
              </span>
              <span className="text-lg font-black text-indigo-400 font-mono">{clientCount} Clients</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={clientCount}
              onChange={(e) => setClientCount(Number(e.target.value))}
              className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-bold mt-1">
              <span>5 Clients</span>
              <span>50 Clients</span>
              <span>100 Clients</span>
            </div>
          </div>

          {/* Slider 2: Price Per Client */}
          <div>
            <div className="flex items-center justify-between text-xs font-extrabold text-foreground mb-2">
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-400" /> Your Price Charged Per Client:
              </span>
              <span className="text-lg font-black text-emerald-400 font-mono">${pricePerClient}/mo</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={pricePerClient}
              onChange={(e) => setPricePerClient(Number(e.target.value))}
              className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-bold mt-1">
              <span>$5/mo</span>
              <span>$25/mo</span>
              <span>$50/mo</span>
            </div>
          </div>

          <div className="pt-2 text-xs text-muted-foreground font-medium flex items-center gap-2">
            <Shield className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Includes 100% White-Labeled WHM/cPanel & Private Custom Nameservers</span>
          </div>
        </div>

        {/* Profit Output Display (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-card border border-indigo-500/30 p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-full shadow-md">
                {marginPercent}% Profit Margin
              </span>
              <span className="text-xs font-mono font-bold text-muted-foreground">
                Cost: ${resellerCost.toFixed(2)}/mo
              </span>
            </div>

            <div className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider mb-1">
              Estimated Net Monthly Profit
            </div>

            <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight">
              ${monthlyProfit.toFixed(2)}
              <span className="text-sm text-muted-foreground font-normal"> /mo</span>
            </div>

            <div className="text-xs text-muted-foreground font-semibold mt-2">
              Annual Earnings: <strong className="text-foreground font-mono font-black">${annualProfit.toLocaleString()}/yr</strong>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-indigo-500/20 space-y-3">
            <a
              href="#plans"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center justify-between transition-all shadow-lg shadow-indigo-500/25 group"
            >
              <span>Launch Reseller Business</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
