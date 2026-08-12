"use client"

import { useState } from "react"
import {
	Card,
} from "@/components/ui/card"
import {
	Tabs,
	TabsContent
} from "@/components/ui/tabs"
import { Check } from "lucide-react"

import InfoPopover from "@/components/shared/InfoPopover"
import { ServerLocationDropdown, LocationInfo, LOCATIONS } from "./ServerLocationDropdown"
import { useCurrency } from "@/context/CurrencyContext"
import HostingPlanComparisonTable from "@/components/pricing/HostingPlanComparisonTable"
import { FeatureList } from "../components/FeatureList"
import { cn } from "@/lib/utils"

type Feature = {
	label: string;
	info?: string; // optional
};

import {
	PLANS_RESELLER_HOSTING,
	PLANS_COMPARE_RESELLER_HOSTING,
	PLANS_COMPARE_RESELLER_HOSTING_VALUES,
	PLANS_COMPARE_RESELLER_CLOUD_HOSTING_VALUES
} from "@/lib/constants-reseller";

const plans = PLANS_RESELLER_HOSTING

type BillingCycle = "monthly" | "annual"

const tabLabels: { value: BillingCycle; label: string; discount?: string }[] = [
	{ value: 'monthly', label: 'MONTHLY' },
	{ value: "annual", label: "ANNUAL", discount: "20% OFF" },
]

const features = [
	"cPanel & WHM",
	"Unlimited Traffic",
	"Truly Unlimited Performance",
	"Latest PHP Technology",
	"450+ Softaculous Apps",
	"Imunify360 Anti-virus",
	"NGINX AUTOM8N Engine",
	"Daily Backups",
	"Multiple Server Locations",
]

export function Pricing() {
	const [tab, setTab] = useState<BillingCycle>("monthly")
	const [location, setLocation] = useState<LocationInfo>(LOCATIONS[0])
	const { currency } = useCurrency()

	return (
		<section className="bg-background dark:bg-background" id="pricing">
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

					<TabsContent value={tab} className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
							{plans
								.filter((plan) => {
									// Only show plans that have pricing for the selected location
									const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
									return countryPricing !== undefined
								})
								.map((plan) => {
									const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
									const currencyPricing = countryPricing && (countryPricing as Record<string, any>)[currency]
									const price = currencyPricing ? currencyPricing[tab] : "-"
									const currencySymbol = currency === "INR" ? "₹" : "$"

									// Get location-specific features and plan name
									const locationFeatures = plan.locationFeatures?.[location.code as keyof typeof plan.locationFeatures] || []
									const locationPlanName = plan.locationNames?.[location.code as keyof typeof plan.locationNames] || plan.name

									return (
										<Card
											key={`${plan.name}-${plan.caption}-${location.code}`}
											className={`relative p-6 shadow-md overflow-hidden border hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17] ${plan.className}`}
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
														{currencySymbol}{price}
													</span>
													<span className="text-xs text-black dark:text-white font-semibold mb-1">
														{tab === "monthly" ? "/mo" : tabLabels.find(l => l.value === tab)?.label}
													</span>
												</div>

												<a
													href={(() => {
														const baseLink = plan.links?.[location.code as keyof typeof plan.links] ?? "#";
														const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";
														return baseLink.includes("?")
															? `${baseLink}&${selectedCurrency}`
															: `${baseLink}?${selectedCurrency}`;
													})()}
													target="_blank"
													rel="noopener noreferrer"
													className={`w-full border hover:text-white bg-transparent text-xs px-6 py-2 rounded font-semibold flex items-center justify-center ${plan.button}`}
												>
													VIEW PLAN
												</a>


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
					</TabsContent>
				</Tabs>

				<FeatureList features={features} />

				<div>
					<div className="text-center mb-8 my-16">
						<div className="flex justify-center items-center flex-wrap gap-4 mb-2">
							<h2 className="text-3xl font-bold">Compare Our Plans</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-400">
							Easily evaluate features, pricing, and benefits across all Standard Reseller hosting plans
						</p>
					</div>

					<HostingPlanComparisonTable
						featureGroups={PLANS_COMPARE_RESELLER_HOSTING}
						planKeys={["HS_INITIATIVE", "HS_EARLDOM", "HS_DUKEDOM", "HS_KINGDOM"]}
						values={PLANS_COMPARE_RESELLER_HOSTING_VALUES}
						planMeta={{
							HS_INITIATIVE: {
								name: "HS INITIATIVE",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
								priceInr: "₹1199/mo",
								priceUsd: "$12.99/mo",
							},
							HS_EARLDOM: {
								name: "HS EARLDOM",
								badge: "Best Value",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
								priceInr: "₹2299/mo",
								priceUsd: "$25.99/mo",
							},
							HS_DUKEDOM: {
								name: "HS DUKEDOM",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
								priceInr: "₹4599/mo",
								priceUsd: "$51.99/mo",
							},
							HS_KINGDOM: {
								name: "HS KINGDOM",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
								priceInr: "₹6899/mo",
								priceUsd: "$77.99/mo",
							},
						}}
					/>

					{/* {location.code === "IND" || location.code === "NET" ? (
						// Standard RESELLER comparison
						<HostingPlanComparisonTable
							featureGroups={PLANS_COMPARE_RESELLER_HOSTING}
							planKeys={["HS_INITIATIVE", "HS_EARLDOM", "HS_DUKEDOM", "HS_KINGDOM"]}
							values={PLANS_COMPARE_RESELLER_HOSTING_VALUES}
							planMeta={{
								HS_INITIATIVE: {
									name: "HS INITIATIVE",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
									priceInr: "₹1199/mo",
									priceUsd: "$12.99/mo",
								},
								HS_EARLDOM: {
									name: "HS EARLDOM",
									badge: "Best Value",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
									priceInr: "₹2299/mo",
									priceUsd: "$25.99/mo",
								},
								HS_DUKEDOM: {
									name: "HS DUKEDOM",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
									priceInr: "₹4599/mo",
									priceUsd: "$51.99/mo",
								},
								HS_KINGDOM: {
									name: "HS KINGDOM",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
									priceInr: "₹6899/mo",
									priceUsd: "$77.99/mo",
								},
							}}
						/>
					) : (
						// RESELLER_CLOUD comparison
						<HostingPlanComparisonTable
							featureGroups={PLANS_COMPARE_RESELLER_HOSTING}
							planKeys={["HS_INITIATIVE", "HS_EARLDOM", "HS_DUKEDOM", "HS_KINGDOM"]}
							values={PLANS_COMPARE_RESELLER_CLOUD_HOSTING_VALUES}
							planMeta={{
								HS_INITIATIVE: {
									name: "HS INITIATIVE CLOUD",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-startup",
									priceInr: "₹1599/mo",
									priceUsd: "$17.99/mo",
								},
								HS_EARLDOM: {
									name: "HS EARLDOM CLOUD",
									badge: "Best Value",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-pro",
									priceInr: "₹2799/mo",
									priceUsd: "$31.99/mo",
								},
								HS_DUKEDOM: {
									name: "HS DUKEDOM CLOUD",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-business",
									priceInr: "₹4999/mo",
									priceUsd: "$55.99/mo",
								},
								HS_KINGDOM: {
									name: "HS KINGDOM CLOUD",
									ctaLabel: "Get Started",
									ctaHref: "https://manage.hostingspell.com/store/reseller-cloud-hosting/rc-enterprise",
									priceInr: "₹8999/mo",
									priceUsd: "$99.99/mo",
								},
							}}
						/>
					)} */}
				</div>

			</div>
		</section>
	)
}
