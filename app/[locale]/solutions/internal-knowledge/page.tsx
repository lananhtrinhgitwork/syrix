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
         <div className="text-sm font-mono text-cyan-400">
           {locale === 'vi' ? 'Đang tìm kiếm 1.2M tài liệu nội bộ...' : 'Searching 1.2M internal documents...'}
         </div>
         <div className="text-xs text-muted-foreground mt-1">
           {locale === 'vi' ? 'Đã trả về câu trả lời chính xác trong 1.4s' : 'Returned exact answer in 1.4s'}
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
        ctaPrimary={locale === 'vi' ? 'Khởi tạo Hub nội bộ' : 'Build Internal Hub'}
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "30%", label: locale === 'vi' ? 'Hiệu suất được Phục hồi' : 'Productivity Recovered' },
          { value: "<2s", label: locale === 'vi' ? 'Độ trễ Tìm kiếm Doanh nghiệp' : 'Enterprise Search Latency' },
          { value: "100%", label: locale === 'vi' ? 'Tuân thủ Phân quyền RBAC' : 'RBAC Compliance' }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title={locale === 'vi' ? 'Giao thức Tri thức Hợp nhất' : 'The Unified Knowledge Protocol'} 
        description={locale === 'vi' ? 'Cách Syrix tạo ra một giao diện hiển thị duy nhất mà không cần dịch chuyển dữ liệu gốc của bạn.' : 'How Syrix creates a single pane of glass without moving your underlying data.'} 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title={locale === 'vi' ? 'Trí tuệ Nhân tạo Tôn trọng Ranh giới' : 'Intelligence That Respects Boundaries'}
        tabs={[
          {
            id: 'search',
            title: locale === 'vi' ? 'Khám phá Chéo Silo' : 'Cross-Silo Discovery',
            description: locale === 'vi' 
              ? 'Tìm kiếm đồng thời trên các thư mục phân tán và trích xuất câu trả lời chuẩn ngữ cảnh kèm nguồn trích dẫn.'
              : 'Search across scattered folders simultaneously and extract perfect contextual answers with citations.',
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
            title: locale === 'vi' ? 'Bảo mật RBAC Nghiêm ngặt' : 'Strict RBAC Security',
            description: locale === 'vi' 
              ? 'Nhân viên chỉ tiếp cận các thông tin họ có quyền đọc. Tuyệt đối không rò rỉ dữ liệu.'
              : 'Employees only access information they possess privileges to read. Zero data leakage.',
            visual: (
              <div className="flex items-center justify-center h-full w-full">
                 <div className="bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 shadow-2xl">
                    <Lock className="w-8 h-8 text-emerald-500" />
                    <div>
                      <div className="text-sm font-bold text-emerald-500">{locale === 'vi' ? 'Đã Xác minh Truy cập' : 'Access Verified'}</div>
                      <div className="text-xs text-muted-foreground">{locale === 'vi' ? 'Token Danh tính Trùng khớp ACL Tài liệu' : 'Identity Token Matches Document ACL'}</div>
                    </div>
                 </div>
              </div>
            )
          },
          {
            id: 'realtime',
            title: locale === 'vi' ? 'Đồng bộ Vector Thời gian thực' : 'Real-Time Vector Sync',
            description: locale === 'vi' 
              ? 'Thả một SOP cập nhật vào thư mục, bộ não AI lập tức cập nhật dữ liệu sau vài mili-giây.'
              : 'Drop an updated SOP into a folder, and the core brain updates instantly in milliseconds.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full">
                 <Network className="w-12 h-12 text-primary mb-4" />
                 <span className="text-sm font-mono text-cyan-400">{locale === 'vi' ? 'Đang đồng bộ thay đổi... 100%' : 'Syncing changes... 100%'}</span>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title={locale === 'vi' ? 'Triển khai Trên khắp Các phòng ban' : 'Deploy Across Departments'}
        useCases={[
          {
            title: locale === 'vi' ? 'Tuân thủ Pháp chế & Nhân sự' : 'Corporate Compliance & HR',
            description: locale === 'vi' 
              ? 'Nhân viên HR liên tục bị quá tải bởi các yêu cầu lặp đi lặp lại của nhân viên. Syrix lập chỉ mục toàn bộ hướng dẫn quy chế vào các bộ sưu tập cô lập. Nhân viên tra cứu nhanh về bảo hiểm hoặc nghỉ phép, trong khi bảng lương ban giám đốc được cô lập tuyệt đối.'
              : 'HR professionals are constantly overwhelmed by repetitive employee inquiries. Syrix indexes all corporate guidelines into isolated collections. Employees get instant answers about insurance or leave, while executive payroll data remains completely ring-fenced.',
            visual: (
               <div className="p-6 h-full flex items-center justify-center">
                  <ShieldCheck className="w-20 h-20 text-emerald-500" />
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title={locale === 'vi' ? 'Kết nối với Hệ thống Tri thức của bạn' : 'Connects with your Knowledge Stack'} />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
