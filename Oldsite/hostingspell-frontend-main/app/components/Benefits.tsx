import { Button } from "@/components/ui/button"
import { Info, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import InfoPopover from "@/components/shared/InfoPopover"
import { cn, Feature } from "@/lib/utils"

const default_storage_fup = "Certain plans include unlimited storage. Disk usage is subject to strict Fair Usage Policies (FUP) and cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. For Linode India hosting, additional storage beyond 50GB is billed at $1 per 10GB. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."

const features = [
    {
        title: "Unlimited Storage & Easy Account Administration",
        desc: "There's no limit to the amount of space you can use with hosting and easy-to-use control panel (cPanel) gives you the freedom to customize your account as you grow.",
        lightIcon: "/icons/icon-storage-light.svg",
        darkIcon: "/icons/icon-storage-dark.svg",
        info: default_storage_fup
    },
    {
        title: "Free Integrated Features",
        desc: "A free domain registration, pre-installed extensions, privacy protection, and SSL security all included at no extra charge.",
        lightIcon: "/icons/icon-free-hosting-light.svg",
        darkIcon: "/icons/icon-free-hosting-dark.svg",
        info: "The free domain is available only with the [Combo Hosting Plans](/combo-hosting), which requires annual billing."

    },
    {
        title: "Built-In Traffic Analytics",
        desc: "Easily track and analyze visitor traffic with built-in analytics and data right from your hosting dashboard. Available with cPanel tools for added convenience.",
        lightIcon: "/icons/icon-web-light.svg",
        darkIcon: "/icons/icon-web-dark.svg",
    },
    {
        title: "Instant WordPress Setup with Automated Backups",
        desc: "Manage your WordPress sites effortlessly with Softaculous and cPanel WordPress Manager featuring one-click installs, 1-click restores, and automated daily backups.",
        lightIcon: "/icons/icon-wordpress-hosting-light.svg",
        darkIcon: "/icons/icon-wordpress-hosting-dark.svg",
    },
]

const reliability = [
    { title: "Resource Protection", lightIcon: "/icons/icon-firewall-light.svg", darkIcon: "/icons/icon-firewall-dark.svg" },
    { title: "100% Uptime Mark", lightIcon: "/icons/icon-uptime-light.svg", darkIcon: "/icons/icon-uptime-dark.svg" },
    { title: "Optimized Servers", lightIcon: "/icons/icon-100-light.svg", darkIcon: "/icons/icon-100-dark.svg" },
    { title: "Fast Solid State Storage", lightIcon: "/icons/icon-storage-light.svg", darkIcon: "/icons/icon-storage-dark.svg" },
]

const whyHostingSpell = [
    {
        title: "Money-Back Guarantee",
        desc: "Realized we're not the perfect fit? That's completely okay! We know that sometimes things just don't work out the way you hoped. Because we want you to feel confident and worry-free, we offer a 7-day money-back guarantee from the day you sign up. If it's not for you, just let us know, and we'll refund your money no complicated forms, no hoops to jump through, and no hidden fine print.*",
        lightIcon: "/icons/icon-moneyback-alt-light.svg",
        darkIcon: "/icons/icon-moneyback-alt-dark.svg",
    },
    {
        title: "In-House Experts",
        desc: "We're here 24x7 to help with any hosting issue, big or small, with expert support you can count on.",
        lightIcon: "/icons/icon-support-light.svg",
        darkIcon: "/icons/icon-support-dark.svg",
    },
    {
        title: "Employee Owned",
        desc: "Since our team owns the company, we focus on what really matters: our customers and our community.",
        lightIcon: "/icons/icon-support-alt-light.svg",
        darkIcon: "/icons/icon-support-alt-dark.svg",
    },
    {
        title: "Supporting Open Source",
        desc: "We're here to help developers, open-source projects, and creative ideas thrive online.",
        lightIcon: "/icons/icon-opensource-light.png",
        darkIcon: "/icons/icon-opensource-dark.png",
    },
]

export const cloudHosting: Feature[] = [
    { label: "Unlimited MySQL Databases" },
    { label: "cPanel Control Panel" },
    { label: "Access to Raw Log Files" },
    { label: "Cron Jobs" },
    { label: "Built-in Traffic Analytics" },
    { label: "Secure Email Access" },
    { label: "HTTP/2 Enabled Servers" },
    { label: "Softaculous Apps and WordPress Manager", info: "Softaculous is an auto installer for 380+ apps like WordPress, Joomla, Drupal, Magento, etc. which integrates with several control panels like cPanel." },
    { label: "Unlimited Storage", info: default_storage_fup },
    { label: "Support for current PHP versions" },
]

export const premiumHosting: Feature[] = [
    { label: "Unlimited MySQL Databases" },
    { label: "Unlimited Traffic" },
    { label: "Unlimited Email / FTP Accounts" },
    { label: "Unlimited Subdomains" },
    { label: "Built-in Traffic Analytics" },
    { label: "Free Migration" },
    { label: "HTTP/2 Enabled Servers" },
    { label: "Softaculous Apps and WordPress Manager", info: "Softaculous is an auto installer for 380+ apps like WordPress, Joomla, Drupal, Magento, etc. which integrates with several control panels like cPanel." },
    { label: "Unlimited Storage", info: default_storage_fup },
    { label: "Linode/DigitalOcean Infrastructure" },
]
export default function Benefits() {
    return (
        // <section className="bg-background dark:bg-background" id="benefits">
        <section className="" id="benefits">
            <div className="container mx-auto px-4 space-y-8">
                {/* Every Feature Section */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-12">
                        Every Feature <span className="text-blue-600">Your Site Could Ask For</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-2 max-w-6xl mx-auto">
                        {features.map((f) => (
                            <div key={f.title} className="relative flex items-start gap-4 dark:bg-muted/40 p-6 rounded-xl pb-0">

                                {/* Tooltip at top-right */}
                                {typeof f.info === "string" && f.info.length > 0 && (
                                    <div className="absolute top-3 right-3">
                                        <InfoPopover content={f.info} />
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="relative h-12 w-12 shrink-0">
                                    <img src={f.lightIcon} alt={f.title} className="block dark:hidden h-12 w-12" />
                                    <img src={f.darkIcon} alt={f.title} className="hidden dark:block h-12 w-12 absolute top-0 left-0" />
                                </div>

                                {/* Text content */}
                                <div className="text-left flex-1">
                                    <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>


                {/* Extreme Speed & Reliability */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-blue-500">Extreme Speed</span> & Reliability Standard
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        Stand out online with web hosting that's reliable, speedy, and easy to use.Create your online presence with hosting that combines speed, reliability, and simplicity, giving you the confidence to grow your website your way.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {reliability.map((r) => (
                            <div key={r.title} className="bg-card p-8 rounded-xl shadow-md">
                                <div className="relative h-12 w-12 mx-auto mb-4">
                                    <img src={r.lightIcon} alt={r.title} className="block dark:hidden h-12 w-12" />
                                    <img src={r.darkIcon} alt={r.title} className="hidden dark:block h-12 w-12 absolute top-0 left-0" />
                                </div>
                                <p className="font-bold text-xl">{r.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why HostingSpell */}
                <div className="py-16 rounded-2xl">
                    <h2 className="text-4xl font-bold mb-12 text-center">Why <span className="text-blue-600">HostingSpell </span>Stands Out</h2>
                    <div className="grid gap-8 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 gap-8">
                            {/* First item spans full width on desktop */}
                            {whyHostingSpell[0] && (
                                <div className="bg-card p-8 rounded-xl shadow-md text-left">
                                    <div className="relative h-12 w-12 mb-4">
                                        <img
                                            src={whyHostingSpell[0].lightIcon}
                                            alt={whyHostingSpell[0].title}
                                            className="block dark:hidden h-12 w-12"
                                        />
                                        <img
                                            src={whyHostingSpell[0].darkIcon}
                                            alt={whyHostingSpell[0].title}
                                            className="hidden dark:block h-12 w-12 absolute top-0 left-0"
                                        />
                                    </div>
                                    <h3 className="font-bold mb-2 text-2xl">{whyHostingSpell[0].title}</h3>
                                    <p className="text-sm text-muted-foreground">{whyHostingSpell[0].desc}</p>
                                </div>
                            )}

                            {/* Remaining items in 2 columns on desktop */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {whyHostingSpell.slice(1).map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-card p-8 rounded-xl shadow-md text-left"
                                    >
                                        <div className="relative h-12 w-12 mb-4">
                                            <img
                                                src={item.lightIcon}
                                                alt={item.title}
                                                className="block dark:hidden h-12 w-12"
                                            />
                                            <img
                                                src={item.darkIcon}
                                                alt={item.title}
                                                className="hidden dark:block h-12 w-12 absolute top-0 left-0"
                                            />
                                        </div>
                                        <h3 className="font-bold mb-2 text-2xl">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Cloud Hosting Advanced Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto px-4">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
                            <span className="text-blue-600">Cloud Hosting </span> Advanced Features
                        </h2>
                        <ul className="grid sm:grid-cols-2 gap-3 list-disc list-inside text-sm text-muted-foreground">
                            {cloudHosting.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1 bg-white dark:bg-muted text-black dark:text-white p-4 rounded-md">
                                    {item.label}
                                    {item.info && (
                                        <InfoPopover content={item.info} />
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-6 mt-8">
                            <a
                                href="/cloud-hosting"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="px-6 dark:text-white">
                                    GET CLOUD HOSTING
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        {/* Light mode image */}
                        <img
                            src="/img/cloudhosting-img-2.png"
                            alt="Cloud Hosting Illustration"
                            className="block dark:hidden w-full max-w-sm sm:max-w-sm md:max-w-sm"
                            loading="lazy"
                        />
                        {/* Dark mode image */}
                        <img
                            src="/img/cloudhosting-img-2.png"
                            alt="Cloud Hosting Illustration"
                            className="hidden dark:block w-full max-w-sm sm:max-w-sm md:max-w-sm"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Premium Hosting Advanced Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto px-4">
                    <div className="flex justify-center">
                        {/* Light mode image */}
                        <img
                            src="/img/premium-hostign-img-1.png"
                            alt="Cloud Hosting Illustration"
                            className="block dark:hidden w-full max-w-sm sm:max-w-md md:max-w-sm"
                            loading="lazy"
                        />
                        {/* Dark mode image */}
                        <img
                            src="/img/premium-hostign-img-1.png"
                            alt="Cloud Hosting Illustration"
                            className="hidden dark:block w-full max-w-sm sm:max-w-md md:max-w-sm"
                            loading="lazy"
                        />
                    </div>


                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
                            <span className="text-blue-600">Premium Hosting </span> Advanced Features
                        </h2>
                        <ul className="grid sm:grid-cols-2 gap-3 list-disc list-inside text-sm text-muted-foreground">
                            {premiumHosting.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1 bg-white dark:bg-muted text-black dark:text-white p-4 rounded-md">
                                    {item.label}
                                    {item.info && (
                                        <InfoPopover content={item.info} />
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-6 mt-8">
                            <a
                                href="/premium-hosting"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="px-6 dark:text-white">
                                    GET PREMIUM HOSTING
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA Band */}
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-14 px-8 rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
                    {/* Decorative background element */}
                    <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')] opacity-10"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left space-y-4">
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                                Launch Your Website in Minutes
                            </h2>
                            <p className="text-lg text-blue-100 max-w-md">
                                Get fast, reliable, and secure web hosting tailored for businesses, creators, and startups.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <a href="/premium-hosting" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="bg-transparent w-full text-white border border-white
							dark:bg-transparent dark:text-white dark:border dark:border-white 
							hover:bg-white hover:text-black dark:hover:bg-white/10 hover:scale-105 transition-transform shadow-lg rounded-sm"
                                >
                                    GET STARTED
                                </Button>
                            </a>

                            <a href="/pricing" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent w-full text-white border border-white
							dark:bg-transparent dark:text-white dark:border dark:border-white 
							hover:bg-white hover:text-black dark:hover:bg-white/10 hover:scale-105 transition-transform shadow-lg rounded-sm"
                                >
                                    VIEW PLANS
                                </Button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
