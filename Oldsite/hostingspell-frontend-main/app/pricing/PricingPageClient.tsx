"use client"

import { useState, useEffect } from "react"
import { Tabs } from "@/components/ui/tabs"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { hostingConfig } from "@/config/pricingConfig"
import { Globe, Server, AtSign, Plus } from "lucide-react"
import DomainSearchSection from "../components/DomainSearchSection"
import SharedHostingPlanGrid from "@/components/pricing/SharedHostingPlanGrid"
import PremiumHostingSection from "@/components/pricing/PremiumHostingSection"
import ResellerHostingSection from "@/components/pricing/ResellerHostingSection"
import ComboHostingPlanGrid from "@/components/pricing/ComboHostingPlanGrid"
import VpsHostingPlanGrid from "@/components/pricing/VpsHostingPlanGrid"
import DomainPricingTable from "../domain/DomainPricingTable";
import HostingPlanComparisonTable from "@/components/pricing/HostingPlanComparisonTable"
import { useCurrency } from "@/context/CurrencyContext"
import { AIChatCTA } from "@/components/shared/AIChatCTA";

import {
    PLANS_CLOUD_HOSTING,
    PLANS_COMBO_HOSTING,
    PLANS_VPS_HOSTING,
    PLANS_COMPARE_CLOUD_HOSTING,
    CLOUD_PROVIDER_LOCATIONS,
    COMBO_PROVIDER_LOCATIONS,
    VPS_PROVIDER_LOCATIONS,
    VPS_LINUX_CLOUD_PROVIDER_LOCATIONS,
    VPS_WINDOWS_CLOUD_PROVIDER_LOCATIONS,
    GLOBAL_BILLING_CYCLES,
    PLANS_COMPARE_CLOUD_HOSTING_VALUES,
    PLANS_COMPARE_COMBO_HOSTING,
    PLANS_COMPARE_COMBO_HOSTING_VALUES,
    PLANS_COMPARE_VPS_HOSTING,
    PLANS_COMPARE_VPS_HOSTING_VALUES,
} from "@/lib/constants";

import {
    PLANS_VPS_LINUX_CLOUD_HOSTING,
    PLANS_COMPARE_VPS_LINUX_CLOUD_HOSTING_VALUES,
    PLANS_VPS_WINDOWS_CLOUD_HOSTING
} from "@/lib/constants-vps";


const iconMap = {
    Globe: <Globe className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    AtSign: <AtSign className="w-4 h-4" />,
    Plus: <Plus className="w-4 h-4" />,
}

