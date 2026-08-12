"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Card,
} from "@/components/ui/card"
import {
	Tabs,
	TabsContent,
} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import InfoPopover from "@/components/shared/InfoPopover"
import { Info, Check } from "lucide-react";

import { ServerLocationDropdown, LocationInfo, LOCATIONS } from "./ServerLocationDropdown"
import { useCurrency } from "@/context/CurrencyContext"

type BillingCycle = "annual" | "biannual" | "triannual"

const tabLabels: { value: BillingCycle; label: string; discount?: string }[] = [
	{ value: "annual", label: "ANNUAL" },
	{ value: "biannual", label: "BI-ANNUAL", discount: "6% OFF" },
	{ value: "triannual", label: "TRI-ANNUAL", discount: "7% OFF" },
]

import { FeatureList } from "../components/FeatureList"
import { cn } from "@/lib/utils"

import {
	PLANS_COMBO_HOSTING,
	PLANS_COMPARE_COMBO_HOSTING,
	PLANS_COMPARE_COMBO_HOSTING_VALUES,
} from "@/lib/constants"

import HostingPlanComparisonTable from "@/components/pricing/HostingPlanComparisonTable"

type Feature = {
	label: string;
	info?: string; // optional
};

const plans = PLANS_COMBO_HOSTING

const features = [
	"cPanel & WHM",
	"Unlimited Traffic",
	"Truly Unlimited Performance",
	"Latest PHP Technology",
	"450+ Softaculous Apps",
	"Imunify360 Anti-virus",
	"LiteSpeed Enterprise Web Server",
	"Daily Backups",
	"Multiple Server Locations",
	"Unlimited Email Accounts",
	"Unlimited FTP Accounts",
	"Unlimited MySQL Databases"
]

