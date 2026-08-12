// Reseller Hosting

const default_bandwidth_fup = "Unlimited bandwidth is provided with your plan, subject to our Fair Usage Policies (FUP). Excessive or abusive usage (such as file sharing, video streaming, or traffic not related to normal website hosting) may result in extra charges* or suspension. To learn more, see our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."
const default_storage_fup = "Total NVMe storage allocated to your accounts. Disk usage is subject to strict Fair Usage Policies (FUP) in such cases it cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."

const default_plan_one_features = [
    { label: "25 cPanel accounts" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited SSD Disk Space", info: default_storage_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "cPanel / WHM" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const cloud_plan_one_features = [
    { label: "15 cPanel accounts" },
    { label: "50GB NVMe SSD Disk Space" },
    { label: "2GB LVE RAM per cPanel" },
    { label: "2 vCPU per cPanel" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "Whitelabel Servers" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const cloud_plan_two_features = [
    { label: "50 cPanel accounts" },
    { label: "250GB NVMe SSD Disk Space" },
    { label: "2GB LVE RAM per cPanel" },
    { label: "2 vCPU per cPanel" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "Whitelabel Servers" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const cloud_plan_three_features = [
    { label: "50 cPanel accounts" },
    { label: "500GB NVMe SSD Disk Space" },
    { label: "4GB LVE RAM per cPanel" },
    { label: "2 vCPU per cPanel" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "Whitelabel Servers" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const cloud_plan_four_features = [
    { label: "100 cPanel accounts" },
    { label: "500GB NVMe SSD Disk Space" },
    { label: "4GB LVE RAM per cPanel" },
    { label: "2 vCPU per cPanel" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "Whitelabel Servers" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const cloud_plan_five_features = [
    { label: "150 cPanel accounts" },
    { label: "500GB NVMe SSD Disk Space" },
    { label: "4GB LVE RAM per cPanel" },
    { label: "2 vCPU per cPanel" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "Whitelabel Servers" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const cloud_plan_six_features = [
    { label: "200 cPanel accounts" },
    { label: "500GB NVMe SSD Disk Space" },
    { label: "4GB LVE RAM per cPanel" },
    { label: "2 vCPU per cPanel" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "Whitelabel Servers" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const default_plan_two_features = [
    { label: "50 cPanel accounts" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited SSD Disk Space", info: default_storage_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "cPanel / WHM" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const default_plan_three_features = [
    { label: "100 cPanel accounts" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited SSD Disk Space", info: default_storage_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "cPanel / WHM" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

const default_plan_four_features = [
    { label: "150 cPanel accounts" },
    { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited SSD Disk Space", info: default_storage_fup },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "Unlimited MySQL Databases" },
    { label: "cPanel / WHM" },
    { label: "Free Daily Automatic Backup" },
    { label: "Unlimited Custom Packages" },
    { label: "LiteSpeed Server + LSCache" },
    { label: "Free SSL" },
    { label: "Imunify360" },
    { label: "JetBackup" },
    { label: "Softaculous Script Installer" },
    { label: "24/7/365 Support" },
]

export const PLANS_RESELLER_HOSTING = [
    {
        name: "HS INITIATIVE",
        caption: "ENTRY LEVEL",
        price: 12.99,
        color: "text-[#FFCD02]",
        button: "text-[#FFCD02] border-[#FFCD02] hover:bg-[#FFCD02] hover:text-black",
        className: "bg-[#EFF4ED] hover:border-[#FFCD02]",
        highlight: false,
        icon: "/img/plan-stellar-start.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        // Location-specific features and names
        locationFeatures: {
            IND: default_plan_one_features,
            NET: default_plan_one_features,
            SGP: cloud_plan_one_features,
            USA: cloud_plan_one_features,
            UK: cloud_plan_one_features,
            AUS: cloud_plan_one_features,
            CAN: cloud_plan_one_features,
            MEX: cloud_plan_one_features,
        },
        // Location-specific plan names for display
        locationNames: {
            IND: "HS INITIATIVE",
            NET: "HS INITIATIVE",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 1199,
                    annual: 11299,
                },
                USD: {
                    monthly: 12.99,
                    annual: 129,
                }
            },
            NET: {
                INR: {
                    monthly: 1199,
                    annual: 11299,
                },
                USD: {
                    monthly: 12.99,
                    annual: 129,
                }
            },
        },
    },
    {
        name: "HS EARLDOM",
        caption: "MID TIER",
        price: 25.99,
        color: "text-[#005CEE]",
        button: "text-[#005CEE] border-[#005CEE] hover:bg-[#005CEE]",
        className: "bg-[#BFD7FC] hover:border-[#005CEE]",
        highlight: false,
        icon: "/img/plan-galactic-growth.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        // Location-specific features and names
        locationFeatures: {
            IND: default_plan_two_features,
            NET: default_plan_two_features,
        },
        // Location-specific plan names for display
        locationNames: {
            IND: "HS EARLDOM",
            NET: "HS EARLDOM",
            // AUS: "HS INITIATIVE",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 2299,
                    annual: 22599,
                },
                USD: {
                    monthly: 25.99,
                    annual: 258,
                }
            },
            NET: {
                INR: {
                    monthly: 2299,
                    annual: 22599,
                },
                USD: {
                    monthly: 25.99,
                    annual: 258,
                }
            },
        },
    },
    {
        name: "HS DUKEDOM",
        caption: "HIGH PERFORMENCE",
        price: 51.99,
        color: "text-[#ED1C24]",
        button: "text-[#ED1C24] border-[#ED1C24] hover:bg-[#ED1C24]",
        className: "bg-[#EEDAE2] hover:border-[#ED1C24]",
        highlight: false,
        icon: "/img/plan-cosmic-expansion.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        // Location-specific features and names
        locationFeatures: {
            IND: default_plan_three_features,
            NET: default_plan_three_features,
        },
        // Location-specific plan names for display
        locationNames: {
            IND: "HS DUKEDOM",
            NET: "HS DUKEDOM",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 4599,
                    annual: 45199,
                },
                USD: {
                    monthly: 51.99,
                    annual: 516,
                }
            },
            NET: {
                INR: {
                    monthly: 4599,
                    annual: 45199,
                },
                USD: {
                    monthly: 51.99,
                    annual: 516,
                }
            },
        },
    },
    {
        name: "HS KINGDOM",
        caption: "ULTRA PERFORMENCE",
        price: 77.99,
        color: "text-[#3F22A8]",
        button: "text-[#3F22A8] border-[#3F22A8] hover:bg-[#3F22A8]",
        className: "bg-[#D5DAF3] hover:border-[#3F22A8]",
        highlight: false,
        icon: "/img/plan-universal-power.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        // Location-specific features and names
        locationFeatures: {
            IND: default_plan_four_features,
            NET: default_plan_four_features,
        },
        // Location-specific plan names for display
        locationNames: {
            IND: "HS KINGDOM",
            NET: "HS KINGDOM",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 6899,
                    annual: 67799,
                },
                USD: {
                    monthly: 77.99,
                    annual: 774,
                }
            },
            NET: {
                INR: {
                    monthly: 6899,
                    annual: 67799,
                },
                USD: {
                    monthly: 77.99,
                    annual: 774,
                }
            },
        },
    },
    // {
    //     name: "HS INITIATIVE CLOUD",
    //     caption: "ENTRY LEVEL",
    //     price: 12.99,
    //     color: "text-[#FFCD02]",
    //     button: "text-[#FFCD02] border-[#FFCD02] hover:bg-[#FFCD02] hover:text-black",
    //     className: "bg-[#EFF4ED] hover:border-[#FFCD02]",
    //     highlight: false,
    //     icon: "/img/plan-stellar-start.png",
    //     description: "SELECT BILLING CYCLE ON CHECKOUT",
    //     // Location-specific features and names
    //     locationFeatures: {
    //         SGP: cloud_plan_one_features,
    //         USA: cloud_plan_one_features,
    //         UK: cloud_plan_one_features,
    //         AUS: cloud_plan_one_features,
    //         CAN: cloud_plan_one_features,
    //         MEX: cloud_plan_one_features,
    //     },
    //     // Location-specific plan names for display
    //     locationNames: {
    //         SGP: "HS INITIATIVE CLOUD",
    //         USA: "HS INITIATIVE CLOUD",
    //         UK: "HS INITIATIVE CLOUD",
    //         AUS: "HS INITIATIVE CLOUD",
    //         CAN: "HS INITIATIVE CLOUD",
    //         MEX: "HS INITIATIVE CLOUD",
    //     },
    //     links: {
    //         SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
    //         USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
    //         UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
    //         AUS: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
    //         CAN: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
    //         MEX: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
    //     },
    //     pricing: {
    //         SGP: {
    //             INR: {
    //                 monthly: 1199,
    //                 annual: 11299,
    //             },
    //             USD: {
    //                 monthly: 12.99,
    //                 annual: 129,
    //             }
    //         },
    //         USA: {
    //             INR: {
    //                 monthly: 1199,
    //                 annual: 11299,
    //             },
    //             USD: {
    //                 monthly: 12.99,
    //                 annual: 129,
    //             }
    //         },
    //         UK: {
    //             INR: {
    //                 monthly: 1199,
    //                 annual: 11299,
    //             },
    //             USD: {
    //                 monthly: 12.99,
    //                 annual: 129,
    //             }
    //         },
    //         AUS: {
    //             INR: {
    //                 monthly: 1199,
    //                 annual: 11299,
    //             },
    //             USD: {
    //                 monthly: 12.99,
    //                 annual: 129,
    //             }
    //         },
    //         CAN: {
    //             INR: {
    //                 monthly: 1199,
    //                 annual: 11299,
    //             },
    //             USD: {
    //                 monthly: 12.99,
    //                 annual: 129,
    //             }
    //         },
    //         MEX: {
    //             INR: {
    //                 monthly: 1199,
    //                 annual: 11299,
    //             },
    //             USD: {
    //                 monthly: 12.99,
    //                 annual: 129,
    //             }
    //         },
    //     },
    // },
    // {
    //     name: "HS EARLDOM CLOUD",
    //     caption: "MID TIER",
    //     price: 25.99,
    //     color: "text-[#005CEE]",
    //     button: "text-[#005CEE] border-[#005CEE] hover:bg-[#005CEE]",
    //     className: "bg-[#BFD7FC] hover:border-[#005CEE]",
    //     highlight: false,
    //     icon: "/img/plan-galactic-growth.png",
    //     description: "SELECT BILLING CYCLE ON CHECKOUT",
    //     // Location-specific features and names
    //     locationFeatures: {
    //         SGP: cloud_plan_two_features,
    //         USA: cloud_plan_two_features,
    //         UK: cloud_plan_two_features,
    //         AUS: cloud_plan_two_features,
    //         CAN: cloud_plan_two_features,
    //         MEX: cloud_plan_two_features,
    //     },
    //     // Location-specific plan names for display
    //     locationNames: {
    //         SGP: "HS EARLDOM CLOUD",
    //         USA: "HS EARLDOM CLOUD",
    //         UK: "HS EARLDOM CLOUD",
    //         AUS: "HS EARLDOM CLOUD",
    //         CAN: "HS EARLDOM CLOUD",
    //         MEX: "HS EARLDOM CLOUD",
    //     },
    //     links: {
    //         SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
    //         USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
    //         UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
    //         AUS: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
    //         CAN: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
    //         MEX: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs- ",
    //     },
    //     pricing: {
    //         SGP: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         USA: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         UK: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         AUS: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         CAN: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         MEX: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //     },
    // },
    // {
    //     name: "HS DUKEDOM CLOUD",
    //     caption: "HIGH PERFORMENCE",
    //     price: 51.99,
    //     color: "text-[#ED1C24]",
    //     button: "text-[#ED1C24] border-[#ED1C24] hover:bg-[#ED1C24]",
    //     className: "bg-[#EEDAE2] hover:border-[#ED1C24]",
    //     highlight: false,
    //     icon: "/img/plan-cosmic-expansion.png",
    //     description: "SELECT BILLING CYCLE ON CHECKOUT",
    //     // Location-specific features and names
    //     locationFeatures: {
    //         SGP: cloud_plan_three_features,
    //         USA: cloud_plan_three_features,
    //         UK: cloud_plan_three_features,
    //         AUS: cloud_plan_three_features,
    //         CAN: cloud_plan_three_features,
    //         MEX: cloud_plan_three_features,
    //     },
    //     // Location-specific plan names for display
    //     locationNames: {
    //         SGP: "HS DUKEDOM CLOUD",
    //         USA: "HS DUKEDOM CLOUD",
    //         UK: "HS DUKEDOM CLOUD",
    //         AUS: "HS DUKEDOM CLOUD",
    //         CAN: "HS DUKEDOM CLOUD",
    //         MEX: "HS DUKEDOM CLOUD",
    //     },
    //     links: {
    //         SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    //         USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    //         UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    //         AUS: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    //         CAN: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    //         MEX: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    //     },
    //     pricing: {
    //         SGP: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         USA: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         UK: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         AUS: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         CAN: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         MEX: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //     },
    // },
    // {
    //     name: "HS KINGDOM CLOUD",
    //     caption: "ULTRA PERFORMENCE",
    //     price: 77.99,
    //     color: "text-[#3F22A8]",
    //     button: "text-[#3F22A8] border-[#3F22A8] hover:bg-[#3F22A8]",
    //     className: "bg-[#D5DAF3] hover:border-[#3F22A8]",
    //     highlight: false,
    //     icon: "/img/plan-universal-power.png",
    //     description: "SELECT BILLING CYCLE ON CHECKOUT",
    //     // Location-specific features and names
    //     locationFeatures: {
    //         SGP: cloud_plan_four_features,
    //         USA: cloud_plan_four_features,
    //         UK: cloud_plan_four_features,
    //         AUS: cloud_plan_four_features,
    //         CAN: cloud_plan_four_features,
    //         MEX: cloud_plan_four_features,
    //     },
    //     // Location-specific plan names for display
    //     locationNames: {
    //         SGP: "HS KINGDOM CLOUD",
    //         USA: "HS KINGDOM CLOUD",
    //         UK: "HS KINGDOM CLOUD",
    //         AUS: "HS KINGDOM CLOUD",
    //         CAN: "HS KINGDOM CLOUD",
    //         MEX: "HS KINGDOM CLOUD",
    //     },
    //     links: {
    //         SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
    //         USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
    //         UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
    //         AUS: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
    //         CAN: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
    //         MEX: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
    //     },
    //     pricing: {
    //         SGP: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         USA: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         UK: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         AUS: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         CAN: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //         MEX: {
    //             INR: {
    //                 monthly: 2299,
    //                 annual: 22599,
    //             },
    //             USD: {
    //                 monthly: 25.99,
    //                 annual: 258,
    //             }
    //         },
    //     },
    // },
]

// Compare Configs

export const PLANS_COMPARE_RESELLER_HOSTING = [
    {
        title: "Resources & Limits",
        features: [
            { label: "cPanel Accounts", keys: ["cpanel_accounts"], info: "Number of individual cPanel accounts you can create." },
            {
                label: "Disk Space (NVMe)",
                keys: ["disk_space"],
                info: "Total NVMe storage allocated to reseller accounts. Disk usage is subject to strict Fair Usage Policies (FUP) in such cases it cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."
            },
            { label: "Bandwidth", keys: ["bandwidth"], info: default_bandwidth_fup },
            { label: "Total RAM Per cPanel", keys: ["per_cpanel_resources"], info: "Dedicated CPU and RAM per cPanel account." },
        ],
    },
    {
        title: "WHM & Billing",
        features: [
            { label: "cPanel/WHM", keys: ["cpanel_whm"], info: "Whether WHM access and cPanel accounts are included." },
            { label: "Unlimited Custom Packages", keys: ["unlimited_packages"], info: "Ability to create unlimited custom hosting packages." },
            { label: "Private Name Servers", keys: ["private_ns"], info: "Custom nameservers for white-label branding." },
            { label: "Fully White-Branded", keys: ["fully_white_branded"], info: "Complete white-label hosting environment." },
        ],
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
        title: "Support & Security",
        features: [
            { label: "Free SSL", keys: ["ssl_cert"], info: "Whether SSL certificates are included for all hosted domains." },
            { label: "Free Daily Automatic Backup", keys: ["daily_auto_backup"], info: "Whether automatic daily backups are included." },
            { label: "JetBackup", keys: ["jetbackup"], info: "Whether JetBackup is included for backup management." },
            { label: "Backups", keys: ["backups"], info: "Backup frequency and retention." },
            { label: "LiteSpeed Server + LSCache", keys: ["litespeed_lscache"], info: "LiteSpeed Web Server with LSCache for high performance." },
            { label: "DDoS Protection", keys: ["ddos_protection"], info: "Level of DDoS mitigation included." },
            { label: "Malware Protection", keys: ["malware_protection"], info: "Security suite for malware scanning and cleanup." },
            { label: "Imunify360", keys: ["imunify360"], info: "Whether Imunify360 advanced security suite is included." },
            { label: "Support", keys: ["support"], info: "Type of technical support provided." },
        ],
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
];

export const PLANS_COMPARE_RESELLER_HOSTING_VALUES = {
    HS_INITIATIVE: {
        disk_space: "Unlimited SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "25 Accounts",
        unlimited_ssd: false,
        unlimited_bandwidth: false,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "1 Core / 1 GB RAM",
        whmcs_license: false,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Weekly Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Standard",
        malware_protection: "ImunifyAV",
        imunify360: true,
        support: "Self-Managed",
        india: true,
        germany: false,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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

    /**
     * HS_EARLDOM increases resources and introduces 24/7 support plus enhanced malware protection using Imunify360. 
     * Suitable for growing reseller businesses needing more accounts and multi-region presence.
     */
    HS_EARLDOM: {
        disk_space: "Unlimited SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "50 Accounts",
        unlimited_ssd: false,
        unlimited_bandwidth: false,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "1 Core / 1 GB RAM",
        whmcs_license: false,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Weekly Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Standard",
        malware_protection: "Imunify360",
        imunify360: true,
        support: "24/7 Support",
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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

    /**
     * HS_DUKEDOM provides generous resources along with a free WHMCS license, daily backups and advanced DDoS mitigation. 
     * Ideal for established resellers hosting a large number of accounts across multiple regions.
     */
    HS_DUKEDOM: {
        disk_space: "Unlimited SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "100 Accounts",
        unlimited_ssd: false,
        unlimited_bandwidth: false,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "1 Core / 1 GB RAM",
        whmcs_license: true,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Daily Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Advanced",
        malware_protection: "Imunify360",
        imunify360: true,
        support: "24/7 Support",
        india: true,
        germany: true,
        usa: true,
        london: false,
        netherlands: false,
        singapore: false,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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

    /**
     * HS_KINGDOM is the top tier reseller plan with abundant NVMe storage, high bandwidth and the highest cPanel account limits. 
     * It includes free WHMCS, daily backups, premium support and worldwide server coverage.
     */
    HS_KINGDOM: {
        disk_space: "Unlimited SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "150 Accounts",
        unlimited_ssd: true,
        unlimited_bandwidth: true,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "1 Core / 1 GB RAM",
        whmcs_license: true,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Daily Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Advanced",
        malware_protection: "Imunify360",
        imunify360: true,
        support: "Priority 24/7 Support",
        india: true,
        germany: true,
        usa: true,
        london: true,
        netherlands: true,
        singapore: true,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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
};

export const PLANS_COMPARE_RESELLER_CLOUD_HOSTING_VALUES = {
    HS_INITIATIVE: {
        disk_space: "50GB NVMe SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "15 Accounts",
        unlimited_ssd: false,
        unlimited_bandwidth: false,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "2 Core / 2 GB RAM",
        whmcs_license: false,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Weekly Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Standard",
        malware_protection: "ImunifyAV",
        imunify360: true,
        support: "Self-Managed",
        india: true,
        germany: false,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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

    /**
     * HS_EARLDOM increases resources and introduces 24/7 support plus enhanced malware protection using Imunify360. 
     * Suitable for growing reseller businesses needing more accounts and multi-region presence.
     */
    HS_EARLDOM: {
        disk_space: "250GB NVMe SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "50 Accounts",
        unlimited_ssd: false,
        unlimited_bandwidth: false,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "2 Core / 2 GB RAM",
        whmcs_license: false,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Weekly Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Standard",
        malware_protection: "Imunify360",
        imunify360: true,
        support: "24/7 Support",
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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

    /**
     * HS_DUKEDOM provides generous resources along with a free WHMCS license, daily backups and advanced DDoS mitigation. 
     * Ideal for established resellers hosting a large number of accounts across multiple regions.
     */
    HS_DUKEDOM: {
        disk_space: "500GB NVMe SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "50 Accounts",
        unlimited_ssd: false,
        unlimited_bandwidth: false,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "2 Core / 4 GB RAM",
        whmcs_license: true,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Daily Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Advanced",
        malware_protection: "Imunify360",
        imunify360: true,
        support: "24/7 Support",
        india: true,
        germany: true,
        usa: true,
        london: false,
        netherlands: false,
        singapore: false,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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

    /**
     * HS_KINGDOM is the top tier reseller plan with abundant NVMe storage, high bandwidth and the highest cPanel account limits. 
     * It includes free WHMCS, daily backups, premium support and worldwide server coverage.
     */
    HS_KINGDOM: {
        disk_space: "500GB NVMe SSD Disk Space",
        bandwidth: "Unlimited Bandwidth",
        cpanel_accounts: "100 Accounts",
        unlimited_ssd: true,
        unlimited_bandwidth: true,
        cpanel_whm: true,
        unlimited_packages: true,
        fully_white_branded: true,
        per_cpanel_resources: "2 Core / 4 GB RAM",
        whmcs_license: true,
        private_ns: true,
        daily_auto_backup: true,
        jetbackup: true,
        litespeed_lscache: true,
        backups: "Daily Backups",
        ssl_cert: "Free SSL",
        ddos_protection: "Advanced",
        malware_protection: "Imunify360",
        imunify360: true,
        support: "Priority 24/7 Support",
        india: true,
        germany: true,
        usa: true,
        london: true,
        netherlands: true,
        singapore: true,
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
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        backup_home: true,
        backup_db: true,
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
        // Database
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
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
};
