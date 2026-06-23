'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Mic, Activity, FileText, Send, ServerCog } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { FAQSection } from '@/components/ui/faq-section';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function SpeechToTextPage() {
  const t = useTranslations('speechToText');
  const locale = useLocale();

  const faqs = locale === 'vi' ? [
    { question: "Hỗ trợ bao nhiêu ngôn ngữ?", answer: "Hiện tại hệ thống nhận diện tốt nhất cho Tiếng Anh và Tiếng Việt, có khả năng phân biệt nhiều giọng vùng miền." },
    { question: "Có hỗ trợ tự động tóm tắt cuộc họp không?", answer: "Có, kết hợp với Agent, nó sẽ tự động tóm tắt và gán action items (công việc) cho các thành viên qua Slack/Jira." }
  ] : [
    { question: "How many languages are supported?", answer: "Currently, the system is optimized for English and Vietnamese, handling various regional accents effectively." },
    { question: "Does it support automated meeting summaries?", answer: "Yes, combined with our Agent, it automatically summarizes and assigns action items to members via Slack/Jira." }
  ];

  const HeroMockup = (
    <div className="h-[300px] flex flex-col items-center justify-center relative p-6">
      <div className="flex items-center justify-center gap-1 mb-8 w-full h-24">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="w-1.5 bg-cyan-400 rounded-full" 
            style={{ 
              height: `${Math.max(10, Math.random() * 100)}%`,
              animation: `pulse 1s infinite alternate`,
              animationDelay: `${i * 0.05}s`,
            }} 
          />
        ))}
      </div>
      <div className="bg-card p-4 rounded-xl border border-white/10 text-sm shadow-xl flex items-center gap-3">
         <ServerCog className="w-5 h-5 text-emerald-400" />
         <span>Extracting 3 Action Items from Meeting Audio...</span>
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
          { value: "99.2%", label: t('metricsPage.accuracy') },
          { value: "<200ms", label: t('metricsPage.latency') },
          { value: "0", label: t('metricsPage.notes') }
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
        tabs={[
          {
            id: 'diarization',
            title: t('featuresPage.diarizationTitle'),
            description: t('featuresPage.diarizationDesc'),
            visual: (
              <div className="p-6 flex flex-col gap-4 w-full">
                <div className="bg-card p-3 rounded-lg border-l-2 border-blue-500">
                   <span className="text-xs text-blue-400 font-bold">{t('featuresPage.diarizationSpk1')}</span>
                   <p className="text-sm">{t('featuresPage.diarizationSpk1Txt')}</p>
                </div>
                <div className="bg-card p-3 rounded-lg border-l-2 border-purple-500 ml-8">
                   <span className="text-xs text-purple-400 font-bold">{t('featuresPage.diarizationSpk2')}</span>
                   <p className="text-sm">{t('featuresPage.diarizationSpk2Txt')}</p>
                </div>
              </div>
            )
          },
          {
            id: 'extraction',
            title: t('featuresPage.extractionTitle'),
            description: t('featuresPage.extractionDesc'),
            visual: (
              <div className="p-6 bg-[#0a0a0f] border border-white/5 rounded-xl font-mono text-xs text-emerald-400 text-left">
                {`{
  "task": "${locale === 'vi' ? 'Phê duyệt ngân sách Q3' : 'Approve Q3 Budget'}",
  "owner": "${locale === 'vi' ? 'Người nói 2' : 'Speaker 2'}",
  "department": "${locale === 'vi' ? 'Tài chính' : 'Finance'}",
  "status": "${locale === 'vi' ? 'Đang tạo' : 'Pending Creation'}"
}`}
              </div>
            )
          },
          {
            id: 'voice-command',
            title: t('featuresPage.commandsTitle'),
            description: t('featuresPage.commandsDesc'),
            visual: (
              <div className="p-6 flex flex-col items-center justify-center h-full">
                 <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center animate-pulse mb-4">
                    <Mic className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-sm text-center">{t('featuresPage.commandsListening')}</div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title={t('useCasesPage.title')}
        useCases={[
          {
            title: t('useCasesPage.meetingTitle'),
            description: t('useCasesPage.meetingDesc'),
            visual: (
              <div className="p-6 h-full flex flex-col justify-center gap-4">
                 <div className="flex gap-2 text-sm text-muted-foreground"><div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" /> <span>{t('useCasesPage.visualDiscuss')}</span></div>
                 <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-sm text-emerald-500 flex items-center justify-between">
                    <span>{t('useCasesPage.visualCreated')}</span>
                    <Send className="w-4 h-4" />
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
