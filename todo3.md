

# SYRIX HELP DESK — SECTION: CORE CAPABILITIES

> **Goal:** Build the detailed "Core capabilities" section for the Help Desk landing page, featuring 4 capability cards with icons, descriptions, and hover animations.  
> **Location:** `/components/product/help-desk/CapabilitiesGrid.tsx` (rewrite with full content)  
> **Translations:** Use `helpDesk.capabilities` keys from `messages/en.json` & `messages/vi.json`

---

## 1. LAYOUT & STYLING

**Container:**
```tsx
<section className="py-24 bg-card">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <motion.div className="mb-14 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">{t('capabilities.title')}</h2>
    </motion.div>

    {/* 2×2 Grid */}
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* 4 cards */}
      </div>
    </div>
  </div>
</section>
```

**Card Style:**
```tsx
<motion.div
  className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 
             hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
>
  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
    {/* Icon here */}
  </div>
  <h3 className="mb-2 text-lg font-bold text-foreground">
    {t(`${pillar}.title`)}
  </h3>
  <p className="text-sm leading-relaxed text-muted-foreground">
    {t(`${pillar}.desc`)}
  </p>
</motion.div>
```

---

## 2. SECTION HEADER

### Text Content
- **Heading:** `{t('capabilities.title')}` → "Core capabilities" (EN), "Năng lực cốt lõi" (VI)

### Animation
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true }}`
- `transition={{ duration: 0.6 }}`

---

## 3. CAPABILITY CARDS (2×2 GRID)

### 3.1 Pillar 1 — Knowledge-Powered AI

| Field | Content |
|-------|---------|
| **Icon** | `<Brain className="h-7 w-7 text-primary" />` |
| **Title** | `t('capabilities.pillar1.title')` → "Knowledge-Powered AI" |
| **Description** | `t('capabilities.pillar1.desc')` → "Accurate answers drawn exclusively from admin-verified company docs. No hallucinations, no guesswork." |
| **Colors** | Icon bg: `bg-primary/10`, Text: `text-primary`, Muted text: `text-muted-foreground` |

### 3.2 Pillar 2 — Action Execution

| Field | Content |
|-------|---------|
| **Icon** | `<Zap className="h-7 w-7 text-cyan-500" />` |
| **Title** | `t('capabilities.pillar2.title')` → "Action Execution" |
| **Description** | `t('capabilities.pillar2.desc')` → "Connect CRM, calculate quotes, book showings, check inventory — the agent runs MCP tools autonomously." |
| **Colors** | Icon bg: `bg-primary/10`, Icon color: `text-cyan-500` |

### 3.3 Pillar 3 — Smart Handoff

| Field | Content |
|-------|---------|
| **Icon** | `<Users className="h-7 w-7 text-emerald-500" />` |
| **Title** | `t('capabilities.pillar3.title')` → "Smart Handoff" |
| **Description** | `t('capabilities.pillar3.desc')` → "Automatically detects uncertainty and offers human handoff. Full conversation history transferred in real time." |
| **Colors** | Icon bg: `bg-primary/10`, Icon color: `text-emerald-500` |

### 3.4 Pillar 4 — Glass Box Transparency

| Field | Content |
|-------|---------|
| **Icon** | `<Shield className="h-7 w-7 text-amber-500" />` |
| **Title** | `t('capabilities.pillar4.title')` → "Glass Box Transparency" |
| **Description** | `t('capabilities.pillar4.desc')` → "Every reasoning step is visible in the Thinking Log. Admins audit every decision." |
| **Colors** | Icon bg: `bg-primary/10`, Icon color: `text-amber-500` |

---

## 4. HOVER EFFECTS

Apply to each card:

```tsx
transition-all duration-300 
hover:scale-[1.02] 
hover:border-primary/30 
hover:shadow-[0_0_30px_-5px] 
hover:shadow-primary/10
```

**Effect:**
- Scale up slightly (1.02x)
- Border turns cyan-primary/30%
- Subtle cyan glow shadow
- Smooth `duration: 300ms`

---

## 5. IMPLEMENTATION CODE

```tsx
'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Users, Shield } from 'lucide-react';

interface CapabilitiesGridProps {
  t: (key: string) => string;
}

const icons = [Brain, Zap, Users, Shield];
const pillars = ['pillar1', 'pillar2', 'pillar3', 'pillar4'] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CapabilitiesGrid({ t }: CapabilitiesGridProps) {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">{t('capabilities.title')}</h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {t(`capabilities.${pillar}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`capabilities.${pillar}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 6. TRANSLATION KEYS NEEDED

### English (`messages/en.json`)
```json
"helpDesk": {
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
  }
}
```

### Vietnamese (`messages/vi.json`)
```json
"helpDesk": {
  "capabilities": {
    "title": "Năng lực cốt lõi",
    "pillar1": {
      "title": "AI Dựa Trên Kiến Thức",
      "desc": "Câu trả lời chính xác chỉ từ tài liệu công ty đã được admin xác minh. Không ảo giác, không phỏng đoán."
    },
    "pillar2": {
      "title": "Thực Thi Hành Động",
      "desc": "Kết nối CRM, tính báo giá, đặt lịch xem nhà, kiểm tra tồn kho — agent chạy công cụ MCP tự động."
    },
    "pillar3": {
      "title": "Bàn Giao Thông Minh",
      "desc": "Tự động phát hiện sự không chắc chắn và đề xuất bàn giao cho con người. Lịch sử hội thoại được chuyển đầy đủ."
    },
    "pillar4": {
      "title": "Minh Bạch Tuyệt Đối",
      "desc": "Mọi bước suy luận đều hiển thị trong Thinking Log. Admin kiểm tra mọi quyết định."
    }
  }
}
```

---

## 7. DESIGN TOKENS

| Token | Value | Usage |
|-------|-------|-------|
| `bg-background` | `#0a0a0f` | Card background |
| `bg-card` | `#12121a` | Section background |
| `primary` | `#3b82f6` | Border, glow, icon bg |
| `text-foreground` | `#ffffff` | Headings, titles |
| `text-muted-foreground` | `#a0a0b0` | Descriptions |
| `border` | `#1f1f2e` | Card border |

---

## 8. DELIVERABLES

✅ `messages/en.json` — Update `helpDesk.capabilities` block  
✅ `messages/vi.json` — Mirror with Vietnamese translations  
✅ `components/product/help-desk/CapabilitiesGrid.tsx` — Rewrite with full content  
✅ `npm run build` — Pass without errors

---

## 9. NOTES

- **Icons:** Use `lucide-react`: `Brain`, `Zap`, `Users`, `Shield`
- **Colors:** Each pillar gets a unique accent color (primary, cyan-500, emerald-500, amber-500)
- **Responsive:** `grid-cols-1` on mobile, `grid-cols-2` on `sm:`+ breakpoints
- **Animation:** Stagger children with `delay: i * 0.1` for cascading reveal
- **Hover:** Only applies to desktop (`group` class works with Scrollspy)

---

**Ready for agent to code.** Copy-paste this todo3.md into your agent prompt.