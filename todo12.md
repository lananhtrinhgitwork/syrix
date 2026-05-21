# SYRIX.AI — PHA 10: TÁI CẤU TRÚC TOÀN DIỆN KHỐI GIẢI PHÁP THEO HƯỚNG STORYTELLING (TODO12)

> **Mục tiêu:** Cập nhật và làm lại nội dung cho 4 trang giải pháp doanh nghiệp cốt lõi. Loại bỏ hoàn toàn phong cách liệt kê tính năng, chuyển sang mô hình kể chuyện thực tế (Storytelling), đánh mạnh vào giá trị chuyển đổi, trải nghiệm khách hàng và tỷ suất sinh lời (ROI).
> **Kiến trúc giới hạn:** Không sử dụng thư mục `src`. Toàn bộ mã nguồn nằm trực tiếp tại thư mục gốc: `app/[locale]/solutions/` (`customer-support`, `sales`, `internal-knowledge`, `meeting-execution`), `messages/en.json` và `messages/vi.json`.

---

## 1. MA TRẬN DỮ LIỆU DỊCH THUẬT ĐA NGÔN NGỮ (JSON SCHEMAS)

Hãy tiến hành ghi đè hoặc hợp nhất cấu trúc dữ liệu dưới đây vào hai file JSON ngôn ngữ của hệ thống để nuôi dưỡng giao diện Tab động theo phong cách Salesforce Retail AI.

