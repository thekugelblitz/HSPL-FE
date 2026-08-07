import React, { useState } from 'react';
import { vpsAppsData } from '../../lib/data';
import { 
  Search, ArrowRight, Clock, Cpu, Sparkles, Brain, Bot, Container, Rocket, Server, Zap, HardDrive, 
  Globe, Layers, Database, Cloud, MessageSquare, MessageCircle, Send, Lock, Monitor, Mail, 
  Activity, BarChart3, ShieldAlert, FileText, BookOpen, Kanban, HelpCircle, Bookmark, Link, 
  PenTool, Award, Briefcase, Building2, CreditCard, DollarSign, ShoppingCart, Image, Camera 
} from 'lucide-react';

const iconComponents: Record<string, React.ElementType> = {
  Brain, Bot, Sparkles, Container, Rocket, Server, Zap, HardDrive, Globe, Layers, Database, Cloud,
  MessageSquare, MessageCircle, Send, Lock, Monitor, Mail, Activity, BarChart3, ShieldAlert,
  FileText, BookOpen, Trello: Kanban, Kanban, HelpCircle, Bookmark, Link, PenTool, Award, Briefcase, Building2,
  CreditCard, DollarSign, ShoppingCart, Image, Camera, Search
};

const categories = [
  "All Apps",
  "AI & Machine Learning",
  "PaaS & Deployment",
  "CMS & Web App",
  "Team Chat & Security",
  "Monitoring & Utilities",
  "Knowledge & Wikis",
  "Business & ERP",
  "Media & Dev Utilities"
];

function AppLogo({ logoUrl, appName, iconName }: { logoUrl?: string; appName: string; iconName: string }) {
  const [imgError, setImgError] = useState(false);
  const IconComp = iconComponents[iconName] || Server;

  if (logoUrl && !imgError) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-zinc-800/60 p-2.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <img 
          src={logoUrl} 
          alt={`${appName} logo`} 
          className="w-full h-full object-contain filter drop-shadow-sm" 
          onError={() => setImgError(true)} 
        />
      </div>
    );
  }



  return (
    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
      <IconComp className="w-6 h-6" />
    </div>
  );
}

export function VpsAppsCatalog() {
  const [activeCategory, setActiveCategory] = useState("All Apps");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = vpsAppsData.filter(app => {
    const matchesCategory = activeCategory === "All Apps" || app.category === activeCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.tag?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Search & Category Filter Header */}
      <div className="space-y-6">
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search production apps (e.g. 'Open WebUI', 'Dokploy', 'Supabase', 'WordPress')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-xl placeholder:text-muted-foreground/60"
          />
          <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
        </div>


        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
        <span>Showing <strong className="text-foreground">{filteredApps.length}</strong> 1-Click Apps</span>
        <span>Filtered by: <strong className="text-primary">{activeCategory}</strong></span>
      </div>

      {/* App Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApps.map((app) => (
          <div 
            key={app.name}
            className="glass-card rounded-3xl p-6 glow-card flex flex-col justify-between transition-all hover:-translate-y-1 group border border-border/60 hover:border-primary/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <AppLogo logoUrl={app.logoUrl} appName={app.name} iconName={app.icon} />
                
                {app.popular ? (
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {app.tag || "Popular"}
                  </span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-muted text-muted-foreground px-2.5 py-1 rounded-md border border-border/40">
                    {app.tag || "1-Click"}
                  </span>
                )}
              </div>

              <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">{app.category}</div>
              <h3 className="text-xl font-extrabold mb-2 text-foreground group-hover:text-primary transition-colors">{app.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">{app.description}</p>
            </div>

            <div className="pt-4 border-t border-border/40 space-y-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-400" /> Deploy Time</span>
                <span className="font-mono font-bold text-foreground">{app.deployTime}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-purple-400" /> Min RAM</span>
                <span className="font-mono font-bold text-foreground">{app.recommendedRam}</span>
              </div>

              <a 
                href={`/vps#plans`} 
                className="w-full py-2.5 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground font-bold text-xs transition-all flex items-center justify-center gap-1.5 mt-2 border border-border/60 group/btn shadow-sm"
              >
                <span>Deploy {app.name}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredApps.length === 0 && (
        <div className="text-center py-16 glass-card rounded-3xl p-8 max-w-md mx-auto">
          <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <h4 className="font-bold text-lg mb-1">No Apps Found</h4>
          <p className="text-xs text-muted-foreground mb-4">Try searching for a different keyword or select another category.</p>
          <button 
            onClick={() => { setActiveCategory("All Apps"); setSearchQuery(""); }}
            className="px-4 py-2 bg-primary text-primary-foreground font-bold text-xs rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
