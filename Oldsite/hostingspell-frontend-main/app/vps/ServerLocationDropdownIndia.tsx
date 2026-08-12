"use client"

import { useState } from "react"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown } from "lucide-react"
import CountryFlag from "react-country-flag"

export const LOCATIONS = [
	{
		code: "IND",
		label: "India",
		countryCode: "IN",
		currencies: [
			{ symbol: "₹", code: "INR" },
			{ symbol: "$", code: "USD" }
		]
	},
]

export type LocationInfo = typeof LOCATIONS[0]

interface ServerLocationDropdownProps {
	selected: LocationInfo
	setSelected: (location: LocationInfo) => void
}

export function ServerLocationDropdownIndia({
	selected,
	setSelected,
}: ServerLocationDropdownProps) {

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					className="flex items-center gap-2 rounded-full bg-[#e0e0e0] dark:bg-white shadow-inner border border-gray-300 transition-all"
					aria-label={`Selected server location is ${selected.label}`}
				>
					<span className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white">
						<CountryFlag
							countryCode={selected.countryCode}
							svg
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								objectPosition: "center",
							}}
							alt={selected.label}
						/>
					</span>

					<ChevronDown className="w-4 h-4 text-black mr-2" aria-hidden="true" />
				</button>
			</PopoverTrigger>

			<PopoverContent align="end" className="w-64 p-0 rounded-xl shadow-xl border-0">
				<div className="rounded-xl p-4 bg-white text-black dark:bg-neutral-900 dark:text-white">
					<div className="flex items-center justify-between mb-3">
						<div className="text-xs font-semibold tracking-wide opacity-90">
							SERVER LOCATION
						</div>
					</div>

					<div className="grid grid-cols-1 gap-2">
						{LOCATIONS.map((loc) => (
							<button
								key={loc.code}
								className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors w-full text-left border-2 ${selected.code === loc.code
									? "bg-gray-100 border-blue-500 dark:bg-neutral-800"
									: "bg-white border-gray-200 hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-800/70"
									}`}
								onClick={() => setSelected(loc)}
								aria-pressed={selected.code === loc.code}
								aria-label={`Select ${loc.label} as server location`}
							>
								<span className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-white">
									<CountryFlag
										countryCode={loc.countryCode}
										svg
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											objectPosition: "center",
										}}
										alt={loc.label}
									/>
								</span>
								<span className="font-medium text-sm flex-1 text-black dark:text-white">
									{loc.code}
								</span>
							</button>
						))}
					</div>
				</div>
			</PopoverContent>

		</Popover>
	)
}
