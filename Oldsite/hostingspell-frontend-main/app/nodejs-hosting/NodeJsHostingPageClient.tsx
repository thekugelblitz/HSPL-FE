"use client";

import { Hero } from "./Hero";
import { NodeJsFeatures } from "./NodeJsFeatures";
import { NodeJsBenefits } from "./NodeJsBenefits";
import { VPSUpsell } from "../wordpress-hosting/VPSUpsell";
import { LocalPricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { AIChatCTA } from "./AIChatCTA";
import { FAQ } from "./FAQ";

const nodeJsFaqs = [
    {
        question: "Can I really run Node.js on shared cPanel hosting?",
        answer: "Yes. HostingSpell's Premium Hosting plans include cPanel's Node.js Manager, which lets you create, configure, and run Node.js applications through a visual interface. Your app is served by Phusion Passenger — a production-grade application server.",
    },
    {
        question: "What Node.js versions are supported?",
        answer: "We support Node.js 14, 16, 18, 20, and 22. You can select a different version per application, so legacy projects and modern LTS apps coexist on the same account.",
    },
    {
        question: "Can I use npm, yarn, and run build scripts?",
        answer: "Yes. cPanel provides a terminal where you can run npm install, yarn install, and custom scripts. You can also trigger npm install directly from the Node.js Manager UI without using SSH.",
    },
    {
        question: "How does Phusion Passenger work for Node.js?",
        answer: "Passenger acts as a process manager and application server. It starts your Node.js app when a request comes in, manages worker processes, handles crashes with automatic restarts, and integrates directly with Apache/nginx — no manual port forwarding needed.",
    },
    {
        question: "Can I run WebSockets on Premium Hosting?",
        answer: "No, WebSockets are not supported on Premium Hosting via cPanel. If your application relies on WebSockets for real-time communication, you will need one of our VPS plans with dedicated configuration control.",
    },
    {
        question: "What frameworks are supported?",
        answer: "We support Passenger-compatible backend frameworks like Express.js, Fastify, NestJS, and Koa. However, SSR-heavy frameworks and tools that require running a dedicated node server (such as Next.js, Nuxt.js, Vite-based SSR or tools like claude cli, codex cli) are not supported. Only Passenger-based application setups can be run on cPanel Shared Hosting.",
    },
    {
        question: "When should I upgrade to a VPS for Node.js?",
        answer: "Consider a VPS when your app needs PM2, custom nginx configurations, WebSocket at scale, persistent background workers, or dedicated CPU/RAM. Our VPS plans offer full root access and complete control.",
    },
    {
        question: "Do you offer a money-back guarantee?",
        answer: "Yes. All Premium Hosting plans include a 7-day money-back guarantee. Contact our support team within 7 days of purchase if you're not completely satisfied.",
    },
];

export default function NodeJsHostingPageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <NodeJsFeatures />
            <NodeJsBenefits />

            {/* Pricing */}
            <section id="pricing" className="bg-background py-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        All plans include Node.js Manager
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Start with Premium Hosting for Node.js</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                        Every plan includes cPanel Node.js Manager and Phusion Passenger. Deploy your app, then scale to VPS when you're ready.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <LocalPricing />
                </div>
            </section>

            <VPSUpsell variant="nodejs" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <Testimonials />
                <AIChatCTA />
                <FAQ faqs={nodeJsFaqs} />
            </div>
        </main>
    );
}
