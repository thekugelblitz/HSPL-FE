import React, { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/lib/pricing/pricingStore";
import { ChevronDown, Check } from "lucide-react";

function UsFlag() {
  return (
    <svg className="w-4 h-3 rounded-xs shrink-0 shadow-xs" viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#bd3d44" d="M0 0h640v480H0z"/>
        <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"/>
        <path fill="#192f5d" d="M0 0h296v258.5H0z"/>
      </g>
    </svg>
  );
}

function InFlag() {
  return (
    <svg className="w-4 h-3 rounded-xs shrink-0 shadow-xs" viewBox="0 0 640 480">
      <path fill="#ff9933" d="M0 0h640v160H0z"/>
      <path fill="#fff" d="M0 160h640v160H0z"/>
      <path fill="#128807" d="M0 320h640v160H0z"/>
      <circle cx="320" cy="240" r="40" fill="none" stroke="#000080" strokeWidth="8"/>
    </svg>
  );
}

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

  const currencies = [
    { code: "USD", symbol: "$", label: "USD ($)", flagComponent: UsFlag },
    { code: "INR", symbol: "₹", label: "INR (₹)", flagComponent: InFlag },
  ];

  const currentCurrency = currencies.find((c) => c.code === currency) || currencies[0];
  const CurrentFlag = currentCurrency.flagComponent;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-muted/80 hover:bg-muted text-foreground border border-border/80 text-xs font-extrabold shadow-sm transition-all cursor-pointer outline-none"
        title="Select Currency"
      >
        <CurrentFlag />
        <span>{currentCurrency.code}</span>
        <span className="font-bold opacity-75">({currentCurrency.symbol})</span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 rounded-2xl bg-card border border-border/90 shadow-xl p-1.5 z-[100] space-y-0.5 animate-in fade-in-50 zoom-in-95 duration-100">
          <div className="px-2 py-1 text-[10px] font-black uppercase text-muted-foreground tracking-wider">
            Select Currency
          </div>
          {currencies.map((c) => {
            const isSelected = c.code === currency;
            const Flag = c.flagComponent;
            return (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  setCurrency(c.code as "USD" | "INR");
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground font-black"
                    : "hover:bg-muted text-foreground/90"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Flag />
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
