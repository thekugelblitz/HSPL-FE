'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NavItem } from './NavItem';
import { MobileNav } from './MobileNav';
import { CurrencyProvider } from "@/context/CurrencyContext"
import { CurrencyToggle } from "@/components/CurrencyToggle"
import { ThemeToggle } from "@/components/ThemeToggle"
import { HostingSubmenu } from './Header/HostingSubmenu';
import { VpsSubmenu } from './Header/VpsSubmenu';
import HeaderLogo from "@/components/HeaderLogo"
import MarqueeBanner from "./MarqueeBanner";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


import { ENABLE_VPS_INDIA } from '@/lib/featureFlags';

export function Header() {
	const [hostingOpen, setHostingOpen] = useState(false); // Final display state
	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const [vpsOpen, setVpsOpen] = useState(false);
	const [isVpsHovered, setIsVpsHovered] = useState(false);
	const [isVpsClicked, setIsVpsClicked] = useState(false);
	const vpsRef = useRef<HTMLDivElement>(null);

	const [themeOpen, setThemeOpen] = useState(false);
	const [theme, setTheme] = useState('system');

	const hostingRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const mainNav = [
		{ label: 'RESELLER', href: '/reseller' },
		{ label: 'DOMAIN', href: '/domain' },
		{ label: 'BLOG', href: '/blog' },
		{ label: 'PRICING', href: '/pricing' }
	];

	const rawVpsSubmenuItems = [
		{
			key: 'vps-hosting',
			title: 'VPS\nHosting',
			desc: 'High Performance VPS Hosting Solutions',
			href: '/vps',
			lightIcon: '/icons/icon-servers-light.svg',
			darkIcon: '/icons/icon-servers-dark.svg',
		},
		{
			key: 'vps-india',
			title: 'India\nVPS Hosting',
			desc: 'Low-Latency NVMe VPS in India',
			href: '/vps/india',
			lightIcon: '/icons/icon-servers-light.svg',
			darkIcon: '/icons/icon-servers-dark.svg',
		},
		{
			key: 'vps-apps',
			title: 'VPS\nApps',
			desc: 'One-Click App Deployments on VPS',
			href: '/vps/apps',
			lightIcon: '/icons/icon-website-light.svg',
			darkIcon: '/icons/icon-website-dark.svg',
		},
	];

	const vpsSubmenuItems = ENABLE_VPS_INDIA
		? rawVpsSubmenuItems
		: rawVpsSubmenuItems.filter((item) => item.key !== 'vps-india');

	let submenuItems = [
		{
			key: 'cloud',
			title: 'Cloud\nHosting',
			desc: 'Most Affordable Web Hosting',
			href: '/cloud-hosting',
			lightIcon: '/icons/icon-cloud-hosting-light.svg',
			darkIcon: '/icons/icon-cloud-hosting-dark.svg',
		},
		{
			key: 'premium',
			title: 'Premium\nHosting',
			desc: 'Powered BY Digital Ocean, Linode & Other',
			href: '/premium-hosting',
			lightIcon: '/icons/icon-premium-hosting-light.svg',
			darkIcon: '/icons/icon-premium-hosting-dark.svg',
		},
		{
			key: 'free',
			title: 'Free\nDomain + Hosting',
			desc: 'Lifetime Free Domain with Combo Hosting plans',
			href: '/combo-hosting',
			lightIcon: '/icons/icon-free-hosting-light.svg',
			darkIcon: '/icons/icon-free-hosting-dark.svg',
		},
		{
			key: 'wordpress',
			title: 'WordPress\nHosting',
			desc: 'Optimised for WordPress',
			href: '/wordpress-hosting',
			lightIcon: '/icons/icon-wordpress-light.svg',
			darkIcon: '/icons/icon-wordpress-dark.svg',
		},
		{
			key: 'nodejs',
			title: 'NodeJS\nHosting',
			desc: 'Run Node.js Apps',
			href: '/nodejs-hosting',
			lightIcon: '/icons/icon-nodejs-light.svg',
			darkIcon: '/icons/icon-nodejs-dark.svg',
		},
		{
			key: 'python',
			title: 'Python\nHosting',
			desc: 'Deploy Django & Flask',
			href: '/python-hosting',
			lightIcon: '/icons/icon-python-light.svg',
			darkIcon: '/icons/icon-python-dark.svg',
		}
	];

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (hostingRef.current && !hostingRef.current.contains(e.target as Node)) {
				setIsClicked(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	useEffect(() => {
		if (theme === 'system') {
			document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
		} else {
			document.documentElement.classList.toggle('dark', theme === 'dark');
		}
	}, [theme]);

	useEffect(() => {
		if (isClicked) {
			setHostingOpen(true);
		} else {
			setHostingOpen(isHovered);
		}
	}, [isHovered, isClicked]);

	useEffect(() => {
		function handleVpsClickOutside(e: MouseEvent) {
			if (vpsRef.current && !vpsRef.current.contains(e.target as Node)) {
				setIsVpsClicked(false);
			}
		}
		document.addEventListener('mousedown', handleVpsClickOutside);
		return () => document.removeEventListener('mousedown', handleVpsClickOutside);
	}, []);

	useEffect(() => {
		if (isVpsClicked) {
			setVpsOpen(true);
		} else {
			setVpsOpen(isVpsHovered);
		}
	}, [isVpsHovered, isVpsClicked]);

	return (
		<header className="fixed top-0 w-full bg-background dark:bg-background z-50 border-border !m-0 !p-0">
			<MarqueeBanner />
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Link href="/" className="font-semibold text-xl">
						<span className="block dark:hidden">
							<Image src="/logo.png" alt="HostingSpell" height={50} width={200} className="object-contain" />
						</span>
						<span className="hidden dark:block">
							<Image src="/logo-light.png" alt="HostingSpell" height={50} width={200} className="object-contain" />
						</span>
					</Link>
				</div>
				{/* <HeaderLogo />  */}

				{/* Navigation */}
				<nav className="hidden md:flex items-center gap-4 relative">

					<NavItem key="home" label="Home" href="/" />

					{/* HOSTING item with submenu */}
					<div
						ref={hostingRef}
						className="relative"
						onMouseEnter={() => !isClicked && setIsHovered(true)}
						onMouseLeave={() => !isClicked && setIsHovered(false)}
					>
						<NavItem
							label="HOSTING"
							href="#"
							submenuHrefs={submenuItems.map(item => item.href)}
							onClick={() => setIsClicked(prev => !prev)}
							isOpen={hostingOpen}
							isHosting
						/>

						{/* Dropdown panel */}
						{hostingOpen && (
							<HostingSubmenu items={submenuItems} />
						)}
					</div>

					{/* VPS item with submenu */}
					<div
						ref={vpsRef}
						className="relative"
						onMouseEnter={() => !isVpsClicked && setIsVpsHovered(true)}
						onMouseLeave={() => !isVpsClicked && setIsVpsHovered(false)}
					>
						<NavItem
							label="VPS"
							href="#"
							submenuHrefs={vpsSubmenuItems.map(item => item.href)}
							onClick={() => setIsVpsClicked(prev => !prev)}
							isOpen={vpsOpen}
						/>

						{/* Dropdown panel */}
						{vpsOpen && (
							<VpsSubmenu items={vpsSubmenuItems} />
						)}
					</div>
					{/* Other main items */}
					{mainNav.map((item) => (
						<NavItem key={item.href} label={item.label} href={item.href} />
					))}

					{/* WhatsApp & Call Us Support */}
					<div className="flex items-center gap-1.5 ml-2 text-xs font-bold text-gray-800 dark:text-gray-200">
						{/* WhatsApp Icon */}
						<a
							href="https://wa.me/919409594000"
							target="_blank"
							rel="noopener noreferrer"
							className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors flex items-center"
							title="Chat on WhatsApp"
						>
							<FaWhatsapp className="w-4 h-4" />
						</a>
						{/* Call Dialer link */}
						<a
							href="tel:+919409594000"
							className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							title="Call support hotline"
						>
							+91 94095 94000
						</a>
					</div>

				</nav>

				{/* Right section */}
				<div className="flex items-center gap-4 md:gap-4">
					<CurrencyToggle />
					<div className="hidden md:block">
						<ThemeToggle />
					</div>

					<Link
						href="https://manage.hostingspell.com/login"
						className="hidden md:inline-block bg-blue-600 text-white dark:bg-white dark:text-black font-bold px-6 py-2 rounded text-xs uppercase shadow hover:bg-blue-700 transition"
					>
						LOGIN
					</Link>

					<div className="md:hidden">
						<MobileNav />
					</div>

				</div>
			</div>
		</header>
	);
}
