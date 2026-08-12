import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import LegalPageClient from "./LegalPageClient";

export const metadata: Metadata = getPageMetadata("legal");

export default function Page() {
  return <LegalPageClient />;
}
