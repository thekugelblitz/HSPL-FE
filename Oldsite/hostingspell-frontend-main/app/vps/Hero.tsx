"use client"

import { Button } from "@/components/ui/button"
import { Zap, CircleGauge, Server, ArrowUpRightSquare, Lock, Cpu, Globe2, CheckCircle } from "lucide-react"
// import Image from "next/image"
import ChatButton from "@/components/shared/ChatButton"

export function Hero() {
    return (
        <section className="bg-background dark:bg-background py-14 md:py-16">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col lg:flex-row lg:gap-20 items-center">
                {/* Left: Main Content */}
                <div className="w-full lg:w-1/2 max-w-lg mx-auto text-center lg:text-left my-16 lg:mx-0">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-7 leading-tight">
                        <span className="text-blue-600">Virtual Private Server</span><br className="md:inline" />With Full Freedom And Flexibility
                    </h1>
                    <ul className="space-y-4 text-sm text-left lg:text-left text-muted-foreground mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Run your websites at top speeds with 100% uptime thanks to optimized cloud infrastructure.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Guaranteed performance to handle heavy websites, apps, and eCommerce projects.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Enhanced security and privacy with isolated, dedicated hosting environments.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Easy management with control panel access and full scalability as you grow.
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
                           VIEW PLANS →
                        </Button>
                        <ChatButton />
                    </div>
                </div>
                {/* Right: VPS Capabilities */}
                <div className="w-full flex justify-center items-center max-w-md mx-auto">
                    <img
                        src="/img/vpshosting-img-2.png"
                        alt="Premium Hosting Illustration"
                        className="w-auto h-120 object-contain"
                    />
                </div>

            </div>
        </section>
    )
}
