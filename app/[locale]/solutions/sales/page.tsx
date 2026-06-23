'use client';

import { useTranslations, useLocale } from 'next-intl';
import { TrendingUp, ArrowRight, Zap, Target, Search, CheckCircle2 } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { FAQSection } from '@/components/ui/faq-section';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function SalesSolution() {
  const t = useTranslations('solutions.sales');
  const locale = useLocale();

  const faqs = locale === 'vi' ? [
    { question: "Syrix Sales Agent hoạt động như thế nào?", answer: "Nó đọc tài liệu sản phẩm của bạn, tự động phân tích nhu cầu của khách hàng, tính toán báo giá và đặt lịch họp thẳng vào CRM." },
    { question: "Có cần nhân viên sales can thiệp không?", answer: "Không. Syrix có thể tự động 100% trong việc qualify leads (đánh giá tiềm năng) và chốt lịch hẹn. Nhân viên sales chỉ cần tham gia khi có lịch họp đã được chốt." },
    { question: "Nó có thể lấy dữ liệu tồn kho hoặc bảng giá động không?", answer: "Có, thông qua kết nối MCP (Model Context Protocol), Agent có thể truy cập thời gian thực vào bảng giá, tồn kho và các API nội bộ khác của bạn." },
  ] : [
    { question: "How does Syrix Sales Agent work?", answer: "It reads your product documentation, automatically analyzes customer needs, calculates quotes, and books meetings directly into your CRM." },
    { question: "Does it require human sales intervention?", answer: "No. Syrix can be 100% autonomous in qualifying leads and securing appointments. Human reps only step in when a meeting is booked." },
    { question: "Can it pull live inventory or dynamic pricing?", answer: "Yes, via MCP (Model Context Protocol) integration, the Agent can access real-time pricing, inventory, and other internal APIs securely." },
  ];

  const HeroVisual = (
    <div className="flex flex-col gap-4 p-4 h-[300px] justify-center">
      <div className="bg-card p-4 rounded-xl border border-white/10 text-sm shadow-xl flex flex-col gap-3">
         <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-muted-foreground text-xs">{locale === 'vi' ? 'Lead mới: ACME Corp' : 'New Lead: ACME Corp'}</span>
            <span className="text-emerald-400 text-xs">{locale === 'vi' ? 'Đang đánh giá...' : 'Qualifying...'}</span>
         </div>
         <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <span>{locale === 'vi' ? 'Đang quét tài liệu RFP 50MB' : 'Scanning 50MB RFP Document'}</span>
         </div>
         <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>{locale === 'vi' ? 'Đang tính toán chiết khấu' : 'Calculating volume discounts'}</span>
         </div>
         <div className="mt-2 bg-emerald-500/10 text-emerald-500 p-2 rounded text-xs flex justify-between items-center border border-emerald-500/20">
            <span>{locale === 'vi' ? 'Đã lập Báo giá & Cập nhật CRM' : 'Proposal Drafted & CRM Updated'}</span>
            <ArrowRight className="w-4 h-4" />
         </div>
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
        ctaPrimary={locale === 'vi' ? 'Bắt đầu Tự động hóa Bán hàng' : 'Boost Sales Velocity'}
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "35%", label: locale === 'vi' ? 'Tăng tốc độ Phễu Bán hàng' : 'Increase in Pipeline Velocity' },
          { value: "24/7", label: locale === 'vi' ? 'Đánh giá Lead liên tục' : 'Lead Qualification' },
          { value: "100%", label: locale === 'vi' ? 'Độ chính xác Đồng bộ CRM' : 'CRM Sync Accuracy' }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title={locale === 'vi' ? 'Phễu Bán hàng Tự động hóa' : 'The Automated Sales Funnel'} 
        description={locale === 'vi' ? 'Cách Syrix chuyển đổi lưu lượng truy cập thô thành cơ hội bán hàng đã qua đánh giá.' : 'How Syrix turns raw inbound traffic into qualified, booked pipeline.'} 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title={locale === 'vi' ? 'Chốt hợp đồng ngay cả khi bạn đang ngủ' : 'Close Deals While You Sleep'}
        tabs={[
          {
            id: 'rfp',
            title: locale === 'vi' ? 'Bóc tách RFP Tức thì' : 'Instant RFP Parsing',
            description: locale === 'vi' 
              ? 'Xử lý các tệp PDF yêu cầu báo giá 50MB, đối chiếu với thông số kỹ thuật sản phẩm và tạo phản hồi tùy chỉnh.'
              : 'Ingest 50MB PDF requests, cross-reference with your product specs, and generate customized responses.',
            visual: (
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <Search className="w-12 h-12 text-primary opacity-50 mb-4 animate-pulse" />
                <span className="text-sm text-center font-mono">
                  {locale === 'vi' ? 'Đang trích xuất yêu cầu từ' : 'Extracting requirements from'} <br/>ACME_Requirements_v2.pdf
                </span>
              </div>
            )
          },
          {
            id: 'quote',
            title: locale === 'vi' ? 'Báo giá Động' : 'Dynamic Quoting',
            description: locale === 'vi' 
              ? 'Syrix đánh giá quy mô khách hàng và tự động tính toán biểu phí chiết khấu mà không gặp nghẽn phê duyệt thủ công.'
              : 'Syrix evaluates client size and calculates pricing tiers securely without human bottlenecks.',
            visual: (
              <div className="w-full max-w-xs p-6 bg-card border border-white/10 rounded-lg flex flex-col gap-2">
                 <div className="flex justify-between text-xs text-muted-foreground border-b border-white/5 pb-2">
                    <span>{locale === 'vi' ? 'Gói Doanh nghiệp' : 'Enterprise Tier'}</span>
                    <span>{locale === 'vi' ? 'Số lượng: 50k' : 'Volume: 50k'}</span>
                 </div>
                 <div className="flex justify-between text-lg font-bold text-emerald-400 pt-2">
                    <span>{locale === 'vi' ? 'Báo giá Cuối:' : 'Final Quote:'}</span>
                    <span>$4,500/{locale === 'vi' ? 'tháng' : 'mo'}</span>
                 </div>
              </div>
            )
          },
          {
            id: 'booking',
            title: locale === 'vi' ? 'Đặt lịch CRM Tự động' : 'Automated CRM Booking',
            description: locale === 'vi' 
              ? 'Khóa khung giờ trống trên lịch biểu và cập nhật dữ liệu HubSpot/Salesforce qua MCP bảo mật.'
              : 'Locks calendar slots and updates HubSpot/Salesforce via secure MCP.',
            visual: (
              <div className="flex items-center justify-center h-full">
                 <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> {locale === 'vi' ? 'Đã chốt Lịch hẹn trên HubSpot' : 'Meeting Booked in HubSpot'}
                 </div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title={locale === 'vi' ? 'Luồng Doanh thu Không ngừng nghỉ' : 'Always-On Revenue Pipelines'}
        useCases={[
          {
            title: locale === 'vi' ? 'Đón lead & Tăng tốc ngoài giờ' : 'Off-Hour Pipeline Acceleration',
            description: locale === 'vi' 
              ? 'Lead doanh nghiệp lớn tải lên RFP phức tạp lúc 11 giờ đêm. Trì hoãn phản hồi đến sáng hôm sau có rủi ro mất deal. Syrix lập tức tiếp nhận tệp tin, chạy RAG xác minh yêu cầu kỹ thuật, tính toán chiết khấu 25% và gửi dự thảo báo giá chính thức ngay.'
              : 'A high-value enterprise lead uploads a complex RFP at 11 PM. Delaying follow-up until morning risks losing the deal. Syrix intercepts the file, runs deep vector RAG to validate specs, calculates a 25% volume discount, and dispatches a formal proposal draft instantly.',
            visual: (
               <div className="p-6 text-center h-full flex flex-col items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary mb-4" />
                  <span className="text-lg font-bold text-white">
                    {locale === 'vi' ? 'Đón trọn 100% Traffic Ngoài giờ' : 'Capture 100% of After-Hours Traffic'}
                  </span>
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title={locale === 'vi' ? 'Tích hợp với Hệ thống Bán hàng của bạn' : 'Integrates with your Revenue Stack'} />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
