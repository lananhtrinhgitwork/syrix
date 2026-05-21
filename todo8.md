# SYRIX.AI — PHASE 6: VOICE PROCESSING SUITE LANDING PAGES (TODO8)

> **Objective:** Refactor and enrich the product landing pages for the Speech to Text and Text to Speech processing systems.
> **Content Strategy:** Friendly, high-readability narrative inspired by Salesforce Agentforce. Focus on demonstrating clear operational value to enterprise C-levels, Customer Experience (CX) Directors, and Operations Managers.
> **Design Philosophy:** Clean tech aesthetic utilizing interactive audio waveforms, visual log simulators, glowing state nodes, and smooth height-animated layouts.
> **Architecture Constraint:** Strictly NO `src` folder. Target directory paths map to your designated product endpoints for `speech-to-text` and `text-to-speech`.

---

## 1. DYNAMIC i18n TEXT MATRICES (FOR TRANSLATION FILES)

Please merge these complete text blocks directly into your localized JSON directories (`messages/en.json` and `messages/vi.json`) under clean, explicit product keys.

### Merge into `messages/en.json`:
```json
{
  "speechToText": {
    "hero": {
      "badge": "Syrix Speech to Text Core",
      "title": "Convert Live Voice Streams Into Clear Corporate Data.",
      "description": "Stop letting enterprise phone calls and customer audio interactions disappear. Syrix Speech to Text transcribes multi-speaker voice calls, online support sessions, and operational meetings in real-time with up to 99.2% accuracy—ensuring every critical detail is saved."
    },
    "metrics": {
      "title": "Voice Intelligence Metrics",
      "subtitle": "How replacing manual quality sampling with automated voice processing scales operational visibility.",
      "items": [
        { "label": "Transcription Accuracy Rate", "old": "High word errors with generic legacy speech readers", "new": "Near-perfect clarity using specialized enterprise vocabulary" },
        { "label": "Processing Speed & Latency", "old": "Hours of delay with batch transcription queues", "new": "Instant streaming text outputs under 200ms" },
        { "label": "Compliance Verification Overhead", "old": "Time-consuming manual call sample listening", "new": "100% Automated text analysis and keyword indexing" }
      ]
    },
    "pillars": {
      "title": "Engineered for Enterprise Conversations",
      "diarization": {
        "tag": "Speaker Separation",
        "title": "Multi-Speaker Detection & Identity Tracking",
        "description": "Syrix automatically separates multiple voices on a single call. It clearly isolates your customer's questions from your staff's answers, organizing the text into a clean script format complete with precise timestamps.",
        "features": ["Overlapping conversation parsing", "Adaptive voice tone matching", "Millisecond-level time marking"]
      },
      "vocabulary": {
        "tag": "Smart Nomenclature",
        "title": "Custom Business Vocabulary Tuning",
        "description": "Standard speech engines routinely misspell technical model numbers, internal software IDs, and brand terms. Syrix learns your company's proprietary jargon instantly by reading your uploaded document collections.",
        "features": ["Instant product serial string filtering", "Automated acronym formatting", "Smart multi-language phrase parsing"]
      }
    },
    "simulator": {
      "title": "See Streaming Speech to Text in Action",
      "subtitle": "Click to play a mock customer conversation and watch how Syrix transcribes sentences and extracts action items instantly.",
      "buttonLabel": "Play Sample Audio Stream",
      "statusLabel": "Processing Live Audio...",
      "transcriptSample": "[Client Partner]: Hello, I need to open a high-priority support ticket for our office node in Da Nang, account ID DX-9042. The main server dropped connection right after the update.\n[Digital Assistant]: Gained context. Initiating diagnostic verification for Da Nang server block DX-9042.",
      "insightSummary": "Automated Action Extracted: Successfully opened a High-Priority Infrastructure Ticket for Node DX-9042."
    }
  },
  "textToSpeech": {
    "hero": {
      "badge": "Syrix Text to Speech Core",
      "title": "Generate Warm, Lifelike Brand Voices in Real-Time.",
      "description": "Humanize your automated system communication. Syrix Text to Speech converts raw text documentation into natural, high-fidelity human speech. Deliver empathetic customer care phone interactions and audio prompts without expensive recording sessions."
    },
    "metrics": {
      "title": "Redefining System Expressiveness",
      "subtitle": "Shift your customer channels away from robotic automated warnings toward friendly conversational brand voices.",
      "items": [
        { "label": "Voice Realism Standard", "old": "Robotic, metallic phrasing from legacy readers", "new": "Warm, natural pacing indistinguishable from real professionals" },
        { "label": "Audio Synthesis Latency", "old": "Noticeable lag causing unnatural gaps in conversation", "new": "Fluid voice stream delivery under 90ms" },
        { "label": "Identity Customization Scale", "old": "Fixed libraries of generic voice templates", "new": "Exclusive custom voice profiles built for your brand" }
      ]
    },
    "pillars": {
      "title": "Advanced Acoustic Modeling Layers",
      "cloning": {
        "tag": "Brand Voice Profiles",
        "title": "Custom Enterprise Voice Training",
        "description": "Create a distinct voice for your company. Using a short audio recording sample, Syrix builds a proprietary voice matrix that matches your preferred style, safely locked within your private operational cloud environment.",
        "features": ["Timbre signature security locks", "Multi-accent consistency matching", "Cross-lingual speech transfer options"]
      },
      "inflection": {
        "tag": "Conversational Empathy",
        "title": "Dynamic Contextual Emotional Inflection",
        "description": "Robotic announcers push users away. Syrix analyzes the emotional tone of your text dynamically—automatically modifying speech speed, pitch changes, and natural breathing pauses to convey empathy or urgency.",
        "features": ["Natural punctuation breathing intervals", "Dynamic questioning tone adjustment", "Granular reading speed control toggles"]
      }
    },
    "simulator": {
      "title": "Test Our Ultra-Realistic Voice Styles",
      "subtitle": "Choose an emotional profile below to see how Syrix instantly translates text into natural corporate speech audio.",
      "inputPlaceholder": "Type your custom system notification message here...",
      "defaultText": "Welcome to Syrix Enterprise Network. Your internal corporate data has been vectorized safely, and all system tools are online.",
      "stylesList": ["Professional Executive Persona", "Empathetic Support Assistant", "Urgent Alert Operator"]
    }
  },
  "voiceSuiteFaq": {
    "title": "Voice Systems Security & Architecture FAQ",
    "items": [
      {
        "q": "How does Syrix secure customized biometric brand voice profiles?",
        "a": "Security is enforced at the system core. Every corporate voice profile generated is encrypted and isolated within your separate enterprise database workspace. Profiles cannot be accessed by external interfaces, completely removing the risk of unauthorized use or digital identity duplication."
      },
      {
        "q": "What is the collective latency impact when running Speech to Text and Text to Speech together on a live call?",
        "a": "Our conversational speech systems operate on highly optimized multi-thread processing pipelines. The total combined processing loop delay—from user voice input, through transcription, data reasoning, and automated speech output—remains well under 350ms, matching natural human dialogue pacing."
      }
    ]
  }
}
Merge into messages/vi.json:
JSON
{
  "speechToText": {
    "hero": {
      "badge": "Syrix Speech to Text Core",
      "title": "Chuyển Đổi Luồng Thoại Thành Dữ Liệu Doanh Nghiệp Minh Bạch.",
      "description": "Đừng để các cuộc gọi tổng đài và tương tác thoại của đối tác biến mất vô ích. Syrix Speech to Text tự động chuyển đổi các cuộc gọi hỗ trợ, phiên tư vấn và cuộc họp nội bộ thành văn bản thời gian thực với độ chính xác lên tới 99.2%—đảm bảo mọi thông tin cốt lõi đều được lưu trữ."
    },
    "metrics": {
      "title": "Chỉ Số Đo Lường Trí Tuệ Thoại",
      "subtitle": "Cách thức chuyển dịch từ việc lấy mẫu kiểm định thủ công sang tự động hóa xử lý âm thanh giúp mở rộng kiểm soát vận hành.",
      "items": [
        { "label": "Tỷ lệ Chính xác Chuyển đổi", "old": "Dễ sai lệch từ ngữ với các bộ đọc giọng nói thông thường", "new": "Rõ ràng tuyệt đối nhờ bộ từ vựng chuyên ngành doanh nghiệp" },
        { "label": "Tốc độ Xử lý Luồng Thoại", "old": "Hàng giờ trì hoãn xử lý trong các hàng chờ tệp tin", "new": "Đầu ra văn bản streaming tức thì dưới 200ms" },
        { "label": "Chi phí Kiểm định Tuân thủ", "old": "Tốn nhiều giờ nghe ghi âm xác suất thủ công", "new": "100% Tự động phân tích từ khóa và lập chỉ mục văn bản" }
      ]
    },
    "pillars": {
      "title": "Thiết Kế Chuyên Biệt Cho Hội Thoại Doanh Nghiệp",
      "diarization": {
        "tag": "Tách Kênh Người Nói",
        "title": "Phân Tách Đa Người Nói & Theo Dõi Ý Định",
        "description": "Syrix tự động nhận diện và bóc tách các giọng nói khác nhau trong cùng cuộc gọi. Hệ thống tách biệt rõ ràng câu hỏi của khách hàng và câu trả lời của chuyên viên, sắp xếp thành một kịch bản sạch sẽ kèm mốc thời gian chi tiết.",
        "features": ["Xử lý hội thoại nói đè nhau", "Đồng bộ âm học theo tông giọng", "Đóng dấu mốc thời gian chính xác mili-giây"]
      },
      "vocabulary": {
        "tag": "Từ Vựng Thông Minh",
        "title": "Tối Ưu Từ Vựng Chuyên Ngành Doanh Nghiệp",
        "description": "Các công cụ đọc tiếng nói thông thường luôn viết sai tên mã linh kiện kỹ thuật, mã phần mềm nội bộ hay tên thương hiệu. Syrix tự học các thuật ngữ riêng biệt này ngay lập tức bằng cách đọc qua các bộ sưu tập tài liệu bạn tải lên.",
        "features": ["Lọc chuẩn chuỗi ký tự và số series", "Tự động viết hoa từ viết tắt viết tắt", "Phân tích cụm từ đa ngôn ngữ thông minh"]
      }
    },
    "simulator": {
      "title": "Trải Nghiệm Hệ Thống Streaming Speech to Text",
      "subtitle": "Bấm để chạy thử một đoạn hội thoại mẫu và xem Syrix bóc tách văn bản cùng hành động hệ thống tức thì.",
      "buttonLabel": "Chạy Thử Luồng Âm Thanh Mẫu",
      "statusLabel": "Đang Xử Lý Âm Thanh Trực Tiếp...",
      "transcriptSample": "[Đối tác]: Alo, tôi cần mở một ticket hỗ trợ khẩn cấp cho văn phòng tại Đà Nẵng, mã tài khoản DX-9042. Máy chủ chính bị mất kết nối ngay sau đợt cập nhật.\n[Trợ lý số]: Đã nhận ngữ cảnh. Đang kích hoạt quét chẩn đoán cho cụm máy chủ Đà Nẵng DX-9042.",
      "insightSummary": "Hành động trích xuất tự động: Khởi tạo thành công Ticket hạ tầng ưu tiên cao cho tài khoản DX-9042."
    }
  },
  "textToSpeech": {
    "hero": {
      "badge": "Syrix Text to Speech Core",
      "title": "Tổng Hợp Giọng Nói Thương Hiệu Ấm Áp Thời Gian Thực.",
      "description": "Cá nhân hóa hệ thống giao tiếp tự động của doanh nghiệp bạn. Syrix Text to Speech chuyển đổi các văn bản quy trình thô thành giọng nói nhân tạo tự nhiên, đầy biểu cảm. Vận hành tổng đài chăm sóc khách hàng ấm áp mà không cần phòng thu đắt đỏ."
    },
    "metrics": {
      "title": "Định Nghĩa Lại Biểu Cảm Thoại Tự Động",
      "subtitle": "Dịch chuyển kênh tương tác tự động từ âm thanh thông báo kim loại robot sang giọng nói đại diện thương hiệu thân thiện.",
      "items": [
        { "label": "Chỉ số Giọng nói Chân thực", "old": "Phát âm kim loại, ngắt quãng khô khốc từ robot đọc cũ", "new": "Nhịp điệu tự nhiên truyền cảm, không khác biệt chuyên viên thật" },
        { "label": "Độ trễ Tổng hợp Tệp Thoại", "old": "Độ trễ lớn gây ra những khoảng lặng ngắt quãng khó chịu", "new": "Truyền tải luồng âm thanh mượt mà dưới 90ms" },
        { "label": "Mức độ Tùy biến Bản sắc", "old": "Thư viện cố định gồm các giọng đọc mẫu công cộng", "new": "Tạo dựng hồ sơ giọng nói độc quyền thiết kế riêng cho thương hiệu" }
      ]
    },
    "pillars": {
      "title": "Các Lớp Mô Hình Hóa Âm Học Chuyên Sâu",
      "cloning": {
        "tag": "Giọng Nói Thương Hiệu",
        "title": "Nhân Bản Giọng Nói Doanh Nghiệp Độc Quyền",
        "description": "Xây dựng bản sắc âm thanh riêng cho công ty bạn. Chỉ cần một đoạn mẫu ghi âm ngắn, Syrix thiết lập một mô hình giọng nói độc quyền, được lưu trữ và khóa an toàn trong vùng điện toán đám mây riêng biệt của doanh nghiệp.",
        "features": ["Khóa bảo mật chữ ký âm sắc", "Đồng bộ nhất quán đa vùng miền", "Cơ chế chuyển đổi ngôn ngữ linh hoạt"]
      },
      "inflection": {
        "tag": "Thấu Hiểu Ngữ Cảnh",
        "title": "Điều Chỉnh Sắc Thái Ngữ Cảnh Linh Hoạt",
        "description": "Các bộ đọc thông báo vô cảm sẽ làm giảm tương tác của người dùng. Syrix tự động phân tích sắc thái câu chữ—tự điều phối tốc độ, cao độ và khoảng lấy hơi tự nhiên để thể hiện sự đồng cảm chuyên nghiệp hoặc tính khẩn cấp.",
        "features": ["Ngắt nghỉ lấy hơi tự nhiên theo dấu câu", "Modulation giọng điệu linh hoạt cho câu hỏi", "Thanh điều khiển tốc độ nhịp điệu đọc chi tiết"]
      }
    },
    "simulator": {
      "title": "Thử Nghiệm Các Phong Cách Biểu Cảm Giọng Nói",
      "subtitle": "Chọn một hồ sơ biểu cảm bên dưới để xem Syrix dịch chuỗi chữ thành giọng đọc tự nhiên trong tích tắc.",
      "inputPlaceholder": "Nhập chuỗi thông báo hệ thống của bạn vào đây...",
      "defaultText": "Chào mừng bạn đến với Mạng lưới Doanh nghiệp Syrix. Cơ sở tri thức của bạn đã được vector hóa an toàn, các công cụ hệ thống đã sẵn sàng.",
      "stylesList": ["Giọng đọc Giám đốc Chuyên nghiệp", "Giọng đọc Trợ lý Ấm áp", "Giọng đọc Thông báo Khẩn cấp"]
    }
  },
  "voiceSuiteFaq": {
    "title": "Câu Hỏi Thường Gặp Về Hạ Tầng & Bảo Mật Hệ Thống Thoại",
    "items": [
      {
        "q": "Syrix làm thế nào để bảo vệ an toàn cho các hồ sơ giọng nói độc quyền của doanh nghiệp?",
        "a": "Bảo mật được thực thi ngay từ lõi hệ thống. Mọi mô hình giọng nói nhân bản được tạo ra đều được mã hóa hoàn toàn và cô lập trong phân vùng không gian làm việc độc lập của bạn. Các dữ liệu này không thể bị truy cập bởi giao diện bên ngoài, triệt tiêu rủi ro sao chép danh tính số trái phép."
      },
      {
        "q": "Tổng độ trễ khi kết hợp đồng thời cả Speech to Text và Text to Speech trong một cuộc gọi trực tiếp là bao nhiêu?",
        "a": "Hệ thống thoại của chúng tôi vận hành trên các đường ống xử lý đa luồng tối ưu. Tổng độ trễ tích lũy cho toàn bộ chu trình hội thoại—từ lúc nhận giọng nói người dùng, chuyển đổi văn bản, AI suy luận, cho đến lúc tổng hợp giọng nói trả lời đầu ra—nằm ở mức dưới 350ms, tương thích hoàn hảo với nhịp điệu đàm thoại tự nhiên của con người."
      }
    ]
  }
}
2. LANDING PAGES STRUCTURAL LAYOUT WORKSPACE SPECIFICATIONS
Please update or create the standalone landing pages exactly within your root project framework configuration.

PRODUCT ELEMENT A: THE SPEECH TO TEXT INTERFACE
[ ] Hero Block: Render a split-grid header framework. Left side uses speechToText.hero.badge, title, and friendly description text. Right side holds a custom dynamic CSS Waveform Bar grid that expands and contracts via css scale keyframes to visually show a continuous real-time voice capture simulation frame.

[ ] Metrics Alignment: Map out the speechToText.metrics.items array inside a 3-column container setup, highlighting the transition from high-error legacy structures into instant corporate clarity metrics.

[ ] Asymmetric Feature Blocks: Map the two capability metrics (speechToText.pillars.diarization and speechToText.pillars.vocabulary) using alternating rows. Odd cards align texts on the left; even cards flip copy elements to the right side on large viewports smoothly.

[ ] Streaming Transcription Terminal Showcase: Build a call log component. Features a control element with speechToText.simulator.buttonLabel. Clicking it animates a streaming text display box rolling out speechToText.simulator.transcriptSample word-by-word, finalized by an alert block outputting speechToText.simulator.insightSummary.

PRODUCT ELEMENT B: THE TEXT TO SPEECH INTERFACE
[ ] Hero Block: High-polish design stack displaying textToSpeech.hero.title. Right column includes an elevated, luminous circular sound core diagram that rotates smoothly to represent natural voice generation processes.

[ ] Realism Index deck: Map textToSpeech.metrics.items array into distinct response metric decks using clear border layouts and dark backgrounds.

[ ] Acoustic Innovation Rows: Map specialized elements (textToSpeech.pillars.cloning and textToSpeech.pillars.inflection) into alternating graphic cards. Wrap graphic placeholders in premium glassmorphic boxes (bg-[#12121a]/50 border border-white/5 backdrop-blur-md).

[ ] Voice Generation Playground Sandbox: Create an interactive testing frame. Contains an editable textarea pre-populated with textToSpeech.simulator.defaultText. Directly below, render the three styling parameters from textToSpeech.simulator.stylesList into horizontal selector pills. Selecting an option triggers a pulsing waveform overlay line, visually representing active model synthesis processing.

3. COMPILER TYPE-SAFETY CODE RULES
[ ] Prevent any layout breakdown boundaries. Always apply explicit TypeScript type declarations whenever processing data mappings from the i18n JSON tree:

TypeScript
{/* Data Evaluation Mapping Schema */}
{((tRaw('speechToText.metrics.items') as Array<{ label: string; old: string; new: string }>) || [])?.map((metric, idx) => (
  <div key={idx} className="border border-white/5 bg-[#12121a]/30 p-6 rounded-2xl">
    <span className="text-sm font-bold block mb-2 text-white">{metric.label}</span>
    <div className="text-xs text-muted-foreground line-through">{metric.old}</div>
    <div className="text-sm text-cyan-400 font-semibold mt-1">{metric.new}</div>
  </div>
))}
[ ] Confirm all core interface files, Lucide icons, and layout utilities are called properly without referencing non-existent src subdirectories.