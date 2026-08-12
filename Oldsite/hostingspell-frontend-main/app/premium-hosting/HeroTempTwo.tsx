"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Lock, Globe2, Server, Headphones, ArrowUpRightSquare } from "lucide-react"

export function Hero() {
    return (
        <section className="bg-background dark:bg-background py-14 md:py-16">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col lg:flex-row lg:gap-20 items-center">

                {/* Left: Main Content */}
                <div className="w-full lg:w-1/2 max-w-lg mx-auto text-center lg:text-left my-16 lg:mx-0">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-7 leading-tight">
                        Powerful Hosting, <span className="text-blue-600">Simplified For You</span>
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Our managed premium hosting delivers <span className="font-medium">speed and reliability</span>, powered by <span className="font-medium">cPanel on Linode & DigitalOcean</span>.
                    </p>

                    <ul className="space-y-4 text-sm text-left lg:text-left text-muted-foreground mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Host websites with confidence on top-tier cloud infrastructure.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Enjoy fast, secure, and scalable performance for any project.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Manage everything easily with cPanel — no tech skills required.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Get peace of mind with 24/7 expert support by your side.
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
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
                            View Plans
                        </Button>
                    </div>
                </div>

                {/* Right: Premium Hosting Features */}
                <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 max-w-md mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

                        {/* Blazing Fast */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Zap className="text-orange-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Blazing Fast</div>
                                <div className="text-xs text-muted-foreground">SSD storage & optimized servers</div>
                            </div>
                        </div>

                        {/* Secure Hosting */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Lock className="text-orange-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Rock-Solid Security</div>
                                <div className="text-xs text-muted-foreground">Free SSL & advanced protection</div>
                            </div>
                        </div>

                        {/* Easy to Manage */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Server className="text-indigo-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Easy Management</div>
                                <div className="text-xs text-muted-foreground">cPanel control, hassle-free</div>
                            </div>
                        </div>

                        {/* Global Reach */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Globe2 className="text-indigo-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Global Reach</div>
                                <div className="text-xs text-muted-foreground">Powered by Linode & DigitalOcean</div>
                            </div>
                        </div>

                        {/* Seamless Upgrades */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <ArrowUpRightSquare className="text-green-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Seamless Upgrades</div>
                                <div className="text-xs text-muted-foreground">Grow without downtime</div>
                            </div>
                        </div>

                        {/* 24/7 Expert Support */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Headphones className="text-green-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">24/7 Expert Support</div>
                                <div className="text-xs text-muted-foreground">Help anytime you need it</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
