import * as React from "react";
import { 
  AlertTriangle, RefreshCw, Activity, PhoneCall, 
  Home, Cpu, HardDrive, CheckCircle2
} from "lucide-react";

export function Error500Widget() {
  const [reloading, setReloading] = React.useState(false);
  const [reloaded, setReloaded] = React.useState(false);

  const handleHotReload = () => {
    setReloading(true);
    setTimeout(() => {
      setReloading(false);
      setReloaded(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 1200);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 text-white font-sans">
      
      {/* 500 Status Header */}
      <div className="text-center space-y-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-rose-500/20">
          <AlertTriangle className="w-4 h-4 text-rose-400 animate-bounce" />
          <span>STATUS 500 • INTERNAL_SERVER_ERROR</span>
        </div>

        {/* 500 Number Backdrop */}
        <div className="relative flex justify-center items-center py-2">
          <span className="text-8xl sm:text-[140px] font-black tracking-tighter text-white select-none drop-shadow-[0_0_40px_rgba(239,68,68,0.8)]">
            500
          </span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-rose-300 bg-rose-950/90 px-4 py-1.5 rounded-full border border-rose-400/50 backdrop-blur-md shadow-2xl">
              SYSTEM_EXCEPTION_LOGGED
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
          Unexpected Sysadmin Alert Triggered.
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          An unexpected server exception was caught by our automated telemetry monitor. Sysadmins have been automatically notified.
        </p>
      </div>

      {/* Live Server Diagnostic Console Widget */}
      <div className="rounded-2xl border border-zinc-800 bg-[#0A0B0E] overflow-hidden shadow-2xl">
        <div className="px-4 py-3 bg-[#111319] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-mono font-bold text-zinc-300 ml-2">kernel_watchdog.service</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold bg-amber-500/20 px-2.5 py-0.5 rounded border border-amber-500/30">
            AUTO-FAILOVER IN PROGRESS
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0F1116] border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-blue-400" /> AMD EPYC CPU</span>
                <span className="text-emerald-400 font-mono font-bold">14% Load</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[14%] rounded-full"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0F1116] border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5"><HardDrive className="w-4 h-4 text-purple-400" /> NVMe RAID-10</span>
                <span className="text-emerald-400 font-mono font-bold">Optimal</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[100%] rounded-full"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0F1116] border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-emerald-400" /> Network SLA</span>
                <span className="text-emerald-400 font-mono font-bold">99.99% SLA</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[99.99%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#08090C] border border-zinc-800 font-mono text-xs text-zinc-300 space-y-1.5">
            <div className="text-rose-400">[01:05:42] Syslog Exception: Unhandled worker thread crash on node US-EAST-04</div>
            <div className="text-amber-400">[01:05:43] Failover System: Spawning backup container process...</div>
            <div className="text-emerald-400">[01:05:44] Recovery Status: Node state stabilized. Try refreshing your session.</div>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button 
          onClick={handleHotReload}
          disabled={reloading || reloaded}
          className="bg-[#0073EC] hover:bg-blue-600 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer disabled:opacity-75"
        >
          {reloading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>Stabilizing Cluster...</span>
            </>
          ) : reloaded ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Reloading Session!</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              <span>Trigger Hot Reload</span>
            </>
          )}
        </button>

        <a href="/">
          <button className="border border-zinc-700/80 bg-[#0D0E12] hover:bg-zinc-800 text-white font-extrabold text-sm px-8 py-4 rounded-2xl flex items-center gap-2 transition-all cursor-pointer">
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </a>

        <a href="https://wa.me/919409594000" target="_blank" rel="noopener noreferrer">
          <button className="border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-extrabold text-sm px-8 py-4 rounded-2xl flex items-center gap-2 transition-all cursor-pointer">
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Sysadmin Help</span>
          </button>
        </a>
      </div>

    </div>
  );
}
