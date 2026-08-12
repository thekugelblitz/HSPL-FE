import {
    PREMIUM_PROVIDER_LOCATIONS,
    CLOUD_PROVIDER_LOCATIONS,
    VPS_PROVIDER_LOCATIONS,
    COMBO_PROVIDER_LOCATIONS,
    RESELLER_PROVIDER_LOCATIONS,
    ALL_PROVIDER_LOCATIONS,
    GLOBAL_BILLING_CYCLES,
    SUPPORTED_CURRENCIES,
} from "@/lib/constants";

export const hostingConfig = {
    webhosting: {
        label: "Web Hosting",
        icon: "Globe",
        hasCustomComponent: false,
        subTypes: [
            { value: "cloud", label: "Cloud Hosting", locations: CLOUD_PROVIDER_LOCATIONS, billing: GLOBAL_BILLING_CYCLES.cloudhosting },
            { value: "premium", label: "Premium Hosting", locations: PREMIUM_PROVIDER_LOCATIONS, billing: GLOBAL_BILLING_CYCLES.premiumhosting },
            { value: "combo", label: "Combo Hosting", locations: COMBO_PROVIDER_LOCATIONS, billing: GLOBAL_BILLING_CYCLES.combohosting },
        ],
    },
    vpshosting: {
        label: "VPS Hosting",
        icon: "Server",
        hasCustomComponent: false,
        subTypes: [
            { value: "vpscloud", label: "KVM VPS Hosting", locations: VPS_PROVIDER_LOCATIONS, billing: GLOBAL_BILLING_CYCLES.vpshosting },
            // { value: "vpslinuxcloud", label: "Linux Cloud VPS Hosting", locations: VPS_PROVIDER_LOCATIONS, billing: GLOBAL_BILLING_CYCLES.vpshosting },
            // { value: "vpswindowscloud", label: "Windows Cloud VPS Hosting", locations: VPS_PROVIDER_LOCATIONS, billing: GLOBAL_BILLING_CYCLES.vpshosting },
        ],
    },
    resellerhosting: {
        label: "Reseller Hosting",
        icon: "Server",
        hasCustomComponent: false,
        subTypes: [
            { value: "reseller", label: "Reseller Hosting", locations: RESELLER_PROVIDER_LOCATIONS, billing: GLOBAL_BILLING_CYCLES.resellerhosting },
        ],
    },
    domains: {
        label: "Domains",
        icon: "AtSign",
        hasCustomComponent: true,
        subTypes: []
    }
};


