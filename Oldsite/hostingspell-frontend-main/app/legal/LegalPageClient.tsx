import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Cookie, CreditCard, LockKeyhole } from "lucide-react"
import Link from "next/link"

import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
export const metadata: Metadata = getPageMetadata("legal");

const legalDocuments = [
    {
        title: "Privacy Policy",
        description: "Learn how we collect, use, and protect your personal information.",
        icon: Shield,
        href: "/legal/privacy-policy",
        lastUpdated: "March 18, 2024"
    },
    {
        title: "Terms of Service",
        description: "Please read these terms carefully before using our services.",
        icon: FileText,
        href: "/legal/terms-of-service",
        lastUpdated: "July 09, 2026"
    },
    {
        title: "Refund Policy",
        description: "Learn about our refund policies and procedures.",
        icon: CreditCard,
        href: "/legal/refund-policy",
        lastUpdated: "March 18, 2024"
    }
]

export default function LegalPageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className="container mx-auto px-4 mt-16 md:pt-8 md:py-24">
                {/* Header Section */}
                <div className=" px-4 mt-16 md:pt-8 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-[728px] mx-auto text-center">
                            <h1 className="text-4xl font-bold mb-4">Legal Documents</h1>
                            <p className="text-lg text-muted-foreground">
                                Important information about our policies and terms
                            </p>
                        </div>
                    </div>
                </div>

                {/* Legal Documents Grid */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-[728px] mx-auto">
                        <div className="grid gap-6">
                            {legalDocuments.map((doc) => {
                                const Icon = doc.icon
                                return (
                                    <Link key={doc.href} href={doc.href}>
                                        <Card className="hover:bg-accent/50 transition-colors">
                                            <CardHeader>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                                        <Icon className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <CardTitle>{doc.title}</CardTitle>
                                                        <p className="text-sm text-muted-foreground mt-1">
                                                            Last updated: {doc.lastUpdated}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{doc.description}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
} 