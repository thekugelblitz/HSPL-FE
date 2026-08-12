// /app/tools/dns/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import PageClient from "./PageClient";

export const metadata: Metadata = getPageMetadata("tools-dns");

export default function Page() {
    return <PageClient />;
}
