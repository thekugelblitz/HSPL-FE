"use client"

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import InfoPopover from "@/components/shared/InfoPopover"
import { IN_DOMAIN_KYC_TOOLTIP, requiresInRegistryKyc } from "@/lib/domainTld"
import { motion } from "framer-motion"
import { useCurrency } from "@/context/CurrencyContext"
import { FiSearch } from "@/components/icons/OptimizedIcons"
import { Badge } from "@/components/ui/badge"
import MarqueeBanner from "../components/MarqueeBanner"

function AIPageTable({ domains, itemsPerPage }: { domains: string[]; itemsPerPage: number }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState("")
    const [pricingData, setPricingData] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const { currency } = useCurrency()

    var selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";


    // Filter domains based on search
    const filteredDomains = domains.filter(domain =>
        domain.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filteredDomains.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentDomains = filteredDomains.slice(startIndex, startIndex + itemsPerPage)

    // Reset to page 1 when search changes
    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    // Fetch real pricing data from API
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const res = await fetch("/api/domain-prices")
                const json = await res.json()

                // Format the data similar to DomainPricingTable
                const formatted = Object.entries(json).reduce((acc: any, [tld, prices]: [string, any]) => {
                    acc[tld] = {
                        INR: {
                            register: parseFloat(prices.INR.register),
                            renew: parseFloat(prices.INR.renew),
                            transfer: parseFloat(prices.INR.transfer),
                        },
                        USD: {
                            register: parseFloat(prices.USD.register),
                            renew: parseFloat(prices.USD.renew),
                            transfer: parseFloat(prices.USD.transfer),
                        },
                    }
                    return acc
                }, {})

                setPricingData(formatted)
            } catch (error) {
                console.error("Error fetching domain prices:", error)
                // Fallback to mock data if API fails
                setPricingData({
                    com: { USD: { register: 12.99, renew: 14.99, transfer: 12.99 }, INR: { register: 978, renew: 1129, transfer: 978 } },
                    org: { USD: { register: 10.49, renew: 12.49, transfer: 10.49 }, INR: { register: 789, renew: 939, transfer: 789 } },
                    net: { USD: { register: 13.99, renew: 15.99, transfer: 13.99 }, INR: { register: 1052, renew: 1202, transfer: 1052 } },
                    info: { USD: { register: 4.49, renew: 6.49, transfer: 4.49 }, INR: { register: 338, renew: 488, transfer: 338 } },
                    xyz: { USD: { register: 3.49, renew: 5.49, transfer: 3.49 }, INR: { register: 263, renew: 413, transfer: 263 } },
                })
            } finally {
                setLoading(false)
            }
        }

        fetchPrices()
    }, [])

    // Extract TLD from domain name and get pricing
    const getPricing = (domain: string) => {
        // Extract TLD from domain (e.g., "example.com" -> "com")
        const parts = domain.split('.')
        const tld = parts[parts.length - 1] || 'com'

        // Return pricing data or fallback to .com pricing
        return pricingData[tld] || pricingData.com || {
            USD: { register: 12.99, renew: 14.99, transfer: 12.99 },
            INR: { register: 978, renew: 1129, transfer: 978 }
        }
    }

    const currencySymbol = currency === 'USD' ? '$' : '₹'

    return (
        <section className="py-4 text-center">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-sm mb-6 dark:text-white">
                    Here are your personalized domain name suggestions.
                </p>

                {loading ? (
                    <p className="text-sm text-white dark:text-white">Generating...</p>
                ) : (
                    <div className="bg-white dark:bg-[#101626] rounded-md border overflow-hidden divide-y divide-gray-200 dark:divide-gray-800">
                        {currentDomains.length > 0 ? (
                            currentDomains.map((domain, idx) => {
                                const pricing = getPricing(domain)
                                const originalPrice = pricing[currency].original
                                const discountedPrice = pricing[currency].register

                                return (
                                    <div
                                        key={idx}
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 hover:bg-muted/50 border-b last:border-0"
                                    >
                                        {/* Domain name + SAVE badge */}
                                        <div className="flex items-center gap-2 font-medium text-black dark:text-white">
                                            <span>{domain}</span>
                                            <Badge
                                                variant="secondary"
                                                className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-md"
                                            >
                                                SAVE 10%
                                            </Badge>
                                        </div>

                                        {/* Price + Button */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2 sm:mt-0">
                                            <div className="text-sm text-black dark:text-white text-left sm:text-right">
                                                <span className="font-semibold">
                                                    {currencySymbol}{discountedPrice}/year
                                                </span>
                                            </div>
                                            <a
                                                href={`https://manage.hostingspell.com/cart.php?a=add&domain=register&${selectedCurrency}&query=${domain}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 sm:mt-0"
                                            >
                                                <Button
                                                    size="sm"
                                                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 w-full sm:w-auto"
                                                >
                                                    Buy now
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="text-center py-4 text-muted-foreground">
                                No domains found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>

    )
}

export function Hero() {
    const [query, setQuery] = useState("")
    const [mode, setMode] = useState<"domain" | "ai">("domain")
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 })
    const [aiDomains, setAiDomains] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const { currency } = useCurrency()
    const domainBtnRef = useRef<HTMLButtonElement>(null)
    const aiBtnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const hash = window.location.hash.replace("#", "")
        if (hash === "ai-domain-generator") setMode("ai")
        else if (hash === "domain-name-search") setMode("domain")
    }, [])

    useEffect(() => {
        const newHash = mode === "domain" ? "domain-name-search" : "ai-domain-generator"
        if (window.location.hash !== `#${newHash}`) {
            window.history.replaceState(null, "", `#${newHash}`)
        }
    }, [mode])

    useLayoutEffect(() => {
        const activeBtn = mode === "domain" ? domainBtnRef.current : aiBtnRef.current
        if (activeBtn) {
            setIndicatorStyle({
                left: activeBtn.offsetLeft,
                width: activeBtn.offsetWidth,
            })
        }
    }, [mode])

    const domainExtensions = [
        { ext: ".com", logo: '/img/domains/com.png', oldPrice: { USD: "US$ 14.99", INR: "₹ 1,499" }, price: { USD: "US$ 12", INR: "₹ 937" } },
        { ext: ".in", logo: '/img/domains/in.png', oldPrice: { USD: "US$ 11.79", INR: "₹ 2,899" }, price: { USD: "US$ 8", INR: "₹ 624" } },
        { ext: ".org", logo: '/img/domains/org.png', oldPrice: { USD: "US$ 14.29", INR: "₹ 2,899" }, price: { USD: "US$ 10", INR: "₹ 803" } },
        { ext: ".xyz", logo: '/img/domains/xyz.png', oldPrice: { USD: "US$ 5.49", INR: "₹ 1,199" }, price: { USD: "US$ 3", INR: "₹ 178" } },
        { ext: ".net", logo: '/img/domains/net.png', oldPrice: { USD: "US$ 15.99", INR: "₹ 1,499" }, price: { USD: "US$ 14", INR: "₹ 1115" } },
        { ext: ".info", logo: '/img/domains/info.png', oldPrice: { USD: "US$ 19.52", INR: "₹ 1699" }, price: { USD: "US$ 4", INR: "₹ 267" } },
    ]

    const handleGenerateAI = async () => {
        if (!query.trim()) return
        setLoading(true)
        setError(null)
        setAiDomains([])

        try {
            const res = await fetch(`/api/ai-domain?query=${encodeURIComponent(query.trim())}`)
            const json = await res.json()
            if (json.error) {
                setError(json.error)
            } else {
                setAiDomains(json.domains || [])
            }
        } catch (err) {
            console.error(err)
            setError("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    var selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";

    return (
        <section className="relative w-full text-white bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -mt-8 pt-16 pb-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Search for a domain name</h2>
                <p className="text-sm sm:text-base text-white/80 mb-6">
                    Discover, buy and register your unique domain with our domain name search or AI domain generator
                </p>

                {/* Animated Tabs */}
                <div className="relative flex justify-center bg-white/10 rounded-full p-1 w-fit mx-auto mb-6">
                    <motion.div
                        animate={indicatorStyle}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute top-1 bottom-1 rounded-full bg-white"
                        style={indicatorStyle}
                    />
                    <button
                        ref={domainBtnRef}
                        className={cn(
                            "relative z-10 px-4 py-2 rounded-full text-sm sm:text-base transition-colors",
                            mode === "domain" ? "text-blue-700" : "text-white"
                        )}
                        onClick={() => setMode("domain")}
                    >
                        Domain search
                    </button>
                    <button
                        ref={aiBtnRef}
                        className={cn(
                            "relative z-10 px-4 py-2 rounded-full text-sm sm:text-base transition-colors",
                            mode === "ai" ? "text-blue-700" : "text-white"
                        )}
                        onClick={() => setMode("ai")}
                    >
                        ✨ AI domain generator
                    </button>
                </div>

                {/* Search bar */}
                <div className="relative max-w-2xl mx-auto mb-8 w-full">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && mode === "domain" && query.trim()) {
                                window.location.href = `https://manage.hostingspell.com/cart.php?a=add&domain=register&${selectedCurrency}&query=${encodeURIComponent(query.trim())}`
                            }
                        }}
                        placeholder={mode === "domain" ? "Type the domain you want" : "e.g. Website for a business consulting company."}
                        className="w-full min-h-[48px] pl-4 pr-[110px] rounded-md border bg-white text-black placeholder-black/50 border-black/10"
                    />
                    <Button
                        onClick={() => {
                            if (mode === "domain" && query.trim()) {
                                window.location.href = `https://manage.hostingspell.com/cart.php?a=add&domain=register&${selectedCurrency}&query=${encodeURIComponent(query.trim())}`
                            } else {
                                handleGenerateAI()
                            }
                        }}
                        className="absolute right-1 top-1 bottom-1 h-auto px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                    >
                        {mode === "domain" ? "Search" : loading ? "Generating…" : "Generate"}
                    </Button>
                </div>

                {/* Domain extensions */}
                {mode === "domain" && (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center mb-4">
                            {domainExtensions.map((d, i) => (
                                <div
                                    key={i}
                                    className="rounded-md border border-white/20 bg-white text-black py-4 flex flex-col items-center text-center"
                                >
                                    {/* Logo */}
                                    <div className="relative mb-2">
                                        <img
                                            src={d.logo}
                                            alt={`${d.ext} domain`}
                                            className="w-12 h-12 object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement
                                                target.style.display = 'none'
                                                const parent = target.parentElement
                                                if (parent) {
                                                    const div = document.createElement('div')
                                                    div.className = 'font-semibold'
                                                    div.textContent = d.ext
                                                    parent.appendChild(div)
                                                }
                                            }}
                                        />
                                        {requiresInRegistryKyc(d.ext) && (
                                            <div className="absolute -top-1 -right-3">
                                                <InfoPopover content={IN_DOMAIN_KYC_TOOLTIP} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Pricing */}
                                    <div className="line-through text-xs text-black">{d.oldPrice[currency]}</div>
                                    <div className="text-sm font-medium">{d.price[currency]}</div>
                                </div>

                            ))}
                        </div>
                        <p className="text-xs text-white/70">
                            Free WHOIS privacy protection is included with every eligible domain registration.
                        </p>
                    </>
                )}

                {/* AI Domain Table */}
                {mode === "ai" && (
                    <div className="mt-6 max-w-3xl mx-auto">
                        {error && <p className="text-whitetext-center mb-4">{error}</p>}

                        {aiDomains.length === 0 && !loading && !error && (
                            <p className="text-white/80 text-center">
                                Enter a prompt and click Generate to see AI domain suggestions.
                            </p>
                        )}

                        {aiDomains.length > 0 && (
                            <AIPageTable domains={aiDomains} itemsPerPage={10} />
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}