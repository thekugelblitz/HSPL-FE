import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import GetIpPageClient from "./GetIpPageClient";

export const metadata: Metadata = getPageMetadata("tools-getip");

export default function Page() {
    return <GetIpPageClient />;
}
