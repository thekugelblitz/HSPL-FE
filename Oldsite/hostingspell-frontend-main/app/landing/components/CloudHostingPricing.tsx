"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import InfoPopover from "@/components/shared/InfoPopover"
import { Check } from "lucide-react";
import { FeatureList } from "@/app/components/FeatureList"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import HostingPlanComparisonTable from "@/components/pricing/HostingPlanComparisonTable"
import {
	PLANS_CLOUD_HOSTING,
	PLANS_COMPARE_CLOUD_HOSTING,
	PLANS_COMPARE_CLOUD_HOSTING_VALUES,
} from "@/lib/constants";
import { ServerLocationDropdown, LocationInfo, LOCATIONS } from "@/app/cloud-hosting/ServerLocationDropdown"
import { useCurrency } from "@/context/CurrencyContext"

type Feature = {
    label: string;
    info?: string; // optional
};

type BillingCycle = "monthly" | "annual" | "biannual" | "triannual"

const tabLabels: { value: BillingCycle; label: string; discount?: string }[] = [
    { value: "monthly", label: "MONTHLY" },
    { value: "annual", label: "ANNUAL", discount: "16% OFF" },
    { value: "biannual", label: "BI-ANNUAL", discount: "26% OFF" },
    { value: "triannual", label: "TRI-ANNUAL", discount: "31% OFF" },
]

const features = [
    "Friendly 24/7/365 Support",
    "Daily Auto Backup",
    "Smart-hosts for Mail Delivery",
    "Redis, Memcached and OpCach",
    "Free Migration",
    "LiteSpeed WordPress Cache",
    "Imunify360 Anti-virus",
    "Dedicated Firewalls + DDoS",
    "HTTP/2 Enabled Servers",
    "Unlimited Application Installation",
    "LiteSpeed Web Server",
    "Latest AMD Epyc™ Processors",
    "Automated Daily Backups",
    "Regular Security Patching",
    "100% Uptime Mark",
    "cPanel® Control Panel Powered",
]

const plans = PLANS_CLOUD_HOSTING

