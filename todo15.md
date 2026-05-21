# SYRIX.AI — PHASE 12: GLOBAL NAVBAR NAVIGATION REPAIR & CLEANUP (TODO15)

> **Objective:** Fix the broken navigation links within both the "Products" and "Solutions" dropdown menus on the top navbar, and completely remove the "About" and "Trust center" options from the header navigation.
> **Current Issue:** Clicking on any dropdown item under Products or Solutions logs zero response and fails to navigate. This is caused by event bubbling capture issues or dynamic dropdown state overlays blocking the Next.js Link engine.
> **Architecture Constraint:** Strictly NO `src` folder. The direct implementation target file is `components/layout/navbar.tsx`.

---

## 1. SPECIFICATIONS FOR REFACTORING `components/layout/navbar.tsx`

You must refactor the dropdown list mappings and header elements inside the main top navigation menu component.

### Step 1: Remove Obsolete Navigation Elements
- [ ] Locate the main header desktop nav items list and the mobile menu layout stack.
- [ ] Completely remove the **"About"** navigation text and its corresponding Link element.
- [ ] Completely remove the **"Trust center"** (or **"Security"**) navigation text and its corresponding Link element.
- [ ] Ensure no trailing divider layout rules or empty padding nodes remain after removing these two links.

### Step 2: Fix Event Propagation & Link Routing for Dropdowns
- [ ] Inspect the sub-menu container mapping for **Products** and **Solutions** links.
- [ ] **Enforce Proper HTML Structure:** Ensure that the nested items are wrapped cleanly within native Next.js/next-intl `<Link>` components. They must **NOT** be nested inside a parent `<button>` element that intercepts click triggers or fires `e.preventDefault()`.
- [ ] **Force Dropdown Closure on Click:** Inside the `<Link>` click handler or item trigger, append explicit operational state updates to force all menus closed immediately upon clicking an item:
  - For example: `onClick={() => { setIsProductsOpen(false); setIsSolutionsOpen(false); setIsMobileMenuOpen(false); }}`
- [ ] **Verify Dynamic Path Interpolation:** Ensure all paths adapt to the active `/[locale]/` context:
  - **Products Paths:**
    - Help Desk -> `/${locale}/products/help-desk`
    - AI Agent -> `/${locale}/products/ai-agent`
    - Speech to Text -> `/${locale}/products/speech-text`
  - **Solutions Paths:**
    - Customer Support -> `/${locale}/solutions/customer-support`
    - Sales Automation -> `/${locale}/solutions/sales`
    - Internal Chatbot -> `/${locale}/solutions/internal-knowledge`
    - Executive Voice Gateway -> `/${locale}/solutions/meeting-execution`

---

## 2. COMPILATION & LINTING CHECKS
- [ ] Test the responsiveness on desktop: hovering/clicking opens dropdowns, and clicking any link item instantly shifts the browser frame to the target route while closing the dropdown overlay seamlessly.
- [ ] Run the terminal verification script at the absolute root folder:
  ```bash
  npm run build
[ ] Ensure the production build completes with 100% success logs and absolute zero route matching exceptions.