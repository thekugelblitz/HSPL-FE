"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/shared/FAQ";
import { Testimonials } from "../components/Testimonials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LandscapeCardBase from "@/components/shared/cards/LandscapeCardBase";
import {
    FiArrowRight,
    FiPercent
} from "@/components/icons/OptimizedIcons";
import {
    FiGift,
    FiClock,
    FiTag
} from "react-icons/fi";

interface Offer {
    id: string;
    type: "featured" | "special" | "limited";
    title: string;
    description: string;
    image: string;
    imageDark?: string; // Optional dark mode image
    validUntil?: string; // Optional. If omitted, offer has no time limit.
    discount: string;
    code?: string;
    link: string;
}

const currentOffers: Offer[] = [
    {
        id: "dotcom-domain-offer",
        type: "featured",
        title: "Get Your .COM Domain",
        description: "Grab your .COM domain today at just ₹699 (or $7.99) - limited time offer. Includes free DNS management and WHOIS privacy.",
        image: "/img/card-dotcom-light.webp",
        validUntil: "2025-09-30T23:59:59+05:30",
        discount: "Special Price",
        link: "https://manage.hostingspell.com/cart.php?a=add&domain=register"
    },
    {
        id: "new-user-hosting-offer",
        type: "special",
        title: "New User Special",
        description: "Get 10% OFF on all Hosting plans for new users. Start your website with reliable and affordable hosting today.",
        image: "/img/card-newuser-light.webp",
        discount: "10% OFF",
        link: "/pricing"
    },
    {
        id: "cyber-week-2025-offer",
        type: "featured",
        title: "Cyber Week Hosting Deal",
        description: "Save 50% on all new hosting plans your perfect time to launch.",
        image: "/img/cyberweek-offer-light.jpg",
        imageDark: "/img/cyberweek-offer-dark.jpg",
        validUntil: "2025-12-01T23:59:59+05:30",
        discount: "50% OFF",
        link: "/pricing",
        code: "CW2025"
    }
];

const faqs = [
    {
        question: "How can I claim a discount or offer?",
        answer: "Simply select the plan you want and apply the promo code (if provided) during checkout. Discounts are automatically applied if no code is required."
    },
    {
        question: "Are discounts valid for all users?",
        answer: "Some offers are available for everyone, while others (like New User Specials) are only valid for first-time customers. Please check the offer details."
    },
    {
        question: "Do offers apply to renewals as well?",
        answer: "Unless explicitly mentioned, discounts are valid only for the first billing cycle. Regular renewal charges will apply after the offer period."
    },
    {
        question: "Can I combine multiple offers or coupon codes?",
        answer: "No. Only one offer or coupon code can be applied per order. Choose the offer that gives you the best value."
    },
    {
        question: "Is there any refund policy on discounted purchases?",
        answer: "Yes. Shared Hosting plans are covered under our 7-day refund policy. However, VPS, Dedicated Servers, and domain registrations are non-refundable due to registry rules."
    },
    {
        question: "What happens if I upgrade during an active discount?",
        answer: "If you upgrade, the discount will not carry forward. The new plan will be billed at its standard rate unless another active offer is available."
    },
    {
        question: "Are domain discounts available with hosting?",
        answer: "Yes. Some hosting plans include a free domain or special pricing on domains like .COM. These offers vary by promotion."
    },
    {
        question: "When do current offers expire?",
        answer: "Each offer has a validity date mentioned. Make sure to complete your purchase before the offer expires to secure the discount."
    }
];

const faqIntro = `Explore our latest offers and discounts on hosting and domains. Save more on your first purchase with limited-time deals and exclusive promotions.`;


// Helper functions for IST time calculations
function formatTimeRemaining(validUntil?: string): string {
    if (!validUntil) {
        return "";
    }
    const now = new Date();
    const istOffset = 330; // IST is UTC+5:30 (330 minutes)
    const targetDate = new Date(validUntil);

    // Adjust for IST
    const istNow = new Date(now.getTime() + (istOffset * 60000));
    const timeRemaining = targetDate.getTime() - istNow.getTime();

    if (timeRemaining <= 0) {
        return "Expired";
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 2) {
        return `${days} days left`;
    }

    if (days > 0) {
        return `${days}d ${hours}h left`;
    }

    if (hours > 0) {
        return `${hours} hours left`;
    }

    return "Ending soon";
}

function isOfferValid(validUntil?: string): boolean {
    if (!validUntil) {
        return true;
    }
    const now = new Date();
    const istOffset = 330; // IST is UTC+5:30 (330 minutes)
    const istNow = new Date(now.getTime() + (istOffset * 60000));
    const targetDate = new Date(validUntil);
    return targetDate.getTime() > istNow.getTime();
}

