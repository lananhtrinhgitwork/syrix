# SYRIX.AI — PHA 11: TÁI CẤU TRÚC ĐỒ SỘ KHỐI GIẢI PHÁP & MA TRẬN KẾT HỢP SẢN PHẨM (TODO13)

> **Góc nhìn Senior PO & BA Engine:** Bản kế hoạch này đập bỏ hoàn toàn tư duy liệt kê số liệu khô khan ở đầu trang, thay thế bằng **Ma Trận Khởi Tạo Sản Phẩm (Product Synergy Hub)** cô đọng. Toàn bộ trọng tâm trang dồn vào phần thân với các chuỗi **Use Cases dài, đa hình thái Layout (Kính mờ, Dòng thời gian, Terminal, So sánh song song)** đi theo mạch truyện bất biến: **Nỗi đau (Pain Points) ➔ Cách giải quyết (How it Solves) ➔ Giá Trị Đo Lường (Business Value)**.
> **Kiến trúc giới hạn:** Không sử dụng thư mục `src`. Toàn bộ mã nguồn nằm trực tiếp tại thư mục gốc: `app/[locale]/solutions/` (`customer-support`, `sales`, `internal-knowledge`, `meeting-execution`), `messages/en.json` và `messages/vi.json`.

---

## 1. MA TRẬN DỮ LIỆU DỊCH THUẬT ĐA NGÔN NGỮ CHI TIẾT (JSON INTERACTION SECTOR)

Bơm trọn vẹn cụm cấu trúc JSON này vào tệp ngôn ngữ của bạn. Các trường chữ phần Use Case được kéo dài, tăng tính mô tả tình huống thực tế để đánh gục bộ phận kiểm duyệt của đối tác doanh nghiệp.

