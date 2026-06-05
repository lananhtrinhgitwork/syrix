'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Mic, Send, ServerCog, Activity, Headphones } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { FAQSection } from '@/components/ui/faq-section';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function MeetingExecutionSolution() {
  const t = useTranslations('solutions.meetingExecution');
  const locale = useLocale();

  const faqs = locale === 'vi' ? [
    { question: "Hệ thống có nhận diện được nhiều người nói cùng lúc không?", answer: "Có. Thuật toán Diarization thế hệ mới cho phép tách chính xác nhiều giọng nói chồng chéo trong các cuộc họp đông người." },
    { question: "Tôi có thể ra lệnh bằng giọng nói khi đang lái xe không?", answer: "Có, bạn chỉ cần đọc một câu tóm tắt, Syrix sẽ phiên dịch giọng nói và tự động tạo ticket Jira hoặc gửi báo cáo vào Slack." }
  ] : [
    { question: "Can the system recognize multiple speakers simultaneously?", answer: "Yes. Our next-gen Diarization algorithms accurately separate overlapping voices in crowded meetings." },
    { question: "Can I issue voice commands while driving?", answer: "Yes, you can record a brief voice memo, and Syrix will transcribe it and automatically create Jira tickets or send Slack updates." }
  ];

  const HeroVisual = (
    <div className="flex flex-col gap-4 p-4 h-[300px] justify-center items-center relative">
      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
           <div key={i} className="w-2 bg-cyan-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 40 + 20}px`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-4 py-2 rounded-full text-xs font-mono flex items-center gap-2">
         <Send className="w-3 h-3" /> Auto-created Jira Ticket
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge="Executive Workspace"
        title="Convert Voice Streams into System Commands."
        description="Stop wasting hours on meeting minutes and manual data entry. Syrix processes multi-speaker audio and automatically pushes action items to Jira or Slack."
        ctaPrimary="Transform Meetings"
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "5hrs", label: "Saved per manager / week" },
          { value: "100%", label: "Commitment Tracking" },
          { value: "0", label: "Manual Data Entry" }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title="The Voice-to-Action Protocol" 
        description="How spoken language translates seamlessly into backend system state changes." 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title="Unrivaled Operational Momentum"
        tabs={[
          {
            id: 'minutes',
            title: 'Automated Minutes',
            description: 'Instantly convert 2-hour conversational data into brief executive summaries with structured checkmarks.',
            visual: (
              <div className="w-full max-w-sm p-6 bg-card border border-white/10 rounded-lg shadow-xl text-sm">
                <div className="font-bold border-b border-white/10 pb-2 mb-2">Meeting: Q3 Planning</div>
                <ul className="space-y-2 text-muted-foreground">
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Budget approved for marketing.</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Hiring paused until Q4.</li>
                </ul>
              </div>
            )
          },
          {
            id: 'jira',
            title: 'Jira & Slack Sync',
            description: 'The agent reads extracted action items and calls MCP tools to deploy engineering tasks autonomously.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full p-6">
                 <ServerCog className="w-12 h-12 text-primary mb-4" />
                 <span className="text-sm text-center">Syncing action items to Jira Board...</span>
              </div>
            )
          },
          {
            id: 'voice',
            title: 'On-the-Go Commands',
            description: 'Record quick voice memos while commuting. Syrix transcribes it and executes internal workflows.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full p-6">
                 <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center border border-primary/50 animate-pulse mb-4">
                    <Mic className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-xs bg-black/50 p-2 rounded">"Open an IT ticket to fix VPN access."</div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title="Executive Scenarios"
        useCases={[
          {
            title: "Post-Meeting Friction",
            description: "Following strategic meetings, administrative assistants spend half a day compiling summaries. Commitments evaporate and project momentum stalls. Syrix Speech to Text processes the audio, separates 8 unique speakers, and pushes structured tasks to Jira.",
            visual: (
               <div className="p-6 h-full flex flex-col items-center justify-center">
                  <Activity className="w-16 h-16 text-primary mb-4" />
                  <div className="text-lg font-bold text-white text-center">Accelerate Project Momentum</div>
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title="Connects with your Meeting Stack" />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}
