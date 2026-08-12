"use client";

import { Hero } from "./Hero";
import { WordPressFeatures } from "./WordPressFeatures";
import { WordPressBenefits } from "./WordPressBenefits";
import { VPSUpsell } from "./VPSUpsell";
import { LocalPricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { AIChatCTA } from "./AIChatCTA";
import { FAQ } from "./FAQ";

const wordPressFaqs = [
    {
        question: "Do I need technical experience to host WordPress on HostingSpell?",
        answer: "Not at all. You can install WordPress in one click via Softaculous inside cPanel. The WordPress Manager lets you update core, themes, and plugins from a single dashboard — no coding required.",
    },
    {
        question: "Which plan is recommended for WordPress?",
        answer: "We recommend our Premium Hosting plans for WordPress. They include LiteSpeed Web Server, LSCache, daily backups, Imunify360 security, and dedicated CPU & RAM resources. For high-traffic WooCommerce stores, consider our VPS plans.",
    },
    {
        question: "Is WooCommerce supported on your hosting?",
        answer: "Yes. All Premium Hosting plans support WooCommerce. You get unlimited MySQL databases, Redis object caching, and LiteSpeed Cache — the combination that keeps WooCommerce stores fast under heavy load.",
    },
    {
        question: "Can you migrate my existing WordPress site?",
        answer: "Yes! If your current provider uses cPanel, we can migrate your WordPress site for free. If you're on a different panel or platform, our team will assist — contact our 24/7 support for details.",
    },
    {
        question: "Do you support WordPress Multisite?",
        answer: "Yes. WordPress Multisite is fully supported on Premium Hosting plans. You'll have the database connections, subdomains, and subdirectory support needed to run a Multisite network.",
    },
    {
        question: "What security does my WordPress site get?",
        answer: "Every plan includes Imunify360 AI-powered malware scanning, a Web Application Firewall, free Let's Encrypt SSL (auto-renewed), and daily backups. Your WordPress installation is protected from day one.",
    },
    {
        question: "When should I upgrade from Premium Hosting to VPS for WordPress?",
        answer: "If your site regularly receives thousands of concurrent visitors, runs heavy WooCommerce operations, or requires custom server configurations, a VPS gives you dedicated resources and full root access.",
    },
    {
        question: "Do you offer a money-back guarantee?",
        answer: "Yes. All Premium Hosting plans come with a 7-day money-back guarantee. If you're not satisfied for any reason, contact our support team within 7 days of purchase for a full refund.",
    },
];

export default function WordPressHostingPageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <WordPressFeatures />
            <WordPressBenefits />

            {/* Pricing */}
            <section id="pricing" className="bg-background py-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Recommended for WordPress
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Premium Hosting Plans for WordPress</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                        LiteSpeed-powered servers on Linode &amp; DigitalOcean infrastructure — the ideal base for any WordPress site.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <LocalPricing />
                </div>
            </section>

            <VPSUpsell variant="wordpress" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <Testimonials />
                <AIChatCTA />
                <FAQ faqs={wordPressFaqs} />
            </div>
        </main>
    );
}