### Cấu trúc chèn vào file `messages/vi.json`:
```json
"solutionsV4": {
  "customerSupport": {
    "badge": "Giải Pháp Hậu Mãi & CSAT",
    "synergyTitle": "Hợp Lực: Syrix Help Desk × Giao Thức Kết Nối MCP",
    "synergyDesc": "Sự kết hợp hoàn hảo giữa giao diện Widget tuyến đầu và các cổng API thực thi hệ thống, biến khung chat thông thường thành một nhân viên xử lý nghiệp vụ tự chủ 24/7.",
    "useCases": [
      {
        "id": "inboundCrisis",
        "tag": "Tình huống 01: Khủng hoảng quá tải ca đêm",
        "title": "Xử Lý Ticket Kỹ Thuật Đa Kênh Lúc 2 Giờ Sáng",
        "pain": "Khách hàng doanh nghiệp gặp sự cố đứng hệ thống (System Downtime) ngoài giờ hành chính. Chatbot cũ chỉ biết trả lời các câu FAQ chung chung vô nghĩa khiến khách bực bội. Không có nhân sự trực ca đêm dẫn đến rủi ro vi phạm cam kết chất lượng dịch vụ SLA và mất đối tác chiến lược.",
        "solution": "Syrix Help Desk lập tức tiếp quản luồng chat. AI tự bốc tách cẩm nang xử lý lỗi PDF 50MB qua cơ chế Vector RAG để đưa ra quy trình sửa đổi chính xác mà không hề nói dối. Sau đó, Agent tự động gọi công cụ MCP kết nối thẳng vào database của công ty để reset token truy cập an toàn cho đối tác.",
        "value": "Triệt tiêu 80% ticket tồn đọng, nâng điểm số CSAT lên 98%, giải phóng hoàn toàn chi phí thuê nhân sự trực đêm và bảo vệ 100% uy tín thương hiệu Enterprise."
      },
      {
        "id": "billingDispute",
        "tag": "Tình huống 02: Khiếu nại hóa đơn & Đổi thông tin",
        "title": "Tự Động Hóa Thực Thi Nghiệp Vụ Hóa Đơn & ERP",
        "pain": "Khách hàng chat yêu cầu thay đổi địa chỉ xuất hóa đơn đỏ và tính lại chiết khấu cho hợp đồng Logistics. Chuyên viên support phải mở đồng thời 3 tab phần mềm (MISA, CRM, Excel) để kiểm tra, thao tác thủ công mất 30 phút, dễ sai sót dữ liệu và gây nghẽn hàng chờ.",
        "solution": "Agent tự động nhận diện ý định (Intent Analysis). Không cần con người đụng tay, AI tự bốc chính sách chiết khấu năm, gọi hàm MCP `updateBillingAddress()` và `recalculateInvoice()` để ghi đè dữ liệu sạch vào cổng ERP, sau đó xuất file PDF hóa đơn mới ngay trong khung chat.",
        "value": "Thời gian xử lý giảm từ 30 phút xuống còn 2 giây. Sai sót dữ liệu bằng 0. Năng suất phòng vận hành tăng gấp 4 lần."
      }
    ]
  },
  "sales": {
    "badge": "Bứt Phá Doanh Thu",
    "synergyTitle": "Hợp Lực: Syrix Help Desk × AI Agent Core × HubSpot CRM",
    "synergyDesc": "Động cơ Sales khép kín: Tự động tiếp cận lead ngoài giờ, tư vấn sản phẩm chuyên sâu qua RAG và chốt lịch hẹn trực tiếp vào phễu CRM.",
    "useCases": [
      {
        "id": "rfpParsing",
        "tag": "Tình huống 01: Đón lead ngoài giờ & Đấu thầu",
        "title": "Bóc Tách Hồ Sơ Đấu Thầu RFP 50MB & Tư Vấn Giá Động",
        "pain": "Lead tập đoàn truy cập web lúc 11 giờ đêm, tải lên file yêu cầu báo giá (RFI/RFP) cực kỳ phức tạp và cần phản hồi gấp. Đội Sales con người đang ngủ. Nếu để đến sáng mai, lead sẽ nguội lạnh và đối tác đã chuyển sang ký kết với đối thủ cạnh tranh quốc tế.",
        "solution": "Sales Agent tuyến đầu tiếp nhận file. Hệ thống lập tức chạy màng lọc RAG bóc tách toàn bộ file tài liệu, đối chiếu các tiêu chuẩn tính năng với Specs của công ty. AI tự động tính biên độ chiết khấu năm tối đa (25%) từ chính sách bảo mật, xuất file báo giá nháp và gửi link cho đối tác.",
        "value": "Tăng trưởng 35% tỷ lệ chuyển đổi lead ngoài giờ, chuyển hóa 100% lượt truy cập muộn thành cơ hội chốt deal, tối ưu hóa tuyệt đối chỉ số ROI của ngân sách Marketing."
      },
      {
        "id": "autoBooking",
        "tag": "Tình huống 02: Chốt deal Bất Động Sản / Dịch vụ",
        "title": "Tự Động Nuôi Dưỡng Lead & Chốt Lịch Xem Nhà 24/7",
        "pain": "Khách hàng chat tìm hiểu dự án căn hộ cao cấp vào ngày nghỉ lễ. Họ muốn đặt lịch hẹn xem nhà thực tế nhưng quy trình cũ bắt điền form rồi chờ Sales gọi lại check lịch, khiến 40% khách hàng rơi rụng vì mất kiên nhẫn.",
        "solution": "Thông qua cổng kết nối MCP với HubSpot CRM, Sales Agent tự động quét các khung giờ trống của chuyên viên tư vấn, hiển thị một bảng lịch trực quan ngay trong cửa sổ chat, và tự động lock slot hẹn, bắn mail xác nhận kèm bản đồ định vị cho khách hàng.",
        "value": "Hủy bỏ hoàn toàn ma sát đặt lịch. Tỷ lệ đặt hẹn thành công tăng 55%. Không tốn một đồng chi phí nhân sự trực lễ."
      }
    ]
  },
  "internalKnowledge": {
    "badge": "Quản Trị Tri Thức & Bảo Mật",
    "synergyTitle": "Hợp Lực: Syrix AI Agent × Kho Dữ Liệu Vector Hệ Thống",
    "synergyDesc": "Bộ não tri thức nội bộ cô lập, thống nhất toàn bộ tài nguyên công ty vào một điểm truy cập duy nhất, phân quyền nghiêm ngặt.",
    "useCases": [
      {
        "id": "itHelpdesk",
        "tag": "Tình huống 01: Nghẽn hạ tầng & Cấp quyền",
        "title": "Tự Động Hóa Trợ Lý IT Helpdesk & Cấp Mã Token",
        "pain": "Kỹ sư phần mềm mới vào công ty mất 3 tiếng để tìm tài liệu cấu hình server, hoặc phải mở ticket chờ phòng hạ tầng IT duyệt cấp quyền reset container máy chủ. Toàn bộ tiến độ dự án bị đình trệ chỉ vì những thủ tục phê duyệt thủ công.",
        "solution": "Internal Agent tích hợp thẳng vào không gian Slack. Kỹ sư ra lệnh bằng ngôn ngữ tự nhiên. AI tự lục tìm wiki Confluence qua RAG để xuất câu trả lời kèm nguồn dẫn trong 2 giây. Đồng thời, AI đối chiếu quyền hạn nhân sự qua cây thư mục nội bộ, gọi tool MCP kết nối thẳng Jira/XCORP để tự động tạo ticket và thực thi lệnh reset máy chủ an toàn.",
        "value": "Thời gian onboarding nhân sự giảm 60%. Giảm tải 70% ticket vụn vặt cho phòng IT, đảm bảo guồng quay sản xuất phần mềm liên tục."
      },
      {
        "id": "hrCompliance",
        "tag": "Tình huống 02: Tra cứu chính sách pháp chế",
        "title": "Kiểm Toán Quy Trình Nhân Sự & Tra Cứu SOPs Bảo Mật",
        "pain": "Nhân viên liên tục ping hỏi phòng HR về chính sách bảo hiểm, chế độ thai sản hoặc quy chuẩn pháp lý hợp đồng. Phòng HR bị quá tải bởi các câu hỏi lặp đi lặp lại, không còn thời gian tập trung vào công tác đào tạo và giữ chân nhân tài.",
        "solution": "Mọi tài liệu SOPs, file chính sách thô của tập đoàn được nạp vào các Bộ sưu tập (Collections) cô lập đa người dùng. Hệ thống áp dụng màng lọc phân quyền RBAC nghiêm ngặt: Nhân viên chỉ có thể tra cứu các thông tin mà tài khoản của họ được phép đọc, tuyệt đối không rò rỉ bảng lương hay dữ liệu mật của sếp.",
        "value": "Phòng HR sạch bóng các câu hỏi vụn vặt. Tri thức công ty được bảo vệ toàn vẹn trong ranh giới an toàn của doanh nghiệp, không rò rỉ ra các mô hình AI công cộng."
      }
    ]
  },
  "meetingExecution": {
    "badge": "Hiệu Suất Ban Điều Hành",
    "synergyTitle": "Hợp Lực: Speech to Text × Lõi Xử Lý AI Agent × Cổng Công Cụ MCP",
    "synergyDesc": "Hạ tầng chuyển đổi giọng nói thành chuỗi mã lệnh API, giúp ban lãnh đạo điều hành toàn bộ guồng quay doanh nghiệp rảnh tay từ xa.",
    "useCases": [
      {
        "id": "meetingExtraction",
        "tag": "Tình huống 01: Hao hụt thông tin sau cuộc họp",
        "title": "Biên Bản Họp Tự Động & Ma Trận Chia Task Lập Tức",
        "pain": "Sau các cuộc họp chiến lược kéo dài 2 tiếng, thư ký mất nửa ngày để viết biên bản tổng hợp. Thông tin cam kết kỹ thuật giữa các phòng ban bị hao hụt, các đầu việc bị bỏ sót, không ai chịu trách nhiệm khiến tiến độ dự án bị trì trệ.",
        "solution": "Syrix Speech to Text tiếp nhận file ghi âm cuộc họp, tự động bóc tách tối đa 8 kênh giọng nói độc lập (Diarization) dưới 200ms. Lõi AI tự động phân tích ngữ cảnh, cô đọng thành một bảng ma trận checklist điều hành gồm: Đầu việc, Nhân sự chịu trách nhiệm và Deadline, sau đó tự gọi tool MCP bắn task sạch sẽ vào Jira.",
        "value": "Tiết kiệm 5 giờ làm việc cho mỗi manager sau cuộc họp. Tỷ lệ thực thi cam kết đạt 100%. Tiến độ dự án chạy nhanh hơn 25%."
      },
      {
        "id": "commuteCommands",
        "tag": "Tình huống 02: Lãnh đạo bận rộn di chuyển",
        "title": "Cổng Tiếp Nhận Mệnh Lệnh Giọng Nói Khi Đang Trên Đường",
        "pain": "C-level hoặc các Manager đang lái xe hoặc di chuyển trên đường đi làm không thể mở laptop hay gõ chữ mở ticket trên mobile. Các ý tưởng chiến lược khẩn cấp hoặc chỉ thị nóng cho đội ngũ kỹ sư bị nghẽn lại, làm chậm tốc độ phản ứng của doanh nghiệp.",
        "solution": "Sếp chỉ cần bật điện thoại quay một đoạn voice ngắn: 'Mở ticket ưu tiên cao tạo luồng backup dữ liệu cho khách hàng XCorp trên Jira và ping báo cho nhóm Slack'. Syrix dịch thoại chính xác thuật ngữ chuyên ngành dưới 200ms, chỉ huy AI Agent gọi tool MCP tự động log ticket vào Jira và định dạng tin nhắn đẹp mắt bắn thẳng vào Slack của team.",
        "value": "Khởi tạo tác vụ nội bộ không ma sát. Vận hành liên nền tảng hoàn toàn bằng giọng nói. Giữ cho guồng quay tiến độ hạ tầng luôn chuyển động liên tục từ xa."
      }
    ]
  }
}
```

