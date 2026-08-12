"use client"

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCurrency } from '@/context/CurrencyContext';

export default function PricingSection() {
    const { currency } = useCurrency();

    return (
        <section className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Find Your Perfect Hosting Plan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cloud Hosting */}
                <Card className="relative p-6 border-0 shadow-md overflow-hidden bg-[#E7FBFF] dark:bg-[#03121B] transition-transform duration-200 hover:scale-[1.08] hover:shadow-2xl">
                    <Image src="/img/pricing-cloud-hosting.png" width={56} height={56} alt="Premium Hosting Icon" className="absolute top-0 right-0 z-10" />
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mt-2">
                            <h3 className="text-lg font-bold text-green-700 dark:text-green-300">CLOUD HOSTING</h3>
                        </div>
                        <p className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wide">
                            BEST STARTER PLANS FOR SMALL BUSINESSES
                        </p>
                        <div className="flex items-end gap-1">
                            <span className="text-3xl font-bold text-green-700 dark:text-green-300">
                                {currency === "INR" ? "₹75" : "$0.89"}
                            </span>
                            <span className="text-xs text-green-700 dark:text-green-300 font-semibold mb-1">/month</span>
                        </div>
                        <Link href="/cloud-hosting">
                            <Button className="bg-green-600 hover:bg-green-700 text-white w-fit px-6 py-2 rounded font-semibold text-xs border">
                                VIEW PLANS
                            </Button>
                        </Link>
                    </div>
                    <Image src="/img/pricing-cloud-hosting.png" width={80} height={80} alt="" className="absolute bottom-0 right-0 opacity-40 pointer-events-none select-none scale-y-[-1] invert dark:invert-0" />
                </Card>

                {/* Premium Hosting */}
                <Card className="relative p-6 border-2 border-blue-700 shadow-xl overflow-hidden bg-[#EDFBFF] dark:bg-[#021227] transition-transform duration-200 hover:scale-[1.08] hover:shadow-2xl">
                    <Image src="/img/pricing-premium-hosting.png" width={56} height={56} alt="Cloud Hosting Icon" className="absolute top-0 right-0 z-10" />
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mt-2">
                            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300">PREMIUM HOSTING</h3>
                        </div>
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                            BEST SOLUTION FOR MEDIUM BUSINESSES THAT WANT TO SCALE UP
                        </p>
                        <div className="flex items-end gap-1">
                            <span className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                                {currency === "INR" ? "₹185" : "$2.19"}
                            </span>
                            <span className="text-xs text-blue-700 dark:text-blue-300 font-semibold mb-1">/month</span>
                        </div>
                        <Link href="/premium-hosting">
                            <Button className="bg-blue-700 hover:bg-blue-800 text-white w-fit px-6 py-2 rounded font-semibold text-xs">
                                VIEW PLANS
                            </Button>
                        </Link>
                    </div>
                    <Image src="/img/pricing-premium-hosting.png" width={80} height={80} alt="" className="absolute bottom-0 right-0 opacity-40 pointer-events-none select-none scale-y-[-1] invert dark:invert-0" />
                </Card>

                {/* VPS Hosting */}
                <Card className="relative p-6 border-0 shadow-md overflow-hidden bg-[#E7FBFF] dark:bg-[#100932] transition-transform duration-200 hover:scale-[1.08] hover:shadow-2xl">
                    <Image src="/img/pricing-vps-hosting.png" width={56} height={56} alt="VPS Hosting Icon" className="absolute top-0 right-0 z-10" />
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mt-2">
                            <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300">VPS HOSTING</h3>
                        </div>
                        <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                            ADVANCED SOLUTION FOR REVENUE GENERATING APPS & WEBSITES
                        </p>
                        <div className="flex items-end gap-1">
                            <span className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                                {currency === "INR" ? "₹650" : "$7.5"}
                            </span>
                            <span className="text-xs text-purple-700 dark:text-purple-300 font-semibold mb-1">/month</span>
                        </div>
                        <Link href="/vps">
                            <Button className="bg-purple-700 hover:bg-purple-800 text-white w-fit px-6 py-2 rounded font-semibold text-xs">
                                VIEW PLANS
                            </Button>
                        </Link>
                    </div>
                    <Image src="/img/pricing-vps-hosting.png" width={80} height={80} alt="" className="absolute bottom-0 right-0 opacity-40 pointer-events-none select-none scale-y-[-1] invert dark:invert-0" />
                </Card>
            </div>
        </section>
    );
}
