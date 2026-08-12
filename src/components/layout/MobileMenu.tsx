import * as React from "react"
import { createPortal } from "react-dom"
import { 
  Server, Cloud, Globe, MonitorSmartphone, Code, Cpu, 
  Sparkles, User, ChevronRight, ChevronDown, Layers, BookOpen, PhoneCall, ArrowRight
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
        title: "Reseller WHM Hosting",
        desc: "White-label cPanel accounts",
        href: "/reseller",
        icon: Layers,
        color: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20"
      }
    ]
  },
  {
    id: "vps",
    title: "VPS & Infrastructure",
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
      },
      {
        title: "1-Click VPS Apps",
        desc: "Dokploy, Open WebUI, Supabase",
        href: "/vps/apps",
        icon: Sparkles,
        badge: "39+ APPS",
        color: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20"
      }
    ]
  }
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [openAccordion, setOpenAccordion] = React.useState<string | null>("hosting")
  const [headerBottom, setHeaderBottom] = React.useState(64)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Dynamically calculate exact bottom edge of header navbar (eliminates all gaps seamlessly)
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

  // Lock body scroll when overlay is active (matching DreamHost.com)
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

  const menuOverlay = (
    <div 
      style={{ top: `${headerBottom}px` }}
      className={`fixed inset-x-0 bottom-0 z-[49] bg-white/85 dark:bg-[#161617]/90 text-zinc-900 dark:text-white backdrop-blur-[25px] backdrop-saturate-[180%] flex flex-col font-sans transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {/* Dynamic Sub-Header Info Bar */}
      <div className="px-5 py-2.5 bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between shrink-0">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          99.99% Enterprise Uptime SLA
        </span>

        <span className="text-[11px] font-extrabold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
          75% OFF Flash Sale
        </span>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        
        {/* Accordion Categories */}
        {navGroups.map((group) => {
          const isExpanded = openAccordion === group.id
          return (
            <div key={group.id} className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#0A0A0C] overflow-hidden transition-colors">
              <button
                onClick={() => toggleAccordion(group.id)}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left font-extrabold text-sm text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors bg-zinc-100/80 dark:bg-zinc-900/60 cursor-pointer"
              >
                <span>{group.title}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-500 dark:text-zinc-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-600 dark:text-blue-400" : ""}`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="p-2 space-y-1.5 border-t border-zinc-200 dark:border-zinc-800/60">
                  {group.items.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-all group border border-transparent hover:border-zinc-300/60 dark:hover:border-zinc-700/50"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`p-2 rounded-xl border ${item.color} shrink-0`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-xs text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-black uppercase bg-purple-500/15 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30 px-1.5 py-0.5 rounded shrink-0">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 truncate mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}

        {/* Remixer AI Builder Featured Link */}
        <a 
          href="/ai-website-builder" 
          onClick={() => setIsOpen(false)}
          className="p-4 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-500/15 dark:via-indigo-500/10 flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/15 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Remixer AI Website Builder</div>
              <div className="text-[11px] text-zinc-600 dark:text-zinc-400">Generate full websites in &lt; 60 seconds</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Quick Services Grid */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#0A0A0C] space-y-3">
            <div className="text-[11px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Domains</span>
            </div>
            <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <a href="/domain" onClick={() => setIsOpen(false)} className="hover:text-blue-600 dark:hover:text-white transition-colors">Domain Search</a>
              <a href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-blue-600 dark:hover:text-white transition-colors">Pricing Matrix</a>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#0A0A0C] space-y-3">
            <div className="text-[11px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Resources</span>
            </div>
            <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <a href="/showcase" onClick={() => setIsOpen(false)} className="hover:text-blue-600 dark:hover:text-white transition-colors">Showcase</a>
              <a href="/knowledgebase" onClick={() => setIsOpen(false)} className="hover:text-blue-600 dark:hover:text-white transition-colors">Knowledgebase</a>
              <a href="/blog" onClick={() => setIsOpen(false)} className="hover:text-blue-600 dark:hover:text-white transition-colors">Blog</a>
              <a href="/affiliates" onClick={() => setIsOpen(false)} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Earn $50</a>
            </div>
          </div>
        </div>

      </div>

      {/* DreamHost Pro Sticky Bottom Action Bar */}
      <div className="p-4 border-t border-black/[0.08] dark:border-white/[0.1] bg-white/90 dark:bg-[#161617]/95 backdrop-blur-[20px] shrink-0 space-y-3 shadow-2xl">
        <a href="/pricing" onClick={() => setIsOpen(false)} className="block w-full">
          <button className="w-full bg-[#0073EC] hover:bg-[#005bb5] text-white font-extrabold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Claim 75% OFF Cloud Offer</span>
          </button>
        </a>

        <div className="grid grid-cols-2 gap-2.5">
          <a href="https://manage.hostingspell.com/login" target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full font-bold text-xs py-3 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <User className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>Client Portal</span>
            </button>
          </a>

          <a href="https://wa.me/919409594000" target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full font-bold text-xs py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Support</span>
            </button>
          </a>
        </div>
      </div>

    </div>
  )

  return (
    <div className="lg:hidden">
      {/* DreamHost.com Iconic In-Place Morphing Hamburger-to-X Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/15 text-zinc-900 dark:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer z-[100] relative border border-zinc-200/80 dark:border-white/10"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
      >
        <div className="w-5 h-5 relative flex items-center justify-center">
          {/* Top Line -> rotates 45deg on open */}
          <span 
            className={`absolute h-0.5 w-5 bg-zinc-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`} 
          />
          {/* Middle Line -> scales to 0 & fades out on open */}
          <span 
            className={`absolute h-0.5 w-5 bg-zinc-800 dark:bg-white rounded-full transition-all duration-200 ease-in-out ${
              isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`} 
          />
          {/* Bottom Line -> rotates -45deg on open */}
          <span 
            className={`absolute h-0.5 w-5 bg-zinc-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`} 
          />
        </div>
      </button>

      {mounted && createPortal(menuOverlay, document.body)}
    </div>
  )
}


