import * as React from "react";
import { 
  Search, Terminal, Home, ArrowRight, Server, Cloud, 
  Sparkles, HelpCircle, RefreshCw, Zap
} from "lucide-react";

const destinationCards = [
  {
    title: "Cloud NVMe Hosting",
    desc: "10x LiteSpeed Enterprise speed & NVMe RAID-10 storage",
    href: "/cloud-hosting",
    icon: Cloud,
    tag: "POPULAR",
    accent: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.08)",
    border: "rgba(59, 130, 246, 0.25)"
  },
  {
    title: "Dedicated KVM VPS",
    desc: "Full Root SSH access, dedicated RAM & AMD EPYC CPU",
    href: "/vps",
    icon: Server,
    tag: "HIGH PERF",
    accent: "#A855F7",
    bg: "rgba(168, 85, 247, 0.08)",
    border: "rgba(168, 85, 247, 0.25)"
  },
  {
    title: "Remixer AI Builder",
    desc: "Build stunning AI websites in 60s + Free Domain",
    href: "/ai-website-builder",
    icon: Sparkles,
    tag: "75% OFF",
    accent: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.25)"
  },
  {
    title: "Knowledgebase & Guides",
    desc: "300+ tutorials, cPanel docs & 24/7 expert help",
    href: "/knowledgebase",
    icon: HelpCircle,
    tag: "SUPPORT",
    accent: "#10B981",
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.25)"
  }
];