function OfferCard({ offer }: { offer: Offer }) {
    const timeRemaining = formatTimeRemaining(offer.validUntil);
    const hasTime = Boolean(offer.validUntil);
    const isValid = isOfferValid(offer.validUntil);

    if (!isValid) return null;

    const isUrgent = hasTime && (timeRemaining.includes('hours') || timeRemaining.includes('Ending'));

    // Featured offers reuse the Landscape card layout from Hosting cards
    if (offer.type === "featured") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <LandscapeCardBase
                    image={offer.image}
                    imagedark={offer.imageDark}
                    variant="full"
                    useGridSpan={false}
                    priority
                    overlayTopRight={
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                            {offer.discount}
                        </div>
                    }
                    overlayBottomLeft={
                        hasTime ? (
                            <div className={`flex items-center gap-2 ${isUrgent ? 'bg-red-500' : 'bg-black/70'} text-white px-3 py-1 rounded-full text-sm`}>
                                <FiClock className="w-4 h-4" />
                                <span>{timeRemaining}</span>
                            </div>
                        ) : undefined
                    }
                >
                    <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                        {offer.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground mt-3">
                        {offer.description}
                    </p>

                    {offer.code ? (
                        <div className="mt-4 flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg w-full">
                            <FiTag className="w-5 h-5 text-blue-500" />
                            <div className="flex-1">
                                <p className="text-sm font-medium">Promo Code:</p>
                                <p className="text-lg font-bold text-blue-500">{offer.code}</p>
                            </div>
                            <Button
                                onClick={() => offer.code && navigator.clipboard.writeText(offer.code)}
                                variant="outline"
                                size="sm"
                            >
                                Copy
                            </Button>
                        </div>
                    ) : (
                        <div className="mt-4 flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg w-full">
                            <FiTag className="w-5 h-5 text-green-600" />
                            <p className="text-sm font-medium text-green-700 dark:text-green-300">No code needed discount auto-applied at checkout</p>
                        </div>
                    )}

                    <a href={offer.link}>
                        <button className="mt-6 px-6 py-3 text-base font-semibold rounded-sm bg-blue-500 text-white hover:bg-blue-600 w-fit">
                            CLAIM OFFER
                        </button>
                    </a>
                </LandscapeCardBase>
            </motion.div>
        );
    }

    // Other offers keep the portrait card style
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className="rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow mt-0 pt-0">
                <div className="relative">
                    {/* Image */}
                    <div className="relative w-full aspect-square">
                        {offer.imageDark ? (
                            <>
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    className="object-cover dark:hidden"
                                    priority
                                />
                                <Image
                                    src={offer.imageDark}
                                    alt={offer.title}
                                    fill
                                    className="object-cover hidden dark:block"
                                    priority
                                />
                            </>
                        ) : (
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                        <div className="absolute inset-0" />
                    </div>

                    {/* Offer badge */}
                    <div className="absolute top-4 right-4">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-xl">
                            {offer.discount}
                        </div>
                    </div>

                    {/* Time remaining badge */}
                    {hasTime && (
                        <div className={`absolute bottom-4 left-4 flex items-center gap-2 
                            ${isUrgent ? 'bg-red-500' : 'bg-black/70'} 
                            text-white px-3 py-1 rounded-full text-sm`}
                        >
                            <FiClock className="w-4 h-4" />
                            <span>{timeRemaining}</span>
                        </div>
                    )}
                </div>

                <CardHeader>
                    <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{offer.description}</p>

                    {offer.code ? (
                        <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <FiTag className="w-5 h-5 text-blue-500" />
                            <div className="flex-1">
                                <p className="text-sm font-medium">Promo Code:</p>
                                <p className="text-lg font-bold text-blue-500">{offer.code}</p>
                            </div>
                            <Button
                                onClick={() => {
                                    if (offer.code) navigator.clipboard.writeText(offer.code);
                                }}
                                variant="outline"
                                size="sm"
                            >
                                Copy
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                            <FiTag className="w-5 h-5 text-green-600" />
                            <p className="text-sm font-medium text-green-700 dark:text-green-300">No code needed discount auto-applied at checkout</p>
                        </div>
                    )}

                    <a href={offer.link}>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-sm text-white" size="lg">
                            <span>CLAIM OFFER</span>
                            <FiArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </a>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default function OffersPage() {
    // Filter out expired offers first
    const validOffers = currentOffers.filter(offer => isOfferValid(offer.validUntil));
    const featuredOffers = validOffers.filter(offer => offer.type === "featured");
    const otherOffers = validOffers.filter(offer => offer.type !== "featured");

    return (
        <main className="min-h-screen py-36">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold mb-4">Current Offers & Deals</h1>
                        <p className="text-xl text-muted-foreground">
                            Exclusive discounts and special promotions on our hosting services
                        </p>
                    </motion.div>
                </div>

                {validOffers.length > 0 ? (
                    <>
                        {featuredOffers.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <FiGift className="w-6 h-6 text-blue-500" />
                                    Featured Offers
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                                    {featuredOffers.map(offer => (
                                        <OfferCard key={offer.id} offer={offer} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {otherOffers.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <FiPercent className="w-6 h-6 text-blue-500" />
                                    More Deals
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {otherOffers.map(offer => (
                                        <OfferCard key={offer.id} offer={offer} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🎁</div>
                        <h2 className="text-2xl font-bold mb-4">No Active Offers</h2>
                        <p className="text-xl text-muted-foreground">
                            Stay tuned! New offers and deals are coming soon.
                        </p>
                    </div>
                )}
            </div>

            <Testimonials />
            <FAQ faqs={faqs} introText={faqIntro} />
        </main>
    );
}