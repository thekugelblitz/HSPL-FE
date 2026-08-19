import React, { useState } from "react";
import { useCurrency } from "@/lib/pricing/pricingStore";
import { buildWhmcsDomainUrl } from "@/lib/pricing/whmcs";
import { Search, ShieldCheck, Sparkles, ChevronDown } from "lucide-react";

interface TldOption {
  tld: string;
  usdPrice: number;
  inrPrice: number;
  colorClass: string;
  badge?: string;
}

const FEATURED_TLDS: TldOption[] = [
  {
    tld: ".com",
    usdPrice: 9.99,
    inrPrice: 799,
    colorClass: "text-[#2CC0FF]",
  },
  {
    tld: ".in",
    usdPrice: 3.99,
    inrPrice: 499,
    colorClass: "text-emerald-400",
    badge: "SALE",
  },
  {
    tld: ".net",
    usdPrice: 11.99,
    inrPrice: 999,
    colorClass: "text-[#2CC0FF]",
  },
  {
    tld: ".org",
    usdPrice: 12.99,
    inrPrice: 899,
    colorClass: "text-purple-400",
  },
  {
    tld: ".store",
    usdPrice: 1.99,
    inrPrice: 299,
    colorClass: "text-amber-400",
  },
];

const ALL_TLD_OPTIONS = [
  ".com",
  ".in",
  ".net",
  ".org",
  ".store",
  ".co.in",
  ".xyz",
  ".io",
  ".co",
  ".online",
  ".tech",
  ".site",
];

interface HeroDomainSearchProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function HeroDomainSearch({
  title = "Find Your Perfect Domain Name",
  subtitle = "Register your brand's web address with free WHOIS privacy, full DNS management, and instant activation.",
  className = "",
}: HeroDomainSearchProps) {
  const { currency, symbol } = useCurrency();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTld, setSelectedTld] = useState(".com");

  // Format price helper with multi-currency exchange support
  const getFormattedPrice = (item: TldOption) => {
    let price = currency === "INR" ? item.inrPrice : item.usdPrice;
    
    if (currency === "GBP") price = item.usdPrice * 0.79;
    else if (currency === "EUR") price = item.usdPrice * 0.92;
    else if (currency === "CAD") price = item.usdPrice * 1.36;
    else if (currency === "AUD") price = item.usdPrice * 1.52;

    const currencySymbol =
      symbol ||
      (currency === "INR"
        ? "₹"
        : currency === "GBP"
        ? "£"
        : currency === "EUR"
        ? "€"
        : "$");

    if (currency === "INR") {
      return `₹${Math.round(price)}`;
    }
    return `${currencySymbol}${price.toFixed(2)}`;
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let query = searchQuery.trim();
    if (!query) {
      query = "mybrand";
    }
    // If the user didn't type an extension, append the selected Tld
    let finalDomain = query;
    if (!query.includes(".")) {
      finalDomain = `${query}${selectedTld}`;
    }
    
    const targetUrl = buildWhmcsDomainUrl(finalDomain, currency);
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const handleTldPillClick = (tld: string) => {
    setSelectedTld(tld);
    const inputEl = document.getElementById("hero-domain-input");
    if (inputEl) {
      inputEl.focus();
    }
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto text-center space-y-6 ${className}`}
    >
      {/* ─── Header & Subtitle ─── */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* ─── Main Domain Search Form ─── */}
      <form
        onSubmit={handleSearchSubmit}
        className="glass-card bg-card/90 backdrop-blur-xl border border-border hover:border-primary/50 rounded-2xl sm:rounded-full p-2 sm:p-2.5 flex flex-col sm:flex-row items-center gap-2 shadow-2xl transition-all"
      >
        {/* 'www.' Prefix (Desktop) */}
        <span className="text-muted-foreground font-mono font-bold text-sm pl-4 select-none hidden sm:inline">
          www.
        </span>

        {/* Search Input */}
        <input
          id="hero-domain-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter domain or keyword (e.g. mybrand)..."
          className="bg-transparent text-foreground text-sm sm:text-base font-semibold focus:outline-none flex-1 px-3 py-2 sm:py-1.5 w-full placeholder:text-muted-foreground placeholder:font-normal"
        />

        {/* TLD Dropdown Selector */}
        <div className="relative shrink-0 w-full sm:w-auto">
          <select
            value={selectedTld}
            onChange={(e) => setSelectedTld(e.target.value)}
            className="w-full sm:w-auto appearance-none bg-muted/60 text-foreground border border-border hover:border-primary/40 text-xs sm:text-sm font-extrabold px-3.5 py-2.5 sm:py-2 pr-8 rounded-xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
          >
            {ALL_TLD_OPTIONS.map((tld) => (
              <option key={tld} value={tld} className="bg-card text-foreground font-semibold">
                {tld}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Search Domain Action Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-[#0073EC] hover:bg-[#005bb5] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl sm:rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
        >
          <Search className="w-4 h-4 text-white" />
          <span>Search Domain</span>
        </button>
      </form>

      {/* ─── Top TLDs Pricing Pills (High Contrast Light & Dark) ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 max-w-3xl mx-auto pt-1">
        {FEATURED_TLDS.map((item) => {
          const isSelected = selectedTld === item.tld;
          const formattedPrice = getFormattedPrice(item);

          return (
            <button
              key={item.tld}
              type="button"
              onClick={() => handleTldPillClick(item.tld)}
              className={`p-3 rounded-2xl border transition-all text-center cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                  : "bg-card/85 hover:bg-muted text-foreground border-border hover:border-primary/40 shadow-xs"
              }`}
            >
              {item.badge && (
                <span className="absolute top-2 right-2 text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                  {item.badge}
                </span>
              )}

              <div
                className={`text-base sm:text-lg font-black transition-colors ${
                  isSelected ? "text-white" : "text-foreground group-hover:text-primary"
                }`}
              >
                {item.tld}
              </div>
              <div
                className={`text-xs font-extrabold mt-0.5 ${
                  isSelected ? "text-white/90" : item.colorClass
                }`}
              >
                {formattedPrice}
                <span
                  className={`text-[10px] font-normal ${
                    isSelected ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  /yr
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ─── Trust / Included Benefits Footer ─── */}
      <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
        <span>All domain registrations include free WHOIS privacy protection &amp; DNS management</span>
      </div>
    </div>
  );
}
