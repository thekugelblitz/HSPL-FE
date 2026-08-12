import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import NodeJsHostingPageClient from "./NodeJsHostingPageClient";

export const metadata: Metadata = getPageMetadata("nodejs-hosting");

export default function Page() {
    return <NodeJsHostingPageClient />;
}
