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
                    <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                        Passenger WSGI + Python Manager
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-7 leading-tight">
                        Deploy Python Apps with{" "}
                        <span className="text-yellow-600 dark:text-yellow-400">Passenger on cPanel</span>
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Run Django, Flask, and FastAPI on <span className="font-medium">cPanel's Python Manager</span> powered by <span className="font-medium">Phusion Passenger WSGI</span>. Full virtualenv isolation, multi-version Python, and an easy path to VPS for demanding apps.
                    </p>

                    <ul className="space-y-4 text-sm text-left text-muted-foreground mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Visual Python app management via cPanel's Python Manager interface.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Phusion Passenger WSGI serves your Django, Flask, or FastAPI app in production.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Python 3.8, 3.9, 3.10, 3.11, 3.12 — choose the right version per app.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Isolated virtualenv/venv environments — no dependency conflicts.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Scale to VPS for root access, custom WSGI configs, and unlimited compute.
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button
                            id="python-hero-view-plans"
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
                        <div className="absolute -top-4 -right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                            Python Ready
                        </div>
                        <img
                            src="/img/pythonhosting.png"
                            alt="Python Hosting Illustration"
                            className="w-auto h-130 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
