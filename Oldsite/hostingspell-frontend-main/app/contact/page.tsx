import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = getPageMetadata("contact");

export default function Page() {
    return <ContactPageClient />;
}
