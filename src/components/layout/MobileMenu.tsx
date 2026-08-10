import * as React from "react"
import { createPortal } from "react-dom"
import { Menu, X, Server, Cloud, Globe, MonitorSmartphone, Code, Cpu, Sparkles, User, ChevronRight } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent background scrolling when mobile menu is open
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

  const menuDropdownContent = (
    <div className="fixed inset-x-0 top-[100px] bottom-0 w-full bg-[#0B0C0E] text-white z-[9999] overflow-y-auto p-5 sm:p-6 border-t border-zinc-800/90 flex flex-col justify-between shadow-2xl opacity-100 font-sans">
      <div className="flex flex-col gap-6">
        
        {/* Status SLA Indicator */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Navigation Menu</span>
          <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            🟢 99.99% Uptime SLA
          </span>
        </div>

        {/* Cloud Hosting Tiers */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-1">Cloud Hosting Tiers</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a 
              href="/cloud-hosting" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Cloud className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-blue-400">Cloud NVMe Hosting</div>
                  <div className="text-[11px] text-zinc-400">10x LiteSpeed speed</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="/premium-hosting" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-blue-400">Premium Hosting</div>
                  <div className="text-[11px] text-zinc-400">Dedicated CPU & RAM</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="/wordpress-hosting" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <MonitorSmartphone className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-blue-400">WordPress Hosting</div>
                  <div className="text-[11px] text-zinc-400">LSCache Optimized</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="/combo-hosting" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-blue-400">Combo Free Domain</div>
                  <div className="text-[11px] text-zinc-400">Free Lifetime Domain</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="/nodejs-hosting" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-blue-400">Node.js Hosting</div>
                  <div className="text-[11px] text-zinc-400">Express & Next.js</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="/python-hosting" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-blue-400">Python Hosting</div>
                  <div className="text-[11px] text-zinc-400">Django, Flask & FastAPI</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* VPS & Infrastructure */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-1">VPS & Infrastructure</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a 
              href="/vps" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-purple-400">Dedicated KVM VPS</div>
                  <div className="text-[11px] text-zinc-400">Full Root SSH Control</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="/vps/apps" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-white group-hover:text-purple-400">1-Click VPS Apps</span>
                    <span className="text-[9px] font-black uppercase bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded">39+ APPS</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">Dokploy, Open WebUI, Supabase</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Quick Links & Resources */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">Domains & Pricing</div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-zinc-300">
              <a href="/domain" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Domain Search</a>
              <a href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Pricing Matrix</a>
              <a href="/reseller" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Reseller Hosting</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">Resources</div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-zinc-300">
              <a href="/showcase" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Client Showcase</a>
              <a href="/blog" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Engineering Blog</a>
              <a href="/knowledgebase" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Knowledgebase</a>
              <a href="/affiliates" onClick={() => setIsOpen(false)} className="text-emerald-400 hover:underline">Affiliates (Earn $50)</a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sticky Action CTAs */}
      <div className="flex flex-col gap-3 pt-6 border-t border-zinc-800 mt-6 pb-6">
        <a href="/pricing" onClick={() => setIsOpen(false)} className="w-full">
          <button className="w-full bg-[#0073EC] hover:bg-[#005bb5] text-white font-extrabold text-sm py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 transition-all">
            <Sparkles className="w-4 h-4" /> Claim 75% OFF Cloud Offer
          </button>
        </a>

        <div className="grid grid-cols-2 gap-3">
          <a href="https://manage.hostingspell.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full font-extrabold text-xs py-3.5 rounded-xl border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 flex items-center justify-center gap-1.5 transition-all">
              <User className="w-4 h-4" /> Client Portal
            </button>
          </a>

          <a href="https://wa.me/919409594000" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full font-extrabold text-xs py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 flex items-center justify-center gap-1.5 transition-all">
              <svg className="w-4 h-4 text-emerald-400 fill-emerald-400 shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>+91 94095 94000</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="lg:hidden">
      {/* Toggle Button in Header (Morphs between Menu & X) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl text-white hover:bg-zinc-800/80 transition-colors flex items-center justify-center focus:outline-none cursor-pointer"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Render Portal directly under document.body to break out of header backdrop-filter containing block */}
      {isOpen && mounted && createPortal(menuDropdownContent, document.body)}
    </div>
  )
}
