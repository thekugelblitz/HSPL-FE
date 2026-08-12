import fs from "fs";
import path from "path";
import { VpsApp } from "./constants-apps";

const DATA_DIR = path.join(process.cwd(), "data", "apps");

/**
 * Reads and parses a specific JSON app file by its filename (slug).
 * Used for dynamic routing to avoid fetching all 200+ apps into memory
 * just to display a single page.
 */
export function getVpsAppBySlug(slug: string): VpsApp | null {
    try {
        const filePath = path.join(DATA_DIR, `${slug}.json`);
        // Verify path prevents directory traversal
        if (!filePath.startsWith(DATA_DIR)) return null;

        if (!fs.existsSync(filePath)) return null;

        const fileContent = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(fileContent) as VpsApp;
    } catch (e) {
        console.error(`Failed to load app data for ${slug}`, e);
        return null;
    }
}

/**
 * Dynamically loads and parses all JSON app files from the directory.
 * Useful for the main listing page or generating static params.
 */
export function getAllVpsApps(): VpsApp[] {
    try {
        if (!fs.existsSync(DATA_DIR)) return [];

        const fileNames = fs.readdirSync(DATA_DIR);
        const apps = fileNames
            .filter(name => name.endsWith(".json"))
            .map(name => {
                const filePath = path.join(DATA_DIR, name);
                const fileContent = fs.readFileSync(filePath, "utf-8");
                return JSON.parse(fileContent) as VpsApp;
            });

        return apps;
    } catch (e) {
        console.error("Failed to load all apps", e);
        return [];
    }
}

export function getVpsAppsByCategory(categoryId: string | null = null): VpsApp[] {
    const allApps = getAllVpsApps();
    if (!categoryId) return allApps;
    return allApps.filter(app => app.category === categoryId);
}
