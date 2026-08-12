import { Button } from "@/components/ui/button"

const benefits = [
	{
		title: "Domain Locking",
		description: "Lock your domain to prevent unauthorized transfers.",
		lightIcon: "/icons/icon-locking-light.svg",
		darkIcon: "/icons/icon-locking-dark.svg",
	},
	{
		title: "Privacy Protection",
		description: "Your personal info will be secure and protected.",
		lightIcon: "/icons/icon-eye-light.svg",
		darkIcon: "/icons/icon-eye-dark.svg",
	},
	{
		title: "Easy Management",
		description: "Manage your products with our easy to use control panel & dashboard.",
		lightIcon: "/icons/icon-check-light.svg",
		darkIcon: "/icons/icon-check-dark.svg",
	},
	{
		title: "Affordability",
		description: "Most affordable prices in the industry and even more affordable to renew.",
		lightIcon: "/icons/icon-moneyback-alt-light.svg",
		darkIcon: "/icons/icon-moneyback-alt-dark.svg",
	},
	{
		title: "Great Selection",
		description: "Choose from a wide range of selection of extensions for your website.",
		lightIcon: "/icons/icon-apps-light.svg",
		darkIcon: "/icons/icon-apps-dark.svg",
	},
	{
		title: "Auto-renewal",
		description: "Never Lose your domain when it expires even if you forget to renew it!",
		lightIcon: "/icons/icon-renew-light.svg",
		darkIcon: "/icons/icon-renew-dark.svg",
	}
];

export function Benefits() {
	return (
		<section className="py-10 bg-background dark:bg-background" id="benefits">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">
						Why <span className="text-blue-600">Get Domains</span><br />From HostingSpell
					</h2>
				</div>

				<div className="max-w-4xl mx-auto px-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{benefits.slice(0, 6).map((feature) => (
							<div
								key={feature.title}
								className="bg-card dark:bg-card rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
							>
								<div className="relative h-10 w-10 mb-3">
									<img
										src={feature.lightIcon}
										alt={feature.title}
										width={40}
										height={40}
										loading="lazy"
										decoding="async"
										className="block dark:hidden h-10 w-10"
									/>
									<img
										src={feature.darkIcon}
										alt={feature.title}
										width={40}
										height={40}
										loading="lazy"
										decoding="async"
										className="hidden dark:block h-10 w-10 absolute top-0 left-0"
									/>
								</div>
								<p className="font-bold text-sm">{feature.title}</p>
								<p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
							</div>
						))}
					</div>
				</div>

			</div>
		</section>

	)
}
