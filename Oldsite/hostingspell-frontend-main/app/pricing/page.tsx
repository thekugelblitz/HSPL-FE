import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = getPageMetadata("pricing");

export default function Page() {
    return <PricingPageClient />;
}
