import React, { useState } from "react";
import type { LocationOption } from "@/lib/pricing/constants";
import { X, Zap, Server, ShieldCheck, Activity, Globe, Check, Radio } from "lucide-react";

interface WorldMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  locations: LocationOption[];
  selectedLocation: string;
  onSelectLocation: (locValue: string) => void;
}

interface NodeDetail {
  city: string;
  provider: string;
  ping: number;
  uplink: string;
  storage: string;
  coords: { x: number; y: number }; // Percentage coords on map canvas
}

const DATACENTER_DETAILS: Record<string, NodeDetail> = {
  india: {
    city: "Mumbai, India",
    provider: "Linode / DigitalOcean Enterprise",
    ping: 18,
    uplink: "10 Gbps Tier-1",
    storage: "NVMe Gen4 SSD",
    coords: { x: 67, y: 52 },
  },
  netherlands: {
    city: "Amsterdam, Netherlands",
    provider: "DigitalOcean Datacenter",
    ping: 38,
    uplink: "10 Gbps EU Backbone",
    storage: "NVMe SSD SAN",
    coords: { x: 49, y: 30 },
  },
  usa: {
    city: "New York / US East",
    provider: "DigitalOcean Cloud",
    ping: 42,
    uplink: "10 Gbps US Backbone",
    storage: "Enterprise NVMe",
    coords: { x: 27, y: 35 },
  },
  uk: {
    city: "London, United Kingdom",
    provider: "DigitalOcean London Node",
    ping: 45,
    uplink: "10 Gbps LINX Direct",
    storage: "Enterprise NVMe",
    coords: { x: 46, y: 28 },
  },
  singapore: {
    city: "Singapore, SG",
    provider: "DigitalOcean SG Cloud",
    ping: 22,
    uplink: "10 Gbps Asia Direct",
    storage: "NVMe SSD",
    coords: { x: 77, y: 60 },
  },
  australia: {
    city: "Sydney, Australia",
    provider: "Linode Sydney Node",
    ping: 65,
    uplink: "10 Gbps Oceanic Link",
    storage: "High-Speed NVMe",
    coords: { x: 88, y: 78 },
  },
  germany: {
    city: "Frankfurt, Germany",
    provider: "Hetzner / Linode EU",
    ping: 35,
    uplink: "10 Gbps DE-CIX",
    storage: "Pure NVMe SSD",
    coords: { x: 51, y: 31 },
  },
};

