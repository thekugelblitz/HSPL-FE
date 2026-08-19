import React, { useState } from "react";
import { PLANS_CLOUD_HOSTING } from "@/lib/pricing/cloudPlans";
import { PLANS_PREMIUM_HOSTING } from "@/lib/pricing/premiumPlans";
import { PLANS_VPS_HOSTING } from "@/lib/pricing/vpsPlans";
import { PLANS_RESELLER_HOSTING } from "@/lib/pricing/resellerPlans";
import { PLANS_WEBUZO_HOSTING } from "@/lib/pricing/webuzoPlans";
import { PLANS_WEBUZO_RESELLER } from "@/lib/pricing/webuzoResellerPlans";
import { PLANS_COMBO_HOSTING } from "@/lib/pricing/comboPlans";
import {
  CLOUD_PROVIDER_LOCATIONS,
  PREMIUM_PROVIDER_LOCATIONS,
  VPS_PROVIDER_LOCATIONS,
  RESELLER_PROVIDER_LOCATIONS,
  WEBUZO_PROVIDER_LOCATIONS,
  COMBO_PROVIDER_LOCATIONS,
  GLOBAL_BILLING_CYCLES,
  type LocationOption,
  type BillingCycleOption,
} from "@/lib/pricing/constants";
import type { HostingPlan } from "@/lib/pricing/cloudPlans";
import { useCurrency } from "@/lib/pricing/pricingStore";
import { buildWhmcsCheckoutUrl } from "@/lib/pricing/whmcs";
import { InfoPopover } from "./InfoPopover";
import { 
  Cloud, 
  Zap, 
  MonitorSmartphone, 
  Layers, 
  Terminal, 
  Server, 
  Globe, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

interface CategoryConfig {
  id: string;
  name: string;
  shortName: string;
  badge?: string;
  icon: React.ElementType;
  tagline: string;
  pageHref: string;
  plans: HostingPlan[];
  locations: LocationOption[];
  billingCycles: BillingCycleOption[];
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: "cloud",
    name: "Cloud NVMe Hosting",
    shortName: "Cloud NVMe",
    badge: "75% OFF",
    icon: Cloud,
    tagline: "LiteSpeed Enterprise, NVMe SSDs & cPanel. Ultra-fast for blogs, startups & websites.",
    pageHref: "/cloud-hosting",
    plans: PLANS_CLOUD_HOSTING,
    locations: CLOUD_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.cloudhosting,
  },
  {
    id: "premium",
    name: "Premium cPanel Hosting",
    shortName: "Premium cPanel",
    badge: "DEDICATED CPU",
    icon: Zap,
    tagline: "Dedicated RAM & CPU on Linode/DigitalOcean. For high-traffic WooCommerce & enterprise apps.",
    pageHref: "/premium-hosting",
    plans: PLANS_PREMIUM_HOSTING,
    locations: PREMIUM_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.premiumhosting,
  },
  {
    id: "wordpress",
    name: "WordPress Turbo Hosting",
    shortName: "WordPress",
    badge: "LSCACHE",
    icon: MonitorSmartphone,
    tagline: "Pre-configured LiteSpeed Cache, automated WP updates, staging environments & free SSL.",
    pageHref: "/wordpress-hosting",
    plans: PLANS_CLOUD_HOSTING,
    locations: CLOUD_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.cloudhosting,
  },
  {
    id: "reseller",
    name: "cPanel Reseller Hosting",
    shortName: "cPanel Reseller",
    badge: "WHM INCLUDED",
    icon: Layers,
    tagline: "Launch your hosting company with 100% white-label cPanel/WHM accounts and private nameservers.",
    pageHref: "/reseller",
    plans: PLANS_RESELLER_HOSTING,
    locations: RESELLER_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.resellerhosting,
  },
  {
    id: "webuzo-reseller",
    name: "Webuzo Reseller Hosting",
    shortName: "Webuzo Reseller",
    badge: "25% SAVINGS",
    icon: Layers,
    tagline: "White-label Webuzo admin, WHMCS integration, Apache/Nginx stack & 25% lower licensing cost.",
    pageHref: "/webuzo-reseller",
    plans: PLANS_WEBUZO_RESELLER,
    locations: WEBUZO_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.webuzoreseller || GLOBAL_BILLING_CYCLES.resellerhosting,
  },
  {
    id: "webuzo",
    name: "Webuzo Shared Hosting",
    shortName: "Webuzo Shared",
    badge: "LOW COST",
    icon: Server,
    tagline: "Modern Apache & Nginx reverse proxy with MultiPHP (5.6 - 8.3+) and 350+ 1-click apps.",
    pageHref: "/webuzo",
    plans: PLANS_WEBUZO_HOSTING,
    locations: WEBUZO_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.webuzohosting,
  },
  {
    id: "vps",
    name: "KVM VPS Servers",
    shortName: "VPS Servers",
    badge: "ROOT ACCESS",
    icon: Terminal,
    tagline: "Dedicated KVM virtualization, Virtualizor panel, full root SSH access & 1-click AI stacks.",
    pageHref: "/vps",
    plans: PLANS_VPS_HOSTING,
    locations: VPS_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.vpshosting,
  },
  {
    id: "combo",
    name: "Combo Free Domain Hosting",
    shortName: "Free Domain Combo",
    badge: "LIFETIME DOMAIN",
    icon: Globe,
    tagline: "Lifetime free .COM, .IN, .ORG, .NET domain registration bundled with annual hosting.",
    pageHref: "/combo-hosting",
    plans: PLANS_COMBO_HOSTING,
    locations: COMBO_PROVIDER_LOCATIONS,
    billingCycles: GLOBAL_BILLING_CYCLES.combohosting || GLOBAL_BILLING_CYCLES.cloudhosting,
  },
];

