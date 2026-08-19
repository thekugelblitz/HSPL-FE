// src/components/i18n/GeoRegionBanner.tsx
import React, { useState, useEffect } from "react";
import {
  ALL_LOCALES,
  DEFAULT_LOCALE,
  getLocaleFromPath,
  type LocaleInfo,
} from "@/lib/i18n/locales";
import { setCurrency, setStoredLocale } from "@/lib/pricing/pricingStore";
import { Globe, ArrowRight, X } from "lucide-react";

const GEO_DISMISS_KEY = "hostingspell_geo_dismissed";

export function GeoRegionBanner() {
  const [recommendedLocale, setRecommendedLocale] = useState<LocaleInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if dismissed before
    const isDismissed = localStorage.getItem(GEO_DISMISS_KEY);
    if (isDismissed) return;

    const currentLoc = getLocaleFromPath(window.location.pathname);

    // Call GeoIP endpoint to detect user country
    fetch("/api/geoip")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data || !data.country) return;
        const countryCode = String(data.country).toLowerCase();

        // Match country code with our locales
        let targetLocale: LocaleInfo | undefined;
        if (countryCode === "in") targetLocale = ALL_LOCALES.find((l) => l.code === "en-in");
        else if (countryCode === "gb" || countryCode === "uk") targetLocale = ALL_LOCALES.find((l) => l.code === "en-gb");
        else if (["es", "de", "fr", "it", "nl", "be", "pt", "at", "ie", "fi"].includes(countryCode)) targetLocale = ALL_LOCALES.find((l) => l.code === "es-es");
        else if (countryCode === "ca") targetLocale = ALL_LOCALES.find((l) => l.code === "en-ca");
        else if (countryCode === "au") targetLocale = ALL_LOCALES.find((l) => l.code === "en-au");
        else if (countryCode === "mx") targetLocale = ALL_LOCALES.find((l) => l.code === "es-mx");
        else if (countryCode === "bd") targetLocale = ALL_LOCALES.find((l) => l.code === "en-bd");
        else if (countryCode === "ng") targetLocale = ALL_LOCALES.find((l) => l.code === "en-ng");
        else if (countryCode === "ke") targetLocale = ALL_LOCALES.find((l) => l.code === "en-ke");

        // Only show if user is in a different region than detected
        if (targetLocale && targetLocale.code !== currentLoc.code) {
          setRecommendedLocale(targetLocale);
          setIsVisible(true);
        }
      })
      .catch(() => {
        // Silently catch GeoIP errors
      });
  }, []);

  if (!isVisible || !recommendedLocale) return null;

  const handleSwitch = () => {
    localStorage.setItem(GEO_DISMISS_KEY, "true");
    setStoredLocale(recommendedLocale.code);
    setCurrency(recommendedLocale.currency);

    if (typeof window !== "undefined") {
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

      const targetPath = recommendedLocale.slug
        ? `/${recommendedLocale.slug}${subPath ? `/${subPath}` : ""}`
        : `/${subPath}`;

      window.location.href = targetPath;
    }
  };

  const handleDismiss = () => {
    localStorage.setItem(GEO_DISMISS_KEY, "true");
    setIsVisible(false);
  };

  return (
    <aside
      aria-label="Regional store recommendation"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] max-w-md w-[calc(100vw-2rem)] bg-zinc-950/95 backdrop-blur-2xl border border-[#0073EC]/40 rounded-2xl p-4 shadow-2xl text-white animate-in slide-in-from-bottom-5 duration-300 ring-1 ring-[#0073EC]/20"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#0073EC]/15 border border-[#0073EC]/30 text-[#0073EC] shrink-0 mt-0.5">
          <Globe className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <span>Visiting from {recommendedLocale.country}?</span>
              <span>{recommendedLocale.flagEmoji}</span>
            </h4>
            <button
              type="button"
              onClick={handleDismiss}
              className="text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-zinc-800"
              aria-label="Dismiss recommendation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
            Switch to the <strong>{recommendedLocale.shortName}</strong> store for local {recommendedLocale.currency} ({recommendedLocale.symbol}) pricing, {recommendedLocale.latencyBadge.toLowerCase()}, and local support.
          </p>

          <div className="mt-3.5 flex items-center gap-2">
            <button
              type="button"
              onClick={handleSwitch}
              className="px-3.5 py-1.5 rounded-xl bg-[#0073EC] hover:bg-[#005bb5] text-white text-xs font-black shadow-lg shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Switch to {recommendedLocale.shortName} ({recommendedLocale.symbol})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleDismiss}
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-semibold transition-colors cursor-pointer border border-zinc-800"
            >
              Stay on Global
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
