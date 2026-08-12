// /app/tools/dns/DNSCheckerPage.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import CountryFlag from "react-country-flag"
// import L from "leaflet" // ✅ proper import instead of require()
let L: any
import "leaflet/dist/leaflet.css"

// Load leaflet dynamically (Next.js SSR fix)
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

interface Props {
    initialDomain?: string;
    initialType?: string;
}

interface DNSServer {
    city: string
    country: string
    countryCode: string
    lat: number
    lon: number
    name: string
}

interface DNSRecord {
    status: "success" | "error"
    value: string
    server: DNSServer
}


export default function DNSCheckerPage({ initialDomain = "", initialType = "A" }: Props) {
    const validTypes = ["A", "AAAA", "CNAME", "MX", "NS", "TXT"]
    // const [domain, setDomain] = useState("")
    // const [recordType, setRecordType] = useState("A")

    const safeType = validTypes.includes(initialType?.toUpperCase()) ? initialType.toUpperCase() : "A"

    const [domain, setDomain] = useState(initialDomain)
    const [recordType, setRecordType] = useState(safeType)

    const [loading, setLoading] = useState(false)
    const [records, setRecords] = useState<DNSRecord[]>([])
    const [error, setError] = useState<string | null>(null)
    const [leafletReady, setLeafletReady] = useState(false)

    // Load leaflet only on client
    useEffect(() => {
        import("leaflet").then((leaflet) => {
            L = leaflet
            setLeafletReady(true)
        })
    }, [])

    const mapRef = useRef<any>(null)

    const handleLookup = async () => {
        if (!domain.trim()) return
        setLoading(true)
        setError(null)
        setRecords([])

        try {
            const res = await fetch(
                `https://testapi.hostingspell.net/dns.php?domain=${encodeURIComponent(domain)}&type=${recordType}`
            )
            const data = await res.json()

            if (data.error) {
                setError(data.error)
            } else {
                setRecords(data.records || [])
            }
        } catch (e) {
            setError("Failed to fetch data")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (initialDomain) {
            handleLookup();
        }
    }, [initialDomain, initialType]);


    return (
        <>
            <section className="relative my-16 w-full text-white bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">DNS Propagation Checker</h2>
                    <p className="text-sm sm:text-base text-white/80 mb-6">
                        Instantly check how your DNS records resolve across global servers in real time.
                    </p>

                    {/* Search bar */}
                    <div className="relative max-w-2xl mx-auto mb-8 w-full flex flex-col sm:flex-row gap-2 items-center">
                        <Input
                            placeholder="Enter domain (example.com)"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            className="flex-1 min-h-[44px] bg-white text-black placeholder-black/50 border border-gray-200 shadow-sm
               dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 dark:border-slate-700"
                        />

                        <Select value={recordType} onValueChange={setRecordType}>
                            <SelectTrigger
                                className="w-full sm:w-[120px] min-h-[44px] 
                 bg-white text-black border border-gray-200 shadow-sm
                 dark:bg-slate-800 dark:text-white dark:border-slate-700"
                            >
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>

                            <SelectContent
                                className="bg-white text-black border border-gray-200 shadow-md
                 dark:bg-slate-900 dark:text-white dark:border-slate-700"
                            >
                                {["A", "AAAA", "CNAME", "MX", "NS", "TXT"].map((t) => (
                                    <SelectItem
                                        key={t}
                                        value={t}
                                        className="cursor-pointer 
                     hover:bg-blue-100 focus:bg-blue-200
                     dark:hover:bg-slate-700 dark:focus:bg-slate-600"
                                    >
                                        {t}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button
                            onClick={handleLookup}
                            disabled={loading || !domain.trim()}
                            className="w-full sm:w-auto min-h-[44px] bg-white text-blue-600 hover:bg-blue-100 
               border border-white/30 shadow-sm
               dark:bg-slate-200 dark:text-blue-700 dark:hover:bg-slate-300"
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {loading ? "Searching…" : "Search"}
                        </Button>
                    </div>

                </div>
            </section>
            <div className="min-h-screen bg-background px-4">
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Results */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* DNS Server List */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Global DNS Servers</CardTitle>
                            </CardHeader>
                            <CardContent className="max-h-[400px] overflow-y-auto divide-y">
                                {error && <p className="text-red-500 p-4 text-center">{error}</p>}

                                {!error && !loading && records.length === 0 && (
                                    <p className="text-muted-foreground p-4 text-center">Enter a domain to begin.</p>
                                )}

                                {records.map((r, i) => (
                                    <div key={i} className="flex justify-between items-center gap-4 p-3 hover:bg-muted/50">
                                        {/* Left: Server Info */}
                                        <div className="flex items-center gap-3">
                                            {/* <img
                                                src={`https://flagcdn.com/w40/${r.server.countryCode.toLowerCase()}.png`}
                                                alt={r.server.country}
                                                className="w-6 h-4 rounded-sm border object-cover object-center"
                                            /> */}
                                            <CountryFlag
                                                countryCode={r.server.countryCode}
                                                svg
                                                style={{
                                                    width: "24px",   // same as w-6
                                                    height: "16px",  // same as h-4
                                                    borderRadius: "2px",
                                                    border: "1px solid #e5e7eb", // same as Tailwind border
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                }}
                                                alt={r.server.country}
                                            />

                                            <div>
                                                <div className="font-medium text-sm">
                                                    {r.server.city}, {r.server.country}
                                                </div>
                                                <div className="text-xs text-muted-foreground">{r.server.name}</div>
                                            </div>
                                        </div>

                                        {/* Right: Result */}
                                        <div className="flex items-center gap-2">
                                            {r.status === "success" ? (
                                                <span className="text-green-600 font-bold">✔</span>
                                            ) : (
                                                <span className="text-red-500 font-bold">✖</span>
                                            )}
                                            <code className="text-xs">{r.value}</code>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Map */}
                        <Card>
                            <CardHeader>
                                <CardTitle>World Map</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="w-full aspect-video rounded-md m-0 p-0">
                                    <MapContainer
                                        bounds={[
                                            [-90, -180], // bottom-left
                                            [90, 180],   // top-right (full earth)
                                        ]}
                                        className="h-full w-full z-0 bg-transperent"
                                        ref={mapRef}
                                        zoomControl={false}
                                        attributionControl={false}
                                        scrollWheelZoom={false}
                                        dragging={false}
                                        doubleClickZoom={false}
                                        touchZoom={false}
                                        boxZoom={false}
                                        keyboard={false}
                                        worldCopyJump={false}
                                        maxBounds={[
                                            [-90, -180],
                                            [90, 180],
                                        ]}
                                    >

                                        <TileLayer
                                            attribution=""
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />

                                        {records.map((r, i) => {
                                            if (!r.server.lat || !r.server.lon) return null

                                            const isSuccess = r.status === "success"
                                            const markerIcon = new L.Icon({
                                                iconUrl: isSuccess
                                                    ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
                                                    : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
                                                shadowUrl:
                                                    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                                                iconSize: [25, 41],
                                                iconAnchor: [12, 41],
                                                popupAnchor: [1, -34],
                                                shadowSize: [41, 41],
                                            })

                                            return (
                                                <Marker
                                                    key={i}
                                                    position={[r.server.lat, r.server.lon] as [number, number]}
                                                    icon={markerIcon}
                                                >
                                                    <Popup>
                                                        <div className="text-sm space-y-1">
                                                            <div className="font-bold flex items-center gap-2">
                                                                <CountryFlag
                                                                    countryCode={r.server.countryCode}
                                                                    svg
                                                                    style={{
                                                                        width: "30px",
                                                                        height: "22px",
                                                                        borderRadius: "2px",
                                                                        objectFit: "cover",
                                                                        objectPosition: "center",
                                                                    }}
                                                                    alt={r.server.country}
                                                                />
                                                                {r.server.city}, {r.server.country}
                                                            </div>
                                                            <div className="text-xs text-muted-foreground">
                                                                {r.server.name}
                                                            </div>
                                                            <code className="text-xs">{r.value}</code>
                                                        </div>
                                                    </Popup>
                                                </Marker>
                                            )
                                        })}
                                    </MapContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>

    )
}
