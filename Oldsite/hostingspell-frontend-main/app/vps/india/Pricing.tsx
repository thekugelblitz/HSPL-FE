"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { FeatureList as VpsFeatureList } from "@/components/shared/FeatureList";
import HostingPlanComparisonTable from "@/components/pricing/HostingPlanComparisonTable";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/context/CurrencyContext";
import CountryFlag from "react-country-flag";
import {
    PLANS_VPS_LINUX_CLOUD_HOSTING,
    PLANS_COMPARE_VPS_INDIA_HOSTING,
    PLANS_COMPARE_VPS_LINUX_CLOUD_HOSTING_VALUES,
} from "@/lib/constants-vps";
import { INDIA_VPS_PRICING_FEATURES } from "@/lib/constants-vps-india";

type BillingCycle = "monthly" | "quarterly" | "semiannually" | "annual";

const tabLabels: { value: BillingCycle; label: string; discount?: string }[] = [
    { value: "monthly", label: "MONTHLY" },
    { value: "quarterly", label: "QUARTERLY", discount: "17% OFF" },
    { value: "semiannually", label: "SEMI-ANNUAL", discount: "17% OFF" },
    { value: "annual", label: "ANNUAL", discount: "17% OFF" },
];

const INDIA_LOCATION_CODE = "IND";

export function Pricing() {
    const [tab, setTab] = useState<BillingCycle>("monthly");
    const { currency } = useCurrency();
    const currencySymbol = currency === "INR" ? "₹" : "$";

    return (
        <section className="bg-background dark:bg-background py-10" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        <CountryFlag countryCode="IN" svg style={{ width: "14px", height: "10px" }} aria-hidden="true" />
                        India Data Center · NVMe VPS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Affordable India VPS Plans in INR
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Transparent pricing with no setup fees. Choose monthly flexibility or save up to 17% with longer billing cycles.
                        All plans include KVM virtualization, dedicated IP, and full root access.
                    </p>
                </div>

                <Tabs value={tab} onValueChange={(value) => setTab(value as BillingCycle)} className="w-full">
                    <div className="mb-8">
                        <div className="hidden sm:flex justify-center gap-2">
                            {tabLabels.map((t) => {
                                const isActive = tab === t.value;
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
                                                <span
                                                    className={cn(
                                                        "px-2 py-0.5 text-[10px] font-bold rounded",
                                                        isActive
                                                            ? "text-black bg-yellow-200 dark:text-white dark:bg-red-400"
                                                            : "text-black dark:text-orange-300 dark:bg-white/10"
                                                    )}
                                                >
                                                    {t.discount}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 max-w-[200px] mx-auto gap-2 sm:hidden mt-4">
                            {tabLabels.map((t) => {
                                const isActive = tab === t.value;
                                return (
                                    <button
                                        key={t.value}
                                        onClick={() => setTab(t.value)}
                                        className={cn(
                                            "px-4 py-2 text-xs font-bold rounded border transition-all",
                                            isActive
                                                ? "bg-blue-500 text-white border-blue-500 dark:bg-white dark:text-black"
                                                : "bg-transparent text-black dark:text-white border border-black dark:border-gray-300"
                                        )}
                                    >
                                        {t.label}
                                        {t.discount && ` · ${t.discount}`}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <TabsContent value={tab} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                            {PLANS_VPS_LINUX_CLOUD_HOSTING.map((plan) => {
                                const countryPricing = plan.pricing[INDIA_LOCATION_CODE];
                                const currencyPricing = countryPricing?.[currency];
                                const price = currencyPricing?.[tab] ?? "-";

                                return (
                                    <Card
                                        key={plan.name}
                                        className={`relative p-6 shadow-md overflow-hidden border hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17] ${plan.className ?? "bg-white border-gray-200"}`}
                                    >
                                        <img
                                            src={plan.icon}
                                            width={70}
                                            height={70}
                                            alt={`${plan.name} plan icon`}
                                            className="absolute top-0 right-0 z-10"
                                        />

                                        <div className="space-y-4">
                                            <h3
                                                className={`text-xl font-bold leading-tight ${plan.color ?? "text-black dark:text-white"}`}
                                            >
                                                {plan.name}
                                            </h3>

                                            <p className="text-xs font-semibold text-black dark:text-white uppercase tracking-wide">
                                                {plan.caption}
                                            </p>

                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="text-3xl font-bold text-black dark:text-white">
                                                    {plan.ram}
                                                </span>
                                            </div>

                                            <div className="flex items-end gap-1">
                                                <span className="text-sm font-bold text-black dark:text-white">
                                                    {currencySymbol}
                                                    {price}
                                                </span>
                                                <span className="text-xs text-black dark:text-white font-semibold mb-1">
                                                    {tab === "monthly"
                                                        ? "/mo"
                                                        : tab === "annual"
                                                          ? "/yr"
                                                          : tabLabels.find((l) => l.value === tab)?.label}
                                                </span>
                                            </div>

                                            <Button
                                                asChild
                                                className={`w-full border hover:text-white bg-transparent text-xs px-6 py-2 rounded font-semibold ${plan.button ?? "border-black text-black dark:text-white hover:bg-black"}`}
                                            >
                                                <a
                                                    href={(() => {
                                                        const baseLink =
                                                            plan.links?.[INDIA_LOCATION_CODE] ?? "#";
                                                        const currencyParam =
                                                            currency === "INR" ? "currency=2" : "currency=1";
                                                        return baseLink.includes("?")
                                                            ? `${baseLink}&${currencyParam}`
                                                            : `${baseLink}?${currencyParam}`;
                                                    })()}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    GET STARTED
                                                </a>
                                            </Button>

                                            <VpsFeatureList features={plan.features} />
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {INDIA_VPS_PRICING_FEATURES.map((feature) => (
                        <span
                            key={feature}
                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                <div className="text-center mb-8 my-16">
                    <h2 className="text-3xl font-bold mb-2">Compare India VPS Plans</h2>
                    <p className="text-muted-foreground">
                        Side-by-side comparison of CPU, RAM, NVMe storage, and management features
                    </p>
                </div>

                <HostingPlanComparisonTable
                    featureGroups={PLANS_COMPARE_VPS_INDIA_HOSTING}
                    planKeys={["ESSENTIAL", "PRO", "ADVANCE", "ULTIMATE"]}
                    values={PLANS_COMPARE_VPS_LINUX_CLOUD_HOSTING_VALUES}
                    planMeta={{
                        ESSENTIAL: {
                            name: "ESSENTIAL",
                            ctaLabel: "Get Started",
                            ctaHref:
                                "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
                            priceInr: "₹899/mo",
                            priceUsd: "$10/mo",
                        },
                        PRO: {
                            name: "PRO",
                            badge: "Best Value",
                            ctaLabel: "Get Started",
                            ctaHref:
                                "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
                            priceInr: "₹1799/mo",
                            priceUsd: "$20/mo",
                        },
                        ADVANCE: {
                            name: "ADVANCE",
                            ctaLabel: "Get Started",
                            ctaHref:
                                "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
                            priceInr: "₹3499/mo",
                            priceUsd: "$40/mo",
                        },
                        ULTIMATE: {
                            name: "ULTIMATE",
                            ctaLabel: "Get Started",
                            ctaHref:
                                "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
                            priceInr: "₹6999/mo",
                            priceUsd: "$80/mo",
                        },
                    }}
                />
            </div>
        </section>
    );
}
