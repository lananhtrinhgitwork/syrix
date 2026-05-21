# SYRIX HELP DESK — SECTION: HOW IT WORKS

> **Goal:** Redesign the "How It Works" section to showcase the complete Syrix Help Desk agent setup and orchestration flow.  
> **Inspiration:** Glean's "Agent Orchestration" page (visual, diagrammatic, clear flow)  
> **Location:** `/components/product/help-desk/HowItWorksSection.tsx` (complete rewrite)  
> **Translations:** Use `helpDesk.howItWorks` keys from `messages/en.json` & `messages/vi.json`

---

## 1. OVERVIEW & DESIGN INSPIRATION

**Current Issue:** The current tab-based design is too simple and doesn't convey the full orchestration flow.

**New Approach:** A visual, diagrammatic layout inspired by Glean's orchestration page, showing:
- The 4 core setup pillars (Instructions, Knowledge, MCP/Tools, Suggestions)
- A connection diagram linking to Workflow (XCorp product)
- Clear visual flow from setup → deployment → usage

---

## 2. LAYOUT STRUCTURE

### Main Container
```tsx
<section className="py-24 bg-card">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div className="mb-14 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">{t('howItWorks.title')}</h2>
    </motion.div>

    {/* Visual Flow Diagram */}
    <div className="mx-auto max-w-6xl">
      <HowItWorksDiagram t={t} />
    </div>

    {/* Workflow Integration CTA */}
    <motion.div className="mt-16 text-center">
      <WorkflowIntegrationCTA t={t} />
    </motion.div>
  </div>
</section>
```

---

## 3. THE ORCHESTRATION DIAGRAM

### Visual Flow (Left to Right)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   SETUP YOUR AGENT — 4 CORE PILLARS                      │
└─────────────────────────────────────────────────────────────────────────┘
         │                    │                    │                    │
         ▼                    ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Instructions│     │  Knowledge   │     │   MCP Tools  │     │   Suggestions│
│ (Agent Role) │     │  Collections │     │   (Actions)  │     │  (Quick Start)│
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
         │                    │                    │                    │
         │                    │                    │                    │
         └────────────────────┼────────────────────┼────────────────────┘
                              ▼                    ▼
                    ┌──────────────────────┐
                    │   DEPLOY & RUN        │
                    └──────────────────────┘
                              │
                              ▼
                    ┌──────────────────────┐
                    │  CONNECT TO WORKFLOW │
                    └──────────────────────┘
```

### Component Structure

**Diagram Container:**
```tsx
<div className="relative">
  {/* Top: 4 Setup Pillars */}
  <SetupPillars t={t} />
  
  {/* Middle: Agent Running */}
  <AgentRunning t={t} />
  
  {/* Bottom: Workflow Integration */}
  <WorkflowIntegration t={t} />
  
  {/* Arrows/Connectors */}
  <Arrows />
</div>
```

---

## 4. SETUP PILLARS (4 CARDS)

### 4.1 Instructions (Agent Role)

| Field | Content |
|-------|---------|
| **Icon** | `<Briefcase className="h-6 w-6" />` |
| **Title** | `t('howItWorks.pillar1.title')` → "Instructions" |
| **Description** | `t('howItWorks.pillar1.desc')` → "Define your agent's role, tone, and behavior. Set instructions for how it should respond to customers." |
| **Accent Color** | `text-cyan-400` |
| **Animation** | Scale on hover (1.02) |

### 4.2 Knowledge Collections

| Field | Content |
|-------|---------|
| **Icon** | `<BookOpen className="h-6 w-6" />` |
| **Title** | `t('howItWorks.pillar2.title')` → "Knowledge Collections" |
| **Description** | `t('howItWorks.pillar2.desc')` → "Upload product docs, policies, FAQs. Syrix indexes them and answers from verified sources only." |
| **Accent Color** | `text-emerald-400` |
| **Animation** | Scale on hover (1.02) |

### 4.3 MCP Tools (Actions)

| Field | Content |
|-------|---------|
| **Icon** | `<Wrench className="h-6 w-6" />` |
| **Title** | `t('howItWorks.pillar3.title')` → "MCP Tools (Actions)" |
| **Description** | `t('howItWorks.pillar3.desc')` → "Connect to CRM, calendar, payment systems. Agent executes actions via MCP tools autonomously." |
| **Accent Color** | `text-amber-400` |
| **Animation** | Scale on hover (1.02) |

### 4.4 Suggestions (Quick Start)

| Field | Content |
|-------|---------|
| **Icon** | `<Lightbulb className="h-6 w-6" />` |
| **Title** | `t('howItWorks.pillar4.title')` → "Suggestions" |
| **Description** | `t('howItWorks.pillar4.desc')` → "AI suggests relevant questions when visitors start chatting. Quick-start conversations with smart prompts." |
| **Accent Color** | `text-purple-400` |
| **Animation** | Scale on hover (1.02) |

---

## 5. AGENT RUNNING (CENTER)

**Visual:** Show a chat widget mockup or agent status indicator

```tsx
<div className="relative flex items-center justify-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center gap-4"
  >
    {/* Agent Status Badge */}
    <div className="rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
      Agent is running
    </div>
    
    {/* Chat Mockup (simplified) */}
    <ChatWidgetPreview t={t} />
  </motion.div>
