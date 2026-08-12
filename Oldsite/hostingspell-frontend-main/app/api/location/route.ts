// /app/api/location/route.ts
import { NextResponse } from "next/server";

// --- USA fallback (New York City) ---
const FALLBACK_LOCATION = {
  ip: "0.0.0.0",
  network: "",
  version: "IPv4",
  city: "New York",
  region: "New York",
  region_code: "NY",
  country: "US",
  country_name: "United States",
  country_code: "US",
  country_code_iso3: "USA",
  country_capital: "Washington D.C.",
  country_tld: ".us",
  continent_code: "NA",
  in_eu: false,
  postal: "10001",
  latitude: 40.7128,
  longitude: -74.006,
  timezone: "America/New_York",
  utc_offset: "-0500",
  country_calling_code: "+1",
  currency: "USD",
  currency_name: "Dollar",
  languages: "en-US,es-US",
  country_area: 9833517,
  country_population: 331893745,
  asn: "",
  org: "",
};

// --- Determine client IP ---
function isValidPublicIp(ip: string): boolean {
  // Reject private, loopback, link-local, and reserved IPs
  if (/^10\./.test(ip)) return false
  if (/^172\.(1[6-9]|2[0-9]|3[01])\./.test(ip)) return false
  if (/^192\.168\./.test(ip)) return false
  if (/^127\./.test(ip)) return false
  if (/^169\.254\./.test(ip)) return false
  if (ip === "::1" || ip.startsWith("fe80::")) return false
  return true
}

function getClientIp(req: Request): string {
  const headers = req.headers;

  // Only trust Cloudflare-provided IP (requires Cloudflare proxy)
  const cfIp = headers.get("cf-connecting-ip");
  if (cfIp && isValidPublicIp(cfIp)) return cfIp;

  // Only trust x-real-ip if set by nginx (assumes nginx is configured to set this reliably)
  const xRealIp = headers.get("x-real-ip");
  if (xRealIp && isValidPublicIp(xRealIp)) return xRealIp;

  // Do not trust x-forwarded-for as it can be easily spoofed
  // Fallback to localhost for trusted local development
  return "127.0.0.1";
}

export async function GET(req: Request) {
  try {
    const clientIp = getClientIp(req);

    // If local (fallback) IP, return fallback immediately
    if (clientIp === "127.0.0.1") {
      return NextResponse.json(FALLBACK_LOCATION);
    }

    // Fetch from ipapi.co using client IP
    const response = await fetch(`https://ipapi.co/${clientIp}/json/`);
    if (!response.ok) throw new Error("Failed to fetch location");

    const data = await response.json();

    // If API returns an error (like reserved IP), use fallback
    if (data.error) {
      console.warn("ipapi.co returned error:", data.reason);
      return NextResponse.json(FALLBACK_LOCATION);
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("IPAPI fetch failed:", err);
    return NextResponse.json(FALLBACK_LOCATION);
  }
}

