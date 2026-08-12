import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/geoip.ts
var geoip_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async ({ request }) => {
	const forwardedFor = request.headers.get("x-forwarded-for");
	const realIp = request.headers.get("x-real-ip");
	let targetIp = forwardedFor?.split(",")[0]?.trim() || realIp || "";
	if (!targetIp || targetIp === "::1" || targetIp === "127.0.0.1" || targetIp.startsWith("127.")) targetIp = "";
	try {
		const apiUrl = targetIp ? `https://freeipapi.com/api/json/${targetIp}` : "https://freeipapi.com/api/json";
		const res = await fetch(apiUrl, { headers: { Accept: "application/json" } });
		if (res.ok) {
			const data = await res.json();
			if (data && data.countryCode) {
				const countryCode = String(data.countryCode).toUpperCase();
				return new Response(JSON.stringify({
					ip: data.ipAddress || targetIp,
					city: data.cityName || "Unknown",
					country: countryCode,
					country_name: data.countryName || "United States",
					currency: countryCode === "IN" ? "INR" : "USD"
				}), {
					status: 200,
					headers: { "Content-Type": "application/json" }
				});
			}
		}
	} catch (e) {
		console.warn("FreeIPAPI lookup failed:", e);
	}
	try {
		const apiUrl = targetIp ? `https://ipapi.co/${targetIp}/json/` : "https://ipapi.co/json/";
		const res = await fetch(apiUrl, { headers: { Accept: "application/json" } });
		if (res.ok) {
			const data = await res.json();
			const countryCode = String(data.country || "").toUpperCase();
			return new Response(JSON.stringify({
				ip: data.ip || targetIp,
				city: data.city || "Unknown",
				country: countryCode,
				country_name: data.country_name || "United States",
				currency: countryCode === "IN" ? "INR" : "USD"
			}), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		}
	} catch (e) {
		console.warn("ipapi.co lookup failed:", e);
	}
	return new Response(JSON.stringify({
		ip: "0.0.0.0",
		city: "New York",
		country: "US",
		country_name: "United States",
		currency: "USD",
		error: true
	}), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/geoip@_@ts
var page = () => geoip_exports;
//#endregion
export { page };