</div>
```

---

## 6. WORKFLOW INTEGRATION (BOTTOM)

### Description
- Syrix Help Desk can connect to **Workflow** (XCorp product) for automated multi-step tasks
- Workflow flows are included in MCP context
- Users create automation flows in Workflow app and connect to Help Desk agent
- Button links to separate Workflow product page

### Visual
```tsx
<div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="mb-1 font-semibold text-foreground">
        {t('howItWorks.workflow.title')}
      </h3>
      <p className="text-sm text-muted-foreground">
        {t('howItWorks.workflow.desc')}
      </p>
    </div>
    <a href="/workflow" className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary hover:bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors">
      {t('howItWorks.workflow.cta')}
      <ArrowRight className="h-4 w-4" />
    </a>
  </div>
  {/* Workflow Diagram/Icon */}
  <div className="mt-4 flex items-center gap-2 text-xs text-primary">
    <WorkflowIcon className="h-4 w-4" />
    <span>Includes active workflow automation</span>
  </div>
</div>
```

---

## 7. ARROW/CONNECTOR VISUALS

Use smooth SVG arrows to connect the 4 pillars → Agent → Workflow:

```tsx
function Arrows() {
  return (
    <svg className="absolute bottom-0 left-0 right-0 h-16" viewBox="0 0 800 160">
      {/* Arrow from pillar 1 → center */}
      <path d="M180 120 L300 120 L300 140 L340 140" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Arrow from pillar 2 → center */}
      <path d="M250 120 L300 120 L300 140 L340 140" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Arrow from pillar 3 → center */}
      <path d="M320 120 L300 120 L300 140 L340 140" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Arrow from pillar 4 → center */}
      <path d="M390 120 L300 120 L300 140 L340 140" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Arrow from center → workflow */}
      <path d="M300 140 L300 160 L600 160 L600 120" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
