import React from 'react'
import PremiumHostingPlanGrid from './PremiumHostingPlanGrid'
import HostingPlanComparisonTable from './HostingPlanComparisonTable'

import {
    PLANS_RESELLER_HOSTING,
    PLANS_COMPARE_RESELLER_HOSTING,
    PLANS_COMPARE_RESELLER_HOSTING_VALUES,
    PLANS_COMPARE_RESELLER_CLOUD_HOSTING_VALUES
} from "@/lib/constants-reseller";
import ResellerHostingPlanGrid from './ResellerHostingPlanGrid';

// Updated premium hosting locations to match our new structure
const RESELLER_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
    { value: "netherlands", label: "Netherlands", code: "NET" },
    { value: "usa", label: "United States", code: "USA" },
    { value: "uk", label: "United Kingdom", code: "UK" },
    { value: "singapore", label: "Singapore", code: "SGP" },
    { value: "australia", label: "Australia", code: "AUS" },
    { value: "canada", label: "Canada", code: "CAN" },
    { value: "mexico", label: "Mexico", code: "MEX" },
]

interface ResellerHostingSectionProps {
    selectedLocation: string
    selectedCurrency: "INR" | "USD"
    selectedCycle: string
    cycleOptions: Array<{ value: string; label: string }>
}

const ResellerHostingSection: React.FC<ResellerHostingSectionProps> = ({
    selectedLocation,
    selectedCurrency,
    selectedCycle,
    cycleOptions,
}) => {
    const countryCode = RESELLER_PROVIDER_LOCATIONS.find(loc => loc.value === selectedLocation)?.code

    // Map Germany to Netherlands data in constants-premium.ts until we update the data structure
    const dataCountryCode = countryCode === "DE" ? "NET" : countryCode

    // Generate dynamic plan keys and meta based on location and available plans
    let planKeys: string[] = []
    let planMeta: Record<string, any> = {}

    planKeys = ["HS_INITIATIVE", "HS_EARLDOM", "HS_DUKEDOM", "HS_KINGDOM"]
    planMeta = {
        HS_INITIATIVE: {
            name: "HS INITIATIVE",
            ctaLabel: "Get Started",
            ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
            priceInr: "₹1199/mo",
            priceUsd: "$12.99/mo",
        },
        HS_EARLDOM: {
            name: "HS EARLDOM",
            badge: "Best Value",
            ctaLabel: "Get Started",
            ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
            priceInr: "₹2299/mo",
            priceUsd: "$25.99/mo",
        },
        HS_DUKEDOM: {
            name: "HS DUKEDOM",
            ctaLabel: "Get Started",
            ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
            priceInr: "₹4599/mo",
            priceUsd: "$51.99/mo",
        },
        HS_KINGDOM: {
            name: "HS KINGDOM",
            ctaLabel: "Get Started",
            ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
            priceInr: "₹6899/mo",
            priceUsd: "$77.99/mo",
        },
    }

    // if (countryCode === "IND" || countryCode === "NET") {
    //     // India Linode: Show PLUS, PRO, ULTIMATE, UNLIMITED_POWER (4 plans)
    //     planKeys = ["HS_INITIATIVE", "HS_EARLDOM", "HS_DUKEDOM", "HS_KINGDOM"]
    //     planMeta = {
    //         HS_INITIATIVE: {
    //             name: "HS INITIATIVE",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
    //             priceInr: "₹1199/mo",
    //             priceUsd: "$12.99/mo",
    //         },
    //         HS_EARLDOM: {
    //             name: "HS EARLDOM",
    //             badge: "Best Value",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
    //             priceInr: "₹2299/mo",
    //             priceUsd: "$25.99/mo",
    //         },
    //         HS_DUKEDOM: {
    //             name: "HS DUKEDOM",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    //             priceInr: "₹4599/mo",
    //             priceUsd: "$51.99/mo",
    //         },
    //         HS_KINGDOM: {
    //             name: "HS KINGDOM",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
    //             priceInr: "₹6899/mo",
    //             priceUsd: "$77.99/mo",
    //         },
    //     }
    // } else {
    //     // DigitalOcean locations: Show PREMIUM1, PREMIUM2, PREMIUM3, UNLIMITED_POWER (4 plans)
    //     planKeys = ["HS_INITIATIVE", "HS_EARLDOM", "HS_DUKEDOM", "HS_KINGDOM"]

    //     // Generate location-specific URLs
    //     const locationUrls: Record<string, string> = {
    //         SGP: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg",
    //         USA: "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa",
    //         UK: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk",
    //         DE: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-de",
    //         AUS: "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus"
    //     }

    //     planMeta = {
    //         HS_INITIATIVE: {
    //             name: "HS INITIATIVE CLOUD",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-startup",
    //             priceInr: "₹1599/mo",
    //             priceUsd: "$17.99/mo",
    //         },
    //         HS_EARLDOM: {
    //             name: "HS EARLDOM CLOUD",
    //             badge: "Best Value",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-pro",
    //             priceInr: "₹2799/mo",
    //             priceUsd: "$31.99/mo",
    //         },
    //         HS_DUKEDOM: {
    //             name: "HS DUKEDOM CLOUD",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-business",
    //             priceInr: "₹4999/mo",
    //             priceUsd: "$55.99/mo",
    //         },
    //         HS_KINGDOM: {
    //             name: "HS KINGDOM CLOUD",
    //             ctaLabel: "Get Started",
    //             ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-enterprise",
    //             priceInr: "₹8999/mo",
    //             priceUsd: "$99.99/mo",
    //         },
    //     }
    // }

    return (
        <div>
            <ResellerHostingPlanGrid
                plans={PLANS_RESELLER_HOSTING}
                locations={RESELLER_PROVIDER_LOCATIONS}
                selectedLocation={selectedLocation}
                selectedCurrency={selectedCurrency}
                selectedCycle={selectedCycle}
                cycleOptions={cycleOptions}
            />

            <div className="text-center mb-8 my-16">
                <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                    <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    Easily evaluate features, pricing, and benefits across all shared hosting plans
                </p>
            </div>

            <HostingPlanComparisonTable
                featureGroups={PLANS_COMPARE_RESELLER_HOSTING}
                planKeys={planKeys}
                values={PLANS_COMPARE_RESELLER_HOSTING_VALUES}
                planMeta={planMeta}
            />
        </div>
    )
}

export default ResellerHostingSection