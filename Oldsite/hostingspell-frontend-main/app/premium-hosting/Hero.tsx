"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Lock, Globe2, Server, Headphones, ArrowUpRightSquare } from "lucide-react"
import ChatButton from "@/components/shared/ChatButton"

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
                            VIEW PLANS →
                        </Button>
                        <ChatButton />
                    </div>
                </div>

                {/* Right: Premium Hosting Features */}
                <div className="w-full flex justify-center items-center max-w-md mx-auto">
                    <img
                        src="/img/premium-hostign-img-1.png"
                        alt="Premium Hosting Illustration"
                        className="w-auto h-150 object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
