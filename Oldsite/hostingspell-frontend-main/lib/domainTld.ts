export const IN_DOMAIN_KYC_TOOLTIP =
  "Before registering this domain, **mandatory KYC verification** is required as per **NIXI** (National Internet Exchange of India) registry rules. This applies to `.in` and related Indian coTLDs such as `.co.in`, `.net.in`, `.org.in`, and similar extensions."

/** Returns true for `.in` and Indian coTLDs that end with `.in` (e.g. `.co.in`, `.net.in`). */
export function requiresInRegistryKyc(tld: string): boolean {
  const normalized = tld.startsWith(".") ? tld.toLowerCase() : `.${tld.toLowerCase()}`
  return normalized === ".in" || normalized.endsWith(".in")
}
