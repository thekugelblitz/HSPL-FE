// /app/api/opengraph/route.ts
import { NextResponse } from "next/server"
import * as cheerio from "cheerio"
import * as dns from "dns"

function isPrivateIP(ip: string): boolean {
  // RFC1918 private ranges
  if (/^10\./.test(ip)) return true
  if (/^172\.(1[6-9]|2[0-9]|3[01])\./.test(ip)) return true
  if (/^192\.168\./.test(ip)) return true
  // Loopback
  if (/^127\./.test(ip)) return true
  // Link-local / cloud metadata
  if (/^169\.254\./.test(ip)) return true
  if (ip === "169.254.169.254") return true
  // IPv6 loopback
  if (ip === "::1" || ip.startsWith("fe80::")) return true
  return false
}

async function isUrlAllowed(urlStr: string): Promise<boolean> {
  let url: URL
  try {
    url = new URL(urlStr)
  } catch {
    return false
  }
  // Only allow http/https
  if (!["http:", "https:"].includes(url.protocol)) return false
  const hostname = url.hostname
  // If hostname is an IPv4 address, check directly
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    if (isPrivateIP(hostname)) return false
  }
  // Resolve hostname to IP and check
  try {
    const { address } = await dns.promises.lookup(hostname)
    if (isPrivateIP(address)) return false
  } catch {
    // DNS lookup failed, block to be safe
    return false
  }
  return true
}

function normalizeUrl(input: string): string {
    if (!/^https?:\/\//i.test(input)) {
        // Default to http:// if no scheme
        return "http://" + input
    }
    return input
}

async function fetchWithFallback(url: string): Promise<Response> {
    try {
        return await fetch(url, { redirect: "follow" })
    } catch (err) {
        // If the request was http:// and failed, try https://
        if (url.startsWith("http://")) {
            const httpsUrl = url.replace(/^http:\/\//i, "https://")
            return await fetch(httpsUrl, { redirect: "follow" })
        }
        throw err
    }
}

async function parseOpenGraph(url: string) {
    const res = await fetchWithFallback(url)
    const html = await res.text()
    const $ = cheerio.load(html)

    const tags: Record<string, string> = {}

    $("meta").each((_, el) => {
        const property = $(el).attr("property") || $(el).attr("name")
        const content = $(el).attr("content")
        if (property && content) {
            tags[property] = content
        }
    })

    const title = $("title").text() || tags["og:title"] || null
    const description = tags["description"] || tags["og:description"] || null
    const image = tags["og:image"] || null

    return { url, title, description, image, tags }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const rawUrl = searchParams.get("url")

    if (!rawUrl) {
        return NextResponse.json({ error: "Missing ?url=" }, { status: 400 })
    }

    const targetUrl = normalizeUrl(rawUrl)

    if (!(await isUrlAllowed(targetUrl))) {
        return NextResponse.json({ error: "URL is not allowed" }, { status: 403 })
    }

    try {
        const data = await parseOpenGraph(targetUrl)
        return NextResponse.json(data)
    } catch (err: any) {
        return NextResponse.json(
            { error: err?.message || "Failed to fetch or parse URL" },
            { status: 500 }
        )
    }
}
