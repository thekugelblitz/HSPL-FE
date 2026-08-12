import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import RPremiumHostingPageClient from "./PremiumHostingPageClient";

export const metadata: Metadata = getPageMetadata("premium-hosting");

export default function Page() {
    return <RPremiumHostingPageClient />;
}
