import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Cloud, Zap } from "lucide-react"

const features = [
	{
		title: "World Class Hosting",
		description: "We pick the best hardware and network for your efficiency and performance.",
		icon: Cloud
	},
	{
		title: "Money back Guarantee",
		description: "Feel free to try our provide 7 days money back guarantee Easy refund.",
		icon: Shield
	},
	{
		title: "Lightning Fast Speed",
		description: "We will provide better testing system, than your previous site hosting provider.",
		icon: Zap
	}
]

export function Features() {
	return (
		<section className="py-20 bg-background dark:bg-background" id="features">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold">Fast, Secure &</h2>
					<h3 className="text-3xl font-bold text-blue-600">Reliable Cloud Servers</h3>
					<p className="text-muted-foreground mt-4">
						Experience best possible web hosting for your website
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{features.map((feature) => (
						<Card key={feature.title} className="border-none shadow-lg bg-card dark:bg-card">
							<CardHeader>
								<div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
									<feature.icon className="h-6 w-6 text-blue-600" />
								</div>
								<CardTitle>{feature.title}</CardTitle>
								<CardDescription>{feature.description}</CardDescription>
							</CardHeader>
							<CardContent>

							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
} 