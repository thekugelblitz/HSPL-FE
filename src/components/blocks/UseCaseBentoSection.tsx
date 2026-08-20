import React, { useState } from 'react';
import { 
  Globe, 
  Sparkles, 
  Store, 
  Building2, 
  ShieldCheck, 
  Server, 
  Check, 
  ArrowRight, 
  Zap, 
  Layers, 
  Cpu, 
  Database,
  Lock,
  Headphones,
  Mail,
  HardDrive
} from 'lucide-react';

interface BentoData {
  tabLabel: string;
  tabIcon: string;
  card1: {
    badge: string;
    link: string;
    title: string;
    description: string;
    subtext: string;
    visualBadge: string;
    visualStatus: string;
    visualNumber: string;
    visualTitle: string;
    visualItems: { label: string; value: string }[];
    visualFooter: string;
  };
  card2: {
    badge: string;
    link: string;
    title: string;
    description: string;
    visualBadge: string;
    visualChecks: { label: string; tag: string }[];
    buttonText: string;
    buttonLink: string;
  };
  card3: {
    badge: string;
    link: string;
    title: string;
    description: string;
    visualBadge: string;
    visualTitle: string;
    visualSubtitle: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    visualFooter: string;
  };
}

const tabData: Record<string, BentoData> = {
  'get-online': {
    tabLabel: 'Get online',
    tabIcon: '🪄',
    card1: {
      badge: 'Web Hosting →',
      link: '/cloud-hosting',
      title: 'Launch your business',
      description: "Everything you need to get online, all in one place. Build your site, set up email, stay secure and keep everything backed up. You'll also get our AI assistant and 24/7 support from real people, ready whenever you need it.",
      subtext: "Start simple. Grow when you're ready.",
      visualBadge: 'ALL IN ONE PLACE',
      visualStatus: 'Start simple',
      visualNumber: '4',
      visualTitle: 'things sorted on day one',
      visualItems: [
        { label: 'Site', value: 'Built' },
        { label: 'Email', value: 'Set up' },
        { label: 'Security', value: 'Covered' },
        { label: 'Backups', value: 'Running' }
      ],
      visualFooter: 'AI assistant plus 24/7 real people. Grow when you’re ready.'
    },
    card2: {
      badge: 'Build a website →',
      link: '/ai-website-builder',
      title: 'Build what you want',
      description: 'Build your way with AI, apps or your own tools. One plan covers your site, domain, email, security and support, ready to grow with you.',
      visualBadge: 'ONE PLAN COVERS IT',
      visualChecks: [
        { label: 'Site', tag: 'AI OR APPS' },
        { label: 'Domain', tag: 'FREE 1 YEAR' },
        { label: 'Email', tag: 'BRANDED' },
        { label: 'Security', tag: 'BUILT IN' },
        { label: 'Support', tag: '24/7' }
      ],
      buttonText: 'Build a website →',
      buttonLink: '/ai-website-builder'
    },
    card3: {
      badge: 'Search for your domain →',
      link: '/domain',
      title: 'Find your perfect domain',
      description: "Get online with flexible, affordable hosting that's easy to manage. Keep your websites, files and email all in one simple control panel, with everything you need to grow.",
      visualBadge: 'ONE CONTROL PANEL',
      visualTitle: 'Sites, files and email',
      visualSubtitle: 'all in one place',
      stat1Label: 'Pricing',
      stat1Value: 'From $0.89/mo',
      stat2Label: 'Setup',
      stat2Value: 'Instant 60s',
      visualFooter: 'Flexible, affordable and easy to manage.'
    }
  },
  'grow-business': {
    tabLabel: 'Grow your business',
    tabIcon: '🏪',
    card1: {
      badge: 'WordPress & Stores →',
      link: '/wordpress-hosting',
      title: 'Scale your commerce & sales',
      description: 'Power high-concurrency WooCommerce stores with server-level LiteSpeed caching, automated Redis object acceleration, and isolated resource spikes for flash sales.',
      subtext: 'Engineered for zero dropped checkouts.',
      visualBadge: 'HIGH TRAFFIC READY',
      visualStatus: '10x Flash Spike',
      visualNumber: '100%',
      visualTitle: 'uptime mark on busy sale days',
      visualItems: [
        { label: 'LSCache', value: 'Active' },
        { label: 'Redis RAM', value: 'Dedicated' },
        { label: 'AutoSSL', value: 'Renewed' },
        { label: 'Staging', value: '1-Click' }
      ],
      visualFooter: 'Sub-second TTFB with global LiteSpeed Edge caching.'
    },
    card2: {
      badge: 'Explore Reseller Hosting →',
      link: '/reseller',
      title: 'Monetize as an Agency',
      description: 'Create and sell white-labeled cPanel accounts to your own clients with custom packages, automated billing integration, and 100% white-label nameservers.',
      visualBadge: 'AGENCY PROFIT STACK',
      visualChecks: [
        { label: 'WHM Control', tag: 'INCLUDED' },
        { label: 'White-Label', tag: '100%' },
        { label: 'Unlimited SSL', tag: 'FREE' },
        { label: 'JetBackup 5', tag: 'DAILY' },
        { label: 'Tier-3 Support', tag: '24/7' }
      ],
      buttonText: 'Start Reselling →',
      buttonLink: '/reseller'
    },
    card3: {
      badge: 'Zero Downtime Migration →',
      link: '/reviews',
      title: 'Seamless Expert Migration',
      description: 'Switch from slow legacy hosts with zero data loss and zero downtime. Our senior migration specialists transfer your sites, databases, emails, and DNS records for free.',
      visualBadge: 'SWITCH RISK-FREE',
      visualTitle: 'Managed migration',
      visualSubtitle: 'handled by senior engineers',
      stat1Label: 'Downtime',
      stat1Value: '0 Minutes',
      stat2Label: 'Turnaround',
      stat2Value: '< 24 Hours',
      visualFooter: 'Guaranteed seamless transition with no technical headache.'
    }
  },
  'pro-enterprise': {
    tabLabel: 'PRO',
    tabIcon: '🏢',
    card1: {
      badge: 'Cloud VPS & KVM →',
      link: '/vps',
      title: 'Dedicated Cloud Compute',
      description: 'Deploy lightning-fast KVM VPS instances with full root SSH access, dedicated vCPU cores, pure NVMe storage RAID-10, and instant OS reinstalls via Virtualizor.',
      subtext: 'Built for developers, APIs, and microservices.',
      visualBadge: 'RAW HARDWARE POWER',
      visualStatus: 'Pure KVM',
      visualNumber: '100%',
      visualTitle: 'isolated CPU & RAM allocation',
      visualItems: [
        { label: 'Root SSH', value: 'Unlocked' },
        { label: 'NVMe Gen4', value: 'RAID-10' },
        { label: 'DDoS Shield', value: '10Gbps+' },
        { label: 'OS', value: 'Alma/Ubuntu' }
      ],
      visualFooter: 'Full control with instant reboot, rescue mode & ISO mounts.'
    },
    card2: {
      badge: 'Node.js & Python Stacks →',
      link: '/nodejs-hosting',
      title: 'Modern Full-Stack Runtime',
      description: 'Run modern web frameworks including Next.js, Node.js, Django, FastAPI, and Flask with built-in PM2 process management and Passenger reverse proxies.',
      visualBadge: 'DEV WORKFLOW',
      visualChecks: [
        { label: 'Node 22 LTS', tag: 'READY' },
        { label: 'Python 3.12', tag: 'READY' },
        { label: 'Git Deploy', tag: 'AUTOMATED' },
        { label: 'Custom Ports', tag: 'WEBSOCKETS' },
        { label: 'Redis Server', tag: 'INCLUDED' }
      ],
      buttonText: 'Deploy App Stack →',
      buttonLink: '/nodejs-hosting'
    },
    card3: {
      badge: 'Bare-Metal Dedicated →',
      link: '/dedicated-servers',
      title: 'Enterprise Bare Metal',
      description: 'Maximum IOPS performance with Dual AMD EPYC™ 9004 processors, up to 512GB ECC DDR5 RAM, and unmetered enterprise bandwidth across global tier-3 datacenters.',
      visualBadge: 'BARE METAL POWER',
      visualTitle: 'Dual AMD EPYC',
      visualSubtitle: 'unmatched database IOPS',
      stat1Label: 'Network',
      stat1Value: '10 Gbps Port',
      stat2Label: 'SLA Uptime',
      stat2Value: '100% Mark',
      visualFooter: 'Custom server clusters & private cloud deployments.'
    }
  }
};

