import React, { useState } from "react";
import type { HostingPlan } from "@/lib/pricing/cloudPlans";
import type { LocationOption, BillingCycleOption } from "@/lib/pricing/constants";
import { useCurrency } from "@/lib/pricing/pricingStore";
import { buildWhmcsCheckoutUrl } from "@/lib/pricing/whmcs";
import { InfoPopover } from "./InfoPopover";
import { WorldMapModal } from "./WorldMapModal";
import { Check, Zap, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface InteractivePricingGridV2Props {
  plans: HostingPlan[];
  locations: LocationOption[];
  billingCycles: BillingCycleOption[];
  defaultLocation?: string;
  defaultCycle?: string;
  title?: string;
  subtitle?: string;
}

export function InteractivePricingGridV2({
  plans,
  locations,
  billingCycles,
  defaultLocation,
  defaultCycle,
  title,
  subtitle,
}: InteractivePricingGridV2Props) {
  const { currency, setCurrency } = useCurrency();
  
  const initialLoc = defaultLocation || locations[0]?.value || "india";
  const initialCycle = defaultCycle || billingCycles[0]?.value || "annual";

  const [selectedLocation, setSelectedLocation] = useState<string>(initialLoc);
  const [selectedCycle, setSelectedCycle] = useState<string>(initialCycle);
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

  const selectedLocObj = locations.find((l) => l.value === selectedLocation) || locations[0];
  const countryCode = selectedLocObj?.code || "IND";
  const currencySymbol = currency === "INR" ? "₹" : "$";

  // Dynamic grid class based on plan count to ensure 2 plans (Combo) center cleanly without trailing blank space
  const gridLayoutClass =
    plans.length === 1
      ? "max-w-md mx-auto grid grid-cols-1 gap-6"
      : plans.length === 2
      ? "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center"
      : plans.length === 3
      ? "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";

  return (
    <div className="w-full space-y-8">
      
      {/* 100% Mobile-Friendly & Fully Visible Floating Control Bar */}
      <div className="glass-card max-w-6xl mx-auto p-3 sm:p-4 rounded-2xl border border-border/80 bg-card/95 backdrop-blur-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Datacenter Location Pills (Wraps cleanly on mobile so ALL choices are 100% visible) */}
        <div className="w-full lg:w-auto flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-muted-foreground mr-1 shrink-0">
            Datacenter:
          </span>
          {locations.map((loc) => {
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

          {/* Interactive Map & Ping Test Trigger */}
          <button
            type="button"
            onClick={() => setIsMapOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold text-amber-500 hover:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all cursor-pointer"
            title="Interactive Map & Speed Test"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Map & Ping</span>
          </button>
        </div>

        {/* Billing Cycle Switcher (Grid on mobile, flex on desktop - 100% visible without scroll) */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1 p-1 bg-muted/50 rounded-xl border border-border/80 text-xs font-bold w-full sm:w-auto">
            {billingCycles.map((cycle) => {
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
                      className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded-md ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
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

      {/* Interactive World Map Modal */}
      <WorldMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        locations={locations}
        selectedLocation={selectedLocation}
        onSelectLocation={(locVal) => setSelectedLocation(locVal)}
      />

      {/* Plans Grid */}
      <div className={`${gridLayoutClass} items-stretch`}>
        {plans.map((plan, idx) => {
          // Check pricing for current location and currency
          const countryPricing = plan.pricing[countryCode] || plan.pricing["IND"] || Object.values(plan.pricing)[0];
          const currencyPricing = countryPricing?.[currency] || countryPricing?.["USD"];
          const rawPrice = currencyPricing?.[selectedCycle] ?? currencyPricing?.["annual"] ?? currencyPricing?.["monthly"] ?? 0;
          
          // Calculate monthly display price
          let monthlyEquivalent = rawPrice;
          if (selectedCycle === "annual") monthlyEquivalent = Number((rawPrice / 12).toFixed(2));
          else if (selectedCycle === "biannual") monthlyEquivalent = Number((rawPrice / 24).toFixed(2));
          else if (selectedCycle === "triannual") monthlyEquivalent = Number((rawPrice / 36).toFixed(2));
          else if (selectedCycle === "quarterly") monthlyEquivalent = Number((rawPrice / 3).toFixed(2));
          else if (selectedCycle === "semiannually") monthlyEquivalent = Number((rawPrice / 6).toFixed(2));

          const baseWhmcsLink = plan.links[countryCode] || plan.links["IND"] || plan.link || "#";
          const checkoutUrl = buildWhmcsCheckoutUrl(baseWhmcsLink, currency, selectedCycle);

          const features = plan.locationFeatures?.[countryCode] || plan.features || [];
          const displayName = plan.locationNames?.[countryCode] || plan.name;
          const isPopular = plan.highlight || idx === 1;

          return (
            <div
              key={`${plan.name}-${idx}`}
              className={`relative flex flex-col p-6 rounded-3xl transition-all duration-300 ${
                isPopular
                  ? "border-2 border-[#0073EC] shadow-2xl shadow-blue-500/20 bg-card text-foreground ring-2 ring-[#0073EC]/20 scale-[1.02] z-10"
                  : "border border-border/80 bg-card hover:border-primary/40 shadow-sm text-foreground"
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-0 right-0 mx-auto w-fit rounded-full bg-[#0073EC] px-4 py-1 text-[11px] font-black text-white shadow-lg flex items-center gap-1.5 uppercase tracking-wider z-20">
                  <Zap className="w-3.5 h-3.5 fill-white text-white animate-pulse" />
                  Most Popular Choice
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black uppercase tracking-tight text-foreground">{displayName}</h3>
                  {plan.ram && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold">
                      {plan.ram}
                    </span>
                  )}
                </div>
                {plan.caption && (
                  <p className="text-xs font-bold text-primary uppercase mt-1 tracking-wider">{plan.caption}</p>
                )}
              </div>

              {/* Price Box */}
              <div className="mb-6 border-b border-border/60 pb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                    {currencySymbol}{monthlyEquivalent}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">/mo</span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-1.5 flex items-center justify-between">
                  <span>
                    Billed as <strong className="text-foreground">{currencySymbol}{rawPrice}</strong> / {selectedCycle}
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="mb-8 flex-1 space-y-3 text-xs sm:text-sm">
                {features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="mr-2.5 h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium leading-snug flex items-center">
                      {feat.label}
                      {feat.info && <InfoPopover content={feat.info} />}
                    </span>
                  </li>
                ))}
              </ul>

              {/* WHMCS Checkout CTA */}
              <div className="space-y-3 mt-auto">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block group"
                >
                  <button
                    type="button"
                    className={`w-full py-3.5 px-4 font-extrabold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? "bg-[#0073EC] hover:bg-[#005bb5] text-white shadow-lg shadow-blue-500/25"
                        : "bg-muted/80 hover:bg-muted text-foreground border border-border/80"
                    }`}
                  >
                    <span>Configure & Buy Plan</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </a>

                <div className="text-[11px] text-center text-muted-foreground font-medium flex items-center justify-center gap-2 pt-1">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>30-Day Money Back</span>
                  </div>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">⚡ Instant Setup</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
