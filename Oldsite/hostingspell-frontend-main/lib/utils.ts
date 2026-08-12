import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export interface Feature {
	label: string
	info?: string // optional tooltip / extra details
}

export interface Plan {
    name: string
    caption: string
    icon: string
    features: Feature[]
    className?: string
    button?: string
    highlight?: boolean
    highlightClass?: string
    color?: string

    // Location-specific fields (optional)
    locationNames?: { [countryCode: string]: string | undefined }
    locationFeatures?: { [countryCode: string]: Feature[] | undefined }

    links?: { [countryCode: string]: string | undefined }

    pricing: {
        [countryCode: string]: {
            [currency in "INR" | "USD"]?: { [cycle: string]: string | number } | undefined
        } | undefined
    }

    // For VPS
    ram?: string
}


export interface Location {
	value: string
	code: string
	label: string
}

export interface BillingCycle {
	value: string
	label: string
}

export interface PlanGridProps {
	plans: Plan[]
	locations: Location[]
	selectedLocation: string
	selectedCurrency: "INR" | "USD"
	selectedCycle: string
	cycleOptions: BillingCycle[]
}