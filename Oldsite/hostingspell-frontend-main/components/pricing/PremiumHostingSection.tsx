import React from 'react'
import PremiumHostingPlanGrid from './PremiumHostingPlanGrid'
import HostingPlanComparisonTable from './HostingPlanComparisonTable'
import { PLANS_PREMIUM_HOSTING } from '@/lib/constants-premium'

// Updated premium hosting locations to match our new structure
const PREMIUM_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
    { value: "netherlands", label: "Netherlands", code: "NET" },
    { value: "usa", label: "United States", code: "USA" },
    { value: "uk", label: "United Kingdom", code: "UK" },
    { value: "singapore", label: "Singapore", code: "SGP" },
    { value: "australia", label: "Australia", code: "AUS" },
]

// Updated comparison data for new premium hosting structure
const PLANS_COMPARE_PREMIUM_HOSTING = [
    {
        title: "Premium Hosting Features",
        features: [
            { label: "Websites", keys: ["websites"], info: "Number of websites you can host on this plan." },
            { label: "Disk Space (NVMe)", keys: ["storage"], info: "Disk usage is subject to strict Fair Usage Policies (FUP) and cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. For Linode India hosting, additional storage beyond 50GB is billed at $1 per 10GB. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)." },
            {
                label: "Bandwidth",
                keys: ["bandwidth"],
                info: "Amount of data transfer allowed per month."
            },
            { label: "CPU & RAM", keys: ["cpu_ram"], info: "Processing power and memory allocated." },
            { label: "Entry Processes", keys: ["entry_processes"], info: "System resource limits for processes." },
            { label: "Infrastructure", keys: ["infrastructure"], info: "Cloud infrastructure provider." },
            { label: "Multiple Hosting Locations", keys: ["multi_location"], info: "Choose from multiple server locations." },
            { label: "Moneyback Guarantee", keys: ["moneyback"], info: "Refund period available up to 7 days" },
        ]
    },
    {
        title: "Security & Performance",
        features: [
            { label: "LiteSpeed Web Server", keys: ["litespeed"], info: "High-performance web server technology." },
            { label: "Free SSL Certificates", keys: ["ssl"], info: "Free SSL certificates for all domains." },
            { label: "Daily Backups", keys: ["backups"], info: "Automated daily backup system." },
            { label: "DDoS Protection", keys: ["ddos"], info: "Protection against DDoS attacks." },
            { label: "Imunify360 Security", keys: ["imunify360"], info: "Advanced AI-based security suite." },
        ],
    },
    {
        title: "Server Locations",
        features: [
            { label: "India", keys: ["india"], info: "High-performance servers in India." },
            { label: "Netherlands", keys: ["netherlands"], info: "Secure servers in the Netherlands for fast connectivity across Europe." },
            { label: "Singapore", keys: ["singapore"], info: "DigitalOcean servers in Singapore." },
            { label: "USA", keys: ["usa"], info: "DigitalOcean servers in the United States." },
            { label: "UK", keys: ["uk"], info: "DigitalOcean servers in the United Kingdom." },
            { label: "Australia", keys: ["australia"], info: "Linode servers in Australia for Oceanic region." },
        ]
    },
    {
        title: "cPanel Tools & Features",
        features: [
            // File & FTP Management
            { label: "File Manager", keys: ["file_manager"], info: "Manage, upload, and edit website files directly from your browser." },
            { label: "FTP Accounts", keys: ["ftp_accounts"], info: "Create FTP accounts for developers or team members." },
            { label: "Anonymous FTP", keys: ["anonymous_ftp"], info: "Allow anonymous access to certain FTP directories." },
            { label: "Web Disk (WebDAV)", keys: ["web_disk"], info: "Map your hosting storage as a network drive on your PC." },

            // Backup & Restore
            { label: "Backup Wizard", keys: ["backup_wizard"], info: "Guided tool for full or partial account backups." },
            { label: "JetBackup / Native Backups", keys: ["jetbackup"], info: "One-click restore for files, emails, and databases." },
            { label: "Download/Restore Home Directory", keys: ["backup_home"], info: "Backup/restore only website files." },
            { label: "Download/Restore Databases", keys: ["backup_db"], info: "Backup/restore only databases." },

            // Email
            { label: "Email Forwarders", keys: ["email_forwarders"], info: "Redirect incoming emails to other addresses." },
            { label: "Autoresponders", keys: ["autoresponders"], info: "Set automatic responses for incoming mail." },
            { label: "Mailing Lists", keys: ["mailing_lists"], info: "Manage groups of email subscribers." },
            { label: "Default Address (Catch-All)", keys: ["catch_all"], info: "Route all misaddressed emails to a single inbox." },
            { label: "Email Filters", keys: ["email_filters"], info: "Custom filtering rules for incoming mail." },
            { label: "Webmail (Horde/Roundcube)", keys: ["webmail"], info: "Access emails directly in your browser." },
            { label: "Email Authentication (SPF, DKIM, DMARC)", keys: ["email_auth"], info: "Prevent spoofing and improve email delivery." },

            // Domains & DNS (only what's NOT already in your list)
            { label: "Zone Editor (DNS Management)", keys: ["dns_zone_editor"], info: "Edit DNS records: A, MX, TXT, CNAME, etc." },

            // Software / App Installers
            { label: "Softaculous App Installer", keys: ["softaculous"], info: "One-click install for 400+ apps like WordPress, Joomla, Magento." },
            { label: "SitePad / Sitejet Builder", keys: ["sitejet_builder"], info: "Sitejet Builder is a fully-integrated do-it-yourself website builder. It allows you to build and launch competitive websites, fast." },
            { label: "WordPress Manager", keys: ["wordpress_manager"], info: "Manage installed WordPress sites easily." },

            // Metrics & Analytics
            { label: "Visitors Log", keys: ["visitors_log"], info: "See real-time site visitors." },
            { label: "Awstats", keys: ["awstats"], info: "Detailed web analytics reports." },
            { label: "Webalizer", keys: ["webalizer"], info: "Simple site traffic stats." },
            { label: "Analog Stats", keys: ["analog_stats"], info: "Lightweight traffic analyzer." },
            { label: "Error Logs", keys: ["error_logs"], info: "Track website errors." },
            { label: "Resource Usage (CPU/RAM)", keys: ["resource_usage"], info: "Monitor account-level server resource usage." },

            // Advanced Tools
            { label: "Cron Jobs", keys: ["cron_jobs"], info: "Schedule tasks and scripts." },
            { label: "Apache Handlers", keys: ["apache_handlers"], info: "Control how Apache handles file extensions." },
            { label: "MIME Types", keys: ["mime_types"], info: "Define how files are processed." },
            { label: "Error Pages", keys: ["error_pages"], info: "Customize 401, 403, 404, 500 error pages." },
            { label: "Indexes", keys: ["indexes"], info: "Control directory listing behavior." },
            { label: "Terminal / SSH Access", keys: ["ssh"], info: "Secure shell access for advanced users." },
        ]
    },
]

