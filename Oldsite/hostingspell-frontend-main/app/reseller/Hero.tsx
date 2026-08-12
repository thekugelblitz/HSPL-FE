"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ShieldCheck, BarChart2, User2, Share2, Zap } from "lucide-react"
import { Layers, Server, AppWindow, Lock, Headphones, DatabaseBackup } from "lucide-react"
import ChatButton from "@/components/shared/ChatButton"

import Image from "next/image"

export function Hero() {
    return (
        <section className="bg-background dark:bg-background py-14 md:py-16">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col lg:flex-row lg:gap-20 items-center">
                {/* Left: Main Content */}
                <div className="w-full lg:w-1/2 max-w-lg mx-auto text-center lg:text-left my-16 lg:mx-0">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-7 leading-tight">
                        Start Your<br className="md:inline" />
                        <span className="text-blue-600">Own Hosting Busienss Today</span>
                    </h1>
                    <ul className="space-y-4 text-sm text-left lg:text-left text-muted-foreground mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Host many clients easily with up to 150 accounts, making it simple to grow your business.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Offer flexible plans for each client, so every website gets exactly what it needs.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Save money by hosting multiple websites on a single plan, reducing costs and increasing profit.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Keep client sites safe and running smoothly with automatic backups, security, and reliable uptime.
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
                        <Button
                            size="lg"
                            className="dark:text-white w-full sm:w-auto"
                            onClick={() => {
                                const pricingSection = document.getElementById('pricing');
                                if (pricingSection) {
                                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            VIEW PLANS →
                        </Button>
                        <ChatButton />
                    </div>
                    <span className="flex items-center text-sm text-muted-foreground">
                        <ShieldCheck className="mr-2" size={18} />
                        7-day money-back guarantee
                    </span>
                </div>
                {/* Right: Testimonial and Widgets */}
                <div className="w-full flex justify-center items-center max-w-md mx-auto">
                    <img
                        src="/img/reseller-img-1.png"
                        alt="Premium Hosting Illustration"
                        className="w-auto h-150 object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
