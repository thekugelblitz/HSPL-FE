// src/components/pricing/DynamicPrice.tsx
import React from "react";
import { useCurrency } from "@/lib/pricing/pricingStore";

interface DynamicPriceProps {
  usd: string | number;
  inr: string | number;
  prefix?: string;
  suffix?: string;
  className?: string;
  usdOriginal?: string | number;
  inrOriginal?: string | number;
  showOriginal?: boolean;
}

export function DynamicPrice({
  usd,
  inr,
  prefix = "",
  suffix = "",
  className = "",
}: DynamicPriceProps) {
  const { currency } = useCurrency();
  const isInr = currency === "INR";
  const symbol = isInr ? "₹" : "$";
  const val = isInr ? inr : usd;

  return (
    <span className={className}>
      {prefix}{symbol}{val}{suffix}
    </span>
  );
}

export function DynamicPriceWithOriginal({
  usdPrice,
  inrPrice,
  usdOriginal,
  inrOriginal,
  billingCycle = "/mo",
  className = "",
}: {
  usdPrice: string | number;
  inrPrice: string | number;
  usdOriginal?: string | number;
  inrOriginal?: string | number;
  billingCycle?: string;
  className?: string;
}) {
  const { currency } = useCurrency();
  const isInr = currency === "INR";
  const symbol = isInr ? "₹" : "$";
  const price = isInr ? inrPrice : usdPrice;
  const original = isInr ? inrOriginal : usdOriginal;

  return (
    <div className={className}>
      <div className="flex items-baseline gap-1.5">
        <span className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
          {symbol}{price}
        </span>
        <span className="text-xs font-semibold text-muted-foreground">{billingCycle}</span>
      </div>
      {original && (
        <div className="text-xs text-muted-foreground mt-1 flex items-center justify-between">
          <span>
            Regular price <span class="line-through opacity-70">{symbol}{original}</span>
          </span>
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
            Fixed Renewal Rate
          </span>
        </div>
      )}
    </div>
  );
}
