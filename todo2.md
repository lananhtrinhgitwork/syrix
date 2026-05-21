# SYRIX HELP DESK — LANDING PAGE BUILDER TODO

> **Goal:** Build a full, production-ready landing page for **Products > Help Desk** with rich content, diverse layouts, and clear CTAs.  
> **Location:** `/app/[locale]/products/help-desk/page.tsx` (complete rewrite)  
> **Supporting components:** `/components/product/help-desk/*.tsx`  
> **i18n keys:** Add `helpDesk` section to `messages/en.json` and `messages/vi.json`  
> **Estimated code:** ~2000 lines (page + components + translations)

---

## 1. TRANSLATIONS — `messages/en.json` (add under `helpDesk`)

Add the following keys with full English content. The Vietnamese file should mirror with translation later (for now copy English or leave placeholders).

```json
"helpDesk": {
  "hero": {
    "badge": "AI-Powered Help Desk",
    "headline": "Turn your website into a 24/7 sales & support team — without hiring more people.",
    "subheadline": "Syrix Help Desk is the first Digital Employee for enterprises. It doesn't just answer questions — it closes leads, books appointments, calculates quotes, and hands off to humans when needed.",
    "ctaPrimary": "Book a Demo",
    "ctaSecondary": "See How It Works"
  },
  "problem": {
    "title": "Today's chatbots can't close deals.",
    "items": [
      "Generic answers, no real action",
      "Zero knowledge about your products",
      "Miss leads after hours",
      "Clunky handoff to humans"
    ]
  },
  "solution": {
    "title": "Meet Syrix Help Desk — the AI employee that actually works.",
    "items": [
      "Answers from your verified documents (RAG)",
      "Proactively books, quotes, and converts leads",
      "Works 24/7, handles thousands of conversations",
      "Seamless human handoff with full context"
    ]
  },
  "capabilities": {
    "title": "Core capabilities",
    "pillar1": {
      "title": "Knowledge-Powered AI",
      "desc": "Accurate answers drawn exclusively from admin-verified company docs. No hallucinations, no guesswork."
    },
    "pillar2": {
      "title": "Action Execution",
      "desc": "Connect CRM, calculate quotes, book showings, check inventory — the agent runs MCP tools autonomously."
    },
    "pillar3": {
      "title": "Smart Handoff",
      "desc": "Automatically detects uncertainty and offers human handoff. Full conversation history transferred in real time."
    },
    "pillar4": {
      "title": "Glass Box Transparency",
      "desc": "Every reasoning step is visible in the Thinking Log. Admins audit every decision."
    }
  },
  "howItWorks": {
    "title": "How It Works",
    "step1": {
      "title": "Connect",
      "desc": "Upload your documents (PDF, DOCX, web links). Syrix indexes them → Admin reviews and approves content."
    },
    "step2": {
      "title": "Configure",
      "desc": "Name your agent, choose a tone (Professional / Friendly / Direct), assign knowledge collections, link MCP tools."
    },
    "step3": {
      "title": "Deploy",
      "desc": "Embed the widget on your website. Visitors start chatting instantly — no login required. Admin dashboard shows everything in real time."
    }
  },
  "features": {
    "title": "Features that set you apart",
    "feature1": {
      "title": "Natural Conversation, Not Menus",
      "desc": "A visitor types \"Show me apartments in District 1 under 5 billion VND\" — the agent extracts intent, retrieves knowledge, and responds accurately. No rigid menus, no forms."
    },
    "feature2": {
      "title": "Upload & Ask",
      "desc": "Upload a PDF contract and ask \"What are the payment terms?\" The agent reads the file with multimodal AI and answers in detail."
    },
    "feature3": {
      "title": "Confirmation Cards for High-Stakes Actions",
      "desc": "Before booking an appointment or placing an order, the agent shows a confirmation card with Summarize / Confirm / Cancel. Mistakes eliminated."
    },
    "feature4": {
      "title": "Real-Time Thinking Log & Progress",
      "desc": "\"Agent is thinking…\" → \"Step 1: Validating input…\" → \"Step 2: Calculating…\" → Done. Visitors see the agent work, never a frozen screen."
    },
    "feature5": {
      "title": "One-Click Human Takeover",
      "desc": "When the agent is unsure or the customer asks for a human, a single click transfers the conversation with full context. No repetition."
    },
    "feature6": {
      "title": "Powerful Admin Dashboard",
      "desc": "View all conversations, assign labels, search history, inspect the Thinking Log, toggle handoff preferences. Complete control."
    }
  },
  "useCases": {
    "title": "Built for real business challenges",
    "case1": {
      "title": "Customer Support",
      "desc": "Resolve 80% of tickets instantly. Answers from your knowledge base, order lookups, return policies. Seamless handoff to human agents.",
      "cta": "Explore Customer Support →"
    },
    "case2": {
      "title": "Sales & Lead Conversion",
      "desc": "Qualify leads, calculate quotes, suggest upsells, book meetings. Works autonomously after hours. Direct CRM integration.",
      "cta": "Explore Sales Development →"
    },
    "case3": {
      "title": "Real Estate",
      "desc": "Help buyers search properties, schedule viewings, calculate mortgages — all inside the chat. 24/7 availability for global buyers.",
      "cta": "Explore Real Estate →"
    },
    "case4": {
      "title": "Financial Services",
      "desc": "Advise on loan products, calculate interest, check eligibility. Authenticate customers before executing sensitive actions.",
      "cta": "Explore Financial Services →"
    }
  },
  "smartSuggestions": {
    "title": "AI that proactively sells",
    "desc": "Syrix doesn't wait for questions. When a visitor lands, it suggests relevant questions. If details are missing, it asks for them (Slot Filling). It detects buying intent and turns conversations into closing opportunities."
  },
  "integrations": {
    "title": "Connect every business tool",
    "desc": "Using the Model Context Protocol (MCP), Syrix Help Desk connects to CRM, email, calendar, inventory — any API. Each agent gets least-privilege access."
  },
  "trust": {
    "title": "Built on trust and transparency",
    "item1": { "title": "Zero-Hallucination", "desc": "Answers come only from admin-approved documents." },
    "item2": { "title": "Glass Box", "desc": "Full visibility into AI reasoning — every step logged." },
    "item3": { "title": "Least-Privilege MCP", "desc": "Minimal access rights per agent, maximum security." },
    "item4": { "title": "Human Override", "desc": "Take over any conversation instantly, anytime." }
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "q1": "How is Syrix different from a chatbot?",
    "a1": "Syrix doesn't just answer — it takes action. It books, calculates, updates CRM. It's a Digital Employee, not an FAQ machine.",
    "q2": "Do I need coding skills to set it up?",
    "a2": "No. Upload documents, choose a tone, connect tools — all from a no-code admin interface.",
    "q3": "How do you prevent AI mistakes?",
    "a3": "We use RAG with admin-verified collections. Every answer is traced to approved documents. Zero hallucination.",
    "q4": "When does the conversation go to a human?",
    "a4": "The agent auto-detects low confidence, or the visitor can ask. Admin gets instant notification and joins with full context.",
    "q5": "Can I see what the AI is thinking?",
    "a5": "Yes. The admin dashboard shows the full Thinking Log: each reasoning step, tool call, and knowledge chunk retrieved.",
    "q6": "Does the widget slow down my website?",
    "a6": "Under 100ms load, non-blocking, fully customizable position and theme.",
    "q7": "Is multi-language supported?",
    "a7": "Yes — Vietnamese and English out of the box. Configure tone per language.",
    "q8": "How do I get started?",
    "a8": "Book a demo. We'll set up a pilot with your real data in 48 hours."
  },
  "finalCta": {
    "headline": "Ready to turn your website into a high-performance sales & support engine?",
    "cta": "Book a Demo",
    "trust": "No credit card required. Free pilot available."
  }
}
```

