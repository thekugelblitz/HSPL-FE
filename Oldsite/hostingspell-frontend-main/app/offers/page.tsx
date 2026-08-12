import { Metadata } from "next";
import OffersPageClient from "./OffersPageClient";
import { getPageMetadata } from "@/lib/seoHelper";

export const metadata: Metadata = getPageMetadata("offers");

export default function OffersPage() {
    return <OffersPageClient />;
}