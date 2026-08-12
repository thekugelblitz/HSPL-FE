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
                    <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        Powered by Passenger + cPanel
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-foreground mb-7 leading-tight">
                        Run Node.js Apps on{" "}
                        <span className="text-green-600">Managed cPanel Hosting</span>
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Deploy your Node.js applications through <span className="font-medium">cPanel's Node.js Manager</span>, served by <span className="font-medium">Phusion Passenger</span>. Full npm support, multi-version Node.js, and a clear upgrade path to VPS when you need more.
                    </p>

                    <ul className="space-y-4 text-sm text-left text-muted-foreground mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Visual Node.js app management via cPanel Node.js Manager.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Phusion Passenger handles process management — production-ready out of the box.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Support for Node.js 14, 16, 18, 20 & 22 — choose your version per app.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Full npm & yarn support — install any package from the cPanel terminal.
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            Scale to VPS for dedicated resources, root access, and custom server configs.
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button
                            id="nodejs-hero-view-plans"
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
                        <div className="absolute -top-4 -right-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                            Node.js Ready
                        </div>
                        <img
                            src="/img/nodejshosting.png"
                            alt="Node.js Hosting Illustration"
                            className="w-auto h-130 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
