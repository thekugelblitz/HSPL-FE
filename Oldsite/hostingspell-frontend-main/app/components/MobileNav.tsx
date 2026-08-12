'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronRight, ChevronDown, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CurrencyToggle } from '@/components/CurrencyToggle';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FaWhatsapp } from 'react-icons/fa';

import { ENABLE_VPS_INDIA } from '@/lib/featureFlags';

interface SubmenuItem {
	iconLight: string;
	iconDark: string;
	label: string;
	href: string;
}

export function MobileNav() {
	const [openSection, setOpenSection] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const toggleSection = (section: string) => {
		setOpenSection(openSection === section ? null : section);
	};

	const closeMenu = () => setIsOpen(false);

	const hostingItems: SubmenuItem[] = [
		{
			iconLight: '/icons/icon-cloud-hosting-light.svg',
			iconDark: '/icons/icon-cloud-hosting-dark.svg',
			label: 'Cloud Hosting',
			href: '/cloud-hosting',
		},
		{
			iconLight: '/icons/icon-premium-hosting-light.svg',
			iconDark: '/icons/icon-premium-hosting-dark.svg',
			label: 'Premium Hosting',
			href: '/premium-hosting',
		},
		{
			iconLight: '/icons/icon-free-hosting-light.svg',
			iconDark: '/icons/icon-free-hosting-dark.svg',
			label: 'Free Domain + Hosting',
			href: '/combo-hosting',
		},
		{
			iconLight: '/icons/icon-wordpress-light.svg',
			iconDark: '/icons/icon-wordpress-dark.svg',
			label: 'WordPress Hosting',
			href: '/wordpress-hosting',
		},
		{
			iconLight: '/icons/icon-nodejs-light.svg',
			iconDark: '/icons/icon-nodejs-dark.svg',
			label: 'NodeJS Hosting',
			href: '/nodejs-hosting',
		},
		{
			iconLight: '/icons/icon-python-light.svg',
			iconDark: '/icons/icon-python-dark.svg',
			label: 'Python Hosting',
			href: '/python-hosting',
		}
	];

	const rawVpsItems: SubmenuItem[] = [
		{
			iconLight: '/icons/icon-servers-light.svg',
			iconDark: '/icons/icon-servers-dark.svg',
			label: 'VPS Hosting',
			href: '/vps',
		},
		{
			iconLight: '/icons/icon-servers-light.svg',
			iconDark: '/icons/icon-servers-dark.svg',
			label: 'India VPS Hosting',
			href: '/vps/india',
		},
		{
			iconLight: '/icons/icon-website-light.svg',
			iconDark: '/icons/icon-website-dark.svg',
			label: 'VPS Apps',
			href: '/vps/apps',
		},
	];

	const vpsItems = ENABLE_VPS_INDIA
		? rawVpsItems
		: rawVpsItems.filter((item) => item.href !== '/vps/india');

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger aria-label="Open Menu" className="p-2">
				<Menu className="h-6 w-6 text-gray-800 dark:text-white" />
			</SheetTrigger>

			<SheetContent
				side="right"
				className="w-full max-w-full p-0 flex flex-col justify-between bg-gray-100 dark:bg-gray-900
					[&_[data-radix-dialog-close]]:p-2
					[&_[data-radix-dialog-close]]:bg-gray-200
					[&_[data-radix-dialog-close]]:dark:bg-gray-700
					[&_[data-radix-dialog-close]]:rounded-full
					[&_[data-radix-dialog-close]]:hover:bg-gray-300
					[&_[data-radix-dialog-close]]:dark:hover:bg-gray-600
					[&_[data-radix-dialog-close]_svg]:h-8
					[&_[data-radix-dialog-close]_svg]:w-8
					[&_[data-radix-dialog-close]_svg]:stroke-2"
			>
				{/* Menu list */}
				<div className="flex-1 overflow-y-auto mt-8">
					<div className="px-4 pt-2 pb-6 space-y-2 text-base font-medium text-gray-900 dark:text-gray-100">
						<Link href="/" className="block py-3 uppercase font-bold text-lg" onClick={closeMenu}>
							HOME
						</Link>

						{/* HOSTING */}
						<div>
							<button
								onClick={() => toggleSection('hosting')}
								className="w-full flex justify-between items-center py-3 uppercase font-bold text-lg"
							>
								<span>HOSTING</span>
								{openSection === 'hosting' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
							</button>
							{openSection === 'hosting' && (
								<div className="mt-2 ml-2 space-y-3">
									{hostingItems.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 text-blue-600 dark:text-white font-bold text-base"
											onClick={closeMenu}
										>
											<Image
												src={item.iconLight}
												alt=""
												width={28}
												height={28}
												className="block dark:hidden"
											/>
											<Image
												src={item.iconDark}
												alt=""
												width={28}
												height={28}
												className="hidden dark:block"
											/>
											{item.label}
										</Link>
									))}
								</div>
							)}
						</div>

						{/* VPS */}
						<div>
							<button
								onClick={() => toggleSection('vps')}
								className="w-full flex justify-between items-center py-3 uppercase font-bold text-lg"
							>
								<span>VPS</span>
								{openSection === 'vps' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
							</button>
							{openSection === 'vps' && (
								<div className="mt-2 ml-2 space-y-3">
									{vpsItems.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 text-blue-600 dark:text-white font-bold text-base"
											onClick={closeMenu}
										>
											<Image
												src={item.iconLight}
												alt=""
												width={28}
												height={28}
												className="block dark:hidden"
											/>
											<Image
												src={item.iconDark}
												alt=""
												width={28}
												height={28}
												className="hidden dark:block"
											/>
											{item.label}
										</Link>
									))}
								</div>
							)}
						</div>

						<Link href="/reseller" className="block py-3 uppercase font-bold text-lg" onClick={closeMenu}>
							RESELLER
						</Link>

						<Link href="/domain" className="block py-3 uppercase font-bold text-lg" onClick={closeMenu}>
							DOMAIN
						</Link>

						<Link
							href="/blog"
							className="block py-3 uppercase font-bold text-lg"
							onClick={closeMenu}
						>
							BLOGS
						</Link>

						<Link href="/pricing" className="block py-3 uppercase font-bold text-lg" onClick={closeMenu}>
							PRICING
						</Link>

						<Link href="https://manage.hostingspell.com/login" className="block py-3 uppercase font-bold text-lg" onClick={closeMenu}>
							LOGIN
						</Link>

						<div className="flex items-center gap-2.5 py-3 uppercase font-bold text-lg text-gray-900 dark:text-gray-100">
							{/* WhatsApp Icon */}
							<a 
								href="https://wa.me/919409594000" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors flex items-center"
								onClick={closeMenu}
								title="Chat on WhatsApp"
							>
								<FaWhatsapp size={20} />
							</a>
							{/* Call Dialer link */}
							<a 
								href="tel:+919409594000" 
								className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								onClick={closeMenu}
								title="Call support hotline"
							>
								+91 94095 94000
							</a>
						</div>

					</div>
				</div>

				{/* Footer toggles */}
				<div className="flex justify-left gap-4 px-4 py-4">
					<CurrencyToggle />
					<ThemeToggle />
				</div>
			</SheetContent>
		</Sheet>
	);
}
