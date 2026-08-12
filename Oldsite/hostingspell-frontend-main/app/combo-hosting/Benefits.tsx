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
		<div>
			<section className="py-10 bg-background dark:bg-background" id="benefits">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4">
							Why Is <span className="text-blue-600">HostingSpell</span> Better<br />Then The Competetion.
						</h2>
					</div>
					<div className="gap-12 items-center justify-center mx-auto">
						<div className="md:col-span-2">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:max-w-full md:max-w-4xl mx-auto">
								{benefits.slice(0, 4).map((feature) => (
									<div key={feature.title} className="bg-card dark:bg-card rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
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
										<p className="text-xs text-muted-foreground mt-1">Regular Security Patching</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

	)
}
