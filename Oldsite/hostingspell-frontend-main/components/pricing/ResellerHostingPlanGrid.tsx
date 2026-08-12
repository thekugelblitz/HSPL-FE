import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react";
import InfoPopover from "@/components/shared/InfoPopover"
import { cn, Location, BillingCycle } from "@/lib/utils"
import { useCurrency } from "@/context/CurrencyContext"

type Feature = {
    label: string;
    info?: string; // optional
};

export interface Plan {
    name: string
    caption: string
    icon: string
    features?: Feature[]
    locationFeatures?: {
        [countryCode: string]: Feature[] | undefined
    }
    locationNames?: {
        [countryCode: string]: string | undefined
    }
    className?: string
    button?: string
    highlight?: boolean
    highlightClass?: string
    color?: string
    links?: {
        [countryCode: string]: string | undefined
    }
    pricing: Partial<{
        [countryCode: string]: Partial<{
            [currency in "INR" | "USD"]: Record<string, string | number>
        }>
    }>
    ram?: string
}

interface ResellerHostingPlanGridProps {
    plans: Plan[]
    locations: Location[]
    selectedLocation: string
    selectedCurrency: "INR" | "USD"
    selectedCycle: string
    cycleOptions: BillingCycle[]
}

const ResellerHostingPlanGrid: React.FC<ResellerHostingPlanGridProps> = ({
    plans,
    locations,
    selectedLocation,
    selectedCurrency,
    selectedCycle,
    cycleOptions,
}) => {
    const countryCode = locations.find(loc => loc.value === selectedLocation)?.code
    const { currency } = useCurrency()

    return (
        <div className="grid gap-8 justify-center [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(4,minmax(0,1fr))]">
            {plans
                .filter((plan) => {
                    // Only show plans that have pricing for the selected location
                    const countryPricing = plan.pricing[countryCode ?? ""]
                    return countryPricing !== undefined
                })
                .map((plan) => {
                    const pricing = plan.pricing?.[countryCode ?? ""]?.[selectedCurrency]?.[selectedCycle] ?? "-"
                    const cycleLabel = cycleOptions.find(c => c.value === selectedCycle)?.label ?? ""

                    // Get location-specific features and plan name
                    const locationFeatures = plan.locationFeatures?.[countryCode ?? ""] || plan.features || []
                    const locationPlanName = plan.locationNames?.[countryCode ?? ""] || plan.name
                    const currencySymbol = selectedCurrency === "INR" ? "₹" : "$"

                    return (
                        <Card
                            key={`${plan.name}-${plan.caption}-${countryCode}`}
                            className={cn(
                                "relative p-6 shadow-md overflow-hidden border hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17]",
                                plan.highlight ? plan.highlightClass : plan.className ?? "bg-white border-gray-200"
                            )}
                        >
                            <img
                                src={plan.icon}
                                width={70}
                                height={70}
                                alt={`${locationPlanName} Icon`}
                                className="absolute top-0 right-0 z-10"
                            />

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mt-2">
                                    <h3 className="text-lg font-bold text-black dark:text-white">
                                        {locationPlanName}
                                    </h3>
                                </div>
                                <p className="text-xs font-semibold text-black dark:text-white uppercase tracking-wide">
                                    {plan.caption}
                                </p>
                                <div className="flex items-end gap-1">
                                    <span className="text-3xl font-bold text-black dark:text-white">
                                        {currencySymbol}{pricing}
                                    </span>
                                    <span className="text-xs text-black dark:text-white font-semibold mb-1">
                                        {selectedCycle === "monthly" ? "/mo" : cycleLabel}
                                    </span>
                                </div>

                                <Button
                                    asChild
                                    className={`w-full border hover:text-white bg-transparent text-xs px-6 py-2 rounded font-semibold ${plan.button ??
                                        "border-black text-black dark:text-white hover:bg-black hover:text-white hover:border-black"
                                        }`}
                                >
                                    <a
                                        href={(() => {
                                            const baseLink = plan.links?.[countryCode as keyof typeof plan.links] ?? "#";
                                            const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";
                                            return baseLink.includes("?")
                                                ? `${baseLink}&${selectedCurrency}`
                                                : `${baseLink}?${selectedCurrency}`;
                                        })()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        VIEW PLAN
                                    </a>
                                </Button>


                                {/* <ul className="mt-4 space-y-2 text-sm text-black dark:text-white">
                                    {locationFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 mt-1 text-black dark:text-white" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul> */}

                                <ul className="mt-4 space-y-2 text-sm text-black dark:text-white">
                                    {locationFeatures.map((feature: Feature, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 mt-1 text-black dark:text-white" />

                                            <span className="flex items-center gap-1">
                                                {feature.label}

                                                {typeof feature.info === "string" && feature.info.length > 0 && (
                                                    <InfoPopover content={feature.info} />
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        </Card>
                    )
                })}
        </div>
    )
}

export default ResellerHostingPlanGrid