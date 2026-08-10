import * as React from "react";
import { 
  Wrench, RefreshCw, Activity, Home, Zap
} from "lucide-react";

export function Error503Widget() {
  const [progress, setProgress] = React.useState(88);
  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setProgress(prev => Math.min(prev + 4, 98));
      setRefreshing(false);
    }, 700);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 text-white font-sans">
      
      {/* 503 Status Header */}
      <div className="text-center space-y-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/20">
          <Wrench className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
          <span>STATUS 503 • SCHEDULED_MAINTENANCE</span>
        </div>

        {/* 503 Backdrop Number */}
        <div className="relative flex justify-center items-center py-2">
          <span className="text-8xl sm:text-[140px] font-black tracking-tighter text-white select-none drop-shadow-[0_0_40px_rgba(245,158,11,0.8)]">
            503
          </span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-amber-300 bg-amber-950/90 px-4 py-1.5 rounded-full border border-amber-400/50 backdrop-blur-md shadow-2xl">
              HARDWARE_UPGRADE_ACTIVE
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
          Ultra-Fast NVMe Gen-4 Upgrade in Progress.
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          We are currently deploying high-speed NVMe Gen-4 storage arrays and kernel firmware patches. All core hosting hypervisors are being synchronized.
        </p>
      </div>

      {/* Hardware Upgrade Progress Card */}
      <div className="rounded-2xl border border-zinc-800 bg-[#0A0B0E] overflow-hidden shadow-2xl p-6 space-y-6">
        
        {/* Progress Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">NVMe RAID-10 Cluster Synchronization</div>
              <div className="text-xs text-zinc-400">Gen-4 Hardware Array Upgrade</div>
            </div>
          </div>
          <span className="text-xl font-mono font-black text-amber-400">{progress}%</span>
        </div>

        {/* Animated Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden p-0.5 border border-zinc-700/50">
            <div 
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 h-full rounded-full transition-all duration-500 shadow-md shadow-amber-500/40"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Estimated completion: &lt; 2 minutes</span>
            <span className="text-emerald-400 font-bold">🟢 ZERO DATA LOSS GUARANTEED</span>
          </div>
        </div>

        {/* Global Datacenter Status Matrix */}
        <div className="grid sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-[#0F1116] border border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-200">🇺🇸 Ashburn (US-EAST)</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded">
              ● Online
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0F1116] border border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-200">🇮🇳 Mumbai (IN-BOM)</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded">
              ⚡ Upgrade Syncing ({progress}%)
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0F1116] border border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-200">🇩🇪 Frankfurt (EU-FRA)</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded">
              ● Online
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0F1116] border border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-200">🇸🇬 Singapore (AP-SIN)</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded">
              ● Online
            </span>
          </div>
        </div>

      </div>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button 
          onClick={handleRefresh}
          disabled={refreshing}
          className="bg-[#0073EC] hover:bg-blue-600 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin text-amber-300" : ""}`} />
          <span>{refreshing ? "Checking Hardware..." : "Check Status"}</span>
        </button>

        <a href="/network-status">
          <button className="border border-zinc-700/80 bg-[#0D0E12] hover:bg-zinc-800 text-white font-extrabold text-sm px-8 py-4 rounded-2xl flex items-center gap-2 transition-all cursor-pointer">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Live SLA Dashboard</span>
          </button>
        </a>

        <a href="/">
          <button className="border border-zinc-700/80 bg-[#0D0E12] hover:bg-zinc-800 text-white font-extrabold text-sm px-8 py-4 rounded-2xl flex items-center gap-2 transition-all cursor-pointer">
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>
        </a>
      </div>

    </div>
  );
}
