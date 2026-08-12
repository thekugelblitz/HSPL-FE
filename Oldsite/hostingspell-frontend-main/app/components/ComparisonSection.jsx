import { FiCheck } from "@/components/icons/OptimizedIcons"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import React from "react";
import { useCurrency } from '@/context/CurrencyContext';

const otherFeatures = [
    { label: "Other Hosting Provider", icon: "icon-server", inr: "425", usd: "5" },
    { label: "cPanel", icon: "icon-cpanel", inr: "2200", usd: "26.99" },
    { label: "Linode Object Storage", icon: "icon-linode", inr: "1700", usd: "20" },
    { label: "CloudLinux OS", icon: "icon-cloudlinux-os", inr: "1275", usd: "15" },
    { label: "Imunifi360", icon: "icon-imunifi360", inr: "1275", usd: "15" },
    { label: "LiteSpeed", icon: "icon-litespeed", inr: "3825", usd: "45" },
    { label: "JetBackup", icon: "icon-jetbackup", inr: "760", usd: "8.95" },
    { label: "Softaculous", icon: "icon-sofaculous", inr: "170", usd: "2" },
    { label: "Sitepad Web Builder", icon: "icon-sitepad-web-builder", inr: "850", usd: "10" },
    { label: "Tech & Sysadmin Support", icon: "icon-tech-support", inr: "3400", usd: "40" },
    { label: "Mail.Baby", icon: "icon-mailbaby", inr: "425", usd: "5" },
    { label: "Your Time & Sanity", icon: "icon-emoji-frustrated", inr: "Priceless", usd: "Priceless" },
]

const hostingSpellFeatures = [
    "24/7 Support team",
    "Free SSL certificate",
    "cPanel Control panel",
    "CloudLinux + Immunify360 Security",
    "One-Click application installer",
    "Drag&Drop SiteBuilder",
    "100% Uptime mark",
    "30-day money-back",
    "Free website migration",
    "Daily backup system",
    "Latest PHP versions",
    "Free domain transfer",
    "Unlimited bandwidth",
    "Free email accounts",
]

export default function ComparisonSection() {

    const { currency } = useCurrency();

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-4">
                Save Up To {currency === "INR" ? "₹16,305" : "$192.95"} Per Month <span className="hidden md:inline">+</span>
            </h2>

            <p className="text-center text-md text-black dark:text-white mb-8">
                Make your site faster and more efficient, cutting costs by up to {currency === "INR" ? "₹1,95,660" : "$2,315"} annually.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-2 md:gap-8 md:max-w-4xl mx-auto">
                {/* Other Hosting Provider */}
                <div className="p-0">
                    <ul className="flex flex-col space-y-0 gap-1">
                        {otherFeatures.map((item, index) => (
                            <React.Fragment key={index}>
                                {/* Card Item */}
                                <li className="flex flex-row justify-between items-center px-4 py-3 max-h-[130px] bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                                    <div className="flex flex-row items-center gap-3">
                                        <Image
                                            src={`/icons/${item.icon}.png`}
                                            width={48}
                                            height={48}
                                            alt={item.label}
                                        />
                                        <span className="font-medium text-sm">{item.label}</span>
                                    </div>

                                    <div className="flex items-center gap-1 text-sm font-semibold">
                                        <span className="text-gray-700 dark:text-white">
                                            {currency === "INR" ? (
                                                !isNaN(Number(item.inr)) ? `₹${item.inr} / Mo` : item.inr
                                            ) : (
                                                !isNaN(Number(item.usd)) ? `$${item.usd} / Mo` : item.usd
                                            )}
                                        </span>
                                    </div>
                                </li>

                                {index < otherFeatures.length && (
                                    <div className="relative">
                                        <div className="absolute right-1/6 -bottom-3 transform -translate-x-1/2 z-10">
                                            <div className="w-6 h-6 bg-blue-600 dark:bg-gray-800 text-white rounded-full flex items-center justify-center text-sm shadow-md border-2 border-white">
                                                {index === otherFeatures.length - 1 ? "=" : "+"}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </React.Fragment>
                        ))}
                    </ul>
                    <div className="flex justify-end items-end mt-8">
                        <span className="text-md font-bold">Total Cost {currency === "INR" ? "₹16,305" : "$192.95"} / Month</span>
                    </div>
                    <div className="flex justify-end items-end text-right">
                        <span className="text-sm">And let's not forget the time wasted switching tools and those sneaky hidden fees…</span>
                    </div>
                </div>

                {/* Middle VS Circle */}
                <div className="flex items-center justify-center my-6 md:my-0">
                    <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-extrabold shadow-lg">
                        <span className="rotate-[-10deg]">VS</span>
                    </div>
                </div>

                {/* HostingSpell Features - React Icon Check */}
                <Card className="p-6 bg-primary text-primary-foreground dark:bg-[#08163C]">
                    <div className="space-y-4">
                        {/* <h3 className="text-xl font-bold">HostingSpell</h3> */}
                        <div className="flex items-center gap-2">
                            {/* Logo */}
                            <Image src="/logo-light.png" alt="HostingSpell" height={100} width={200} className="object-contain" />
                        </div>
                        <ul className="space-y-4 dark:text-white mt-8">
                            {hostingSpellFeatures.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-xl">
                                    <FiCheck className="text-white w-5 h-5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 border-t border-primary-foreground/20 dark:text-white">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold">Total Cost</span>
                                <span className="font-bold text-3xl">{currency === "INR" ? "₹85 / Mo" : "$0.89 / Mo"}</span>
                            </div>
                            <div className="text-center">
                                <span className="text-sm text-center">Zero Hidden Fees</span><br></br>
                                <span className="font-bold">+</span><br></br>
                                <span className="text-sm text-center">Up to <span className="font-bold text-yellow-500 dark:text-red-500">80% SAVINGS</span> vs. the Industry</span>

                            </div>
                            <a href="/pricing">
                                <Button variant="secondary" className="w-full mt-4">
                                    View Plans
                                </Button>
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
