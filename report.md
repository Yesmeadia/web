# Security Audit Report: Yes India Foundation (`yesindi-website`)

**Target Repository:** `c:\Users\anfas\Downloads\web`  
**Framework & Runtime:** Next.js 16.4.2 (App Router, Turbopack), React 19.1.0, Node.js  
**Audit Profile:** Standard Source-First Security Review  
**Execution Policy:** Sandboxed Source-and-Local-Only  
**Date:** October 23, 2026  

---

## 1. Executive Security Posture Summary

The application is a Next.js 16 web portal for the YES India Foundation. The frontend is largely static and informational, with one server-side API route ([`POST /api/contact`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts)) handling email delivery via Nodemailer.

**Key Strengths Observed:**
- **Robust Client-Side XSS Protection:** The codebase does not use `dangerouslySetInnerHTML`, `eval()`, or raw DOM manipulation. React 19's virtual DOM safely escapes rendered strings by default.
- **Environment Isolation:** Secrets (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`) are kept server-side in `process.env`. No sensitive variables are prefixed with `NEXT_PUBLIC_` or leaked to client bundles. `.gitignore` properly excludes `.env*` files.
- **Production Dependencies Free of Known Vulnerabilities:** `nodemailer` was upgraded to `10.2.1` and `axios` to `1.20.0`. Production dependencies report 0 vulnerabilities via `npm audit --omit=dev`.

**Key Risk Areas Requiring Action:**
1. **Email HTML Injection (High)** in the contact form endpoint ([`src/app/api/contact/route.ts`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L40-L45)).
2. **Missing Rate Limiting & Denial-of-Service Protection (Medium)** on [`POST /api/contact`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts).
3. **Missing HTTP Security Headers (Medium)** in [`next.config.ts`](file:///c:/Users/anfas/Downloads/web/next.config.ts).
4. **PII and Credential Logging (Low / Privacy)** in [`route.ts`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L13) and [`AlumniLogin.tsx`](file:///c:/Users/anfas/Downloads/web/src/components/templates/AlumniLogin.tsx#L10).

---

## 2. Confirmed Findings Summary

| ID | Severity | Title | Affected Boundary | CWE | Observed Result |
|---|---|---|---|---|---|
| **SEC-01** | **High** | Email HTML Injection & Phishing Vector | Public API → Admin Email Inbox | CWE-79 / CWE-80 | Unescaped user input renders arbitrary HTML inside administrative emails. |
| **SEC-02** | **Medium** | Lack of Rate Limiting / Email Flooding DoS | Public API → SMTP Relay | CWE-770 / CWE-307 | Unthrottled public endpoint permits automated spam & SMTP quota exhaustion. |
| **SEC-03** | **Medium** | Missing HTTP Security Headers & Clickjacking Risk | Browser ↔ Application Transport | CWE-1021 / CWE-693 | Application lacks standard security headers (`X-Frame-Options`, `HSTS`, `CSP`). |
| **SEC-04** | **Low** | Missing Server-Side Validation & Size Limits | Public API → Server Memory | CWE-20 | Server only verifies field existence; rejects no oversized or malformed payloads. |
| **SEC-05** | **Low** | Sensitive Data (PII & Credentials) Console Logging | Application → Server/Browser Logs | CWE-532 | Full request body and cleartext passwords logged to stdout/browser console. |
| **SEC-06** | **Info** | Dev-Dependency Advisory (`braces` Stack Exhaustion) | Local Dev Tooling (ESLint) | CWE-674 | Transitive dev dependency in `@next/eslint-plugin-next` flagged in dev-only scans. |

---

## 3. Detailed Findings & Remediation

### SEC-01: Email HTML Injection & Phishing Vector
* **Severity:** **High** (CVSS: 7.4)
* **Location:** [`src/app/api/contact/route.ts:37-46`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L37-L46)
* **Vulnerable Pattern:**
  ```typescript
  // src/app/api/contact/route.ts
  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };
  ```
* **Attack Mechanism:**
  An external unauthenticated user sends a payload containing HTML or anchor tags:
  ```json
  {
    "name": "Support",
    "email": "attacker@evil.com",
    "message": "<a href='https://phishing-site.example.com/login'>Urgent: Click here to verify account credentials</a><img src='https://canarytoken.com/log.png' />"
  }
  ```
  The administrator receiving the email in Outlook, Gmail, or Apple Mail receives a rendered HTML email with forged links, tracking beacons, or defaced styling originating from the trusted internal server address (`SMTP_USER`).
* **Smallest Effective Fix:**
  Escape HTML entities before template interpolation and provide a plain text alternative:
  ```typescript
  function escapeHtml(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  const cleanName = escapeHtml(name.trim().replace(/[\r\n]/g, ""));
  const cleanEmail = escapeHtml(email.trim());
  const cleanMessage = escapeHtml(message.trim());

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission from ${cleanName}`,
    text: `New Contact Message\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${cleanName}</p>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      <p><strong>Message:</strong><br>${cleanMessage.replace(/\n/g, "<br>")}</p>
    `,
  };
  ```

---

### SEC-02: Lack of Rate Limiting / Email Flooding DoS
* **Severity:** **Medium** (CVSS: 5.3)
* **Location:** [`src/app/api/contact/route.ts:5-15`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L5-L15)
* **Vulnerable Pattern:**
  The `POST /api/contact` route executes without any concurrency guard, IP throttle, or CAPTCHA validation.
* **Attack Mechanism:**
  A simple script can execute 10,000 automated requests within minutes:
  - Consuming SMTP sending quotas (e.g. Gmail SMTP, SendGrid, Amazon SES limits).
  - Causing SMTP provider blacklisting or suspension of the domain's email sending reputation.
  - Flooding the organization's inbox (`CONTACT_EMAIL`) with junk submissions.
* **Smallest Effective Fix:**
  1. Add an in-memory or Redis-based rate limiter (e.g., using a Map or `@upstash/ratelimit` / Next.js middleware) restricting submissions to maximum 5 requests per 10 minutes per IP.
  2. Implement a honeypot field or Cloudflare Turnstile token verification in `POST /api/contact`.

---

### SEC-03: Missing HTTP Security Headers & Clickjacking Exposure
* **Severity:** **Medium** (CVSS: 4.8)
* **Location:** [`next.config.ts:1-11`](file:///c:/Users/anfas/Downloads/web/next.config.ts)
* **Vulnerable Pattern:**
  `next.config.ts` does not define a `headers()` configuration, causing pages to be served without critical browser defensive controls.
* **Impact:**
  - **Clickjacking:** Without `X-Frame-Options` or `frame-ancestors`, the website can be framed inside a transparent `<iframe>` on malicious sites.
  - **MIME Sniffing:** Browsers may inspect content types and execute unexpected JavaScript if `X-Content-Type-Options: nosniff` is omitted.
* **Smallest Effective Fix:**
  Add a `headers()` section to [`next.config.ts`](file:///c:/Users/anfas/Downloads/web/next.config.ts):
  ```typescript
  import type { NextConfig } from "next";
  import path from "path";

  const securityHeaders = [
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
  ];

  const nextConfig: NextConfig = {
    turbopack: {
      root: path.resolve(__dirname),
    },
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ];
    },
  };

  export default nextConfig;
  ```

---

### SEC-04: Missing Server-Side Validation & Input Size Limits
* **Severity:** **Low** (CVSS: 3.7)
* **Location:** [`src/app/api/contact/route.ts:17-22`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L17-L22)
* **Vulnerable Pattern:**
  While the client enforces constraints via Yup in [`ContactClient.tsx:44-53`](file:///c:/Users/anfas/Downloads/web/src/app/contact/ContactClient.tsx#L44-L53) (`email().required()`, `message.max(200)`), the backend only checks:
  ```typescript
  if (!name || !email || !message) { ... }
  ```
* **Impact:**
  Attackers interacting directly with the HTTP API can submit multi-megabyte strings, non-string data types, or invalid email addresses, bypassing all client checks.
* **Smallest Effective Fix:**
  Validate inputs on the server:
  ```typescript
  if (
    typeof name !== "string" || name.length > 100 ||
    typeof email !== "string" || email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" || message.length > 2000
  ) {
    return NextResponse.json({ success: false, message: "Invalid submission data" }, { status: 400 });
  }
  ```

---

### SEC-05: Sensitive Data / Credential Logging in Output Streams
* **Severity:** **Low / Privacy Defect** (CWE-532)
* **Locations:**
  1. [`src/app/api/contact/route.ts:7,13`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L7-L13):
     ```typescript
     console.log("helooooo");
     console.log("bodyyy", body);
     ```
  2. [`src/components/templates/AlumniLogin.tsx:10`](file:///c:/Users/anfas/Downloads/web/src/components/templates/AlumniLogin.tsx#L10):
     ```typescript
     console.log("Login attempt:", { username, password });
     ```
* **Impact:**
  - Contact inquiries containing personal contact information (PII) are permanently written to server standard output / logging services.
  - User passwords in the Alumni Login component are written in plaintext to the browser's DevTools console, readable by installed browser extensions or screen captures.
* **Smallest Effective Fix:**
  Remove debug `console.log` statements containing raw input or credentials.

---

### SEC-06: Transitive Dev-Dependency Advisory (`braces` <= 3.0.3)
* **Severity:** **Informational / Low Threat to Production**
* **Location:** `node_modules/braces` via `@next/eslint-plugin-next` → `fast-glob` → `micromatch`
* **Analysis:**
  - `npm audit` flags `GHSA-vfj7-8cjw-p6xm` (stack-exhaustion DoS in AST walkers when processing malicious nested brace patterns).
  - This dependency is purely in `devDependencies` (used during `npm run lint`).
  - It is **never bundled into client code** or the Next.js production server.
  - Production builds (`npm audit --omit=dev`) are clean with **0 vulnerabilities**.
* **Recommendation:**
  Keep the latest `eslint-config-next@16.4.2` and rely on `npm audit --omit=dev` for production release gating. Avoid running `npm audit fix --force` as it causes breaking downgrades.

---

## 4. Remediation Checklist

- [ ] **Sanitize Contact Email HTML** in [`src/app/api/contact/route.ts`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L40-L45) to prevent HTML injection.
- [ ] **Add Server-Side Input Bounds** (string length and email regex) in [`src/app/api/contact/route.ts`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L17).
- [ ] **Configure Security Headers** (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) in [`next.config.ts`](file:///c:/Users/anfas/Downloads/web/next.config.ts).
- [ ] **Remove Debug Console Logs** in [`src/app/api/contact/route.ts`](file:///c:/Users/anfas/Downloads/web/src/app/api/contact/route.ts#L13) and [`src/components/templates/AlumniLogin.tsx`](file:///c:/Users/anfas/Downloads/web/src/components/templates/AlumniLogin.tsx#L10).
- [ ] **Add Simple Rate Limiting** to the contact API to prevent abuse.
- [ ] **Set `metadataBase`** in [`src/app/layout.tsx`](file:///c:/Users/anfas/Downloads/web/src/app/layout.tsx#L16) to resolve social OpenGraph URLs properly.

---
*Report generated in compliance with the Security Audit workflow.*
