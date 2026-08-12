import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const LOCAL_IPS = new Set(["::1", "127.0.0.1", "localhost"]);
const IP_FALLBACK_URLS = ["https://api.ipify.org", "https://ipv4.icanhazip.com"];

function getForwardedIp(req: NextRequest) {
    const forwarded = req.headers.get("forwarded");
    const forwardedFor = forwarded?.match(/for="?([^;,"]+)/i)?.[1];

    const candidates = [
        req.headers.get("cf-connecting-ip"),
        req.headers.get("true-client-ip"),
        req.headers.get("x-real-ip"),
        req.headers.get("x-vercel-forwarded-for"),
        req.headers.get("x-forwarded-for")?.split(",")[0],
        forwardedFor,
    ];

    return candidates
        .map((candidate) => candidate?.trim().replace(/^\[|\]$/g, ""))
        .find((candidate): candidate is string => Boolean(candidate && !LOCAL_IPS.has(candidate)));
}

export async function GET(req: NextRequest) {
    try {
        const forwardedIp = getForwardedIp(req);
        if (forwardedIp) {
            return NextResponse.json({ ip: forwardedIp });
        }

        for (const url of IP_FALLBACK_URLS) {
            const response = await fetch(url, { cache: "no-store" });
            if (!response.ok) {
                continue;
            }

            const ip = (await response.text()).trim();
            if (ip) {
                return NextResponse.json({ ip });
            }
        }

        throw new Error("Unable to fetch public IP");
    } catch (err) {
        return NextResponse.json({ ip: "Unable to fetch IP" }, { status: 500 });
    }
}
