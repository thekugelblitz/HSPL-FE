import Link from 'next/link'
import Image from 'next/image'
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from '@/components/icons/OptimizedIcons'

export function Footer() {
	return (
		<footer className="relative text-white pt-12 pb-6 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 dark:from-[#08163C] dark:via-[#102A6A] dark:to-[#17368B] dark:bg-gradient-to-br">
			{/* Line Pattern (top right) */}
			<div className="container mx-auto px-4">
				{/* Top: Logo, Mission, Payment Methods */}
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
					<div className="flex flex-col gap-2">
						<Link href="/" className="flex flex-col gap-2">
							<div className="flex items-center gap-2 mb-2">
								{/* Logo */}
								<Image src="/logo-light.png" alt="HostingSpell" height={100} width={200} className="object-contain" />
							</div>
							<p className="text-sm opacity-80 max-w-2xl">
								We're on a mission to make life easier for web developers and small businesses. We run our services on top-notch technology and offer 24/7 outstanding fast support.
							</p>
						</Link>
					</div>
					{/* Payment Methods */}
					<div className="flex items-center gap-6 mt-4 md:mt-0">
						<Image src="/visa.svg" alt="Visa" width={48} height={24} className="h-6 w-auto" />
						<Image src="/american-express.svg" alt="American Express" width={48} height={24} className="h-6 w-auto" />
						<Image src="/mastercard.svg" alt="MasterCard" width={48} height={24} className="h-6 w-auto" />
						<Image src="/paypal.svg" alt="PayPal" width={48} height={24} className="h-6 w-auto" />
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-white/20 my-8" />

				{/* Middle: Links */}
				<div className="grid grid-cols-2 md:grid-cols-7 gap-8 mb-10">
					<div>
						<b className="font-semibold mb-8">Help</b>
						<ul className="space-y-2 mt-4">
							<li><Link href="https://hostingspell.com/blog/" className="text-sm opacity-80 hover:opacity-100">Blog</Link></li>
							<li><Link href="https://manage.hostingspell.com/submitticket.php?step=2&deptid=5" className="text-sm opacity-80 hover:opacity-100">Report Abuse</Link></li>
							<li><Link href="https://manage.hostingspell.com/knowledgebase" className="text-sm opacity-80 hover:opacity-100">Knowledge Base</Link></li>
							<li><Link href="/tools/ns" className="text-sm opacity-80 hover:opacity-100">Find Nameservers</Link></li>
							<li><Link href="/tools/getip" className="text-sm opacity-80 hover:opacity-100">Find Your IP address</Link></li>
							<li><Link href="/tools/dns" className="text-sm opacity-80 hover:opacity-100">DNS Propagation Check</Link></li>
							<li><Link href="/offers" className="text-sm opacity-80 hover:opacity-100">Latest Offers</Link></li>
						</ul>
					</div>
					<div>
						<b className="font-semibold mb-4">Resources</b>
						<ul className="space-y-2 mt-4">
							<li><Link href="https://hostingspell.com/blog/best-practice-to-start-hosting-on-new-cpanel/" className="text-sm opacity-80 hover:opacity-100">Best Practice to start hosting on new cPanel</Link></li>
							<li><Link href="https://hostingspell.com/blog/how-to-install-wordpress-using-softaculous/" className="text-sm opacity-80 hover:opacity-100">How to Install WordPress Using Softaculous</Link></li>
							<li><Link href="https://hostingspell.com/blog/how-to-completely-secure-wordpress-website/" className="text-sm opacity-80 hover:opacity-100">How to Completely Secure WordPress Website</Link></li>
						</ul>
					</div>
					<div>
						<b className="font-semibold mb-4">Domains</b>
						<ul className="space-y-2 mt-4">
							<li><Link href="https://manage.hostingspell.com/cart.php?a=add&domain=register" className="text-sm opacity-80 hover:opacity-100">Domain Checker</Link></li>
							<li><Link href="https://manage.hostingspell.com/cart.php?a=add&domain=transfer" className="text-sm opacity-80 hover:opacity-100">Domain Transfer</Link></li>
							<li><Link href="/domain#ai-domain-generator" className="text-sm opacity-80 hover:opacity-100">AI Domain Name Generator</Link></li>
						</ul>
					</div>
					<div>
						<b className="font-semibold mb-4">Hosting & Services</b>
						<ul className="space-y-2 mt-4">
							<li><Link href="/cloud-hosting" className="text-sm opacity-80 hover:opacity-100">Cloud Hosting</Link></li>
							<li><Link href="/premium-hosting" className="text-sm opacity-80 hover:opacity-100">Premium Hosting</Link></li>
							<li><Link href="/combo-hosting" className="text-sm opacity-80 hover:opacity-100">Combo Hosting</Link></li>
							<li><Link href="/reseller" className="text-sm opacity-80 hover:opacity-100">Reseller Hosting</Link></li>
							<li><Link href="/vps" className="text-sm opacity-80 hover:opacity-100">VPS Hosting</Link></li>
							<li><Link href="https://manage.hostingspell.com/store/managtechnical-support" className="text-sm opacity-80 hover:opacity-100">Hire IT Engineer</Link></li>
						</ul>
					</div>
					<div>
						<b className="font-semibold mb-4">Legal</b>
						<ul className="space-y-2 mt-4">
							<li><Link href="/legal/privacy-policy" className="text-sm opacity-80 hover:opacity-100">Privacy Policy</Link></li>
							<li><Link href="/legal/terms-of-service" className="text-sm opacity-80 hover:opacity-100">Terms of Service</Link></li>
							<li><Link href="/legal/refund-policy" className="text-sm opacity-80 hover:opacity-100">Refund Policy</Link></li>
							<li><Link href="https://hostingspell.com/blog/brand-kit/" className="text-sm opacity-80 hover:opacity-100">Brand Kit</Link></li>
						</ul>
					</div>
					<div>
						<b className="font-semibold mb-4">Company</b>
						<ul className="space-y-2 mt-4">
							<li><Link href="/about" className="text-sm opacity-80 hover:opacity-100">About HostingSpell</Link></li>
							<li><Link href="https://hostingspell.com/blog/strategic-partnership/" className="text-sm opacity-80 hover:opacity-100">Partnership</Link></li>
							<li><Link href="/contact" className="text-sm opacity-80 hover:opacity-100">Contact Us</Link></li>
							<li><Link href="https://hostingspell.com/blog/embracing-sustainability-our-journey-towards-carbon-neutral-web-hosting-for-the-world/" className="text-sm opacity-80 hover:opacity-100">Eco-friendly Web Hosting</Link></li>
						</ul>
					</div>
					<div>
						<b className="font-semibold mb-4">Information</b>
						<ul className="space-y-2 mt-4">
							<li><Link href="https://status.2hs.in/status/hs" className="text-sm opacity-80 hover:opacity-100">Server Status</Link></li>
							<li><Link href="https://manage.hostingspell.com/affiliates.php" className="text-sm opacity-80 hover:opacity-100">Partnership/Affiliate</Link></li>
							<li><Link href="https://hostingspell.com/blog/free-web-hosting-for-ngos-universities/" className="text-sm opacity-80 hover:opacity-100">Free Hosting</Link></li>
							<li><Link href="https://hostingspell.com/blog/revenue-share/" className="text-sm opacity-80 hover:opacity-100">Revenue Share</Link></li>
							<li><Link href="https://hostingspell.com/blog/acquisitions/" className="text-sm opacity-80 hover:opacity-100">Acquisitions</Link></li>
							<li><Link href="https://hostingspell.com/blog/payment-methods/" className="text-sm opacity-80 hover:opacity-100">Payment Methods</Link></li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-center items-center my-8 gap-4">
					<Image
						src="/cpanel-partner-badge.png"
						alt="cPanel partner badge"
						height={150}
						width={300}
						className="object-contain"
					/>
					<Image
						src="/linode-solutions-partner-badge.png"
						alt="Linode solutions partner badge"
						height={150}
						width={300}
						className="object-contain"
					/>
				</div>


				{/* Bottom: Socials and Copyright */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/20 pt-6">
					<div className="flex gap-6 mb-2 md:mb-0">
						<a href="https://twitter.com/hostingspellcom" className="hover:opacity-100 opacity-80" aria-label="Twitter"><FaTwitter size={22} /></a>
						<a href="https://facebook.com/hostingspellcom" className="hover:opacity-100 opacity-80" aria-label="Facebook"><FaFacebook size={22} /></a>
						<a href="https://instagram.com/hostingspell" className="hover:opacity-100 opacity-80" aria-label="Instagram"><FaInstagram size={22} /></a>
						<a href="https://discord.gg/m3Ed7qSHwJ" className="hover:opacity-100 opacity-80" aria-label="Discord"><FaDiscord size={22} /></a>
					</div>
					<p className="text-sm opacity-80 text-center md:text-center">
						<span className="align-middle mr-1">©</span>Copyright 2025. All Rights Reserved
					</p>
				</div>
			</div>
		</footer >
	)
} 