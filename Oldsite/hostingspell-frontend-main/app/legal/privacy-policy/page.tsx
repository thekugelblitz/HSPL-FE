import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

export const metadata: Metadata = getPageMetadata("legal-privacy-policy");

export default function Page() {
  return <PrivacyPolicyPageClient />;
}
