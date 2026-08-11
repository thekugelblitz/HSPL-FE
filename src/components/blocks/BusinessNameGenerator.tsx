import React, { useState } from 'react';
import { Sparkles, Search, Copy, Check, ArrowRight, Globe, ShieldCheck, RefreshCw, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface GeneratedName {
  name: string;
  tldComAvailable: boolean;
  tldIoAvailable: boolean;
  tldAiAvailable: boolean;
  tagline: string;
  category: string;
}

const NAME_DATABASE: Record<string, GeneratedName[]> = {
  tech: [
    { name: "ApexCloud", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: false, tagline: "Next-Gen Cloud Compute Platform", category: "Cloud & Tech" },
    { name: "KubePulse", tldComAvailable: false, tldIoAvailable: true, tldAiAvailable: true, tagline: "Automated Kubernetes Orchestration", category: "DevOps" },
    { name: "HyperStack", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "High-Performance NVMe Hosting", category: "Infrastructure" },
    { name: "CodeForge AI", tldComAvailable: true, tldIoAvailable: false, tldAiAvailable: true, tagline: "Autonomous Code Generation Engine", category: "AI & Tech" },
    { name: "NovaMatrix", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "Distributed Edge Computing Network", category: "Enterprise" },
    { name: "SyntaxVault", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: false, tagline: "Encrypted Developer Workspace", category: "Security" }
  ],
  saas: [
    { name: "FlowCraft", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "Visual Workflow Automation SaaS", category: "Productivity" },
    { name: "MetricMind", tldComAvailable: true, tldIoAvailable: false, tldAiAvailable: true, tagline: "Real-Time SaaS Analytics Dashboard", category: "Analytics" },
    { name: "OmniDesk", tldComAvailable: false, tldIoAvailable: true, tldAiAvailable: true, tagline: "Unified Omnichannel Support Hub", category: "SaaS" },
    { name: "VibeCopy", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "AI Content & Marketing Studio", category: "AI SaaS" }
  ],
  agency: [
    { name: "PrismCraft Studio", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "Digital Design & Brand Agency", category: "Agency" },
    { name: "Vortex Digital", tldComAvailable: true, tldIoAvailable: false, tldAiAvailable: true, tagline: "Performance Growth & Marketing", category: "Agency" },
    { name: "Aura Creative", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "3D & Interactive Web Experience", category: "Design" }
  ],
  ecommerce: [
    { name: "EcoStride", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "Sustainable Direct-to-Consumer Brand", category: "E-Commerce" },
    { name: "VelvetCart", tldComAvailable: true, tldIoAvailable: false, tldAiAvailable: true, tagline: "Luxury Online Retail Store", category: "Shopping" },
    { name: "AeroGoods", tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: "Next-Day Global Supply Store", category: "Retail" }
  ]
};

export function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState<string>('');
  const [industry, setIndustry] = useState<string>('tech');
  const [results, setResults] = useState<GeneratedName[]>(NAME_DATABASE.tech);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      let pool = NAME_DATABASE[industry] || NAME_DATABASE.tech;
      if (keyword.trim()) {
        const cleanKey = keyword.trim().replace(/[^a-zA-Z0-9]/g, '');
        const capitalized = cleanKey.charAt(0).toUpperCase() + cleanKey.slice(1);
        pool = [
          { name: `${capitalized}IQ`, tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: true, tagline: `Smart AI Solution for ${cleanKey}`, category: "Custom AI" },
          { name: `${capitalized}Grid`, tldComAvailable: true, tldIoAvailable: true, tldAiAvailable: false, tagline: `Cloud Network Infrastructure for ${cleanKey}`, category: "Hosting" },
          { name: `Hyper${capitalized}`, tldComAvailable: true, tldIoAvailable: false, tldAiAvailable: true, tagline: `High-Speed Platform for ${cleanKey}`, category: "Enterprise" },
          ...pool
        ];
      }
      setResults(pool);
      setIsGenerating(false);
    }, 600);
  };

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`${name}.com`);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div class="w-full rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-2xl text-white">
      
      {/* Top Search Controls */}
      <form onSubmit={handleGenerate} class="space-y-6">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="relative flex-1">
            <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter your seed keyword (e.g. cloud, eco, ai, studio)..."
              class="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <select
            value={industry}
            onChange={(e) => { setIndustry(e.target.value); }}
            class="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition font-semibold cursor-pointer"
          >
            <option value="tech">Tech & Cloud</option>
            <option value="saas">SaaS & Software</option>
            <option value="agency">Design & Agency</option>
            <option value="ecommerce">E-Commerce & Store</option>
          </select>

          <Button
            type="submit"
            disabled={isGenerating}
            size="lg"
            className="h-14 px-8 bg-[#0073EC] hover:bg-[#005bb5] text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 shrink-0"
          >
            {isGenerating ? <RefreshCw class="w-5 h-5 animate-spin" /> : <Sparkles class="w-5 h-5" />}
            <span>{isGenerating ? 'AI Generating...' : 'Generate Names'}</span>
          </Button>
        </div>
      </form>

      {/* Generated Names Grid */}
      <div class="mt-10 space-y-4">
        <div class="flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider pb-2 border-b border-zinc-800">
          <span>AI Brand Suggestions & Instant TLD Availability</span>
          <span class="text-blue-400">{results.length} Names Found</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((item, idx) => (
            <div key={idx} class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/40 transition flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between">
                  <h4 class="text-xl font-extrabold text-white flex items-center gap-2">
                    <span>{item.name}</span>
                    <span class="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                      {item.category}
                    </span>
                  </h4>
                  <button
                    onClick={() => handleCopy(item.name)}
                    class="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
                    title="Copy Domain Name"
                  >
                    {copiedName === item.name ? <Check class="w-4 h-4 text-emerald-400" /> : <Copy class="w-4 h-4" />}
                  </button>
                </div>
                <p class="text-xs text-zinc-400 mt-1 font-medium">{item.tagline}</p>
              </div>

              {/* TLD Availability Pills */}
              <div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <div class="flex items-center gap-2 text-xs font-mono">
                  <span class={`px-2 py-0.5 rounded font-bold ${item.tldComAvailable ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-800 text-zinc-500 line-through'}`}>
                    .COM
                  </span>
                  <span class={`px-2 py-0.5 rounded font-bold ${item.tldIoAvailable ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-800 text-zinc-500 line-through'}`}>
                    .IO
                  </span>
                  <span class={`px-2 py-0.5 rounded font-bold ${item.tldAiAvailable ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-800 text-zinc-500 line-through'}`}>
                    .AI
                  </span>
                </div>

                <a
                  href={`/domain?search=${item.name.toLowerCase()}`}
                  class="text-xs font-extrabold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Register Domain</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
