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
import { FeatureList } from "../components/FeatureList"
import { ServerLocationDropdown, LocationInfo, LOCATIONS } from "./ServerLocationDropdown"
import { useCurrency } from "@/context/CurrencyContext"
import HostingPlanComparisonTable from "@/components/pricing/HostingPlanComparisonTable"
import { cn } from "@/lib/utils"
import { FeatureList as VpsFeatureList } from "@/components/shared/FeatureList"
import {
	PLANS_VPS_HOSTING,
	PLANS_COMPARE_VPS_HOSTING,
	PLANS_COMPARE_VPS_HOSTING_VALUES
} from "@/lib/constants";

import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seoHelper";
export const metadata: Metadata = getPageMetadata("vps");

const vpsTypes = [
	{ id: 'kvm', label: 'KVM VPS Hosting', plans: PLANS_VPS_HOSTING }
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

type BillingCycle = "monthly" | "quarterly" | "semiannually" | "annual"

const tabLabels: { value: BillingCycle; label: string; discount?: string }[] = [
	{ value: 'monthly', label: 'MONTHLY' },
	{ value: "quarterly", label: "QUARTERLY", discount: "17% OFF" },
	{ value: "semiannually", label: "SEMI-ANNUAL", discount: "17% OFF" },
	{ value: "annual", label: "ANNUAL", discount: "17% OFF" },
]

export function Pricing() {
	const [tab, setTab] = useState<BillingCycle>("monthly")
	const [location, setLocation] = useState<LocationInfo>(LOCATIONS[0])
	const [vpsType, setVpsType] = useState('kvm')
	const { currency } = useCurrency()

	const selectedVpsType = vpsTypes.find(type => type.id === vpsType)
	const plans = selectedVpsType?.plans || PLANS_VPS_HOSTING

	return (
		<section className="bg-background dark:bg-background" id="pricing">
			<div className="container mx-auto px-4">
				{/* VPS Type Tabs */}

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
						<div className="grid grid-cols-1 max-w-[200px] mx-auto gap-2 sm:hidden mt-4">
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
										<div className="flex flex-col items-center gap-1">
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
						{vpsType === 'kvm' && (
							<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
								{PLANS_VPS_HOSTING.map((plan) => {
									const countryPricing = plan.pricing[location.code as keyof typeof plan.pricing]
									const currencyPricing = countryPricing && (countryPricing as Record<string, any>)[currency]
									const price = currencyPricing ? currencyPricing[tab] : "-"
									const currencySymbol = currency === "INR" ? "₹" : "$"

									return (
										<Card
											key={plan.name}
											className={`relative p-6 shadow-md overflow-hidden border hover:border-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl dark:bg-[#060A17] ${plan.className ?? "bg-white border-gray-200"}`}
										>
											<img
												src={plan.icon}
												width={70}
												height={70}
												alt={`${plan.name} Icon`}
												className="absolute top-0 right-0 z-10"
											/>

											<div className="space-y-4">
												<h3 className={`text-xl font-bold leading-tight ${plan.color ?? "text-black dark:text-white"}`}>
													<span>{plan.name.split(" ")[0]}</span>
													<br />
													<span>{plan.name.split(" ").slice(1).join(" ")}</span>
												</h3>

												<p className="text-xs font-semibold text-black dark:text-white uppercase tracking-wide">
													{plan.caption}
												</p>
												<div className="flex items-center gap-3 mt-2">
													<h3 className="text-3xl font-bold text-black dark:text-white">
														{plan.ram}
													</h3>
												</div>
												<div className="flex items-end gap-1">
													<span className="text-sm font-bold text-black dark:text-white">
														{currencySymbol}{price}
													</span>
													<span className="text-xs text-black dark:text-white font-semibold mb-1">
														{tab === "monthly"
															? "/mo"
															: tab === "annual"
																? "/yr"
																: tabLabels.find(l => l.value === tab)?.label}
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
															const baseLink = plan.links?.[location.code as keyof typeof plan.links] ?? "#";
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

												<VpsFeatureList features={plan.features} />
											</div>
										</Card>
									)
								})}
							</div>
						)}
					</TabsContent>
				</Tabs>

				{vpsType === 'kvm' && (
					<>
						<FeatureList features={features} />

						<div>
							<div className="text-center mb-8 my-16">
								<div className="flex justify-center items-center flex-wrap gap-4 mb-2">
									<h2 className="text-3xl font-bold">Compare Our Plans</h2>
								</div>
								<p className="text-gray-600 dark:text-gray-400">
									Easily evaluate features, pricing, and benefits across all VPS hosting plans
								</p>
							</div>

							<HostingPlanComparisonTable
								featureGroups={PLANS_COMPARE_VPS_HOSTING}
								planKeys={["CONSOLUSENTER", "CONSOLUSMODEL", "CONSOLUSHOST", "CONSOLUSBEAST", "CONSOLUSGRAND", "CONSOLUSLEGEND"]}
								values={PLANS_COMPARE_VPS_HOSTING_VALUES}
								planMeta={{
									CONSOLUSENTER: {
										name: "CONSOLUS ENTER",
										ctaLabel: "Get Started",
										ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
										priceInr: "₹899/mo",
										priceUsd: "$10/mo",
									},
									CONSOLUSMODEL: {
										name: "CONSOLUS MODEL",
										badge: "Best Value",
										ctaLabel: "Get Started",
										ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
										priceInr: "₹1799/mo",
										priceUsd: "$20/mo",
									},
									CONSOLUSHOST: {
										name: "CONSOLUS HOST",
										ctaLabel: "Get Started",
										ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
										priceInr: "₹3499/mo",
										priceUsd: "$40/mo",
									},
									CONSOLUSBEAST: {
										name: "CONSOLUS BEAST",
										ctaLabel: "Get Started",
										ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
										priceInr: "₹6999/mo",
										priceUsd: "$80/mo",
									},
									CONSOLUSGRAND: {
										name: "CONSOLUS GRAND",
										ctaLabel: "Get Started",
										ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-grand",
										priceInr: "₹13999/mo",
										priceUsd: "$160/mo",
									},
									CONSOLUSLEGEND: {
										name: "CONSOLUS LEGEND",
										ctaLabel: "Get Started",
										ctaHref: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-legend",
										priceInr: "₹27200/mo",
										priceUsd: "$320/mo",
									}
								}}
							/>
						</div>
					</>
				)}
			</div>
		</section>
	)
}
