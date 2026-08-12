import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import WordPressHostingPageClient from "./WordPressHostingPageClient";

export const metadata: Metadata = getPageMetadata("wordpress-hosting");

export default function Page() {
    return <WordPressHostingPageClient />;
}