export function CloudHostingPricing() {
    const [tab, setTab] = useState<BillingCycle>("monthly")
    const [location, setLocation] = useState<LocationInfo>(LOCATIONS[0])
    const { currency } = useCurrency()

    return (
        <section className="py-20 bg-background dark:bg-background" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                        <h2 className="text-3xl md:text-4xl font-bold">Cloud Hosting Pricing</h2>
                        <div className="flex items-center">
                            <label htmlFor="server-location-dropdown" className="sr-only">
                                Server Location
                            </label>
                            <ServerLocationDropdown
                                selected={location}
                                setSelected={setLocation}
                            />
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Choose the perfect plan for your needs and scale as you grow.
                    </p>
                </div>

                <Tabs value={tab} onValueChange={(value) => setTab(value as BillingCycle)} className="w-full">
                    <div className="mb-12 grid grid-cols-1 md:flex justify-center gap-2 max-w-[200px] sm:max-w-none mx-auto xs:w-full xs:mx-0">
                        {tabLabels.map((t) => {
                            const isActive = tab === t.value
                            return (
                                <button
                                    key={t.value}
                                    onClick={() => setTab(t.value)}
                                    className={cn(
                                        "px-4 py-2 text-xs font-bold rounded border transition-all",
                                        isActive
                                            ? "bg-blue-500 text-white border-blue-500 dark:border-white dark:bg-white dark:text-black shadow-md"
                                            : "bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        <span>{t.label}</span>
                                        {t.discount && (
                                            <span
                                                className={cn(
                                                    'px-2 py-0.5 text-[10px] font-bold rounded',
                                                    isActive
                                                        ? 'text-white border-0 text-black bg-yellow-200 dark:text-white dark:bg-red-400 dark:border-black'
                                                        : 'text-black dark:bg-black/5 dark:text-orange-300 dark:bg-white/10'
                                                )}
                                            >
                                                {t.discount}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    <TabsContent value={tab} className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                            {plans.map((plan) => {
                                const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
                                const currencyPricing = countryPricing && (countryPricing as Record<string, any>)[currency]
                                const price = currencyPricing ? currencyPricing[tab] : "-"
                                const currencySymbol = currency === "INR" ? "₹" : "$"
                                const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";
                                const planLink = (() => {
                                    const baseLink = plan.links?.[location.code as keyof typeof plan.links] ?? "#";
                                    return baseLink.includes("?")
                                        ? `${baseLink}&${selectedCurrency}`
                                        : `${baseLink}?${selectedCurrency}`;
                                })();
                                
                                const isHighlighted = plan.name === "JUPITER";
                                const discountBadge = tabLabels.find(l => l.value === tab)?.discount;

                                // Price calculations
                                const months = tab === "annual" ? 12 : tab === "biannual" ? 24 : tab === "triannual" ? 36 : 1;
                                const monthlyEquivalentNum = price !== "-" ? (Number(price) / months) : 0;
                                const monthlyEquivalentStr = price !== "-" ? (monthlyEquivalentNum % 1 === 0 ? monthlyEquivalentNum.toString() : monthlyEquivalentNum.toFixed(2)) : "-";
                                const originalMonthlyPrice = currencyPricing ? currencyPricing["monthly"] : "-";
                                const billedText = tab === "annual" ? "Yearly" : tab === "biannual" ? "Bi-annually" : "Tri-annually";

                                return (
                                    <div 
                                        key={plan.name} 
                                        className={cn(
                                            "relative flex flex-col h-full rounded-2xl transition-all duration-300", 
                                            isHighlighted && "shadow-2xl md:-mt-4 md:mb-4"
                                        )}
                                        style={isHighlighted ? { backgroundColor: '#FF7E22', boxShadow: '0 0 0 2px #FF7E22' } : {}}
                                    >
                                        {isHighlighted && (
                                            <div className="text-white text-center py-2 text-xs font-bold uppercase tracking-wider rounded-t-2xl w-full">
                                                Most Popular
                                            </div>
                                        )}
                                        <div
                                            className={cn(
                                                "relative flex-1 p-6 sm:p-8 overflow-hidden z-10 flex flex-col dark:bg-[#060A17]",
                                                isHighlighted 
                                                    ? cn("rounded-t-none rounded-b-2xl bg-white", plan.className) 
                                                    : cn("rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white", plan.className)
                                            )}
                                        >
                                            <img
                                                src={plan.icon}
                                                width={70}
                                                height={70}
                                                alt={`${plan.name} Icon`}
                                                className="absolute top-0 right-0 z-0 opacity-50 pointer-events-none"
                                            />
                                            {/* Top Right Discount Badge */}
                                            {discountBadge && (
                                                <div className="absolute top-6 right-6 bg-black/5 dark:bg-white/10 text-[10px] font-bold px-2 py-1 rounded-full z-10">
                                                    {discountBadge}
                                                </div>
                                            )}

                                            <div className="space-y-4 flex-1 relative z-20">
                                                <div>
                                                    <h3 className="text-xl font-bold text-black dark:text-white">
                                                        {plan.name}
                                                    </h3>
                                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">
                                                        {plan.caption}
                                                    </p>
                                                </div>

                                                <div className="pt-2">
                                                    {tab !== "monthly" && originalMonthlyPrice !== "-" && (
                                                        <div className="text-gray-500 line-through text-sm font-semibold mb-1">
                                                            {currencySymbol}{originalMonthlyPrice}
                                                        </div>
                                                    )}
                                                    <div className="flex items-end gap-1">
                                                        <span className="text-4xl font-extrabold text-black dark:text-white">
                                                            {currencySymbol}{monthlyEquivalentStr}
                                                        </span>
                                                        <span className="text-sm text-gray-500 font-semibold mb-1">
                                                            /mo
                                                        </span>
                                                    </div>
                                                    {tab !== "monthly" && (
                                                        <div className="text-xs font-bold text-gray-600 dark:text-gray-400 mt-2">
                                                            {currencySymbol}{price} Billed {billedText}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="pt-2">
                                                    <a
                                                        href={planLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={cn(
                                                            "w-full text-center text-sm font-bold py-3 rounded-xl transition-all block border-2",
                                                            isHighlighted
                                                                ? "text-white hover:opacity-90"
                                                                : cn("bg-transparent", plan.button)
                                                        )}
                                                        style={isHighlighted ? { backgroundColor: '#FF7E22', borderColor: '#FF7E22' } : {}}
                                                    >
                                                        Choose plan
                                                    </a>
                                                    {plan.description && (
                                                        <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center mt-2">
                                                            {plan.description}
                                                        </p>
                                                    )}
                                                </div>

                                                <hr className="border-gray-200 dark:border-gray-800 my-4" />

                                                <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                                                    {plan.features.map((feature: Feature, i: number) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <Check className="w-4 h-4 mt-1 text-black dark:text-white shrink-0" />
                                                            <span className="flex items-center gap-1 leading-snug">
                                                                {typeof feature.info === "string" && feature.info.length > 0 ? (
                                                                    <>
                                                                        <span className="border-b border-dashed border-gray-400 cursor-help">
                                                                            {feature.label}
                                                                        </span>
                                                                        <InfoPopover content={feature.info} />
                                                                    </>
                                                                ) : (
                                                                    <span>{feature.label}</span>
                                                                )}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabsContent>
                </Tabs>

                <FeatureList features={features} />

                <div className="text-center mt-8">
                    <Button size="lg" asChild>
                        <a href="#compare-plans-cloud" className="text-white">View All Features</a>
                    </Button>
                </div>

                <div id="compare-plans-cloud">
                    <div className="text-center mb-8 my-16">
                        <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                            <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Easily evaluate features, pricing, and benefits across all cloud hosting plans
                        </p>
                    </div>

                    <HostingPlanComparisonTable
                        featureGroups={PLANS_COMPARE_CLOUD_HOSTING}
                        planKeys={["VENUS", "MARS", "SATURN", "JUPITER"]}
                        values={PLANS_COMPARE_CLOUD_HOSTING_VALUES}
                        planMeta={{
                            VENUS: {
                                name: "VENUS",
                                ctaLabel: "Get Started",
                                ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
                                priceInr: "₹99/mo",
                                priceUsd: "$1.29/mo",
                            },
                            MARS: {
                                name: "MARS",
                                badge: "Best Value",
                                ctaLabel: "Get Started",
                                ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/mars",
                                priceInr: "₹149/mo",
                                priceUsd: "$1.69/mo",
                            },
                            SATURN: {
                                name: "SATURN",
                                ctaLabel: "Get Started",
                                ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns",
                                priceInr: "₹169/mo",
                                priceUsd: "$1.99/mo",
                            },
                            JUPITER: {
                                name: "JUPITER",
                                ctaLabel: "Get Started",
                                ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter",
                                priceInr: "₹249/mo",
                                priceUsd: "$2.99/mo",
                            },
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
