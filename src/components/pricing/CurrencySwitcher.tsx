// src/components/pricing/CurrencySwitcher.tsx
import React, { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/lib/pricing/pricingStore";
import type { Currency } from "@/lib/pricing/constants";
import { ChevronDown, Check } from "lucide-react";

interface CurrencyItem {
  code: Currency;
  symbol: string;
  label: string;
  iso: string;
}

const CURRENCIES: CurrencyItem[] = [
  { code: "USD", symbol: "$", label: "USD ($)", iso: "us" },
  { code: "INR", symbol: "₹", label: "INR (₹)", iso: "in" },
  { code: "GBP", symbol: "£", label: "GBP (£)", iso: "gb" },
  { code: "EUR", symbol: "€", label: "EUR (€)", iso: "eu" },
  { code: "CAD", symbol: "C$", label: "CAD (C$)", iso: "ca" },
  { code: "AUD", symbol: "A$", label: "AUD (A$)", iso: "au" },
];

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentCurrency = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];

  const Flag = ({ iso, alt }: { iso: string; alt: string }) => {
    const flagSrc =
      iso === "eu"
        ? "https://flagcdn.com/w40/eu.png"
        : `https://flagcdn.com/w40/${iso.toLowerCase()}.png`;
    return (
      <img
        src={flagSrc}
        width="16"
        height="12"
        alt={alt}
        className="rounded-xs object-cover shrink-0 shadow-xs border border-white/10"
        loading="lazy"
      />
    );
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-muted/80 hover:bg-muted text-foreground border border-border/80 text-xs font-extrabold shadow-sm transition-all cursor-pointer outline-none"
        title="Select Currency"
        aria-expanded={isOpen}
      >
        <Flag iso={currentCurrency.iso} alt={currentCurrency.label} />
        <span>{currentCurrency.code}</span>
        <span className="font-bold opacity-75">({currentCurrency.symbol})</span>
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 rounded-2xl bg-card border border-border/90 shadow-xl p-1.5 z-[100] space-y-0.5 animate-in fade-in-50 zoom-in-95 duration-100">
          <div className="px-2 py-1 text-[10px] font-black uppercase text-muted-foreground tracking-wider">
            Select Currency
          </div>
          {CURRENCIES.map((c) => {
            const isSelected = c.code === currency;
            return (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  setCurrency(c.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground font-black"
                    : "hover:bg-muted text-foreground/90"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Flag iso={c.iso} alt={c.label} />
                  <span>{c.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-primary-foreground shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
