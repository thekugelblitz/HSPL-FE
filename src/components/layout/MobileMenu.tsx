import * as React from "react"
import { createPortal } from "react-dom"
import { 
  Menu, X, Server, Cloud, Globe, MonitorSmartphone, Code, Cpu, 
  Sparkles, User, ChevronRight, ChevronDown, Layers, BookOpen, PhoneCall
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
        color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
      },
      {
        title: "Premium Hosting",
        desc: "Dedicated CPU & RAM resources",
        href: "/premium-hosting",
        icon: Server,
        color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
      },
      {
        title: "WordPress Hosting",
        desc: "Pre-installed LSCache optimization",
        href: "/wordpress-hosting",
        icon: MonitorSmartphone,
        color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
      },
      {
        title: "Combo Free Domain",
        desc: "Free lifetime domain inclusion",
        href: "/combo-hosting",
        icon: Globe,
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
      },
      {
        title: "Node.js Hosting",
        desc: "Optimized for Express & Next.js",
        href: "/nodejs-hosting",
        icon: Code,
        color: "text-green-400 bg-green-500/10 border-green-500/20"
      },
      {
        title: "Python Hosting",
        desc: "Django, Flask & FastAPI support",
        href: "/python-hosting",
        icon: Cpu,
        color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
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
        color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
      },
      {
        title: "1-Click VPS Apps",
        desc: "Dokploy, Open WebUI, Supabase",
        href: "/vps/apps",
        icon: Sparkles,
        badge: "39+ APPS",
        color: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20"
      },
      {
        title: "Reseller WHM Hosting",
        desc: "White-label cPanel accounts",
        href: "/reseller",
        icon: Layers,
        color: "text-rose-400 bg-rose-500/10 border-rose-500/20"
      }
    ]
  }
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [openAccordion, setOpenAccordion] = React.useState<string | null>("hosting")

  React.useEffect(() => {
    setMounted(true)
  }, [])

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

  const menuOverlay = (
    <div className="fixed inset-0 z-[99999] bg-[#08090B] text-white flex flex-col font-sans animate-in fade-in duration-200">
      
      {/* Pristine Mobile Header Bar */}
      <div className="h-16 px-5 border-b border-zinc-800/80 bg-[#0C0D10] flex items-center justify-between shrink-0 shadow-lg">
        <a href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
          <img src="/logo-light.png" alt="HostingSpell" className="h-6 object-contain" />
        </a>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            99.99% SLA
          </span>

          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        
        {/* Accordion Categories */}
        {navGroups.map((group) => {
          const isExpanded = openAccordion === group.id
          return (
            <div key={group.id} className="rounded-2xl border border-zinc-800/80 bg-[#0F1115] overflow-hidden transition-colors">
              <button
                onClick={() => toggleAccordion(group.id)}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left font-extrabold text-sm text-zinc-200 hover:text-white transition-colors bg-zinc-900/60 cursor-pointer"
              >
                <span>{group.title}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isExpanded ? "rotate-180 text-blue-400" : ""}`} />
              </button>

              {isExpanded && (
                <div className="p-2 space-y-1.5 border-t border-zinc-800/60">
                  {group.items.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800/60 transition-all group border border-transparent hover:border-zinc-700/50"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`p-2 rounded-xl border ${item.color} shrink-0`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-xs text-white group-hover:text-blue-400 transition-colors truncate">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-black uppercase bg-purple-500/20 text-purple-400 border border-purple-500/30 px-1.5 py-0.5 rounded shrink-0">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}

        {/* Quick Services Grid (Domains & Resources) */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-4 rounded-2xl border border-zinc-800/80 bg-[#0F1115] space-y-3">
            <div className="text-[11px] font-black uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Domains</span>
            </div>
            <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-300">
              <a href="/domain" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Domain Search</a>
              <a href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Pricing Matrix</a>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-zinc-800/80 bg-[#0F1115] space-y-3">
            <div className="text-[11px] font-black uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Resources</span>
            </div>
            <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-300">
              <a href="/showcase" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Showcase</a>
              <a href="/knowledgebase" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Knowledgebase</a>
              <a href="/blog" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Blog</a>
              <a href="/affiliates" onClick={() => setIsOpen(false)} className="text-emerald-400 font-bold hover:underline">Earn $50</a>
            </div>
          </div>
        </div>

      </div>

      {/* Pro Sticky Bottom CTAs */}
      <div className="p-4 border-t border-zinc-800/80 bg-[#0C0D10] shrink-0 space-y-3 shadow-2xl">
        <a href="/pricing" onClick={() => setIsOpen(false)} className="block w-full">
          <button className="w-full bg-gradient-to-r from-[#0073EC] via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Claim 75% OFF Cloud Offer</span>
          </button>
        </a>

        <div className="grid grid-cols-2 gap-2.5">
          <a href="https://manage.hostingspell.com/login" target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full font-bold text-xs py-3 rounded-xl border border-zinc-700/80 bg-zinc-900 text-white hover:bg-zinc-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <User className="w-3.5 h-3.5 text-zinc-400" />
              <span>Client Portal</span>
            </button>
          </a>

          <a href="https://wa.me/919409594000" target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full font-bold text-xs py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Support</span>
            </button>
          </a>
        </div>
      </div>

    </div>
  )

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-xl text-white hover:bg-zinc-800/80 transition-colors flex items-center justify-center focus:outline-none cursor-pointer"
        aria-label="Open Navigation Menu"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {isOpen && mounted && createPortal(menuOverlay, document.body)}
    </div>
  )
}
