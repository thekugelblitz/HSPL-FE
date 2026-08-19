import * as React from "react"
import { createPortal } from "react-dom"
import { ThemeToggle, MobileThemeSegment } from "../ui/ThemeToggle"
import { RegionSelector } from "../i18n/RegionSelector"
import { 
  Server, Cloud, Globe, MonitorSmartphone, Code, Cpu, 
  Sparkles, User, ChevronRight, ChevronDown, Layers, BookOpen, PhoneCall, ArrowRight, MessageSquare, Bot, Terminal
} from "lucide-react"

interface NavItem {
  title: string
  desc: string
  href: string
  icon: React.ElementType
  badge?: string
  color: string
}

interface NavGroup {
  id: string
  title: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    id: "hosting",
    title: "Cloud & Web Hosting",
    items: [
      {
        title: "Cloud NVMe Hosting",
        desc: "10x LiteSpeed speed & NVMe SSDs",
        href: "/cloud-hosting",
        icon: Cloud,
        color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20"
      },
      {
        title: "Premium Hosting",
        desc: "Dedicated CPU & RAM resources",
        href: "/premium-hosting",
        icon: Server,
        color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
      },
      {
        title: "WordPress Hosting",
        desc: "Pre-installed LSCache optimization",
        href: "/wordpress-hosting",
        icon: MonitorSmartphone,
        color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
      },
      {
        title: "Combo Free Domain",
        desc: "Free lifetime domain inclusion",
        href: "/combo-hosting",
        icon: Globe,
        color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
      },
      {
        title: "Node.js Hosting",
        desc: "Optimized for Express & Next.js",
        href: "/nodejs-hosting",
        icon: Code,
        color: "text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20"
      },
      {
        title: "Python Hosting",
        desc: "Django, Flask & FastAPI support",
        href: "/python-hosting",
        icon: Cpu,
        color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20"
      },
      {
        title: "Webuzo Shared Hosting",
        desc: "Apache/Nginx & MultiPHP modern panel",
        href: "/webuzo",
        icon: Server,
        badge: "AFFORDABLE",
        color: "text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-500/20"
      },
    ]
  },
  {
    id: "ai-apps",
    title: "AI & 1-Click Apps",
    items: [
      {
        title: "AI Website Builder",
        desc: "Generate complete sites in 60s",
        href: "/ai-website-builder",
        icon: Bot,
        badge: "STUDIO",
        color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20"
      },
      {
        title: "1-Click AI Apps Stack",
        desc: "Open WebUI, Ollama, Supabase, n8n",
        href: "/vps/apps",
        icon: Terminal,
        badge: "39+ APPS",
        color: "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20"
      }
    ]
  },
  {
    id: "reseller",
    title: "Reseller & Agency",
    items: [
      {
        title: "cPanel Reseller (WHM)",
        desc: "White-label WHM/cPanel accounts",
        href: "/reseller",
        icon: Layers,
        color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
      },
      {
        title: "Webuzo Reseller",
        desc: "White-label Webuzo admin — 25% cheaper",
        href: "/webuzo-reseller",
        icon: Layers,
        badge: "NEW",
        color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
      },
    ]
  },
  {
    id: "vps",
    title: "VPS & Dedicated Servers",
    items: [
      {
        title: "Dedicated KVM VPS",
        desc: "Full Root SSH & dedicated resources",
        href: "/vps",
        icon: Server,
        color: "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20"
      },
      {
        title: "Bare-Metal Dedicated",
        desc: "100% Dedicated AMD EPYC & Xeon",
        href: "/dedicated-servers",
        icon: Cpu,
        badge: "BARE-METAL",
        color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20"
      }
    ]
  }
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [openAccordion, setOpenAccordion] = React.useState<string | null>("hosting")
  const [headerBottom, setHeaderBottom] = React.useState(56)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Dynamically calculate exact bottom edge of header navbar
  React.useEffect(() => {
    const updateHeaderBottom = () => {
      const headerEl = document.querySelector('header')
      if (headerEl) {
        setHeaderBottom(headerEl.getBoundingClientRect().bottom)
      }
    }

    if (isOpen) {
      updateHeaderBottom()
      window.addEventListener('scroll', updateHeaderBottom, { passive: true })
      window.addEventListener('resize', updateHeaderBottom, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', updateHeaderBottom)
      window.removeEventListener('resize', updateHeaderBottom)
    }
  }, [isOpen])

  // Lock body scroll when overlay is active
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id)
  }

  const triggerLiveChat = () => {
    setIsOpen(false)
    if (typeof window !== 'undefined') {
      const tawk = (window as any).Tawk_API
      if (tawk && typeof tawk.maximize === 'function') {
        tawk.maximize()
      } else if (tawk && typeof tawk.toggle === 'function') {
        tawk.toggle()
      } else {
        window.location.href = "https://wa.me/919409594000?text=Hi%20HostingSpell%2C%20I%20need%20support."
      }
    }
  }

  const menuOverlay = (
    <div 
      style={{ top: `${headerBottom}px` }}
      className={`fixed inset-x-0 bottom-0 z-[49] bg-white/95 dark:bg-[#161617]/95 text-zinc-900 dark:text-white backdrop-blur-[25px] backdrop-saturate-[180%] flex flex-col font-sans transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {/* Dynamic Sub-Header Info Bar with Direct Phone & Portal Login */}
      <div className="px-4 py-2.5 bg-slate-100/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
        <a 
          href="tel:+919409594000"
          className="text-xs font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 hover:underline"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Call: +91 94095 94000</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="https://manage.hostingspell.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-extrabold px-3 py-1 rounded-lg bg-primary text-white shadow-xs flex items-center gap-1"
          >
            <User className="w-3 h-3" />
            <span>Portal Login</span>
          </a>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5">
        
        {/* Accordion Categories */}
        {navGroups.map((group) => {
          const isExpanded = openAccordion === group.id
          return (
            <div key={group.id} className="rounded-2xl border border-slate-200 dark:border-zinc-800/80 bg-white dark:bg-[#0D0F14] overflow-hidden shadow-xs transition-colors">
              <button
                onClick={() => toggleAccordion(group.id)}
                className="w-full px-4 py-3 flex items-center justify-between text-left font-black text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors bg-slate-50 dark:bg-zinc-900/70 cursor-pointer border-b border-transparent"
              >
                <span>{group.title}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180 text-primary" : ""}`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="p-2 space-y-1 border-t border-slate-200 dark:border-zinc-800/60">
                  {group.items.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800/70 transition-all group border border-transparent hover:border-slate-200 dark:hover:border-zinc-700/50"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-2 rounded-xl border ${item.color} shrink-0`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-xs text-foreground group-hover:text-primary transition-colors truncate">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-black uppercase bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded shrink-0">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-muted-foreground truncate mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 shrink-0" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}

        {/* AI Website Builder Featured Card */}
        <a 
          href="/ai-website-builder" 
          onClick={() => setIsOpen(false)}
          className="p-3.5 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-500/15 dark:via-indigo-500/10 flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/15 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-foreground group-hover:text-primary transition-colors">AI Website Studio</div>
              <div className="text-[11px] text-muted-foreground">Generate complete sites in &lt; 60 seconds</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Region & Country Selection Row */}
        <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-zinc-800/80 bg-white dark:bg-[#0D0F14] space-y-2 shadow-xs">
          <div className="text-[10px] font-black uppercase tracking-wider text-muted-foreground flex items-center justify-between">
            <span>Select Region / Country</span>
            <span className="text-primary font-bold">12 Regional Portals</span>
          </div>
          <RegionSelector variant="mobile" />
        </div>

        {/* Dedicated Prominent Theme Mode Segment */}
        <MobileThemeSegment />

        {/* Quick Direct Links Grid */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <a
            href="/domain"
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0D0F14] flex items-center gap-2 text-xs font-extrabold text-foreground hover:border-primary/40 transition-colors shadow-xs"
          >
            <Globe className="w-3.5 h-3.5 text-blue-500" />
            <span>Search Domains</span>
          </a>

          <a
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0D0F14] flex items-center gap-2 text-xs font-extrabold text-foreground hover:border-primary/40 transition-colors shadow-xs"
          >
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>Pricing Matrix</span>
          </a>
        </div>

      </div>

      {/* Sticky Bottom Multi-Action Support & Portal Bar */}
      <div className="p-3.5 border-t border-slate-200 dark:border-zinc-800 bg-white/95 dark:bg-[#12141A]/95 backdrop-blur-[20px] shrink-0 space-y-2 shadow-2xl">
        
        {/* Top Direct Action: Claim Offer */}
        <a href="/pricing" onClick={() => setIsOpen(false)} className="block w-full">
          <button className="w-full bg-[#0073EC] hover:bg-[#005bb5] text-white font-extrabold text-xs py-3 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>View All Plans &amp; Save 75%</span>
          </button>
        </a>

        {/* 3-Way Instant Contact Grid */}
        <div className="grid grid-cols-3 gap-2">
          
          {/* 1. Phone Call */}
          <a href="tel:+919409594000" className="block w-full">
            <button className="w-full font-bold text-[11px] py-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400 hover:bg-purple-500/20 flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Sales</span>
            </button>
          </a>

          {/* 2. WhatsApp */}
          <a href="https://wa.me/919409594000?text=Hi%20HostingSpell%2C%20I%20need%20assistance." target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full font-bold text-[11px] py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </a>

          {/* 3. Live Chat */}
          <button 
            onClick={triggerLiveChat}
            className="w-full font-bold text-[11px] py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20 flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Live Chat</span>
          </button>

        </div>
      </div>

    </div>
  )

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/15 text-zinc-900 dark:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer z-[100] relative border border-zinc-200/80 dark:border-white/10"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
      >
        <div className="w-5 h-5 relative flex items-center justify-center">
          <span 
            className={`absolute h-0.5 w-4 bg-zinc-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`} 
          />
          <span 
            className={`absolute h-0.5 w-4 bg-zinc-800 dark:bg-white rounded-full transition-all duration-200 ease-in-out ${
              isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`} 
          />
          <span 
            className={`absolute h-0.5 w-4 bg-zinc-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`} 
          />
        </div>
      </button>

      {mounted && createPortal(menuOverlay, document.body)}
    </div>
  )
}
