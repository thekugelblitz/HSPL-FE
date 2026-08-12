import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
	{
		title: "Blazing Fast Storage",
		lightIcon: "/icons/icon-storage-light.svg",
		darkIcon: "/icons/icon-storage-dark.svg",
	},
	{
		title: "Powerful Performance",
		lightIcon: "/icons/icon-cpu-light.svg",
		darkIcon: "/icons/icon-cpu-dark.svg",
	},
	{
		title: "High-Speed Memory",
		lightIcon: "/icons/icon-memory-light.svg",
		darkIcon: "/icons/icon-memory-dark.svg",
	},
	{
		title: "Operating Systems",
		lightIcon: "/icons/icon-os-light.svg",
		darkIcon: "/icons/icon-os-dark.svg",
	}
];

export function Benefits() {
	return (
		<section className="py-10 bg-background dark:bg-background" id="benefits">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">
						Fast, Secure &<br></br><span className="text-blue-600">Reliable</span> VPS Servers.
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
				
				{/* VPS Apps Section */}
				<div className="mt-16 text-center">
					<h3 className="text-2xl font-bold mb-4">Deploy Open-Source Apps on Your VPS</h3>
					<p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
						Choose from 40+ popular open-source applications and deploy them easily on your VPS. 
						Each app is optimized for VPS environments with detailed documentation and system requirements.
					</p>
					<Link 
						href="/vps/apps"
						className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
					>
						Browse VPS Apps
					</Link>
				</div>
			</div>
		</section>
	)
}
