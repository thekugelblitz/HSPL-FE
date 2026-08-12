import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCurrency } from "@/context/CurrencyContext"
import InfoPopover from "@/components/shared/InfoPopover"
import { IN_DOMAIN_KYC_TOOLTIP, requiresInRegistryKyc } from "@/lib/domainTld"


interface DomainPricing {
    [currency: string]: {
        original: number
        register: number
    }
}

interface DomainListProps {
    currentDomains: string[]
    getPricing: (domain: string) => DomainPricing
    currency: string
    currencySymbol: string
    loading: boolean
}

// Domain extension configurations with logos and descriptions
const DOMAIN_CONFIG = {
    '.com': {
        logo: '/img/domains/com.png',
        fallbackLogo: '.com',
        description: 'The most popular and trusted domain extension worldwide',
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50 dark:bg-white',
        highlight: "border-2 border-blue-500 dark:animate-[animated-border-glow-blue-keyframes_1.5s_ease-in-out_infinite]"
    },
    '.in': {
        logo: '/img/domains/in.png',
        fallbackLogo: '.in',
        description: 'Perfect for businesses and individuals in India',
        color: 'text-orange-600 dark:text-orange-400',
        bgColor: 'bg-orange-50 dark:bg-white',
        highlight: "border-2 border-blue-500 dark:animate-[animated-border-glow-blue-keyframes_1.5s_ease-in-out_infinite]"
    },
    '.org': {
        logo: '/img/domains/org.png',
        fallbackLogo: '.org',
        description: 'Ideal for organizations, nonprofits, and communities',
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-50 dark:bg-white',
        highlight: ''
    },
    '.xyz': {
        logo: '/img/domains/xyz.png',
        fallbackLogo: '.xyz',
        description: 'Modern and creative domain for the next generation',
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50 dark:bg-white',
        highlight: ''
    },
    '.monster': {
        logo: '/img/domains/monster.webp',
        fallbackLogo: '.monster',
        description: 'Unleash your creativity with this unique extension',
        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-50 dark:bg-white',
        highlight: ''
    },
    '.info': {
        logo: '/img/domains/info.png',
        fallbackLogo: '.info',
        description: 'Perfect for informational websites and resources',
        color: 'text-cyan-600 dark:text-cyan-400',
        bgColor: 'bg-cyan-50 dark:bg-white',
        highlight: ''
    },
    '.net': {
        logo: '/img/domains/net.png',
        fallbackLogo: '.net',
        description: 'Great for tech companies and network services',
        color: 'text-indigo-600 dark:text-indigo-400',
        bgColor: 'bg-indigo-50 dark:bg-white',
        highlight: ''
    },
    '.co': {
        logo: '/img/domains/co.webp',
        fallbackLogo: '.co',
        description: 'Short and memorable for companies and startups',
        color: 'text-teal-600 dark:text-teal-400',
        bgColor: 'bg-teal-50 dark:bg-white',
        highlight: ''
    }
}

// Default domain extensions to show if no domains are provided
const DEFAULT_DOMAINS = ['.com', '.in', '.org', '.xyz', '.monster', '.info', '.net', '.co']

const DomainCardGrid: React.FC<DomainListProps> = ({
    currentDomains,
    getPricing,
    currency,
    currencySymbol,
    loading,
}) => {
    // Use provided domains or default extensions
    // const domainsToShow = currentDomains.length > 0 ? currentDomains : DEFAULT_DOMAINS
    const domainsToShow = [...new Set([...DEFAULT_DOMAINS, ...currentDomains])]

    const getDomainConfig = (domain: string) => {
        const extension = domain.startsWith('.') ? domain : `.${domain.split('.').pop()}`
        return DOMAIN_CONFIG[extension as keyof typeof DOMAIN_CONFIG] || {
            logo: null,
            fallbackLogo: extension,
            description: `Get your perfect ${extension} domain today.`,
            color: 'text-gray-600 dark:text-gray-400',
            bgColor: 'bg-gray-50 dark:bg-gray-900/20'
        }
    }
    const { currency: currencyContext } = useCurrency();

    var selectedCurrency = currencyContext === "INR" ? "currency=2" : "currency=1";

    return (
        <section className="py-8">
            <div className="max-w-6xl mx-auto px-4">
                {loading ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Loading prices...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                        {domainsToShow.map((domain, idx) => {
                            const config = getDomainConfig(domain)
                            const pricing = getPricing(domain)
                            const originalPrice = pricing[currency]?.original || 999
                            const discountedPrice = pricing[currency]?.register || 499
                            const discountPercent = Math.round(
                                ((originalPrice - discountedPrice) / originalPrice) * 100
                            )

                            return (
                                <Card
                                    key={idx}
                                    className={cn(
                                        "p-6 shadow-md border text-center flex flex-col items-center justify-between",
                                        "hover:border-blue-400 hover:shadow-xl transition-all duration-200 hover:scale-[1.02]",
                                        "dark:bg-[#060A17] group",
                                        config.highlight // will apply correct color + glow rules
                                    )}
                                >

                                    {/* Domain Logo/Extension */}
                                    <div className={`w-20 h-20 rounded-full ${config.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                        {config.logo ? (
                                            <img
                                                src={config.logo}
                                                alt={`${domain} domain`}
                                                className="w-12 h-12 object-contain"
                                                onError={(e) => {
                                                    // Fallback to text if image fails to load
                                                    const target = e.target as HTMLImageElement
                                                    target.style.display = 'none'
                                                    const parent = target.parentElement
                                                    if (parent) {
                                                        const span = document.createElement('span')
                                                        span.className = `text-2xl font-bold ${config.color}`
                                                        span.textContent = config.fallbackLogo
                                                        parent.appendChild(span)
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <span className={`text-2xl font-bold ${config.color}`}>
                                                {config.fallbackLogo}
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[2.5rem] flex items-center justify-center gap-1">
                                        <span>{config.description}</span>
                                        {requiresInRegistryKyc(domain) && (
                                            <InfoPopover content={IN_DOMAIN_KYC_TOOLTIP} />
                                        )}
                                    </p>

                                    {/* Discounted Price */}
                                    <div className="text-2xl font-bold text-black dark:text-white mb-4">
                                        {currencySymbol}{discountedPrice}
                                        <span className="text-sm font-normal text-gray-500">/year</span>
                                    </div>

                                    {/* Button */}
                                    <Button
                                        asChild
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
                                    >
                                        <a
                                            href={`https://manage.hostingspell.com/cart.php?a=add&domain=register&${selectedCurrency}&query=${domain}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Register Now
                                        </a>
                                    </Button>
                                </Card>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default DomainCardGrid