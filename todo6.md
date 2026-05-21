# SYRIX.AI — PHASE 4: HOW IT WORKS SECTION UI/UX ENHANCEMENT (TODO6)

> **Goal:** Refactor the `HowItWorksSection.tsx` component to include explicit titles and descriptive texts for each core step: Agent Identity, Knowledge, MCP (Action), and Suggestion.
> **Design Strategy:** Blend Salesforce Agentforce clarity with Glean AI Agent observability. Ensure an alternating premium grid layout that looks pristine on enterprise viewports.
> **Architecture Constraint:** No `src` folder. Files are located at the absolute root workspace: `components/layout/HowItWorksSection.tsx` (or your exact components directory path), `messages/en.json`, and `messages/vi.json`.

---

## 1. i18n LOCALE DICTIONARY UPDATES

You must merge these exact keys into your JSON structure under the `helpDesk.howItWorks` or root `howItWorks` object. Do not truncate the string arrays.

### Merge into `messages/en.json`:
```json
"howItWorks": {
  "title": "How Syrix Help Desk Operates",
  "subtitle": "Four seamless layers converting static documentation and live APIs into an autonomous digital employee.",
  "steps": [
    {
      "id": "identity",
      "tag": "Step 1: Core Configuration",
      "title": "Agent Identity & Core Instructions",
      "desc": "Define your agent's executive persona, custom tone of voice, and strict business guardrails. Establish the core rules that govern how the autonomous system greets, authenticates, and routes enterprise customers."
    },
    {
      "id": "knowledge",
      "tag": "Step 2: Contextual Ingestion",
      "title": "Deep Vector Knowledge Base",
      "desc": "Ingest unstructured corporate archives, multi-page policy PDFs, product manuals, and system logs up to 50MB per file. Data is instantly vectorized via advanced RAG pipelines to guarantee zero-hallucination source citations."
    },
    {
      "id": "mcp",
      "tag": "Step 3: API Integration",
      "title": "MCP Action Matrix & Live Tools",
      "desc": "Bind internal databases, core ERP systems, and enterprise CRMs (HubSpot, Salesforce) securely via Model Context Protocol (MCP). Grant your agent the power to execute real-time state changes, like invoice rerouting and license allocation."
    },
    {
      "id": "suggestion",
      "tag": "Step 4: Intent Engagement",
      "title": "Contextual Suggestion Chips",
      "desc": "Deploy dynamic, state-aware clickable suggestion tokens. Guide partners instantly into high-converting transaction funnels or critical problem matrices from the very first interaction."
    }
  ]
}
Merge into messages/vi.json:
JSON
"howItWorks": {
  "title": "Cách Thức Vận Hành Của Syrix Help Desk",
  "subtitle": "Bốn lớp kiến trúc đồng bộ biến tài liệu tĩnh và hệ thống API của bạn thành một đồng nghiệp số tự động.",
  "steps": [
    {
      "id": "identity",
      "tag": "Bước 1: Thiết lập Hệ thống",
      "title": "Định danh & Chỉ thị Cốt lõi (Agent Identity)",
      "desc": "Xác định tính cách, văn phong đại diện doanh nghiệp và ranh giới hoạt động của Agent. Thiết lập các nguyên tắc điều phối cách thức hệ thống tự động tiếp đón, xác thực và phân loại đối tác."
    },
    {
      "id": "knowledge",
      "tag": "Bước 2: Nạp Cơ sở Dữ liệu",
      "title": "Thư viện Tri thức Khối Vector Sâu (Knowledge Base)",
      "desc": "Nạp tài liệu thô của công ty, file chính sách PDF nhiều trang, cẩm nang sản phẩm và lịch sử log lỗi lên đến 50MB/file. Dữ liệu được chuyển đổi thành các vector RAG giúp trích xuất câu trả lời kèm nguồn dẫn minh bạch."
    },
    {
      "id": "mcp",
      "tag": "Bước 3: Tích hợp Hệ thống",
      "title": "Ma trận Hành động MCP & Công cụ Trực tiếp (MCP Tools)",
      "desc": "Liên kết an toàn cơ sở dữ liệu nội bộ, ERP và các cổng CRM doanh nghiệp (HubSpot, Salesforce) qua giao thức Model Context Protocol (MCP). Cho phép Agent tự thực thi tác vụ như tính chiết khấu hay đổi địa chỉ đơn hàng."
    },
    {
      "id": "suggestion",
      "tag": "Bước 4: Điều hướng Đối tác",
      "title": "Thẻ Gợi ý Ngữ cảnh Thông minh (Suggestions)",
      "desc": "Cấu hình sẵn các thẻ câu hỏi gợi ý động dựa trên trạng thái hội thoại. Dẫn dắt đối tác lập tức tiếp cận luồng nghiệp vụ mua bán hoặc xử lý sự cố nhanh chóng mà không gặp rào cản tương tác."
    }
  ]
}
2. CODE REFACTORING SPECIFICATIONS FOR HowItWorksSection.tsx
Refactor the component to eliminate the flat, non-descriptive list view and implement a premium, high-converting split alternating block system.

Architectural Rules:
Dynamic Ingestion: Extract translations safely using next-intl. Use a structured type definition matching the JSON pattern.

Alternating Layout Grid: - Render each step inside an individual responsive card container (grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#12121a]/30 border border-white/5 p-8 md:p-12 rounded-2xl).

For odd indexes (index % 2 === 0), render Text Content on the Left, Illustration on the Right.

For even indexes (index % 2 !== 0), flip the alignment on desktop: Text Content on the Right, Illustration on the Left (use Tailwind's lg:order-last on the text column or flex row-reverse modifiers safely).

Typography & Hierarchy:

Display the Step Tag (step.tag) in small uppercase bold with matching theme accent color (Cyan, Emerald, Amber, Purple/Indigo).

Display the Title (step.title) using text-2xl md:text-3xl font-bold text-white tracking-tight.

Display the Narrative Description (step.desc) using text-base text-muted-foreground leading-relaxed.

Illustration Container: Wrap the existing imported illustration components (InstructionsIllustration, KnowledgeIllustration, MCPToolsIllustration, SuggestionsIllustration) inside an inner elevated dashboard card mockup container with a glassmorphic frame to enhance visual polish.

Type-Safe Data Mapping Block:
Ensure you parse the translation arrays strictly to avoid TypeScript compilation errors during type validation blocks:

TypeScript
interface StepItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
}

const stepsData = (tRaw('howItWorks.steps') as StepItem[]) || [];
3. COMPILATION & VERIFICATION RUNS
[ ] Ensure all Lucide icons and Framer Motion stagger hooks are preserved.

[ ] Execute npm run build at the root terminal directory to guarantee full compliance with TypeScript types and zero routing dropouts.


---

### 🚀 Câu lệnh để bạn quăng cho con Agent trong VS Code tự sửa:

Sau khi tạo xong file `todo6.md` local, bạn mở ô chat của con Agent (Roo Code / Cline / Cursor) trong VS Code lên và gửi câu lệnh này cho nó:

```text
I have generated a new specification blueprint file at the root named `@todo6.md` to enhance the "How It Works" section UX. 

Please read `@todo6.md` carefully and execute these tasks autonomously:
1. Merge the complete multi-language text strings for `howItWorks` directly into `messages/en.json` and `messages/vi.json`.
2. Open `components/layout/HowItWorksSection.tsx` (or its exact path in the project) and refactor it into a premium, responsive 2-column alternating grid layout. Ensure each step displays its designated title and text description next to the corresponding illustration component.
3. Apply the type-safe structure specified in the todo file using explicit TypeScript casting for the `tRaw()` data mapping to avoid linting blocks.
4. Run `npm run build` once completed to ensure everything compiles flawlessly. You can execute now!