interface PlanBrowserProps {
  initialCategory?: string;
  title?: string;
  subtitle?: string;
}

export function PlanBrowser({
  initialCategory = "cloud",
  title = "Explore All Hosting Plans Across Categories",
  subtitle = "Filter by hosting type, datacenter location, and billing period with real-time currency pricing."
}: PlanBrowserProps) {
  const { currency, symbol } = useCurrency();
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const category = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  const [selectedLocation, setSelectedLocation] = useState<string>(
    category.locations[0]?.value || "india"
  );
  const [selectedCycle, setSelectedCycle] = useState<string>(
    category.billingCycles[category.billingCycles.length - 1]?.value || "triannual"
  );

  // When changing category, safely adjust location & cycle if previous ones aren't available
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const target = CATEGORIES.find((c) => c.id === catId) || CATEGORIES[0];
    if (!target.locations.some((l) => l.value === selectedLocation)) {
      setSelectedLocation(target.locations[0]?.value || "india");
    }
    if (!target.billingCycles.some((b) => b.value === selectedCycle)) {
      setSelectedCycle(target.billingCycles[target.billingCycles.length - 1]?.value || "annual");
    }
  };

  const selectedLocObj =
    category.locations.find((l) => l.value === selectedLocation) || category.locations[0];
  const countryCode = selectedLocObj?.code || "IND";

  const gridLayoutClass =
    category.plans.length === 1
      ? "max-w-md mx-auto grid grid-cols-1 gap-6"
      : category.plans.length === 2
      ? "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center"
      : category.plans.length === 3
      ? "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"
      : category.plans.length === 4
      ? "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center"
      : category.plans.length === 6
      ? "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
      : "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center";

  return (
    <div className="w-full space-y-8">
      
      {/* ─── Category Navigation Bar ─── */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-emerald-500/15 border border-blue-500/25 text-xs font-black uppercase tracking-wider shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500 dark:from-blue-400 dark:via-indigo-300 dark:to-teal-300 bg-clip-text text-transparent">
            All-In-One Hosting Suite
          </span>
          <span className="text-zinc-400">•</span>
          <span className="text-muted-foreground font-semibold">Instant Switch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Category Pills (100% visible on all screens with flex-wrap) */}
        <div className="w-full max-w-6xl mx-auto pt-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-1">
            {CATEGORIES.map((cat) => {
              const IconComp = cat.icon;
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  type="button"
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border shadow-xs ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-[1.03] ring-2 ring-primary/30 font-black"
                      : "bg-card hover:bg-muted text-foreground/80 border-border hover:border-primary/40"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`} />
                  <span>{cat.shortName}</span>
                  {cat.badge && (
                    <span
                      className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Active Category Tagline & Link ─── */}
      <div className="glass-card max-w-6xl mx-auto p-4 sm:p-5 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base sm:text-lg text-foreground">
              {category.name}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:inline">•</span>
            <a
              href={category.pageHref}
              className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>View full {category.shortName} specs & features</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">{category.tagline}</p>
        </div>

        {/* Direct Action Link */}
        <a
          href={category.pageHref}
          className="shrink-0 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-bold transition-colors flex items-center gap-1.5"
        >
          <span>Dedicated {category.shortName} Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ─── Control Bar (Datacenter Location & Billing Period) ─── */}
      <div className="glass-card max-w-6xl mx-auto p-3 sm:p-4 rounded-2xl border border-border/80 bg-card/95 backdrop-blur-2xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Datacenter Location Switcher */}
        <div className="w-full lg:w-auto flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-muted-foreground mr-1 shrink-0">
            Datacenter:
          </span>
          {category.locations.map((loc) => {
            const isActive = loc.value === selectedLocation;
            const isoCode = (loc.iso || "us").toLowerCase();
            return (
              <button
                key={loc.value}
                type="button"
                onClick={() => setSelectedLocation(loc.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#0073EC] text-white border-[#0073EC] shadow-sm font-extrabold scale-[1.02]"
                    : "bg-muted/40 hover:bg-muted text-foreground/90 border-border/60 hover:border-primary/40"
                }`}
              >
                <img
                  src={`https://flagcdn.com/w40/${isoCode}.png`}
                  width="18"
                  height="13"
                  alt={loc.label}
                  className="rounded-xs object-cover shrink-0"
                />
                <span>{loc.label}</span>
              </button>
            );
          })}
        </div>

        {/* Billing Cycle Switcher */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1 p-1 bg-muted/50 rounded-xl border border-border/80 text-xs font-bold w-full sm:w-auto">
            {category.billingCycles.map((cycle) => {
              const isActive = cycle.value === selectedCycle;
              return (
                <button
                  key={cycle.value}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.value)}
                  className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-xs font-extrabold scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{cycle.label}</span>
                  {cycle.discountBadge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-black tracking-tight ${
                        isActive
                          ? "bg-black/20 text-white"
                          : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      }`}
                    >
                      {cycle.discountBadge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* ─── Plan Cards Grid ─── */}
      <div className={`w-full max-w-7xl mx-auto ${gridLayoutClass}`}>
        {category.plans.map((plan, index) => {
          const isPopular =
            plan.name.toUpperCase().includes("PRO") ||
            plan.name.toUpperCase().includes("PREMIUM 2") ||
            plan.name.toUpperCase().includes("EARLDOM") ||
            plan.name.toUpperCase().includes("ADVANCED") ||
            plan.name.toUpperCase().includes("EUROPA") ||
            index === 1;

          // Price extraction
          const locPricing = plan.pricing?.[countryCode] || plan.pricing?.["IND"] || plan.pricing?.["USA"];
          
          let cyclePrice = 0;
          let calculatedMonthlyEquivalent = 0;
          let monthsCount = 12;

          if (locPricing) {
            // Determine currency source
            const sourceCurrency = (currency === "INR" ? "INR" : "USD") as "INR" | "USD";
            const rates = locPricing[sourceCurrency] || locPricing["USD"] || { monthly: 1 };
            
            if (selectedCycle === "monthly") {
              monthsCount = 1;
              cyclePrice = rates.monthly ?? rates.annual ?? 1;
              calculatedMonthlyEquivalent = cyclePrice;
            } else if (selectedCycle === "quarterly") {
              monthsCount = 3;
              cyclePrice = rates.quarterly ?? rates.monthly * 3;
              calculatedMonthlyEquivalent = cyclePrice / 3;
            } else if (selectedCycle === "semiannually") {
              monthsCount = 6;
              cyclePrice = rates.semiannually ?? rates.monthly * 6;
              calculatedMonthlyEquivalent = cyclePrice / 6;
            } else if (selectedCycle === "annual") {
              monthsCount = 12;
              cyclePrice = rates.annual ?? rates.monthly * 12;
              calculatedMonthlyEquivalent = cyclePrice / 12;
            } else if (selectedCycle === "biannual") {
              monthsCount = 24;
              cyclePrice = rates.biannual ?? rates.annual * 2;
              calculatedMonthlyEquivalent = cyclePrice / 24;
            } else if (selectedCycle === "triannual") {
              monthsCount = 36;
              cyclePrice = rates.triannual ?? rates.annual * 3;
              calculatedMonthlyEquivalent = cyclePrice / 36;
            }
          }

          // Exchange conversion for GBP, EUR, CAD, AUD
          let exchangeMultiplier = 1;
          if (currency === "GBP") exchangeMultiplier = 0.79;
          else if (currency === "EUR") exchangeMultiplier = 0.92;
          else if (currency === "CAD") exchangeMultiplier = 1.36;
          else if (currency === "AUD") exchangeMultiplier = 1.52;

          if (currency !== "INR" && currency !== "USD") {
            cyclePrice = cyclePrice * exchangeMultiplier;
            calculatedMonthlyEquivalent = calculatedMonthlyEquivalent * exchangeMultiplier;
          }

          const currencySymbol =
            symbol ||
            (currency === "INR"
              ? "₹"
              : currency === "GBP"
              ? "£"
              : currency === "EUR"
              ? "€"
              : "$");

          const formattedMonthly =
            currency === "INR"
              ? `₹${Math.round(calculatedMonthlyEquivalent)}`
              : `${currencySymbol}${calculatedMonthlyEquivalent.toFixed(2)}`;

          const formattedTotal =
            currency === "INR"
              ? `₹${Math.round(cyclePrice)}`
              : `${currencySymbol}${cyclePrice.toFixed(2)}`;

          // Raw link
          const rawLink = plan.links?.[countryCode] || plan.link;
          const checkoutUrl = buildWhmcsCheckoutUrl(rawLink, {
            billingCycle: selectedCycle as any,
            currency: currency,
          });

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl border transition-all duration-300 ${
                isPopular
                  ? "bg-card border-primary/60 shadow-2xl shadow-primary/15 ring-2 ring-primary/40 -translate-y-1"
                  : "bg-card/70 border-border hover:border-primary/40 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 text-white text-[11px] font-black uppercase px-4 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1 shrink-0">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Recommended Choice</span>
                </div>
              )}

              <div className="p-6 space-y-5">
                
                {/* Plan Header */}
                <div className="space-y-2 min-h-[58px] flex flex-col justify-start">
                  <div className="flex items-center justify-between gap-2">
                    {plan.caption ? (
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md shrink-0 shadow-xs">
                        {plan.caption.replace(/^BEST FOR\s+/i, "").replace(/!+$/, "").trim()}
                      </span>
                    ) : <span />}
                    {plan.ram && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md shrink-0">
                        {plan.ram}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight leading-tight">
                    {plan.name}
                  </h3>
                  {plan.description && plan.description !== "SELECT BILLING CYCLE ON CHECKOUT" && (
                    <p className="text-xs text-muted-foreground font-medium">{plan.description}</p>
                  )}
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 space-y-1">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    Effective Monthly Rate
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                      {formattedMonthly}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">/month</span>
                  </div>
                  {monthsCount > 1 && (
                    <div className="text-[11px] text-muted-foreground font-medium">
                      Billed {formattedTotal} for {monthsCount} months
                    </div>
                  )}
                </div>

                {/* Order Button */}
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button
                    type="button"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isPopular
                        ? "bg-primary hover:bg-primary/90 text-white shadow-primary/25 scale-[1.01]"
                        : "bg-foreground hover:bg-foreground/90 text-background"
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-black uppercase tracking-wider text-foreground/80">
                    Included Features:
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {plan.features.slice(0, 7).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-foreground/90">
                        <div className="p-0.5 rounded-full bg-emerald-500/15 text-emerald-500 shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="flex-1 font-medium">{feat.label}</span>
                        {feat.info && <InfoPopover text={feat.info} />}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer Guarantees */}
              <div className="px-6 py-3 border-t border-border/50 bg-muted/20 rounded-b-3xl flex items-center justify-between text-[11px] text-muted-foreground font-semibold">
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>30-Day Guarantee</span>
                </div>
                <span>Free Migration</span>
              </div>

            </div>
          );
        })}
      </div>

      {/* ─── Footer Comparison Callout ─── */}
      <div className="text-center pt-4">
        <a
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline bg-primary/5 hover:bg-primary/10 border border-primary/20 px-6 py-3 rounded-2xl transition-colors"
        >
          <span>Open Full Pricing Matrix & Technical Comparison</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
