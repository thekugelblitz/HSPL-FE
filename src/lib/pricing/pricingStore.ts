// src/lib/pricing/pricingStore.ts
import { useEffect, useState } from "react";
import type { Currency } from "./constants";
import { formatLocalizedPrice, type SupportedCurrency } from "../i18n/locales";

const CURRENCY_STORAGE_KEY = "hostingspell_currency";
const LOCALE_STORAGE_KEY = "hostingspell_locale";
const CURRENCY_CHANGE_EVENT = "hostingspell_currency_changed";

let globalCurrency: Currency = "USD";
let geoIpInitialized = false;

const VALID_CURRENCIES: Currency[] = ["USD", "INR", "GBP", "EUR", "CAD", "AUD"];

// Function to get initial currency from localStorage or default
export function getStoredCurrency(): Currency {
  if (typeof window === "undefined") return "USD";
  const stored = localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency | null;
  if (stored && VALID_CURRENCIES.includes(stored)) {
    return stored;
  }
  return globalCurrency;
}

export function getStoredLocale(): string {
  if (typeof window === "undefined") return "en-us";
  return localStorage.getItem(LOCALE_STORAGE_KEY) || "en-us";
}

export function setStoredLocale(localeCode: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCALE_STORAGE_KEY, localeCode);
  }
}

export function updateStaticPrices(currency: Currency) {
  if (typeof document === "undefined") return;
  
  const elements = document.querySelectorAll<HTMLElement>(".hs-price");
  elements.forEach((el) => {
    const usd = el.dataset.usd;
    const inr = el.dataset.inr;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    
    if (usd !== undefined) {
      const { symbol, amount } = formatLocalizedPrice(usd, currency as SupportedCurrency, inr);
      el.textContent = `${prefix}${symbol}${amount}${suffix}`;
    }
  });
}

// Function to set global currency and notify all subscribers across islands
export function setCurrency(currency: Currency) {
  if (!VALID_CURRENCIES.includes(currency)) return;
  globalCurrency = currency;
  if (typeof window !== "undefined") {
    localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    updateStaticPrices(currency);
    window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: currency }));
  }
}

/**
 * Auto-detect user country and currency on page load if not manually overridden
 */
export async function initGeoIpCurrency(): Promise<Currency> {
  if (typeof window === "undefined" || geoIpInitialized) return getStoredCurrency();
  geoIpInitialized = true;

  const stored = localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency | null;
  if (stored && VALID_CURRENCIES.includes(stored)) {
    globalCurrency = stored;
    return stored;
  }

  try {
    const res = await fetch("/api/geoip");
    if (res.ok) {
      const data = await res.json();
      const countryCode = String(data.country || "").toUpperCase();
      
      let mappedCurrency: Currency = "USD";
      if (countryCode === "IN") mappedCurrency = "INR";
      else if (countryCode === "GB" || countryCode === "UK") mappedCurrency = "GBP";
      else if (["ES", "DE", "FR", "IT", "NL", "BE", "PT", "AT", "IE", "FI", "GR"].includes(countryCode)) mappedCurrency = "EUR";
      else if (countryCode === "CA") mappedCurrency = "CAD";
      else if (countryCode === "AU" || countryCode === "NZ") mappedCurrency = "AUD";

      if (VALID_CURRENCIES.includes(mappedCurrency)) {
        setCurrency(mappedCurrency);
        return mappedCurrency;
      }
    }
  } catch (e) {
    console.warn("GeoIP currency auto-detection failed:", e);
  }

  return "USD";
}

export function getCurrencySymbol(currency: Currency): string {
  switch (currency) {
    case "INR":
      return "₹";
    case "GBP":
      return "£";
    case "EUR":
      return "€";
    case "CAD":
      return "$";
    case "AUD":
      return "$";
    case "USD":
    default:
      return "$";
  }
}

/**
 * React Hook for subscribing to global currency state
 */
export function useCurrency(): { 
  currency: Currency; 
  symbol: string; 
  setCurrency: (c: Currency) => void; 
} {
  const [currency, setLocalCurrency] = useState<Currency>(getStoredCurrency());

  useEffect(() => {
    // Run GeoIP check once if not set
    initGeoIpCurrency().then((detectedCurrency) => {
      setLocalCurrency(detectedCurrency);
    });

    const handleCurrencyChange = (e: Event) => {
      const customEvent = e as CustomEvent<Currency>;
      if (customEvent.detail && VALID_CURRENCIES.includes(customEvent.detail)) {
        setLocalCurrency(customEvent.detail);
      }
    };

    window.addEventListener(CURRENCY_CHANGE_EVENT, handleCurrencyChange);
    return () => {
      window.removeEventListener(CURRENCY_CHANGE_EVENT, handleCurrencyChange);
    };
  }, []);

  const symbol = getCurrencySymbol(currency);

  return {
    currency,
    symbol,
    setCurrency: (newCurrency: Currency) => {
      setCurrency(newCurrency);
    },
  };
}
