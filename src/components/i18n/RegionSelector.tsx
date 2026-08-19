// src/components/i18n/RegionSelector.tsx
import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  ALL_LOCALES,
  DEFAULT_LOCALE,
  CONTINENTS,
  getLocaleFromPath,
  type LocaleInfo,
} from "@/lib/i18n/locales";
import { setCurrency, setStoredLocale } from "@/lib/pricing/pricingStore";
import { ChevronDown, Check, Search, Globe, X, Sparkles } from "lucide-react";

interface RegionSelectorProps {
  variant?: "utility" | "footer" | "mobile" | "inline";
  className?: string;
}

export function RegionSelector({ variant = "utility", className = "" }: RegionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState<string>("All");
  const [currentLocale, setCurrentLocale] = useState<LocaleInfo>(DEFAULT_LOCALE);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Detect current locale on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loc = getLocaleFromPath(window.location.pathname);
      setCurrentLocale(loc);
    }
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Filter locales by search query and continent
  const filteredLocales = useMemo(() => {
    return ALL_LOCALES.filter((loc) => {
      const matchesSearch =
        searchQuery === "" ||
        loc.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.currency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesContinent =
        selectedContinent === "All" || loc.continent === selectedContinent;

      return matchesSearch && matchesContinent;
    });
  }, [searchQuery, selectedContinent]);

  const handleSelectLocale = (loc: LocaleInfo) => {
    setIsOpen(false);
    setCurrentLocale(loc);
    setStoredLocale(loc.code);
    setCurrency(loc.currency);

    if (typeof window !== "undefined") {
      // Calculate target pathname
      const currentPath = window.location.pathname;
      const parts = currentPath.split("/").filter(Boolean);
      
      let subPath = "";
      if (parts.length > 0) {
        const firstSegment = parts[0].toLowerCase();
        const isLocaleSegment = ALL_LOCALES.some((l) => l.slug && l.slug.toLowerCase() === firstSegment);
        if (isLocaleSegment) {
          subPath = parts.slice(1).join("/");
        } else {
          subPath = parts.join("/");
        }
      }

      const targetPath = loc.slug
        ? `/${loc.slug}${subPath ? `/${subPath}` : ""}`
        : `/${subPath}`;

      if (window.location.pathname !== targetPath) {
        window.location.href = targetPath;
      }
    }
  };

  // Flag SVG or Flag Image component
  const Flag = ({ iso, alt }: { iso: string; alt: string }) => (
    <img
      src={`https://flagcdn.com/w40/${iso.toLowerCase()}.png`}
      width="20"
      height="15"
      alt={alt}
      className="rounded-xs object-cover shrink-0 shadow-xs border border-white/10"
      loading="lazy"
    />
  );

  return (
    <div className={`relative ${variant === "mobile" ? "w-full" : "inline-block"} text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button: Utility Top Header */}
      {variant === "utility" && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-2.5 py-1 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-all text-xs font-semibold cursor-pointer outline-none border border-white/10 hover:border-white/20"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          title="Select Country & Region"
        >
          <Flag iso={currentLocale.iso} alt={currentLocale.country} />
          <span className="truncate max-w-[130px] sm:max-w-[160px]">
            {currentLocale.country}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-white" : ""
            }`}
          />
        </button>
      )}

      {/* Trigger Button: Footer */}
      {variant === "footer" && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card hover:bg-muted text-foreground border border-border hover:border-primary/40 transition-all text-xs font-bold shadow-xs cursor-pointer"
          title="Change Country or Region"
        >
          <Flag iso={currentLocale.iso} alt={currentLocale.country} />
          <div className="text-left">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Region / Country</div>
            <div className="font-extrabold text-foreground flex items-center gap-1.5">
              <span>{currentLocale.country}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono">({currentLocale.currency} {currentLocale.symbol})</span>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground" />
        </button>
      )}

      {/* Trigger Button: Mobile Drawer */}
      {variant === "mobile" && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/60 hover:bg-muted border border-border text-foreground text-xs font-bold transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <Flag iso={currentLocale.iso} alt={currentLocale.country} />
            <div className="text-left">
              <span className="font-extrabold text-foreground">{currentLocale.country}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold ml-1.5">
                ({currentLocale.currency} {currentLocale.symbol})
              </span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-primary flex items-center gap-1">
            <span>{isOpen ? "Close" : "Change"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </span>
        </button>
      )}

      {/* Inline Container for Mobile OR Floating Popover for Desktop */}
      {isOpen && (
        <div
          className={`z-[200] rounded-2xl bg-card text-foreground border border-border shadow-2xl overflow-hidden transition-all animate-in fade-in-50 zoom-in-95 duration-150 ${
            variant === "mobile"
              ? "mt-2.5 w-full border-primary/20"
              : variant === "footer"
              ? "absolute bottom-full mb-2 left-0 w-80 sm:w-96"
              : "absolute right-0 mt-2 w-84 sm:w-96"
          }`}
          role="dialog"
          aria-label="Select Country and Region"
        >
          {/* Header */}
          <div className="p-3 border-b border-border flex items-center justify-between gap-2 bg-muted/40">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-extrabold text-xs text-foreground uppercase tracking-wider">
                Select Regional Store
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-3 border-b border-border/80 space-y-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country, region, or currency..."
                className="w-full pl-8 pr-7 py-2 rounded-xl bg-muted/60 border border-border text-xs font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Continent Filter Chips */}
            <div className="flex items-center gap-1 overflow-x-auto pt-1 pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => setSelectedContinent("All")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold shrink-0 transition-colors cursor-pointer ${
                  selectedContinent === "All"
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {CONTINENTS.map((cont) => (
                <button
                  key={cont}
                  type="button"
                  onClick={() => setSelectedContinent(cont)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-bold shrink-0 transition-colors cursor-pointer ${
                    selectedContinent === cont
                      ? "bg-primary text-white"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cont}
                </button>
              ))}
            </div>
          </div>

          {/* Country List */}
          <div className="max-h-60 overflow-y-auto p-1.5 space-y-1">
            {filteredLocales.length === 0 ? (
              <div className="py-6 text-center text-xs text-muted-foreground">
                No regions matching "{searchQuery}"
              </div>
            ) : (
              filteredLocales.map((loc) => {
                const isSelected = currentLocale.code === loc.code;
                return (
                  <button
                    key={loc.code}
                    type="button"
                    onClick={() => handleSelectLocale(loc)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all cursor-pointer text-left ${
                      isSelected
                        ? "bg-primary/10 border border-primary/30 text-foreground font-bold"
                        : "hover:bg-muted text-foreground/90 hover:text-foreground border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Flag iso={loc.iso} alt={loc.country} />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-foreground truncate flex items-center gap-1.5">
                          <span>{loc.country}</span>
                          {loc.code === "en-us" && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-muted text-muted-foreground font-mono">
                              Global
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-muted-foreground truncate">
                          {loc.datacenter}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {loc.currency} ({loc.symbol})
                      </span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Stats */}
          <div className="p-2.5 bg-muted/40 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>135,000+ sites hosted</span>
            </div>
            <span className="font-semibold text-primary">Sub-10ms Global Latency</span>
          </div>
        </div>
      )}
    </div>
  );
}
