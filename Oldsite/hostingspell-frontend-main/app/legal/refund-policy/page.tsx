import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
import RefundPolicyPageClientt from "./RefundPolicyPageClient";

export const metadata: Metadata = getPageMetadata("legal-refund-policy");

export default function Page() {
  return <RefundPolicyPageClientt />;
}
