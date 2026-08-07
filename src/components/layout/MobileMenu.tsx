import * as React from "react"
import { Menu, Server, Cloud, Globe, MonitorSmartphone, Code, Cpu, Sparkles, BookOpen, Layers, ShieldCheck, PhoneCall, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] sm:w-[400px] overflow-y-auto bg-card/98 backdrop-blur-2xl border-r border-border/60 p-6">
        <SheetHeader class="border-b border-border/40 pb-4">
          <SheetTitle className="text-left flex items-center justify-between">
            <span class="font-extrabold text-lg text-foreground">Navigation Menu</span>
            <span class="text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
              🟢 99.99% Uptime
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-6 mt-6">
          {/* Hosting Services */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">Cloud Hosting Tiers</h4>
            <a href="/cloud-hosting" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><Cloud className="w-4 h-4 text-primary"/> Cloud NVMe Hosting</a>
            <a href="/premium-hosting" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><Server className="w-4 h-4 text-primary"/> Premium cPanel Nodes</a>
            <a href="/combo-hosting" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><Globe className="w-4 h-4 text-primary"/> Combo Free Domain</a>
            <a href="/wordpress-hosting" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><MonitorSmartphone className="w-4 h-4 text-primary"/> WordPress LiteSpeed</a>
            <a href="/nodejs-hosting" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><Code className="w-4 h-4 text-primary"/> Node.js Application Server</a>
            <a href="/python-hosting" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><Cpu className="w-4 h-4 text-primary"/> Python Django/Flask</a>
          </div>

          {/* VPS & Infrastructure */}
          <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
            <h4 className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">VPS & Reseller</h4>
            <a href="/vps" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><Server className="w-4 h-4 text-purple-400"/> Dedicated KVM VPS</a>
            <a href="/vps/apps" className="flex items-center justify-between text-sm font-semibold hover:text-primary transition-colors py-1.5">
              <span className="flex items-center gap-2.5"><Sparkles className="w-4 h-4 text-purple-400"/> 1-Click VPS Apps</span>
              <span className="text-[9px] font-black uppercase bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded">39+ Apps</span>
            </a>
            <a href="/reseller" className="flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors py-1.5"><Globe className="w-4 h-4 text-blue-400"/> WHM Reseller Hosting</a>
          </div>

          {/* Domains & Pricing */}
          <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
            <h4 className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">Domains & Pricing</h4>
            <a href="/domain" className="text-sm font-semibold hover:text-primary transition-colors py-1">Domain Search & Transfers</a>
            <a href="/pricing" className="text-sm font-semibold hover:text-primary transition-colors py-1">Full Hosting Pricing Matrix</a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
            <h4 className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">Resources & Support</h4>
            <a href="/showcase" className="text-sm font-semibold hover:text-primary transition-colors py-1">Client Showcase</a>
            <a href="/blog" className="text-sm font-semibold hover:text-primary transition-colors py-1">Engineering Blog</a>
            <a href="/knowledgebase" className="text-sm font-semibold hover:text-primary transition-colors py-1">Knowledgebase Guides</a>
            <a href="/affiliates" className="text-sm font-semibold text-emerald-400 hover:underline py-1">Affiliate Program (Earn $50)</a>
            <a href="/contact" className="text-sm font-semibold hover:text-primary transition-colors py-1">24/7 SLA Contact Support</a>
          </div>
          
          {/* Action CTAs */}
          <div className="flex flex-col gap-3 pt-4 border-t border-border/40">
            <a href="/pricing" className="w-full">
              <Button className="w-full bg-primary hover:opacity-90 text-primary-foreground font-extrabold text-xs py-5 rounded-xl shadow-lg shadow-primary/25">
                <Sparkles className="w-4 h-4 mr-1.5" /> Claim 75% OFF Discount
              </Button>
            </a>
            
            <a href="https://manage.hostingspell.com/login" className="w-full">
              <Button variant="outline" className="w-full font-bold text-xs py-5 rounded-xl border-border/80">
                <User className="w-4 h-4 mr-1.5" /> Client Portal Login
              </Button>
            </a>

            <a href="tel:+919409594000" className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-400 py-2">
              <PhoneCall className="w-3.5 h-3.5" /> Sales Hotline: +91 94095 94000
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
