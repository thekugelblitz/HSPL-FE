import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import ResellerPageClient from "./ResellerPageClient";

export const metadata: Metadata = getPageMetadata("reseller");

export default function Page() {
    return <ResellerPageClient />;
}
