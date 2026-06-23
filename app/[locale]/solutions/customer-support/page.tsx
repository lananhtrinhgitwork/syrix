'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Bot, ArrowRight, CheckCircle2, MessageSquareWarning, Zap, Lock, HeadphonesIcon } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { FAQSection } from '@/components/ui/faq-section';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function CustomerSupportSolution() {
  const t = useTranslations('solutions.customerSupport');
  const locale = useLocale();

  const faqs = locale === 'vi' ? [
    { question: "Syrix Help Desk giải quyết ticket thế nào?", answer: "Syrix đọc tài liệu hướng dẫn nội bộ qua RAG và kết nối với các API backend (ERP, CRM) qua MCP để trực tiếp xử lý vấn đề thay vì chỉ trả lời câu hỏi." },
    { question: "Agent có thể tự động chuyển cho nhân viên không?", answer: "Có. Syrix hỗ trợ Silent Handoff - chuyển toàn bộ context hội thoại cho nhân viên ngay lập tức khi phát hiện tình huống nằm ngoài giới hạn xử lý." }
  ] : [
    { question: "How does Syrix Help Desk resolve tickets?", answer: "Syrix reads your internal manuals via RAG and connects to your backend APIs (ERP, CRM) via MCP to actually execute solutions, not just answer questions." },
    { question: "Can the Agent escalate to a human?", answer: "Yes. Syrix features Silent Handoff - instantly transferring the full conversation context to a human representative when an issue exceeds its boundaries." }
  ];

  const HeroVisual = (
    <div className="flex flex-col gap-4 p-4 h-[300px] justify-center">
      <div className="flex items-center justify-between p-3 border border-destructive/30 bg-destructive/10 rounded-lg">
         <span className="text-sm font-mono text-destructive-foreground">
           {locale === 'vi' ? 'Thủ công: Thời gian phản hồi trung bình 45 phút' : 'Manual: 45m Avg Response Time'}
         </span>
         <MessageSquareWarning className="w-5 h-5 text-destructive" />
      </div>
      <ArrowRight className="w-6 h-6 text-muted-foreground self-center rotate-90" />
      <div className="flex items-center justify-between p-3 border border-emerald-500/30 bg-emerald-500/10 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.15)]">
         <span className="text-sm font-mono text-emerald-400">
           Syrix: <span className="font-bold">{locale === 'vi' ? 'Phản hồi Tức thì (200ms)' : 'Instant (200ms) Resolution'}</span>
         </span>
         <CheckCircle2 className="w-5 h-5 text-emerald-500" />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge={t('badge')}
        title={t('heroTitle')}
        description={t('heroDesc')}
        ctaPrimary={locale === 'vi' ? 'Bắt đầu Tự động hóa Hỗ trợ' : 'Start Automating Support'}
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "80%", label: locale === 'vi' ? 'Tỷ lệ chuyển hướng' : 'Deflection Rate' },
          { value: "98%", label: 'CSAT Score' },
          { value: "0", label: locale === 'vi' ? 'Vận hành Ca đêm' : 'Night Shift Operations' }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title={locale === 'vi' ? 'Giao thức Trí tuệ Khách hàng' : 'The Customer Intelligence Protocol'} 
        description={locale === 'vi' ? 'Cách Syrix Help Desk tiếp nhận ý định của người dùng và triển khai các hành động backend ngay lập tức.' : 'How Syrix Help Desk ingests user intent and deploys immediate backend actions.'} 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title={locale === 'vi' ? 'Được thiết kế cho Vận hành Phức tạp' : 'Built for High-Stakes Operations'}
        tabs={[
          {
            id: 'rag-support',
            title: locale === 'vi' ? 'Phân tích Truy vấn Kỹ thuật' : 'Technical Query Parsing',
            description: locale === 'vi' ? 'Syrix hiểu tài liệu sản phẩm dày đặc và hướng dẫn khách hàng giải quyết sự cố phức tạp.' : 'Syrix comprehends dense product documentation and guides clients through complex troubleshooting.',
            visual: (
              <div className="p-6 bg-card border border-white/10 rounded-lg w-full max-w-sm">
                <div className="bg-primary/20 p-2 rounded text-xs mb-4 text-gray-200">
                  {locale === 'vi' ? 'Khách: Làm cách nào cấu hình reverse proxy cho NGINX?' : 'User: How do I configure the reverse proxy for NGINX?'}
                </div>
                <div className="bg-[#0a0a0f] p-3 rounded text-xs border border-emerald-500/30 text-emerald-400">
                  <div className="flex items-center gap-1 mb-2">
                    <CheckCircle2 className="w-3 h-3" /> {locale === 'vi' ? 'Tìm thấy trong NGINX_Config.pdf' : 'Found in NGINX_Config.pdf'}
                  </div>
                  {locale === 'vi' 
                    ? 'Để cấu hình reverse proxy, hãy mở file nginx.conf và thiết lập proxy_pass...'
                    : 'To configure the reverse proxy, open your nginx.conf and set the proxy_pass directive...'}
                </div>
              </div>
            )
          },
          {
            id: 'mcp-billing',
            title: locale === 'vi' ? 'Tự động hóa ERP & Hóa đơn' : 'Automated Billing & ERP',
            description: locale === 'vi' ? 'Agent cập nhật hồ sơ CRM, điều chỉnh hóa đơn và cập nhật địa chỉ an toàn qua MCP.' : 'The agent securely updates CRM records, recalibrates invoices, and updates addresses via MCP.',
            visual: (
              <div className="p-6 flex flex-col gap-3">
                <div className="bg-primary/20 p-2 rounded text-xs">
                  {locale === 'vi' ? 'Khách: Hãy cập nhật địa chỉ thanh toán sang Hà Nội.' : 'User: Update my billing address to Hanoi.'}
                </div>
                <div className="bg-emerald-500/20 p-2 rounded text-xs border border-emerald-500/30 text-emerald-400">
                  {locale === 'vi' 
                    ? 'Syrix: Đang cập nhật ERP qua MCP... Hoàn thành. Hóa đơn PDF đã được đính kèm.'
                    : 'Syrix: Updating ERP via MCP... Done. Your invoice PDF is attached.'}
                </div>
              </div>
            )
          },
          {
            id: 'human-escalation',
            title: locale === 'vi' ? 'Chuyển giao cho Nhân sự theo ngữ cảnh' : 'Contextual Human Handoff',
            description: locale === 'vi' ? 'Tiếp quan im lặng. Nhân viên nhận được toàn bộ nhật ký hội thoại mà khách không cần nói lại.' : 'Silent takeover. Human agents get full conversation logs without the client repeating themselves.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                 <HeadphonesIcon className="w-12 h-12 text-primary opacity-50 mb-4" />
                 <span className="text-sm text-white">{locale === 'vi' ? 'Đang chuyển giao cho Chuyên viên...' : 'Transferring to Human Expert...'}</span>
                 <span className="text-xs text-emerald-400 mt-2">{locale === 'vi' ? 'Đã gửi gói ngữ cảnh' : 'Context packet delivered'}</span>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title={locale === 'vi' ? 'Nơi Tự động hóa Tỏa sáng' : 'Where Automation Shines'}
        useCases={[
          {
            title: locale === 'vi' ? 'Tự động hóa Hàng chờ ca đêm' : 'Night-Shift Queue Automation',
            description: locale === 'vi' 
              ? 'Khách hàng doanh nghiệp B2B gặp sự cố hệ thống ngoài giờ hành chính. Syrix Help Desk lập tức tiếp quản, bóc tách tài liệu kỹ thuật qua RAG để đưa ra hướng dẫn sửa lỗi chính xác.'
              : 'B2B enterprise clients experience system critical downtime outside standard business hours. Syrix Help Desk instantly takes control, pulling from your technical manual collection via RAG to output precise troubleshooting paths.',
            visual: (
               <div className="p-6 text-center text-sm text-muted-foreground border border-white/10 rounded-lg bg-black/50 h-full flex flex-col justify-center items-center">
                  <Bot className="w-12 h-12 text-primary mb-4 opacity-50 animate-pulse" />
                  {locale === 'vi' 
                    ? 'Đang xử lý hơn 500 kết nối đồng thời lúc 2:00 sáng mà không cần con người can thiệp.'
                    : 'Handling 500+ concurrent connections at 2:00 AM with zero human intervention.'}
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title={locale === 'vi' ? 'Kết nối với Hệ thống Chăm sóc của bạn' : 'Connects with your Service Stack'} />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
