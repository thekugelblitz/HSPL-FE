import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import ComboHostingPageClient from "./ComboHostingPageClient";

export const metadata: Metadata = getPageMetadata("combo-hosting");

export default function Page() {
    return <ComboHostingPageClient />;
}