const PLANS_COMPARE_PREMIUM_HOSTING_VALUES = {
    // India Linode Plans
    PLUS: {
        websites: "Host 1 Website",
        storage: "20 GB Fast SSD Storage",
        cpu_ram: "1 CPU Cores | 1 GB RAM",
        entry_processes: "20 EP | 100 NOP | 20MB/s IO",
        infrastructure: "Linode Infrastructure",
        multi_location: true,
        moneyback: "7 Days",
        litespeed: true,
        ssl: true,
        backups: true,
        ddos: true,
        imunify360: true,
        india_linode: true,
        germany: false,
        singapore: false,
        usa: false,
        uk: false,
        australia: false,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_forwarders: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        email_filters: true,
        spam_filter: "Advanced AI + SpamAssassin",
        webmail: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
    },
    PRO: {
        websites: "Host 5 Websites",
        storage: "40 GB Fast SSD Storage",
        cpu_ram: "2 CPU Cores | 2 GB RAM",
        entry_processes: "30 EP | 150 NOP | 30MB/s IO",
        infrastructure: "Linode Infrastructure",
        multi_location: true,
        moneyback: "7 Days",
        litespeed: true,
        ssl: true,
        backups: true,
        ddos: true,
        imunify360: true,
        india_linode: true,
        germany: false,
        singapore: false,
        usa: false,
        uk: false,
        australia: false,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_forwarders: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        email_filters: true,
        spam_filter: "Advanced AI + SpamAssassin",
        webmail: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
    },
    ULTIMATE: {
        websites: "Host Unlimited Websites",
        storage: "Unlimited Fast SSD Storage",
        cpu_ram: "2 CPU Cores | 4 GB RAM",
        entry_processes: "50 EP | 150 NOP | 50 MB/s IO",
        infrastructure: "Linode Infrastructure",
        multi_location: true,
        moneyback: "7 Days",
        litespeed: true,
        ssl: true,
        backups: true,
        ddos: true,
        imunify360: true,
        india_linode: true,
        germany: false,
        singapore: false,
        usa: false,
        uk: false,
        australia: false,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_forwarders: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        email_filters: true,
        spam_filter: "Advanced AI + SpamAssassin",
        webmail: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
    },
    UNLIMITED_POWER: {
        websites: "Host Unlimited Websites",
        storage: "Unlimited Fast SSD Storage",
        bandwidth: "Unlimited GB Bandwidth",
        cpu_ram: "2 CPU Core | 4 GB RAM",
        entry_processes: "50 EP | 150 NOP | 50 MB/s IO",
        infrastructure: "Linode/DigitalOcean Infrastructure",
        multi_location: true,
        moneyback: "7 Days",
        litespeed: true,
        ssl: true,
        backups: true,
        ddos: true,
        imunify360: true,
        india_linode: true,
        netherlands: true,
        singapore: true,
        usa: true,
        uk: true,
        australia: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_forwarders: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        email_filters: true,
        spam_filter: "Advanced AI + SpamAssassin",
        webmail: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
    },
    // DigitalOcean Plans
    PREMIUM1: {
        websites: "Host 2 Website",
        storage: "30 GB Fast SSD Storage",
        bandwidth: "300 GB Bandwidth",
        cpu_ram: "2 CPU Core | 2 GB RAM",
        entry_processes: "20 EP | 100 NOP | 20MB/s IO",
        infrastructure: "DigitalOcean Infrastructure",
        multi_location: true,
        moneyback: "7 Days",
        litespeed: true,
        ssl: true,
        backups: true,
        ddos: true,
        imunify360: true,
        india_linode: false,
        netherlands: true,
        singapore: true,
        usa: true,
        uk: true,
        australia: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_forwarders: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        email_filters: true,
        spam_filter: "Advanced AI + SpamAssassin",
        webmail: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
    },
    PREMIUM2: {
        websites: "Host 4 Websites",
        storage: "Unlimited Fast SSD Storage",
        bandwidth: "Unlimited GB Bandwidth",
        cpu_ram: "2 CPU Cores | 2 GB RAM",
        entry_processes: "30 EP | 150 NOP | 30MB/s IO",
        infrastructure: "DigitalOcean Infrastructure",
        multi_location: true,
        moneyback: "7 Days",
        litespeed: true,
        ssl: true,
        backups: true,
        ddos: true,
        imunify360: true,
        india_linode: false,
        netherlands: true,
        singapore: true,
        usa: true,
        uk: true,
        australia: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_forwarders: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        email_filters: true,
        spam_filter: "Advanced AI + SpamAssassin",
        webmail: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
    },
    PREMIUM3: {
        websites: "Host 6 Websites",
        storage: "Unlimited Fast SSD Storage",
        bandwidth: "Unlimited GB Bandwidth",
        cpu_ram: "3 CPU Cores | 4 GB RAM",
        entry_processes: "40 EP | 200 NOP | 40MB/s IO",
        infrastructure: "DigitalOcean Infrastructure",
        multi_location: true,
        moneyback: "7 Days",
        litespeed: true,
        ssl: true,
        backups: true,
        ddos: true,
        imunify360: true,
        india_linode: false,
        netherlands: true,
        singapore: true,
        usa: true,
        uk: true,
        australia: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_forwarders: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        email_filters: true,
        spam_filter: "Advanced AI + SpamAssassin",
        webmail: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
    },
}

