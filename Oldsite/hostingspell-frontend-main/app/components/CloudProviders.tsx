import Image from "next/image"
import { Button } from "@/components/ui/button"

const PROVIDERS = [
	{
		name: "Linode",
		logo: "/cloud-logos/linode.svg",
	},
	{
		name: "DigitalOcean",
		logo: "/cloud-logos/digitalocean.svg",
	},
	{
		name: "VULTR",
		logo: "/cloud-logos/vultr.svg",
	},
	{
		name: "AWS",
		logo: "/cloud-logos/aws.svg",
	},
	{
		name: "GoogleCloud",
		logo: "/cloud-logos/googlecloud.svg",
	}
]

export function CloudProviders() {
	return (
		<section className="py-20 bg-background dark:bg-background">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					{/* Left: Text */}
					<div className="flex-1 max-w-lg">
						<h2 className="text-4xl font-bold mb-4">
							Host on Your <span className="text-blue-600">Preferred</span> Cloud Server.
						</h2>
						<p className="text-muted-foreground mb-8">
							Cloud hosting on top providers ensures maximum performance security and high availability
						</p>
						<Button size="lg" className="px-6 dark:text-white">GET STARTED →</Button>
					</div>
					{/* Right: Logos Grid */}
					<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-xl">
						{PROVIDERS.map((provider, i) => (
							<div
								key={provider.name}
								className="bg-card dark:bg-card rounded-xl shadow-md flex flex-col items-center justify-center p-4 h-32 min-w-[140px] hover:shadow-lg transition-shadow col-span-1"
							>
								<Image
									src={provider.logo}
									alt={provider.name + " logo"}
									width={80}
									height={40}
									className="object-contain mb-2"
								/>
								<span className="font-medium text-gray-700 dark:text-gray-200 text-sm mt-2">{provider.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
} 