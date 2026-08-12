import React from "react";
import { useCurrency } from "@/lib/pricing/pricingStore";
import { buildWhmcsDomainUrl } from "@/lib/pricing/whmcs";
import { IN_DOMAIN_KYC_TOOLTIP, requiresInRegistryKyc } from "@/lib/pricing/constants";
import { InfoPopover } from "./InfoPopover";
import { Globe, ArrowRight, ShieldCheck } from "lucide-react";

interface DomainPriceItem {
  tld: string;
  regularPriceINR: number;
  promoPriceINR: number;
  regularPriceUSD: number;
  promoPriceUSD: number;
  badge?: string;
  popular?: boolean;
}

const TOP_TLDS: DomainPriceItem[] = [
  { tld: ".com", regularPriceINR: 1199, promoPriceINR: 799, regularPriceUSD: 14.99, promoPriceUSD: 9.99, popular: true, badge: "Most Popular" },
  { tld: ".in", regularPriceINR: 899, promoPriceINR: 499, regularPriceUSD: 11.99, promoPriceUSD: 5.99, popular: true, badge: "India #1" },
  { tld: ".org", regularPriceINR: 1399, promoPriceINR: 899, regularPriceUSD: 16.99, promoPriceUSD: 11.99 },
  { tld: ".net", regularPriceINR: 1499, promoPriceINR: 999, regularPriceUSD: 17.99, promoPriceUSD: 12.99 },
  { tld: ".co.in", regularPriceINR: 699, promoPriceINR: 399, regularPriceUSD: 8.99, promoPriceUSD: 4.99 },
  { tld: ".xyz", regularPriceINR: 1299, promoPriceINR: 199, regularPriceUSD: 13.99, promoPriceUSD: 1.99, badge: "85% OFF" },
  { tld: ".co", regularPriceINR: 2499, promoPriceINR: 1799, regularPriceUSD: 29.99, promoPriceUSD: 21.99 },
  { tld: ".store", regularPriceINR: 3199, promoPriceINR: 299, regularPriceUSD: 38.99, promoPriceUSD: 2.99, badge: "E-Commerce" },
];

export function DomainSearchCardGrid() {
  const { currency } = useCurrency();
  const currencySymbol = currency === "INR" ? "₹" : "$";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {TOP_TLDS.map((item) => {
        const promoPrice = currency === "INR" ? item.promoPriceINR : item.promoPriceUSD;
        const regPrice = currency === "INR" ? item.regularPriceINR : item.regularPriceUSD;
        const whmcsUrl = buildWhmcsDomainUrl(item.tld, currency);
        const needsKyc = requiresInRegistryKyc(item.tld);

        return (
          <div
            key={item.tld}
            className={`relative p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              item.popular
                ? "border-[#0073EC] bg-card shadow-xl shadow-blue-500/10 ring-1 ring-[#0073EC]/20 scale-[1.02]"
                : "border-border/80 bg-card hover:border-primary/40 shadow-sm"
            }`}
          >
            {item.badge && (
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider shadow-sm">
                {item.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <h3 className="text-3xl font-black tracking-tight text-foreground flex items-center gap-1">
                  {item.tld}
                  {needsKyc && <InfoPopover content={IN_DOMAIN_KYC_TOOLTIP} />}
                </h3>
                <div className="p-2 rounded-xl bg-muted text-primary">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-muted-foreground font-medium mb-4">
                Register your brand with official <span className="text-foreground font-bold">{item.tld}</span> extension.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-foreground">
                    {currencySymbol}{promoPrice}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">/yr</span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  Renewal rate: <span className="line-through opacity-70">{currencySymbol}{regPrice}</span>
                </div>
              </div>
            </div>

            <a
              href={whmcsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block group"
            >
              <button
                type="button"
                className="w-full py-3 px-4 rounded-xl font-extrabold text-xs bg-primary hover:opacity-90 text-primary-foreground transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-primary/20"
              >
                <span>Register {item.tld}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
}
