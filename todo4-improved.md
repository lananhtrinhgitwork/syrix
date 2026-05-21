# SYRIX HELP DESK — SECTION: HOW IT WORKS (FINAL IMPROVED)

> **Goal:** Final redesign of "How It Works" section with 4 illustrated pillars + deployment + chat mockup, plus a **separate Workflow section** that explains the difference between MCP (individual actions) and Workflow (complex business automation), with a CTA button to `https://xcorp.app`.  
> **Inspiration:** Glean's "Agent Orchestration" page + Activepieces workflow style  
> **Location:** `/components/product/help-desk/HowItWorksSection.tsx` (complete rewrite)  
> **Translations:** Keys under `helpDesk.howItWorks` in locale files + separate `helpDesk.workflow` section

---

## 1. OVERVIEW

**Design Philosophy:**
- Each of the 4 setup pillars should have a **visual illustration** + text description
- Clear flow: Setup → Deploy → Run → Automation
- **Workflow is a separate, standalone section** — not part of MCP, but a more powerful module for complex business automation
- Workflow button links to **https://xcorp.app**
- Reference: [Activepieces](https://www.activepieces.com/)

---

## 2. LAYOUT STRUCTURE

The page has **two separate sections**:

### 2.1 How It Works Section (4 Pillars + Deploy + Running Agent)

```tsx
<section className="py-24 bg-card">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div className="mb-14 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">{t('howItWorks.title')}</h2>
    </motion.div>

    {/* 4 Setup Pillars + Deploy + Chat Mockup */}
    <div className="mx-auto max-w-6xl">
      <HowItWorksFlow t={t} />
    </div>
  </div>
</section>
```

### 2.2 Workflow Section (Separate, Standalone)

```tsx
<section className="py-24 bg-background border-t border-border">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <WorkflowSection t={t} />
    </div>
  </div>
</section>
```

> **Important:** These are two full-width sections stacked vertically. The Workflow section has a different background (`bg-background` instead of `bg-card`) with a top border to visually distinguish it as a separate module, not a sub-section.

---

## 3. THE HOW IT WORKS FLOW

### 3.1 Top Row: 4 Setup Pillars (Side by Side)

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Agent Identity  │    │  Knowledge   │    │   MCP Tools  │    │  Suggestions  │
│  [Illustration] │    │  [Illustration] │    │ [Illustration] │    │ [Illustration] │
│  [Description]  │    │  [Description] │    │ [Description]  │    │ [Description]  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

### 3.2 Bottom Row: Deploy + Running Agent

```
┌──────────────────────────────────────────────────────────────────────┐
│                 DEPLOY ON YOUR WEBSITE — 1-Click Script               │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                     AGENT IS RUNNING — Live Chat                      │
│                         [ChatWidget Mockup]                          │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 4. THE 4 SETUP PILLARS (WITH ILLUSTRATIONS)

### 4.1 Agent Identity

**Icon:** `<Briefcase className="h-6 w-6" />`  
**Accent:** `text-cyan-400`

**Illustration Concept:**
- Person configuring agent persona
- Role definition panel
- Tone selector (Professional / Friendly / Direct)
- Language preferences

**Content:**
```tsx
{t('howItWorks.pillar1.title')}
{t('howItWorks.pillar1.desc')}
```

### 4.2 Knowledge Collections

**Icon:** `<BookOpen className="h-6 w-6" />`  
**Accent:** `text-emerald-400`

**Illustration Concept:**
- File upload zone
- Indexing progress bar
- Document preview thumbnails
- Knowledge graph

**Content:**
```tsx
{t('howItWorks.pillar2.title')}
{t('howItWorks.pillar2.desc')}
```

### 4.3 MCP Tools (Actions)

**Icon:** `<Wrench className="h-6 w-6" />`  
**Accent:** `text-amber-400`

**Illustration Concept:**
- Central MCP hub (glowing circle)
- Connected app icons (10-12 examples)
- Connection lines showing data flow
- "100+ apps" badge

**Content:**
```tsx
{t('howItWorks.pillar3.title')}
{t('howItWorks.pillar3.desc')}
```

**App Examples to Show:**
- Salesforce, HubSpot (CRM)
- Google Calendar, Outlook
- Stripe, PayPal (Payments)
- Gmail, Slack
- Shopify, WooCommerce
- Notion, Confluence

### 4.4 Suggestions

**Icon:** `<Lightbulb className="h-6 w-6" />`  
**Accent:** `text-purple-400`

**Illustration Concept:**
- Chat interface with suggestion chips
- User typing, agent suggesting
- Quick-start prompts
- Slot filling visual

**Content:**
```tsx
{t('howItWorks.pillar4.title')}
{t('howItWorks.pillar4.desc')}
```

---

## 5. DEPLOY SECTION

**Title:** `t('howItWorks.deploy.title')` → "Deploy on Your Website"

**Content:**
- Simple 1-click deployment via script
- No coding required
- Customizable position and theme

**Illustration:**
- Website preview with chat widget floating
- "Add to Website" button
- Success indicator

**Content:**
```tsx
{t('howItWorks.deploy.desc')}
```

---

## 6. AGENT RUNNING SECTION (CHAT MOCKUP)

**Title:** `t('howItWorks.running.title')` → "Agent Is Running"

**Content:**
```tsx
{t('howItWorks.running.desc')}
```

**Illustration:**
- Full chat widget mockup (same as HeroSection)
- Showing conversation flow
- Thinking log visible
- "Agent is online" badge

**Component:** `RunningAgentIllustration.tsx`

---

## 7. WORKFLOW SECTION — SEPARATE, STANDALONE MODULE

> **Key Concept:** This is a **separate section** (not a sub-section of How It Works). It explains that beyond individual MCP tool calls, Syrix offers a **full Workflow automation module** from XCorp for building complex business flows — like ActivePieces.

### 7.1 Section Visual Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│      SECTION BACKGROUND: bg-background + border-t border-border         │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  🚀 TỪ MCP ĐẾN WORKFLOW — TỰ ĐỘNG HOÁ Ở CẤP ĐỘ CAO HƠN          │  │
│  │                                                                  │  │
│  │  MCP giúp agent gọi từng hành động đơn lẻ (check calendar,       │  │
│  │  tạo contact, gửi email). Nhưng với Workflow, bạn xây dựng       │  │
│  │  luồng tự động hoá hoàn chỉnh — từ trigger đến các bước xử lý   │  │
│  │  phức tạp, condition, và kết nối 700+ ứng dụng — tất cả trong    │  │
│  │  giao diện kéo-thả trực quan.                                     │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  🧩 MCP       │  │  🔗 Workflow  │  │  📊 700+     │  │  🎯 Kết nối  │ │
│  │  Hành động    │──│  Luồng tự     │──│  App tích     │──│  trực tiếp   │ │
│  │  đơn lẻ       │  │  động hoá    │  │  hợp sẵn     │  │  với Agent   │ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │              WORKFLOW BUILDER (ActivePieces-style)                │  │
│  │                                                                  │  │
│  │  ┌──────────┐                                                    │  │
│  │  │Trigger:  │                                                    │  │
│  │  │Lead      │                                                    │  │
│  │  │Created   │                                                    │  │
│  │  └────┬─────┘                                                    │  │
│  │       │                                                          │  │
│  │       ▼                                                          │  │
│  │  ┌──────────┐                                                    │  │
│  │  │Get CRM   │                                                    │  │
│  │  │Contact   │                                                    │  │
│  │  └────┬─────┘                                                    │  │
│  │       │                                                          │  │
│  │       ▼                                                          │  │
│  │  ┌──────────┐  ┌──────────┐                                     │  │
│  │  │Check    │──│Calculate │                                     │  │
│  │  │Eligible │  │Price     │                                     │  │
│  │  └────┬─────┘  └────┬────┘                                     │  │
│  │       │             │                                           │  │
│  │       ▼             ▼                                           │  │
│  │  ┌──────────┐  ┌──────────┐                                     │  │
│  │  │Send     │  │Create   │                                      │  │
│  │  │Email    │  │Invoice  │                                      │  │
│  │  └──────────┘  └──────────┘                                     │  │
│  │                                                                  │  │
│  │  [ + Add Step ]              [ ▶ Run ]      [ ⚡ 700+ Apps ]    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │         [🚀 Khám phá Workflow tại xcorp.app →]                    │  │
│  │         <a href="https://xcorp.app" target="_blank"              │  │
│  │          rel="noopener noreferrer">                               │  │
│  │           Khám phá Workflow →</a>                                │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Section Content

| Field | English | Vietnamese |
|-------|---------|------------|
| **Eyebrow / Badge** | `t('workflow.badge')` → "🚀 XCorp Workflow" | "🚀 XCorp Workflow" |
| **Heading** | `t('workflow.heading')` → "From MCP to Workflow — Automate at Scale" | "Từ MCP đến Workflow — Tự động hoá ở quy mô lớn" |
| **Subheading** | `t('workflow.subheading')` → "MCP lets your agent call individual actions. Workflow lets you build complete business automation flows." | "MCP giúp agent gọi từng hành động đơn lẻ. Workflow cho phép bạn xây dựng luồng tự động hoá hoàn chỉnh." |
| **Feature 1** | `t('workflow.feature1')` → "700+ pre-built app integrations" | "700+ tích hợp ứng dụng có sẵn" |
| **Feature 2** | `t('workflow.feature2')` → "Drag-and-drop visual builder" | "Trình xây dựng trực quan kéo-thả" |
| **Feature 3** | `t('workflow.feature3')` → "Connect directly to your Agent — zero code" | "Kết nối trực tiếp với Agent — không cần code" |
| **Feature 4** | `t('workflow.feature4')` → "Trigger workflows from agent conversations" | "Kích hoạt workflow từ hội thoại agent" |
| **Description** | `t('workflow.desc')` → "While MCP handles individual tool calls, XCorp Workflow lets you chain them into powerful multi-step automation — without writing a single line of code. Build business logic that matches your exact needs." | "Trong khi MCP xử lý từng lời gọi công cụ riêng lẻ, XCorp Workflow cho phép bạn kết nối chúng thành luồng tự động hoá đa bước mạnh mẽ — mà không cần viết một dòng code nào. Xây dựng logic kinh doanh phù hợp với nhu cầu chính xác của bạn." |
| **CTA Button** | `t('workflow.cta')` → "🚀 Explore Workflow at xcorp.app →" | "🚀 Khám phá Workflow tại xcorp.app →" |
| **CTA Link** | `https://xcorp.app` (target=_blank, rel=noopener noreferrer) | same |

### 7.3 Component: WorkflowSection.tsx

```tsx
// components/product/help-desk/WorkflowSection.tsx

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight, Zap, Puzzle, Link2, BarChart3, Target } from 'lucide-react'
import WorkflowBuilderMockup from './WorkflowBuilderMockup'

export default function WorkflowSection() {
  const t = useTranslations('helpDesk.workflow')

  const features = [
    { icon: Zap, text: t('feature1') },
    { icon: Puzzle, text: t('feature2') },
    { icon: Link2, text: t('feature3') },
    { icon: Target, text: t('feature4') },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {t('badge')}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t('heading')}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t('subheading')}
        </p>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
          >
            <div className="rounded-lg bg-primary/10 p-3">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </motion.div>

      {/* Workflow Builder Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <WorkflowBuilderMockup />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto max-w-3xl text-center text-muted-foreground"
      >
        {t('desc')}
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center"
      >
        <a
          href="https://xcorp.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
        >
          {t('cta')}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  )
}
```

### 7.4 Component: WorkflowBuilderMockup.tsx

A visual mockup of a workflow builder canvas (ActivePieces-style):

- Dark background canvas area
- Connected node boxes with different accent colors
- SVG arrow connectors between nodes
- Example flow: Lead Created → Get CRM Contact → Check Eligibility → Calculate Price → Send Email / Create Invoice
- "+ Add Step" button, "▶ Run" button, "⚡ 700+ Apps" badge
- Subtle grid background pattern

### 7.5 Visual Design for Workflow Builder

```
┌─────────────────────────────────────────────────────────────┐
│  Workflow Builder                              ⚡ 700+ Apps  │
│                                                              │
│  ┌──────────────┐                                            │
│  │ ⚡ Trigger    │                                            │
│  │ Lead Created │  ← cyan border                             │
│  └──────┬───────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────┐                                            │
│  │ ☁️ Action     │                                            │
│  │ Get CRM       │  ← blue border                            │
│  │ Contact       │                                            │
│  └──────┬───────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────────┐                                        │
│  │ 🔀 Condition     │                                        │
│  │ Is Eligible?     │  ← amber border                        │
│  └────┬───────┬─────┘                                        │
│       │       │                                              │
│    ✅ Yes    ❌ No                                           │
│       │       │                                              │
│       ▼       ▼                                              │
│  ┌────────┐ ┌──────────┐                                     │
│  │📧 Send  │ │💰 Create │  ← emerald / purple borders        │
│  │ Email   │ │ Invoice  │                                     │
│  └────────┘ └──────────┘                                     │
│                                                              │
│  [+ Add Step]                    [▶ Run]                     │
└─────────────────────────────────────────────────────────────┘
```

### 7.6 Why This Design Works

| Reason | Detail |
|--------|--------|
| **Separate section** | Different background + border-top visually separates from "How It Works" |
| **Clear narrative** | Starts with "From MCP to Workflow" — educates user on the upgrade path |
| **Feature cards** | 4 key benefits shown upfront before the visual |
| **Workflow builder visual** | Shows exactly what they'll get (ActivePieces-style) |
| **Bold CTA** | Large button directly to xcorp.app with hover animation |
| **Self-contained** | Doesn't depend on understanding MCP to make sense |

---

## 8. TRANSLATION KEYS

Workflow section keys are now **under their own `helpDesk.workflow` namespace** (separate from `helpDesk.howItWorks`).

### English (`messages/en.json`)

**Under `helpDesk.howItWorks`:**
```json
"howItWorks": {
  "title": "How Syrix Help Desk Works",
  "pillar1": {
    "title": "1. Agent Identity",
    "desc": "Define your agent's role, tone, and language. Configure how it responds to customers."
  },
  "pillar2": {
    "title": "2. Knowledge Collections",
    "desc": "Upload product docs, policies, FAQs. Syrix indexes them and answers from verified sources only."
  },
  "pillar3": {
    "title": "3. MCP Tools (Actions)",
    "desc": "Connect to 100+ apps via Model Context Protocol. Agent executes actions autonomously."
  },
  "pillar3_apps": [
    "CRM (Salesforce, HubSpot)",
    "Calendar (Google, Outlook)",
    "Payments (Stripe, PayPal)",
    "Communication (Gmail, Slack)",
    "E-commerce (Shopify, WooCommerce)",
    "Knowledge (Notion, Confluence)"
  ],
  "pillar4": {
    "title": "4. Suggestions",
    "desc": "AI suggests relevant questions when visitors start chatting. Quick-start with smart prompts."
  },
  "deploy": {
    "title": "Deploy on Your Website",
    "desc": "Add one script to your site. No coding required. Customize position, theme, and appearance."
  },
  "running": {
    "title": "Agent Is Running",
    "desc": "Your agent is live and ready to help visitors. See the chat interface in action below."
  }
}
```

**Separate `helpDesk.workflow`:**
```json
"workflow": {
  "badge": "🚀 XCorp Workflow",
  "heading": "From MCP to Workflow — Automate at Scale",
  "subheading": "MCP lets your agent call individual actions. Workflow lets you build complete business automation flows.",
  "feature1": "700+ pre-built app integrations",
  "feature2": "Drag-and-drop visual builder",
  "feature3": "Connect directly to your Agent — zero code",
  "feature4": "Trigger workflows from agent conversations",
  "desc": "While MCP handles individual tool calls, XCorp Workflow lets you chain them into powerful multi-step automation — without writing a single line of code. Build business logic that matches your exact needs.",
  "cta": "🚀 Explore Workflow at xcorp.app →"
}
```

### Vietnamese (`messages/vi.json`)

**Under `helpDesk.howItWorks`:**
```json
"howItWorks": {
  "title": "Syrix Help Desk hoạt động như thế nào",
  "pillar1": {
    "title": "1. Định danh Agent",
    "desc": "Định nghĩa vai trò, giọng điệu và ngôn ngữ của agent. Cấu hình cách nó phản hồi với khách hàng."
  },
  "pillar2": {
    "title": "2. Bộ sưu tập Kiến thức",
    "desc": "Tải lên tài liệu sản phẩm, chính sách, FAQ. Syrix lập chỉ mục và trả lời chỉ từ nguồn đã xác minh."
  },
  "pillar3": {
    "title": "3. Công cụ MCP (Hành động)",
    "desc": "Kết nối với 100+ ứng dụng qua Model Context Protocol. Agent thực thi hành động tự động."
  },
  "pillar3_apps": [
    "CRM (Salesforce, HubSpot)",
    "Lịch (Google, Outlook)",
    "Thanh toán (Stripe, PayPal)",
    "Giao tiếp (Gmail, Slack)",
    "Thương mại điện tử (Shopify, WooCommerce)",
    "Kiến thức (Notion, Confluence)"
  ],
  "pillar4": {
    "title": "4. Gợi ý",
    "desc": "AI gợi ý câu hỏi liên quan khi khách bắt đầu trò chuyện. Bắt đầu chat nhanh với prompt thông minh."
  },
  "deploy": {
    "title": "Triển khai trên Website của bạn",
    "desc": "Thêm 1 script vào site. Không cần coding. Tùy chỉnh vị trí, giao diện và xuất hiện."
  },
  "running": {
    "title": "Agent Đang Hoạt Động",
    "desc": "Agent của bạn đã sẵn sàng phục vụ khách truy cập. Xem giao diện chat trong hoạt động bên dưới."
  }
}
```

**Separate `helpDesk.workflow`:**
```json
"workflow": {
  "badge": "🚀 XCorp Workflow",
  "heading": "Từ MCP đến Workflow — Tự động hoá ở quy mô lớn",
  "subheading": "MCP giúp agent gọi từng hành động đơn lẻ. Workflow cho phép bạn xây dựng luồng tự động hoá hoàn chỉnh.",
  "feature1": "700+ tích hợp ứng dụng có sẵn",
  "feature2": "Trình xây dựng trực quan kéo-thả",
  "feature3": "Kết nối trực tiếp với Agent — không cần code",
  "feature4": "Kích hoạt workflow từ hội thoại agent",
  "desc": "Trong khi MCP xử lý từng lời gọi công cụ riêng lẻ, XCorp Workflow cho phép bạn kết nối chúng thành luồng tự động hoá đa bước mạnh mẽ — mà không cần viết một dòng code nào. Xây dựng logic kinh doanh phù hợp với nhu cầu chính xác của bạn.",
  "cta": "🚀 Khám phá Workflow tại xcorp.app →"
}
```

---

## 9. COMPLETE FILE LIST TO CREATE

### How It Works Section (inside `components/product/help-desk/`)

| # | File | Purpose |
|---|------|---------|
| 1 | `HowItWorksSection.tsx` | **Main component** — orchestrates 4 pillars + deploy + running agent |
| 2 | `PillarCard.tsx` | Reusable card for each setup pillar with illustration area |
| 3 | `InstructionsIllustration.tsx` | Agent identity configuration visual (role, tone, language) |
| 4 | `KnowledgeIllustration.tsx` | Document upload & indexing visual |
| 5 | `MCPToolsIllustration.tsx` | App grid with hub-and-spoke connection lines |
| 6 | `SuggestionsIllustration.tsx` | Chat with suggestion chips visual |
| 7 | `DeployIllustration.tsx` | Website preview + script addition visual |
| 8 | `RunningAgentIllustration.tsx` | Full chat widget mockup (agent in action) |
| 9 | `AppGrid.tsx` | Reusable app icon grid for MCP section |

### Workflow Section (inside `components/product/help-desk/`)

| # | File | Purpose |
|---|------|---------|
| 10 | `WorkflowSection.tsx` | **Separate section** — standalone workflow automation module |
| 11 | `WorkflowBuilderMockup.tsx` | Workflow builder canvas (ActivePieces-style) |

### Total: **11 files** (1 main + 9 helpers + 1 workflow section)

---

## 10. DESIGN TOKENS

| Token | Value | Usage |
|-------|-------|-------|
| `bg-card` | `#12121a` | Section background |
| `bg-background` | `#0a0a0f` | Pillar cards |
| `primary` | `#3b82f6` | Main borders |
| `cyan-400` | `#22d3ee` | Pillar 1 accent |
| `emerald-400` | `#34d399` | Pillar 2 accent |
| `amber-400` | `#fbbf24` | Pillar 3 accent |
| `purple-400` | `#a78bfa` | Pillar 4 accent |
| `border` | `#1f1f2e` | Card borders |

---

## 11. ANIMATION SPEC

**Responsiveness:**
- Mobile: Stack all sections vertically
- Desktop: 4 pillars in row, deploy + agent below

**Animation:**
- Pillars: `initial: opacity:0/y:20` → `whileInView: opacity:1/y:0`
- Stagger: `delay: i * 0.1`
- Viewport: `once: true`
- Deploy section: Fade in after pillars
- Running agent: Scale up on view
- Workflow section: Pulse animation

---

## 12. DELIVERABLES

✅ `messages/en.json` — Add `helpDesk.howItWorks` (4 pillars + deploy + running) + `helpDesk.workflow` (separate)  
✅ `messages/vi.json` — Mirror with Vietnamese translations  
✅ `components/product/help-desk/HowItWorksSection.tsx` — Complete rewrite with 4 pillars + deploy + running agent  
✅ `components/product/help-desk/WorkflowSection.tsx` — **New separate section** with CTA to xcorp.app  
✅ 9 helper illustration components  
✅ `WorkflowBuilderMockup.tsx` — ActivePieces-style workflow builder visual  
✅ `npm run build` — Pass without errors

---

## 13. KEY DIFFERENCES FROM PREVIOUS VERSIONS

| Aspect | v1 | v2 | v3 (Final) |
|--------|-----|-----|-------|
| **Pillars** | Tabs | 4 cards | 4 illustrated cards with visuals |
| **Deploy** | Not shown | Not shown | **Dedicated section** with website + script illustration |
| **Running Agent** | Not shown | Not shown | **Full chat mockup** showing live agent |
| **Workflow** | Basic CTA | Highlighted | **Separate section** with own title, explanation, builder visual, and CTA → xcorp.app |
| **Workflow vs MCP narrative** | None | None | Clear message: "MCP = individual actions, Workflow = complete automation" |
| **App Examples** | None | 6 categories | 6 specific apps shown in MCP section |
| **Visuals** | Text only | Some illustrations | Rich diagrams for all steps |
| **Section count** | 1 section | 1 section | **2 separate sections** (How It Works + Workflow) |

---

## 14. REFERENCES

- **Glean Agent Orchestration:** https://www.glean.com/product/agent-orchestration
- **Activepieces:** https://www.activepieces.com/

---

**Ready for agent to code.** Copy-paste this final improved todo4.md into your agent prompt.
