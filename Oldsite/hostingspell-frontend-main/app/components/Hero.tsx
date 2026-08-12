import { Button } from "@/components/ui/button"

export function Hero() {
	return (
		<section className="pb-20 md:pb-32 bg-background dark:bg-background">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					{/* Priority LCP Element */}
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
						Powerful Experience Created From{" "}
						<span className="text-blue-600">cPanel On Linode</span>{" "}
						| Digital Ocean
					</h1>

					<p className="mt-6 text-xl text-muted-foreground text-balance">
						Focus on your business and avoid all the tech hosting hassles. Our managed hosting
						guarantees unmatched performance, reliability and choice with 24/7 support!
					</p>

					<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button size="lg" className="w-full sm:w-auto dark:text-white">
							VIEW PLANS →
						</Button>
						<Button size="lg" variant="outline" className="w-full sm:w-auto">
							CHAT WITH US
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
