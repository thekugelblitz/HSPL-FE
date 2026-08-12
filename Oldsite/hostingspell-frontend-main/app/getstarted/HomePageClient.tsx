"use client";

import Image from "next/image";
import { Hero as DomainHero } from "../domain/Hero";
import { CloudHostingPricing } from "./components/CloudHostingPricing";

import { useState, useEffect, lazy, Suspense } from "react";
// import { useCurrency } from "@/context/CurrencyContext";

// Lazy load heavy components
const ElectricSparksCanvas = lazy(() => import("@/components/background/ElectricSparksCanvas"));
const WhyHostingSpell = lazy(() => import("../components/WhyHostingSpell"));
const ComparisonSection = lazy(() => import("../components/ComparisonSection"));
const FAQ = lazy(() => import("../components/FAQ").then(mod => ({ default: mod.FAQ })));
const PricingSection = lazy(() => import("../components/PricingSection"));
const ProviderLogos = lazy(() => import("../components/ProviderLogos"));
const HostingTabs = lazy(() => import("../components/HostingTabs"));
const Benefits = lazy(() => import("../components/Benefits"));
const ContinentalConnectivity = lazy(() => import("../components/ContinentalConnectivity"));

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        setIsMobile(mq.matches);
        mq.addEventListener("change", handler);

        return () => mq.removeEventListener("change", handler);
    }, []);

    return isMobile;
}

import { AwardsSection } from "./components/AwardsSection";

export default function HomePageClient() {
    return (
        <>
            <DomainHero />

            <main className="flex min-h-screen flex-col">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Suspense fallback={<div className="h-96" />}>
                        <PricingSection />
                    </Suspense>

                    <AwardsSection />

                    <Suspense fallback={<div className="h-96" />}>
                        <CloudHostingPricing />
                    </Suspense>

                    <Suspense fallback={<div className="h-32" />}>
                        <ProviderLogos />
                    </Suspense>

                    <Suspense fallback={<div className="h-96" />}>
                        <div id="compare-plans">
                            <ComparisonSection />
                        </div>
                    </Suspense>

                    <Suspense fallback={<div className="h-96" />}>
                        <HostingTabs />
                    </Suspense>

                    <Suspense fallback={<div className="h-96" />}>
                        <Benefits />
                    </Suspense>

                    <Suspense fallback={<div className="h-96" />}>
                        <WhyHostingSpell />
                    </Suspense>

                    <Suspense fallback={<div className="h-96" />}>
                        <ContinentalConnectivity />
                    </Suspense>
                </div>

                {/* App Section */}
                <section className="py-16">
                    <div className="w-full text-center">
                        <h2 className="text-3xl font-bold mb-4">We've got an app for that</h2>
                        <p className="text-muted-foreground mb-8">
                            Manage your hosting, domains and websites from your mobile device
                        </p>
                    </div>
                    <div className="relative w-full">
                        <Image
                            src="/img/app-supports.png"
                            width={1920}
                            height={500}
                            alt="App Grid"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                </section>

                {/* FAQ Section */}
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Suspense fallback={<div className="h-96" />}>
                        <FAQ />
                    </Suspense>
                </div>
            </main>
        </>
    );
}
