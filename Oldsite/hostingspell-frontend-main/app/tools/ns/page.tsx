import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import PageClient from "./PageClient";

export const metadata: Metadata = getPageMetadata("tools-ns");

export default function Page() {
    return <PageClient />;
}
