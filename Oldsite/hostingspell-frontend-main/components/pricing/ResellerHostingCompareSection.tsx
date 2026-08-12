import React from 'react'
import HostingPlanComparisonTable from './HostingPlanComparisonTable'

import {
    PLANS_COMPARE_RESELLER_HOSTING,
    PLANS_COMPARE_RESELLER_HOSTING_VALUES
} from "@/lib/constants-reseller";

export const LOCATIONS = [
    {
        code: "IND",
        label: "India",
        countryCode: "IN",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
    {
        code: "NET",
        label: "Netherlands",
        countryCode: "NL",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
    // {
    //     code: "SGP",
    //     label: "Singapore",
    //     countryCode: "SG",
    //     currencies: [
    //         { symbol: "₹", code: "INR" },
    //         { symbol: "$", code: "USD" }
    //     ]
    // },
    // {
    //     code: "USA",
    //     label: "USA",
    //     countryCode: "US",
    //     currencies: [
    //         { symbol: "₹", code: "INR" },
    //         { symbol: "$", code: "USD" }
    //     ]
    // },
    // {
    //     code: "UK",
    //     label: "UK",
    //     countryCode: "GB",
    //     currencies: [
    //         { symbol: "₹", code: "INR" },
    //         { symbol: "$", code: "USD" }
    //     ]
    // },
    // {
    //     code: "AUS",
    //     label: "Australia",
    //     countryCode: "AU",
    //     currencies: [
    //         { symbol: "₹", code: "INR" },
    //         { symbol: "$", code: "USD" }
    //     ]
    // },
    // {
    //     code: "CAN",
    //     label: "Canada",
    //     countryCode: "CA",
    //     currencies: [
    //         { symbol: "₹", code: "INR" },
    //         { symbol: "$", code: "USD" }
    //     ]
    // },
    // {
    //     code: "MEX",
    //     label: "Mexico",
    //     countryCode: "MX",
    //     currencies: [
    //         { symbol: "₹", code: "INR" },
    //         { symbol: "$", code: "USD" }
    //     ]
    // },
]

export type LocationInfo = typeof LOCATIONS[0]

// Updated reseller hosting locations to match our new structure
const RESELLER_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
    { value: "netherlands", label: "Netherlands", code: "NET" },
    { value: "usa", label: "United States", code: "USA" },
    { value: "uk", label: "United Kingdom", code: "UK" },
    { value: "singapore", label: "Singapore", code: "SGP" },
]

interface ResellerHostingSectionProps {
    selectedLocation: LocationInfo
}

const ResellerHostingCompareSection: React.FC<ResellerHostingSectionProps> = ({
    selectedLocation
}) => {
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
        }
    }

    return (
        <div>
            <div className="text-center mb-8 my-16">
                <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                    <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    Easily evaluate features, pricing, and benefits across all reseller hosting plans
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

export default ResellerHostingCompareSection