export default function PricingPageClient() {
    const hostingTabs = Object.entries(hostingConfig)
    const { currency } = useCurrency()

    const [activeTab, setActiveTab] = useState<keyof typeof hostingConfig>("webhosting")
    const activeConfig = hostingConfig[activeTab]

    const [subType, setSubType] = useState(activeConfig.subTypes?.[0]?.value ?? "")
    const selectedSubType = activeConfig.subTypes?.find((s) => s.value === subType)

    const [location, setLocation] = useState(selectedSubType?.locations?.[0]?.value ?? "")
    const [billingCycle, setBillingCycle] = useState(
        selectedSubType?.billing?.[0]?.value ?? ""
    )

    const promo =
        "Offer applies only to new domain, cloud hosting, Premium hosting, Reseller hosting and VPS hosting annual plan only. Not valid on combo hosting, or any monthly plans.";

    // 🔁 Update location and billingCycle when subType changes
    useEffect(() => {
        if (selectedSubType) {
            setLocation(selectedSubType.locations?.[0]?.value ?? "")
            setBillingCycle(selectedSubType.billing?.[0]?.value ?? "")
        }
    }, [subType])

    // 🔁 Reset all when tab changes
    useEffect(() => {
        const defaultSub = hostingConfig[activeTab].subTypes?.[0]
        setSubType(defaultSub?.value ?? "")
        setLocation(defaultSub?.locations?.[0]?.value ?? "")
        setBillingCycle(defaultSub?.billing?.[0]?.value ?? "")
    }, [activeTab])

    const handleSubTypeChange = (value: string) => {
        setSubType(value)
        const newSub = activeConfig.subTypes?.find((s) => s.value === value)
        if (newSub) {
            setLocation(newSub.locations?.[0]?.value ?? "")
            setBillingCycle(newSub.billing?.[0]?.value ?? "")
        }
    }

    return (
        <div className="py-0 bg-background dark:bg-background">
            <section className="py-20 pt-4 bg-background dark:bg-background">
                <div className="container mx-auto px-4">
                    <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as keyof typeof hostingConfig)}>
                        <div className="mb-8 grid grid-cols-1 md:flex justify-center gap-4">
                            {hostingTabs.map(([key, { label, icon }]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key as keyof typeof hostingConfig)}
                                    className={`px-8 py-3 text-sm font-bold rounded border min-w-[180px] ${activeTab === key
                                        ? "bg-blue-500 text-white border-blue-500 dark:border-white dark:bg-white dark:text-black"
                                        : "bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground"
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        {iconMap[icon as keyof typeof iconMap]}
                                        <span>{label}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* -- Conditional Form Logic -- */}
                        {activeConfig.hasCustomComponent ? (
                            activeTab === "domains" ? (
                                <>
                                    <DomainSearchSection />
                                    <DomainPricingTable />
                                </>

                            ) : (
                                <div className="text-center text-muted-foreground">Addons UI coming soon</div>
                            )
                        ) : (
                            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                                {/* Sub Type Dropdown */}
                                {activeConfig.subTypes && (
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-sm font-medium text-muted-foreground">Choose Your Plan Type</label>
                                        <Select value={subType} onValueChange={handleSubTypeChange}>
                                            <SelectTrigger className="min-w-[280px] w-full">
                                                <SelectValue placeholder="Select Plan Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {activeConfig.subTypes.map((t) => (
                                                    <SelectItem key={t.value} value={t.value}>
                                                        {t.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}

                                {/* Location Dropdown */}
                                {selectedSubType?.locations && (
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-sm font-medium text-muted-foreground">Select Server Location</label>
                                        <Select value={location} onValueChange={setLocation}>
                                            <SelectTrigger className="min-w-[280px] w-full">
                                                <SelectValue placeholder="Select Location" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {selectedSubType.locations.map((loc) => (
                                                    <SelectItem key={loc.value} value={loc.value}>
                                                        {loc.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}

                                {/* Billing Dropdown */}
                                {selectedSubType?.billing && (
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-sm font-medium text-muted-foreground">Billing Cycle (Monthly / Yearly)</label>
                                        <Select value={billingCycle} onValueChange={setBillingCycle}>
                                            <SelectTrigger className="min-w-[280px] w-full">
                                                <SelectValue placeholder="Select Billing" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {selectedSubType.billing.map((b) => (
                                                    <SelectItem key={b.value} value={b.value}>
                                                        {b.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                            </div>
                        )}
                    </Tabs>

                    <div className="mt-8">
                        <>
                            {subType === "cloud" && (
                                <div>
                                    <SharedHostingPlanGrid
                                        plans={PLANS_CLOUD_HOSTING}
                                        locations={CLOUD_PROVIDER_LOCATIONS}
                                        selectedLocation={location}
                                        selectedCurrency={currency}
                                        selectedCycle={billingCycle}
                                        cycleOptions={GLOBAL_BILLING_CYCLES.cloudhosting}
                                    />

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

                            )}

                            {subType === "premium" && (
                                <PremiumHostingSection
                                    selectedLocation={location}
                                    selectedCurrency={currency}
                                    selectedCycle={billingCycle}
                                    cycleOptions={GLOBAL_BILLING_CYCLES.cloudhosting}
                                />
                            )}

                            {subType === "combo" && (

                                <div>
                                    <ComboHostingPlanGrid
                                        plans={PLANS_COMBO_HOSTING}
                                        locations={COMBO_PROVIDER_LOCATIONS}
                                        selectedLocation={location}
                                        selectedCurrency={currency}
                                        selectedCycle={billingCycle}
                                        cycleOptions={GLOBAL_BILLING_CYCLES.combohosting}
                                    />

                                    <div className="text-center mb-8 my-16">
                                        <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                                            <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Easily evaluate features, pricing, and benefits across all combo hosting plans
                                        </p>
                                    </div>

                                    <HostingPlanComparisonTable
                                        featureGroups={PLANS_COMPARE_COMBO_HOSTING}
                                        planKeys={["EUROPA", "IO"]}
                                        values={PLANS_COMPARE_COMBO_HOSTING_VALUES}
                                        planMeta={{
                                            EUROPA: {
                                                name: "EUROPA",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
                                                priceInr: "₹2099/mo",
                                                priceUsd: "$24.49/mo",
                                            },
                                            IO: {
                                                name: "IO",
                                                badge: "Best Value",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
                                                priceInr: "₹2549/mo",
                                                priceUsd: "$29.99/mo",
                                            }
                                        }}
                                    />
                                </div>
                            )}

                            {/* KVM VPS Hosting */}
                            {subType === "vpscloud" && (

                                <div>
                                    <VpsHostingPlanGrid
                                        plans={PLANS_VPS_HOSTING}
                                        locations={VPS_PROVIDER_LOCATIONS}
                                        selectedLocation={location}
                                        selectedCurrency={currency}
                                        selectedCycle={billingCycle}
                                        cycleOptions={GLOBAL_BILLING_CYCLES.vpshosting}
                                    />

                                    <div className="text-center mb-8 my-16">
                                        <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                                            <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Easily evaluate features, pricing, and benefits across all VPS hosting plans
                                        </p>
                                    </div>

                                    <HostingPlanComparisonTable
                                        featureGroups={PLANS_COMPARE_VPS_HOSTING}
                                        planKeys={["CONSOLUSENTER", "CONSOLUSMODEL", "CONSOLUSHOST", "CONSOLUSBEAST", "CONSOLUSGRAND", "CONSOLUSLEGEND"]}
                                        values={PLANS_COMPARE_VPS_HOSTING_VALUES}
                                        planMeta={{
                                            CONSOLUSENTER: {
                                                name: "CONSOLUS ENTER",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
                                                priceInr: "₹899/mo",
                                                priceUsd: "$10/mo",
                                            },
                                            CONSOLUSMODEL: {
                                                name: "CONSOLUS MODEL",
                                                badge: "Best Value",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
                                                priceInr: "₹1799/mo",
                                                priceUsd: "$20/mo",
                                            },
                                            CONSOLUSHOST: {
                                                name: "CONSOLUS HOST",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
                                                priceInr: "₹3499/mo",
                                                priceUsd: "$40/mo",
                                            },
                                            CONSOLUSBEAST: {
                                                name: "CONSOLUS BEAST",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
                                                priceInr: "₹6999/mo",
                                                priceUsd: "$80/mo",
                                            },
                                            CONSOLUSGRAND: {
                                                name: "CONSOLUS GRAND",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-grand",
                                                priceInr: "₹13999/mo",
                                                priceUsd: "$160/mo",
                                            },
                                            CONSOLUSLEGEND: {
                                                name: "CONSOLUS LEGEND",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-legend",
                                                priceInr: "₹27200/mo",
                                                priceUsd: "$320/mo",
                                            }
                                        }}
                                    />
                                </div>
                            )}

                            {/* Linux Cloud VPS Hosting */}
                            {subType === "vpslinuxcloud" && (

                                <div>
                                    <VpsHostingPlanGrid
                                        plans={PLANS_VPS_LINUX_CLOUD_HOSTING}
                                        locations={VPS_LINUX_CLOUD_PROVIDER_LOCATIONS}
                                        selectedLocation={location}
                                        selectedCurrency={currency}
                                        selectedCycle={billingCycle}
                                        cycleOptions={GLOBAL_BILLING_CYCLES.vpshosting}
                                    />

                                    <div className="text-center mb-8 my-16">
                                        <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                                            <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Easily evaluate features, pricing, and benefits across all VPS hosting plans
                                        </p>
                                    </div>

                                    <HostingPlanComparisonTable
                                        featureGroups={PLANS_COMPARE_VPS_HOSTING}
                                        planKeys={["ESSENTIAL", "PRO", "ADVANCE", "ULTIMATE",]}
                                        values={PLANS_COMPARE_VPS_LINUX_CLOUD_HOSTING_VALUES}
                                        planMeta={{
                                            ESSENTIAL: {
                                                name: "ESSENTIAL",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
                                                priceInr: "₹899/mo",
                                                priceUsd: "$10/mo",
                                            },
                                            PRO: {
                                                name: "PRO",
                                                badge: "Best Value",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
                                                priceInr: "₹1799/mo",
                                                priceUsd: "$20/mo",
                                            },
                                            ADVANCE: {
                                                name: "ADVANCE",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
                                                priceInr: "₹3499/mo",
                                                priceUsd: "$40/mo",
                                            },
                                            ULTIMATE: {
                                                name: "ULTIMATE",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
                                                priceInr: "₹6999/mo",
                                                priceUsd: "$80/mo",
                                            },
                                        }}
                                    />
                                </div>
                            )}

                            {/* Windows Cloud VPS Hosting */}
                            {subType === "vpswindowscloud" && (

                                <div>
                                    <VpsHostingPlanGrid
                                        plans={PLANS_VPS_WINDOWS_CLOUD_HOSTING}
                                        locations={VPS_WINDOWS_CLOUD_PROVIDER_LOCATIONS}
                                        selectedLocation={location}
                                        selectedCurrency={currency}
                                        selectedCycle={billingCycle}
                                        cycleOptions={GLOBAL_BILLING_CYCLES.vpshosting}
                                    />

                                    <div className="text-center mb-8 my-16">
                                        <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                                            <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Easily evaluate features, pricing, and benefits across all VPS hosting plans
                                        </p>
                                    </div>

                                    <HostingPlanComparisonTable
                                        featureGroups={PLANS_COMPARE_VPS_HOSTING}
                                        planKeys={["ESSENTIAL", "PRO", "ADVANCE", "ULTIMATE",]}
                                        values={PLANS_COMPARE_VPS_LINUX_CLOUD_HOSTING_VALUES}
                                        planMeta={{
                                            ESSENTIAL: {
                                                name: "ESSENTIAL",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
                                                priceInr: "₹899/mo",
                                                priceUsd: "$10/mo",
                                            },
                                            PRO: {
                                                name: "PRO",
                                                badge: "Best Value",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
                                                priceInr: "₹1799/mo",
                                                priceUsd: "$20/mo",
                                            },
                                            ADVANCE: {
                                                name: "ADVANCE",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
                                                priceInr: "₹3499/mo",
                                                priceUsd: "$40/mo",
                                            },
                                            ULTIMATE: {
                                                name: "ULTIMATE",
                                                ctaLabel: "Get Started",
                                                ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
                                                priceInr: "₹6999/mo",
                                                priceUsd: "$80/mo",
                                            },
                                        }}
                                    />
                                </div>
                            )}

                            {subType === "reseller" && (
                                <ResellerHostingSection
                                    selectedLocation={location}
                                    selectedCurrency={currency}
                                    selectedCycle={billingCycle}
                                    cycleOptions={GLOBAL_BILLING_CYCLES.cloudhosting}
                                />
                                // <div>
                                //     <HostingPlanGrid
                                //         plans={PLANS_RESELLER_HOSTING}
                                //         locations={RESELLER_PROVIDER_LOCATIONS}
                                //         selectedLocation={location}
                                //         selectedCurrency={currency}
                                //         selectedCycle={billingCycle}
                                //         cycleOptions={GLOBAL_BILLING_CYCLES.resellerhosting}
                                //     />

                                //     <div className="text-center mb-8 my-16">
                                //         <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                                //             <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                                //         </div>
                                //         <p className="text-gray-600 dark:text-gray-400">
                                //             Easily evaluate features, pricing, and benefits across all Standard Reseller hosting plans
                                //         </p>
                                //     </div>

                                //     <HostingPlanComparisonTable
                                //         featureGroups={PLANS_COMPARE_RESELLER_HOSTING}
                                //         planKeys={["HS_INITIATIVE", "HS_EARLDOM", "HS_DUKEDOM", "HS_KINGDOM"]}
                                //         values={PLANS_COMPARE_RESELLER_HOSTING_VALUES}
                                //         planMeta={{
                                //             HS_INITIATIVE: {
                                //                 name: "HS INITIATIVE",
                                //                 ctaLabel: "Get Started",
                                //                 ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
                                //                 priceInr: "₹1199/mo",
                                //                 priceUsd: "$12.99/mo",
                                //             },
                                //             HS_EARLDOM: {
                                //                 name: "HS EARLDOM",
                                //                 badge: "Best Value",
                                //                 ctaLabel: "Get Started",
                                //                 ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
                                //                 priceInr: "₹2299/mo",
                                //                 priceUsd: "$25.99/mo",
                                //             },
                                //             HS_DUKEDOM: {
                                //                 name: "HS DUKEDOM",
                                //                 ctaLabel: "Get Started",
                                //                 ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
                                //                 priceInr: "₹4599/mo",
                                //                 priceUsd: "$51.99/mo",
                                //             },
                                //             HS_KINGDOM: {
                                //                 name: "HS KINGDOM",
                                //                 ctaLabel: "Get Started",
                                //                 ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
                                //                 priceInr: "₹6899/mo",
                                //                 priceUsd: "$77.99/mo",
                                //             }
                                //         }}
                                //     />
                                // </div>
                            )}

                        </>
                    </div>
                </div>

                <div className="container mx-auto"><AIChatCTA /></div>

            </section>
        </div>
    )
}