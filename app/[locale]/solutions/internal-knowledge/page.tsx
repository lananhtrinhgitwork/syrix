'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Database, ShieldCheck, Network, FolderSearch, Lock } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { FAQSection } from '@/components/ui/faq-section';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function InternalKnowledgeSolution() {
  const t = useTranslations('solutions.internalKnowledge');
  const locale = useLocale();

  const faqs = locale === 'vi' ? [
    { question: "Agent có tuân thủ phân quyền nội bộ không?", answer: "Tuyệt đối tuân thủ. Syrix ánh xạ trực tiếp với sơ đồ Role-Based Access Control (RBAC) của bạn. Nhân viên không có quyền sẽ không thể tìm thấy tài liệu đó." },
    { question: "Có cần đào tạo lại model khi có tài liệu mới không?", answer: "Không. Khi tài liệu được thêm vào, nó sẽ được cập nhật vào vector database trong vài mili-giây, Agent sẽ có kiến thức mới lập tức." }
  ] : [
    { question: "Does the Agent respect internal access rights?", answer: "Absolutely. Syrix maps directly to your Role-Based Access Control (RBAC). Employees without permission will never see restricted documents." },
    { question: "Do we need to retrain the model when new docs are added?", answer: "No. When a document is added, it's synced to the vector database in milliseconds, updating the Agent's knowledge instantly." }
  ];

  const HeroVisual = (
    <div className="flex flex-col gap-4 p-4 h-[300px] justify-center items-center relative">
      <Database className="w-16 h-16 text-primary z-10" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-40 h-40 border border-primary/20 rounded-full animate-ping opacity-20" />
         <div className="w-60 h-60 border border-cyan-500/20 rounded-full animate-ping opacity-10 animation-delay-500" />
      </div>
      <div className="text-center z-10 mt-4 bg-[#0a0a0f]/80 p-3 rounded border border-white/10 backdrop-blur-md">
         <div className="text-sm font-mono text-cyan-400">Searching 1.2M internal documents...</div>
         <div className="text-xs text-muted-foreground mt-1">Returned exact answer in 1.4s</div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge="Corporate Intelligence"
        title="Unify Fragmented Silos into a Secure Brain."
        description="Stop losing 30% of employee productivity to data searching. Unify engineering wikis, HR policies, and Slack logs into a secure RAG repository with strict access control."
        ctaPrimary="Build Internal Hub"
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "30%", label: "Productivity Recovered" },
          { value: "<2s", label: "Enterprise Search Latency" },
          { value: "100%", label: "RBAC Compliance" }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title="The Unified Knowledge Protocol" 
        description="How Syrix creates a single pane of glass without moving your underlying data." 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title="Intelligence That Respects Boundaries"
        tabs={[
          {
            id: 'search',
            title: 'Cross-Silo Discovery',
            description: 'Search across scattered folders simultaneously and extract perfect contextual answers with citations.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full">
                 <FolderSearch className="w-16 h-16 text-primary opacity-50 mb-4 animate-pulse" />
                 <div className="flex gap-2">
                   <span className="text-xs border border-white/20 bg-white/5 px-2 py-1 rounded">G-Drive</span>
                   <span className="text-xs border border-white/20 bg-white/5 px-2 py-1 rounded">Confluence</span>
                   <span className="text-xs border border-white/20 bg-white/5 px-2 py-1 rounded">Slack</span>
                 </div>
              </div>
            )
          },
          {
            id: 'rbac',
            title: 'Strict RBAC Security',
            description: 'Employees only access information they possess privileges to read. Zero data leakage.',
            visual: (
              <div className="flex items-center justify-center h-full w-full">
                 <div className="bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 shadow-2xl">
                    <Lock className="w-8 h-8 text-emerald-500" />
                    <div>
                      <div className="text-sm font-bold text-emerald-500">Access Verified</div>
                      <div className="text-xs text-muted-foreground">Identity Token Matches Document ACL</div>
                    </div>
                 </div>
              </div>
            )
          },
          {
            id: 'realtime',
            title: 'Real-Time Vector Sync',
            description: 'Drop an updated SOP into a folder, and the core brain updates instantly in milliseconds.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full">
                 <Network className="w-12 h-12 text-primary mb-4" />
                 <span className="text-sm font-mono text-cyan-400">Syncing changes... 100%</span>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title="Deploy Across Departments"
        useCases={[
          {
            title: "Corporate Compliance & HR",
            description: "HR professionals are constantly overwhelmed by repetitive employee inquiries. Syrix indexes all corporate guidelines into isolated collections. Employees get instant answers about insurance or leave, while executive payroll data remains completely ring-fenced.",
            visual: (
               <div className="p-6 h-full flex items-center justify-center">
                  <ShieldCheck className="w-20 h-20 text-emerald-500" />
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title="Connects with your Knowledge Stack" />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
