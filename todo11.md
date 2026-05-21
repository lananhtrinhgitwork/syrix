# SYRIX.AI — PHASE 9: NAVIGATION LINKS & FOOTER CONSISTENCY AUDIT (TODO11)

> **Objective:** Perform a comprehensive system-wide audit on the top navigation bar and footer components to guarantee absolute routing alignment and eliminate missing layouts.
> **Current Issues:** Top navbar items fail to route correctly upon click states. Footer component is inconsistent (present on some screens, entirely missing on others).
> **Architecture Constraint:** Strictly NO `src` folder. Target layout files sit at the absolute root workspace: `components/layout/navbar.tsx`, `components/layout/footer.tsx`, and `app/[locale]/layout.tsx`.

---

## 1. TOP NAVBAR LINKAGE ALIGNMENT (`components/layout/navbar.tsx`)

You must ensure that the navbar does not use hardcoded static paths or native HTML `<a>` tags that break i18n locale context middleware matching layers.

### Refactoring Rules:
- [ ] **Import Localized Link Engine:** Verify that links are driven by the localized router navigation wrapper from `next-intl` or correctly interpolated with the active runtime parameter: `/[locale]/path`.
- [ ] **Reconstruct Route Mapping Matrix:** Ensure all sitemap targets are mapped correctly with zero dead anchors (`#`).
- [ ] **Active Link Matrix (Text to Speech must remain removed):**
  - **Home:** `/` (resolves to `/[locale]`)
  - **Products Dropdown:** - Syrix Help Desk -> `/products/help-desk`
    - Syrix AI Agent -> `/products/ai-agent`
    - Speech to Text -> `/products/speech-text`
  - **Solutions Dropdown:**
    - Customer Support -> `/solutions/customer-support`
    - Sales Automation -> `/solutions/sales`
    - Internal Knowledge -> `/solutions/internal-knowledge`
    - Meeting Execution -> `/solutions/meeting-execution`
  - **Pricing Hub:** `/pricing`
  - **Company About:** `/about`
  - **Trust Center (Security):** `/security`
  - **Contact Sales:** `/contact`
  - **Book Demo CTA:** `/book-demo`

---

## 2. RECONCILING GLOBAL FOOTER CONSISTENCY (`app/[locale]/layout.tsx`)

To guarantee that every standalone nested viewport renders the footer seamlessly without exception, you must enforce centralized inheritance hierarchy rules.

### Refactoring Rules:
- [ ] **Centralize Footer Ingestion:** Open the global locale wrapper sitting at `app/[locale]/layout.tsx`. Ensure the `<Footer />` component is explicitly imported and mounted directly below the main layout container wrap block:
  ```tsx
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Enforce global availability here */}
      </body>
    </html>
  );
[ ] Clean Page Duplications: Perform a project-wide search query across all page.tsx files inside app/[locale]/. If a page component contains a manual <Footer /> import statement or component tag at its base, remove it entirely to prevent duplicate renders and clashing hydration tokens.

[ ] Verify Link Paths: Ensure components/layout/footer.tsx utilizes the exact same localized dynamic /[locale]/ path mappings as defined in the Navbar section.

3. VERIFICATION & DEPLOYMENT RUNS
[ ] Confirm mobile layout navbar hamburger trigger state opens and shifts routes beautifully without freezing.

[ ] Execute terminal compilation test:

Bash
npm run build
[ ] Validate that the build completes successfully with zero path matching exceptions or broken TypeScript routing parameters.