```

---

## 8. TRANSLATION KEYS

### English (`messages/en.json`)
```json
"howItWorks": {
  "title": "How Syrix Help Desk Works",
  "pillar1": {
    "title": "Instructions",
    "desc": "Define your agent's role, tone, and behavior. Set instructions for how it should respond to customers."
  },
  "pillar2": {
    "title": "Knowledge Collections",
    "desc": "Upload product docs, policies, FAQs. Syrix indexes them and answers from verified sources only."
  },
  "pillar3": {
    "title": "MCP Tools (Actions)",
    "desc": "Connect to CRM, calendar, payment systems. Agent executes actions via MCP tools autonomously."
  },
  "pillar4": {
    "title": "Suggestions",
    "desc": "AI suggests relevant questions when visitors start chatting. Quick-start conversations with smart prompts."
  },
  "workflow": {
    "title": "Workflow Integration",
    "desc": "Connect to XCorp Workflow for automated multi-step tasks. Create automation flows and connect them to your agent.",
    "cta": "Explore Workflow →"
  }
}
```

### Vietnamese (`messages/vi.json`)
```json
"howItWorks": {
  "title": "Syrix Help Desk hoạt động như thế nào",
  "pillar1": {
    "title": "Hướng dẫn",
    "desc": "Định nghĩa vai trò, giọng điệu và hành vi của agent. Thiết lập hướng dẫn cách nó phản hồi với khách hàng."
  },
  "pillar2": {
    "title": "Bộ sưu tập Kiến thức",
    "desc": "Tải lên tài liệu sản phẩm, chính sách, FAQ. Syrix lập chỉ mục và trả lời chỉ từ nguồn đã xác minh."
  },
  "pillar3": {
    "title": "Công cụ MCP (Hành động)",
    "desc": "Kết nối với CRM, lịch, hệ thống thanh toán. Agent thực thi hành động qua công cụ MCP tự động."
  },
  "pillar4": {
    "title": "Gợi ý",
    "desc": "AI gợi ý câu hỏi liên quan khi khách bắt đầu trò chuyện. Bắt đầu chat nhanh với prompt thông minh."
  },
  "workflow": {
    "title": "Tích hợp Workflow",
    "desc": "Kết nối với XCorp Workflow cho các tác vụ tự động đa bước. Tạo luồng tự động và kết nối với agent của bạn.",
    "cta": "Khám phá Workflow →"
  }
}
```

---

## 9. ICONS NEEDED (lucide-react)

```tsx
import { 
  Briefcase, BookOpen, Wrench, Lightbulb, 
  ArrowRight, WorkflowIcon // custom or use Settings/Cogs
} from 'lucide-react';
```

---

## 10. DESIGN TOKENS

| Token | Value | Usage |
|-------|-------|-------|
| `bg-card` | `#12121a` | Section background |
| `bg-background` | `#0a0a0f` | Pillar cards |
| `primary` | `#3b82f6` | Borders, glows |
| `text-foreground` | `#ffffff` | Headings |
| `text-muted-foreground` | `#a0a0b0` | Descriptions |
| `cyan-400` | `#22d3ee` | Accent color 1 |
| `emerald-400` | `#34d399` | Accent color 2 |
| `amber-400` | `#fbbf24` | Accent color 3 |
| `purple-400` | `#a78bfa` | Accent color 4 |

---

## 11. ANIMATION SPEC

**Responsiveness:**
- Mobile: Stack vertically, simplified diagram
- Desktop: Full horizontal flow

**Animation:**
- Pillars: `initial: opacity:0/y:20` → `whileInView: opacity:1/y:0`
- Stagger: `delay: i * 0.1`
- Viewport: `once: true`
- Agent: `whileInView` with scale transition
- Workflow: `whileInView` with glow effect

---

## 12. HELPER COMPONENTS TO CREATE

1. `SetupPillars.tsx` — 4 pillar cards
2. `AgentRunning.tsx` — Agent status + chat preview
3. `WorkflowIntegration.tsx` — Workflow CTA section
4. `Arrows.tsx` — SVG connector lines
5. `ChatWidgetPreview.tsx` — Simplified chat mockup

---

## 13. DELIVERABLES

✅ `messages/en.json` — Update `helpDesk.howItWorks` block  
✅ `messages/vi.json` — Mirror with Vietnamese translations  
✅ `components/product/help-desk/HowItWorksSection.tsx` — Complete rewrite  
✅ `components/product/help-desk/SetupPillars.tsx` — Helper component  
✅ `components/product/help-desk/AgentRunning.tsx` — Helper component  
✅ `components/product/help-desk/WorkflowIntegration.tsx` — Helper component  
✅ `components/product/help-desk/Arrows.tsx` — Helper component  
✅ `components/product/help-desk/ChatWidgetPreview.tsx` — Helper component  
✅ `npm run build` — Pass without errors

---

## 14. NOTES

- **Visual Style:** Match Glean's orchestration page — clean, diagrammatic, clear flow
- **Workflow Integration:** Emphasize MCP connection to XCorp Workflow (activepieces-style automation)
- **Responsive:** Stack on mobile, flow on desktop
- **Hover Effects:** Pillar cards scale 1.02x with accent color glow
- **Animation:** Smooth cascading reveal with viewport triggers
- **CTA:** Workflow button always visible, smooth scroll to Workflow page

---

**Ready for agent to code.** Copy-paste this todo4.md into your agent prompt.
