import { Button } from "@/components/ui/button"

const benefits = [
	{
		title: "Easy To Setup",
		lightIcon: "/icons/icon-easy-light.svg",
		darkIcon: "/icons/icon-easy-dark.svg",
	},
	{
		title: "Blazing Fast Speed",
		lightIcon: "/icons/icon-rocket-light.svg",
		darkIcon: "/icons/icon-rocket-dark.svg",
	},
	{
		title: "Free SSL Certificate",
		lightIcon: "/icons/icon-ssl-light.svg",
		darkIcon: "/icons/icon-ssl-dark.svg",
	},
	{
		title: "Robust & Reliable",
		lightIcon: "/icons/icon-strength-light.svg",
		darkIcon: "/icons/icon-strength-dark.svg",
	},
	{
		title: "Daily Backups",
		lightIcon: "/icons/icon-backup-light.svg",
		darkIcon: "/icons/icon-backup-dark.svg",
	},
	{
		title: "One Click Migration",
		lightIcon: "/icons/icon-migration-light.svg",
		darkIcon: "/icons/icon-migration-dark.svg",
	}
];

export function Benefits() {
	return (
		<section className="py-10 bg-background dark:bg-background" id="benefits">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-12 items-center">
					<div className="md:col-span-2">
						<h2 className="text-4xl font-bold mb-4">
							Why Is <span className="text-blue-600">HostingSpell</span> Better<br />Then The Competetion.
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Fast, secure, and affordable shared hosting—perfect for websites of all sizes.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
							{benefits.slice(0, 3).map((feature) => (
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
							{benefits.slice(3).map((feature) => (
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
							<Button size="lg" className="px-6 dark:text-white">GET SHARED HOSTING →</Button>
						</div>
					</div>

					<div className="relative justify-center hidden md:flex">
						<div className="aspect-square bg-transparent rounded-2xl p-0">
							<img
								src="/img/shared-hosting-illustration-light.png"
								alt="Shared Hostign Illustration Light"
								width={512}
								height={512}
								loading="lazy"
								decoding="async"
								className="w-[512px] h-[512px] object-contain block dark:hidden"
							/>
							<img
								src="/img/shared-hosting-illustration-dark.png"
								alt="Shared Hostign Illustration Dark"
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