### Cấu trúc chèn vào file `messages/en.json`:
```json
"solutionsV4": {
  "customerSupport": {
    "badge": "Operations & CSAT Support",
    "synergyTitle": "Synergy: Syrix Help Desk × Model Context Protocol Gateway",
    "synergyDesc": "The perfect handshake between front-end conversational widgets and structural back-end API nodes, turning a traditional chat bubble into a fully autonomous 24/7 digital employee.",
    "useCases": [
      {
        "id": "inboundCrisis",
        "tag": "Use Case 01: Night-Shift Queue Bottlenecks",
        "title": "Autonomous Multi-Channel Tier-1 Ticket Resolution at 2 AM",
        "pain": "B2B enterprise clients experience system critical downtime outside standard business hours. Legacy keyword-matching chatbots output repetitive FAQ answers, aggravating clients. Having no technical staff online during night shifts leads to strict SLA breaches and high customer churn risks.",
        "solution": "Syrix Help Desk instantly takes control of the interaction. The core engine pulls from a 50MB unstructured technical manual collection via Vector RAG, outputting precise troubleshooting paths with zero hallucinations. The agent independently triggers secure MCP tools to reset access tokens and repair endpoints directly inside your live database.",
        "value": "Deflects 80% of inbound queue backlogs, drives CSAT scores to 98%, eliminates night-shift engineering overhead, and preserves enterprise brand equity."
      },
      {
        "id": "billingDispute",
        "tag": "Use Case 02: Billing Overrides & Administrative Tasks",
        "title": "Automated ERP & Invoice Modifications via Corporate Tools",
        "pain": "An enterprise account requests an immediate update to their billing address and a recalculation of their annual logistics discount tier. Support representatives must manually open 3 detached applications (ERP, CRM, Excel matrices) to verify data, wasting 30 minutes per interaction and causing data entry errors.",
        "solution": "The agent executes real-time natural language intent tracking. Without human intervention, the agent references your private pricing guidelines, calls secure MCP infrastructure methods like `updateBillingAddress()` and `recalculateInvoice()`, updates your system ERP, and renders the newly compiled PDF invoice directly in the chat frame.",
        "value": "Processing time drops from 30 minutes to 2 seconds. System data entry errors reach absolute zero. Support workforce output multiplies by 4x."
      }
    ]
  },
  "sales": {
    "badge": "Revenue Generation",
    "synergyTitle": "Synergy: Syrix Help Desk × AI Agent Core × HubSpot CRM",
    "synergyDesc": "A complete autonomous revenue loop: automatically capturing off-hour opportunities, providing deep RAG consultative support, and logging meetings directly inside your CRM.",
    "useCases": [
      {
        "id": "rfpParsing",
        "tag": "Use Case 01: Off-Hour Pipeline Acceleration",
        "title": "Instant 50MB RFP File Ingestion & Dynamic Contract Quoting",
        "pain": "A high-value enterprise lead uploads a highly complex Request for Proposal (RFP) sheet at 11 PM requiring an urgent response strategy. Your sales engineering team is offline. Delaying follow-up until morning allows the prospect to lose patience and sign a contract with a global competitor.",
        "solution": "The frontline Sales Agent intercepts the file asset. The engine runs deep vector RAG pipelines to scan the complete document context, validating item requirements against your product specs. The agent calculates maximum annual volume discount thresholds (25%) from secure policy matrices, generates a formal proposal draft, and dispatches the link to the client.",
        "value": "Boosts off-hour lead conversion rates by 35%, translates late-night traffic into formal pipeline opportunities, and maximizes marketing ROI."
      },
      {
        "id": "autoBooking",
        "tag": "Use Case 02: Real Estate & Account Booking",
        "title": "Continuous Nurturing & Automated CRM Calendar Booking",
        "pain": "A corporate prospect browses luxury real estate assets or service tiers during weekends. They want to lock an onsite viewing appointment, but legacy contact forms force them to wait for manual representative confirmation, resulting in a 40% drop-off rate.",
        "solution": "Leveraging secure MCP integration hooks connected to your HubSpot CRM, the Sales Agent actively scans open corporate calendar slots, displays an interactive scheduling calendar card right in the message screen, locks the chosen slot, and triggers automated email confirmations complete with map navigation paths.",
        "value": "Completely removes appointment scheduling friction. Successful booking actions rise by 55% without spending any budget on human scheduling coordinators."
      }
    ]
  },
  "internalKnowledge": {
    "badge": "Corporate Brain & Compliance",
    "synergyTitle": "Synergy: Syrix AI Agent × System Vector Ingestion Collections",
    "synergyDesc": "An isolated, secure organizational neural network unifying detached file assets into a single access point governed by strict access maps.",
    "useCases": [
      {
        "id": "itHelpdesk",
        "tag": "Use Case 01: Infrastructure Backlogs",
        "title": "IT Helpdesk Automation & Voice-Activated Server Tool Execution",
        "pain": "A newly boarded developer spends 3 hours searching across unindexed wiki directories for environment setups, or stalls project velocity waiting for system administrators to approve a ticket to reset a crashed database staging container.",
        "solution": "The Internal Agent functions right inside your team's Slack workspace. Staff issue natural language requests; the AI queries Confluence repositories via RAG to output perfect instructions with source paths under 2 seconds. Simultaneously, it validates operator clearances, calls secure Jira/XCORP MCP tools, and automatically deploys the server container reset routine.",
        "value": "Reduces employee onboarding duration by 60%, deflicts 70% of routine internal IT helpdesk queues, and ensures continuous software engineering velocity."
      },
      {
        "id": "hrCompliance",
        "tag": "Use Case 02: Policy Mapping & Sovereignty",
        "title": "Corporate Compliance Auditing & Secure SOP Document Discovery",
        "pain": "HR professionals are constantly overwhelmed by repetitive employee inquiries regarding insurance, family leave metrics, and complex legal compliance frameworks, leaving zero time for talent retention and staff training.",
        "solution": "All corporate guidelines and internal SOP files up to 50MB are securely index-tokenized into multi-tenant isolated Collections. The platform strictly enforces your corporate Role-Based Access Control (RBAC) maps; employees only extract answers they possess native permissions to view, preventing salary or executive record leaks.",
        "value": "HR teams are cleared of administrative noise. Enterprise tri-tree data remains fully ring-fenced within your private corporate boundary, with zero leakage to public open-source training streams."
      }
    ]
  },
  "meetingExecution": {
    "badge": "Executive Workspace Velocity",
    "synergyTitle": "Synergy: Speech to Text × AI Agent Core Brain × Tool Action Matrix",
    "synergyDesc": "A continuous system converting voice streams into operational software commands, empowering managers to coordinate enterprise pipelines completely hands-free.",
    "useCases": [
      {
        "id": "meetingExtraction",
        "tag": "Use Case 01: Post-Meeting Friction",
        "title": "Automated Multi-Speaker Meeting Summarization & Jira Synchronization",
        "pain": "Following 2-hour strategic corporate meetings, administrative assistants spend half a day compiling summaries. Commitments made between engineering and operations teams evaporate due to context decay, tasks are unassigned, and project momentum stalls.",
        "solution": "Syrix Speech to Text processes raw meeting records, parsing up to 8 unique speaker streams via advanced diarization models under 200ms. The integrated AI agent analyzes contextual targets, structures the conversation into an executive summary checklist (Tasks, Owners, Deadlines), and calls MCP tools to deploy engineering tasks into Jira.",
        "value": "Saves 5+ hours per week per corporate manager. Technical commitment tracking reaches an absolute 100% rate, boosting enterprise execution velocity by 25%."
      },
      {
        "id": "commuteCommands",
        "tag": "Use Case 02: Hands-Free Executive Hub",
        "title": "On-the-Go Voice Command Ingestion & Automated Multi-Platform Routing",
        "pain": "C-levels and operational directors commuting or traveling cannot open dashboards to log tickets or type long text instructions on mobile. Immediate strategic insights and high-priority infrastructure directives are delayed or lost completely.",
        "solution": "The executive records a short voice memo: 'Open a high-priority ticket on Jira to build a data backup flow for XCorp and notify the Slack squad'. Syrix transcribes the input with precise domain-jargon recognition under 200ms, commanding the AI Agent to independently log the Jira task and route a formatted notification directly into the team Slack channel.",
        "value": "Enforces zero friction internal task deployment. Executes multi-platform operations via voice. Keeps critical infrastructure pipelines moving while managers are offline."
      }
    ]
  }
}
```

