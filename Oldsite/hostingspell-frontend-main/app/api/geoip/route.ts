import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // Get IP from request headers (works in production behind proxies/Vercel)
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "";
    
    // Check if we are running locally or have a loopback IP
    let targetIp = ip;
    if (!targetIp || targetIp === "::1" || targetIp === "127.0.0.1" || targetIp.startsWith("127.")) {
        // If local, do not pass IP to geolocators (so they geolocate the requesting network public IP)
        targetIp = "";
    }

    // Try FreeIPAPI first
    try {
        const apiUrl = targetIp ? `https://freeipapi.com/api/json/${targetIp}` : "https://freeipapi.com/api/json";
        const res = await fetch(apiUrl, { next: { revalidate: 3600 } }); // cache for 1 hour
        if (!res.ok) throw new Error("FreeIPAPI server fetch failed");
        
        const data = await res.json();
        if (data && data.countryCode) {
            return NextResponse.json({
                ip: data.ipAddress || targetIp,
                city: data.cityName,
                region: data.regionName,
                country: data.countryCode,
                country_name: data.countryName,
                latitude: data.latitude,
                longitude: data.longitude,
                currency: data.countryCode === "IN" ? "INR" : "USD"
            });
        }
    } catch (e) {
        console.warn("Server-side FreeIPAPI failed, trying ipapi.co...", e);
    }

    // Fallback to ipapi.co
    try {
        const apiUrl = targetIp ? `https://ipapi.co/${targetIp}/json/` : "https://ipapi.co/json/";
        const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
        if (!res.ok) throw new Error("ipapi.co server fetch failed");
        
        const data = await res.json();
        return NextResponse.json({
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country,
            country_name: data.country_name,
            latitude: data.latitude,
            longitude: data.longitude,
            currency: data.country === "IN" || data.country_name?.toLowerCase() === "india" ? "INR" : "USD"
        });
    } catch (e: any) {
        console.error("All server-side GeoIP lookups failed:", e);
        return NextResponse.json({
            ip: "0.0.0.0",
            city: "New York",
            region: "New York",
            country: "US",
            country_name: "United States",
            latitude: 40.7128,
            longitude: -74.006,
            currency: "USD",
            error: true
        });
    }
}
