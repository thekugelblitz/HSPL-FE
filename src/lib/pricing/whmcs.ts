// src/lib/pricing/whmcs.ts
import type { Currency } from "./constants";

export const WHMCS_BASE_URL = "https://manage.hostingspell.com";

/**
 * Builds a direct checkout URL for manage.hostingspell.com with correct WHMCS currency ID
 * USD -> currency=1
 * INR -> currency=2
 */
export function buildWhmcsCheckoutUrl(
  baseLink: string | undefined,
  currency: Currency = "USD",
  billingCycle?: string
): string {
  if (!baseLink || baseLink === "#") {
    return `${WHMCS_BASE_URL}/cart.php?${currency === "INR" ? "currency=2" : "currency=1"}`;
  }

  // Determine WHMCS currency code parameter
  const currencyParam = currency === "INR" ? "currency=2" : "currency=1";
  
  let url = baseLink;
  if (url.includes("?")) {
    url = `${url}&${currencyParam}`;
  } else {
    url = `${url}?${currencyParam}`;
  }

  if (billingCycle) {
    // Map internal cycle names to WHMCS standard billing cycle names if needed
    const cycleMap: Record<string, string> = {
      monthly: "monthly",
      quarterly: "quarterly",
      semiannually: "semiannually",
      annual: "annually",
      biannual: "biennially",
      triannual: "triennially",
    };
    const mappedCycle = cycleMap[billingCycle] || billingCycle;
    url += `&billingcycle=${mappedCycle}`;
  }

  return url;
}

/**
 * Builds a domain registration URL for WHMCS cart
 */
export function buildWhmcsDomainUrl(domain: string, currency: Currency = "USD"): string {
  const currencyParam = currency === "INR" ? "currency=2" : "currency=1";
  const cleanDomain = domain.startsWith(".") ? domain.substring(1) : domain;
  return `${WHMCS_BASE_URL}/cart.php?a=add&domain=register&${currencyParam}&query=${encodeURIComponent(cleanDomain)}`;
}
