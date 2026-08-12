"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import ChatButton from "@/components/shared/ChatButton"

export function Hero() {
    return (
        <section className="bg-background dark:bg-background py-14 md:py-16">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col lg:flex-row lg:gap-20 items-center">

                {/* Left: Main Content */}
                <div className="w-full lg:w-1/2 max-w-lg mx-auto text-center lg:text-left my-16 lg:mx-0">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        Optimised for WordPress
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-7 leading-tight">
                        WordPress Hosting Built for{" "}
                        <span className="text-blue-600">Speed & Scale</span>
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Get your WordPress site running on <span className="font-medium">LiteSpeed-powered infrastructure</span> with one-click installs, free daily backups, and free SSL — all managed effortlessly through cPanel.
                    </p>

                    <ul className="space-y-4 text-sm text-left text-muted-foreground mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            One-click WordPress install via Softaculous — live in minutes.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            LiteSpeed Web Server + LSCache for blazing-fast page loads.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Free SSL, free daily backups, and Imunify360 malware protection.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Free cPanel migration — we move your site at no extra cost.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Scale anytime to VPS for dedicated resources and full control.
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button
                            id="wp-hero-view-plans"
                            size="lg"
                            className="dark:text-white w-full sm:w-auto"
                            onClick={() => {
                                const pricingSection = document.getElementById("pricing");
                                if (pricingSection) {
                                    pricingSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            VIEW PLANS →
                        </Button>
                        <ChatButton />
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="w-full flex justify-center items-center max-w-md mx-auto">
                    <div className="relative">
                        {/* WordPress badge overlay */}
                        <div className="absolute -top-4 -right-4 bg-[#21759b] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                            WordPress Ready
                        </div>
                        <img
                            src="/img/wordpresshosting.png"
                            alt="WordPress Hosting Illustration"
                            className="w-auto h-140 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
