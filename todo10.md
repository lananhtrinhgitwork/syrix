# SYRIX.AI — PHASE 8: SOLUTIONS HUB & USE CASES REFACTORING (TODO10)

> **Objective:** Refactor the entire Solutions ecosystem layout and text copy based on the Salesforce Manufacturing AI blueprint. Ensure high-converting, interactive component layouts for all solution pages and implement the brand-new Sales Automation solution page.
> **Design Philosophy:** Salesforce Agentforce dynamic role-based tabs cross-referenced with benefit-driven executive matrices. Avoid flat text; leverage high-contrast layout components, visual execution grids, and interactive scenario cards.
> **Architecture Constraint:** Strictly NO `src` folder. Target layout files sit directly under: `app/[locale]/solutions/` (`customer-support`, `sales`, `internal-knowledge`, `meeting-execution`).

---

## 1. DYNAMIC MULTI-LANGUAGE DICTIONARY INJECTIONS

Please merge these complete key-value structures into `messages/en.json` and `messages/vi.json` under the `solutions` root node to drive the dynamic components cleanly.

### Merge into `messages/en.json`:
```json
"solutions": {
  "hub": {
    "title": "Enterprise Solutions Built for Autonomy",
    "subtitle": "Deploy industry-grade Digital Employees across core operational verticals to eliminate friction and drive revenue."
  },
  "customerSupport": {
    "badge": "Operations & Service",
    "heroTitle": "Automate 80% of Enterprise Support Tickets Without Brittle Scripts.",
    "heroDesc": "Transform your post-sales operations. Syrix handles multi-channel tier-1 customer support requests autonomously—reading asset logs, verifying service boundaries via RAG, and safely executing account modifications through Model Context Protocol (MCP) integrations.",
    "tabs": [
      { "title": "Inbound Automation", "desc": "Instantly parse and resolve highly technical B2B client inquiries under 2 seconds with automatic data isolation layers." },
      { "title": "API Task Execution", "desc": "Empower the agent to interact with internal ERP/billing gateways to process address changes or invoice rerouting directly." },
      { "title": "Seamless Escalation", "desc": "Silent human takeover with auto-generated conversation briefings ensures zero customer friction during complex handovers." }
    ]
  },
  "sales": {
    "badge": "Revenue Generation",
    "heroTitle": "Accelerate Deal Velocity With Autonomous Sales Engagement.",
    "heroDesc": "Never let an enterprise sales lead turn cold. Syrix Sales Agent acts as your frontline business development representative—parsing massive RFI/RFP documents up to 50MB, independently mapping prospect pain points, checking pricing tiers, and drafting professional quotes connected directly to HubSpot or Salesforce CRM systems.",
    "tabs": [
      { "title": "RFP & Document Parsing", "desc": "Instantly analyze complex enterprise request-for-proposal documents and extract critical feature requirements matching your product specs." },
      { "title": "Smart Pricing Matrices", "desc": "Evaluate prospective volume scale parameters and dynamically calculate enterprise contract discount rates from core collections." },
      { "title": "CRM Tool Execution", "desc": "Automatically populate lead pipelines, log communication records, and dispatch custom digital contract drafts directly via MCP." }
    ]
  },
  "internalKnowledge": {
    "badge": "Corporate Intelligence",
    "heroTitle": "Unify Fragmented Corporate Silos Into a Single Secure Brain.",
    "heroDesc": "Stop losing 30% of employee productivity to internal data searching overhead. Syrix Internal Knowledge Agent unifies engineering wikis, HR policies, Confluence databases, and team Slack logs into an absolute secure multi-tenant RAG vector repository.",
    "tabs": [
      { "title": "Cross-Silo Discovery", "desc": "Search across scattered enterprise application folders simultaneously and extract perfect contextual answers with precise source path citations." },
      { "title": "Secure Access Levels", "desc": "Strictly mirrors your corporate Role-Based Access Control (RBAC) maps—employees only access information they possess privileges to read." },
      { "title": "Real-Time Asset Updates", "desc": "Drop a newly updated corporate SOP document into a collection, and the agent's core brain updates instantly in milliseconds with zero retraining." }
    ]
  },
  "meetingExecution": {
    "badge": "Workspace Productivity",
    "heroTitle": "Convert Live Audio Streams Into Actionable System Commands.",
    "heroDesc": "Redefine organizational alignment. Syrix processes multi-speaker enterprise meeting recordings, extracts exact context traces via speaker separation, and works alongside your internal AI agent to automatically trigger cross-platform task deployment keys.",
    "tabs": [
      { "title": "Automated Minutes", "desc": "Ditch manual tracking logs. Instantly convert 2-hour conversational data into brief executive summaries with structured checkmarks." },
      { "title": "Jira & Slack Synchronization", "desc": "The agent reads extracted action items and independently calls MCP tools to deploy engineering tasks or dispatch Slack notifications." },
      { "title": "On-the-Go Commands", "desc": "Record quick voice memos during a commute; Syrix transcribes the input instantly and commands the AI Agent to execute internal workflows." }
    ]
  }
}
Merge into messages/vi.json:
JSON
"solutions": {
  "hub": {
    "title": "Giải Pháp Doanh Nghiệp Định Hướng Tự Chủ",
    "subtitle": "Triển khai các Đồng nghiệp số chuẩn Enterprise trên toàn bộ các khối vận hành cốt lõi để xóa bỏ ma sát hiệu suất."
  },
  "customerSupport": {
    "badge": "Vận hành & Hỗ trợ",
    "heroTitle": "Tự Động Hóa 80% Ticket Hỗ Trợ Doanh Nghiệp Không Dùng Kịch Bản.",
    "heroDesc": "Tái cấu trúc bộ phận hậu mãi. Syrix độc lập xử lý các yêu cầu chăm sóc đối tác đa kênh—tự đọc file log hệ thống, xác minh điều khoản qua RAG và thực thi chỉnh sửa tài khoản an toàn qua cổng kết nối Model Context Protocol (MCP).",
    "tabs": [
      { "title": "Tự động hóa Tiếp nhận", "desc": "Phân tích và xử lý các yêu cầu kỹ thuật B2B phức tạp dưới 2 giây với màng lọc cô lập dữ liệu bảo mật." },
      { "title": "Thực thi Tác vụ API", "desc": "Cấp quyền cho Agent tương tác với cổng ERP/hóa đơn nội bộ để xử lý đổi địa chỉ hoặc tính lại bill trực tiếp." },
      { "title": "Chuyển giao Hoàn hảo", "desc": "Cơ chế can thiệp im lặng của con người đi kèm bản tóm tắt tóm tắt tự động do AI lập để đảm bảo khách không phải chờ đợi." }
    ]
  },
  "sales": {
    "badge": "Tăng Trưởng Doanh Thu",
    "heroTitle": "Bứt Phá Tốc Độ Chốt Deal Với AI Agent Thúc Đẩy Doanh Số.",
    "heroDesc": "Tuyệt đối không để bất kỳ cơ hội kinh doanh nào bị nguội lạnh. Syrix Sales Agent đóng vai trò là chuyên viên phát triển doanh nghiệp tuyến đầu—tự bóc tách tài liệu đấu thầu RFP/RFI lên tới 50MB, tự phân tích nỗi đau đối tác, đối chiếu bảng giá chiết khấu doanh nghiệp và soạn thảo hợp đồng nháp kết nối thẳng với HubSpot/Salesforce CRM.",
    "tabs": [
      { "title": "Bóc tách Hồ sơ Đấu thầu", "desc": "Phân tích tức thì các tập tài liệu yêu cầu báo giá phức tạp của tập đoàn đối tác và trích xuất các tiêu chuẩn tính năng khớp với Specs." },
      { "title": "Ma trận Giá Thông minh", "desc": "Đánh giá các tham số quy mô người dùng để tự động tính toán biên độ chiết khấu hợp đồng theo năm từ cơ sở tri thức." },
      { "title": "Thực thi Công cụ CRM", "desc": "Tự động đổ thông tin Lead vào pipeline, ghi nhận lịch sử trao đổi và phát hành hợp đồng điện tử nháp qua giao thức MCP." }
    ]
  },
  "internalKnowledge": {
    "badge": "Trí Tuệ Tập Thể",
    "heroTitle": "Hợp Nhất Kho Tri Thức Phân Mảnh Thành Bộ Não Bảo Mật.",
    "heroDesc": "Dừng lãng phí 30% hiệu suất làm việc của nhân sự vào việc tìm kiếm thông tin chéo silo. Syrix Internal Knowledge Agent thống nhất toàn bộ mã nguồn kỹ thuật, chính sách nhân sự, database Confluence và Slack log vào một kho dữ liệu RAG Vector cô lập.",
    "tabs": [
      { "title": "Tra cứu Liên Hệ Thống", "desc": "Tìm kiếm đồng thời trên toàn bộ ứng dụng lưu trữ của doanh nghiệp và trích xuất câu trả lời chuẩn xác kèm đường dẫn nguồn minh bạch." },
      { "title": "Phân quyền Bảo mật Sâu", "desc": "Phản chiếu chính xác mô hình phân quyền dựa trên vai trò (RBAC) của công ty—nhân viên chỉ tiếp cận thông tin được phép đọc." },
      { "title": "Cập nhật Tri thức Real-Time", "desc": "Thả file quy trình SOPs sửa đổi mới vào bộ sưu tập, bộ não AI tự động cập nhật lập chỉ mục sau vài mili-giây không cần training lại." }
    ]
  },
  "meetingExecution": {
    "badge": "Hiệu Suất Không Gian Làm Việc",
    "heroTitle": "Chuyển Đổi Luồng Thoại Cuộc Họp Thành Mệnh Lệnh Hệ Thống.",
    "heroDesc": "Định nghĩa lại sự đồng bộ tổ chức. Syrix tiếp nhận tệp ghi âm cuộc họp, bóc tách kênh người nói chính xác và phối hợp cùng trợ lý nội bộ để tự động kích hoạt các mã lệnh triển khai tác vụ liên nền tảng.",
    "tabs": [
      { "title": "Biên bản Họp Tự động", "desc": "Loại bỏ việc ghi chép thủ công. Chuyển đổi cuộc thoại 2 tiếng thành một bảng tóm tắt điều hành gồm các checkbox đầu việc gọn gàng." },
      { "title": "Đồng bộ Jira & Slack", "desc": "Agent tự đọc các hành động được trích xuất và độc lập gọi tool MCP để tạo task kỹ thuật trên Jira hoặc bắn chỉ thị sạch vào Slack." },
      { "title": "Mệnh lệnh Di động", "desc": "Quay nhanh voice thoại khi đang trên đường đi làm; Syrix tự dịch thoại tức thì và chỉ huy AI Agent thực thi luồng nghiệp vụ nội bộ." }
    ]
  }
}
2. LANDING PAGES STRUCTURAL LAYOUT COMPONENT SPECIFICATIONS
Refactor the components under app/[locale]/solutions/ applying a vivid, Salesforce-style interactive layout interface.

THE LANDING PAGE ARCHITECTURE CHECKLIST (FOR ALL 4 PAGES)
[ ] Dynamic Hero Block Layout:

Build a responsive layout frame splitting content into a 2-column container. Left side presents the category solution badge text, the massive high-impact bold headline heroTitle, and the descriptive copy narrative heroDesc. Renders a primary glowing CTA button linking to /[locale]/book-demo.

Right side replaces generic stock photography with a high-fidelity Administrative Workspace Terminal Preview visually visualizing live data processing layers relevant to that specific solution domain.

[ ] The Interactive Salesforce-Style Tabbed Use Case Component:

Below the hero layout, implement a high-converting tab control block containing 3 responsive horizontal trigger tabs mapped directly from the localized tabs configurations.

Clicking on a tab independently updates a state variable, causing the user interface to fade out the old text and smoothly reveal the new descriptive text along with an interactive structural component diagram (e.g., an exposed API call grid for Customer Support, an automated quote generation template overlay for Sales, or a source-cited vector repository trace for Internal Knowledge).

[ ] Unified Corporate CTA & Footer Systems:

Ensure all layout routes seamlessly integrate the global Navbar, standard CTA banners, and the structural Footer component blocks without broken parameters.

3. STRICT COMPILATION TYPE CASTING FORMULAS
[ ] Every iteration map iteration block querying the localized solutions database matrix must be securely cast using proper TypeScript type variables to prevent Next.js compilation blockages:

TypeScript
interface SolutionTabItem {
  title: string;
  desc: string;
}

const solutionTabs = (tRaw('solutions.sales.tabs') as SolutionTabItem[]) || [];
[ ] Execute npm run build upon completing the file modifications to ensure all routing targets compile with zero syntax exceptions.