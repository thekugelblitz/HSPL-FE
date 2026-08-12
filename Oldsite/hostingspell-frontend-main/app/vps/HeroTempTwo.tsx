"use client"

import { Button } from "@/components/ui/button"
import { Zap, CircleGauge, Server, ArrowUpRightSquare, Lock, Cpu, Globe2, CheckCircle } from "lucide-react"
import Image from "next/image"

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
                            View Plans
                        </Button>
                    </div>
                </div>
                {/* Right: VPS Capabilities */}
                <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 max-w-md mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {/* Blazing Fast */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Zap className="text-orange-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Blazing Fast SSD Storage</div>
                                <div className="text-xs text-muted-foreground">Instant response & rapid load times</div>
                            </div>
                        </div>
                        {/* Full Control */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Cpu className="text-orange-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Root Access & Customization</div>
                                <div className="text-xs text-muted-foreground">Modify server settings as you wish</div>
                            </div>
                        </div>
                        {/* Always-On Uptime */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <CircleGauge className="text-green-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">100% Uptime Mark</div>
                                <div className="text-xs text-muted-foreground">Your sites stay online, always</div>
                            </div>
                        </div>
                        {/* Easy Management */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Server className="text-green-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Virtualizor Panel</div>
                                <div className="text-xs text-muted-foreground">Manage and reboot with one click</div>
                            </div>
                        </div>
                        {/* Upgrade Ready */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <ArrowUpRightSquare className="text-blue-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Seamless Upgrades</div>
                                <div className="text-xs text-muted-foreground">Scale RAM, CPU & storage anytime</div>
                            </div>
                        </div>
                        {/* Dedicated IP */}
                        <div className="bg-card dark:bg-card/60 rounded-xl px-5 py-4 flex items-center gap-3 shadow w-full">
                            <Globe2 className="text-blue-500 flex-shrink-0" size={28} />
                            <div>
                                <div className="text-sm font-semibold">Dedicated Static IP</div>
                                <div className="text-xs text-muted-foreground">Unique multiple address for every VPS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
