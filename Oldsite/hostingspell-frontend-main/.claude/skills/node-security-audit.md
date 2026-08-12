---
name: node-security-audit
description: Analyze JavaScript/TypeScript applications (Node.js, React, Next.js, NestJS, Svelte, Vite) to detect, validate, and fix security vulnerabilities across backend, frontend, dependencies, and runtime behavior.
user_invocable: true
---

# Node.js & JavaScript Security Audit Skill

## Purpose

Analyze JavaScript/TypeScript applications (Node.js, React, Next.js, NestJS, Svelte, Vite) to detect, validate, and fix security vulnerabilities across backend, frontend, dependencies, and runtime behavior.

---

## When to use

Use this skill when:

* Auditing full-stack JS/TS applications
* Reviewing SSR frameworks (Next.js, SvelteKit)
* Checking npm/pnpm/yarn dependencies
* Securing APIs and frontend apps before production

---

## Scope

* Node.js applications
* Frontend frameworks:

  * React
  * Next.js
  * Svelte / SvelteKit
  * Vite-based apps
* Backend frameworks:

  * NestJS
  * Express
  * Fastify
* Package managers:

  * npm
  * pnpm
  * yarn

---

## Workflow

### 1. Project Recon

* Detect:

  * Framework (Next.js, NestJS, etc.)
  * SSR vs CSR architecture
  * API routes and backend services
  * Auth flows (JWT, OAuth, sessions)
  * Environment config (.env usage)

---

### 2. Static Analysis (SAST)

#### Injection Vulnerabilities

* NoSQL Injection (MongoDB queries)
* Command Injection (child_process, exec)
* Prototype pollution
* Template injection (SSR rendering)

#### XSS (Cross-Site Scripting)

* Unsafe dangerouslySetInnerHTML (React)
* Unescaped SSR output (Next.js)
* DOM-based XSS

#### CSRF

* Missing CSRF protection on APIs
* Cookie-based auth without CSRF tokens

#### Authentication & Authorization

* Broken JWT validation
* Missing role-based access checks
* Insecure session handling

---

### 3. Framework-Specific Checks

#### Next.js

* Exposed API routes
* getServerSideProps data leaks
* Misconfigured middleware
* Environment variable exposure (NEXT_PUBLIC misuse)

#### React

* Unsafe state handling
* Sensitive data in client bundle
* Debug info exposed in production

#### NestJS

* Missing guards (AuthGuard, RolesGuard)
* Improper DTO validation
* Open endpoints without auth

#### Svelte / SvelteKit

* Unsafe reactive statements
* SSR injection risks
* Endpoint misconfiguration

#### Vite

* Environment variable leakage
* Dev config exposed in production

---

### 4. Dependency Security (npm ecosystem)

* Analyze:

  * package.json
  * lock files (package-lock.json, pnpm-lock.yaml, yarn.lock)

* Detect:

  * Known vulnerable packages (CVEs)
  * Malicious packages (typosquatting)
  * Over-permissive dependencies

---

### 5. Secrets Detection

Find:

* API keys
* JWT secrets
* Firebase / AWS configs
* Hardcoded tokens in code

---

### 6. API Security

* Check:

  * IDOR (Insecure Direct Object Reference)
  * Missing rate limiting
  * Broken access control
  * GraphQL overfetching / introspection exposure

---

### 7. SSR & Rendering Risks

* Server-side injection
* Data leakage via props
* Improper serialization
* HTML injection via templates

---

### 8. File & Storage Risks

* Unsafe file uploads
* Path traversal
* Public exposure of storage buckets

---

### 9. Session & Cookie Security

* Missing HttpOnly flag
* Missing Secure flag
* SameSite misconfiguration
* Token leakage in localStorage

---

### 10. Runtime / Dynamic Analysis (DAST mindset)

Simulate:

* API abuse
* Auth bypass attempts
* Malicious payload injection
* Replay attacks

---

### 11. Build & Deployment Risks

* Dev configs in production
* Source maps exposed
* Debug logs leaking secrets
* Improper environment separation

---

### 12. Risk Prioritization

Classify:

* Critical: RCE, auth bypass, injection
* High: data exposure, XSS
* Medium: misconfigurations
* Low: best practices

---

### 13. Fix Generation

For each issue:

* Explain clearly
* Show vulnerable code
* Provide secure fix
* Follow OWASP Top 10 + Node.js best practices

---

## Output Format

### [Severity] Title

* Location: file + line
* Description: what is wrong
* Impact: attacker capability
* Fix: secure code snippet

---

## Tools & Techniques (if available)

* npm audit / pnpm audit / yarn audit
* Static analyzers (ESLint security plugins)
* Dependency scanners (Snyk-style)
* Runtime testing tools
* AI reasoning for logic flaws

---

## Guardrails

* Never trust client-side validation
* Always validate and sanitize input
* Prefer secure defaults
* Avoid false positives, focus on real exploitability

---

## Goal

Deliver a **clear, actionable security report with real fixes**, covering both frontend and backend risks.
