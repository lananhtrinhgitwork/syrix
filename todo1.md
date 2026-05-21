# SYRIX.AI — PHASE 2: UI/UX ALIGNMENT (NAVBAR, FOOTER & BRANDING)

> **Goal:** Fix the layout bugs in the footer, implement a premium dynamic Top Navbar following the sitemap, and inject the official Syrix SVG logo across the site.
> **Architecture Note:** No `src` directory. Target files directly in `components/layout/` and `app/[locale]/`.

---

## 1. OFFICIAL SYRIX LOGO BRANDING (SVG)
- **Design Specifications:** Modern, tech-forward, geometric enterprise logo. Combines an abstract 'S' execution node with sharp typography.
- **SVG Code to use for `<Logo />` component:**
```tsx
<svg className="h-6 w-auto text-white" viewBox="0 0 340 80" fill="none" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
  <path d="M25 15C32 8 45 8 52 15L65 28C72 35 72 45 65 52L52 65C45 72 32 72 25 65L12 52C5 45 5 35 12 28L25 15Z" fill="url(#syrix-glow)" opacity="0.8"/>
  <path d="M32 25C36 21 44 21 48 25L55 32C59 36 59 44 55 48L48 55C44 59 36 59 32 55L25 48C21 44 21 36 25 32L32 25Z" fill="#06b6d4"/>
  <path d="M35 35H45V45H35V35Z" fill="#ffffff"/>
  <text x="85" y="52" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="34" letter-spacing="1">SYRIX</text>
  <text x="215" y="52" fill="#06b6d4" font-family="system-ui, sans-serif" font-weight="800" font-size="34">.AI</text>
  <defs>
    <linearGradient id="syrix-glow" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3b82f6"/>
      <stop offset="1" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
</svg>
2. TOP NAVBAR IMPLEMENTATION (components/layout/navbar.tsx)
[ ] Create/Update the component to be responsive (Mobile Hamburger Menu + Desktop Row).

[ ] Ensure background uses a premium dark glassmorphism styling: bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50.

[ ] Desktop Menu Structure (Sitemap-driven):

Products (Dropdown): Help Desk, AI Agent, Workspace, Speech & Text (ASR/TTS)

Solutions (Dropdown): Customer Support, Internal Knowledge, Meeting Execution

Pricing (Link to /pricing)

Customers (Link to /customers)

[ ] Right Side Actions:

Language Switcher Button (Toggles between vi and en via next-intl routing).

Primary CTA Button: "Book Demo" (styled with electric blue/cyan glow, links to /book-demo).

[ ] Inject <Navbar /> inside the root layout: app/[locale]/layout.tsx.

3. FOOTER LAYOUT BUG FIX (components/layout/footer.tsx)
[ ] Fix CSS Clashing: The current layout has text compressed horizontally. Rewrite the container using proper Tailwind CSS layout blocks.

[ ] Structure the footer strictly into a responsive grid layout: className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12".

[ ] Column Layout Matrix:

Col 1 (Double width on desktop): Inject the new Syrix SVG Logo + Short Vision Text + Social Links.

Col 2 (Products): Help Desk, AI Agent, Workspace, Voice Suite.

Col 3 (Solutions): Customer Support, Knowledge Base, Enterprise Meeting.

Col 4 (Company): About Us, Trust Center (Security), Contact.

[ ] Ensure all links preserve the default /[locale]/ pathing using next-intl prefix parameters.

4. VERIFICATION
[ ] Run npm run build to confirm no new layout or i18n type gaps are introduced.