interface PremiumHostingSectionProps {
    selectedLocation: string
    selectedCurrency: "INR" | "USD"
    selectedCycle: string
    cycleOptions: Array<{ value: string; label: string }>
}

const PremiumHostingSection: React.FC<PremiumHostingSectionProps> = ({
    selectedLocation,
    selectedCurrency,
    selectedCycle,
    cycleOptions,
}) => {
    const countryCode = PREMIUM_PROVIDER_LOCATIONS.find(loc => loc.value === selectedLocation)?.code

    // Map Germany to Netherlands data in constants-premium.ts until we update the data structure
    const dataCountryCode = countryCode === "DE" ? "NET" : countryCode

    // Generate dynamic plan keys and meta based on location and available plans
    let planKeys: string[] = []
    let planMeta: Record<string, any> = {}

    // DigitalOcean locations: Show PREMIUM1, PREMIUM2, PREMIUM3, UNLIMITED_POWER (4 plans)
    planKeys = ["PREMIUM1", "PREMIUM2", "PREMIUM3", "UNLIMITED_POWER"]

    // Generate location-specific URLs
    const locationUrls: Record<string, string> = {
        IND: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind",
        SGP: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg",
        USA: "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa",
        UK: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk",
        DE: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-de",
        AUS: "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus"
    }

    const baseUrl = locationUrls[countryCode ?? "SGP"] || locationUrls.SGP

    let urlSuffix: string[] = []
    if (countryCode === "DE") {
        // Germany uses Netherlands URLs for now
        urlSuffix = ["de-do-premium1", "de-do-premium2", "de-do-premium3", "unlimitedpowertm"]
    } else if (countryCode === "AUS") {
        urlSuffix = ["aus-lw-premium1", "aus-lw-premium2", "aus-lw-premium3-1", "unlimitedpowertm"]
    } else {
        urlSuffix = [`${countryCode?.toLowerCase()}-do-premium1`, `${countryCode?.toLowerCase()}-do-premium2`, `${countryCode?.toLowerCase()}-do-premium3`, "unlimitedpowertm"]
    }

    planMeta = {
        PREMIUM1: {
            name: "PREMIUM 1",
            ctaLabel: "Get Started",
            ctaHref: `${baseUrl}/${urlSuffix[0]}`,
            priceInr: "₹169/mo",
            priceUsd: "$1.99/mo",
        },
        PREMIUM2: {
            name: "PREMIUM 2",
            badge: "Best Value",
            ctaLabel: "Get Started",
            ctaHref: `${baseUrl}/${urlSuffix[1]}`,
            priceInr: "₹249/mo",
            priceUsd: "$2.79/mo",

        },
        PREMIUM3: {
            name: "PREMIUM 3",
            ctaLabel: "Get Started",
            ctaHref: `${baseUrl}/${urlSuffix[2]}`,
            priceInr: "₹299/mo",
            priceUsd: "$3.49/mo",

        },
        UNLIMITED_POWER: {
            name: "UNLIMITED POWER",
            ctaLabel: "Get Started",
            ctaHref: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
            priceInr: "₹399/mo",
            priceUsd: "$5.49/mo",
        }
    }

    return (
        <div>
            <PremiumHostingPlanGrid
                plans={PLANS_PREMIUM_HOSTING}
                locations={PREMIUM_PROVIDER_LOCATIONS}
                selectedLocation={selectedLocation}
                selectedCurrency={selectedCurrency}
                selectedCycle={selectedCycle}
                cycleOptions={cycleOptions}
            />

            <div className="text-center mb-8 my-16">
                <div className="flex justify-center items-center flex-wrap gap-4 mb-2">
                    <h2 className="text-3xl font-bold">Compare Our Plans</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    Easily evaluate features, pricing, and benefits across all premium hosting plans
                </p>
            </div>

            <HostingPlanComparisonTable
                featureGroups={PLANS_COMPARE_PREMIUM_HOSTING}
                planKeys={planKeys}
                values={PLANS_COMPARE_PREMIUM_HOSTING_VALUES}
                planMeta={planMeta}
            />
        </div>
    )
}

export default PremiumHostingSection