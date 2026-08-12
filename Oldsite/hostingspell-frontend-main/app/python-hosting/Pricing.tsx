"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import InfoPopover from "@/components/shared/InfoPopover"
import { Check } from "lucide-react"
import { ServerLocationDropdown, LocationInfo, LOCATIONS } from "@/app/premium-hosting/ServerLocationDropdown"
import { useCurrency } from "@/context/CurrencyContext"
import { cn } from "@/lib/utils"
import PremiumHostingCompareSection from "@/components/pricing/PremiumHostingCompareSection"
import { PLANS_PREMIUM_HOSTING } from "@/lib/constants-premium"
import { FeatureList } from "@/app/components/FeatureList"

const plans = PLANS_PREMIUM_HOSTING

type BillingCycle = "monthly" | "annual" | "biannual" | "triannual"

const tabLabels: { value: BillingCycle; label: string; discount?: string }[] = [
    { value: "monthly", label: "MONTHLY" },
    { value: "annual", label: "ANNUAL", discount: "DISCOUNT" },
    { value: "biannual", label: "BI-ANNUAL", discount: "DISCOUNT +" },
    { value: "triannual", label: "TRI-ANNUAL", discount: "DISCOUNT ++" },
]

type Feature = {
    label: string;
    info?: string;
};

const features = [
    "24/7/365 Support", "Free SSL", "LiteSpeed Web Server", "Unlimited Traffic",
    "Daily Auto Backup", "Redis, Memcached and OpCach", "Dedicated Firewalls + DDoS",
    "Unlimited Email /  FTP Accounts", "Unlimited Application Installation", "Free Migration",
    "HTTP/2 Enabled Servers", "Unlimited SQL Database", "Imunify360 Anti-virus",
    "Regular Security Patching", "LiteSpeed WordPress Cache", "Unlimited Subdomains",
]

