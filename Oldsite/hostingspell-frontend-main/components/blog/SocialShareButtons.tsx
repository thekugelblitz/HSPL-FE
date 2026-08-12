// components/blog/SocialShareButtons.tsx
"use client"; // This makes it a Client Component

import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { useState, useEffect } from "react";
// Assuming you have a toast library like 'sonner' for notifications
// If not, you can remove toast.success/error and console.log instead
import { toast } from "sonner";

interface SocialShareButtonsProps {
    title: string;
    // It's safer to pass the slug and construct the full URL inside
    // This avoids issues with client-side window.location not being available on server
    postSlug: string;
}

export function SocialShareButtons({ title, postSlug }: SocialShareButtonsProps) {
    const [currentUrl, setCurrentUrl] = useState('');

    // Get the current URL on the client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const shareOnTwitter = () => {
        if (!currentUrl) return;
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`, "_blank");
    };

    const shareOnLinkedIn = () => {
        if (!currentUrl) return;
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`, "_blank");
    };

    const shareOnFacebook = () => {
        if (!currentUrl) return;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, "_blank");
    };

    const copyLink = async () => {
        if (!currentUrl) {
            toast.error("Could not get current page URL.");
            return;
        }
        try {
            await navigator.clipboard.writeText(currentUrl);
            toast.success("Link copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy link: ", err);
            toast.error("Failed to copy link.");
        }
    };

    return (
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={shareOnTwitter} aria-label="Share on Twitter">
                <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={shareOnLinkedIn} aria-label="Share on LinkedIn">
                <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={shareOnFacebook} aria-label="Share on Facebook">
                <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={copyLink} aria-label="Copy link">
                <Link2 className="w-5 h-5" />
            </Button>
        </div>
    );
}