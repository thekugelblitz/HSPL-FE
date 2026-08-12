// /app/tools/dns/PageClient.tsx

"use client";

import DNSCheckerPage from "./DNSCheckerPage";
import { FAQ } from "@/components/shared/FAQ";
import { AIChatCTA } from "@/components/shared/AIChatCTA";
import { Testimonials } from "../../components/Testimonials";

export const faqs = [
    {
        question: "What is DNS propagation?",
        answer: "DNS propagation is the process where updated DNS records (such as A, CNAME, MX, or TXT) are distributed across global DNS servers. Our DNS propagation check tool lets you verify these updates worldwide."
    },
    {
        question: "How long does DNS propagation take?",
        answer: "DNS propagation usually takes a few minutes to 48 hours depending on TTL settings, ISP cache refresh, and DNS server updates. Using our DNS lookup tool, you can monitor the progress in real time."
    },
    {
        question: "Which DNS records can I check with this tool?",
        answer: "Our DNS propagation checker supports multiple record types including A, AAAA, CNAME, MX, TXT, and NS. This helps you confirm whether your domain’s DNS changes have updated across the internet."
    },
    {
        question: "Why do I see different DNS results in different locations?",
        answer: "Because DNS servers around the world refresh at different speeds, some regions may still show old records while others display updated ones. The global DNS checker helps you see these differences instantly."
    },
    {
        question: "How can I confirm if my DNS changes are fully propagated?",
        answer: "When the same updated DNS records appear consistently across most locations checked by our DNS propagation tool, it means your changes have successfully propagated worldwide."
    },
    {
        question: "Does the DNS propagation check tool change my DNS settings?",
        answer: "No. This DNS lookup tool is read-only. It only queries public DNS servers to show you live results and does not modify or control your domain’s DNS settings."
    },
    {
        question: "What should I do if DNS propagation seems stuck?",
        answer: "If DNS changes are not updating, check your TTL values and verify your domain’s nameserver configuration. If issues persist, contact your DNS hosting provider for support."
    },
    {
        question: "Can I speed up DNS propagation?",
        answer: "You cannot directly speed up global DNS propagation, but setting a lower TTL (Time To Live) before making changes can help updates appear faster across DNS servers in the future."
    }
];

const faqIntro = `DNS propagation is the time it takes for DNS record updates to spread across global servers. 
With our DNS Propagation Check Tool, you can instantly check if your domain's A, CNAME, MX, TXT, and NS records 
have updated worldwide.`

export default function PageClient({ initialDomain = "", initialType = "A" }) {
    return (
        <main className="flex min-h-screen flex-col">
            <DNSCheckerPage initialDomain={initialDomain} initialType={initialType} />
            <div className="container mx-auto px-4">
                <AIChatCTA />
            </div>
            <Testimonials />
            <FAQ faqs={faqs} introText={faqIntro} />
        </main>
    );
}
