"use client"

import { Button } from "@/components/ui/button"
import ChatButton from "@/components/shared/ChatButton"

export function Hero() {
    return (
        <section className="bg-background dark:bg-background">
            <div className="container mx-auto px-4 mt-16 md:pt-8 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                        <span className="text-blue-600">Everything</span> {" "}
                        You Need In One Place
                    </h1>

                    <p className="mt-6 text-xl text-muted-foreground text-balance">
                        The best Cloud Hosting with lifetime free domain and server location of your choice at checkout!
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
