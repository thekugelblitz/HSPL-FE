import * as React from "react"
import { Menu, Server, Cloud, Globe, MonitorSmartphone, Code, Cpu } from "lucide-react"

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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          <a href="/" className="text-lg font-medium hover:text-primary transition-colors">Home</a>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Hosting</h4>
            <a href="/cloud-hosting" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><Cloud className="w-4 h-4"/> Cloud Hosting</a>
            <a href="/premium-hosting" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><Server className="w-4 h-4"/> Premium Hosting</a>
            <a href="/combo-hosting" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><Globe className="w-4 h-4"/> Combo Hosting</a>
            <a href="/wordpress-hosting" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><MonitorSmartphone className="w-4 h-4"/> WordPress Hosting</a>
            <a href="/nodejs-hosting" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><Code className="w-4 h-4"/> Node.js Hosting</a>
            <a href="/python-hosting" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><Cpu className="w-4 h-4"/> Python Hosting</a>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">VPS & Reseller</h4>
            <a href="/vps" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><Server className="w-4 h-4"/> VPS Hosting</a>
            <a href="/reseller" className="flex items-center gap-2 text-base hover:text-primary transition-colors py-1"><Globe className="w-4 h-4"/> Reseller Hosting</a>
          </div>

          <div className="flex flex-col gap-2 mt-2 border-t border-border/40 pt-4">
            <a href="/domain" className="text-lg font-medium hover:text-primary transition-colors">Domain Search</a>
            <a href="/pricing" className="text-lg font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-lg font-medium hover:text-primary transition-colors">Blog</a>
          </div>
          
          <div className="mt-4">
            <a href="https://manage.hostingspell.com/login">
              <Button className="w-full">Client Login</Button>
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
