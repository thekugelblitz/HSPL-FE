"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import InfoPopover from "@/components/shared/InfoPopover"
import { Info, Check } from "lucide-react";
import { FeatureList } from "../components/FeatureList"
import { cn } from "@/lib/utils"
import HostingPlanComparisonTable from "@/components/pricing/HostingPlanComparisonTable"

import {
	PLANS_CLOUD_HOSTING,
	PLANS_COMPARE_CLOUD_HOSTING,
	PLANS_COMPARE_CLOUD_HOSTING_VALUES,
} from "@/lib/constants";

import { ServerLocationDropdown, LocationInfo, LOCATIONS } from "./ServerLocationDropdown"
import { useCurrency } from "@/context/CurrencyContext"

type Feature = {
	label: string;
	info?: string; // optional
};

type BillingCycle = "monthly" | "annual" | "biannual" | "triannual"

const tabLabels: { value: BillingCycle; label: string; discount?: string }[] = [
	{ value: "monthly", label: "MONTHLY" },
	{ value: "annual", label: "ANNUAL", discount: "16% OFF" },
	{ value: "biannual", label: "BI-ANNUAL", discount: "26% OFF" },
	{ value: "triannual", label: "TRI-ANNUAL", discount: "31% OFF" },
]

const features = [
	"Friendly 24/7/365 Support",
	"Daily Auto Backup",
	"Smart-hosts for Mail Delivery",
	"Redis, Memcached and OpCach",
	"Free Migration",
	"LiteSpeed WordPress Cache",
	"Imunify360 Anti-virus",
	"Dedicated Firewalls + DDoS",
	"HTTP/2 Enabled Servers",
	"Unlimited Application Installation",
	"LiteSpeed Web Server",
	"Latest AMD Epyc™ Processors",
	"Automated Daily Backups",
	"Regular Security Patching",
	"100% Uptime Mark",
	"cPanel® Control Panel Powered",
]

const plans = PLANS_CLOUD_HOSTING

export function Pricing() {
	const [tab, setTab] = useState<BillingCycle>("monthly")
	const [location, setLocation] = useState<LocationInfo>(LOCATIONS[0])
	const { currency } = useCurrency()

	return (
		<section className="py-20 bg-background dark:bg-background" id="pricing">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8">
					<div className="flex justify-center items-center flex-wrap gap-4 mb-2">
						<h2 className="text-3xl font-bold">Plans That Adapt to Your Budget</h2>
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
					<p className="text-gray-600 dark:text-gray-400">
						Choose the perfect plan for your needs
					</p>
				</div>

				<Tabs value={tab} onValueChange={(value) => setTab(value as BillingCycle)} className="w-full">
					<div className="mb-8 grid grid-cols-1 md:flex justify-center gap-2 max-w-[200px] sm:max-w-none mx-auto xs:w-full xs:mx-0">

						{tabLabels.map((t) => {
							const isActive = tab === t.value
							return (
								<button
									key={t.value}
									onClick={() => setTab(t.value)}
									className={cn(
										"px-4 py-2 text-xs font-bold rounded border transition-all",
										isActive
											? "bg-blue-500 text-white border-blue-500 dark:border-white dark:bg-white dark:text-black"
											: "bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground"
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
							)
						})}
					</div>

					<TabsContent value={tab} className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
							{plans.map((plan) => {
								const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
								const currencyPricing = countryPricing && (countryPricing as Record<string, any>)[currency]
								const price = currencyPricing ? currencyPricing[tab] : "-"
								const currencySymbol = currency === "INR" ? "₹" : "$"
								var selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";
								plan.link = `${plan.link}&${selectedCurrency}`;

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
													{currencySymbol}{price}
												</span>
												<span className="text-xs text-black dark:text-white font-semibold mb-1">
													{tab === "monthly" ? "/mo" : tabLabels.find(l => l.value === tab)?.label}
												</span>
											</div>

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
							Easily evaluate features, pricing, and benefits across all cloud hosting plans
						</p>
					</div>

					<HostingPlanComparisonTable
						featureGroups={PLANS_COMPARE_CLOUD_HOSTING}
						planKeys={["VENUS", "MARS", "SATURN", "JUPITER"]}
						values={PLANS_COMPARE_CLOUD_HOSTING_VALUES}
						planMeta={{
							VENUS: {
								name: "VENUS",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
								priceInr: "₹99/mo",
								priceUsd: "$1.29/mo",
							},
							MARS: {
								name: "MARS",
								badge: "Best Value",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/mars",
								priceInr: "₹149/mo",
								priceUsd: "$1.69/mo",
							},
							SATURN: {
								name: "SATURN",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns",
								priceInr: "₹169/mo",
								priceUsd: "$1.99/mo",
							},
							JUPITER: {
								name: "JUPITER",
								ctaLabel: "Get Started",
								ctaHref: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter",
								priceInr: "₹249/mo",
								priceUsd: "$2.99/mo",
							},
						}}
					/>
				</div>
			</div>
		</section>
	)
}