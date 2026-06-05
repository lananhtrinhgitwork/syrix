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
            <span className="text-muted-foreground text-xs">New Lead: ACME Corp</span>
            <span className="text-emerald-400 text-xs">Qualifying...</span>
         </div>
         <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <span>Scanning 50MB RFP Document</span>
         </div>
         <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Calculating volume discounts</span>
         </div>
         <div className="mt-2 bg-emerald-500/10 text-emerald-500 p-2 rounded text-xs flex justify-between items-center border border-emerald-500/20">
            <span>Proposal Drafted & CRM Updated</span>
            <ArrowRight className="w-4 h-4" />
         </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge="Revenue Generation"
        title="Accelerate Deals with Autonomous Sales Engagement."
        description="Never let a high-value lead turn cold. Syrix acts as an always-on BDR, parsing complex RFPs, calculating custom quotes, and booking meetings directly into your CRM."
        ctaPrimary="Boost Sales Velocity"
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "35%", label: "Increase in Pipeline Velocity" },
          { value: "24/7", label: "Lead Qualification" },
          { value: "100%", label: "CRM Sync Accuracy" }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title="The Automated Sales Funnel" 
        description="How Syrix turns raw inbound traffic into qualified, booked pipeline." 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title="Close Deals While You Sleep"
        tabs={[
          {
            id: 'rfp',
            title: 'Instant RFP Parsing',
            description: 'Ingest 50MB PDF requests, cross-reference with your product specs, and generate customized responses.',
            visual: (
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <Search className="w-12 h-12 text-primary opacity-50 mb-4 animate-pulse" />
                <span className="text-sm text-center font-mono">Extracting requirements from <br/>ACME_Requirements_v2.pdf</span>
              </div>
            )
          },
          {
            id: 'quote',
            title: 'Dynamic Quoting',
            description: 'Syrix evaluates client size and calculates pricing tiers securely without human bottlenecks.',
            visual: (
              <div className="w-full max-w-xs p-6 bg-card border border-white/10 rounded-lg flex flex-col gap-2">
                 <div className="flex justify-between text-xs text-muted-foreground border-b border-white/5 pb-2">
                   <span>Enterprise Tier</span>
                   <span>Volume: 50k</span>
                 </div>
                 <div className="flex justify-between text-lg font-bold text-emerald-400 pt-2">
                   <span>Final Quote:</span>
                   <span>$4,500/mo</span>
                 </div>
              </div>
            )
          },
          {
            id: 'booking',
            title: 'Automated CRM Booking',
            description: 'Locks calendar slots and updates HubSpot/Salesforce via secure MCP.',
            visual: (
              <div className="flex items-center justify-center h-full">
                 <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Meeting Booked in HubSpot
                 </div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title="Always-On Revenue Pipelines"
        useCases={[
          {
            title: "Off-Hour Pipeline Acceleration",
            description: "A high-value enterprise lead uploads a complex RFP at 11 PM. Delaying follow-up until morning risks losing the deal. Syrix intercepts the file, runs deep vector RAG to validate specs, calculates a 25% volume discount, and dispatches a formal proposal draft instantly.",
            visual: (
               <div className="p-6 text-center h-full flex flex-col items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary mb-4" />
                  <span className="text-lg font-bold text-white">Capture 100% of After-Hours Traffic</span>
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title="Integrates with your Revenue Stack" />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
