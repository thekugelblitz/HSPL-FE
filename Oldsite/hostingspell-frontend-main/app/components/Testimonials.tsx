import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
	{
		name: "Prasath N",
		role: "Trustpilot Review",
		company: "TechCo",
		content: "HostingSpell has been my hosting provider, and I've been consistently impressed. I've only encountered a couple of minor bugs, and their support is exceptionally quick, often replying within 15 minutes.",
		rating: 5
	},
	{
		name: "Dipti Mishra",
		role: "Trustpilot Review",
		company: "Digital Solutions",
		content: "I have been using HostingSpell for over a year now, and I must say, it has exceeded my expectations. The hosting is fast, reliable & incredibly affordable. They resolve the issue within minutes.",
		rating: 5
	},
	{
		name: "Kedar kantha",
		role: "Trustpilot Review",
		company: "Fashion Hub",
		content: "I host many travel blogs and trekking sites on hostingspell, I have around 25+ services with them and all servers are well-optimized with 100% uptime. Their tech engineers are always available on ticket support 24 by 7.",
		rating: 5
	}
]

export function Testimonials() {
	return (
		<section className="py-20 bg-background dark:bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold">What our Customers Say</h2>
					<p className="text-muted-foreground mt-4">about our services.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{testimonials.map((testimonial) => (
						<Card key={testimonial.name} className="bg-card dark:bg-card">
							<CardContent className="pt-6">
								<div className="flex gap-1 mb-4">
									{Array.from({ length: testimonial.rating }).map((_, i) => (
										<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
									))}
								</div>
								<blockquote className="text-muted-foreground mb-6">
									"{testimonial.content}"
								</blockquote>
								<div>
									<div className="font-semibold">{testimonial.name}</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.role}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
} 