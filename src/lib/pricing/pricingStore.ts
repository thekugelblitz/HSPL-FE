// src/lib/pricing/pricingStore.ts
import { useEffect, useState } from "react";
import type { Currency } from "./constants";

const CURRENCY_STORAGE_KEY = "hostingspell_currency";
const CURRENCY_CHANGE_EVENT = "hostingspell_currency_changed";

let globalCurrency: Currency = "USD";
let geoIpInitialized = false;

// Function to get initial currency from localStorage or default
export function getStoredCurrency(): Currency {
  if (typeof window === "undefined") return "USD";
  const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
  if (stored === "INR" || stored === "USD") {
    return stored;
  }
  return globalCurrency;
}

// Function to set global currency and notify all subscribers across islands
export function setCurrency(currency: Currency) {
  globalCurrency = currency;
  if (typeof window !== "undefined") {
    localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: currency }));
  }
}

/**
 * Auto-detect user currency on page load if not manually overridden
 */
export async function initGeoIpCurrency(): Promise<Currency> {
  if (typeof window === "undefined" || geoIpInitialized) return getStoredCurrency();
  geoIpInitialized = true;

  const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
  if (stored === "INR" || stored === "USD") {
    globalCurrency = stored;
    return stored;
  }

  try {
    const res = await fetch("/api/geoip");
    if (res.ok) {
      const data = await res.json();
      if (data.currency === "INR" || data.currency === "USD") {
        setCurrency(data.currency);
        return data.currency;
      }
    }
  } catch (e) {
    console.warn("GeoIP currency auto-detection failed:", e);
  }

  return "USD";
}

/**
 * React Hook for subscribing to global currency state
 */
export function useCurrency(): { currency: Currency; setCurrency: (c: Currency) => void } {
  const [currency, setLocalCurrency] = useState<Currency>(getStoredCurrency());

  useEffect(() => {
    // Run GeoIP check once if not set
    initGeoIpCurrency().then((detectedCurrency) => {
      setLocalCurrency(detectedCurrency);
    });

    const handleCurrencyChange = (e: Event) => {
      const customEvent = e as CustomEvent<Currency>;
      if (customEvent.detail) {
        setLocalCurrency(customEvent.detail);
      }
    };

    window.addEventListener(CURRENCY_CHANGE_EVENT, handleCurrencyChange);
    return () => {
      window.removeEventListener(CURRENCY_CHANGE_EVENT, handleCurrencyChange);
    };
  }, []);

  return {
    currency,
    setCurrency: (newCurrency: Currency) => {
      setCurrency(newCurrency);
    },
  };
}