### Hợp nhất vào file `messages/vi.json`:
```json
"solutionsV3": {
  "customerSupport": {
    "badge": "Vận Hành & Trải Nghiệm Khách Hàng",
    "heroTitle": "Chăm sóc khách hàng 24/7: Khi AI tự tay xử lý nghiệp vụ thay vì chỉ tán gẫu.",
    "heroDesc": "Hãy tưởng tượng một khách hàng B2B của bạn gặp sự cố đơn hàng vào lúc 2 giờ sáng. Thay vì phải chờ đợi trong bất lực đến giờ hành chính, Syrix Help Desk lập tức xuất hiện. Không kịch bản cứng nhắc, không nói dối (Hallucination), AI tự đọc tài liệu hướng dẫn sản phẩm bạn cung cấp để giải đáp chính xác, đồng thời tự động gọi công cụ MCP kết nối trực tiếp vào cơ sở dữ liệu để kiểm tra và sửa đổi thông tin đơn hàng cho khách chỉ trong 2 giây.",
    "storyText": "Câu chuyện thành công: Giảm 80% áp lực ticket hàng chờ, nâng tỷ lệ hài lòng của khách hàng (CSAT) lên 98% và cắt giảm toàn bộ chi phí vận hành ca đêm của doanh nghiệp.",
    "kpis": [
      { "label": "Tốc độ phản hồi", "old": "Chờ đợi 45 phút trong hàng đợi ca đêm", "new": "Giải quyết ngay lập tức < 2 giây" },
      { "label": "Chỉ số hài lòng (CSAT)", "old": "72% do chatbot cũ trả lời sai lệch", "new": "Đạt 98% nhờ trích xuất RAG chính xác" }
    ],
    "tabs": [
      { "tab": "Nỗi đau vận hành", "title": "Hàng chờ nghẽn và rủi ro mất khách hàng", "desc": "Khách hàng ca đêm hoặc đối tác quốc tế liên tục rời bỏ thương hiệu vì các chatbot cũ chỉ biết trả lời FAQ câu chữ vô tri, trong khi nhân sự con người không thể trực tuyến để cover toàn bộ khung giờ." },
      { "tab": "Cách Syrix giải quyết", "title": "Đồng nghiệp số tự chủ thực thi qua MCP", "desc": "Syrix tiếp nhận yêu cầu, bóc tách chính xác tài liệu chính sách qua RAG để đưa ra câu trả lời minh bạch, sau đó tự kích hoạt hàm API kết nối database để xử lý tận gốc vấn đề cho khách hàng." },
      { "tab": "Giá trị mang lại", "title": "Trải nghiệm vượt trội & Tối ưu dòng tiền", "desc": "Tạo dựng niềm tin tuyệt đối với đối tác chiến lược nhờ sự hỗ trợ chuẩn Enterprise liên tục không ma sát, giải phóng nhân sự core để tập trung xử lý các case khủng hoảng lớn." }
    ]
  },
  "sales": {
    "badge": "Tối Ưu Doanh Thu & ROI",
    "heroTitle": "Sales Agent 24/7: Đừng để cơ hội kinh doanh bị nguội lạnh chỉ vì hết giờ làm việc.",
    "heroDesc": "Khách hàng tiềm năng truy cập website của bạn vào lúc nửa đêm để tìm hiểu dịch vụ. Nếu sử dụng nhân sự Sales truyền thống, bạn sẽ tốn một khoản chi phí nhân sự khổng lồ nhưng vẫn bỏ lỡ những khách hàng inbox ngoài giờ hành chính. Syrix Sales Agent xuất hiện như một chiến thần doanh số luôn túc trực: Tự phân tích nhu cầu đối tác, tự tra cứu tài liệu sản phẩm để tư vấn, và tự động đặt lịch xem nhà, lịch tư vấn chuyên sâu cho khách thông qua cổng kết nối MCP với CRM HubSpot.",
    "storyText": "Câu chuyện thành công: Bứt phá tỷ lệ chuyển đổi (Conversion Rate) lên 35%, tối ưu hóa điểm số ROI doanh nghiệp bằng cách chuyển hóa mọi truy cập ngoài giờ thành cơ hội chốt deal thực tế.",
    "kpis": [
      { "label": "Tỷ lệ chuyển đổi", "old": "Bỏ sót 40% lead ngoài giờ hành chính", "new": "Tăng trưởng 35% doanh số chuyển đổi" },
      { "label": "Hiệu suất chi phí (ROI)", "old": "Gánh nặng ngân sách trực tổng đài lớn", "new": "Tối đa hóa ROI với 1 Agent cân vạn khách" }
    ],
    "useCases": [
      { "tab": "Nỗi đau của sếp", "title": "Lead bị nguội và lãng phí ngân sách marketing", "desc": "Đổ tiền chạy quảng cáo nhưng lead đổ về vào buổi tối hoặc ngày lễ không có ai tư vấn kịp thời, khiến đối tác mất kiên nhẫn và chuyển sang lựa chọn đối thủ cạnh tranh." },
      { "tab": "Cách Syrix giải quyết", "title": "Tự động tư vấn và chốt lịch hẹn qua CRM", "desc": "Sales Agent tự động bóc tách hồ sơ thắc mắc của đối tác, đối chiếu bảng giá chiết khấu, hiển thị lịch trống từ HubSpot và chốt ngay slot hẹn tư vấn hoặc đặt lịch xem bất động sản trực quan cho khách." },
      { "tab": "Giá trị mang lại", "title": "Dòng chảy doanh thu không bao giờ ngủ", "desc": "Hệ thống vận hành liên tục xuyên biên giới quốc gia, tối ưu hóa chi phí trên mỗi lead thu về và nhân bản năng lực của best-seller lên quy mô toàn doanh nghiệp." }
    ]
  },
  "internalChatbot": {
    "badge": "Bộ Não Công Ty & Tự Động Hóa",
    "heroTitle": "Trợ lý nội bộ: Giải cứu nhân viên khỏi mê cung tài liệu và thủ tục hành chính.",
    "heroDesc": "Mỗi ngày, nhân sự của bạn mất tới 30% thời gian chỉ để đi tìm các file quy trình cũ, hoặc mệt mỏi chờ đợi phòng IT/HR duyệt ticket cấp quyền phần mềm. Syrix Internal Chatbot luôn hiện hữu để chấm dứt sự lãng phí đó. Nạp toàn bộ kho dữ liệu công ty cho AI, nhân viên chỉ cần đặt câu hỏi là có câu trả lời chính xác kèm link file gốc nội bộ. Thậm chí, nhờ sức mạnh MCP, Agent tự truy cập thẳng vào hệ thống Jira hoặc XCORP để check trạng thái task và tự tay tạo ticket xử lý lỗi cho nhân sự.",
    "storyText": "Câu chuyện thành công: Giải quyết 70% các yêu cầu tự phục vụ (Self-service), giải phóng phòng IT/HR khỏi đống ticket vụn vặt để tập trung vào các dự án hạ tầng cốt lõi.",
    "kpis": [
      { "label": "Thời gian tra cứu", "old": "25 phút mò mẫm chéo giữa các thư mục", "new": "Trả lời chính xác dưới 2 giây qua RAG" },
      { "label": "Tỷ lệ giảm tải ticket", "old": "Hàng dài ticket nội bộ tồn đọng kéo dài", "new": "Tự động hóa xử lý hoàn toàn 70%" }
    ],
    "useCases": [
      { "tab": "Nỗi đau nhân sự", "title": "Bị bủa vây bởi thủ tục và phân mảnh tri thức", "desc": "Nhân viên mới ngập lụt trong đống file SOPs, kỹ sư mất thời gian tra cứu log lỗi cũ, phòng ban vận hành bị tắc nghẽn giao tiếp vì dữ liệu nằm rải rác." },
      { "tab": "Cách Syrix giải quyết", "title": "Kết nối sâu vào Slack, Jira và XCORP", "desc": "Trợ lý ảo tích hợp thẳng vào không gian làm việc như Slack. Nhân viên ra lệnh bốc tài liệu, check tiến độ dự án hay nhờ tạo task, AI tự gọi tool MCP thực thi trực tiếp trên hệ thống Jira." },
      { "tab": "Giá trị mang lại", "title": "Bảo mật tuyệt đối & Vận hành tinh gọn", "desc": "Phản chiếu mô hình phân quyền RBAC nghiêm ngặt đảm bảo an toàn dữ liệu nội bộ, đồng thời thúc đẩy hiệu suất lao động toàn công ty lên một tầm cao mới." }
    ]
  },
  "meetingExecution": {
    "badge": "Hiệu Suất Lãnh Đạo Cao Cấp",
    "heroTitle": "Trợ lý di động cho Sếp: Biến lời nói thành hành động vận hành tức thì.",
    "heroDesc": "Dành riêng cho các nhà quản lý và lãnh đạo bận rộn luôn phải di chuyển trên đường. Thay vì mất hàng giờ viết biên bản tổng hợp sau cuộc họp 2 tiếng, Syrix Speech to Text tự động nghe, phân tách kênh giọng nói và tóm tắt cuộc họp thành ma trận checklist công việc sạch sẽ. Đặc biệt, khi đang đi xe trên đường và nảy ra ý tưởng khẩn cấp, Sếp chỉ cần quay một đoạn voice ngắn gửi đi; Syrix tự dịch thoại dưới 200ms, phối hợp cùng AI Agent gọi tool MCP để tự động chia task, tạo ticket trên Jira và bắn chỉ thị đẹp mắt vào Slack cho đội ngũ kỹ sư.",
    "storyText": "Câu chuyện thành công: Cắt giảm hoàn toàn ma sát giao việc từ xa, giữ cho guồng quay tiến độ hạ tầng của tổng công ty luôn chuyển động liên tục không có độ trễ.",
    "kpis": [
      { "label": "Biên bản cuộc họp", "old": "Tốn 3 tiếng tổng hợp ghi chép thủ công", "new": "Khởi tạo ma trận checklist tự động tức thì" },
      { "label": "Ma sát giao việc", "old": "Phải gõ chữ mở ticket trên mobile khi đang đi đường", "new": "Chuyển hóa giọng nói thành mã lệnh API hệ thống" }
    ],
    "useCases": [
      { "tab": "Nỗi đau lãnh đạo", "title": "Quá tải thông tin và mất dấu chỉ thị khẩn", "desc": "Các Sếp không có thời gian ngồi gõ từng dòng giao việc khi đang di chuyển, dẫn đến các ý tưởng chiến lược hoặc chỉ thị nóng bị trì hoãn, làm chậm tiến độ toàn đội ngũ." },
      { "tab": "Cách Syrix giải quyết", "title": "Hợp lực mạnh mẽ giữa Dịch thoại & AI Agent", "desc": "Hệ thống tiếp nhận file ghi âm cuộc họp hoặc voice thoại di động, dịch chuẩn xác thuật ngữ chuyên ngành và chỉ huy AI nội bộ tự động chia việc vào đúng luồng pipeline hệ thống." },
      { "tab": "Giá trị mang lại", "title": "Giải phóng thời gian điều hành tối đa", "desc": "Tiết kiệm hơn 5 giờ mỗi tuần cho mỗi Manager, đạt tỷ lệ lưu giữ và thực thi cam kết kỹ thuật 100%, nâng cao tốc độ phản ứng của doanh nghiệp trước biến động." }
    ]
  }
}
Hợp nhất vào file messages/en.json:
JSON
"solutionsV3": {
  "customerSupport": {
    "badge": "Operations & Customer Experience",
    "heroTitle": "Resolve 80% of Enterprise Support Tickets Autonomously.",
    "heroDesc": "Imagine a B2B client facing an order crisis at 2 AM. Instead of waiting for business hours, Syrix Help Desk steps in instantly. With no brittle scripts and zero hallucinations, the agent reads your uploaded product manuals via RAG to provide precise answers, while utilizing secure MCP tools to interact with your live database and update orders under 2 seconds.",
    "storyText": "Success Story: Deflected 80% of inbound queue backlogs, optimized CSAT score to 98%, and eliminated enterprise night-shift operational overhead completely.",
    "kpis": [
      { "label": "Response Velocity", "old": "45-Minute average queue hold time", "new": "Instant contextual resolution < 2 seconds" },
      { "label": "Satisfaction Rate (CSAT)", "old": "72% using rigid legacy keyword bots", "new": "98% driven by precise vector RAG sources" }
    ],
    "tabs": [
      { "tab": "Operational Pain", "title": "Queue Bottlenecks & High Churn Risks", "desc": "Global clients abandon brands when legacy support tools fail to interpret technical queries and human agents are offline during off-hours." },
      { "tab": "How Syrix Solves It", "title": "Autonomous Execution via MCP Tools", "desc": "Syrix analyzes intent, extracts exact compliance answers using RAG, and safely triggers backend API tools to resolve issues without human overhead." },
      { "tab": "Value Delivered", "title": "Frictionless Support & Resource Optimization", "desc": "Build long-term trust with enterprise partners while liberating human representatives to handle high-value account accounts." }
    ]
  },
  "sales": {
    "badge": "Revenue & ROI Optimization",
    "heroTitle": "24/7 Sales Agent: Never Let a Deal Turn Cold After Hours.",
    "heroDesc": "Prospects visit your platform at midnight looking for enterprise pricing. Human representatives cannot stay online 24/7 without massive budget overhead. Syrix Sales Agent acts as an always-on business development representative—parsing product document collections, answering questions, and automatically scheduling viewings or deep consulting sessions directly through HubSpot CRM via MCP.",
    "storyText": "Success Story: Boosted pipeline conversion rates by 35% and maximized corporate marketing ROI by capturing every off-hour opportunity instantly.",
    "kpis": [
      { "label": "Conversion Rate", "old": "Lost 40% of leads arriving after hours", "new": "35% Average increase in pipeline velocity" },
      { "label": "Cost Efficiency (ROI)", "old": "Heavy budget required for global coverage", "new": "Maximized ROI with an infinite scaling agent" }
    ],
    "useCases": [
      { "tab": "The Executive Pain", "title": "Stalled Leads & Wasted Marketing Budgets", "desc": "Spending budget on lead generation only to lose high-value corporate prospects because no sales rep can follow up immediately during weekends or nights." },
      { "tab": "How Syrix Solves It", "title": "Automated Conversational Quote & Booking", "desc": "The agent evaluates client volume scale, checks pricing matrices, reveals free calendar spots from CRM, and dispatches dynamic sample contract drafts instantly." },
      { "tab": "Value Delivered", "title": "Continuous High-Velocity Revenue Pipelines", "desc": "Scale enterprise sales capabilities globally, lower your customer acquisition cost, and capture every deal opportunity 24/7." }
    ]
  },
  "internalChatbot": {
    "badge": "Corporate Brain & Automation",
    "heroTitle": "Internal AI Assistant: Liberate Employees From Unstructured Data Chaos.",
    "heroDesc": "Stop losing 30% of employee productivity to information searching and tedious IT/HR ticketing delays. Syrix Internal Chatbot unifies your engineering wikis, HR policies, Confluence databases, and Slack history into an isolated secure RAG repository. Employees get instant answers complete with file source paths, while the agent independently accesses platforms like Jira or XCORP via MCP to track tasks or reset credentials.",
    "storyText": "Success Story: Resolved 70% of routine internal inquiries via automated self-service, liberating IT and HR departments to focus on core core infrastructure.",
    "kpis": [
      { "label": "Discovery Speed", "old": "25 Minutes browsing scattered network folders", "new": "Under 2 seconds precise vector RAG lookup" },
      { "label": "Ticket Deflection Rate", "old": "Overloaded human internal IT queues", "new": "70% Ticket reduction via automated self-service" }
    ],
    "useCases": [
      { "tab": "Staff Friction", "title": "Fragmented Knowledge Sapping Efficiency", "desc": "New hires drown in unindexed corporate onboarding documentation, while developers waste valuable hours searching for historical software error logs." },
      { "tab": "How Syrix Solves It", "title": "Deep Integration With Slack, Jira & XCORP", "desc": "Embedded right within your internal workspace. When staff request code help or task status reviews, the agent calls secure MCP tools to execute commands directly." },
      { "tab": "Value Delivered", "title": "Ironclad Compliance & High Productivity", "desc": "Enforce strict corporate Role-Based Access Control (RBAC) boundaries while accelerating daily project delivery benchmarks across all departments." }
    ]
  },
  "meetingExecution": {
    "badge": "Executive Workspace Velocity",
    "heroTitle": "Voice-to-Task Core: Convert Speech Into Actionable Workflows.",
    "heroDesc": "Designed for busy executives who cannot afford operational delays. Ditch manual transcription overhead; Syrix Speech to Text processes meeting audio, isolates speaker channels, and outputs an executive summary checklist. When commuting, record a quick voice memo; Syrix transcribes the input under 200ms, commanding the Internal AI Agent to trigger MCP tools to deploy tasks, create Jira tickets, or send structured Slack alerts.",
    "storyText": "Success Story: Completely removed remote task deployment friction, keeping infrastructure pipelines moving continuously without any operational lag.",
    "kpis": [
      { "label": "Meeting Summarization", "old": "Hours spent writing manual post-meeting logs", "new": "Instant automated milestone checklist mapping" },
      { "label": "Task Launch Friction", "old": "Typing long jira descriptions on a mobile screen", "new": "Voice-activated internal tool API execution" }
    ],
    "useCases": [
      { "tab": "The Manager Pain", "title": "Context Decay & Lost Strategic Directives", "desc": "Managers on the move cannot open dashboards to log tickets on mobile, causing critical ideas and time-sensitive tasks to be delayed or lost entirely." },
      { "tab": "How Syrix Solves It", "title": "Speech to Text & Internal AI Agent Synergy", "desc": "The platform ingests real-time meeting logs or mobile voice streams, recognizes specialized technical jargon, and pipes structured data into the agent matrix." },
      { "tab": "Value Delivered", "title": "Unrivaled Operational Momentum", "desc": "Save 5+ hours per manager every week, achieve 100% execution tracking on technical commitments, and maximize organizational execution speed." }
    ]
  }
}
2. QUY TẮC PHÁT TRIỂN GIAO DIỆN COMPONENT SINH ĐỘNG (SALESFORCE STYLE)
Áp dụng cấu trúc hiển thị của Salesforce Retail AI để viết lại khung xương cho cả 4 file trang giải pháp: customer-support/page.tsx, sales/page.tsx, internal-knowledge/page.tsx, và meeting-execution/page.tsx.

CẤU TRÚC 3 BLOCK CHỦ LỰC BẮT BUỘC TRÊN TỪNG TRANG:
[ ] Block 1: Hero Storytelling Banner

Sử dụng cấu trúc Grid chia làm 2 cột đối xứng (grid grid-cols-1 lg:grid-cols-2 gap-12 items-center).

Cột bên trái: Hiển thị tag danh mục (badge), tiêu đề lớn mang tính chuyển đổi (heroTitle), và đoạn văn kể chuyện dẫn dắt nỗi đau (heroDesc). Đặt một nút bấm CTA chính có hiệu ứng phát sáng mờ bọc viền dẫn tới trang /[locale]/book-demo.

Cột bên phải: Loại bỏ hình ảnh tĩnh vô giá trị. Thay thế bằng một Khung giao diện Dashboard giả lập Admin Site hiển thị luồng RAG Node đang bốc tách tài liệu hoặc danh sách các API MCP đang bật sáng để minh họa trực quan cho câu chuyện.

Phía dưới cùng của Hero block: Hiển thị một dòng text đúc kết ngắn gọn câu chuyện thành công (storyText) với font chữ nghiên sang trọng (italic text-cyan-400 bg-cyan-500/5 p-4 rounded-xl border border-cyan-500/10).

[ ] Block 2: High-Contrast KPI Deck

Thiết kế một dải card chỉ số tương phản cao nằm ngang (grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 py-8 border-y border-white/5).

Duyệt mảng dữ liệu kpis bằng công thức ép kiểu TypeScript an toàn. Renders mỗi ô chỉ số gồm: Tên thước đo (metric.label), chỉ số nghẽn cũ có hiệu ứng gạch ngang (line-through text-muted-foreground text-xs) và chỉ số tự động hóa xanh mượt của Syrix (text-2xl font-bold text-cyan-400).

[ ] Block 3: Interactive Use Case Tabs Component

Triển khai một bộ điều khiển Tab tương tác gồm 3 nút bấm tương ứng với 3 vế trong mảng dữ liệu (tabs hoặc useCases).

Sử dụng React Client State để kiểm soát vị trí click chuột của người dùng: const [currentTab, setCurrentTab] = useState(0);.

Khi người dùng bấm vào một Tab: UI tự động mờ dần và hiển thị tiêu đề chi tiết (title) cùng đoạn giải thích giải pháp (desc), đi kèm một hình vẽ illustration vector bọc khung kính mờ Glassmorphic thể hiện sơ đồ nghiệp vụ tương ứng (Ví dụ: Khung chat có Thinking Log hiện lên cho Support, Form tạo Báo giá cho Sales, sơ đồ phân quyền RBAC cho Internal Brain).

3. CÚ PHÁP ÉP KIỂU TS ĐỂ CHỐT CHẶN LỖI COMPILER NEXT.JS
[ ] Để đảm bảo quá trình chạy lệnh npm run build thành công tuyệt đối, toàn bộ các vòng lặp .map() bốc dữ liệu từ file JSON phải được bọc trong cấu trúc ép kiểu Interface nghiêm ngặt sau:

TypeScript
interface KPIStructure {
  label: string;
  old: string;
  new: string;
}

interface TabStructure {
  tab: string;
  title: string;
  desc: string;
}

{/* Ví dụ áp dụng ép kiểu cho Sales Page */}
const kpiList = (tRaw('solutionsV3.sales.kpis') as KPIStructure[]) || [];
const caseTabs = (tRaw('solutionsV3.sales.useCases') as TabStructure[]) || [];
[ ] Đảm bảo các shared components nền tảng (Navbar, Footer, CTA) và các thư viện diễn hoạt framer-motion được import chuẩn xác từ đường dẫn gốc, không gọi thông qua thư mục src ảo.