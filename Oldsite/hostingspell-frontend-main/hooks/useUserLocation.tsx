"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

// Zod schema for validation
const ipApiSchema = z.object({
  ip: z.string().optional(),
  network: z.string().optional(),
  version: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  region_code: z.string().optional(),
  country: z.string().optional(),
  country_name: z.string().optional(),
  country_code: z.string().optional(),
  country_code_iso3: z.string().optional(),
  country_capital: z.string().optional(),
  country_tld: z.string().optional(),
  continent_code: z.string().optional(),
  in_eu: z.boolean().optional(),
  postal: z.string().optional(),
  latitude: z.number().or(z.string()).transform(Number).optional(),
  longitude: z.number().or(z.string()).transform(Number).optional(),
  timezone: z.string().optional(),
  utc_offset: z.string().optional(),
  country_calling_code: z.string().optional(),
  currency: z.string().optional(),
  currency_name: z.string().optional(),
  languages: z.string().optional(),
  country_area: z.number().optional(),
  country_population: z.number().optional(),
  asn: z.string().optional(),
  org: z.string().optional(),
});

export type IpApiResponse = z.infer<typeof ipApiSchema>;

// --- USA fallback (same as server fallback) ---
const FALLBACK_LOCATION: IpApiResponse = {
  ip: "0.0.0.0",
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

export function useUserLocation() {
  const [location, setLocation] = useState<IpApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("/api/location");
        if (!res.ok) throw new Error("Failed to fetch location");

        const data = await res.json();
        const parsed = ipApiSchema.parse(data);

        setLocation(parsed);
      } catch (err: any) {
        console.error("Location fetch failed:", err);
        setError(err.message);
        setLocation(FALLBACK_LOCATION);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { location, loading, error };
}
