'use client'

import { Button } from "@/components/ui/button"
import posthog from "posthog-js"

export default function ChatButton() {
    const handleChatToggle = () => {
        // Track event in PostHog
        posthog.capture('clicked_chat_with_us', {
            label: 'CHAT WITH US',
            source: 'tawk_widget',
            page: typeof window !== 'undefined' ? window.location.pathname : undefined,
        })

        // Toggle Tawk.to chat widget
        if (typeof window !== "undefined" && (window as any).Tawk_API) {
            (window as any).Tawk_API.toggle()
        }
    }

    return (

        <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-foreground"
            onClick={handleChatToggle}
        >
            CHAT WITH US
        </Button>
    )
}
