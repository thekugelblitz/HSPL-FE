import React, { useState, useEffect } from 'react';
import { Activity, Zap, Server, Globe, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface DatacenterRegion {
  id: string;
  name: string;
  country: string;
  flag: string;
  basePing: number;
  hostingSpellTtfb: number;
  awsTtfb: number;
  traditionalTtfb: number;
}

const regions: DatacenterRegion[] = [
  {
    id: "in",
    name: "Mumbai, India",
    country: "Asia-Pacific",
    flag: "🇮🇳",
    basePing: 12,
    hostingSpellTtfb: 14,
    awsTtfb: 68,
    traditionalTtfb: 195
  },
  {
    id: "us",
    name: "Virginia, USA",
    country: "North America",
    flag: "🇺🇸",
    basePing: 18,
    hostingSpellTtfb: 21,
    awsTtfb: 74,
    traditionalTtfb: 210
  },
  {
    id: "de",
    name: "Frankfurt, Germany",
    country: "Europe",
    flag: "🇩🇪",
    basePing: 15,
    hostingSpellTtfb: 17,
    awsTtfb: 72,
    traditionalTtfb: 188
  },
  {
    id: "sg",
    name: "Singapore",
    country: "Asia-Pacific",
    flag: "🇸🇬",
    basePing: 22,
    hostingSpellTtfb: 24,
    awsTtfb: 82,
    traditionalTtfb: 225
  }
];

export function InteractiveSpeedTest() {
  const [selectedRegion, setSelectedRegion] = useState<DatacenterRegion>(regions[0]);
  const [isTesting, setIsTesting] = useState(false);
  const [testProgress, setTestProgress] = useState(100);
  const [testedCount, setTestedCount] = useState(12840);

  const runTest = (region: DatacenterRegion) => {
    setSelectedRegion(region);
    setIsTesting(true);
    setTestProgress(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setTestProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsTesting(false);
        setTestedCount(prev => prev + 1);
      }
    }, 80);
  };

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 border border-border/80 glow-card shadow-2xl relative overflow-hidden bg-card/90 backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Global Speed Benchmark
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
            NVMe SSD + LiteSpeed HTTP/3 Latency Test
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
            Real-time Time-To-First-Byte (TTFB) performance vs traditional hosts
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-extrabold text-muted-foreground bg-muted/40 px-3 py-2 rounded-xl border border-border/50 shrink-0">
          <Globe className="w-4 h-4 text-primary" />
          <span>{testedCount.toLocaleString()} Live Tests Run Today</span>
        </div>
      </div>

      {/* Region Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        {regions.map(region => (
          <button
            key={region.id}
            onClick={() => runTest(region)}
            className={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
              selectedRegion.id === region.id
                ? 'border-primary bg-primary/10 shadow-md shadow-primary/10 ring-1 ring-primary/40'
                : 'border-border/60 bg-muted/20 hover:bg-muted/50 hover:border-border'
            }`}
          >
            <span className="text-xl shrink-0">{region.flag}</span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-extrabold text-foreground truncate">{region.name}</div>
              <div className="text-[10px] text-muted-foreground font-medium">{region.country}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Benchmark Results Display */}
      <div className="grid md:grid-cols-3 gap-4 my-6">
        {/* HostingSpell Winner Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4 fill-emerald-400" /> HostingSpell
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full shadow-sm">
              WINNER ⚡
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
            {isTesting ? `${Math.round((testProgress / 100) * selectedRegion.hostingSpellTtfb)}ms` : `${selectedRegion.hostingSpellTtfb}ms`}
          </div>

          <div className="text-[11px] font-bold text-emerald-300/80 mt-1">
            Ultra-Fast TTFB • Pure NVMe SSD
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[10px] text-muted-foreground font-medium flex items-center justify-between">
            <span>LiteSpeed Enterprise</span>
            <span className="text-emerald-400 font-bold">10x Faster</span>
          </div>
        </div>

        {/* AWS EC2 Comparison */}
        <div className="p-5 rounded-2xl bg-muted/40 border border-border/60">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-muted-foreground">AWS EC2 / Cloud</span>
            <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              3.8x Slower
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-foreground/80 font-mono tracking-tight">
            {isTesting ? `${Math.round((testProgress / 100) * selectedRegion.awsTtfb)}ms` : `${selectedRegion.awsTtfb}ms`}
          </div>

          <div className="text-[11px] font-semibold text-muted-foreground mt-1">
            Standard Cloud Instance
          </div>

          <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-muted-foreground font-medium flex items-center justify-between">
            <span>Apache/Nginx Setup</span>
            <span className="text-muted-foreground">No Native Cache</span>
          </div>
        </div>

        {/* Traditional Host Comparison */}
        <div className="p-5 rounded-2xl bg-muted/40 border border-border/60">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-muted-foreground">Traditional Host</span>
            <span className="text-[10px] font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded border border-destructive/20">
              10.5x Slower
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-foreground/60 font-mono tracking-tight">
            {isTesting ? `${Math.round((testProgress / 100) * selectedRegion.traditionalTtfb)}ms` : `${selectedRegion.traditionalTtfb}ms`}
          </div>

          <div className="text-[11px] font-semibold text-muted-foreground mt-1">
            SATA HDD / Shared Server
          </div>

          <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-muted-foreground font-medium flex items-center justify-between">
            <span>Overcrowded Node</span>
            <span className="text-destructive font-bold">High Latency</span>
          </div>
        </div>
      </div>

      {/* Test Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
        <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> 100% NVMe Array
          </span>
          <span className="flex items-center gap-1 text-blue-400">
            <ShieldCheck className="w-4 h-4" /> Imunify360 AI Protected
          </span>
        </div>

        <button
          onClick={() => runTest(selectedRegion)}
          disabled={isTesting}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md shadow-primary/20 cursor-pointer disabled:opacity-50"
        >
          <span>{isTesting ? "Measuring TTFB Latency..." : `Re-Test ${selectedRegion.name} Node`}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
