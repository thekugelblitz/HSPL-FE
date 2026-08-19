// src/lib/i18n/locales.ts
// Comprehensive Multi-Region & Locale System inspired by Hosting.com

export type SupportedCurrency = "USD" | "INR" | "GBP" | "EUR" | "CAD" | "AUD";

export interface LocaleInfo {
  code: string;           // e.g. "en-in", "en-gb", "en-us"
  slug: string;           // "" for global/default, "en-in" for /en-in/
  country: string;        // "India", "United Kingdom", "United States (Global)"
  shortName: string;      // "India", "UK", "Global"
  continent: "North America" | "Europe" | "Asia Pacific" | "Latin America" | "Africa & Middle East";
  currency: SupportedCurrency;
  symbol: string;
  iso: string;            // "in", "gb", "us", "es", "ca", "au"
  flagEmoji: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  exchangeRate: number;   // Multiplier from base USD
  heroHeadline: string;
  heroSubheadline: string;
  popularFeatures: string[];
  datacenter: string;
  latencyBadge: string;
  paymentBadges: string[];
}

export const LOCALES: Record<string, LocaleInfo> = {
  "en-us": {
    code: "en-us",
    slug: "",
    country: "United States (Global)",
    shortName: "Global (US)",
    continent: "North America",
    currency: "USD",
    symbol: "$",
    iso: "us",
    flagEmoji: "🇺🇸",
    phone: "+919409594000",
    phoneDisplay: "+1 (734) 222-4678",
    email: "support@hostingspell.com",
    exchangeRate: 1,
    heroHeadline: "Your Website & AI Apps, 10× Faster — Worldwide",
    heroSubheadline: "Over 135,000+ websites and apps hosted on enterprise NVMe SSD, LiteSpeed Web Server, and 24/7 expert human support.",
    popularFeatures: [
      "LiteSpeed Enterprise NVMe",
      "Global Anycast DNS Network",
      "Free 1-Click SSL & Migration",
      "30-Day Money-Back Guarantee",
      "24/7/365 Expert Support"
    ],
    datacenter: "US East & West (Tier-4 Datacenters)",
    latencyBadge: "⚡ Ultra-Low Global Latency",
    paymentBadges: ["Visa", "Mastercard", "Amex", "PayPal", "Crypto (BTC/USDT)"]
  },
  "en-in": {
    code: "en-in",
    slug: "en-in",
    country: "India",
    shortName: "India",
    continent: "Asia Pacific",
    currency: "INR",
    symbol: "₹",
    iso: "in",
    flagEmoji: "🇮🇳",
    phone: "+919409594000",
    phoneDisplay: "+91 94095 94000",
    email: "india@hostingspell.com",
    exchangeRate: 75,
    heroHeadline: "Startup to Scaleup — High-Speed Cloud Hosting for India",
    heroSubheadline: "Host closer to your Indian audience with sub-10ms latency, local Mumbai datacenters, UPI payments, and GST invoices.",
    popularFeatures: [
      "Mumbai NVMe Datacenter (Sub-10ms)",
      "Instant GST Invoices & ITC Credit",
      "UPI, NetBanking & RuPay Accepted",
      "Direct WhatsApp & Phone Support",
      "Free .IN Domain on Select Plans"
    ],
    datacenter: "Mumbai & Delhi NCR (Tier-4 Certified)",
    latencyBadge: "⚡ Sub-10ms Ping across India",
    paymentBadges: ["UPI (GPay/PhonePe)", "RuPay", "NetBanking", "Credit/Debit Cards", "GST Invoice"]
  },
  "en-gb": {
    code: "en-gb",
    slug: "en-gb",
    country: "United Kingdom",
    shortName: "United Kingdom",
    continent: "Europe",
    currency: "GBP",
    symbol: "£",
    iso: "gb",
    flagEmoji: "🇬🇧",
    phone: "+919409594000",
    phoneDisplay: "+44 (20) 7946-0920",
    email: "uk@hostingspell.com",
    exchangeRate: 0.79,
    heroHeadline: "High-Performance Cloud & WordPress Hosting in the UK",
    heroSubheadline: "Ultra-fast NVMe hosting located at premier London data facilities. Fully UK GDPR compliant with sterling (GBP £) billing.",
    popularFeatures: [
      "London Low-Latency Tier-3+ DC",
      "Full UK GDPR & Data Privacy Compliant",
      "Direct GBP (£) Billing & VAT Receipts",
      "24/7 Real Human Technical Support",
      "Free Zero-Downtime Migration"
    ],
    datacenter: "London (Docklands Tier-3+ Facility)",
    latencyBadge: "⚡ <15ms across Great Britain & Ireland",
    paymentBadges: ["Visa / Mastercard", "UK Debit Cards", "PayPal", "Apple Pay", "Google Pay"]
  },
  "es-es": {
    code: "es-es",
    slug: "es-es",
    country: "Spain & Europe",
    shortName: "Europe (Spain)",
    continent: "Europe",
    currency: "EUR",
    symbol: "€",
    iso: "es",
    flagEmoji: "🇪🇸",
    phone: "+919409594000",
    phoneDisplay: "+34 91 123 4567",
    email: "europe@hostingspell.com",
    exchangeRate: 0.92,
    heroHeadline: "Alojamiento Web NVMe Ultrarrápido para España y Europa",
    heroSubheadline: "Infraestructura cloud de alta velocidad con centros de datos en Fráncfort y Ámsterdam. Cumplimiento estricto del RGPD europeo.",
    popularFeatures: [
      "Centros de datos en Fráncfort y Ámsterdam",
      "Cumplimiento 100% RGPD Europeo",
      "Facturación en Euros (€) con IVA desglosado",
      "Migración gratuita sin tiempo de inactividad",
      "Garantía de reembolso de 30 días"
    ],
    datacenter: "Frankfurt & Amsterdam (Tier-4 Nodes)",
    latencyBadge: "⚡ <20ms en toda la Unión Europea",
    paymentBadges: ["SEPA", "Tarjetas de Crédito/Débito", "PayPal", "Bizum / Transferencia"]
  },
  "en-ca": {
    code: "en-ca",
    slug: "en-ca",
    country: "Canada",
    shortName: "Canada",
    continent: "North America",
    currency: "CAD",
    symbol: "C$",
    iso: "ca",
    flagEmoji: "🇨🇦",
    phone: "+919409594000",
    phoneDisplay: "+1 (800) 555-0199",
    email: "canada@hostingspell.com",
    exchangeRate: 1.36,
    heroHeadline: "Ultra-Fast Canadian NVMe Cloud Web Hosting",
    heroSubheadline: "Blazing fast cloud servers with Montreal and US-North interconnects. Full PIPEDA privacy compliance with Canadian Dollar (CAD C$) pricing.",
    popularFeatures: [
      "Montreal Tier-3+ Interconnect Facility",
      "PIPEDA Canadian Privacy Compliant",
      "Direct CAD (C$) Billing",
      "Free 1-Click Staging & Auto-Backups",
      "24/7 Expert Support"
    ],
    datacenter: "Montreal & US East Border Nodes",
    latencyBadge: "⚡ <18ms across Ontario & Quebec",
    paymentBadges: ["Visa / Mastercard", "Interac / Debit", "PayPal", "Apple Pay"]
  },
  "en-au": {
    code: "en-au",
    slug: "en-au",
    country: "Australia",
    shortName: "Australia",
    continent: "Asia Pacific",
    currency: "AUD",
    symbol: "A$",
    iso: "au",
    flagEmoji: "🇦🇺",
    phone: "+919409594000",
    phoneDisplay: "+61 (2) 8000-1234",
    email: "australia@hostingspell.com",
    exchangeRate: 1.53,
    heroHeadline: "Next-Gen Australian Cloud & WordPress Hosting",
    heroSubheadline: "Host locally in Sydney for ultra-low latency across Australia and New Zealand. Billed in Australian Dollars (AUD A$).",
    popularFeatures: [
      "Sydney Tier-3+ NVMe Datacenter",
      "Direct AUD (A$) Billing & GST Invoices",
      "Sub-15ms Latency to Sydney & Melbourne",
      "Free White-Glove Migration",
      "24/7 Human Technical Support"
    ],
    datacenter: "Sydney (Equinix SY3 / Tier-3+ Facility)",
    latencyBadge: "⚡ Sub-15ms Latency in Sydney & Melbourne",
    paymentBadges: ["Visa / Mastercard", "EFTPOS / Debit", "PayPal", "Apple Pay"]
  },
  "es-mx": {
    code: "es-mx",
    slug: "es-mx",
    country: "Mexico",
    shortName: "Mexico",
    continent: "Latin America",
    currency: "USD",
    symbol: "$",
    iso: "mx",
    flagEmoji: "🇲🇽",
    phone: "+919409594000",
    phoneDisplay: "+52 55 1234 5678",
    email: "latam@hostingspell.com",
    exchangeRate: 1,
    heroHeadline: "Hospedaje Web Cloud Ultrarrápido en México y LatAm",
    heroSubheadline: "Servidores LiteSpeed NVMe optimizados para velocidad en México y América Latina con soporte experto 24/7.",
    popularFeatures: [
      "Nodos de baja latencia en Texas y México",
      "Panel de control cPanel en Español",
      "Migración gratuita y certificados SSL",
      "100% Uptime Mark en toda América Latina",
      "Soporte 24/7 los 365 días del año"
    ],
    datacenter: "Dallas / Mexico Border Hub",
    latencyBadge: "⚡ Conexión ultrarrápida en todo México",
    paymentBadges: ["Tarjetas Bancarias", "PayPal", "OXXO / Transferencias", "Criptomonedas"]
  },
  "en-bd": {
    code: "en-bd",
    slug: "en-bd",
    country: "Bangladesh",
    shortName: "Bangladesh",
    continent: "Asia Pacific",
    currency: "USD",
    symbol: "$",
    iso: "bd",
    flagEmoji: "🇧🇩",
    phone: "+919409594000",
    phoneDisplay: "+91 94095 94000",
    email: "bd@hostingspell.com",
    exchangeRate: 1,
    heroHeadline: "Fast & Reliable Web Hosting in Bangladesh",
    heroSubheadline: "Host with Singapore and Mumbai low-latency cloud nodes for lightning fast performance in Dhaka and Chittagong.",
    popularFeatures: [
      "Singapore & Mumbai Low-Latency Nodes",
      "Free Website Migration with Zero Downtime",
      "Imunify360 Enterprise Malware Shield",
      "24/7 Live Chat & WhatsApp Support",
      "cPanel & 1-Click WordPress Installer"
    ],
    datacenter: "Singapore & Mumbai Edge Nodes",
    latencyBadge: "⚡ Low Latency to Dhaka & Chittagong",
    paymentBadges: ["International Cards", "PayPal", "bKash/Nagad via Partners", "Crypto"]
  },
  "en-ng": {
    code: "en-ng",
    slug: "en-ng",
    country: "Nigeria",
    shortName: "Nigeria",
    continent: "Africa & Middle East",
    currency: "USD",
    symbol: "$",
    iso: "ng",
    flagEmoji: "🇳🇬",
    phone: "+919409594000",
    phoneDisplay: "+91 94095 94000",
    email: "africa@hostingspell.com",
    exchangeRate: 1,
    heroHeadline: "High-Performance Cloud Web Hosting for Nigeria",
    heroSubheadline: "Empowering Nigerian entrepreneurs and businesses with ultra-fast NVMe cloud hosting and round-the-clock reliability.",
    popularFeatures: [
      "London & Europe Fast Interconnects",
      "Free Domain & SSL Certificate Included",
      "Automatic Daily Off-Site Backups",
      "24/7 Human Technical Support",
      "1-Click WordPress & AI Site Builder"
    ],
    datacenter: "London & Frankfurt African Gateway",
    latencyBadge: "⚡ Optimized Routing to West Africa",
    paymentBadges: ["Visa / Mastercard", "PayPal", "Crypto (USDT/BTC)"]
  },
  "en-ke": {
    code: "en-ke",
    slug: "en-ke",
    country: "Kenya",
    shortName: "Kenya",
    continent: "Africa & Middle East",
    currency: "USD",
    symbol: "$",
    iso: "ke",
    flagEmoji: "🇰🇪",
    phone: "+919409594000",
    phoneDisplay: "+91 94095 94000",
    email: "africa@hostingspell.com",
    exchangeRate: 1,
    heroHeadline: "Fast & Secure Cloud Web Hosting in Kenya",
    heroSubheadline: "Scale your Kenyan business with enterprise LiteSpeed NVMe hosting and 100% uptime mark.",
    popularFeatures: [
      "Optimized East Africa Cloud Routing",
      "Free Migration with Zero Downtime",
      "Imunify360 AI Security Suite",
      "24/7 Real Technical Support",
      "30-Day Money-Back Guarantee"
    ],
    datacenter: "Europe & South Africa Transit Hubs",
    latencyBadge: "⚡ Fast East Africa Connectivity",
    paymentBadges: ["Cards", "PayPal", "Crypto"]
  },
  "en-rw": {
    code: "en-rw",
    slug: "en-rw",
    country: "Rwanda",
    shortName: "Rwanda",
    continent: "Africa & Middle East",
    currency: "USD",
    symbol: "$",
    iso: "rw",
    flagEmoji: "🇷🇼",
    phone: "+919409594000",
    phoneDisplay: "+91 94095 94000",
    email: "africa@hostingspell.com",
    exchangeRate: 1,
    heroHeadline: "Reliable Cloud Web Hosting in Rwanda",
    heroSubheadline: "Host your digital presence on developer-ready NVMe infrastructure with 24/7 technical backing.",
    popularFeatures: [
      "High-Performance LiteSpeed NVMe",
      "Free SSL & Automatic Backups",
      "24/7 Human Customer Support",
      "1-Click Deployments & cPanel"
    ],
    datacenter: "Europe Transit Node",
    latencyBadge: "⚡ Global Low Latency",
    paymentBadges: ["Credit/Debit Cards", "PayPal", "Crypto"]
  },
  "es-co": {
    code: "es-co",
    slug: "es-co",
    country: "Colombia",
    shortName: "Colombia",
    continent: "Latin America",
    currency: "USD",
    symbol: "$",
    iso: "co",
    flagEmoji: "🇨🇴",
    phone: "+919409594000",
    phoneDisplay: "+57 1 234 5678",
    email: "latam@hostingspell.com",
    exchangeRate: 1,
    heroHeadline: "Alojamiento Web Cloud Confiable en Colombia",
    heroSubheadline: "Infraestructura NVMe de alta velocidad y máxima seguridad para empresas y desarrolladores en Colombia.",
    popularFeatures: [
      "Servidores rápidos conectados a LatAm",
      "Panel de control cPanel en Español",
      "Migración gratuita y soporte 24/7",
      "Copias de seguridad automáticas"
    ],
    datacenter: "US South & LatAm Gateways",
    latencyBadge: "⚡ Conexión estable a Colombia",
    paymentBadges: ["Tarjetas Internacionales", "PayPal", "Criptomonedas"]
  }
};

