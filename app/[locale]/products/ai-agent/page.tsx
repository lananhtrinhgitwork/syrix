'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Database, Brain, ArrowRight, ShieldCheck, Search, Zap, ServerCog } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { FAQSection } from '@/components/ui/faq-section';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function AIAgentPage() {
  const t = useTranslations('aiAgent');
  const locale = useLocale();

  const faqs = locale === 'vi' ? [
    { question: "Syrix Agent có bảo mật không?", answer: "Có. Chúng tôi hỗ trợ triển khai on-premise hoặc VPC riêng, dữ liệu của bạn không bao giờ rời khỏi hệ thống." },
    { question: "Agent có thể chạy công việc tự động không?", answer: "Được, thông qua Model Context Protocol (MCP), Agent có thể cập nhật Jira, gửi Slack, hoặc kích hoạt các script nội bộ." }
  ] : [
    { question: "Is Syrix Agent secure?", answer: "Yes. We support on-premise or private VPC deployments. Your data never leaves your system." },
    { question: "Can the Agent run automated workflows?", answer: "Yes, via the Model Context Protocol (MCP), the Agent can update Jira, send Slack messages, or trigger internal scripts." }
  ];

  const HeroMockup = (
    <div className="h-[300px] flex items-center justify-center relative p-6">
      {/* Central Brain */}
      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 shadow-[0_0_40px_rgba(6,182,212,0.4)] z-20 relative">
        <Brain className="w-10 h-10 text-primary" />
        <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" />
      </div>
      
      {/* Connected nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[240px] h-full relative animate-[spin_15s_linear_infinite] opacity-60">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-gradient-to-b from-transparent to-cyan-400" />
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-gradient-to-t from-transparent to-purple-400" />
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-emerald-400" />
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[1px] bg-gradient-to-l from-transparent to-blue-400" />
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge={t('hero.badge')}
        title={t('hero.title')}
        description={t('hero.description')}
        ctaPrimary={t('hero.ctaPrimary')}
        mockupContent={HeroMockup}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "5hrs", label: t('metrics.savedPerWeek') },
          { value: "100%", label: t('metrics.isolation') },
          { value: "0", label: t('metrics.hallucinations') }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title={t('architecture.title')} 
        description={t('architecture.description')} 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title={t('features.title')}
        tabs={[
          {
            id: 'rbac',
            title: t('features.rbacTitle'),
            description: t('features.rbacDesc'),
            visual: (
              <div className="flex flex-col gap-4 p-6 w-full max-w-sm">
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-lg flex items-center justify-between">
                   <div className="text-sm">{t('features.rbacPublicPolicy')}</div>
                   <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg flex items-center justify-between opacity-50">
                   <div className="text-sm line-through">{t('features.rbacExecutivePayroll')}</div>
                   <div className="text-xs text-destructive border border-destructive/30 px-2 rounded">{t('features.rbacAccessDenied')}</div>
                </div>
              </div>
            )
          },
          {
            id: 'cross-silo',
            title: t('features.searchTitle'),
            description: t('features.searchDesc'),
            visual: (
              <div className="p-6">
                 <Search className="w-12 h-12 text-primary mx-auto mb-6 opacity-50 animate-pulse" />
                 <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                   <span className="bg-card px-3 py-1 rounded-full border border-white/10">Jira Ticket #849</span>
                   <span className="bg-card px-3 py-1 rounded-full border border-white/10">Slack #engineering</span>
                 </div>
              </div>
            )
          },
          {
            id: 'execution',
            title: t('features.executionTitle'),
            description: t('features.executionDesc'),
            visual: (
              <div className="p-6 bg-black/50 border border-white/10 rounded-xl">
                 <div className="text-sm text-muted-foreground mb-4 font-mono">$ reset-staging-server --force</div>
                 <div className="flex items-center gap-2 text-emerald-400 text-sm">
                    <ServerCog className="w-4 h-4" /> {t('features.executionSuccess')}
                 </div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title={t('useCase.title')}
        useCases={[
          {
            title: t('useCase.itTitle'),
            description: t('useCase.itDesc'),
            visual: (
              <div className="p-6 bg-card border border-white/10 rounded-lg flex flex-col gap-2">
                 <div className="text-xs text-muted-foreground">{t('useCase.slackWorkspace')}</div>
                 <div className="bg-white/5 p-3 rounded text-sm text-gray-300">{t('useCase.slackQuestion')}</div>
                 <div className="bg-primary/20 p-3 rounded text-sm text-gray-200 border border-primary/30 mt-2">
                   {t('useCase.slackAnswer')}
                 </div>
              </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title={t('ecosystemTitle')} />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
