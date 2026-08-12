import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = getPageMetadata("home");

export default function Page() {
	return <HomePageClient />;
}
