import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/seoHelper";
import { ENABLE_VPS_INDIA } from "@/lib/featureFlags";
import IndiaVpsPageClient from "./IndiaVpsPageClient";

export const metadata: Metadata = getPageMetadata("vps-india");

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "HostingSpell India VPS Hosting",
    description:
        "High-performance India VPS hosting with NVMe SSD storage, AMD EPYC hardware, KVM virtualization, and low latency across Indian cities.",
    brand: {
        "@type": "Brand",
        name: "HostingSpell",
    },
    offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "899",
        highPrice: "6999",
        offerCount: "4",
        availability: "https://schema.org/InStock",
        url: "https://hostingspell.com/vps/india",
    },
    areaServed: {
        "@type": "Country",
        name: "India",
    },
};

export default function Page() {
    if (!ENABLE_VPS_INDIA) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <IndiaVpsPageClient />
        </>
    );
}
