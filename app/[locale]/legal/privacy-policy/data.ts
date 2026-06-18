export function infoSecData(lang: string) {
  if (lang === 'vi') {
    return {
      hero: {
        eyebrow: "PHÁP LÝ",
        title: "Chính sách An toàn Thông tin",
        description: "Cam kết của XperC về việc bảo vệ tính bảo mật, tính toàn vẹn và tính sẵn sàng của thông tin trên tất cả các hoạt động và dự án khách hàng.",
        effective: "Hiệu lực: Tháng 5 năm 2026"
      },
      nav: {
        title: "TRÊN TRANG NÀY",
        items: [
          { id: "introduction", label: "Giới thiệu" },
          { id: "purpose-scope", label: "Mục đích & Phạm vi" },
          { id: "core-principles", label: "Nguyên tắc Cốt lõi" },
          { id: "responsibilities", label: "Trách nhiệm" },
          { id: "policy-framework", label: "Khung Chính sách" },
          { id: "data-protection", label: "Bảo vệ Dữ liệu" },
          { id: "incident-response", label: "Ứng phó Sự cố" },
          { id: "enforcement", label: "Thực thi" },
          { id: "faqs", label: "Câu hỏi Thường gặp" },
          { id: "contact", label: "Liên hệ" }
        ]
      },
      content: {
        sections: [
          {
            id: "introduction",
            title: "Giới thiệu",
            body: "<p class='mb-4'>Bảo mật thông tin là một lĩnh vực toàn diện — việc áp dụng hay không áp dụng nó đều ảnh hưởng đến mọi khía cạnh của tổ chức. Tại XperC, Chương trình An toàn Thông tin của chúng tôi được xây dựng nhằm bảo vệ Tính bảo mật, Tính toàn vẹn và Tính sẵn sàng của tất cả các tài sản thông tin được các khách hàng, đối tác và các bên liên quan giao phó.</p><p>Là một công ty tư vấn AI, XperC xử lý dữ liệu kinh doanh nhạy cảm, thông tin chiến lược và quy trình độc quyền. Chúng tôi nhận thức rằng khả năng quản lý và bảo vệ các tài sản này ảnh hưởng trực tiếp đến sự thành công của khách hàng và của chính chúng tôi. Chính sách này thiết lập khung quản lý an toàn thông tin của XperC trong toàn bộ hoạt động.</p>"
          },
          {
            id: "purpose-scope",
            title: "Mục đích & Phạm vi",
            subsections: [
              {
                title: "Mục đích",
                body: "Mô tả các hành động và ứng xử cần thiết để đảm bảo rằng mọi biện pháp phòng ngừa thích hợp đều được thực hiện nhằm tránh các rủi ro không đáng có cho XperC, các đối tác kinh doanh, khách hàng và các bên liên quan — đồng thời đảm bảo việc cung cấp dịch vụ tư vấn AI hiệu quả."
              },
              {
                title: "Phạm vi",
                body: "Chính sách này áp dụng đồng đều cho mọi cá nhân, tổ chức hoặc quy trình có tương tác với tài nguyên thông tin của XperC — bao gồm nhân viên, nhà thầu, tư vấn viên, nhà cung cấp và các hệ thống tự động. Phạm vi bao gồm tất cả tài sản thông tin dù được lưu trữ tại chỗ, trên đám mây hay được xử lý trong quá trình thực hiện dự án cho khách hàng."
              }
            ]
          },
          {
            id: "core-principles",
            title: "Nguyên tắc Cốt lõi",
            body: "<p class='mb-8'>Bảo mật thông tin của XperC được xây dựng trên Bộ ba CIA — ba nguyên tắc nền tảng định hướng mọi quyết định về cách thức xử lý, lưu trữ và chia sẻ thông tin.</p>",
            diagram: {
               confidentialityTitle: "Tính Bảo mật",
               confidentialityDesc: "Thông tin chỉ được truy cập bởi những người có thẩm quyền. XperC áp dụng kiểm soát theo nguyên tắc “cần biết” nghiêm ngặt trên tất cả hệ thống nội bộ và các dự án khách hàng — đảm bảo dữ liệu nhạy cảm không bao giờ tiếp cận được với các bên không được phép.",
               integrityTitle: "Tính Toàn vẹn",
               integrityDesc: "Tính chính xác và đầy đủ của thông tin luôn được bảo vệ. XperC ngăn chặn các hành vi sửa đổi trái phép trong suốt vòng đời của dữ liệu — từ khi thu thập đến khi hủy — duy trì độ tin cậy của mọi bản ghi.",
               availabilityTitle: "Tính Sẵn sàng",
               availabilityDesc: "Các tài sản thông tin — hệ thống, mạng và dữ liệu — luôn có thể truy cập và sử dụng được khi các bên có thẩm quyền cần đến. XperC duy trì các biện pháp kiểm soát tính liên tục để ngăn ngừa các gián đoạn có thể ảnh hưởng đến khách hàng hoặc hoạt động nội bộ."
            }
          },
          {
            id: "responsibilities",
            title: "Trách nhiệm",
            subsections: [
              {
                title: "Ban Lãnh đạo Cấp cao",
                list: [
                  "Đảm bảo Chương trình An toàn Thông tin dựa trên rủi ro được triển khai và duy trì",
                  "Tích hợp an toàn thông tin vào kế hoạch chiến lược và vận hành",
                  "Phân bổ nguồn lực tài chính và nhân sự đầy đủ cho an toàn thông tin",
                  "Chỉ định Cán bộ An toàn Thông tin với thẩm quyền phù hợp",
                  "Nhận báo cáo hàng năm về hiệu quả của Chương trình An toàn Thông tin"
                ]
              },
              {
                title: "Cán bộ An toàn Thông tin",
                list: [
                  "Chủ trì Ủy ban An toàn Thông tin và cung cấp cập nhật tình trạng định kỳ",
                  "Quản lý tuân thủ các yêu cầu pháp lý, quy định và hợp đồng",
                  "Đánh giá rủi ro đối với tất cả tài nguyên thông tin của XperC và dữ liệu khách hàng",
                  "Phát triển và duy trì các chính sách, quy trình và hướng dẫn hỗ trợ",
                  "Đảm bảo tất cả nhân viên được đào tạo nâng cao nhận thức bảo mật phù hợp",
                  "Giám sát đánh giá rủi ro nhà cung cấp và quản lý bảo mật bên thứ ba"
                ]
              },
              {
                title: "Ủy ban An toàn Thông tin",
                list: [
                  "Xây dựng, xem xét và đề xuất các chính sách an toàn thông tin",
                  "Phê duyệt các quy trình, tiêu chuẩn và hướng dẫn hỗ trợ",
                  "Đánh giá tính đầy đủ và hiệu quả của các biện pháp kiểm soát bảo mật",
                  "Xác định các thay đổi mối đe dọa đáng kể và lỗ hổng bảo mật",
                  "Xem xét thông tin sự cố bảo mật và đề xuất các hành động tiếp theo",
                  "Thúc đẩy giáo dục và nâng cao nhận thức bảo mật trong toàn XperC"
                ]
              },
              {
                title: "Toàn thể Nhân viên, Nhà thầu & Bên thứ ba",
                list: [
                  "Hiểu và tuân thủ Chương trình An toàn Thông tin",
                  "Ký xác nhận và đồng ý tuân theo các chính sách và hướng dẫn hiện hành",
                  "Sử dụng tài nguyên thông tin của XperC tuân thủ tất cả chính sách bảo mật",
                  "Bảo vệ thông tin cá nhân, riêng tư và nhạy cảm khỏi việc sử dụng hoặc tiết lộ trái phép",
                  "Báo cáo các sự cố hoặc điểm yếu bảo mật bị nghi ngờ cho Cán bộ An toàn Thông tin"
                ]
              }
            ]
          },
          {
            id: "policy-framework",
            title: "Khung Chính sách",
            intro: "XperC duy trì Chương trình An toàn Thông tin bao gồm các chính sách, tiêu chuẩn, quy trình và hướng dẫn theo chủ đề, bảo vệ tài nguyên thông tin bằng các biện pháp kiểm soát hành chính, vật lý và kỹ thuật — đồng thời hỗ trợ các mục tiêu kinh doanh.",
            compliance: [
              { label: "ISO/IEC 27002", text: "Tiêu chuẩn quốc tế về các biện pháp kiểm soát an toàn thông tin" },
              { label: "NIST CSF", text: "Khung An ninh mạng để nhận diện và quản lý rủi ro" },
              { label: "Luật An ninh mạng Việt Nam", text: "Luật số 24/2018/QH14 và các quy định liên quan" },
              { label: "Nghĩa vụ Hợp đồng", text: "Thỏa thuận với khách hàng và điều khoản xử lý dữ liệu" }
            ],
            outro: "Chương trình được xem xét ít nhất hàng năm hoặc khi có những thay đổi đáng kể về môi trường bảo mật hoặc hoạt động kinh doanh."
          },
          {
            id: "data-protection",
            title: "Bảo vệ Dữ liệu",
            body: "<p class='mb-4'>XperC triển khai các biện pháp kiểm soát nhiều lớp để bảo vệ tài sản thông tin qua tất cả các giai đoạn của vòng đời dữ liệu — thu thập, xử lý, lưu trữ, truyền tải và hủy bỏ.</p>",
            table: [
              { label: "Kiểm soát Truy cập", text: "Quản lý truy cập theo vai trò với nguyên tắc ít đặc quyền nhất áp dụng cho tất cả hệ thống và dữ liệu khách hàng." },
              { label: "Mã hóa", text: "Dữ liệu được mã hóa trong quá trình truyền (TLS 1.2+) và khi lưu trữ bằng các thuật toán chuẩn công nghiệp." },
              { label: "Ghi nhật ký Kiểm toán", text: "Nhật ký hoạt động được duy trì cho mọi truy cập vào tài nguyên thông tin nhạy cảm, lưu giữ theo yêu cầu hiện hành." },
              { label: "Quản lý Nhà cung cấp", text: "Tất cả nhà cung cấp bên thứ ba có quyền truy cập dữ liệu của XperC hoặc khách hàng đều được đánh giá về trạng thái bảo mật trước khi hợp tác." },
              { label: "Quản trị Công cụ AI", text: "Các công cụ AI sử dụng nội bộ được xem xét về cách xử lý dữ liệu trước khi áp dụng. Dữ liệu khách hàng không bao giờ được dùng để huấn luyện các mô hình bên ngoài mà không có sự đồng ý rõ ràng." },
              { label: "Phát triển An toàn", text: "Các cân nhắc bảo mật được tích hợp vào quy trình thiết kế và phát triển giải pháp AI ngay từ đầu." }
            ]
          },
          {
            id: "incident-response",
            title: "Ứng phó Sự cố",
            intro: "XperC duy trì quy trình ứng phó sự cố nhằm phát hiện, kiềm chế và khắc phục các sự cố an toàn thông tin một cách kịp thời và hiệu quả.",
            steps: [
              { label: "01 — Phát hiện", text: "Xác định và xác nhận phạm vi sự cố và các hệ thống bị ảnh hưởng trước khi leo thang." },
              { label: "02 — Kiềm chế", text: "Giới hạn phạm vi và tác động ngay lập tức để ngăn ngừa thiệt hại thêm hoặc lộ dữ liệu." },
              { label: "03 — Khắc phục", text: "Loại bỏ nguyên nhân gốc rễ, vá các lỗ hổng và khôi phục các hệ thống bị ảnh hưởng về hoạt động bình thường." },
              { label: "04 — Đánh giá", text: "Ghi chép kết quả, đánh giá hiệu quả ứng phó và cập nhật các biện pháp kiểm soát để ngăn ngừa tái diễn." }
            ],
            outro: "Các sự cố bị nghi ngờ cần được báo cáo ngay lập tức đến <strong>info@xperc.com</strong>. Tất cả báo cáo được xử lý với sự bảo mật tuyệt đối."
          },
          {
            id: "enforcement",
            title: "Thực thi",
            subsections: [
              {
                title: "Nhân viên & Nhà thầu",
                body: "Nhân viên bị phát hiện vi phạm chính sách này có thể phải chịu kỷ luật, bao gồm cả chấm dứt hợp đồng lao động, cùng các hình phạt dân sự hoặc hình sự liên quan."
              },
              {
                title: "Nhà cung cấp & Bên thứ ba",
                body: "Nhà cung cấp, tư vấn viên hoặc nhà thầu bị phát hiện vi phạm có thể bị xử phạt bao gồm thu hồi quyền truy cập, chấm dứt hợp đồng và các hình phạt dân sự hoặc hình sự liên quan."
              },
              {
                title: "Miễn trừ",
                body: "Miễn trừ khỏi một số điều khoản nhất định của chính sách có thể được yêu cầu thông qua Quy trình Miễn trừ của XperC. Các miễn trừ được phê duyệt sẽ được ghi chép và xem xét ít nhất hàng năm."
              }
            ]
          },
          {
            id: "faqs",
            title: "Câu hỏi Thường gặp",
            faqs: [
              {
                q: "Chính sách này áp dụng cho ai?",
                a: "Chính sách này áp dụng đồng đều cho tất cả nhân viên, nhà thầu, tư vấn viên của XperC và mọi nhân sự bên thứ ba có tương tác với tài nguyên thông tin, hệ thống hoặc dữ liệu của XperC — bất kể địa điểm hay hình thức lao động."
              },
              {
                q: "XperC bảo vệ dữ liệu khách hàng như thế nào?",
                a: "XperC áp dụng Bộ ba CIA (Bảo mật, Toàn vẹn, Sẵn sàng) cho tất cả các dự án khách hàng. Dữ liệu khách hàng chỉ được truy cập theo nguyên tắc “cần biết”, xử lý trong phạm vi đã thỏa thuận và không bao giờ được sử dụng ngoài phạm vi dự án."
              },
              {
                q: "XperC tuân thủ các tiêu chuẩn nào?",
                a: "XperC tuân theo ISO/IEC 27002 và Khung An ninh mạng NIST (CSF), đồng thời tuân thủ các luật và quy định hiện hành của Việt Nam về an toàn thông tin và bảo vệ dữ liệu."
              },
              {
                q: "Làm thế nào để báo cáo sự cố bảo mật?",
                a: "Liên hệ ngay với chúng tôi qua <strong>info@xperc.com</strong> hoặc qua điện thoại. Tất cả báo cáo được xử lý với sự bảo mật tuyệt đối và điều tra kịp thời."
              },
              {
                q: "Chính sách được xem xét bao lâu một lần?",
                a: "Chính sách được xem xét ít nhất hàng năm và khi có bất kỳ thay đổi đáng kể nào đối với môi trường an toàn thông tin, hoạt động kinh doanh hoặc các yêu cầu pháp lý hiện hành của XperC."
              },
              {
                q: "XperC có sử dụng công cụ AI nội bộ không?",
                a: "Có. Tất cả các công cụ AI sử dụng nội bộ đều được đánh giá về bảo mật và cách xử lý dữ liệu trước khi áp dụng. Dữ liệu khách hàng không bao giờ được dùng để huấn luyện các mô hình AI bên ngoài mà không có sự đồng ý bằng văn bản rõ ràng."
              }
            ]
          },
          {
            id: "contact",
            title: "Liên hệ",
            body: "<p class='mb-4'>Để đặt câu hỏi về chính sách này, báo cáo vấn đề bảo mật hoặc yêu cầu miễn trừ chính sách, hãy liên hệ với đội ngũ An toàn Thông tin của XperC.</p>",
            table: [
              { label: "Công ty", text: "XperC" },
              { label: "Email", text: "info@xperc.com" },
              { label: "Điện thoại", text: "0703 880 870 (Mr. Duy)" },
              { label: "Địa chỉ", text: "Thành phố Hồ Chí Minh, Việt Nam" }
            ]
          }
        ]
      }
    };
  }

  return {
    hero: {
      eyebrow: "LEGAL",
      title: "Information Security Policy",
      description: "XperC's commitment to protecting the confidentiality, integrity, and availability of information across all operations and client engagements.",
      effective: "Effective: May 2026"
    },
    nav: {
      title: "ON THIS PAGE",
      items: [
        { id: "introduction", label: "Introduction" },
        { id: "purpose-scope", label: "Purpose & Scope" },
        { id: "core-principles", label: "Core Principles" },
        { id: "responsibilities", label: "Responsibilities" },
        { id: "policy-framework", label: "Policy Framework" },
        { id: "data-protection", label: "Data Protection" },
        { id: "incident-response", label: "Incident Response" },
        { id: "enforcement", label: "Enforcement" },
        { id: "faqs", label: "FAQs" },
        { id: "contact", label: "Contact" }
      ]
    },
    content: {
      sections: [
        {
          id: "introduction",
          title: "Introduction",
          body: "<p class='mb-4'>Information security is a holistic discipline — its application, or lack thereof, affects all facets of an organization. At XperC, our Information Security Program is built to protect the Confidentiality, Integrity, and Availability of all information assets entrusted to us by clients, partners, and stakeholders.</p><p>As an AI consulting company, XperC handles sensitive business data, strategic information, and proprietary processes. We recognize that our ability to manage and protect these assets directly impacts our clients’ success and our own. This policy establishes the framework governing how XperC manages information security across all operations.</p>"
        },
        {
          id: "purpose-scope",
          title: "Purpose & Scope",
          subsections: [
            {
              title: "Purpose",
              body: "To describe the actions and behaviors required to ensure that due care is taken to avoid inappropriate risks to XperC, its business partners, clients, and stakeholders — while enabling the effective delivery of AI consulting services."
            },
            {
              title: "Scope",
              body: "This policy applies equally to any individual, entity, or process that interacts with XperC information resources — including employees, contractors, consultants, vendors, and automated systems. It covers all information assets whether on-premises, cloud-hosted, or processed during client engagements."
            }
          ]
        },
        {
          id: "core-principles",
          title: "Core Principles",
          body: "<p class='mb-8'>XperC’s information security is founded on the CIA Triad — three fundamental principles that guide every decision about how information is handled, stored, and shared.</p>",
          diagram: {
               confidentialityTitle: "Confidentiality",
               confidentialityDesc: "Information is accessible only to those authorized to access it. XperC enforces strict need-to-know controls across all internal systems and client engagements — ensuring sensitive data never reaches unauthorized parties.",
               integrityTitle: "Integrity",
               integrityDesc: "The accuracy and completeness of information is protected at all times. XperC safeguards data from unauthorized modification throughout its lifecycle — from collection through disposal — preserving the trustworthiness of every record.",
               availabilityTitle: "Availability",
               availabilityDesc: "Information assets — systems, networks, and data — are accessible and usable when needed by authorized parties. XperC maintains continuity controls to prevent disruptions that could impact clients or internal operations."
          }
        },
        {
          id: "responsibilities",
          title: "Responsibilities",
          subsections: [
            {
              title: "Executive Management",
              list: [
                "Ensure a risk-based Information Security Program is implemented and maintained",
                "Integrate information security into strategic and operational planning",
                "Allocate adequate financial and personnel resources for information security",
                "Designate an Information Security Officer with appropriate authority",
                "Receive annual reports on the effectiveness of the Information Security Program"
              ]
            },
            {
              title: "Information Security Officer",
              list: [
                "Chair the Information Security Committee and provide regular status updates",
                "Manage compliance with statutory, regulatory, and contractual requirements",
                "Assess risks to all XperC information resources and client data",
                "Develop and maintain supporting policies, procedures, and guidelines",
                "Ensure all personnel receive appropriate security awareness training",
                "Oversee vendor risk evaluation and third-party security management"
              ]
            },
            {
              title: "Information Security Committee",
              list: [
                "Formulate, review, and recommend information security policies",
                "Approve supporting procedures, standards, and guidelines",
                "Assess adequacy and effectiveness of security controls",
                "Identify significant threat changes and vulnerabilities",
                "Review security incident information and recommend follow-up actions",
                "Promote security education and awareness throughout XperC"
              ]
            },
            {
              title: "All Employees, Contractors & Third Parties",
              list: [
                "Understand and comply with the Information Security Program",
                "Sign off and agree to abide by applicable policies and guidelines",
                "Use XperC information resources in compliance with all security policies",
                "Protect personal, private, and sensitive information from unauthorized use or disclosure",
                "Report suspected security incidents or weaknesses to the Information Security Officer"
              ]
            }
          ]
        },
        {
          id: "policy-framework",
          title: "Policy Framework",
          intro: "XperC maintains an Information Security Program consisting of topic-specific policies, standards, procedures, and guidelines that protect information resources using administrative, physical, and technical controls — while supporting our business objectives.",
          compliance: [
            { label: "ISO/IEC 27002", text: "International standard for information security controls" },
            { label: "NIST CSF", text: "Cybersecurity Framework for risk identification and management" },
            { label: "Vietnamese Law on Cybersecurity", text: "Law No. 24/2018/QH14 and related regulations" },
            { label: "Contractual Obligations", text: "Client agreements and data processing terms" }
          ],
          outro: "The Information Security Program is reviewed no less than annually, or upon significant changes to the security environment or business operations."
        },
        {
          id: "data-protection",
          title: "Data Protection",
          body: "<p class='mb-4'>XperC implements layered controls to protect information assets across all phases of the data lifecycle — collection, processing, storage, transmission, and disposal.</p>",
          table: [
            { label: "Access Control", text: "Role-based access management with least-privilege principles applied to all systems and client data." },
            { label: "Encryption", text: "Data encrypted in transit (TLS 1.2+) and at rest using industry-standard algorithms." },
            { label: "Audit Logging", text: "Activity logs maintained for all access to sensitive information resources, retained per applicable requirements." },
            { label: "Vendor Management", text: "All third-party vendors with access to XperC or client data are evaluated for security posture before engagement." },
            { label: "AI Tool Governance", text: "AI tools used internally are reviewed for data handling practices. Client data is never used to train external models without explicit consent." },
            { label: "Secure Development", text: "Security considerations are integrated into AI solution design and development processes from the start." }
          ]
        },
        {
          id: "incident-response",
          title: "Incident Response",
          intro: "XperC maintains an incident response process to detect, contain, and remediate information security incidents promptly and effectively.",
          steps: [
            { label: "01 — Detect", text: "Identify and confirm the incident scope and affected systems before escalating." },
            { label: "02 — Contain", text: "Limit the scope and impact immediately to prevent further damage or data exposure." },
            { label: "03 — Remediate", text: "Remove the root cause, patch vulnerabilities, and restore affected systems to normal operation." },
            { label: "04 — Review", text: "Document findings, assess response effectiveness, and update controls to prevent recurrence." }
          ],
          outro: "Suspected incidents should be reported immediately to <strong>info@xperc.com</strong>. All reports are treated with strict confidentiality."
        },
        {
          id: "enforcement",
          title: "Enforcement",
          subsections: [
            {
              title: "Employees & Contractors",
              body: "Personnel found to have violated this policy may be subject to disciplinary action, up to and including termination of employment, and related civil or criminal penalties."
            },
            {
              title: "Vendors & Third Parties",
              body: "Vendors, consultants, or contractors found in violation may be subject to sanctions including removal of access rights, termination of contracts, and related civil or criminal penalties."
            },
            {
              title: "Waivers",
              body: "Waivers from certain policy provisions may be sought through the XperC Waiver Process. Approved waivers are documented and reviewed at minimum annually."
            }
          ]
        },
        {
          id: "faqs",
          title: "Frequently Asked Questions",
          faqs: [
            {
              q: "Who does this policy apply to?",
              a: "This policy applies equally to all XperC employees, contractors, consultants, and any third-party personnel who interact with XperC information resources, systems, or data — regardless of location or employment type."
            },
            {
              q: "How does XperC protect client data?",
              a: "XperC applies the CIA Triad (Confidentiality, Integrity, Availability) to all client engagements. Client data is accessed on a strict need-to-know basis, processed only within agreed boundaries, and never used for purposes beyond the scope of the engagement."
            },
            {
              q: "What standards does XperC comply with?",
              a: "XperC aligns with ISO/IEC 27002 and the NIST Cybersecurity Framework (CSF), and complies with applicable Vietnamese laws and regulations on information security and data protection."
            },
            {
              q: "How do I report a security incident?",
              a: "Contact us immediately at <strong>info@xperc.com</strong> or by phone. All reports are treated with strict confidentiality and investigated promptly."
            },
            {
              q: "How often is this policy reviewed?",
              a: "The policy is reviewed at minimum annually and upon any significant change to XperC’s information security environment, business operations, or applicable regulatory requirements."
            },
            {
              q: "Does XperC use AI tools internally?",
              a: "Yes. All AI tools used internally are evaluated for security and data handling practices before adoption. Client data is never used to train external AI models without explicit written consent."
            }
          ]
        },
        {
          id: "contact",
          title: "Contact",
          body: "<p class='mb-4'>For questions about this policy, to report a security concern, or to request a policy waiver, contact the XperC Information Security team.</p>",
          table: [
            { label: "Company", text: "XperC" },
            { label: "Email", text: "info@xperc.com" },
            { label: "Phone", text: "0703 880 870 (Mr. Duy)" },
            { label: "Address", text: "Ho Chi Minh City, Vietnam" }
          ]
        }
      ]
    }
  };
}