*(Add identical keys to `messages/vi.json` with Vietnamese translations later)*

---

## 2. PAGE FILE — `app/[locale]/products/help-desk/page.tsx`

Rewrite the current file. It should:

- Import and compose all sections (see component list below)
- Wrap everything in `<main>` with `min-h-screen pb-32` (footer already included in layout?)
- Use `useTranslations` with `helpDesk` namespace
- Add Framer Motion stagger container for each section

**Structure:**

```tsx
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// UI components
import Button from '@/components/ui/button';
// ... import all section components from @/components/product/help-desk/

export default function HelpDeskPage() {
  const t = useTranslations('helpDesk');

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <HeroSection t={t} />

      {/* 2. Problem / Solution */}
      <ProblemSolutionSection t={t} />

      {/* 3. Capabilities Grid */}
      <CapabilitiesGrid t={t} />

      {/* 4. How It Works (tabs) */}
      <HowItWorksSection t={t} />

      {/* 5. Features Deep Dive */}
      <FeaturesDeepDive t={t} />

      {/* 6. Use Cases Grid */}
      <UseCasesGrid t={t} />

      {/* 7. Smart Suggestions */}
      <SmartSuggestionsSection t={t} />

      {/* 8. Integrations */}
      <IntegrationsSection t={t} />

      {/* 9. Trust & Safety */}
      <TrustSection t={t} />

      {/* 10. FAQ */}
      <FAQSection t={t} />

      {/* 11. Final CTA */}
      <FinalCTASection t={t} />
    </main>
  );
}
```

---

## 3. SECTION COMPONENTS (ONE PER FILE)

Create folder `/components/product/help-desk/` and implement each section as a separate file. Each component receives a `t` object (or we can use `useTranslations` inside each — but passing prop is cleaner).