---

## 2. QUY TẮC PHÂN CHIA LAYOUT ĐA DẠNG CHO `app/[locale]/solutions/[slug]/page.tsx`

Vibe-code các file giải pháp phải tuân thủ nghiêm ngặt cấu trúc thiết kế mỹ thuật cao cấp của Salesforce Retail AI. Tuyệt đối không bê nguyên một kiểu card lặp đi lặp lại. Phần đầu trang chỉ chứa text ngắn gọn và một Mockup trực quan thể hiện mối quan hệ hợp lực của sản phẩm.

### KHUNG XƯƠNG LAYOUT CHO TỪNG TRANG GIẢI PHÁP:

### BƯỚC 1: PHẦN ĐẦU TRANG - MA TRẬN HỢP LỰC SẢN PHẨM (PRODUCT SYNERGY HERO)
- [ ] **Bố cục:** Chia làm 2 cột bất đối xứng trên Desktop (`grid grid-cols-1 lg:grid-cols-5 gap-12 items-center py-16 border-b border-white/5 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]/20`).
- [ ] **Cột bên trái (Tỷ lệ 2/5):** Chứa thẻ `badge` bọc viền phát sáng nhẹ, Tiêu đề hợp lực (`synergyTitle`) dùng font size `text-3xl font-extrabold text-white`, và đoạn mô tả cực ngắn (`synergyDesc`, độ dài dưới 3 dòng).
- [ ] **Cột bên phải (Tỷ lệ 3/5 - Khung phối hợp sản phẩm):** Thiết kế một component hình vẽ Mockup Canvas tinh tế bằng CSS/Tailwind thể hiện sơ đồ hợp lực.
  - *Ví dụ trang Customer Support:* Một khối hình chữ nhật đại diện cho `Syrix Help Desk Widget` kết nối bằng một đường Line phát sáng động đứt nét (Animated dashed line) chạy thẳng vào một khối mã Code Block đại diện cho `MCP Cổng API Hệ Thống`.
  - *Ví dụ trang Meeting Execution:* Sơ đồ luồng: Một nút tròn Microphone phát sóng âm (Waveform CSS) ➔ Khối `Speech to Text Engine` ➔ Khối `Jira Task Created Token`.

