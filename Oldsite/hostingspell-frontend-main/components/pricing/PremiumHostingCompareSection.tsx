import React from 'react'
import HostingPlanComparisonTable from './HostingPlanComparisonTable'

export const LOCATIONS = [
    {
        code: "IND",
        label: "India",
        countryCode: "IN",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
    {
        code: "SGP",
        label: "Singapore",
        countryCode: "SG",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
    {
        code: "USA",
        label: "USA",
        countryCode: "US",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
    {
        code: "UK",
        label: "UK",
        countryCode: "GB",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
    {
        code: "NET",
        label: "Netherlands",
        countryCode: "NL",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
    {
        code: "AUS",
        label: "Australia",
        countryCode: "AU",
        currencies: [
            { symbol: "₹", code: "INR" },
            { symbol: "$", code: "USD" }
        ]
    },
]

export type LocationInfo = typeof LOCATIONS[0]

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
        title: "Email Features",
        features: [
            { label: "Total Email Accounts", keys: ["emails"], info: "Number of email accounts you can create." },
            { label: "Emails Per Hour Per Domain", keys: ["emails_per_hour"], info: "Number of emails allowed per hour for each domain." },
            { label: "Email Attachment Size", keys: ["attachment_size"], info: "Maximum size supported for email attachments can vary based on plan." },
            { label: "Mailbox Size", keys: ["mailbox_size"], info: "Storage space allocated for each mailbox can vary based on plan." },
            { label: "POP3/IMAP Support", keys: ["pop3_imap"], info: "Access your email using POP3 or IMAP protocols." },
            { label: "SMTP Support", keys: ["smtp_support"], info: "Send and receive emails securely using SMTP protocol." },
            { label: "Webmail Access", keys: ["webmail"], info: "Login to your mailbox from any browser via webmail." },
            { label: "Roundcube Webmail", keys: ["roundcube"], info: "User-friendly Roundcube webmail client included." },
            { label: "Third-Party Client Access", keys: ["third_party_clients"], info: "Connect mailboxes with clients like Gmail, Outlook, Thunderbird, etc." },
            { label: "Email Forwarders", keys: ["email_forwarders"], info: "Forward emails automatically to other addresses." },
            { label: "Email Filters", keys: ["email_filters"], info: "Set rules to organize, block, or filter incoming emails." },
            { label: "Autoresponders", keys: ["autoresponders"], info: "Send automatic replies to incoming emails." },
            { label: "Mailing Lists", keys: ["mailing_lists"], info: "Create and manage email distribution lists." },
            { label: "Catch-All Address", keys: ["catch_all"], info: "Receive emails sent to non-existing addresses under your domain." },
            { label: "SPAM Protection", keys: ["spam_protection"], info: "Built-in filters to reduce unwanted emails." },
            { label: "DKIM & SPF Support", keys: ["dkim_spf"], info: "Email authentication standards to prevent spoofing." },
        ],
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
        title: "Database Features",
        features: [
            {
                label: "MySQL Databases",
                keys: ["mysql_databases"],
                info: "Create and manage MySQL databases for your websites and applications."
            },
            {
                label: "phpMyAdmin",
                keys: ["phpmyadmin"],
                info: "Manage MySQL databases with an easy-to-use web interface."
            },
            {
                label: "Remote MySQL",
                keys: ["remote_mysql"],
                info: "Access your MySQL databases remotely from external servers or applications."
            },
        ]
    },
    {
        title: "Development Features",
        features: [
            {
                label: "PHP",
                keys: ["php"],
                info: "Supports multiple PHP versions with customizable extensions."
            },
            {
                label: "PHP Frameworks (Laravel/Symfony/CodeIgniter)",
                keys: ["php_frameworks"],
                info: "Popular PHP frameworks supported via Composer."
            },
            {
                label: "Python (Django/Flask)",
                keys: ["python"],
                info: "Supports Python apps and Python frameworks with virtual environments."
            },
            {
                label: "Node.js",
                keys: ["nodejs"],
                info: "Host Node.js applications with version control."
            },
            {
                label: "Ruby",
                keys: ["ruby"],
                info: "Support for Ruby apps with Passenger (if available)."
            },
            {
                label: "Perl",
                keys: ["perl"],
                info: "Legacy support for Perl-based scripts."
            }
        ]
    },
    {
        title: "SEO & Browser Optimization",
        features: [
            { label: "Mod_Expires", keys: ["mod_expires"], info: "Controls how long files are cached in browsers." },
            { label: "Mod_Rewrite SEO URLs", keys: ["mod_rewrite"], info: "Enable human-readable URLs via .htaccess." },
            { label: "Browser Cache Optimization", keys: ["browser_cache"], info: "Leverages browser caching for speed." },
            { label: "Brotli Compression", keys: ["brotli"], info: "Compress files for faster delivery using Brotli." },
            { label: "KeepAlive", keys: ["keepalive"], info: "Reduces TCP overhead by reusing connections." },
        ],
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
        // SEO
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        // Database
        mysql_databases: "Unlimited MySQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
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
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    PRO: {
        websites: "Host 5 Websites",
        storage: "40 GB Fast SSD Storage",
        cpu_ram: "2 CPU Cores | 2 GB RAM",
        entry_processes: "30 EP | 100 NOP | 30MB/s IO",
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
        // SEO
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        // Database
        mysql_databases: "Unlimited MySQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
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
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
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
        // SEO
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        // Database
        mysql_databases: "Unlimited MySQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
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
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    UNLIMITED_POWER: {
        websites: "Host Unlimited Websites",
        storage: "Unlimited Fast SSD Storage",
        bandwidth: "Unlimited GB Bandwidth",
        cpu_ram: "2 CPU Core | 2 GB RAM",
        entry_processes: "20 EP | 100 NOP | 20 MB/s IO",
        infrastructure: "Linode/DigitalOcean Infrastructure",
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
        // SEO
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        // Database
        mysql_databases: "Unlimited MySQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
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
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    // DigitalOcean Plans
    PREMIUM1: {
        websites: "Host 2 Website",
        storage: "30 GB Fast SSD Storage",
        bandwidth: "300 GB Bandwidth",
        cpu_ram: "2 CPU Core & 2 GB RAM",
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
        // SEO
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        // Database
        mysql_databases: "Unlimited MySQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
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
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    PREMIUM2: {
        websites: "Host 4 Websites",
        storage: "Unlimited Fast SSD Storage",
        bandwidth: "Unlimited GB Bandwidth",
        cpu_ram: "2 CPU Core & 2 GB RAM",
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
        // SEO
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        // Database
        mysql_databases: "Unlimited MySQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
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
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    PREMIUM3: {
        websites: "Host 6 Websites",
        storage: "Unlimited Fast SSD Storage",
        bandwidth: "Unlimited GB Bandwidth",
        cpu_ram: "2 CPU Core & 2 GB RAM",
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
        // SEO
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        // Database
        mysql_databases: "Unlimited MySQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
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
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
}

interface PremiumHostingSectionProps {
    selectedLocation: LocationInfo
}

const PremiumHostingCompareSection: React.FC<PremiumHostingSectionProps> = ({
    selectedLocation
}) => {
    const countryCode = selectedLocation.code
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

export default PremiumHostingCompareSection
