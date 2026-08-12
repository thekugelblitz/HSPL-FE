import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import CloudHostignPageClient from "./CloudHostignPageClient";

export const metadata: Metadata = getPageMetadata("cloud-hosting");

export default function Page() {
    return <CloudHostignPageClient />;
}
