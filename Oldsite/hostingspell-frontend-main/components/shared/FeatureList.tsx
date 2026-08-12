import { Check, Info } from "lucide-react"
import InfoPopover from "@/components/shared/InfoPopover"
import { Feature } from "@/lib/utils"

interface FeatureListProps {
    features: Feature[]
}

export function FeatureList({ features }: FeatureListProps) {
    return (
        <ul className="mt-4 space-y-2 text-sm text-black dark:text-white">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 text-black dark:text-white" />
                    <span className="flex items-center gap-1">
                        {feature.label}

                        {feature.info && (
                            <InfoPopover content={feature.info} />
                        )}
                    </span>
                </li>
            ))}
        </ul>
    )
}
