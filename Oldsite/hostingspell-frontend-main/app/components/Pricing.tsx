"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { ServerLocationDropdown } from "./ServerLocationDropdown"

const plans = [
	{
		name: "CUMULUS PLUS",
		price: 319,
		color: "bg-blue-100 border-blue-500",
		highlight: false,
		badge: "",
		description: "Perfect for small businesses and startups",
		features: [
			"Host 1 Website",
			"20GB SSD Storage",
			"1 CPU Core | 1GB RAM",
			"Unlimited Bandwidth",
		],
	},
	{
		name: "NIMBUS ULTIMATE",
		price: 719,
		color: "bg-purple-100 border-purple-500",
		highlight: true,
		badge: "Most Popular",
		description: "Ideal for growing businesses",
		features: [
			"Host Unlimited Websites",
			"50GB SSD Storage",
			"2 CPU Cores | 2GB RAM",
			"Unlimited Bandwidth",
		],
	},
	{
		name: "STRATUS PRO",
		price: 479,
		color: "bg-indigo-100 border-indigo-500",
		highlight: false,
		badge: "",
		description: "Best for professional websites",
		features: [
			"Host 5 Websites",
			"30GB SSD Storage",
			"2 CPU Cores | 1.5GB RAM",
			"Unlimited Bandwidth",
		],
	},
]

const multipliers = {
	monthly: 1,
	annual: 12 * 0.8,
	biannual: 24 * 0.7,
	triennial: 36 * 0.6,
}

const tabLabels = [
	{ value: "monthly", label: "Monthly" },
	{ value: "annual", label: "Annual [20% OFF]" },
	{ value: "biannual", label: "Bi-Annual [30% OFF]" },
	{ value: "triennial", label: "Tri-Annual [50% OFF]" },
]

export function Pricing() {
	const [tab, setTab] = useState("monthly")

	return (
		<section className="py-20 bg-background dark:bg-background" id="pricing">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold">Plans That Adapt to Your Budget</h2>
					<p className="text-gray-600 mt-4">
						Choose the perfect plan for your needs
					</p>
				</div>

				<Tabs value={tab} onValueChange={setTab} className="w-full">
					<div className="flex flex-wrap justify-center items-center mb-8 gap-2 relative">
						{/* Desktop tabs */}
						<TabsList className="hidden md:flex">
							{tabLabels.map((t) => (
								<TabsTrigger key={t.value} value={t.value}>
									{t.label}
								</TabsTrigger>
							))}
						</TabsList>

						{/* Mobile dropdowns in one row */}
						<div className="flex w-full flex-col gap-2 md:hidden">
							<div className="flex gap-2 items-center">
								{/* Tab selection label */}
								<label htmlFor="billing-cycle-select" className="sr-only">
									Billing cycle
								</label>
								<select
									id="billing-cycle-select"
									className="flex-1 border border-input rounded py-2 text-sm text-gray-800"
									value={tab}
									onChange={(e) => setTab(e.target.value)}
									aria-label="Select billing cycle"
								>
									{tabLabels.map((t) => (
										<option key={t.value} value={t.value}>
											{t.label}
										</option>
									))}
								</select>

								{/* Server Location Dropdown with visible label */}
								<div className="flex items-center">
									<label htmlFor="server-location-dropdown" className="sr-only">
										Server Location
									</label>
									<ServerLocationDropdown />
								</div>
							</div>
						</div>
					</div>

					{tabLabels.map((t) => (
						<TabsContent key={t.value} value={t.value} className="space-y-8">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{plans.map((plan) => {
									const price = Math.round(
										plan.price * multipliers[t.value as keyof typeof multipliers]
									)
									return (
										<Card
											key={plan.name}
											className={`relative border-2 ${plan.color} bg-card dark:bg-card rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.highlight ? "ring-2 ring-purple-400 scale-105 z-10" : ""
												}`}
										>
											<CardHeader className="pb-2">
												<div className="flex items-center gap-2">
													<CardTitle className="text-lg font-bold tracking-wide">
														{plan.name}
													</CardTitle>
													{plan.badge && (
														<Badge
															variant="secondary"
															className="bg-purple-700 text-white ml-2"
														>
															{plan.badge}
														</Badge>
													)}
												</div>
												<CardDescription>{plan.description}</CardDescription>
												<div className="mt-4 flex items-end gap-2">
													<span className="text-4xl font-bold text-blue-700">
														₹{price}
													</span>
													<span className="text-muted-foreground">
														{tab === "monthly"
															? "/mo"
															: t.label.replace("-", " ")}
													</span>
												</div>
											</CardHeader>
											<CardContent>
												<ul className="space-y-3 mt-2">
													{plan.features.map((feature) => (
														<li
															key={feature}
															className="flex items-center gap-2"
														>
															<Check className="h-4 w-4 text-green-500" />
															<span className="text-sm">{feature}</span>
														</li>
													))}
												</ul>
											</CardContent>
											<CardFooter>
												<Button
													className={`w-full font-semibold ${plan.highlight
														? "bg-purple-600 hover:bg-purple-700 text-white"
														: "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"
														}`}
												>
													View Plan
												</Button>
											</CardFooter>
										</Card>
									)
								})}
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	)
}
