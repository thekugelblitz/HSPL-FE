"use client"

import { useEffect, useState } from "react"
import { Hero } from "./Hero"
import { FAQ } from "./FAQ"
import { BenefitsOne } from "./BenefitsOne"
import { Benefits } from "./Benefits"
import DomainPricingTable from "./DomainPricingTable"
import { Testimonials } from "../components/Testimonials"
import DomainCardGrid from "@/components/pricing/DomainCardGrid"
import { useCurrency } from "@/context/CurrencyContext"
import { AIChatCTA } from "@/components/shared/AIChatCTA";

const domainsFaqs = [
    { question: "would you be able to help me move my website over?", answer: "Yeah, if you have cPanel&reg; at old provider then we can do it for free. if you have any other Web Hosting Panel then we will charge you little fees :)" },
    { question: "How can disk space be unlimited?", answer: "Because we run our platform on top-notch Servers, we can keep adding space to servers. As long as your disk space is used for websites, we won't limit your usage." },
    { question: "What billing cycles do you offer?", answer: "We provide Annual billing for Shared Hosting & Monthly and Annual based billing on Dedicated Hosting :)" },
    { question: "Do you offer 24/7 support?", answer: "We offer 24/7 technical support. You can reach us on live chat, phone or ticket at any particular time :)" },
    { question: "Any discounts for NGOs, Universities & Students?", answer: "Yes, Please check following page for more information: https://hostingspell.com/blog/free-web-hosting-for-ngos-universities" },
    { question: "Do you offer a money-back guarantee?", answer: "We want our users to feel safe, for any reason you do not wish to proceed with our cPanel Hosting package you are entitled to a 7 day money back guarantee, Go Ahead :)" },
    // ... more cloud-specific questions
]

export default function DomainsPageClient() {
    const { currency } = useCurrency()
    const [pricingData, setPricingData] = useState<Record<string, any>>({})
    const [loading, setLoading] = useState(true)

    // TLD list
    const currentDomains = ["com", "in", "net"]

    const currencySymbol = currency === "USD" ? "$" : "₹"

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const res = await fetch("/api/domain-prices")
                const json = await res.json()

                // Transform API data into the format DomainCardGrid expects
                const formatted = Object.entries(json).reduce((acc: any, [tld, prices]: [string, any]) => {
                    acc[tld] = {
                        USD: {
                            original: parseFloat(prices.USD.original),
                            register: parseFloat(prices.USD.register),
                        },
                        INR: {
                            original: parseFloat(prices.INR.original),
                            register: parseFloat(prices.INR.register),
                        }
                    }
                    return acc
                }, {})

                setPricingData(formatted)
            } catch (error) {
                console.error("Error fetching domain prices:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchPrices()
    }, [])

    const getPricing = (domain: string) => {
        const tld = domain.replace(/^\./, "") // remove dot
        return pricingData[tld] || {
            [currency]: { original: 10, register: 9 } // fallback
        }
    }

    return (
        <div>
            <main className="flex min-h-screen flex-col">
                <Hero />
                <BenefitsOne />
                <DomainPricingTable />
                <Benefits />

                <DomainCardGrid
                    currentDomains={currentDomains.map(d => "." + d)}
                    getPricing={getPricing}
                    currency={currency}
                    currencySymbol={currencySymbol}
                    loading={loading}
                />

                <Testimonials />
                <div className="container mx-auto px-4">
                    <AIChatCTA />
                </div>
                <FAQ faqs={domainsFaqs} />
            </main>
        </div>

    )
}
