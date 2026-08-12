"use client";

import { Hero } from "./Hero";
import { PythonFeatures } from "./PythonFeatures";
import { PythonBenefits } from "./PythonBenefits";
import { VPSUpsell } from "../wordpress-hosting/VPSUpsell";
import { LocalPricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { AIChatCTA } from "./AIChatCTA";
import { FAQ } from "./FAQ";

const pythonFaqs = [
    {
        question: "Can I run Django and Flask on shared cPanel hosting?",
        answer: "Yes. HostingSpell's Premium Hosting plans include cPanel's Python Manager and Phusion Passenger WSGI. You can deploy Django, Flask, FastAPI, and any WSGI-compatible Python framework without server administration knowledge.",
    },
    {
        question: "What Python versions are supported?",
        answer: "We support Python 3.8, 3.9, 3.10, 3.11, and 3.12. Each application can use a different Python version, so you can run a legacy Django 3.x project alongside a modern FastAPI app on the same account.",
    },
    {
        question: "How does Phusion Passenger WSGI work?",
        answer: "Passenger acts as a WSGI application server. It reads your wsgi.py or passenger_wsgi.py startup file, starts your Python app in an isolated virtualenv, manages worker processes, and handles crashes with automatic restarts.",
    },
    {
        question: "Are virtual environments (venv/virtualenv) supported?",
        answer: "Yes. Every Python application created in cPanel gets its own isolated virtual environment. Install any packages via pip without affecting the system Python or other apps on your account.",
    },
    {
        question: "Can I run background jobs, sockets, or dedicated tasks?",
        answer: "No. Python applications on Premium Hosting are cPanel-based and can only be configured and run through cPanel's interface. For dedicated, persistent processes like sockets, custom background jobs, or Celery workers, you must upgrade to a VPS Hosting plan where you have full environment control.",
    },
    {
        question: "What frameworks are compatible with Passenger WSGI?",
        answer: "Any WSGI-compatible framework works: Django, Flask, FastAPI (via ASGI adapter), Bottle, Pyramid, CherryPy, and more. Just provide a wsgi.py entry point and Passenger handles serving.",
    },
    {
        question: "When should I upgrade to VPS for Python?",
        answer: "Consider a VPS when your app requires gunicorn/uvicorn with custom worker configurations, persistent Celery queues, dedicated ML/data processing resources, or custom nginx upstream proxying.",
    },
    {
        question: "Do you offer a money-back guarantee?",
        answer: "Yes. All Premium Hosting plans come with a 7-day money-back guarantee. Contact our support within 7 days of purchase if you're not satisfied for any reason.",
    },
];

export default function PythonHostingPageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <PythonFeatures />
            <PythonBenefits />

            {/* Pricing */}
            <section id="pricing" className="bg-background py-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        All plans include Python Manager
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Start with Premium Hosting for Python</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                        Every plan includes cPanel Python Manager and Phusion Passenger WSGI. Deploy Django, Flask, or FastAPI — scale to VPS when you need more.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <LocalPricing />
                </div>
            </section>

            <VPSUpsell variant="python" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <Testimonials />
                <AIChatCTA />
                <FAQ faqs={pythonFaqs} />
            </div>
        </main>
    );
}
