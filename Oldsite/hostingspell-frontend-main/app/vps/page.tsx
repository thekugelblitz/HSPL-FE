import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import VpsHostingPageClient from "./VpsHostingPageClient";

export const metadata: Metadata = getPageMetadata("vps");

export default function Page() {
    return <VpsHostingPageClient />;
}
