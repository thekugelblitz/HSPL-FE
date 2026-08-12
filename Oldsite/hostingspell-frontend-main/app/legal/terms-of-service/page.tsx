import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import TermsOfServicePageClient from "./TermsOfServicePageClient";

export const metadata: Metadata = getPageMetadata("legal-terms-of-service");

export default function Page() {
    return <TermsOfServicePageClient />;
}
