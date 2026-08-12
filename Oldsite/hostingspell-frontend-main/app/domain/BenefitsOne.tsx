import { Button } from "@/components/ui/button"

const checklistItems = [
	{
		number: "1",
		title: "Envision Your Perfect Domain",
		description: "A name that represents your brand or business & it should be short & memorable",
		tags: ["brand identity", "name ideas"],
	},
	{
		number: "2",
		title: "Discover Availability and Options",
		description: "A name that represents your brand or business & it should be short & memorable",
		tags: ["domain search", "extensions"],
	},
	{
		number: "3",
		title: "Ensure Relevance and Optimize",
		description: "A name that represents your brand or business & it should be short & memorable",
		tags: ["audience fit", "SEO"],
	},
	{
		number: "4",
		title: "Secure and Register Your Domain",
		description: "A name that represents your brand or business & it should be short & memorable",
		tags: ["purchase", "registration"],
	},
	{
		number: "5",
		title: "Verify and Future-Proof Your Choice",
		description: "A name that represents your brand or business & it should be short & memorable",
		tags: ["trademark check", "longevity"],
	},
];


// Anything in-between ** will display as blue text color
const benefits = [
	{
		title: "Get a *Free* Domain *!*",
		description: "Get a free domain for your website when you select a 36 Months Hosting plan, domains like .com , .in , .net etc for free!",
		link: "/combo-hosting",
		button: "GET FREE DOMAIN"
	},
	{
		title: "Free *Domain* Transfer *!*",
		description: "Do you already have bought a domain, we will help you transfer it to our platform for Free",
		link: "https://manage.hostingspell.com/cart.php?a=add&domain=transfer",
		button: "TRANSFER DOMAIN"
	}
];

export function BenefitsOne() {
	return (
		<>
			<section className="py-4 px-4" id="domain-checklist">

				<div className="bg-card dark:bg-card rounded-xl px-6 py-10 max-w-6xl mx-auto">
					<div className="max-w-6xl mx-auto text-center mb-10">
						<h2 className="text-3xl font-semibold">
							Before You get a <span className="text-blue-500">Domain</span> Remember.
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
						{checklistItems.slice(0, 3).map((item) => (
							<div key={item.number} className="relative pl-12">
								{/* Ghost Number */}
								<div className="absolute top-0 left-0 right-4 text-[64px] lg:text-[80px] font-black text-blue-100 leading-none pointer-events-none select-none">
									{item.number}
								</div>
								<h3 className="text-sm ms-4 font-semibold text-blue-600 mb-1">{item.title}</h3>
								<p className="text-xs ms-4 text-muted-foreground">{item.description}</p>
								<div className="flex ms-4 gap-3 mt-2 text-[10px] text-muted-foreground flex-wrap">
									{item.tags.map((tag, i) => (
										<span key={i}>{tag}</span>
									))}
								</div>
							</div>
						))}
					</div>

					{/* Last 2 centered manually */}
					<div className="flex md:justify-center gap-10 mt-10 flex-wrap">
						{checklistItems.slice(3).map((item) => (
							<div key={item.number} className="relative pl-12 max-w-sm">
								{/* Ghost Number */}
								<div className="absolute top-0 left-0 text-[64px] lg:text-[80px] font-black text-blue-100 leading-none pointer-events-none select-none">
									{item.number}
								</div>
								<h3 className="text-sm ms-4 font-semibold text-blue-600 mb-1">{item.title}</h3>
								<p className="text-xs ms-4 text-muted-foreground">{item.description}</p>
								<div className="flex ms-4 gap-3 mt-2 text-[10px] text-muted-foreground flex-wrap">
									{item.tags.map((tag, i) => (
										<span key={i}>{tag}</span>
									))}
								</div>
							</div>
						))}
					</div>

					<div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
						<a href="https://manage.hostingspell.com/cart.php?a=add&domain=register">
							<Button className="bg-blue-600 text-white hover:bg-blue-700 px-6">SEARCH DOMAINS</Button></a>
						<a href="/contact"><Button variant="outline" className="px-6">CONTACT US</Button></a>
					</div>
				</div>
			</section>
			<section className="bg-background dark:bg-background" id="benefits">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto px-4">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
							{benefits.slice(0, 6).map((feature) => (
								<div
									key={feature.title}
									className="bg-card dark:bg-card rounded shadow-lg p-6 flex flex-col items-center text-center"
								>
									<p className="font-bold text-xl text-center">
										{feature.title.split(/(\*[^*]+\*)/g).map((part, i) =>
											part.startsWith("*") && part.endsWith("*") ? (
												<span key={i} className="text-blue-500">{part.slice(1, -1)}</span>
											) : (
												<span key={i}>{part}</span>
											)
										)}
									</p>

									<p className="text-xs text-muted-foreground mt-2 min-h-8">{feature.description}</p>

									<a href={feature.link}>
										<Button
											className="w-full sm:w-auto mt-4 px-6 bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white
                   								dark:bg-transparent dark:text-white dark:border dark:border-white dark:hover:bg-white/10"
										>
											{feature.button}
										</Button>
									</a>

								</div>
							))}
						</div>
					</div>

				</div>
			</section>
		</>
	)
}
