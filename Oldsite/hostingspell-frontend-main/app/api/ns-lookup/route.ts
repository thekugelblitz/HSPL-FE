import { NextRequest, NextResponse } from "next/server";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({ points: 10, duration: 3600 });

function getClientIp(req: NextRequest): string {
  return req.headers.get("x-real-ip") || req.headers.get("cf-connecting-ip") || "127.0.0.1";
}

function isOriginAllowed(req: NextRequest): boolean {
  const origin = req.headers.get("origin") || req.headers.get("referer");
  if (!origin) return true;
  try {
    const allowed = process.env.ALLOWED_ORIGINS?.split(",") || ["https://hostingspell.com", "https://www.hostingspell.com"];
    const originHost = new URL(origin).hostname;
    return allowed.some(allowedOrigin => new URL(allowedOrigin).hostname === originHost);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
    try {
        // Rate limiting
        const clientIp = getClientIp(req);
        try {
            await rateLimiter.consume(clientIp);
        } catch {
            return NextResponse.json({ result: "error", message: "Too many requests" }, { status: 429 });
        }

        // Origin check
        if (!isOriginAllowed(req)) {
            return NextResponse.json({ result: "error", message: "Origin not allowed" }, { status: 403 });
        }

        const { domain } = await req.json();

        if (!domain) {
            return NextResponse.json(
                { result: "error", message: "No domain provided" },
                { status: 400 }
            );
        }

        const token = process.env.HOSTINGSPELL_API_TOKEN;

        // Call the PHP backend
        const res = await fetch("https://manage.hostingspell.com/get_domain_ns.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`,
            },
            body: new URLSearchParams({ domain }),
        });

        const data = await res.json();

        return NextResponse.json(data, { status: res.ok ? 200 : res.status });
    } catch (err) {
        console.error("NS Lookup API Error:", err);
        return NextResponse.json(
            { result: "error", message: "It looks like you entered wrong primary domain or it is not yet in our Back-end! Please contact our support :)" },
            { status: 500 }
        );
    }
}
