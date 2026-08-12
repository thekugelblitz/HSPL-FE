import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import PythonHostingPageClient from "./PythonHostingPageClient";

export const metadata: Metadata = getPageMetadata("python-hosting");

export default function Page() {
    return <PythonHostingPageClient />;
}