export const UseCaseBentoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('get-online');
  const current = tabData[activeTab];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
            Your growth hosting platform for every use case
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Tailored for creators, trusted by business owners and built to scale with enterprises. No matter who you are, your ideal hosting experience starts here.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          <div className="inline-flex p-1.5 rounded-2xl bg-muted/80 dark:bg-card border border-border/80 shadow-inner">
            {Object.entries(tabData).map(([key, data]) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0f382c] dark:bg-[#114234] text-emerald-300 dark:text-emerald-200 shadow-md scale-[1.02]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span>{data.tabIcon}</span>
                  <span>{data.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Layout (Screenshot 2 Match) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column / Tall Card (7 Cols) */}
          <div className="lg:col-span-6 flex flex-col rounded-3xl overflow-hidden border border-border/80 shadow-md bg-[#0a231c] dark:bg-[#061914] text-white">
            
            {/* Top Atmospheric Mesh Visual */}
            <div className="p-6 sm:p-10 relative overflow-hidden bg-gradient-to-br from-[#c98338]/40 via-[#407a5e]/50 to-[#0e3b2e] min-h-[300px] sm:min-h-[340px] flex items-center justify-center">
              
              {/* Floating White Card */}
              <div className="w-full max-w-md bg-white text-zinc-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/40 relative z-10 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                    {current.card1.visualBadge}
                  </span>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                    {current.card1.visualStatus}
                  </span>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                      {current.card1.visualNumber}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-zinc-700">
                      {current.card1.visualTitle}
                    </span>
                  </div>
                </div>

                {/* 4 Metric items grid */}
                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-zinc-100 text-center mb-4">
                  {current.card1.visualItems.map((item, i) => (
                    <div key={i} className="p-1.5 rounded-lg bg-zinc-50 border border-zinc-100">
                      <div className="text-[10px] font-semibold text-zinc-400">{item.label}</div>
                      <div className="text-xs font-black text-zinc-800">{item.value}</div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
                  {current.card1.visualFooter}
                </p>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-8 bg-[#09221b] flex-1 flex flex-col justify-between">
              <div>
                <a 
                  href={current.card1.link} 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 uppercase tracking-wider mb-3 transition-colors group"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{current.card1.badge}</span>
                </a>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {current.card1.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {current.card1.description}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-950/80 flex items-center justify-between text-xs text-emerald-300/80 font-semibold">
                <span>{current.card1.subtext}</span>
                <a href={current.card1.link} className="text-white hover:underline flex items-center gap-1 font-bold">
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column / Two Stacked Cards (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Top Right Bento Card */}
            <div className="rounded-3xl border border-border/80 shadow-md bg-[#08221b] dark:bg-[#061914] text-white p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
              <div className="flex-1 space-y-3 text-left">
                <a 
                  href={current.card2.link} 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 uppercase tracking-wider transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{current.card2.badge}</span>
                </a>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {current.card2.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {current.card2.description}
                </p>
              </div>

              {/* Right Side Visual Checklist Card */}
              <div className="w-full sm:w-[210px] shrink-0 bg-white text-zinc-900 rounded-2xl p-4 shadow-xl border border-white/30 text-xs">
                <div className="text-[9px] font-black uppercase tracking-wider text-zinc-400 mb-2.5">
                  {current.card2.visualBadge}
                </div>
                <div className="space-y-1.5 mb-3.5">
                  {current.card2.visualChecks.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] font-bold">
                      <div className="flex items-center gap-1 text-zinc-800">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[9px] font-extrabold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <a 
                  href={current.card2.buttonLink} 
                  className="w-full flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-[11px] px-3 py-2 rounded-xl transition-all"
                >
                  <span>{current.card2.buttonText}</span>
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-zinc-950 flex items-center justify-center text-[10px] font-black">
                    &rarr;
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom Right Bento Card */}
            <div className="rounded-3xl border border-border/80 shadow-md bg-[#08221b] dark:bg-[#061914] text-white p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
              <div className="flex-1 space-y-3 text-left">
                <a 
                  href={current.card3.link} 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 uppercase tracking-wider transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{current.card3.badge}</span>
                </a>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {current.card3.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {current.card3.description}
                </p>
              </div>

              {/* Right Side Visual Stats Card on Mesh */}
              <div className="w-full sm:w-[210px] shrink-0 rounded-2xl p-4 shadow-xl border border-white/20 bg-gradient-to-br from-[#c98338]/30 via-[#407a5e]/40 to-[#0e3b2e] flex items-center justify-center">
                <div className="w-full bg-white text-zinc-900 rounded-xl p-3.5 shadow-lg text-left">
                  <div className="text-[9px] font-black uppercase tracking-wider text-zinc-400 mb-1">
                    {current.card3.visualBadge}
                  </div>
                  <div className="text-xs font-black text-zinc-900 leading-tight mb-0.5">
                    {current.card3.visualTitle}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-medium mb-3">
                    {current.card3.visualSubtitle}
                  </div>

                  <div className="space-y-1.5 border-t border-zinc-100 pt-2 mb-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-semibold text-zinc-400">{current.card3.stat1Label}</span>
                      <span className="font-black text-zinc-800">{current.card3.stat1Value}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-semibold text-zinc-400">{current.card3.stat2Label}</span>
                      <span className="font-black text-emerald-600">{current.card3.stat2Value}</span>
                    </div>
                  </div>
                  
                  <div className="text-[9px] text-zinc-400 font-medium">
                    {current.card3.visualFooter}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
