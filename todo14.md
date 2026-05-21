# SYRIX.AI — PHASE 12: TOP NAVBAR DROPDOWN LINK NAVIGATION REPAIR (TODO14)

> **Objective:** Fix the non-responsive click states on the Product Dropdown sub-menu links within the Top Navigation Bar.
> **Current Issue:** Clicking individual items inside the Products dropdown (Help Desk, AI Agent, Speech to Text) fails to route the user and registers zero interaction responses.
> **Root Cause Diagnosis:** The click event is likely captured or prevented by the dropdown state toggle containers (`e.preventDefault()`), nested incorrectly inside action buttons, or lacks the active runtime i18n dynamic `/[locale]/` prefix structure.
> **Architecture Constraint:** Strictly NO `src` folder. The implementation target file is located at `components/layout/navbar.tsx`.

---

## 1. REFACTORING SPECIFICATIONS FOR `components/layout/navbar.tsx`

You must inspect and modify the dropdown item mapping blocks inside the main navigation bar menu.

### Execution Blueprint:
- [ ] **Handle State Closure on Click:** Ensure that whenever a nested sub-menu link item is clicked, the dynamic dropdown state or mobile hamburger panel hooks are explicitly forced to close: `setIsProductsOpen(false)` or `setActiveDropdown(null)`. This unblocks the event queue loop.
- [ ] **Enforce Correct HTML Nesting:** Verify that link items are NOT nested inside a parent `<button>` element that captures click triggers. The item wrapper must be a clean, semantic `<Link>` tag or an item component that propagates event routing cleanly.
- [ ] **Verify Path Mapping Properties:** The 3 active products must route strictly to their localized paths:
  - **Syrix Help Desk Link Target:** `/${locale}/products/help-desk`
  - **Syrix AI Agent Link Target:** `/${locale}/products/ai-agent`
  - **Speech to Text Link Target:** `/${locale}/products/speech-text`
- [ ] **Import Alignment Check:** Ensure the `Link` component is pulled from the proper localized navigation engine or dynamically appended with the active template literal language syntax node seamlessly.

---

## 2. COMPILATION & LINTING VERIFICATION
- [ ] Test the desktop dropdown toggle states: hovering or clicking the Products chevron displays the menu, and clicking an item must instantly shift the viewport to the target product route.
- [ ] Execute the production builder terminal run:
  ```bash
  npm run build
[ ] Confirm the compilation logs complete successfully with absolute zero path matching failures or unhandled pointer capture blockages.