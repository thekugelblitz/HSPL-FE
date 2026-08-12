import React, { useState } from "react";
import type { HostingPlan } from "@/lib/pricing/cloudPlans";
import type { LocationOption } from "@/lib/pricing/constants";
import { useCurrency } from "@/lib/pricing/pricingStore";
import { buildWhmcsCheckoutUrl } from "@/lib/pricing/whmcs";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";

interface InteractiveComparisonTableProps {
  plans: HostingPlan[];
  locations: LocationOption[];
  defaultLocation?: string;
  categoryName?: string;
}

export function InteractiveComparisonTable({
  plans,
  locations,
  defaultLocation,
  categoryName = "Web Hosting Specs",
}: InteractiveComparisonTableProps) {
  const { currency } = useCurrency();
  const [selectedLocation, setSelectedLocation] = useState<string>(
    defaultLocation || locations[0]?.value || "india"
  );

  const selectedLocObj = locations.find((l) => l.value === selectedLocation) || locations[0];
  const countryCode = selectedLocObj?.code || "IND";
  const currencySymbol = currency === "INR" ? "₹" : "$";

  return (
    <div className="w-full space-y-6">
      {/* Top Location Selector */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-muted/40 border border-border/80">
        <div>
          <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wide">
            Detailed {categoryName} Comparison
          </h3>
          <p className="text-xs text-muted-foreground">
            Comparing plan specifications for {selectedLocObj?.label} Datacenter
          </p>
        </div>

        <div className="flex items-center gap-2">
          {locations.map((loc) => {
            const isActive = loc.value === selectedLocation;
            return (
              <button
                key={loc.value}
                type="button"
                onClick={() => setSelectedLocation(loc.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card hover:bg-muted text-foreground border-border"
                }`}
              >
                <span>{loc.flag} {loc.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-xl">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-border/60 bg-muted/30">
              <th className="p-4 font-black text-foreground uppercase tracking-wider w-1/4">Features & Specs</th>
              {plans.map((plan, idx) => {
                const displayName = plan.locationNames?.[countryCode] || plan.name;
                return (
                  <th key={idx} className="p-4 text-center font-black uppercase tracking-wider">
                    <div className="text-sm font-black text-foreground">{displayName}</div>
                    <div className="text-[10px] text-primary font-extrabold uppercase mt-0.5">{plan.caption}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {/* Price Row */}
            <tr className="bg-primary/5">
              <td className="p-4 font-extrabold text-foreground">Starting Monthly Price</td>
              {plans.map((plan, idx) => {
                const countryPricing = plan.pricing[countryCode] || plan.pricing["IND"] || Object.values(plan.pricing)[0];
                const currencyPricing = countryPricing?.[currency] || countryPricing?.["USD"];
                const monthlyPrice = currencyPricing?.["annual"] ? Number((currencyPricing["annual"] / 12).toFixed(2)) : (currencyPricing?.["monthly"] || 0);

                return (
                  <td key={idx} className="p-4 text-center font-black text-base text-foreground">
                    {currencySymbol}{monthlyPrice}<span className="text-xs font-normal text-muted-foreground">/mo</span>
                  </td>
                );
              })}
            </tr>

            {/* Feature Rows */}
            {plans[0]?.features.map((feat, fIdx) => (
              <tr key={fIdx} className="hover:bg-muted/20 transition-colors">
                <td className="p-4 font-semibold text-foreground/90">{feat.label.split("\n")[0]}</td>
                {plans.map((plan, pIdx) => {
                  const currFeats = plan.locationFeatures?.[countryCode] || plan.features || [];
                  const featVal = currFeats[fIdx]?.label || feat.label;
                  const isCheck = featVal.toLowerCase().includes("unlimited") || featVal.toLowerCase().includes("free") || featVal.toLowerCase().includes("included");

                  return (
                    <td key={pIdx} className="p-4 text-center font-medium text-muted-foreground">
                      <div className="flex items-center justify-center gap-1.5">
                        {isCheck ? (
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : null}
                        <span>{featVal.split("\n")[0]}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* CTA Buttons Row */}
            <tr className="bg-muted/20">
              <td className="p-4 font-bold text-foreground">Action</td>
              {plans.map((plan, pIdx) => {
                const baseWhmcsLink = plan.links[countryCode] || plan.links["IND"] || plan.link || "#";
                const checkoutUrl = buildWhmcsCheckoutUrl(baseWhmcsLink, currency, "annual");

                return (
                  <td key={pIdx} className="p-4 text-center">
                    <a
                      href={checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full max-w-[140px]"
                    >
                      <button
                        type="button"
                        className="w-full py-2.5 px-3 rounded-xl font-extrabold text-xs bg-primary hover:opacity-90 text-primary-foreground transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </a>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