### BƯỚC 2: PHẦN THÂN TRANG - MA TRẬN USE CASES ĐA HÌNH THÁI STORYTELLING
Duyệt mảng dữ liệu `solutionsV4.[slug].useCases` qua lệnh `tRaw()`. Mỗi Use Case phải được đặt trong một Block lớn riêng biệt với cấu trúc thiết kế giao diện độc bản, không trùng lặp layout.

#### ❖ Use Case 01: Layout Grid Đan Xen Đối Xứng (Staggered Split Grid)
- [ ] Dành cho kịch bản Khủng hoảng (Ví dụ: `inboundCrisis` hoặc `rfpParsing`).
- [ ] Chia đôi màn hình: Cột chữ mô tả mạch truyện và Cột đồ họa trực quan.
- [ ] **Mạch truyện Chữ được chia thành 3 phần rõ rệt bằng thẻ Typography phân cấp:**
  1. `<h4 className="text-red-400 font-medium flex items-center gap-2">➔ Nỗi đau vận hành (The Pain)</h4>`: Hiển thị trường `item.pain` trên nền text tối, tạo cảm giác bức bối của doanh nghiệp.
  2. `<h4 className="text-cyan-400 font-medium flex items-center gap-2">➔ Cách Syrix xử lý (How Syrix Solves)</h4>`: Hiển thị trường `item.solution` với font chữ màu trắng nổi bật, tạo cảm giác giải thoát công nghệ.
  3. `<h4 className="text-emerald-400 font-medium flex items-center gap-2">➔ Giá trị đo lường (Business Value)</h4>`: Hiển thị trường `item.value` nằm trong một chiếc khung bọc kính mờ (`bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl`).
