"use client";

import { useState, useMemo } from "react";
import { VpsApp, PLANS_APP_VPS_HOSTING } from "@/lib/constants-apps";
import { useCurrency } from "@/context/CurrencyContext";
import {
    ChevronDown,
    Cpu,
    HardDrive,
    Network,
    MemoryStick,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_LOCATIONS = [
    { code: "IND", label: "India" },
    { code: "USA", label: "United States" },
];

interface AppDeploySidebarProps {
    app: VpsApp;
}

export default function AppDeploySidebar({ app }: AppDeploySidebarProps) {
    const { currency } = useCurrency();
    const [location, setLocation] = useState(APP_LOCATIONS[0]);
    const billingCycle = "monthly";

    const eligiblePlans = useMemo(() => {
        return PLANS_APP_VPS_HOSTING.filter((plan) => {
            const ramMatch = plan.ram.match(/(\d+)/);
            if (!ramMatch) return true;
            const ramVal = parseInt(ramMatch[1], 10);
            return ramVal >= app.minRam;
        });
    }, [app.minRam]);

    const [selectedPlanName, setSelectedPlanName] = useState(
        eligiblePlans.length > 0 ? eligiblePlans[0].name : ""
    );

    const activePlan = useMemo(() => {
        return (
            eligiblePlans.find((p) => p.name === selectedPlanName) ||
            eligiblePlans[0]
        );
    }, [selectedPlanName, eligiblePlans]);

    const activePlanConfig = useMemo(() => {
        if (!activePlan) return null;

        const countryPricing =
            activePlan.pricing[
            location.code as keyof typeof activePlan.pricing
            ];
        const currencyPricing =
            countryPricing &&
            (countryPricing as Record<string, any>)[currency];

        const price = currencyPricing
            ? currencyPricing[billingCycle]
            : "-";

        const currencySymbol = currency === "INR" ? "₹" : "$";

        let cpuCore = "1 vCPU";
        let storage = "40 GB";
        let bandwidth = "1 TB";

        activePlan.features.forEach((f) => {
            if (f.label.toLowerCase().includes("cpu"))
                cpuCore = f.label;
            if (f.label.toLowerCase().includes("storage"))
                storage = f.label;
            if (
                f.label.toLowerCase().includes("bandwidth") ||
                f.label.toLowerCase().includes("traffic")
            )
                bandwidth = f.label;
        });

        let deployLink = "#";
        const baseLink =
            activePlan.links?.[
            location.code as keyof typeof activePlan.links
            ] ?? "#";

        const selectedCurrency =
            currency === "INR" ? "currency=2" : "currency=1";

        if (baseLink !== "#") {
            deployLink = baseLink.includes("?")
                ? `${baseLink}&${selectedCurrency}`
                : `${baseLink}?${selectedCurrency}`;
        }

        return {
            price,
            currencySymbol,
            cpuCore,
            storage,
            bandwidth,
            deployLink,
        };
    }, [activePlan, location, currency, billingCycle]);

    if (!activePlan || !activePlanConfig) return null;

    return (
        <div className="sticky top-24">
            <div className="bg-white dark:bg-[#0A0E17] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-6 shadow-sm">

                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Deploy {app.name}
                </h2>

                {/* Plan Selector */}
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        VPS Plan
                    </label>
                    <div className="relative">
                        <select
                            className="w-full appearance-none bg-white dark:bg-[#0A0E17] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedPlanName}
                            onChange={(e) =>
                                setSelectedPlanName(e.target.value)
                            }
                        >
                            {eligiblePlans.map((p) => (
                                <option key={p.name} value={p.name}>
                                    {p.name.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Location Selector */}
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Server Location
                    </label>
                    <div className="relative">
                        <select
                            className="w-full appearance-none bg-white dark:bg-[#0A0E17] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={location.code}
                            onChange={(e) => {
                                const newLoc = APP_LOCATIONS.find(
                                    (l) => l.code === e.target.value
                                );
                                if (newLoc) setLocation(newLoc);
                            }}
                        >
                            {APP_LOCATIONS.map((loc) => (
                                <option key={loc.code} value={loc.code}>
                                    {loc.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Specs */}
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 border-t border-b dark:border-gray-800 py-4">
                    <li className="flex items-center gap-3">
                        <Cpu className="w-4 h-4 text-gray-400" />
                        {activePlanConfig.cpuCore}
                    </li>
                    <li className="flex items-center gap-3">
                        <MemoryStick className="w-4 h-4 text-gray-400" />
                        {activePlan.ram}
                    </li>
                    <li className="flex items-center gap-3">
                        <HardDrive className="w-4 h-4 text-gray-400" />
                        {activePlanConfig.storage} NVMe
                    </li>
                    <li className="flex items-center gap-3">
                        <Network className="w-4 h-4 text-gray-400" />
                        {activePlanConfig.bandwidth}
                    </li>
                </ul>

                {/* Pricing */}
                <div>
                    <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {activePlanConfig.currencySymbol}
                            {activePlanConfig.price}
                        </span>
                        <span className="text-xs text-gray-500 pb-1">
                            /mo
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <Button
                    asChild
                    className="w-full h-11 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                    <a
                        href={activePlanConfig.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Deploy Now
                    </a>
                </Button>
            </div>
        </div>
    );
}