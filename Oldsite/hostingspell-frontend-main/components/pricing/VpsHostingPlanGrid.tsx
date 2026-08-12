import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn, PlanGridProps } from "@/lib/utils"
import { FeatureList } from "@/components/shared/FeatureList"
import { useCurrency } from "@/context/CurrencyContext"

const VpsHostingPlanGrid: React.FC<PlanGridProps> = ({
    plans,
    locations,
    selectedLocation,
    selectedCurrency,
    selectedCycle,
    cycleOptions,
}) => {
    const countryCode = locations.find(loc => loc.value === selectedLocation)?.code
    const currencySymbol = selectedCurrency === "INR" ? "₹" : "$"
    const { currency } = useCurrency()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map((plan) => {
                const pricing = plan.pricing?.[countryCode ?? ""]?.[selectedCurrency]?.[selectedCycle] ?? "-"
                const cycleLabel = cycleOptions.find(c => c.value === selectedCycle)?.label ?? ""

                return (
                    <Card
                        key={plan.name}
                        className={cn(
                            "relative p-6 shadow-md overflow-hidden border hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17]",
                            plan.highlight ? plan.highlightClass : plan.className ?? "bg-white border-gray-200"
                        )}
                    >
                        <img
                            src={plan.icon}
                            width={70}
                            height={70}
                            alt={`${plan.name} Icon`}
                            className="absolute top-0 right-0 z-10"
                        />

                        <div className="space-y-4">
                            {/* Name + caption */}
                            <h3 className={`text-xl font-bold leading-tight ${plan.color ?? "text-black dark:text-white"}`}>
                                <span>{plan.name.split(" ")[0]}</span><br />
                                <span>{plan.name.split(" ").slice(1).join(" ")}</span>
                            </h3>

                            <p className="text-xs font-semibold text-black dark:text-white uppercase tracking-wide">
                                {plan.caption}
                            </p>

                            {/* RAM */}
                            <div className="flex items-center gap-3 mt-2">
                                <h3 className="text-3xl font-bold text-black dark:text-white">
                                    {plan.ram}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className="flex items-end gap-1">
                                <span className="text-sm font-bold text-black dark:text-white">
                                    {currencySymbol}{pricing}
                                </span>
                                <span className="text-xs text-black dark:text-white font-semibold mb-1">
                                    / {cycleLabel}
                                </span>
                            </div>

                            {/* Button */}
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


                            {/* Features */}
                            <FeatureList features={plan.features} />
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default VpsHostingPlanGrid
