import { PLANS_VPS_HOSTING } from "./constants";

export type VpsAppFeature = {
    label: string;
    description?: string;
};

export type VpsAppSEO = {
    title?: string;
    description?: string;
    keywords?: string[];
    tags?: string[];
};

export type VpsApp = {
    id: string;
    slug: string;
    name: string;
    category: string;
    icon: string;
    shortDescription: string;
    about: string;
    minRam: number; // in GB
    features: VpsAppFeature[];
    useCases: string;
    whyDeploy: {
        title: string;
        description: string;
    }[];
    github?: string;
    website?: string;
    docs?: string;
    seo?: VpsAppSEO;
    disclaimer?: string;
};

export const VPS_APPS_CATEGORIES = [
    { id: "ai", label: "Artificial Intelligence" },
    { id: "development", label: "Development Tools" },
    { id: "devops", label: "DevOps & VPS Management" },
    { id: "database", label: "Databases & Backend" },
    { id: "productivity", label: "Productivity" },
    { id: "management", label: "Project Management" },
    { id: "communication", label: "Chat & Communication" },
    { id: "knowledge", label: "Knowledge Base & Docs" },
    { id: "analytics", label: "Analytics & Monitoring" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "storage", label: "File & Cloud Storage" },
    { id: "productivity", label: "Productivity" },
];

const ramToNameMap: Record<string, string> = {
    "4GB RAM": "4GB VPS",
    "8GB RAM": "8GB VPS",
    "16GB RAM": "16GB VPS",
    "32GB RAM": "32GB VPS",
    "64GB RAM": "64GB VPS",
    "128GB RAM": "128GB VPS"
};

export const PLANS_APP_VPS_HOSTING = PLANS_VPS_HOSTING.map(plan => ({
    ...plan,
    name: ramToNameMap[plan.ram] || plan.name
}));

