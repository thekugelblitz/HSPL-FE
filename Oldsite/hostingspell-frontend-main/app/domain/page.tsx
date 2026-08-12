import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import DomainsPageClient from "./DomainsPageClient";

export const metadata: Metadata = getPageMetadata("domain");

export default function Page() {
    return <DomainsPageClient />;
}
