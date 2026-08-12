import { NextResponse } from "next/server";
import redis from "@/lib/redis";

interface DomainPriceResponse {
    domain: string;
    price: number;
    currency: string;
    [key: string]: any;
}

export async function GET() {
    try {
        const token = process.env.HOSTINGSPELL_API_TOKEN;
        if (!token) {
            return NextResponse.json({ error: "API token not configured" }, { status: 500 });
        }

        const cacheKey = "hostingspell_domain_prices";

        // 1. Check Redis cache if enabled
        if (redis) {
            const cachedData = await redis.get(cacheKey);
            if (cachedData) {
                console.log("✅ Redis cache hit");
                return NextResponse.json(JSON.parse(cachedData) as DomainPriceResponse[]);
            }
        }

        // 2. Fetch from external API
        const response = await fetch(
            "https://manage.hostingspell.com/get_domain_price.php",
            {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const text = await response.text();
        let json: DomainPriceResponse[];
        try {
            json = JSON.parse(text);
        } catch (err) {
            console.error("Invalid JSON from API:", text);
            return NextResponse.json(
                { error: "Invalid JSON from external API" },
                { status: 500 }
            );
        }

        // 3. Save in Redis cache if enabled (1 week)
        if (redis) {
            await redis.set(cacheKey, JSON.stringify(json), "EX", 604800);
        }

        console.log("✅ Fetched fresh data from API");

        // 4. Return same structure as cookie version
        return NextResponse.json(json);
    } catch (error) {
        console.error("Error fetching domain prices:", error);
        return NextResponse.json(
            { error: "Failed to fetch domain prices" },
            { status: 500 }
        );
    }
}
