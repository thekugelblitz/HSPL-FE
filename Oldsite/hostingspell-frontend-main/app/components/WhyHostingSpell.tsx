import Image from 'next/image'

const features = [
	{ title: "24 / 7 / 365 Support", icon: "icon-support" },
	{ title: "100% Uptime Mark", icon: "icon-uptime" },
	{ title: "Multiple Locations", icon: "icon-multilocation" },
	{ title: "Free Migration", icon: "icon-migration" },
	{ title: "Free SSL Certificate", icon: "icon-ssl" },
	{ title: "Free Domain", icon: "icon-web" },
	{ title: "Malware Protection", icon: "icon-protection" },
	{ title: "Antivirus", icon: "icon-virus" },
	{ title: "cPanel Hosting", icon: "icon-cpanel" },
	{ title: "Firewall Support", icon: "icon-firewall" },
	{ title: "Money Back Guarantee", icon: "icon-moneyback" },
	{ title: "Daily Backups", icon: "icon-backup" }
];

export default function WhyHostingSpell() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Why HostingSpell</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white dark:bg-slate-800 rounded-lg px-4 py-5 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 shadow-sm hover:shadow-md transition"
						>
							<div className="relative w-10 h-10 shrink-0">
								<Image
									src={`/icons/${feature.icon}-light.svg`}
									alt={feature.title}
									fill
									className="dark:hidden object-contain"
								/>
								<Image
									src={`/icons/${feature.icon}-dark.svg`}
									alt={feature.title}
									fill
									className="hidden dark:block object-contain"
								/>
							</div>
							<h3 className="text-sm font-medium">{feature.title}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
