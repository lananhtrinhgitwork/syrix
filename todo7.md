# SYRIX.AI — PHASE 5: INTERNAL AI AGENT LANDING PAGE DEVELOPMENT (TODO7)

> **Objective:** Build a premium, content-rich landing page for the Syrix AI Agent product tailored for Internal Enterprise Operations, RAG Knowledge Management, and Workspace Automation.
> **Design Philosophy:** Salesforce Agentforce Agent Builder style (Intuitive builder canvas aesthetics, topic assignment modeling) crossed with Glean Internal AI Agents (Cross-silo secure vector search, absolute corporate compliance).
> **Architecture Constraint:** Strictly NO `src` folder. The implementation target path is exactly `app/[locale]/products/ai-agent/page.tsx`.

---

## 1. DYNAMIC i18n LOCALE BLUEPRINTS (FOR SYSTEM TRANSLATIONS)

Please merge these complete, non-truncated translation objects directly into your localized JSON directories (`messages/en.json` and `messages/vi.json`) under the `aiAgent` root node to feed the page engine.

### Additions for `messages/en.json`:
```json
"aiAgent": {
  "hero": {
    "badge": "Syrix Agent Builder v2.5",
    "title": "Build Autonomous AI Agents for Your Enterprise Operations.",
    "description": "Stop losing 30% of corporate productivity to information silos and mechanical internal workflows. Syrix AI Agent serves as your secure internal brain—connecting directly to your company's data repositories, unifying internal engineering/HR/Ops knowledge, and executing cross-platform organizational tasks autonomously."
  },
  "metrics": {
    "title": "Unify Your Institutional Intelligence",
    "subtitle": "How replacing legacy internal search engines and heavy ticket queues with autonomous digital employees redefines internal margins.",
    "items": [
      { "label": "Information Discovery Speed", "old": "25 Minutes browsing cross-silo folders", "new": "Instant < 2 Seconds Contextual RAG Answers" },
      { "label": "Internal Request Resolution", "old": "Heavy IT/HR helpdesk ticket backlogs", "new": "80% Autonomous Self-Service Fulfillment" },
      { "label": "Enterprise Data Sovereignty", "old": "Risk of data leaks in public models", "new": "100% Isolated Tenant Vector Security" }
    ]
  },
  "pillars": {
    "title": "The Ultimate Internal Brain Platform",
    "builder": {
      "tag": "Agentforce Builder Framework",
      "title": "Low-Code Agent Builder Interface",
      "description": "Empower your operations or IT managers to configure digital employees without technical overhead. Define specific Topics, assign granular workspace permissions, set strict execution guardrails, and track live test simulations within a unified enterprise control center.",
      "features": ["Visual topic definition canvases", "Granular access token boundaries", "Real-time builder simulation environments"]
    },
    "rag": {
      "tag": "Glean-Grade Unified Search",
      "title": "Cross-Silo Knowledge Synchronization",
      "description": "Syrix connects instantly with your internal file stores, code repositories, Confluence wikis, Slack archives, and multi-page technical compliance PDFs up to 50MB. Utilizing deep vector RAG, it instantly extracts accurate answers complete with precise source path citations.",
      "features": ["Read-only compliance indexing", "Extension-agnostic document tokenization", "Strict organizational role-based access"]
    },
    "mcp": {
      "tag": "Autonomous Internal Actions",
      "title": "Internal System Automation via MCP",
      "description": "Your internal agent does not just process text—it takes action. Through secure Model Context Protocol (MCP) handlers, the agent safely triggers IT deployment routines, updates project tracking pipelines in Jira, processes internal HR records, or registers software access keys natively.",
      "features": ["Bi-directional internal tool handshakes", "Fault-tolerant network drop recoveries", "Isolated runtime action sandboxes"]
    }
  },
  "interactive": {
    "title": "Inside the Agent Builder Workspace",
    "subtitle": "See how easy it is to define topics, link internal repositories, and watch your agent reason through an internal workflow query.",
    "steps": [
      {
        "title": "1. Topic & Boundary Assignment",
        "desc": "The administrator defines an 'IT Operations Specialist' persona inside the builder canvas, establishing exact behavioral guardrails and natural language instructions."
      },
      {
        "title": "2. Secure Resource Linking",
        "desc": "The admin selects internal knowledge collections: `Engineering_SOP_v4.pdf` and links the agent to the company's internal server deployment tool via MCP."
      },
      {
        "title": "3. Autonomous Internal Execution",
        "desc": "An employee asks: 'Our HCMC staging database server dropped connection. How do I reset the container securely?'. The agent processes the internal SOP via RAG, checks server state via MCP, and outputs exact instructions with the verified citation source."
      }
    ]
  },
  "faq": {
    "title": "Enterprise Compliance & Architecture FAQ",
    "subtitle": "Answering critical infrastructure queries from CIOs, Security Directors, and Operations Managers.",
    "items": [
      {
        "q": "How does Syrix ensure that sensitive HR or Financial documents do not leak across different employee tiers?",
        "a": "Syrix mirrors your enterprise's existing Role-Based Access Control (RBAC) security blueprints. During vector index creation and RAG retrieval cycles, the agent performs a secure metadata verification check against the querying employee's specific identity tokens. If an operator does not possess native read privileges for a source file, the agent acts as if that data block does not exist, keeping information perfectly ring-fenced."
      },
      {
        "q": "Can we deploy the Syrix AI Agent fully inside our isolated corporate private cloud infrastructure?",
        "a": "Yes. Recognizing strict enterprise compliance architectures, Syrix provides hybrid and fully isolated virtual private cloud (VPC) deployment blueprints. Your company's data collections, underlying vector databases, and Model Context Protocol integrations remain completely inside your designated security parameters, with zero external metadata callbacks."
      },
      {
        "q": "How long does it take for the internal agent to recognize updates made to corporate documentation?",
        "a": "Updates take effect in near real-time. Because our framework relies on advanced live-vector pipelining rather than static model retraining, modifying an internal policy is as simple as saving a document. The moment a revised SOP file is added to an internal Collection, the old vector nodes are invalidated, and subsequent employee queries leverage the newly updated intelligence within milliseconds."
      }
    ]
  }
}
Additions for messages/vi.json:
JSON
"aiAgent": {
  "hero": {
    "badge": "Syrix Agent Builder v2.5",
    "title": "Khởi Tạo Agent AI Tự Động Cho Vận Hành Doanh Nghiệp.",
    "description": "Dừng lãng phí 30% hiệu suất lao động vào các kho lưu trữ tri thức phân mảnh và quy trình nội bộ thủ công. Syrix AI Agent đóng vai trò là bộ não nội bộ bảo mật—kết nối trực tiếp với các kho dữ liệu, thống nhất tri thức Kỹ thuật/HR/Vận hành và tự động thực thi các tác vụ liên nền tảng."
  },
  "metrics": {
    "title": "Thống Nhất Trí Tuệ Tập Thể Doanh Nghiệp",
    "subtitle": "Thay thế hệ thống tra cứu tài liệu lỗi thời và hàng đợi ticket nặng nề bằng các đồng nghiệp kỹ thuật số tự chủ.",
    "items": [
      { "label": "Tốc độ Tra cứu Tri thức", "old": "25 Phút tìm kiếm chéo giữa các thư mục", "new": "Phản hồi RAG Ngữ cảnh tức thì < 2 Giây" },
      { "label": "Xử lý Yêu cầu Nội bộ", "old": "Hàng dài ticket IT/HR tồn đọng kéo dài", "new": "80% Tự động hóa Giải quyết Tự phục vụ" },
      { "label": "Chủ quyền Dữ liệu Doanh nghiệp", "old": "Rủi ro rò rỉ thông tin ra mô hình công cộng", "new": "100% Cô lập Bảo mật Vector Đa người dùng" }
    ]
  },
  "pillars": {
    "title": "Nền Tảng Bộ Não Nội Bộ Tối Ưu",
    "builder": {
      "tag": "Khung Kiến Trúc Agentforce Builder",
      "title": "Giao Diện Khởi Tạo Agent Thấp Code (Low-Code)",
      "description": "Cấp quyền cho các nhà quản lý vận hành hoặc Giám đốc CNTT tự cấu hình đồng nghiệp số mà không cần chuyên môn lập trình sâu. Định nghĩa các Chủ đề (Topics) chuyên biệt, phân quyền chi tiết trong không gian làm việc, thiết lập ranh giới thực thi và chạy thử nghiệm giả lập ngay trên một trung tâm điều khiển tập trung.",
      "features": ["Bảng vẽ trực quan định nghĩa chủ đề", "Ranh giới mã token truy cập chi tiết", "Môi trường giả lập kiểm thử thời gian thực"]
    },
    "rag": {
      "tag": "Đồng Bộ Tri Thức Chuẩn Glean",
      "title": "Đồng Bộ Hóa Tri Thức Liên Hệ Thống",
      "description": "Syrix kết nối ngay lập tức với các kho lưu trữ tệp, kho mã nguồn, wiki Confluence, lịch sử Slack và các file PDF quy chuẩn kỹ thuật lên đến 50MB. Sử dụng công nghệ Vector RAG chuyên sâu, Agent trích xuất câu trả lời chính xác đi kèm đường dẫn nguồn trích dẫn minh bạch.",
      "features": ["Chỉ mục tuân thủ chế độ Read-only", "Phân tích tài liệu không giới hạn định dạng", "Phân quyền truy cập nghiêm ngặt theo vai trò"]
    },
    "mcp": {
      "tag": "Tự Động Hóa Tác Vụ Nội Bộ",
      "title": "Tự Động Hóa Hệ Thống Nội Bộ Qua MCP",
      "description": "Agent nội bộ của bạn không chỉ xử lý văn bản đơn thuần—nó thực thi hành động. Thông qua các trình xử lý Model Context Protocol (MCP) bảo mật, Agent tự động kích hoạt các tiến trình triển khai CNTT, cập nhật tiến độ dự án trên Jira, xử lý hồ sơ nhân sự hoặc cấp khóa truy cập phần mềm.",
      "features": ["Bắt tay kết nối hai chiều công cụ nội bộ", "Tự phục hồi lỗi khi gián đoạn mạng", "Môi trường sandbox thực thi hành động tách biệt"]
    }
  },
  "interactive": {
    "title": "Bên Trong Không Gian Khởi Tạo Agent Builder",
    "subtitle": "Theo dõi cách thức dễ dàng để định nghĩa chủ đề, liên kết tài liệu nội bộ và xem Agent suy luận xử lý một yêu cầu vận hành thực tế.",
    "steps": [
      {
        "title": "1. Thiết lập Chủ đề & Ranh giới",
        "desc": "Nhà quản trị định nghĩa hồ sơ năng lực 'Chuyên viên Vận hành CNTT' trên bảng vẽ builder, thiết lập các chỉ thị ngôn ngữ tự nhiên và quy tắc ứng xử nghiêm ngặt."
      },
      {
        "title": "2. Liên kết Tài nguyên Bảo mật",
        "desc": "Admin lựa chọn các bộ sưu tập tài liệu tri thức nội bộ: file `Engineering_SOP_v4.pdf` và kết nối Agent với công cụ triển khai máy chủ nội bộ thông qua cổng MCP."
      },
      {
        "title": "3. Tự chủ Thực thi Nghiệp vụ",
        "desc": "Nhân viên hỏi: 'Máy chủ staging tại HCM bị mất kết nối DB. Làm sao để reset container an toàn?'. Agent phân tích tài liệu SOP qua RAG, kiểm tra trạng thái máy chủ qua MCP và xuất ra quy trình xử lý chính xác kèm nguồn dẫn."
      }
    ]
  },
  "faq": {
    "title": "Câu Hỏi Thường Gặp Về Tuân Thủ & Kiến Trúc Doanh Nghiệp",
    "subtitle": "Giải đáp các thắc mắc hạ tầng cốt lõi từ các CIO, Giám đốc Bảo mật và Quản lý Vận hành.",
    "items": [
      {
        "q": "Syrix làm thế nào để đảm bảo tài liệu nhân sự hoặc tài chính nhạy cảm không bị rò rỉ giữa các cấp bậc nhân viên?",
        "a": "Syrix đồng bộ hoàn toàn với mô hình Phân quyền dựa trên vai trò (RBAC) sẵn có của doanh nghiệp. Trong suốt chu kỳ lập chỉ mục vector và bốc tách RAG, Agent thực hiện kiểm tra đối chiếu mã xác thực danh tính của nhân viên đang truy vấn. Nếu nhân viên không có quyền đọc file gốc, Agent sẽ xử lý như thể khối dữ liệu đó không tồn tại, giữ thông tin an toàn tuyệt đối."
      },
      {
        "q": "Chúng tôi có thể triển khai Syrix AI Agent hoàn toàn trong hạ tầng đám mây riêng tư (VPC) isolated của doanh nghiệp không?",
        "a": "Có. Để đáp ứng các tiêu chuẩn tuân thủ nghiêm ngặt của khối doanh nghiệp lớn, Syrix cung cấp các mô hình triển khai hybrid và đám mây riêng tư ảo (VPC) biệt lập. Toàn bộ tài liệu tri thức, cơ sở dữ liệu vector và các kết nối công cụ MCP của bạn hoàn toàn nằm trong ranh giới bảo mật của doanh nghiệp, không gửi dữ liệu ra ngoài."
      },
      {
        "q": "Mất bao lâu để Agent nội bộ nhận diện được các cập nhật mới trong tài liệu quy định của doanh nghiệp?",
        "a": "Cập nhật có hiệu lực gần như thời gian thực. Vì hệ thống sử dụng đường ống dẫn vector động thay vì tái huấn luyện mô hình tĩnh, việc thay đổi chính sách đơn giản là lưu đè file mới. Ngay khi file SOP sửa đổi được đưa vào Bộ sưu tập, các node cũ bị hủy và các truy vấn tiếp theo của nhân viên sẽ đọc dữ liệu mới sau vài mili-giây."
      }
    ]
  }
}
2. STRUCTURAL CONTENT LAYOUT ARCHITECTURE
Refactor or construct app/[locale]/products/ai-agent/page.tsx directly at the root workspace following this high-converting editorial design system:

SECTION 1: THE AGENTFORCE-INSPIRED HERO CANVAS
[ ] Left Text Column: Render a small tech badge using aiAgent.hero.badge. Display the main title aiAgent.hero.title in clean massive bold layout styling, followed by the description narrative aiAgent.hero.description. Inject a primary action button labeled "Book a Private Demo" with a soft neon cyan radial background glow.

[ ] Right Column (The Interactive Builder Canvas Mockup): Build a responsive dashboard panel representing the "Syrix Agent Builder Interface". Show a visual configuration checklist tree containing nodes: [Topic: IT Operations], [Knowledge Config: Linked 14 Files (RAG)], [Action Tools: 4 MCP Connected], and an animated live terminal log tracing system status variables.

SECTION 2: THE BUSINESS MARGIN CARD GRID
[ ] Render the macro header layout blocks (aiAgent.metrics.title & subtitle).

[ ] Process the metric comparisons array inside a 3-column structural layout grid (grid grid-cols-1 md:grid-cols-3 gap-8 mt-12). Each card must clearly contrast the old legacy operation friction with the new autonomous Syrix speed metrics.

SECTION 3: ALTERNATING PRODUCT FEATURE CAPABILITIES
[ ] Render the 3 core product pillars (aiAgent.pillars.builder, rag, and mcp) using a premium, staggered alternating grid layout (grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16).

[ ] Ensure that odd-indexed pillars display text content on the left and illustration layout frames on the right, while even-indexed pillars flip orientation on large viewports.

[ ] Detail all specific system capabilities arrays safely to satisfy complex scanning requirements.

SECTION 4: THE LOW-CODE WORKSPACE TIMELINE SIMULATOR
[ ] Recreate an explicit horizontal or vertical workflow interactive sequence displaying the 3 steps from aiAgent.interactive.steps.

[ ] For each timeline block, include a small rounded icon wrapper, the bolded Title, and a clean descriptive paragraph. Accompany the timeline sequence with a dark workspace dashboard graphic visualizing a secure internal query running its internal RAG citation mapping pipeline.

SECTION 5: ACCORDION COMPLIANCE MATRIX (FAQ)
[ ] Implement a smooth, responsive accordion stack to map the 3 enterprise compliance items from aiAgent.faq.items.

[ ] Typography must display distinct bold questions and clear, thorough paragraph response arrays to neutralize security concerns from IT managers.

3. STRICT TYPE SAFETY CASTING FORMULAS
[ ] Every iteration sequence mapping data structures from en.json or vi.json must be wrapped within a rigorous inline type-casting envelope to avoid breaking the Next.js compiler:

TypeScript
{/* Array Mapping Enforcement Formula */}
{((tRaw('aiAgent.metrics.items') as Array<{ label: string; old: string; new: string }>) || [])?.map((item, index) => (
  <motion.div key={index} ...>
    <h4>{item.label}</h4>
    <p>{item.old}</p>
    <p>{item.new}</p>
  </motion.div>
))}
[ ] Verify that all structural icons and framework dependencies (Framer Motion, global layout Navbar, CTA, Footer files) are perfectly compiled with clean root directory access rules.