import { Button } from "@/components/ui/button"

export default function DomainSearchImageSection() {
	return (
		<section
			className="relative w-full bg-[url('/img/bg-domains.png')] bg-cover bg-center py-16 text-white"
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50 z-0" />

			<div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
				{/* Top Button */}
				<Button
					variant="ghost"
					className="mb-4 text-xs sm:text-sm px-4 py-1 rounded-full border border-transparent border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500/10 transition"
				>
					AI Website/Domain Name Generator ✨
				</Button>


				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl font-bold mb-2">Lets find your website</h2>
				<p className="text-sm sm:text-base text-white/80 mb-6">
					Type any keyword related to your liking & we will find the right domain for you
				</p>

				{/* Input and Button */}
				<div className="w-full flex flex-col sm:flex-row items-center gap-3 mb-8">
					<input
						type="text"
						placeholder="Enter your desired domain name"
						className="flex-1 w-full px-4 py-3 rounded-md border border-white bg-transparent text-white placeholder-white/70"
					/>
					<Button className="w-full sm:w-auto px-6 py-3">Search Domains</Button>
				</div>

				{/* Domain Extensions Grid */}
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 text-white text-center">
					{[
						{ ext: ".com", price: "9.99 /yr" },
						{ ext: ".org", price: "9.99 /yr" },
						{ ext: ".store", price: "9.99 /yr" },
						{ ext: ".online", price: "9.99 /yr" },
						{ ext: ".shop", price: "9.99 /yr" },
						{ ext: ".info", price: "9.99 /yr" },
						{ ext: ".net", price: "9.99 /yr" },
					].map((domain, index) => (
						<div key={index}>
							<div className="text-base font-semibold">{domain.ext}</div>
							<div className="text-sm text-white/70">{domain.price}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