export const DEFAULT_LOCALE = LOCALES["en-us"];

export const ALL_LOCALES = Object.values(LOCALES);

export const CONTINENTS: Array<LocaleInfo["continent"]> = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Latin America",
  "Africa & Middle East"
];

/**
 * Returns a locale by its URL slug or code.
 */
export function getLocaleBySlugOrCode(param?: string): LocaleInfo {
  if (!param) return DEFAULT_LOCALE;
  const clean = param.toLowerCase().replace(/^\/|\/$/g, "");
  if (!clean || clean === "us" || clean === "global" || clean === "en-us") {
    return DEFAULT_LOCALE;
  }
  const found = ALL_LOCALES.find(
    (loc) => loc.slug === clean || loc.code === clean || loc.iso === clean
  );
  return found || DEFAULT_LOCALE;
}

/**
 * Determines current locale based on current pathname.
 */
export function getLocaleFromPath(pathname: string): LocaleInfo {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0) {
    const firstSegment = parts[0].toLowerCase();
    const match = ALL_LOCALES.find(
      (loc) => loc.slug && loc.slug.toLowerCase() === firstSegment
    );
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

/**
 * Generates an array of hreflang tags for international SEO.
 */
export function getHreflangList(currentPath: string, siteUrl: string = "https://hostingspell.com") {
  // Strip existing locale prefix from current path
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

  const cleanSubPath = subPath ? `/${subPath}` : "";

  const list = ALL_LOCALES.map((loc) => {
    const href = loc.slug ? `${siteUrl}/${loc.slug}${cleanSubPath}` : `${siteUrl}${cleanSubPath || "/"}`;
    return {
      hreflang: loc.code,
      href,
    };
  });

  // Add x-default
  list.push({
    hreflang: "x-default",
    href: `${siteUrl}${cleanSubPath || "/"}`,
  });

  return list;
}

/**
 * Converts a base USD price to a given currency and returns symbol + formatted amount.
 */
export function formatLocalizedPrice(
  usdAmount: number | string,
  currency: SupportedCurrency,
  inrOverride?: number | string
): { formatted: string; amount: string; symbol: string; currency: SupportedCurrency } {
  const num = typeof usdAmount === "string" ? parseFloat(usdAmount) || 0 : usdAmount;
  
  if (currency === "INR") {
    const inrVal = inrOverride !== undefined ? inrOverride : Math.round(num * 75);
    return {
      formatted: `₹${inrVal}`,
      amount: String(inrVal),
      symbol: "₹",
      currency: "INR",
    };
  }

  const rate = LOCALES[currency === "GBP" ? "en-gb" : currency === "EUR" ? "es-es" : currency === "CAD" ? "en-ca" : currency === "AUD" ? "en-au" : "en-us"]?.exchangeRate || 1;
  const symbol = currency === "GBP" ? "£" : currency === "EUR" ? "€" : currency === "CAD" ? "C$" : currency === "AUD" ? "A$" : "$";
  
  const converted = Math.round(num * rate * 100) / 100;
  const formattedAmount = converted % 1 === 0 ? converted.toFixed(0) : converted.toFixed(2);

  return {
    formatted: `${symbol}${formattedAmount}`,
    amount: formattedAmount,
    symbol,
    currency,
  };
}