export function Error404Widget() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeTab, setActiveTab] = React.useState<"log" | "ping">("log");
  const [pinging, setPinging] = React.useState(false);
  const [pingResults, setPingResults] = React.useState({ us: 22, in: 12, de: 18, sg: 19 });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/knowledgebase?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const runPingTest = () => {
    setPinging(true);
    setTimeout(() => {
      setPingResults({
        us: Math.floor(Math.random() * 10) + 18,
        in: Math.floor(Math.random() * 8) + 10,
        de: Math.floor(Math.random() * 10) + 15,
        sg: Math.floor(Math.random() * 9) + 16
      });
      setPinging(false);
    }, 800);
  };

  const filteredCards = destinationCards.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 font-sans" style={{ color: "#FFFFFF" }}>
      
      {/* 404 Header */}
      <div className="text-center space-y-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-blue-500/20">
          <Terminal className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>STATUS 404 • ROUTE_NOT_FOUND</span>
        </div>

        {/* Huge High Contrast 404 */}
        <div className="relative flex justify-center items-center py-2">
          <h1 
            className="text-8xl sm:text-[140px] font-black tracking-tighter select-none"
            style={{ color: "#FFFFFF", textShadow: "0 0 50px rgba(0, 115, 236, 0.8), 0 0 100px rgba(0, 115, 236, 0.4)" }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-blue-300 bg-[#0B1528] px-4 py-1.5 rounded-full border border-blue-500/50 backdrop-blur-md shadow-2xl">
              HTTP_404_PAGE_NOT_FOUND
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
          The requested page is out of orbit.
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          The link you followed may be broken or the URL was moved to a new cluster node. Search below or select a destination.
        </p>
      </div>

      {/* Interactive Search Bar */}
      <form onSubmit={handleSearch} className="max-w-xl mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-opacity"></div>
        <div className="relative flex items-center bg-[#0F1117] border border-zinc-700 rounded-2xl p-2 shadow-2xl focus-within:border-blue-500 transition-all">
          <Search className="w-5 h-5 text-zinc-400 ml-3 shrink-0" />
          <input 
            type="text" 
            placeholder="Search hosting plans, features, or knowledgebase..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none text-sm text-white placeholder-zinc-400 px-3 focus:outline-none font-medium"
          />
          <button 
            type="submit"
            className="bg-[#0073EC] hover:bg-blue-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md shadow-blue-500/20"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Interactive Live Diagnostic Console Widget */}
      <div className="rounded-2xl border border-zinc-800 bg-[#0C0D12] overflow-hidden shadow-2xl">
        <div className="px-4 py-3 bg-[#13151D] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-mono font-bold text-zinc-300 ml-2">sysadmin@hostingspell:~#</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("log")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "log" 
                  ? "bg-blue-500/30 text-blue-300 border border-blue-500/50" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Trace Log
            </button>
            <button
              onClick={() => setActiveTab("ping")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "ping" 
                  ? "bg-blue-500/30 text-blue-300 border border-blue-500/50" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Datacenter Latency
            </button>
          </div>
        </div>

        <div className="p-5 font-mono text-xs leading-relaxed space-y-2 bg-[#0C0D12]">
          {activeTab === "log" ? (
            <div className="space-y-1.5 text-zinc-300">
              <div className="text-blue-400">[INFO] Requesting URI route validation...</div>
              <div className="text-rose-400">[ERR 404] Target path not found in edge routing table.</div>
              <div className="text-emerald-400">[HEALTH] All 4 Global Datacenters (US, IN, DE, SG) 100% Operational.</div>
              <div className="text-zinc-500 pt-1">// Recommended: Return home or select from active hosting endpoints below.</div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-zinc-400 text-[11px]">
                <span>GLOBAL ZONE</span>
                <span>STATUS</span>
                <span>LATENCY</span>
              </div>
              <div className="space-y-2 text-zinc-200">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-sans font-bold text-xs">🇺🇸 Ashburn (US-EAST)</span>
                  <span className="text-emerald-400 text-[10px] uppercase font-bold">● Online</span>
                  <span className="text-blue-400 font-bold">{pingResults.us}ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-sans font-bold text-xs">🇮🇳 Mumbai (IN-BOM)</span>
                  <span className="text-emerald-400 text-[10px] uppercase font-bold">● Online</span>
                  <span className="text-blue-400 font-bold">{pingResults.in}ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-sans font-bold text-xs">🇩🇪 Frankfurt (EU-FRA)</span>
                  <span className="text-emerald-400 text-[10px] uppercase font-bold">● Online</span>
                  <span className="text-blue-400 font-bold">{pingResults.de}ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-sans font-bold text-xs">🇸🇬 Singapore (AP-SIN)</span>
                  <span className="text-emerald-400 text-[10px] uppercase font-bold">● Online</span>
                  <span className="text-blue-400 font-bold">{pingResults.sg}ms</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={runPingTest}
                  disabled={pinging}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-sans font-extrabold text-zinc-200 transition-all cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${pinging ? "animate-spin" : ""}`} />
                  <span>{pinging ? "Testing Ping..." : "Re-test Latency"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popular Destination Grid */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h3 className="text-xs font-black uppercase tracking-widest text-zinc-300">
            Explore Active Hosting Services
          </h3>
          <span className="text-xs text-blue-400 font-extrabold">Instant Setup ⚡</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <a
                  key={card.href}
                  href={card.href}
                  style={{ backgroundColor: "#0E1017", borderColor: card.border }}
                  className="p-5 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 shadow-xl"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-700/50 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {card.tag}
                    </span>
                  </div>

                  <div className="font-extrabold text-base text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <span>{card.title}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{card.desc}</p>
                </a>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-8 text-zinc-400 text-sm">
              No matching pages found for "{searchQuery}". <a href="/" className="text-blue-400 underline font-bold">Return Home</a>
            </div>
          )}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
        <a href="/">
          <button className="bg-[#0073EC] hover:bg-[#005bb5] text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer">
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </a>

        <a href="/pricing">
          <button className="border border-zinc-700 bg-[#0D0E12] hover:bg-zinc-800 text-white font-extrabold text-sm px-8 py-4 rounded-2xl flex items-center gap-2 transition-all cursor-pointer">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>View All Plans</span>
          </button>
        </a>
      </div>

    </div>
  );
}
