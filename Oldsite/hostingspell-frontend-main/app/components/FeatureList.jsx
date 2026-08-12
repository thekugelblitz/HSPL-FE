import { Check } from "lucide-react"

export function FeatureList({ features }) {
    return (
        <div className="relative w-full max-w-full mx-auto bg-white dark:bg-[#060A17] rounded-xl shadow-md px-6 py-8 mt-16">
            {/* Centered + icon */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#060A17] rounded-full dark:border-gray-700 w-10 h-10 flex items-center justify-center text-xl font-bold text-black dark:text-white">
                +
            </div>

            {/* Title */}
            <h3 className="text-base mb-6 text-black dark:text-white text-start">
                All Above plans also include.
            </h3>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm text-gray-700 dark:text-gray-200">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-1 text-black dark:text-white" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}