"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FiSearch } from "@/components/icons/OptimizedIcons"
import { useCurrency } from "@/context/CurrencyContext" // ✅ import global currency
import InfoPopover from "@/components/shared/InfoPopover"
import { IN_DOMAIN_KYC_TOOLTIP, requiresInRegistryKyc } from "@/lib/domainTld"

export default function DomainPricingTable() {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const rowsPerPage = 10

    const { currency } = useCurrency() // ✅ get selected currency from context

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const res = await fetch("/api/domain-prices")
                const json = await res.json()

                const formatted = Object.entries(json).map(([tld, prices]) => ({
                    tld: `.${tld}`,
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
                }))

                // ✅ Priority TLDs
                const priorityList = [
                    ".com",
                    ".in",
                    ".net",
                    ".org",
                    ".studio",
                    ".xyz",
                    ".net.in",
                    ".co.in",
                ]

                // ✅ Sort so priority comes first
                const sorted = [...formatted].sort((a, b) => {
                    const aPriority = priorityList.indexOf(a.tld)
                    const bPriority = priorityList.indexOf(b.tld)

                    if (aPriority !== -1 && bPriority !== -1) {
                        return aPriority - bPriority
                    }
                    if (aPriority !== -1) return -1
                    if (bPriority !== -1) return 1
                    return a.tld.localeCompare(b.tld)
                })

                setData(sorted)
            } catch (error) {
                console.error("Error fetching domain prices:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchPrices()
    }, [])

    const filtered = data.filter((item) =>
        item.tld.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filtered.length / rowsPerPage)
    const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage)

    const currencySymbol = currency === "INR" ? "₹" : "$"
    const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";

    return (
        <section className="py-16 text-center">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
                    Website <span className="text-blue-600">Extensions</span>
                    <br />
                    for your <span className="text-blue-600">Needs.</span>
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                    Experience the best possible web hosting for your website.
                </p>

                {/* Table */}
                {loading ? (
                    <p className="text-sm text-gray-500">Loading prices...</p>
                ) : (
                    <div className="overflow-x-auto border rounded-md">
                        <table className="w-full text-left min-w-[640px]">
                            <thead className="text-sm font-semibold border-b">
                                <tr>
                                    <th className="py-3 px-4">TLD</th>
                                    <th className="py-3 px-4">Register Cost</th>
                                    <th className="py-3 px-4">Renew Cost</th>
                                    <th className="py-3 px-4">Transfer Cost</th>
                                    <th className="py-3 px-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginated.map((row, idx) => (
                                    <tr key={idx} className="border-b hover:bg-muted/50">
                                        <td className="py-3 px-4 font-medium">
                                            <span className="inline-flex items-center gap-1">
                                                {row.tld}
                                                {requiresInRegistryKyc(row.tld) && (
                                                    <InfoPopover content={IN_DOMAIN_KYC_TOOLTIP} />
                                                )}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            {currencySymbol} {row[currency].register}
                                        </td>
                                        <td className="py-3 px-4">
                                            {currencySymbol} {row[currency].renew}
                                        </td>
                                        <td className="py-3 px-4">
                                            {currencySymbol} {row[currency].transfer}
                                        </td>
                                        <td className="py-3 px-4 text-blue-600 cursor-pointer">
                                            <a
                                                href={`https://manage.hostingspell.com/cart.php?a=add&domain=register&${selectedCurrency}`}
                                            >
                                                <Button className="dark:text-white">REGISTER</Button>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                {paginated.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="text-center py-4 text-muted-foreground"
                                        >
                                            No results found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-6 gap-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            disabled={page === 1}
                        >
                            «
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                            <Button
                                key={n}
                                size="sm"
                                variant={n === page ? "default" : "outline"}
                                className="w-8 h-8 p-0"
                                onClick={() => setPage(n)}
                            >
                                {n}
                            </Button>
                        ))}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                            disabled={page === totalPages}
                        >
                            »
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
