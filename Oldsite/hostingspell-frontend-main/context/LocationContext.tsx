// app/context/LocationContext.tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type IpApiResponse = {
    ip?: string;
    city?: string;
    region?: string;
    country?: string;
    country_name?: string;
    latitude?: number;
    longitude?: number;
    currency?: string;
    [key: string]: any;
};

// --- USA fallback ---
const FALLBACK_LOCATION: IpApiResponse = {
    ip: "0.0.0.0",
    city: "New York",
    region: "New York",
    country: "US",
    country_name: "United States",
    latitude: 40.7128,
    longitude: -74.006,
    currency: "USD",
};

type LocationContextType = {
    location: IpApiResponse;
    loading: boolean;
    error: string | null;
};

const LocationContext = createContext<LocationContextType>({
    location: FALLBACK_LOCATION,
    loading: true,
    error: null,
});

export const useLocation = () => useContext(LocationContext);

export function LocationProvider({ children }: { children: ReactNode }) {
    const [location, setLocation] = useState<IpApiResponse>(FALLBACK_LOCATION);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const res = await fetch("/api/geoip");
                if (!res.ok) throw new Error("Internal GeoIP lookup failed");

                const data: IpApiResponse = await res.json();

                if (data.error || !data.country_name) {
                    setLocation(FALLBACK_LOCATION);
                } else {
                    setLocation(data);
                }
            } catch (err: any) {
                console.warn("GeoIP lookup failed, using fallback:", err);
                setLocation(FALLBACK_LOCATION);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLocation();
    }, []);

    return (
        <LocationContext.Provider value={{ location, loading, error }}>
            {children}
        </LocationContext.Provider>
    );
}