export function Pricing() {
	const [tab, setTab] = useState<BillingCycle>("annual")
	const [location, setLocation] = useState<LocationInfo>(LOCATIONS[0])
	const { currency } = useCurrency()

	return (
		<section className="py-20 bg-background dark:bg-background" id="pricing">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8">
					{/* H2 + Server Location aligned in one row */}
					<div className="flex justify-center items-center flex-wrap gap-4 mb-2">
						<h2 className="text-3xl font-bold">Plans That Adapt to Your Budget</h2>

						{/* Server Location Dropdown */}
						<div className="flex items-center">
							<label htmlFor="server-location-dropdown" className="sr-only">
								Server Location
							</label>
							<ServerLocationDropdown
								selected={location}
								setSelected={setLocation}
							/>
						</div>
					</div>

					{/* Subtext */}
					<p className="text-gray-600 dark:text-gray-400">
						Choose the perfect plan for your needs
					</p>
				</div>


				<Tabs value={tab} onValueChange={(value) => setTab(value as BillingCycle)} className="w-full">
					<div className="mb-8">
						{/* Desktop Tabs - Centered & Rectangular */}
						<div className="hidden sm:flex justify-center gap-2">
							{tabLabels.map((t) => {
								const isActive = tab === t.value;

								return (
									<button
										key={t.value}
										onClick={() => setTab(t.value)}
										className={cn(
											'px-2 py-2 text-xs font-bold rounded border transition-all',
											isActive
												? 'bg-blue-500 text-white border-blue-500 dark:border-white dark:bg-white dark:text-black'
												: 'bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground'
										)}
									>
										<div className="flex items-center gap-2">
											<span>{t.label}</span>
											{t.discount && (
												<span
													className={cn(
														'px-2 py-0.5 text-[10px] font-bold rounded',
														isActive
															? 'text-white border-0 text-black bg-yellow-200 dark:text-white dark:bg-red-400 dark:border-black'
															: 'text-black dark:bg-black/5 dark:text-orange-300 dark:bg-white/10'
													)}
												>
													{t.discount}
												</span>
											)}
										</div>
									</button>
								);
							})}
						</div>

						{/* Mobile Tabs - 2 Columns */}
						<div className="grid grid-cols-1 gap-2 sm:hidden mt-4 max-w-[200px] mx-auto">
							{tabLabels.map((t) => {
								const isActive = tab === t.value;

								return (
									<button
										key={t.value}
										onClick={() => setTab(t.value)}
										className={cn(
											'px-4 py-2 text-xs font-bold rounded border transition-all',
											isActive
												? 'bg-blue-500 text-white border-blue-500 dark:bg-white dark:text-black dark:border-white'
												: 'bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground'
										)}
									>
										<div className="flex items-center gap-2">
											<span>{t.label}</span>
											{t.discount && (
												<span
													className={cn(
														'px-2 py-0.5 text-[10px] font-bold rounded',
														isActive
															? 'text-white border-0 text-black bg-yellow-200 dark:text-white dark:bg-red-400 dark:border-black'
															: 'text-black dark:bg-black/5 dark:text-orange-300 dark:bg-white/10'
													)}
												>
													{t.discount}
												</span>
											)}
										</div>
									</button>
								);
							})}
						</div>

					</div>

					<TabsContent value={tab} className="space-y-8 max-w-6xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{plans.map((plan) => {
								const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
								const currencyPricing = countryPricing && (countryPricing as Record<string, any>)[currency]
								const price = currencyPricing ? currencyPricing[tab] : "-"
								const currencySymbol = currency === "INR" ? "₹" : "$"

								return (
									<Card
										key={plan.name}
										className={cn(
											"relative p-6 shadow-md overflow-hidden border-0 hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17]",
											plan.highlight ? plan.highlightClass : plan.className ?? "bg-white border-gray-200"
										)}
									>
										{/* Top Right Icon */}
										<img
											src={plan.icon}
											width={70}
											height={70}
											alt={`${plan.name} Icon`}
											className="absolute top-0 right-0 z-10"
										/>

										<div className="space-y-4">
											<div className="flex items-center gap-3 mt-2">
												<h3 className={`text-2lg font-bold ${plan.color ?? "text-black dark:text-white"} `}>
													{plan.name} <br /> <span className=" font-bold text-black dark:text-white uppercase tracking-wide">{plan.caption}</span>
												</h3>
											</div>
											<div className="flex items-end gap-1">
												<span className="text-3xl font-bold text-black dark:text-white">
													{currencySymbol}{price}
												</span>
												<span className="text-xs text-black dark:text-white font-semibold mb-1">
													{tab === "annual" ? "/yr" : tabLabels.find(l => l.value === tab)?.label}
												</span>
											</div>

											{/* <Button
												asChild
												className={`w-full border hover:text-white bg-transparent text-xs px-6 py-2 rounded font-semibold ${plan.button ?? "border-black text-black dark:text-white hover:bg-black hover:text-white hover:border-black"}`}>
												<a
													href={plan.links?.[location.code as keyof typeof plan.links] ?? "#"}
													target="_blank"
													rel="noopener noreferrer"
												>
													VIEW PLAN
												</a>
											</Button> */}

											<a
												href={
													(() => {
														const baseLink = plan.links?.[location.code as keyof typeof plan.links] ?? "#";
														const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";
														return baseLink.includes("?")
															? `${baseLink}&${selectedCurrency}`
															: `${baseLink}?${selectedCurrency}`;
													})()
												}
												target="_blank"
												rel="noopener noreferrer"
												className={`w-full border hover:text-white bg-transparent text-xs px-6 py-2 rounded font-semibold flex items-center justify-center ${plan.button}`}
											>
												VIEW PLAN
											</a>

											<ul className="mt-4 space-y-2 text-sm text-black dark:text-white">
												{plan.features.map((feature: Feature, i: number) => (
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
					</TabsContent>
				</Tabs>

				<FeatureList features={features} />

				<div>
					<div className="text-center mb-8 my-16">
						<div className="flex justify-center items-center flex-wrap gap-4 mb-2">
							<h2 className="text-3xl font-bold">Compare Our Plans</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400">
							Easily evaluate features, pricing, and benefits across all combo hosting plans
						</p>
					</div>

					<HostingPlanComparisonTable
						featureGroups={PLANS_COMPARE_COMBO_HOSTING}
						planKeys={["EUROPA", "IO"]}
						values={PLANS_COMPARE_COMBO_HOSTING_VALUES}
						planMeta={{
							EUROPA: {
								name: "EUROPA",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
								priceInr: "₹2099/mo",
								priceUsd: "$24.49/mo",
							},
							IO: {
								name: "IO",
								badge: "Best Value",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
								priceInr: "₹2549/mo",
								priceUsd: "$29.99/mo",
							}
						}}
					/>
				</div>
			</div>
		</section>
	)
}