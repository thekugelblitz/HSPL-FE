import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlanGridProps } from "@/lib/utils"
import { FeatureList } from "@/components/shared/FeatureList"

const HostingPlanGrid: React.FC<PlanGridProps> = ({
    plans,
    locations,
    selectedLocation,
    selectedCurrency,
    selectedCycle,
    cycleOptions,
}) => {
    const countryCode = locations.find(loc => loc.value === selectedLocation)?.code

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map((plan) => {
                const pricing = plan.pricing?.[countryCode ?? ""]?.[selectedCurrency]?.[selectedCycle] ?? "-"
                const cycleLabel = cycleOptions.find(c => c.value === selectedCycle)?.label ?? ""

                return (
                    <Card
                        key={plan.name}
                        className={`relative p-6 shadow-md overflow-hidden border hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17] ${plan.className}`}
                    >
                        <img
                            src={plan.icon}
                            width={70}
                            height={70}
                            alt={`${plan.name} Icon`}
                            className="absolute top-0 right-0 z-10"
                        />

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mt-2">
                                <h3 className="text-lg font-bold text-black dark:text-white">
                                    {plan.name}
                                </h3>
                            </div>
                            <p className="text-xs font-semibold text-black dark:text-white uppercase tracking-wide">
                                {plan.caption}
                            </p>
                            <div className="flex items-end gap-1">
                                <span className="text-3xl font-bold text-black dark:text-white">
                                    {(selectedCurrency === "INR" ? "₹" : "$")}{pricing}
                                </span>
                                <span className="text-muted-foreground"> / {cycleLabel}</span>
                            </div>

                            <Button
                                asChild
                                className={`w-full border hover:text-white bg-transparent text-xs px-6 py-2 rounded font-semibold ${plan.button ?? "border-black text-black dark:text-white hover:bg-black hover:text-white hover:border-black"
                                    }`}
                            >
                                <a
                                    href={plan.links?.[countryCode as keyof typeof plan.links] ?? "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    VIEW PLAN
                                </a>
                            </Button>

                            <FeatureList features={plan.features} />
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default HostingPlanGrid