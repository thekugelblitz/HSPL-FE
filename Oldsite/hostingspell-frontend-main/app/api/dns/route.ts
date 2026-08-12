import { NextRequest, NextResponse } from "next/server"
import { RateLimiterMemory } from "rate-limiter-flexible"

const rateLimiter = new RateLimiterMemory({ points: 10, duration: 3600 })

function getClientIp(req: NextRequest): string {
  return req.headers.get("x-real-ip") || req.headers.get("cf-connecting-ip") || "127.0.0.1"
}

function isOriginAllowed(req: NextRequest): boolean {
  const origin = req.headers.get("origin") || req.headers.get("referer")
  if (!origin) return true // Allow requests without origin (e.g., direct API calls)
  try {
    const allowed = process.env.ALLOWED_ORIGINS?.split(",") || ["https://hostingspell.com", "https://www.hostingspell.com"]
    const originHost = new URL(origin).hostname
    return allowed.some(allowedOrigin => new URL(allowedOrigin).hostname === originHost)
  } catch {
    return false
  }
}

export async function GET(req: NextRequest) {
	try {
		// Rate limiting
		const clientIp = getClientIp(req)
		try {
			await rateLimiter.consume(clientIp)
		} catch {
			return NextResponse.json({ error: "Too many requests" }, { status: 429 })
		}

		// Origin check
		if (!isOriginAllowed(req)) {
			return NextResponse.json({ error: "Origin not allowed" }, { status: 403 })
		}

		const domain = req.nextUrl.searchParams.get("domain") || ""
		const recordType = req.nextUrl.searchParams.get("type") || "A"

		if (!domain) {
			return NextResponse.json({ error: "Domain is required" }, { status: 400 })
		}

		// Prepare form data for PHP backend
		const formData = new URLSearchParams()
		formData.append("domain", domain)
		formData.append("type", recordType)

		const response = await fetch("https://manage.hostingspell.com/dns.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": `Bearer ${process.env.HOSTINGSPELL_API_TOKEN}`,
			},
			body: formData.toString(),
		})

		if (!response.ok) {
			return NextResponse.json({ error: "Failed to fetch DNS records" }, { status: 500 })
		}

		const data = await response.json() // assuming your PHP script returns JSON
		return NextResponse.json(data)
	} catch (error) {
		console.error("DNS API error:", error)
		return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
	}
}
