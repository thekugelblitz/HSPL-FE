import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = getPageMetadata("about");

export default function AboutPage() {
	return <AboutPageClient />;
}