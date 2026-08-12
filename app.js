/**
 * cPanel Passenger entry point for Astro SSR (Node standalone adapter).
 *
 * Passenger sets process.env.PORT and expects the app to listen on it.
 * The Astro standalone adapter auto-starts a server when
 * ASTRO_NODE_AUTOSTART !== "disabled", reading PORT from the env.
 * So we simply import the built entry and let it boot.
 */

// Passenger supplies the port via process.env.PORT — Astro reads it automatically.
import './dist/server/entry.mjs';
