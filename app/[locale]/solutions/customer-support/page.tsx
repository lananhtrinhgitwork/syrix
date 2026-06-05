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
         <span className="text-sm font-mono text-destructive-foreground">Manual: 45m Avg Response Time</span>
         <MessageSquareWarning className="w-5 h-5 text-destructive" />
      </div>
      <ArrowRight className="w-6 h-6 text-muted-foreground self-center rotate-90" />
      <div className="flex items-center justify-between p-3 border border-emerald-500/30 bg-emerald-500/10 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.15)]">
         <span className="text-sm font-mono text-emerald-400">Syrix: <span className="font-bold">Instant (200ms) Resolution</span></span>
         <CheckCircle2 className="w-5 h-5 text-emerald-500" />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge="Service Operations"
        title="Transform Customer Support into a Profit Center."
        description="Stop burning budget on tier-1 manual responses. Syrix resolves 80% of B2B support tickets autonomously using verified manuals, while updating ERPs and Billing via secure APIs."
        ctaPrimary="Start Automating Support"
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "80%", label: "Deflection Rate" },
          { value: "98%", label: "CSAT Score" },
          { value: "0", label: "Night Shift Operations" }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title="The Customer Intelligence Protocol" 
        description="How Syrix Help Desk ingests user intent and deploys immediate backend actions." 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title="Built for High-Stakes Operations"
        tabs={[
          {
            id: 'rag-support',
            title: 'Technical Query Parsing',
            description: 'Syrix comprehends dense product documentation and guides clients through complex troubleshooting.',
            visual: (
              <div className="p-6 bg-card border border-white/10 rounded-lg w-full max-w-sm">
                <div className="bg-primary/20 p-2 rounded text-xs mb-4 text-gray-200">User: How do I configure the reverse proxy for NGINX?</div>
                <div className="bg-[#0a0a0f] p-3 rounded text-xs border border-emerald-500/30 text-emerald-400">
                  <div className="flex items-center gap-1 mb-2"><CheckCircle2 className="w-3 h-3" /> Found in NGINX_Config.pdf</div>
                  To configure the reverse proxy, open your nginx.conf and set the proxy_pass directive...
                </div>
              </div>
            )
          },
          {
            id: 'mcp-billing',
            title: 'Automated Billing & ERP',
            description: 'The agent securely updates CRM records, recalibrates invoices, and updates addresses via MCP.',
            visual: (
              <div className="p-6 flex flex-col gap-3">
                <div className="bg-primary/20 p-2 rounded text-xs">User: Update my billing address to Hanoi.</div>
                <div className="bg-emerald-500/20 p-2 rounded text-xs border border-emerald-500/30 text-emerald-400">Syrix: Updating ERP via MCP... Done. Your invoice PDF is attached.</div>
              </div>
            )
          },
          {
            id: 'human-escalation',
            title: 'Contextual Human Handoff',
            description: 'Silent takeover. Human agents get full conversation logs without the client repeating themselves.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                 <HeadphonesIcon className="w-12 h-12 text-primary opacity-50 mb-4" />
                 <span className="text-sm text-white">Transferring to Human Expert...</span>
                 <span className="text-xs text-emerald-400 mt-2">Context packet delivered</span>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title="Where Automation Shines"
        useCases={[
          {
            title: "Night-Shift Queue Automation",
            description: "B2B enterprise clients experience system critical downtime outside standard business hours. Syrix Help Desk instantly takes control, pulling from your technical manual collection via RAG to output precise troubleshooting paths.",
            visual: (
               <div className="p-6 text-center text-sm text-muted-foreground border border-white/10 rounded-lg bg-black/50 h-full flex flex-col justify-center items-center">
                  <Bot className="w-12 h-12 text-primary mb-4 opacity-50 animate-pulse" />
                  Handling 500+ concurrent connections at 2:00 AM with zero human intervention.
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title="Connects with your Service Stack" />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