// LocalPricing: same as the original Pricing but without the outer <section> wrapper.
// The parent page controls all outer padding, background, and container width.
export function LocalPricing() {
    const [tab, setTab] = useState<BillingCycle>("monthly")
    const [location, setLocation] = useState<LocationInfo>(LOCATIONS[0])
    const { currency } = useCurrency()

    const availableTabs = tabLabels.filter((tabItem) => {
        const samplePlan = plans[0]
        const locationPricing = samplePlan.pricing[location.code as keyof typeof samplePlan.pricing]
        if (!locationPricing) return false
        const currencyPricing = locationPricing[currency]
        if (!currencyPricing) return false
        return currencyPricing.hasOwnProperty(tabItem.value)
    })

    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                    <h3 className="text-2xl font-bold">Plans That Adapt to Your Budget</h3>
                    <div className="flex items-center">
                        <label htmlFor="server-location-dropdown" className="sr-only">Server Location</label>
                        <ServerLocationDropdown selected={location} setSelected={setLocation} />
                    </div>
                </div>
                <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
            </div>

            <Tabs value={tab} onValueChange={(value) => setTab(value as BillingCycle)} className="w-full">
                <div className="mb-8">
                    {/* Desktop Tabs */}
                    <div className="hidden md:flex justify-center gap-2">
                        {availableTabs.map((t) => {
                            const isActive = tab === t.value
                            return (
                                <button
                                    key={t.value}
                                    onClick={() => setTab(t.value)}
                                    className={cn(
                                        "px-2 py-2 text-xs font-bold rounded border transition-all",
                                        isActive
                                            ? "bg-blue-500 text-white border-blue-500 dark:border-white dark:bg-white dark:text-black"
                                            : "bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        <span>{t.label}</span>
                                        {t.discount && (
                                            <span className={cn(
                                                "px-2 py-0.5 text-[10px] font-bold rounded",
                                                isActive
                                                    ? "text-white border-0 text-black bg-yellow-200 dark:text-white dark:bg-red-400 dark:border-black"
                                                    : "text-black dark:bg-black/5 dark:text-orange-300 dark:bg-white/10"
                                            )}>
                                                {t.discount}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Mobile Tabs */}
                    <div className="grid grid-cols-1 max-w-[200px] mx-auto gap-2 md:hidden mt-4">
                        {tabLabels.map((t) => {
                            const isActive = tab === t.value
                            return (
                                <button
                                    key={t.value}
                                    onClick={() => setTab(t.value)}
                                    className={cn(
                                        "px-4 py-2 text-xs font-bold rounded border transition-all",
                                        isActive
                                            ? "bg-blue-500 text-white border-blue-500 dark:bg-white dark:text-black dark:border-white"
                                            : "bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <span>{t.label}</span>
                                        {t.discount && (
                                            <span className={cn(
                                                "px-2 py-0.5 text-[10px] font-bold rounded",
                                                isActive
                                                    ? "text-white border-0 text-black bg-yellow-200 dark:text-white dark:bg-red-400 dark:border-black"
                                                    : "text-black dark:bg-black/5 dark:text-orange-300 dark:bg-white/10"
                                            )}>
                                                {t.discount}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <TabsContent value={tab} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {plans
                            .filter((plan) => {
                                const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
                                return countryPricing !== undefined
                            })
                            .map((plan) => {
                                const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
                                const currencyPricing = countryPricing && (countryPricing as Record<string, any>)[currency]
                                const price = currencyPricing ? currencyPricing[tab] : "-"
                                const currencySymbol = currency === "INR" ? "₹" : "$"
                                const locationFeatures = plan.locationFeatures?.[location.code as keyof typeof plan.locationFeatures] || []
                                const locationPlanName = plan.locationNames?.[location.code as keyof typeof plan.locationNames] || plan.name

                                return (
                                    <Card
                                        key={`${plan.name}-${plan.caption}-${location.code}`}
                                        className={`relative p-6 shadow-md overflow-hidden border hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17] ${plan.className}`}
                                    >
                                        <img
                                            src={plan.icon}
                                            width={70}
                                            height={70}
                                            alt={`${locationPlanName} Icon`}
                                            className="absolute top-0 right-0 z-10"
                                        />
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 mt-2">
                                                <h3 className="text-lg font-bold text-black dark:text-white">{locationPlanName}</h3>
                                            </div>
                                            <p className="text-xs font-semibold text-black dark:text-white uppercase tracking-wide">{plan.caption}</p>
                                            <div className="flex items-end gap-1">
                                                <span className="text-3xl font-bold text-black dark:text-white">{currencySymbol}{price}</span>
                                                <span className="text-xs text-black dark:text-white font-semibold mb-1">
                                                    {tab === "monthly" ? "/mo" : tabLabels.find(l => l.value === tab)?.label}
                                                </span>
                                            </div>
                                            <a
                                                href={(() => {
                                                    const baseLink = plan.links?.[location.code as keyof typeof plan.links] ?? "#"
                                                    const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1"
                                                    return baseLink.includes("?") ? `${baseLink}&${selectedCurrency}` : `${baseLink}?${selectedCurrency}`
                                                })()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full border hover:text-white bg-transparent text-xs px-6 py-2 rounded font-semibold flex items-center justify-center ${plan.button}`}
                                            >
                                                VIEW PLAN
                                            </a>
                                            <ul className="mt-4 space-y-2 text-sm text-black dark:text-white">
                                                {locationFeatures.map((feature: Feature, i: number) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 mt-1 text-black dark:text-white" />
                                                        <span className="flex items-center gap-1">
                                                            {feature.label}
                                                            {typeof feature.info === "string" && feature.info.length > 0 && (
                                                                <InfoPopover content={feature.info} />
                                                            )}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Card>
                                )
                            })}
                    </div>
                </TabsContent>
            </Tabs>

            <FeatureList features={features} />
            <PremiumHostingCompareSection selectedLocation={location} />
        </div>
    )
}
