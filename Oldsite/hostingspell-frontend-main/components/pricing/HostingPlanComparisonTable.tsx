"use client";

import InfoPopover from "@/components/shared/InfoPopover"
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCurrency } from '@/context/CurrencyContext';

type Feature = {
    label: string;
    keys: string[];
    info?: string;
};

type FeatureGroup = {
    title: string;
    features: Feature[];
};

type PlanFeatureValue =
    | string
    | boolean
    | { label: string; image?: string }
    | null;

type PlanMeta = {
    name: string;
    ctaLabel?: string;
    ctaHref?: string;
    badge?: string;
    priceInr?: string;
    priceUsd?: string;
};

type FeatureCompareProps = {
    featureGroups: FeatureGroup[];
    planKeys: string[];
    planMeta: Record<string, PlanMeta>;
    values: Record<string, Record<string, PlanFeatureValue>>;
};

const renderValue = (value: PlanFeatureValue) => {
    if (value === true)
        return <span className="text-green-600 dark:text-green-400 font-bold">✔</span>;
    if (value === false || value === null || value === undefined)
        return <span className="text-red-500 dark:text-red-400">✘</span>;

    if (typeof value === "string") return <span>{value}</span>;

    if (typeof value === "object" && value.label) {
        return (
            <span className="inline-flex items-center gap-1">
                {value.image && (
                    <Image
                        src={value.image}
                        alt={value.label}
                        width={16}
                        height={16}
                        className="inline-block"
                    />
                )}
                {value.label}
            </span>
        );
    }

    return null;
};

const HostingPlanComparisonTable: React.FC<FeatureCompareProps> = ({
    featureGroups,
    planKeys,
    planMeta,
    values,
}) => {

    const { currency } = useCurrency();
    const [expandedGroups, setExpandedGroups] = useState<Set<number>>(
        new Set(featureGroups.map((_, i) => i))
    );

    const toggleGroup = (i: number) => {
        const newSet = new Set(expandedGroups);
        newSet.has(i) ? newSet.delete(i) : newSet.add(i);
        setExpandedGroups(newSet);
    };

    const columnGridStyle = {
        gridTemplateColumns: `minmax(200px, 250px) repeat(${planKeys.length}, minmax(160px, 1fr))`,
    };

    return (
        <div className="w-full mt-8 mb-12 border rounded-xl overflow-x-auto">
            <div className="inline-block min-w-full">
                {/* Header Row */}
                <div
                    className="grid items-stretch text-center bg-white dark:bg-[#0c0f1a] border-b"
                    style={columnGridStyle}
                >
                    {/* First Column - CTA */}
                    <div className="p-4 bg-muted/30 flex flex-col items-center justify-center md:sticky md:left-0 z-20 bg-white dark:bg-[#0c0f1a] border-r border-border">
                        <span className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                            Need help choosing?
                        </span>
                        <Link
                            href="/contact"
                            className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Chat with us
                        </Link>
                    </div>

                    {/* Plan Headers */}
                    {planKeys.map((key, i) => {
                        const plan = planMeta[key];
                        return (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center px-4 py-6 border-l sticky top-0 z-10 bg-white dark:bg-[#0c0f1a]"
                            >
                                <h3 className="text-lg font-bold">{plan.name}</h3>
                                {plan.badge && (
                                    <div className="text-xs font-semibold text-white bg-pink-500 px-2 py-1 rounded-full mt-1">
                                        {plan.badge}
                                    </div>
                                )}
                                {plan.ctaHref && plan.ctaLabel && (
                                    <Link
                                        href={(() => {
                                            const baseLink = plan.ctaHref ?? "#";
                                            const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";
                                            return baseLink.includes("?")
                                                ? `${baseLink}&${selectedCurrency}`
                                                : `${baseLink}?${selectedCurrency}`;
                                        })()}
                                        className="mt-2 text-sm font-medium bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
                                    >
                                        Start At {currency === "INR" ? plan.priceInr : plan.priceUsd}
                                    </Link>

                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Feature Groups */}
                {featureGroups.map((group, groupIndex) => {
                    const isExpanded = expandedGroups.has(groupIndex);

                    return (
                        <div key={groupIndex}>
                            {/* Group Header */}
                            <button
                                onClick={() => toggleGroup(groupIndex)}
                                className="w-full bg-gray-100 dark:bg-[#0c0f1a] text-gray-800 dark:text-white font-semibold px-4 py-3 border-b flex items-center justify-between hover:bg-gray-200 dark:hover:bg-[#1a1f2e] transition"
                            >
                                <div className="flex items-center gap-2">
                                    <span>🌐</span>
                                    {group.title}
                                </div>
                                {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                            </button>

                            {/* Feature Rows */}
                            {isExpanded && (
                                <div className="divide-y">
                                    {group.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="grid text-sm text-gray-800 dark:text-white bg-white dark:bg-[#101626]"
                                            style={columnGridStyle}
                                        >
                                            {/* Feature Label */}
                                            <div className="pr-4 py-4 px-4 font-medium flex items-start gap-1 border-r border-border md:sticky md:left-0 bg-white dark:bg-[#101626] z-10">
                                                <span>{feature.label}</span>
                                                {feature.info && <InfoPopover content={feature.info} />}
                                            </div>
                                            {/* Values per plan */}
                                            {planKeys.map((planKey, colIndex) => {
                                                const planData = values[planKey];
                                                const featureKey = planData
                                                    ? feature.keys.find((k) => k in planData)
                                                    : null;
                                                const value =
                                                    featureKey && planData ? planData[featureKey] : null;

                                                return (
                                                    <div
                                                        key={colIndex}
                                                        className="text-center py-4 px-3 border-l border-border"
                                                    >
                                                        {renderValue(value)}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default HostingPlanComparisonTable;
