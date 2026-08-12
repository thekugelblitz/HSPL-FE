'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { usePostHog } from 'posthog-js/react'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        // TEMPORARILY DISABLED - PostHog tracking
        // Check if PostHog key is available before initializing
        const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
        
        if (!posthogKey) {
            console.log('PostHog temporarily disabled - no API key found')
            return
        }

        // Defer PostHog initialization to not block initial render
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined' && !isInitialized) {
                posthog.init(posthogKey, {
                    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://posthog.2hs.in',
                    person_profiles: 'identified_only',
                    capture_pageview: false, // We'll manually capture after load
                    capture_pageleave: true,
                    loaded: (posthog) => {
                        if (process.env.NODE_ENV === 'development') posthog.debug()
                        setIsInitialized(true)
                    },
                    // Performance optimizations
                    autocapture: false, // Disable autocapture for better performance
                    session_recording: {
                        maskAllInputs: true,
                        maskTextSelector: '*'
                    }
                })
            }
        }, 1000) // Delay initialization by 1 second

        return () => clearTimeout(timer)
    }, [isInitialized])

    return (
        <PHProvider client={posthog}>
            {children}
        </PHProvider>
    )
}
