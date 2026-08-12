"use client";

import { Hero } from "./Hero";
import { Features } from "./Features";
import { LatencySection } from "./LatencySection";
import { UseCases } from "./UseCases";
import { Pricing } from "./Pricing";
import { ComparisonSection } from "./ComparisonSection";
import { TrustSection } from "./TrustSection";
import { CTABanner } from "./CTABanner";
import { Testimonials } from "@/app/components/Testimonials";
import { AIChatCTA } from "@/components/shared/AIChatCTA";
import { FAQ } from "@/components/shared/FAQ";
import { INDIA_VPS_FAQS } from "@/lib/constants-vps-india";
import Link from "next/link";

export default function IndiaVpsPageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <Features />
            <LatencySection />
            <UseCases />
            <Pricing />
            <ComparisonSection />
            <TrustSection />
            <Testimonials />
            <div className="container mx-auto px-4">
                <AIChatCTA />
            </div>
            <CTABanner />
            <FAQ
                faqs={[...INDIA_VPS_FAQS]}
                introText="Everything you need to know about India VPS hosting — from latency and pricing to managed plans, migrations, and scalability. Can't find your answer? Our 24/7 support team is one click away."
            />

            <section className="pb-16 bg-background dark:bg-background">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <p className="text-sm text-muted-foreground">
                        Looking for global server locations? Explore our{" "}
                        <Link href="/vps" className="text-blue-600 hover:underline font-medium">
                            worldwide VPS hosting
                        </Link>{" "}
                        options, or browse all plans on our{" "}
                        <Link href="/pricing" className="text-blue-600 hover:underline font-medium">
                            pricing page
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
}
