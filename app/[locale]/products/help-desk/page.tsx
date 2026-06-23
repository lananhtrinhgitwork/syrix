'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Bot, ArrowRight, CheckCircle2, Lock, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';
import FAQSection from '@/components/product/help-desk/FAQSection';
import FinalCTASection from '@/components/product/help-desk/FinalCTASection';

export default function HelpDeskPage() {
  const t = useTranslations('helpDesk');
  const tRaw = t.raw;
  const locale = useLocale();

  const HeroMockup = (
    <div className="h-[300px] flex flex-col justify-end p-2">
      <div className="flex gap-3 items-start flex-row-reverse mb-4">
         <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 text-xs">{locale === 'vi' ? 'Bạn' : 'You'}</div>
         <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none border border-primary/30 text-sm text-gray-200">
           {t('heroPage.userMessage')}
         </div>
      </div>
      <div className="flex gap-3 items-start mb-4">
         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-primary" /></div>
         <div className="bg-[#1a1a24] p-3 rounded-2xl rounded-tl-none border border-white/5 text-sm text-gray-300 w-full max-w-[280px]">
            <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1 border-b border-white/5 pb-2">
              <Sparkles className="w-3 h-3 text-cyan-400" /> {t('heroPage.systemChecking')}
            </div>
            {t('heroPage.systemResponse')}
         </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge={t('heroPage.badge')}
        title={t('heroPage.title')}
        description={t('heroPage.description')}
        ctaPrimary={t('heroPage.ctaPrimary')}
        mockupContent={HeroMockup}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "80%", label: t('metricsPage.resolved') },
          { value: "24/7", label: t('metricsPage.coverage') },
          { value: "<200ms", label: t('metricsPage.latency') }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title={t('architecturePage.title')} 
        description={t('architecturePage.description')} 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title={t('featuresPage.title')}
        subtitle={t('featuresPage.subtitle')}
        tabs={[
          {
            id: 'rag',
            title: t('featuresPage.ragTitle'),
            description: t('featuresPage.ragDesc'),
            visual: (
              <div className="text-sm bg-black/50 p-6 rounded-xl border border-white/10 w-full">
                 <p className="mb-4">"{t('featuresPage.ragQuote')}"</p>
                 <div className="flex items-center gap-2 text-emerald-400"><CheckCircle2 className="w-4 h-4" /> {t('featuresPage.ragVerified')}</div>
              </div>
            )
          },
          {
            id: 'mcp',
            title: t('featuresPage.mcpTitle'),
            description: t('featuresPage.mcpDesc'),
            visual: (
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between p-3 border border-primary/30 bg-primary/10 rounded-lg">
                  <span className="text-sm">{t('featuresPage.mcpApi')}</span>
                  <Lock className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex items-center justify-between p-3 border border-emerald-500/30 bg-emerald-500/10 rounded-lg">
                  <span className="text-sm font-medium text-emerald-500">{t('featuresPage.mcpOk')}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            )
          },
          {
            id: 'handoff',
            title: t('featuresPage.handoffTitle'),
            description: t('featuresPage.handoffDesc'),
            visual: (
              <div className="p-6">
                 <div className="p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg mb-4 flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <p className="text-sm text-yellow-200/80">{t('featuresPage.handoffStatus')}</p>
                 </div>
                 <div className="bg-card p-4 rounded-lg text-xs text-muted-foreground">
                   {t('featuresPage.handoffPacket')}
                 </div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title={t('useCasePage.title')}
        useCases={[
          {
            title: t('useCasePage.slaTitle'),
            description: t('useCasePage.slaDesc'),
            visual: (
              <div className="p-6 flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-bold text-white">{t('useCasePage.chats')}</p>
                  <p className="text-sm text-muted-foreground">{t('useCasePage.autoProcessed')}</p>
                </div>
              </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title={t('ecosystemTitle')} />

      {/* 7. FAQ & CTA */}
      <FAQSection t={t} tRaw={tRaw} />
      <FinalCTASection t={t} tRaw={tRaw} />
    </main>
  );
}
