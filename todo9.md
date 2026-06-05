# SYRIX.AI — PHASE 7: SPEECH TO TEXT USE CASES & TEXT TO SPEECH DECOMMISSIONING (TODO9)

> **Objective:** Add high-converting enterprise Use Case modules to the Speech to Text product page and completely clean up/remove all references to the obsolete Text to Speech product across the codebase.
> **Use Case 1 (Meeting Summary):** Visualize corporate alignment pain points (lost notes, manual tracking overhead) and present Syrix RAG-driven structured summary solutions.
> **Use Case 2 (On-the-Go Executive Workflow):** Demonstrate the synergy between Speech to Text and the Internal AI Agent. A busy executive records raw voice commands during a commute; Syrix transcribes the input under 200ms, and the AI Agent calls internal MCP tools to deploy Jira tasks or inject structured notifications into Slack.
> **Architecture Constraint:** Strictly NO `src` folder. Clean up routes, localized JSON files, Navbars, and Footers systematically.

---

## 1. DYNAMIC i18n LOCALE INJECTIONS (FOR SPEECH TO TEXT USE CASES)

Please merge these complete translation segments directly into `messages/en.json` and `messages/vi.json` under the `speechToText` root object.

### Additions for `messages/en.json`:
```json
"useCases": {
  "title": "Real-World Enterprise Deployments",
  "subtitle": "Discover how converting live audio streams into structured system context scales operational velocity.",
  "items": [
    {
      "id": "meetingSummary",
      "tag": "Use Case 01: Executive Alignment",
      "title": "Automated Multi-Speaker Meeting Summarization",
      "pains": [
        "Hours wasted on manual, delayed meeting minutes creation.",
        "Critical action items and technical commitments are lost or forgotten.",
        "Cross-departmental alignment lags due to context decay over time."
      ],
      "solution": "Syrix ingests real-time meeting audio, isolates distinct speaker channels via diarization, and instantly maps the conversation into an executive summary grid containing explicit action matrices, task ownerships, and timeline milestones.",
      "value": "Save 5+ hours per week per manager, achieve 100% data capture rate, and drive immediate post-meeting operational alignment."
    },
    {
      "id": "executiveWorkflow",
      "tag": "Use Case 02: On-the-Go Operations",
      "title": "On-the-Go Executive Commands & AI Agent Synergy",
      "pains": [
        "Busy C-levels/Managers driving or commuting cannot type long texts.",
        "Critical operational ideas and immediate directives are delayed or lost.",
        "Opening tickets and messaging teams on mobile creates massive friction."
      ],
      "solution": "Record quick raw voice memos while commuting. Syrix transcribes the voice stream with domain-vocabulary precision, immediately piping the structured text into your Internal AI Agent core. The agent parses user intent and independently triggers Model Context Protocol (MCP) tools to deploy tickets or send organized Slack alerts.",
      "value": "Zero friction internal task deployment, execute cross-platform operations via voice, and keep infrastructure pipelines moving while offline."
    }
  ]
}
Additions for messages/vi.json:
JSON
"useCases": {
  "title": "Kịch Bản Triển Khai Thực Tế Trong Doanh Nghiệp",
  "subtitle": "Khám phá cách chuyển đổi luồng âm thanh thành dữ liệu cấu trúc giúp tăng tốc vận hành.",
  "items": [
    {
      "id": "meetingSummary",
      "tag": "Tình huống 01: Đồng bộ Vận hành",
      "title": "Tự Động Hóa Tóm Tắt Cuộc Họp Đa Người Nói",
      "pains": [
        "Lãng phí nhiều giờ biên soạn biên bản cuộc họp thủ công chậm trễ.",
        "Các hành động cốt lõi và cam kết kỹ thuật bị bỏ sót hoặc quên lãng.",
        "Sự chậm trễ đồng bộ giữa các phòng ban do hao hụt thông tin theo thời gian."
      ],
      "solution": "Syrix tiếp nhận luồng âm thanh cuộc họp thời gian thực, bóc tách các kênh người nói riêng biệt và lập tức chuyển đổi cuộc hội thoại thành một ma trận tóm tắt điều hành gồm: Danh sách đầu việc cụ thể, nhân sự chịu trách nhiệm và mốc thời gian hoàn thành.",
      "value": "Tiết kiệm hơn 5 giờ mỗi tuần cho mỗi nhà quản lý, đạt tỷ lệ lưu trữ thông tin 100% và kích hoạt sự đồng bộ ngay sau cuộc họp."
    },
    {
      "id": "executiveWorkflow",
      "tag": "Tình huống 02: Điều hành Di động",
      "title": "Điều Hành Từ Xa Cho Lãnh Đạo & Hợp Lực Cùng AI Agent",
      "pains": [
        "Các Sếp/Manager bận rộn khi di chuyển trên đường không thể gõ văn bản dài.",
        "Các ý tưởng vận hành và chỉ thị khẩn cấp bị trì hoãn hoặc lãng quên.",
        "Việc mở ticket hay nhắn tin giao việc trên điện thoại tạo ra ma sát lớn."
      ],
      "solution": "Chỉ cần quay một đoạn voice memo ngắn khi đang trên đường đi làm. Syrix tự động dịch luồng thoại chính xác, lập tức đẩy văn bản cấu trúc vào lõi xử lý của Internal AI Agent. Agent tự hiểu ý định và kích hoạt công cụ MCP để tự động tạo ticket Jira hoặc gửi tin nhắn chỉ thị sạch sẽ vào Slack.",
      "value": "Khởi tạo tác vụ nội bộ không ma sát, thực thi vận hành liên nền tảng bằng giọng nói và giữ cho tiến độ hạ tầng luôn chuyển động liên tục."
    }
  ]
}
2. SPEECH TO TEXT LANDING PAGE MODIFICATIONS
Open app/[locale]/products/speech-text/page.tsx (or your exact speech-to-text route path) and append the new Use Cases Section right below the Product Pillars module.

Interface Implementation Layout:
[ ] Render the section container using a clean dark background setup (bg-[#0a0a0f] py-24 border-t border-white/5).

[ ] Map the speechToText.useCases.items array using a 2-column or full-width alternating card layout system.

[ ] Visual Layout Mapping for Use Case 01 (Meeting Summary):

Left Grid Box: Display the Tag, Title, and a split layout for Pain Points (rendered with line-through text or bullet icons displaying pains) vs Syrix Solution and Business Value.

Right Grid Box: Build a mock visual interactive meeting transcript box showing speaker labels ([CEO], [Product Manager]) fading out into a brightly illuminated "Automated Executive Minutes" grid block with clean checkboxes.

[ ] Visual Layout Mapping for Use Case 02 (Executive Voice Hub):

Left Grid Box: Build an interactive visual timeline diagram showing a raw mobile voice recorder node (Commute Audio Ingestion) -> connecting to the Speech to Text Converter -> branching into the Internal AI Agent Core -> firing an active tool token node labeled [MCP Tool: Slack Workflow API Deployment / Jira Ticket Created].

Right Grid Box: Render the text content arrays describing the executive on-the-go workflow and multi-platform agent synergy.

3. TEXT TO SPEECH DECOMMISSIONING COMPLIANCE AUDIT
You must completely purge all references, routes, and keys related to the text-to-speech module to avoid duplicate routes or compilation clutter.

Deletion Checklist:
[ ] Delete Directory Route: Completely delete the product folder sitting at app/[locale]/products/text-to-speech or app/[locale]/products/tts (including all its internal page assets).

[ ] Clean i18n Translation Matrix: Completely delete the entire textToSpeech JSON dictionary tree from both messages/en.json and messages/vi.json.

[ ] Clean Top Navigation Links: Open components/layout/navbar.tsx. Locate the Products Dropdown sub-menu array and completely remove the "Text to Speech" link item. Ensure the array only maps active systems (Help Desk, AI Agent, Speech to Text).

[ ] Clean Footer Links: Open components/layout/footer.tsx. Locate the Products link stack and completely remove the Text to Speech reference list node.

4. COMPILATION TYPE CASTING RULES
[ ] Ensure the translation data mappings safely satisfy strict linting parameters using the proper explicit casting template block inside the new Use Cases component loop:

TypeScript
interface UseCaseItem {
  id: string;
  tag: string;
  title: string;
  pains: string[];
  solution: string;
  value: string;
}

const items = (tRaw('speechToText.useCases.items') as UseCaseItem[]) || [];
[ ] Execute npm run build once the refactoring cycle concludes to confirm successful deployment tracking logs with zero routing exceptions.