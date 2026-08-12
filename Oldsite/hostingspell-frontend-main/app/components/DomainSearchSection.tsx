"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCurrency } from "@/context/CurrencyContext"
import Link from "next/link";

export default function DomainSearchSection() {
	const [query, setQuery] = useState("")
	const { currency } = useCurrency()
	const selectedCurrency = currency === "INR" ? "currency=2" : "currency=1";

	const handleSearch = () => {
		if (query.trim()) {
			window.location.href = `https://manage.hostingspell.com/cart.php?a=add&${selectedCurrency}&domain=register&query=${encodeURIComponent(query.trim())}`
		}
	}

	const handleAiRedirect = () => {
		window.location.href = "/domain#ai-domain-generator"
	}

	const domainExtensions = [
		{ ext: ".com", price: { USD: "$ 12/year", INR: "₹ 937/year" } },
		{ ext: ".in", price: { USD: "$ 8/year", INR: "₹ 624/year" } },
		{ ext: ".org", price: { USD: "$ 10/year", INR: "₹ 803/year" } },
		{ ext: ".xyz", price: { USD: "$ 3/year", INR: "₹ 178/year" } },
		{ ext: ".net", price: { USD: "$ 14/year", INR: "₹ 1115/year" } },
		{ ext: ".info", price: { USD: "$ 4/year", INR: "₹ 267/year" } },
	]

	return (
		<section className="relative w-full py-16 text-white bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-lg">
			<div className="max-w-4xl mx-auto px-4 text-center">

				{/* Top Button */}
				<a href="/domain#ai-domain-generator">
					<Button
						variant="ghost"
						className="mb-4 text-xs sm:text-sm px-4 py-1 rounded-full border border-purple-200 text-purple-200 dark:border-purple-400 dark:text-purple-400 hover:bg-white hover:text-white hover:bg-purple-500/10 transition"
					>
						AI Website/Domain Name Generator ✨
					</Button>
				</a>

				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl font-bold mb-2">Let's find your website</h2>
				<p className="text-sm sm:text-base text-white/80 mb-6">
					Type any keyword related to your liking & we will find the right domain for you
				</p>

				{/* Input and Button */}
				<div className="w-full flex flex-col sm:flex-row items-center gap-3 mb-8">
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSearch()
						}}
						placeholder="Enter your desired domain name"
						className="flex-1 w-full min-h-[48px] px-4 rounded-md border 
							bg-white text-black placeholder-black/50 
							dark:bg-transparent dark:text-white dark:placeholder-white/70 
							border-black/10 dark:border-white/40"
					/>
					<Button
						onClick={handleSearch}
						className="w-full sm:w-auto h-[48px] px-6 bg-transparent text-white border border-white
							dark:bg-transparent dark:text-white dark:border dark:border-white 
							hover:bg-white hover:text-black dark:hover:bg-white/10"
					>
						Search Domains
					</Button>
				</div>

				{/* Domain Extensions Grid */}
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-white text-center">
					{domainExtensions.map((domain, index) => (
						<div key={index}>
							<div className="text-base font-semibold">{domain.ext}</div>
							<div className="text-sm text-white/70">{domain.price[currency]}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