export function WorldMapModal({
  isOpen,
  onClose,
  locations,
  selectedLocation,
  onSelectLocation,
}: WorldMapModalProps) {
  const [activeHoverLoc, setActiveHoverLoc] = useState<string | null>(selectedLocation);
  const [isPinging, setIsPinging] = useState<boolean>(false);
  const [pingResult, setPingResult] = useState<number | null>(null);

  if (!isOpen) return null;

  const currentLocKey = activeHoverLoc || selectedLocation;
  const currentLocObj = locations.find((l) => l.value === currentLocKey) || locations[0];
  const currentDetail = DATACENTER_DETAILS[currentLocKey] || DATACENTER_DETAILS["india"];

  const handleRunPingTest = () => {
    setIsPinging(true);
    setPingResult(null);
    setTimeout(() => {
      const basePing = currentDetail.ping;
      // Add small random jitter for realistic test simulation
      const simulatedPing = basePing + Math.floor(Math.random() * 5);
      setPingResult(simulatedPing);
      setIsPinging(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-card border border-primary/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Globe className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground flex items-center gap-2">
                <span>Global Datacenter Network & Speed Test</span>
                <span className="text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  LIVE INFRASTRUCTURE
                </span>
              </h3>
              <p className="text-xs text-muted-foreground">Select a node or run a latency ping test across our enterprise locations.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Map + Specs Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-y-auto">
          
          {/* Interactive World Map View (8 cols) */}
          <div className="lg:col-span-8 p-6 relative bg-slate-950 flex items-center justify-center min-h-[340px] sm:min-h-[420px] overflow-hidden">
            
            {/* World Map SVG Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
            
            {/* World Map SVG Canvas */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto max-h-[400px] opacity-35 text-slate-700 fill-current"
            >
              {/* Simplified World Continents Path Outlines */}
              <path d="M150,150 Q180,100 280,120 Q320,180 250,250 Q180,220 150,150 Z" /> {/* North America */}
              <path d="M280,280 Q320,270 340,350 Q300,420 260,380 Z" /> {/* South America */}
              <path d="M470,120 Q540,100 580,160 Q520,200 460,150 Z" /> {/* Europe */}
              <path d="M460,200 Q560,200 550,340 Q480,350 450,240 Z" /> {/* Africa */}
              <path d="M600,100 Q800,90 850,220 Q700,280 600,180 Z" /> {/* Asia */}
              <path d="M780,320 Q880,310 870,400 Q800,420 760,350 Z" /> {/* Australia */}
            </svg>

            {/* Datacenter Pins */}
            {locations.map((loc) => {
              const details = DATACENTER_DETAILS[loc.value];
              if (!details) return null;
              const isSelected = selectedLocation === loc.value;
              const isHovered = activeHoverLoc === loc.value;
              const isoCode = (loc.iso || "us").toLowerCase();

              return (
                <div
                  key={loc.value}
                  style={{ left: `${details.coords.x}%`, top: `${details.coords.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  onClick={() => {
                    onSelectLocation(loc.value);
                    setActiveHoverLoc(loc.value);
                  }}
                  onMouseEnter={() => setActiveHoverLoc(loc.value)}
                >
                  {/* Glowing Radar Pulse Ring */}
                  <div
                    className={`absolute -inset-2.5 rounded-full animate-ping opacity-75 ${
                      isSelected ? "bg-blue-500" : "bg-emerald-500"
                    }`}
                  ></div>

                  {/* Datacenter Pin Badge */}
                  <div
                    className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold shadow-xl border transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0073EC] text-white border-blue-400 scale-110 ring-4 ring-blue-500/30"
                        : isHovered
                        ? "bg-slate-900 text-white border-primary scale-105"
                        : "bg-slate-900/90 text-slate-300 border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/w40/${isoCode}.png`}
                      width="16"
                      height="11"
                      alt={loc.label}
                      className="rounded-xs object-cover"
                    />
                    <span>{loc.code}</span>
                    <span className="text-[9px] font-bold text-emerald-400">⚡{details.ping}ms</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Datacenter Specs & Latency Sidebar (4 cols) */}
          <div className="lg:col-span-4 p-6 border-t lg:border-t-0 lg:border-l border-border/60 bg-card/60 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              {/* Selected Location Card */}
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/w40/${(currentLocObj?.iso || "us").toLowerCase()}.png`}
                      width="24"
                      height="16"
                      alt={currentLocObj?.label}
                      className="rounded-xs shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-black text-foreground">{currentLocObj?.label} Node</h4>
                      <p className="text-[11px] text-muted-foreground">{currentDetail.city}</p>
                    </div>
                  </div>
                  {selectedLocation === currentLocKey && (
                    <span className="text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      SELECTED
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs pt-2 border-t border-border/60">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provider:</span>
                    <strong className="text-foreground">{currentDetail.provider}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Network Uplink:</span>
                    <strong className="text-foreground">{currentDetail.uplink}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage Tech:</span>
                    <strong className="text-foreground">{currentDetail.storage}</strong>
                  </div>
                </div>
              </div>

              {/* Latency Speed Test Box */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-400" /> Latency Test
                  </span>
                  <span className="text-[10px] text-slate-400">Node #{currentLocObj?.code}-01</span>
                </div>

                <div className="flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated Latency</div>
                    <div className="text-xl font-black text-emerald-400">
                      {isPinging ? (
                        <span className="animate-pulse text-amber-400 text-sm">Testing Ping...</span>
                      ) : (
                        `⚡ ${pingResult || currentDetail.ping} ms`
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRunPingTest}
                    disabled={isPinging}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isPinging ? "Pinging..." : "Test Ping"}
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  onSelectLocation(currentLocKey);
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#0073EC] hover:bg-[#005bb5] text-white font-extrabold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Use {currentLocObj?.label} Datacenter</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