- [ ] **Cột Đồ Họa Minh Họa Tương Ứng:** Dựng một `Terminal Emulator Component` giả lập chuỗi xử lý lệnh nội bộ. Khi cuộn chuột đến, các dòng chữ như `[VERIFYING RAG CONTEXT...]` hoặc `[CALLING MCP API: RESET_TOKEN]` chạy hiệu ứng tự động gõ chữ.

#### ❖ Use Case 02: Layout Quy Trình Dòng Thời Gian Trực Quan (Interactive Stepper / Timeline Workflow)
- [ ] Dành cho kịch bản Điều hành hoặc Tác vụ liên kết phần mềm (Ví dụ: `billingDispute`, `autoBooking`, `itHelpdesk`, `commuteCommands`).
- [ ] **Cấu trúc Giao diện:** Thiết kế một chuỗi các Node chạy dọc hoặc ngang theo dòng thời gian (`flex flex-col md:flex-row gap-6 items-start relative before:absolute before:bg-white/5`).
- [ ] **Phân rã 3 bước câu chuyện hiển thị trên Timeline:**
  - *Node 1 (Màu đỏ/Cảnh báo):* Mô tả chi tiết Nỗi đau (`item.pain`). Hình ảnh minh họa là một biểu tượng cảnh báo nhấp nháy hoặc hàng đợi Ticket bị dồn ứ.
  - *Node 2 (Màu xanh Cyan/Đang xử lý):* Mô tả Giải pháp thực thi hành động (`item.solution`). Hình ảnh minh họa là một thanh tiến trình chạy sóng ngang thể hiện AI đang bốc dữ liệu RAG hoặc kết nối cổng HubSpot/Jira.
  - *Node 3 (Màu xanh Lá/Hoàn thành):* Mô tả Giá trị tối ưu kinh tế (`item.value`). Hiển thị một biểu đồ cột đi lên hoặc một chiếc nhãn hóa đơn/ticket đã đóng dấu `[SUCCESS]`.

---

## 3. CẤU TRÚC ÉP KIỂU TYPE-SAFETY TUÂN THỦ COMPILER NEXT.JS

Cấm tuyệt đối việc ép kiểu lỏng lẻo gây crash hệ thống khi chạy lệnh build sản xuất. Ép Agent cấu hình Interface nghiêm ngặt sau:

```tsx
interface UseCaseItemStructure {
  id: string;
  tag: string;
  title: string;
  pain: string;
  solution: string;
  value: string;
}

// Ví dụ trích xuất dữ liệu an toàn cho trang Customer Support
const useCasesList = (tRaw('solutionsV4.customerSupport.useCases') as UseCaseItemStructure[]) || [];
```

Kiểm tra kỹ lưỡng các nút bấm chuyển trang đa ngôn ngữ, đảm bảo tất cả đều được bọc trong component `<Link href={`/${locale}/solutions/sales`}`}>` đã được sửa lỗi ở pha trước. Run `npm run build` để nghiệm thu sạch bóng lỗi.