### 3.1 `HeroSection.tsx`

- **Layout:** Full‑width, dark background with subtle gradient overlay. Text left (60%), visual right (40%).
- **Content:** Badge, headline, subheadline, two CTAs (primary CTA to `/book-demo`, secondary scrolls to `#how-it-works`).
- **Visual:** Animated chat mockup component (self‑contained, using CSS). Show widget opening, welcome message, suggestion chips.
- **Animations:** Staggered fade‑in for text elements.

### 3.2 `ProblemSolutionSection.tsx`

- **Layout:** Two columns side‑by‑side (Problem left, Solution right), with a central divider line.
- **Problem column:** Darker background (#0a0a0f), red‑tinted gradient. List with red '✗' icons.
- **Solution column:** Brighter, cyan accent. List with green '✓' icons.
- **Implements:** `useInView` to trigger reveal.

### 3.3 `CapabilitiesGrid.tsx`

- **Layout:** 2×2 grid. Each card has an icon (lucide‑react), title, description, and optional "Learn more" link.
- **Icons:** Brain, Zap, Users, Shield.
- **Hover effect:** Scale 1.02 + cyan glow border.

### 3.4 `HowItWorksSection.tsx`

- **Layout:** Tabbed interface with 3 horizontal tabs: Connect / Configure / Deploy.
- **Behavior:** Click tab → smooth crossfade to corresponding content panel with illustrations.
- **Illustrations:** Inline SVG / CSS drawings (e.g., upload icon, settings icon, globe icon).
- **Use `useState`** for active tab.

### 3.5 `FeaturesDeepDive.tsx`

- **Layout:** 6 feature blocks, alternating left–right (image left / text right, then flipped).
- Each block has a title, description, and a **visual** (mockup of chat, confirmation card, diagram, etc.)
- **Visuals are pure React components** (e.g., `ChatMockup`, `ConfirmationCardMockup`, etc.) placed inline.
- **Animations:** Staggered children, Framer Motion.

Create a sub‑component `FeatureBlock` that accepts `{ title, desc, visual, reversed }`.

### 3.6 `UseCasesGrid.tsx`

- **Layout:** 4 cards in a 2×2 or 4‑column grid. Each card has an industry icon, title, short description, and a **"Learn more" button** that links to the corresponding solution page (e.g., `/solutions/customer-support`).
- Use `Link` from `next-intl` with proper locale prefix.
- **Button style:** Outline, arrow icon on hover.

### 3.7 `SmartSuggestionsSection.tsx`

- **Layout:** Full‑width, split with text left and flow diagram right.
- **Flow diagram:** CSS/React illustration showing visitor typing → agent suggests → agent fills slots → result.
- **Animation:** Appear on scroll.

### 3.8 `IntegrationsSection.tsx`

- **Layout:** Logo cloud grid. Use placeholder logos (SVG placeholders or icons from lucide‑react). Add a short description.
- **Subdued style:** Grayscale logos, full colour on hover.

### 3.9 `TrustSection.tsx`

- **Layout:** 2×2 badge grid or 4 icons in a row. Each badge has icon, title, description.
- **Background:** Different shade (#12121a) to separate from sections above.

### 3.10 `FAQSection.tsx`

- **Layout:** Accordion (single open at a time). Use `useState` for active index.
- **Animations:** `AnimatePresence` for height transition.
- **Reuse:** If you have a generic `Accordion` UI component, wrap it. Otherwise build inline.

### 3.11 `FinalCTASection.tsx`

- **Layout:** Full‑width gradient background, centered headline, large CTA button, trust note below.
- **Button:** Link to `/book-demo`.

---

## 4. ADDITIONAL UTILITY COMPONENTS

Place inside `/components/product/help-desk/`:

### 4.1 `ChatMockup.tsx`

- A pure CSS/React representation of the Syrix chat widget (no socket, static).
- Shows: floating icon → open widget → welcome message → suggestion chips → user message → agent reply.
- Used in Hero and Feature sections.

### 4.2 `ConfirmationCardMockup.tsx`

- Shows a card with summary, "Confirm" and "Cancel" buttons.

### 4.3 `ThinkingLogMockup.tsx`

- Animated sequence: "Agent is thinking…" → "Step 1: Validating…" → "Step 2: Calculating…" → "Done."
- Use `useEffect` with intervals to simulate steps.

### 4.4 `FlowDiagram.tsx`

- CSS/React diagram for How‑It‑Works and Smart Suggestions.
- Use absolute positioning, arrows (SVG lines), rounded boxes.

---

## 5. STYLES & ANIMATIONS

- All animations via Framer Motion.
- Use Tailwind color tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`.
- Hover effects: `scale(1.02)` + cyan glow border.
- Scroll‑triggered reveals with `whileInView` and `viewport: { once: true }`.
