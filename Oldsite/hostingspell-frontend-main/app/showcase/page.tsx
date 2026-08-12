import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/seoHelper";
import { SHOWCASE_ENABLED } from "@/lib/constants-showcase";
import ShowcasePageClient from "./ShowcasePageClient";

export const metadata: Metadata = getPageMetadata("showcase");

export default function ShowcasePage() {
  if (!SHOWCASE_ENABLED) {
    notFound();
  }

  return <ShowcasePageClient />;
}
