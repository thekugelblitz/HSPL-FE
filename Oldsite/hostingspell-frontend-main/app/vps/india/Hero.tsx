"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import ChatButton from "@/components/shared/ChatButton";
import CountryFlag from "react-country-flag";

export function Hero() {
    return (
        <section className="bg-background dark:bg-background py-14 md:py-16">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col lg:flex-row lg:gap-20 items-center">
                <div className="w-full lg:w-1/2 max-w-lg mx-auto text-center lg:text-left my-16 lg:mx-0">
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                        <CountryFlag
                            countryCode="IN"
                            svg
                            style={{ width: "16px", height: "12px" }}
                            aria-label="India flag"
                        />
                        Now Live — India Data Center
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-5 leading-tight">
                        <span className="text-blue-600">India VPS Hosting</span>
                        <br />
                        Built for Speed, Scale &amp; Indian Audiences
                    </h1>

                    <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                        Deploy your Indian VPS server on locally hosted NVMe infrastructure with enterprise AMD EPYC hardware.
                        Deliver blazing-fast performance to users in Mumbai, Delhi, Bangalore, and every major Indian city — from just{" "}
                        <span className="font-semibold text-foreground">₹899/month</span>.
                    </p>

                    <ul className="space-y-4 text-sm text-left text-muted-foreground mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Sub-20 ms latency across Indian metros — faster loads, happier users, better SEO.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            100% NVMe SSD storage on KVM VPS with dedicated vCPU, RAM, and root access.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Affordable INR pricing with flexible monthly, quarterly, and annual billing cycles.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            99.9% uptime, enterprise security, and 24/7 engineer support from an India-ready team.
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button
                            size="lg"
                            className="dark:text-white w-full sm:w-auto"
                            onClick={() => {
                                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            VIEW INDIA VPS PLANS →
                        </Button>
                        <ChatButton />
                    </div>

                    <p className="text-xs text-muted-foreground mt-6">
                        Trusted by 110,000+ websites · Instant provisioning · No hidden fees
                    </p>
                </div>

                <div className="w-full flex justify-center items-center max-w-md mx-auto">
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1.5">
                            <CountryFlag
                                countryCode="IN"
                                svg
                                style={{ width: "14px", height: "10px" }}
                                aria-hidden="true"
                            />
                            India NVMe VPS
                        </div>
                        <img
                            src="/img/vpshosting-img-2.png"
                            alt="India VPS hosting server illustration with NVMe storage"
                            className="w-auto h-120 object-contain"
                            width={480}
                            height={480}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
