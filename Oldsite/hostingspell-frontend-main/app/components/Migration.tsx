import { Button } from "@/components/ui/button"

const features = [
	{
		title: "24 / 7 / 365 Support",
		lightIcon: "/icons/icon-support-light.svg",
		darkIcon: "/icons/icon-support-dark.svg",
	},
	{
		title: "Multiple Locations",
		lightIcon: "/icons/icon-multilocation-light.svg",
		darkIcon: "/icons/icon-multilocation-dark.svg",
	},
	{
		title: "Free SSL Certificate",
		lightIcon: "/icons/icon-ssl-light.svg",
		darkIcon: "/icons/icon-ssl-dark.svg",
	},
	{
		title: "Free Migration",
		lightIcon: "/icons/icon-migration-light.svg",
		darkIcon: "/icons/icon-migration-dark.svg",
	},
	{
		title: "Daily Backups",
		lightIcon: "/icons/icon-backup-light.svg",
		darkIcon: "/icons/icon-backup-dark.svg",
	},
	{
		title: "Unlimited Email accounts",
		lightIcon: "/icons/icon-emails-light.svg",
		darkIcon: "/icons/icon-emails-dark.svg",
	},
];

export function Migration() {
	return (
		<section className="py-10 bg-background dark:bg-background" id="migration">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-12 items-center">
					<div className="md:col-span-2">
						<h2 className="text-4xl font-bold mb-4">
							Hassle-Free Cloud <span className="text-blue-600">Migration</span> to<br />Managed Hosting.
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Hassle-free migration of applications for your convenience, Get one<br />free cPanel migration by industry experts
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
							{features.slice(0, 3).map((feature) => (
								<div key={feature.title} className="flex items-center gap-3 bg-card dark:bg-card rounded-xl shadow-lg p-4">
									<div className="relative h-10 w-10">
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
									<span className="font-bold text-sm">{feature.title}</span>
								</div>
							))}
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
							{features.slice(3).map((feature) => (
								<div key={feature.title} className="flex items-center gap-3 bg-card dark:bg-card rounded-xl shadow-lg p-4">
									<div className="relative h-10 w-10">
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
									<span className="font-bold text-sm">{feature.title}</span>
								</div>
							))}
						</div>

						<div className="flex items-center gap-6 mt-2">
							<Button size="lg" className="px-6 dark:text-white">MIGRATE TODAY →</Button>
						</div>
					</div>

					<div className="relative justify-center hidden md:flex">
						<div className="aspect-square bg-transparent rounded-2xl p-0">
							<img
								src="/img/migration-illustration-light.webp"
								alt="Migration Illustration Light"
								width={512}
								height={512}
								loading="lazy"
								decoding="async"
								className="w-[512px] h-[512px] object-contain block dark:hidden"
							/>
							<img
								src="/img/migration-illustration-dark.webp"
								alt="Migration Illustration Dark"
								width={512}
								height={512}
								loading="lazy"
								decoding="async"
								className="w-[512px] h-[512px] object-contain hidden dark:block"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
