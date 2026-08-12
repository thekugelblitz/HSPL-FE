"use client"

import { Button } from "@/components/ui/button"
import HyperspaceBackground from "@/components/ui/HyperspaceBackground"
import ChatButton from "@/components/shared/ChatButton"

export function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <HyperspaceBackground />

            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
                <div className="max-w-4xl w-full text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-foreground">
                        <span className="text-blue-600">Cloud Hosting</span> With{" "}
                        Lightning Fast Speed
                    </h1>

                    <p className="mt-6 text-xl text-muted-foreground text-balance">
                        Affordable hosting plans designed to fit any budget without compromising speed
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto dark:text-white"
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
            </div>
        </section>
    )
}
