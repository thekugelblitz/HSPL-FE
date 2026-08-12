import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const rawIp = forwardedFor?.split(",")[0]?.trim() || realIp || "";

  let targetIp = rawIp;
  if (!targetIp || targetIp === "::1" || targetIp === "127.0.0.1" || targetIp.startsWith("127.")) {
    targetIp = "";
  }

  // 1. Try FreeIPAPI
  try {
    const apiUrl = targetIp ? `https://freeipapi.com/api/json/${targetIp}` : "https://freeipapi.com/api/json";
    const res = await fetch(apiUrl, { headers: { Accept: "application/json" } });
    if (res.ok) {
      const data = await res.json();
      if (data && data.countryCode) {
        const countryCode = String(data.countryCode).toUpperCase();
        return new Response(
          JSON.stringify({
            ip: data.ipAddress || targetIp,
            city: data.cityName || "Unknown",
            country: countryCode,
            country_name: data.countryName || "United States",
            currency: countryCode === "IN" ? "INR" : "USD",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
    }
  } catch (e) {
    console.warn("FreeIPAPI lookup failed:", e);
  }

  // 2. Try ipapi.co
  try {
    const apiUrl = targetIp ? `https://ipapi.co/${targetIp}/json/` : "https://ipapi.co/json/";
    const res = await fetch(apiUrl, { headers: { Accept: "application/json" } });
    if (res.ok) {
      const data = await res.json();
      const countryCode = String(data.country || "").toUpperCase();
      return new Response(
        JSON.stringify({
          ip: data.ip || targetIp,
          city: data.city || "Unknown",
          country: countryCode,
          country_name: data.country_name || "United States",
          currency: countryCode === "IN" ? "INR" : "USD",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (e) {
    console.warn("ipapi.co lookup failed:", e);
  }

  // 3. Fallback
  return new Response(
    JSON.stringify({
      ip: "0.0.0.0",
      city: "New York",
      country: "US",
      country_name: "United States",
      currency: "USD",
      error: true,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
