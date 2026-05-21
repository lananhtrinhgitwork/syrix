# SYRIX.AI — Complete Website Build TODO

> **Goal:** Build a production-ready marketing website for Syrix — an AI execution platform for enterprises.
> **Target style:** [xcorp.app](https://xcorp.app/en/w/home) — dark, premium, enterprise. References: glean.com, salesforce.com/ap/artificial-intelligence/
> **Conversion:** Single CTA — **Book Demo**. No self-serve trial.
> **i18n:** Vietnamese (default, `/`) + English (`/en/`). All copy below is EN; VN translations needed in i18n files.

---

## TECH STACK

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + custom design tokens
- **Animation:** Framer Motion (staggered reveal, hover states)
- **Language:** TypeScript
- **i18n:** next-intl (locale: `vi` default, `en`)
- **Font:** Any premium sans-serif except Inter / Roboto (e.g. Satoshi, Cabinet Grotesk, DM Sans, Plus Jakarta Sans)

## DESIGN SYSTEM

- **Background:** Dark (#0a0a0f or similar deep black)
- **Surface:** Slightly lighter dark cards (#12121a)
- **Accent color:** Sharp, distinct (avoid purple gradient — try electric blue #3b82f6, cyan #06b6d4, or emerald #10b981 — confirm with team)
- **Text:** White (#fff) primary, gray (#a0a0b0) secondary
- **Motion:** Sections reveal on scroll with staggered children. Cards/buttons have clear hover states (glow, scale, or border accent).
- **No chatbot UI, no bubble chat in hero visuals**

## GLOBAL LAYOUT COMPONENTS

### 1. Navbar
- **Position:** Sticky top, dark glass (backdrop-blur)
- **Left:** Logo "syrix.ai" (SVG)
- **Center nav links (desktop):**
  - `Products ▾` → Dropdown: Help Desk | AI Agent | Workspace | Speech-to-Text | Text-to-Speech
  - `Solutions ▾` → Dropdown: Customer Support | Internal Knowledge | Meeting Execution | Real Estate | Financial Services | Retail & E-commerce

  - `Pricing`
- **Right:**
  - Language switcher: `VN` / `EN` toggle
  - CTA button: **Book Demo** (filled accent, always visible)
- **Mobile:** Hamburger menu with full nav + dropdowns + CTA

### 2. Footer
- **Top row:** Logo + short tagline (e.g. *"AI that doesn't just answer. It executes."*)
- **Columns:**
  - Products: Help Desk, AI Agent, Workspace, Speech-to-Text, Text-to-Speech
  - Solutions: Customer Support, Internal Knowledge, Meeting Execution
  - Company: About, Customers, Pricing, Book Demo
  - Legal: Privacy Policy
- **Bottom bar:** "Built by Xperc" (no external link) · © 2026 Syrix. All rights reserved.

### 3. CTA Block (Reusable Component)
Used at the bottom of every page:
```
"Ready to make AI actually work for you?"
→ [Book Demo] button
```
- Props: headline (string), subtext (string), buttonLabel (default "Book Demo")
- Dark background with subtle accent gradient edge

### 4. Language Switcher
- Toggle in navbar: `VN` ↔ `EN`
- Default: VN at `/`
- English mirror: `/en/` prefix for all routes
- All strings go into i18n locale files (`vi.json`, `en.json`)

---

## SITEMAP

```
syrix.ai/
├── /                               Home
├── /products                       Products Hub
│   ├── /products/help-desk         External customer support agent
│   ├── /products/ai-agent          Internal RAG / knowledge brain
│   ├── /products/workspace         Agentic chat workspace
│   ├── /products/asr               Speech-to-Text (voice → action)
│   └── /products/tts               Text-to-Speech
├── /solutions                      Solutions Hub
│   ├── /solutions/customer-support  Use case
│   ├── /solutions/internal-knowledge Use case
│   ├── /solutions/meeting-execution  Use case
│   ├── /solutions/real-estate       Industry
│   ├── /solutions/financial-services Industry
│   └── /solutions/retail-ecommerce  Industry
├── /customers                      Case studies hub
│   └── /customers/[slug]           Individual case study
├── /pricing                        Tiered + usage-based
├── /security                       Trust center
├── /about                          Company
├── /book-demo                      Primary conversion → form
├── /contact                        Sales inquiries
└── /legal/privacy-policy           Standard legal
```

---

## PAGE 1: HOME (`/`)

### S1 — Hero Section
**Purpose:** Within 5 seconds, visitor understands Syrix is NOT a chatbot — it's an execution system.

```
Headline (h1): "Your AI shouldn't just answer questions. It should complete the work."

Subheadline (p): "Syrix connects large language models directly to your CRM, ERP, HRM, email,
and knowledge bases — so your AI agents can read, write, and act across every system through
simple natural language commands."

CTA: [Book Demo] — filled accent button

Visual: Animated flow diagram showing:
  Natural language command → multiple systems (CRM, ERP, KB) being updated simultaneously
  NO chat bubbles. NO bot avatar. Think: animated network/execution visualization.
```

### S2 — Problem Statement
**Purpose:** Make visitor feel the friction of the current "AI that only talks."

```
Headline (h2): "Your enterprise has AI. Your people are still doing the manual work."

Body: "Most enterprises have adopted generative AI for Q&A and content creation. But there's a
fundamental gap between an AI that can answer questions and an AI that can execute business
processes. Every time an employee needs to move information between systems or complete a
multi-step workflow, they still have to do it by hand."

Visual Story (side-by-side or timeline):
  [BEFORE] Sales rep gets qualified lead at 11pm
    → AI answers product question ✓
    → But someone still manually: creates CRM record, notifies account manager, schedules follow-up,
      drafts proposal
    → "4 manual steps. 1 human who could have been sleeping."

  [AFTER] Same lead at 11pm with Syrix
    → AI qualifies lead, creates CRM record, notifies team, schedules call, drafts first email
    → Zero human intervention. Closed-loop automation.
```

### S3 — How It Works (3 Steps)
**Purpose:** Simple mental model of how Syrix operates.

```
Headline (h2): "How Syrix Works"

3 Steps (numbered, icon per step, horizontal or vertical layout):

Step 1 — "Connect"
  "Syrix connects to your existing systems — CRM, ERP, HRM, email, internal knowledge bases — in
  days, not months. No rip-and-replace."

Step 2 — "Instruct"
  "Your team communicates in natural language. No complex configuration. No training required.
  Just tell Syrix what needs to be done."

Step 3 — "Execute"
  "Syrix executes across applications autonomously — creating records, updating systems, sending
  notifications, completing workflows — all without manual intervention."
```

### S4 — Product Suite (4 Cards)
**Purpose:** Quick overview of the ecosystem, each card links to its product subpage.

```
Headline (h2): "The Syrix Ecosystem"

4 Cards (2×2 grid, each with icon/visual, hover animation):

Card 1 — "Help Desk"
  Tagline: "Turn every customer touchpoint into a resolved case, automatically."
  Bullets:
  • RAG-powered knowledge retrieval from your product docs
  • Autonomous CRM lead creation and update
  • Intelligent escalation when human intervention is needed
  CTA: [Learn more → /products/help-desk]

Card 2 — "AI Agent"
  Tagline: "Your company's private brain. Accurate, secure, always on."
  Bullets:
  • Private knowledge retrieval from internal documents
  • Cross-departmental synthesis (HR + Finance + Legal in one answer)
  • Zero data retention — runs in your private environment
  CTA: [Learn more → /products/ai-agent]

Card 3 — "Workspace"
  Tagline: "One hub. Every agent. All your workflows."
  Bullets:
  • Natural language task assignment to AI agents
  • Automated thread summarization
  • Quick-action triggers for common workflows
  CTA: [Learn more → /products/workspace]

Card 4 — "Speech-to-Text"
  Tagline: "Speak. Syrix handles the rest."
  Bullets:
  • Real-time meeting transcription with speaker identification
  • Voice-driven task creation and approval workflows
  • Automatic knowledge base contribution
  CTA: [Learn more → /products/asr]
```

### S5 — Metrics / Social Proof
**Purpose:** Quantitative proof with benchmark numbers (label as "projected" until verified).

```
Headline (h2): "Built for results"

4 Stat Blocks (large number + label):
  • "70%" — "Reduction in process handling time"
  • "95%" — "Automated resolution rate"
  • "Days" — "Deployment time (vs. 4-6 months for custom builds)"
  • "40%" — "Reduction in internal search time"

Note: Show these as projected benchmarks. Subtle footnote: "Based on initial deployments.
Results may vary."
```

### S6 — Final CTA Block
```
Headline (h2): "Ready to make AI actually work for you?"
Subtext: "Schedule a demo to see how Syrix can transform your operations."
CTA: [Book Demo]
```

---

## PAGE 2: PRODUCTS HUB (`/products`)

### Hero
```
Headline (h1): "One Platform. Five Products. Infinite Possibilities."
Subtext: "Syrix is an integrated ecosystem of AI-powered products that work together to automate
your business operations end-to-end."
```

### Product Cards (5 large cards, vertical or 3+2 grid)
Each card (repeat for all 5 products):

```
Card: Help Desk
  Tagline: "Turn every customer touchpoint into a resolved case, automatically."
  Capabilities:
  • RAG-powered knowledge retrieval from internal knowledge base
  • Autonomous CRM lead creation and record updates
  • Automated email workflows (follow-up, confirmation, escalation)
  • Intelligent human escalation by sentiment, complexity, and risk
  • Multi-channel deployment (web widget, email, Zalo)
  CTA: [View Details → /products/help-desk]

Card: AI Agent
  Tagline: "Your company's private brain. Accurate, secure, always on."
  Capabilities:
  • Private knowledge retrieval from any internal document
  • Cross-departmental synthesis in a single answer
  • Zero data retention — fully private environment
  • VPC deployment, SSO, full audit trails
  CTA: [View Details → /products/ai-agent]

Card: Workspace
  Tagline: "One hub. Every agent. All your workflows integrated in one chat."
  Capabilities:
  • Natural language task assignment to AI agents
  • Automated thread and conversation summarization
  • One-click workflow triggers (run report, create lead, submit request)
  • Sentinel Dashboard for monitoring agent activity
  CTA: [View Details → /products/workspace]

Card: Speech-to-Text
  Tagline: "Lead with your voice. Syrix handles the rest."
  Capabilities:
  • Real-time transcription with speaker identification
  • Auto-generated meeting summaries (decisions, actions, questions)
  • Voice-driven task creation and approval workflows
  • Knowledge base contribution from voice recordings
  CTA: [View Details → /products/asr]

Card: Text-to-Speech
  Tagline: "Turn any text into natural speech — for accessibility, notifications, and voice responses."
  Capabilities:
  • Natural voice output from any text content
  • Accessibility support for visually impaired users
  • Voice notifications from system events
  • Multi-language voice support
  CTA: [View Details → /products/tts]
```

### Comparison Matrix (bottom)
A simple table: rows = use cases, columns = 5 products, checkmarks for which product addresses each use case.

| Use Case | Help Desk | AI Agent | Workspace | ASR | TTS |
|---|---|---|---|---|---|
| Customer query resolution | ✓ | | | | |
| Internal policy search | | ✓ | | | |
| Multi-system workflow automation | | | ✓ | | |
| Meeting transcription & summary | | | | ✓ | |
| Voice notifications | | | | | ✓ |
| Lead qualification & CRM update | ✓ | | | | |
| Cross-department knowledge synthesis | | ✓ | | | |
| Voice command task creation | | | | ✓ | |

---

## PAGE 3: HELP DESK (`/products/help-desk`)
**Positioning:** External customer support / sales automation — NOT internal IT helpdesk.

### S1 — Hero
```
Headline (h1): "Deploy an agent that doesn't just respond to customers — it resolves their issues,
updates your CRM, and escalates only when necessary."
Subtext: "Syrix Help Desk is an AI-first customer service and sales automation platform that operates
as a digital employee — available 24/7, handling thousands of concurrent sessions at a fraction
of human headcount costs."
CTA: [Book Demo]
```

### S2 — Demo Visual / Mockup
Show an actual conversation widget where the agent performs actions:
```
Customer: "I need a quote for your enterprise plan for 50 users."
Agent: checks database → "Based on your needs, the Enterprise plan at $15/user/month
would be optimal. I've created a lead record and your account manager will follow up
within 24 hours. Here's a summary of what I've prepared: [Quote summary]"
→ CRM record created → Sales rep notified → Follow-up scheduled
All in one conversation. No human intervention.
```

### S3 — Capability Pillars (5 pillars, icon grid or tabs)

```
Pillar 1 — "RAG-Powered Knowledge Retrieval"
  "Syrix Help Desk retrieves accurate, up-to-date answers directly from your internal
  knowledge base using retrieval-augmented generation. No hallucination. No outdated FAQ scripts."

Pillar 2 — "Autonomous CRM Lead Creation"
  "When a new prospect reaches out, the agent automatically captures qualification data,
  verifies identity, creates a structured lead record in your CRM, and notifies the assigned
  sales representative — all within the same conversation, without any manual data entry."

Pillar 3 — "Automated Email Workflows"
  "From confirmation emails and follow-up sequences to escalation notifications and meeting
  invitations — Syrix handles the entire communication lifecycle automatically."

Pillar 4 — "Intelligent Human Escalation"
  "Not every case should be handled by an AI. Syrix uses configurable escalation rules based
  on sentiment, topic complexity, customer tier, and risk level to route conversations to the
  right human at the right time."

Pillar 5 — "Multi-Channel Deployment"
  "Deploy the same agent across your website chat widget, email, and Zalo — with consistent
  behavior, knowledge, and branding across every channel."
```

### S4 — Customer Journey Visual
```
Step-by-step flow (horizontal timeline or flow diagram):
  Website Visit → AI Consultation → Identity Verification → Lead Qualified → CRM Logged → Sales Notified
  Total time: under 5 minutes
```

### S5 — Integration Ecosystem
Show a visual map of systems Syrix connects to: Salesforce, HubSpot, Zoho, HRM platforms, email systems, Zalo, internal KB.
Mention: "300+ app integrations via MCP (Model Context Protocol)"

### S6 — Trust & Safety
```
"Every agent decision is logged with a full audit trail. High-risk actions (large refunds, account
changes, data deletion) require human approval gates. Glass-box transparency: managers can view
the AI's thinking log at any time."
```

### S7 — FAQ (Accordion)
Q1: "How long does deployment take?"
  A: "Typically 3-6 weeks for the first solution, depending on data readiness and integration complexity."

Q2: "What systems do you integrate with?"
  A: "Syrix connects to any system with an API — CRM, ERP, HRM, email, knowledge bases, and 300+
      apps via the Model Context Protocol. If your system has an API, we can connect to it."

Q3: "Is my customer data secure?"
  A: "Yes. Syrix operates in a private environment with VPC deployment, SSO integration, and
      comprehensive audit trails. We do not store queries or responses on external servers."

Q4: "When does a human step in?"
  A: "You configure escalation rules based on sentiment analysis, topic complexity, customer tier,
      and risk level. The AI handles everything else autonomously."

Q5: "What happens if the AI doesn't know the answer?"
  A: "Syrix is built on a strict RAG policy — it only answers from verified company documents.
      When no confident answer is found, it gracefully escalates to a human agent."

### S8 — CTA Block
```
"Ready to automate your customer support?"
→ [Book Demo]
```

---

## PAGE 4: AI AGENT (`/products/ai-agent`)
**Positioning:** Internal knowledge brain — private RAG for enterprise.

### S1 — Hero
```
Headline (h1): "Your company's private brain. Accurate, secure, always on."
Subtext: "Syrix AI Agent ingests your internal documents — policies, manuals, contracts, HR handbooks —
and builds a private, encrypted knowledge base. Employees get grounded, cited answers in seconds,
not minutes."
CTA: [Book Demo]
```

### S2 — Core Capabilities (3 large blocks)

```
Block 1 — "Private Knowledge Retrieval"
  "Syrix AI ingests your internal documents (PDF, DOCX, Notion, Confluence, SharePoint) and builds
  a private encrypted vector index. When an employee asks a question, the system retrieves the most
  relevant passages from your actual documents and generates a grounded, cited answer.
  No hallucination. No outdated information."

Block 2 — "Cross-Departmental Synthesis"
  "Employees often need information that spans multiple departments — an HR policy, a finance
  approval limit, and a legal clause that all apply to the same situation. Syrix AI retrieves and
  synthesizes across all connected knowledge sources simultaneously, delivering a unified answer
  that no single department's documentation could provide alone."

Block 3 — "Zero Data Retention"
  "Syrix AI does not store queries or responses on external servers. Every session runs within your
  designated private environment. No employee question ever leaves your infrastructure. Complete
  data sovereignty."
```

### S3 — Employee Use Case (Split-screen visual)
```
Left: Employee types: "What's our policy on overseas contractor payments for projects over $50K?"
Right: AI shows: cited answer pulling from Finance policy (clause 4.2), Legal contract guidelines
  (section 3.1), and HR remote work addendum (page 7) — all in one unified answer.
Caption: "From 20 minutes of manual search to 10 seconds."
```

### S4 — Security Architecture Summary
```
• VPC Deployment — Runs in your virtual private cloud, fully isolated
• SSO Integration — Works with your existing identity provider (Okta, Azure AD, Google Workspace)
• Audit Trails — Every query and response is logged for compliance
• Encryption at rest and in transit — AES-256 + TLS 1.3
```

### S5 — FAQ (Accordion)
Q1: "What document formats are supported?"
  A: "PDF, DOCX, TXT, Markdown, Notion export, Confluence, SharePoint. Custom format support on request."

Q2: "How often is the knowledge base updated?"
  A: "You can trigger updates manually or set up automatic sync on a schedule. The index refreshes
      incrementally — no full re-index needed."

Q3: "Can I control which documents the AI accesses?"
  A: "Yes. You organize documents into collections and assign them to agents. Granular access control
      ensures teams only see relevant information."

Q4: "How accurate are the answers?"
  A: "Syrix AI only generates answers based on retrieved document passages. Every answer includes
      citations so users can verify the source. We use a strict RAG policy — no free-form generation."

### S6 — CTA Block
```
"Give your organization a brain that never forgets."
→ [Book Demo]
```

---

## PAGE 5: WORKSPACE (`/products/workspace`)
**Positioning:** Operational hub — agentic chat workspace.

### S1 — Hero
```
Headline (h1): "One hub. Every agent. All your workflows."
Subtext: "Syrix Workspace eliminates app switching. Chat becomes your centralized operational hub
where AI agents work alongside your team — executing workflows, summarizing threads, and
coordinating across systems. All in natural language."
CTA: [Book Demo]
```

### S2 — Sentinel Dashboard (USP)
```
Headline: "Real-time visibility into your AI workforce"
Content: "The Sentinel Dashboard gives you a live view of every AI agent's status — which tasks
are running, which are waiting for input, which have completed. Monitor long-running workflows,
review agent decisions, and intervene when needed. This is a unique feature exclusive to Syrix."

Visual: Mockup of a dashboard showing agents in different states:
  [🤖 Help Desk Agent] — STATUS: Running (12 active conversations)
  [🤖 AI Agent] — STATUS: Idle (awaiting queries)
  [🤖 Workspace Assistant] — STATUS: Processing ("Summarizing project Hanoi")
  [🤖 ASR Agent] — STATUS: Listening (Meeting "Q3 Planning" in progress)
```

### S3 — Command Center Capabilities (3 blocks)

```
Capability 1 — "Natural Language Task Assignment"
  "Employees instruct agents using conversational language — 'Summarize the Hanoi project this week
  and send a briefing to the project lead.' Workspace routes the instruction to the appropriate
  agent, executes the workflow, and returns a result. No forms. No dashboards. Just talk to your AI team."

Capability 2 — "Automated Thread Summarization"
  "Long conversations and multi-day threads are automatically summarized on demand. An executive
  joining mid-stream can request a summary and receive a structured digest of key decisions, open
  questions, and action items — without reading through hundreds of messages."

Capability 3 — "Quick Action Triggers (MCP Execution Bar)"
  "A persistent interface element allowing employees to trigger predefined workflows with one click:
  run weekly report, create a new lead, check inventory status, submit a leave request. Each action
  executes the full backend workflow through connected systems."
```

### S4 — Workflow Integration Visual
```
Flow map showing:
  Manager approves in chat: "Approve PO-2024-3892"
    → Workspace routes to AI Agent
    → ERP updated (PO status → Approved)
    → Finance system notified
    → Supplier email sent
    → Workspace returns: "PO-2024-3892 approved. Finance notified. Estimated delivery: 14 days."
  All in under 30 seconds from a single chat message.
```

### S5 — FAQ (Accordion)
Q1: "How is Workspace different from Slack/Teams?"
  A: "Workspace is not a messaging app — it's an operational hub. Your messages don't just connect
      to people; they trigger workflows, update systems, and execute tasks. It's where your AI agents
      live and work alongside your team."

Q2: "Can I integrate existing Slack/Teams conversations?"
  A: "Yes. Workspace can connect to Slack and Teams to bring conversations into the Syrix ecosystem
      for summarization, action extraction, and task assignment."

Q3: "What workflows can be automated?"
  A: "Any workflow that can be described in natural language and executed through connected systems:
      report generation, lead creation, approval routing, notification broadcasting, data sync, and more."

### S6 — CTA Block
```
"Replace your fragmented tool stack with one agentic workspace."
→ [Book Demo]
```

---

## PAGE 6: SPEECH-TO-TEXT (`/products/asr`)
**Positioning:** Voice-driven execution layer, not a transcription tool.

### S1 — Hero
```
Headline (h1): "Speak. Syrix handles the rest."
Subtext: "Syrix Speech-to-Text converts spoken language into structured actions — meeting summaries,
task assignments, knowledge base updates, and approval commands. Designed for executives and managers
who need to act without touching a screen."
CTA: [Book Demo]
```

### S2 — Two Core Capability Groups

```
Group 1 — "Meeting Intelligence"
  • Real-time transcription with speaker identification
  • Automated meeting summary: decisions, action items, open questions
  • Action item extraction pushed directly to Workspace
  • Optional knowledge base contribution to Syrix AI Agent

Group 2 — "Voice Command for Managers"
  • Voice-driven task creation and assignment
  • Hands-free data queries (e.g., "What's our Q3 revenue?")
  • Voice approval workflows with confirmation step for high-risk actions
  • On-the-go note capture routed to CRM or Workspace
```

### S3 — Use Case Scenarios (3 cards)

```
Scenario A — "Post-Meeting Manager"
  "Sales Director finishes a 75-minute client call. Summary generated. 4 action items assigned.
  Pricing adjustments flagged for CFO. Risks pushed to leadership thread. Zero manual input."

Scenario B — "Between-Meetings Executive"
  "COO verbally requests a contract delta summary and sends it to Legal with a deadline.
  All completed in 7 minutes between meetings."

Scenario C — "HR Knowledge Creator"
  "HR Manager records a 15-minute voice walkthrough of a new policy. Syrix converts it into a
  formatted knowledge base article published directly to Syrix AI Agent. No typing required."
```

### S4 — Differentiation Table
Comparison: Generic transcription tools vs. Syrix Speech-to-Text

| Dimension | Generic Transcription | Syrix Speech-to-Text |
|---|---|---|
| Output | Raw text | Structured decisions + actions |
| Downstream | Static transcript | Tasks, KB updates, CRM records |
| Business context | None | Understands org structure, systems |
| Data residency | Cloud-only | Private environment option |
| Action extraction | Not available | Auto-extracted from context |
| Approval workflow | Not available | Voice-confirmed execution |

### S5 — Ecosystem Integration Visual
Diagram showing STT feeding all other products:
```
  Speech-to-Text
    → Meeting summaries → Workspace
    → Decisions/knowledge → AI Agent (KB)
    → Client interaction data → Help Desk
    → Voice approvals → ERP / HRM / CRM (via MCP)
```

### S6 — CTA Block
```
"Stop losing insights to bad note-taking."
→ [Book Demo]
```

---

## PAGE 7: TEXT-TO-SPEECH (`/products/tts`)
**Positioning:** Natural voice output for accessibility, notifications, and voice responses.

### S1 — Hero
```
Headline (h1): "Turn any text into natural, lifelike speech."
Subtext: "Syrix Text-to-Speech converts system outputs, notifications, and knowledge base articles
into natural-sounding voice — for accessibility, hands-free operation, and voice response workflows."
CTA: [Book Demo]
```

### S2 — Capabilities
```
• Multi-language natural voice output (Vietnamese, English, and more)
• Accessibility support for visually impaired users
• Voice notifications triggered by system events (lead alerts, approval requests, task completions)
• Voice response in customer-facing channels (phone, smart speakers)
• Custom voice branding options
```

### S3 — Use Cases
```
• Read aloud customer support responses for phone integration
• Voice notifications: "New qualified lead from Acme Corp — $50K deal potential"
• Accessibility: employees with visual impairments can have any document or policy read aloud
• Approval confirmation: "PO-2024-3892 approved. Finance notified."
```

### S4 — CTA Block
```
"Give your AI a voice."
→ [Book Demo]
```

---

## PAGE 8: SOLUTIONS HUB (`/solutions`)

### Hero
```
Headline (h1): "Real problems. Real solutions."
Subtext: "Syrix addresses the most common operational challenges enterprises face — from customer
support overload to internal knowledge gaps to meeting execution inefficiency."
```

### Solution Cards (6 cards, 2 rows: 3 use cases + 3 industries)

Use Cases:
```
1. Customer Support
   "Automate end-to-end customer resolution with AI that doesn't just answer — it acts."
   → /solutions/customer-support

2. Internal Knowledge
   "Give every employee instant access to your company's collective intelligence."
   → /solutions/internal-knowledge

3. Meeting Execution
   "Turn every meeting into structured action — automatically."
   → /solutions/meeting-execution
```

Industries:
```
4. Real Estate
   "Automate lead qualification, property inquiries, and transaction workflows."
   → /solutions/real-estate

5. Financial Services
   "Handle compliance-heavy customer interactions with zero-hallucination AI."
   → /solutions/financial-services

6. Retail & E-commerce
   "Scale customer support and automate post-purchase workflows."
   → /solutions/retail-ecommerce
```

---

## PAGE 9: CUSTOMER SUPPORT SOLUTION (`/solutions/customer-support`)

### S1 — Persona
```
Company: FinSprint — fintech startup, 200 employees
Decision Maker: Mai Tran, VP of Customer Success
Challenge: 500 tickets/day, 4-hour average response time, 15 support agents
```

### S2 — Before Syrix (The Problem)
```
• 500 daily support tickets across email, chat, and Zalo
• 4-hour average first response time
• 15 full-time support agents — 60% of time spent on repetitive queries
• Lead qualification manual: every inbound interest requires a human to verify, qualify, and hand off
• After-hours inquiries go unanswered until next morning
• Customer churn rate: 12% attributed to slow response
```

### S3 — Syrix Solution
```
Products deployed: Help Desk + AI Agent
Flow: Inbound inquiry (any channel)
  → Help Desk agent: RAG retrieval from product KB → instant accurate response
  → For complex issues: intelligent escalation to human (sentiment + topic analysis)
  → Lead detection: automatic CRM qualification → Sales notified
  → Follow-up emails automated
  → All decisions logged in audit trail
```

### S4 — Measurable Impact
```
• First response time: 4 hours → under 10 minutes
• Tickets auto-resolved: 80% (400 out of 500 daily)
• Support team reduced: 15 agents → 5 (focused on complex cases)
• Lead conversion rate: +35% (every inquiry handled instantly, even at 2 AM)
• Customer satisfaction: +22% (measured by post-resolution survey)
• Annual cost savings: ~$240K in reduced headcount
```

### S5 — CTA Block
```
"Stop losing customers to slow support."
→ [Book Demo]
```

---

## PAGE 10: INTERNAL KNOWLEDGE SOLUTION (`/solutions/internal-knowledge`)

### S1 — Persona
```
Company: LandVista — real estate firm, 500 employees
Decision Maker: Anh Phong, Director of Operations
Challenge: Employees spend 30-45 minutes/day searching for policies; new hires take 2 weeks to onboard
```

### S2 — Before Syrix (The Problem)
```
• 500 employees across 12 offices, each with different local policies
• Average 35 minutes/day spent searching internal documents
• New hire onboarding: 2 weeks before productive
• Knowledge silos: HR doesn't know Finance policies, Sales doesn't know Legal guidelines
• 15% of employee queries go unanswered or get wrong answers from outdated documents
• 3 HR staff dedicated to answering repetitive policy questions
```

### S3 — Syrix Solution
```
Products deployed: AI Agent + Workspace
Flow: Employee types question in Workspace (or Slack/Teams connected)
  → AI Agent retrieves from all connected knowledge collections simultaneously
  → Cross-departmental synthesis: HR policy + Finance limit + Legal clause = one unified answer
  → Cited answers with source links
  → Feedback loop: employees can rate answers → improving retrieval over time
```

### S4 — Measurable Impact
```
• Policy search time: 35 minutes → 30 seconds
• New hire onboarding: 2 weeks → 3 days
• Internal search time reduced by 40%
• HR policy questions automated: staff reduced from 3 to 1
• Employee satisfaction with knowledge access: +45%
• First contact resolution for internal queries: 92%
```

### S5 — CTA Block
```
"Give every employee instant access to your company's intelligence."
→ [Book Demo]
```

---

## PAGE 11: MEETING EXECUTION SOLUTION (`/solutions/meeting-execution`)

### S1 — Persona
```
Company: FlowTech — B2B SaaS, 100 employees
Decision Maker: Minh Hoang, COO
Challenge: After each meeting, the team spends 1-2 hours writing notes, assigning tasks, and updating systems
```

### S2 — Before Syrix (The Problem)
```
• 15+ meetings per week across the organization
• Each meeting generates 1-2 hours of post-meeting admin (notes, tasks, system updates)
• Action items lost or forgotten — 30% of decisions never executed
• Cross-functional meetings require updates to 3+ systems (CRM, ERP, project management)
• No centralized record of decisions made across the organization
• Follow-up takes 2-3 days of email ping-pong
```

### S3 — Syrix Solution
```
Products deployed: Speech-to-Text + Workspace
Flow: Meeting starts
  → STT transcribes in real-time with speaker identification
  → AI generates structured summary: decisions, action items, open questions
  → Action items auto-assigned in Workspace with deadlines
  → System updates triggered (CRM records, ERP entries, KB contributions)
  → Approved actions executed via voice confirmation
  → Summary pushed to all attendees
```

### S4 — Measurable Impact
```
• Post-meeting admin: 1-2 hours → 0 minutes (fully automated)
• Action items executed: 30% lost → 95% tracked and completed
• System updates per meeting: 3 manual → 3 automatic
• Cross-functional alignment: email ping-pong eliminated
• Knowledge capture: every decision stored and searchable in AI Agent KB
```

### S5 — CTA Block
```
"Turn every meeting into execution."
→ [Book Demo]
```

---

## PAGE 12: PRICING (`/pricing`)

### S1 — Hero
```
Headline (h1): "Transparent pricing. Pay for what you use."
Subtext: "Syrix combines predictable base licensing with modular usage-based billing.
No hidden fees. No surprise invoices."
CTA: [Book Demo]
```

### S2 — Pricing Table (3 tiers)

```
TIER 1 — "Starter"
  Best for: Small teams getting started with AI
  Price: Contact us
  Includes:
  • 1 AI solution (Help Desk, AI Agent, or ASR)
  • Up to 3 concurrent sessions
  • Standard support (response < 24h)
  • Basic integration setup
  CTA: [Book Demo]

TIER 2 — "Growth"
  Best for: Growing mid-market companies
  Price: Contact us
  Includes:
  • Up to 2 AI solutions
  • Up to 10 concurrent sessions
  • Priority support (response < 4h)
  • SaaS add-ons available (OKR, PM, Leave, Timesheet)
  • 30-day hypercare post-deployment
  CTA: [Book Demo]

TIER 3 — "Enterprise"
  Best for: Large organizations at scale
  Price: Custom
  Includes:
  • Unlimited AI solutions
  • Custom concurrent session capacity
  • Dedicated AI consultant
  • VPC deployment + SSO
  • Monthly performance reports
  • Quarterly strategic review
  • SLA: response < 2 hours
  CTA: [Contact Sales → /book-demo]
```

### S3 — Usage-Based Pricing (Modular Performance Billing)
Explain how customers only pay for what they use on top of their base setup:

```
AI Helpdesk — Pay per peak concurrent session
  • $20/concurrent session/month
  • Analogy: "Think phone lines. Buy 10 lines, 10 customers chat simultaneously."
  • Tier options available for budget predictability

Automation — Pay per run
  • First 3,000 runs/month: 500 VND/run (~$0.02)
  • 3,001+ runs/month: 250 VND/run (~$0.01)
  • 1 run = 1 successful workflow execution

SaaS Add-ons — Per user per month
  • OKR: $1-3/user/month
  • PM: $1-3/user/month
  • Leave Management: $1/user/month
  • Timesheet: $1/user/month
  • Bundles: Basic Ops ($2/user), Full Ops ($4/user), Advanced Ops ($8/user)
```

### S4 — Sample Bill (Visual)
```
Example: Real Estate company, 30 employees

Setup (one-time):
  AI Helpdesk (Medium):         40,000,000 VND
  SaaS OKR add-on:              +20,000,000 VND
  ────────────────────────────────────
  Total setup:                   60,000,000 VND

Monthly usage (typical month):
  Help Desk (peak 8 sessions):          ~4,000,000 VND
  Automation (2,500 runs):              ~1,250,000 VND
  OKR Basic (30 users × $1):            ~750,000 VND
  PM Basic (30 users × $1):             ~750,000 VND
  Leave (30 users × $1):                ~750,000 VND
  Timesheet (30 users × $1):            ~750,000 VND
  ────────────────────────────────────
  Total monthly:                        ~8,250,000 VND
```

### S5 — Market Comparison
```
vs. Global alternatives:
  • AI Helpdesk: Up to 50x cheaper than per-conversation pricing
  • Automation: Competitive with open-source alternatives, with managed service
  • OKR software: 60-80% cheaper than dedicated tools
  • PM software: 70-90% cheaper than dedicated tools

Enterprise deployments typically see 40-60% cost savings vs. building in-house.
```

### S6 — FAQ (Accordion)
Q1: "What is the contract length?"
  A: "Starter and Growth tiers are month-to-month. Enterprise is minimum 3-month commitment, recommended 12 months."

Q2: "Is there a free trial?"
  A: "We don't offer self-serve trials. Instead, we start with a free AI Audit (60-minute session) that gives you a concrete AI Opportunity Map for your business — no commitment required."

Q3: "What payment methods do you accept?"
  A: "Bank transfer for setup fees. Usage is invoiced monthly with net-7 payment terms after approval."

### S7 — CTA Block
```
"Get a pricing plan tailored to your needs."
→ [Book Demo]
```

---

## PAGE 13: ABOUT (`/about`)

### S1 — About Syrix
```
Headline (h1): "Built by AI practitioners. Made for the real world."

Body: "Syrix was founded by the team behind Xperc — a consulting firm that has deployed AI solutions
for enterprises across Vietnam, from fintech to real estate to manufacturing. We saw the same pattern
everywhere: companies invested in AI but couldn't make it execute real work.

So we built Syrix — not as another AI tool, but as an execution platform that bridges the gap between
AI that talks and AI that does.

Our team combines deep expertise in AI/ML, enterprise integration, and business process optimization.
We don't just build technology — we build results that our customers can measure."
```

### S2 — Team / Values (optional section for later)
```
• Deep domain expertise in enterprise AI deployment
• Vietnam-based, globally focused
• Transparent pricing and measurable outcomes
• "Built by Xperc" — backed by years of real consulting experience
```

### S3 — CTA Block
```
"Want to learn more about our story?"
→ [Book Demo]
```

---

## PAGE 14: SECURITY (`/security`)
**Purpose:** Trust center — enterprise compliance and data privacy hub.

### S1 — Hero
```
Headline (h1): "Enterprise-grade security. Built into every layer."
Subtext: "Your data never leaves your control. Syrix is designed for organizations that demand
the highest standards of security, privacy, and compliance."
CTA: [Book Demo]
```

### S2 — Security Pillars (icon grid)

```
Pillar 1 — "Private Deployment"
  "Syrix runs in your Virtual Private Cloud (VPC), fully isolated from other tenants.
  We don't share infrastructure. We don't share data."

Pillar 2 — "Data Sovereignty"
  "All data — documents, queries, responses — stays within your infrastructure.
  Zero data retention on external servers. Choose your data region."

Pillar 3 — "Access Control"
  "SSO integration with your identity provider (Okta, Azure AD, Google Workspace).
  Role-based access control for every feature."

Pillar 4 — "Encryption"
  "AES-256 encryption at rest. TLS 1.3 in transit. Encrypted vector indexes for your knowledge base."

Pillar 5 — "Audit & Compliance"
  "Every agent action is logged with full traceability. Comprehensive audit trails for compliance
  review. Thinking logs for every AI decision."

Pillar 6 — "Human-in-the-Loop"
  "High-risk actions require human approval gates. Configurable escalation rules.
  Full transparency into agent decision-making."
```

### S3 — CTA Block
```
"Your security team will approve this."
→ [Book Demo]
```

---

## PAGE 15: BOOK DEMO (`/book-demo`) ⭐
**Purpose:** Primary conversion page — every CTA on the site drives here.

### S1 — Framing
```
Headline (h1): "This isn't a sales call. It's a roadmap session."
Subtext: "We'll understand your current stack, identify your biggest operational bottleneck,
propose a tailored solution, and show you a live demo — all in under 60 minutes."
```

### S2 — Demo Form
Fields (form with validation):

```
• Full Name * — text input
• Work Email * — email input
• Company Name * — text input
• Company Size * — dropdown: <50 | 50-200 | 200-1,000 | 1,000+
• What challenge are you solving? * — multi-select or textarea:
    Customer Support | Internal Knowledge | Meeting Execution | Other (specify)

Submit: [Book Demo] → (on submit, show success message + auto-confirmation email)
```

### S3 — Quick Contact (below form)
```
Not ready for a full demo? Reach out directly:
  • Zalo: [insert number]
  • Phone: [insert number]
  • Email: hello@syrix.ai
```

---

## PAGE 16: CONTACT (`/contact`)

### S1 — General Inquiries Form
```
Headline (h1): "Get in touch."
Subtext: "Sales inquiries, partnership opportunities, or just want to learn more — we're here."

Fields:
• Full Name * — text input
• Work Email * — email input
• Subject * — dropdown: Sales Inquiry | Partnership | Support | Other
• Message * — text area

Submit: [Send Message]
```

### S2 — Quick Contact
Same as Book Demo page:
```
Zalo: [insert number]
Phone: [insert number]
Email: hello@syrix.ai
```

---

## PAGE 17: CUSTOMERS (`/customers`)

### S1 — Hero
```
Headline (h1): "Trusted by enterprises that demand results."
Subtext: "See how leading organizations across industries use Syrix to transform their operations."
CTA: [Book Demo]
```

### S2 — Customer Logos (placeholder grid)
Show placeholder logos of representative companies (for prototype, use grey boxes with industry labels):
```
[FinTech] [Real Estate] [B2B SaaS] [Retail] [Manufacturing]
```

### S3 — Case Study Cards (linked to /customers/[slug])
Each card:
```
Case: FinSprint (FinTech, 200 employees)
  Result: 80% ticket auto-resolution, response time 4h → 10min
  → [Read Case Study]

Case: LandVista (Real Estate, 500 employees)
  Result: Search time 35min → 30sec, onboarding 2 weeks → 3 days
  → [Read Case Study]

Case: FlowTech (B2B SaaS, 100 employees)
  Result: Post-meeting admin → zero, 95% action item execution
  → [Read Case Study]
```

Note: For Phase 1 prototype, these can link to the corresponding /solutions pages or be single-page anchors.

---

## PAGE 18: PRIVACY POLICY (`/legal/privacy-policy`)
Standard legal page, text only. Content:
```
# Privacy Policy

## Information We Collect
[List standard categories: name, email, company info, usage data]

## How We Use Your Information
[List: service delivery, communication, improvement]

## Data Storage & Security
[AES-256, VPC deployment, no third-party data sharing]

## Contact
hello@syrix.ai
```

---

## OUT OF SCOPE (Phase 2 Backlog)
These pages are NOT included in Phase 1 prototype:
```
- /resources/blog
- /resources/whitepapers
- /resources/webinars
- /compare/glean
- /compare/zendesk-ai
- /changelog
- /careers
- /docs (developer docs hidden intentionally — enterprise buyers go through Book Demo)
- /integrations (hidden intentionally — handled in sales flow)
```

---

## COMPONENT CHECKLIST

### Shared / Layout
- [ ] Navbar (desktop + mobile) — sticky, dark glass, logo + 4 nav items + dropdowns + lang switcher + CTA
- [ ] Footer — logo + tagline + 4-column links + "Built by Xperc" + copyright
- [ ] CTA Block (reusable component) — headline + subtext + Book Demo button
- [ ] Language Switcher — VN / EN toggle in navbar
- [ ] Book Demo Button (reusable) — accent-filled, links to /book-demo
- [ ] FAQ Accordion (reusable component) — expandable Q&A with animation

### Home
- [ ] Hero Section — headline "Your AI shouldn't just answer...", subtext, CTA, animated visual
- [ ] Problem Statement — before/after story with sales rep at 11pm example
- [ ] How It Works (3 steps) — Connect → Instruct → Execute
- [ ] Product Suite (4 cards) — grid with icon, tagline, bullets, learn more link
- [ ] Metrics / Stats Block — 4 large numbers with labels
- [ ] Final CTA Block

### Product: Help Desk
- [ ] Hero
- [ ] Demo Visual / mockup conversation widget
- [ ] Capability Pillars (5) — RAG, CRM, Email, Escalation, Multi-Channel
- [ ] Customer Journey Visual — timeline flow
- [ ] Integration Ecosystem — connected systems map
- [ ] Trust & Safety section
- [ ] FAQ Accordion (5 Q&A)
- [ ] CTA Block

### Product: AI Agent
- [ ] Hero
- [ ] Core Capabilities (3 blocks) — Private Retrieval, Cross-Dept Synthesis, Zero Data Retention
- [ ] Employee Use Case — split-screen visual
- [ ] Security Architecture Summary — VPC, SSO, Audit
- [ ] FAQ Accordion (4 Q&A)
- [ ] CTA Block

### Product: Workspace
- [ ] Hero
- [ ] Sentinel Dashboard (USP) — mockup with agent states
- [ ] Command Center Capabilities (3) — NLP Tasks, Summarization, Quick Actions
- [ ] Workflow Integration Visual — flow map
- [ ] FAQ Accordion (3 Q&A)
- [ ] CTA Block

### Product: Speech-to-Text
- [ ] Hero
- [ ] Two Capability Groups — Meeting Intelligence + Voice Command
- [ ] 3 Use Case Scenarios — cards
- [ ] Differentiation Table — vs generic transcription
- [ ] Ecosystem Integration Visual — feeds all products
- [ ] CTA Block

### Product: Text-to-Speech
- [ ] Hero
- [ ] Capabilities
- [ ] Use Cases
- [ ] CTA Block

### Solutions Hub
- [ ] Hero
- [ ] 6 Solution Cards — 3 use cases + 3 industries

### Solution: Customer Support
- [ ] Persona (FinSprint, VP Customer Success)
- [ ] Before Syrix — problem detail
- [ ] Syrix Solution — product flow
- [ ] Measurable Impact — metrics table
- [ ] CTA Block

### Solution: Internal Knowledge
- [ ] Persona (LandVista, Director Operations)
- [ ] Before Syrix
- [ ] Syrix Solution
- [ ] Measurable Impact
- [ ] CTA Block

### Solution: Meeting Execution
- [ ] Persona (FlowTech, COO)
- [ ] Before Syrix
- [ ] Syrix Solution
- [ ] Measurable Impact
- [ ] CTA Block

### Industry Solutions (3) — lighter versions
- [ ] Real Estate / Financial Services / Retail & E-commerce
  Each: tagline, problem, Syrix approach, impact brief

### Pricing
- [ ] Hero
- [ ] 3-tier Pricing Table (Starter / Growth / Enterprise)
- [ ] Usage-Based Pricing explanation
- [ ] Sample Bill (visual)
- [ ] Market Comparison
- [ ] FAQ Accordion (3 Q&A)
- [ ] CTA Block

### Company Pages
- [ ] About — "Built by Xperc" story
- [ ] Security — 6-pillar trust center
- [ ] Book Demo — framing + form + quick contact
- [ ] Contact — inquiry form + quick contact
- [ ] Customers — logo wall + case study cards
- [ ] Privacy Policy — standard legal

---

## I18N NOTES
- [ ] Default locale: Vietnamese (`/`) — all routes at root
- [ ] English mirror: `/en/` prefix for every route
- [ ] Create `vi.json` and `en.json` locale files with ALL content strings
- [ ] Language switcher reads from next-intl — toggle updates locale, routes adjust automatically
- [ ] All product names stay in English regardless of locale (Syrix Help Desk, Syrix AI Agent, etc.)

---

## CONTENT PLACEHOLDERS TO CONFIRM WITH TEAM BEFORE LAUNCH

- [ ] Exact metrics/numbers (70%, 95%, etc.) — verify or label as "projected/benchmark"
- [ ] Pricing tier names — Starter / Growth / Enterprise (confirm with team)
- [ ] Tier pricing — exact numbers or keep as "Contact us"
- [ ] Contact info — Zalo number, phone number, email address
- [ ] Logo — syrix.ai final SVG logo
- [ ] Brand colors — accent color (electric blue / cyan / emerald?)
- [ ] Persona company names — FinSprint, LandVista, FlowTech (approve or replace)
- [ ] TTS product — full capability list and tagline (need team input)
- [ ] Industry solution pages — depth (keep light or go full case study format?)
- [ ] Customer logos — if real logos available, replace grey placeholder boxes