// src/lib/pricing/constants.ts

export type LocationType = "india" | "usa" | "uk" | "singapore" | "germany" | "australia" | "netherlands";
export type BillingCycle = "monthly" | "quarterly" | "semiannually" | "annual" | "biannual" | "triannual";
export type Currency = "INR" | "USD";

export interface LocationOption {
  value: string;
  label: string;
  code: string;
  iso: string;
  flag?: string;
}

export const ALL_PROVIDER_LOCATIONS: LocationOption[] = [
  { value: "india", label: "India", code: "IND", iso: "in", flag: "🇮🇳" },
  { value: "germany", label: "Germany", code: "DE", iso: "de", flag: "🇩🇪" },
  { value: "usa", label: "United States", code: "USA", iso: "us", flag: "🇺🇸" },
  { value: "uk", label: "United Kingdom", code: "UK", iso: "gb", flag: "🇬🇧" },
  { value: "singapore", label: "Singapore", code: "SGP", iso: "sg", flag: "🇸🇬" },
  { value: "netherlands", label: "Netherlands", code: "NET", iso: "nl", flag: "🇳🇱" },
  { value: "australia", label: "Australia", code: "AUS", iso: "au", flag: "🇦🇺" },
];

export const CLOUD_PROVIDER_LOCATIONS: LocationOption[] = ALL_PROVIDER_LOCATIONS.filter(
  (loc) => loc.value === "india" || loc.value === "germany"
);

export const PREMIUM_PROVIDER_LOCATIONS: LocationOption[] = [
  { value: "india", label: "India", code: "IND", iso: "in", flag: "🇮🇳" },
  { value: "netherlands", label: "Netherlands", code: "NET", iso: "nl", flag: "🇳🇱" },
  { value: "usa", label: "United States", code: "USA", iso: "us", flag: "🇺🇸" },
  { value: "uk", label: "United Kingdom", code: "UK", iso: "gb", flag: "🇬🇧" },
  { value: "singapore", label: "Singapore", code: "SGP", iso: "sg", flag: "🇸🇬" },
  { value: "australia", label: "Australia", code: "AUS", iso: "au", flag: "🇦🇺" },
];

export const COMBO_PROVIDER_LOCATIONS: LocationOption[] = [
  { value: "india", label: "India", code: "IND", iso: "in", flag: "🇮🇳" },
  { value: "netherlands", label: "Netherlands", code: "NET", iso: "nl", flag: "🇳🇱" },
  { value: "usa", label: "United States", code: "USA", iso: "us", flag: "🇺🇸" },
  { value: "uk", label: "United Kingdom", code: "UK", iso: "gb", flag: "🇬🇧" },
  { value: "singapore", label: "Singapore", code: "SGP", iso: "sg", flag: "🇸🇬" },
];

export const VPS_PROVIDER_LOCATIONS: LocationOption[] = [
  { value: "usa", label: "United States", code: "USA", iso: "us", flag: "🇺🇸" },
];

export const VPS_LINUX_CLOUD_PROVIDER_LOCATIONS: LocationOption[] = [
  { value: "india", label: "India", code: "IND", iso: "in", flag: "🇮🇳" },
];

export const VPS_WINDOWS_CLOUD_PROVIDER_LOCATIONS: LocationOption[] = VPS_LINUX_CLOUD_PROVIDER_LOCATIONS;

export const RESELLER_PROVIDER_LOCATIONS: LocationOption[] = [
  { value: "india", label: "India", code: "IND", iso: "in", flag: "🇮🇳" },
  { value: "netherlands", label: "Netherlands", code: "NET", iso: "nl", flag: "🇳🇱" },
  { value: "usa", label: "United States", code: "USA", iso: "us", flag: "🇺🇸" },
  { value: "uk", label: "United Kingdom", code: "UK", iso: "gb", flag: "🇬🇧" },
  { value: "singapore", label: "Singapore", code: "SGP", iso: "sg", flag: "🇸🇬" },
];

export const SUPPORTED_CURRENCIES = [
  { label: "INR ₹", value: "INR" as Currency, symbol: "₹" },
  { label: "USD $", value: "USD" as Currency, symbol: "$" }
];

export interface BillingCycleOption {
  value: string;
  label: string;
  discountBadge?: string;
  isBestValue?: boolean;
}

export const GLOBAL_BILLING_CYCLES: Record<string, BillingCycleOption[]> = {
  cloudhosting: [
    { value: "monthly", label: "1 Month" },
    { value: "annual", label: "12 Months", discountBadge: "16% OFF" },
    { value: "biannual", label: "24 Months", discountBadge: "26% OFF" },
    { value: "triannual", label: "36 Months", discountBadge: "31% OFF", isBestValue: true },
  ],
  combohosting: [
    { value: "annual", label: "12 Months" },
    { value: "biannual", label: "24 Months", discountBadge: "6% OFF" },
    { value: "triannual", label: "36 Months", discountBadge: "7% OFF", isBestValue: true },
  ],
  premiumhosting: [
    { value: "monthly", label: "1 Month" },
    { value: "annual", label: "12 Months", discountBadge: "16% OFF" },
    { value: "biannual", label: "24 Months", discountBadge: "26% OFF" },
    { value: "triannual", label: "36 Months", discountBadge: "31% OFF", isBestValue: true },
  ],
  vpshosting: [
    { value: "monthly", label: "1 Month" },
    { value: "quarterly", label: "3 Months", discountBadge: "17% OFF" },
    { value: "semiannually", label: "6 Months", discountBadge: "17% OFF" },
    { value: "annual", label: "12 Months", discountBadge: "17% OFF", isBestValue: true },
  ],
  resellerhosting: [
    { value: "monthly", label: "1 Month" },
    { value: "annual", label: "12 Months", discountBadge: "20% OFF", isBestValue: true },
  ],
  default: [
    { value: "annual", label: "12 Months", discountBadge: "16% OFF" },
    { value: "biannual", label: "24 Months", discountBadge: "26% OFF" },
    { value: "triannual", label: "36 Months", discountBadge: "31% OFF", isBestValue: true },
  ],
};

export const default_bandwidth_fup = "Unlimited bandwidth is provided with your plan, subject to our Fair Usage Policies (FUP). Excessive or abusive usage (such as file sharing, video streaming, or traffic not related to normal website hosting) may result in extra charges* or suspension. To learn more, see our Fair Usage Policies.";
export const default_storage_fup = "Total NVMe storage allocated to your accounts. Disk usage is subject to strict Fair Usage Policies (FUP). Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension.";
export const default_storage_fup_india = "Total NVMe storage allocated. Disk usage is subject to strict Fair Usage Policies (FUP). Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. For Linode India hosting, additional storage beyond 50GB is billed at $1 per 10GB.";

export const IN_DOMAIN_KYC_TOOLTIP =
  "Before registering this domain, mandatory KYC verification is required as per NIXI (National Internet Exchange of India) registry rules. This applies to .in and related Indian coTLDs such as .co.in, .net.in, .org.in, and similar extensions.";

export function requiresInRegistryKyc(tld: string): boolean {
  const normalized = tld.startsWith(".") ? tld.toLowerCase() : `.${tld.toLowerCase()}`;
  return normalized === ".in" || normalized.endsWith(".in");
}
