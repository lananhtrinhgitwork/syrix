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
        badge="Enterprise Speech AI"
        title="Turn conversations into completed tasks."
        description="Transcribe multi-speaker meetings with 99% accuracy, extract action items, and push updates directly to Jira or Slack via the AI Agent pipeline."
        ctaPrimary="Start Transcribing"
        mockupContent={HeroMockup}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "99.2%", label: "Accuracy on Tech Jargon" },
          { value: "<200ms", label: "Real-time Streaming Latency" },
          { value: "0", label: "Manual Meeting Notes Taken" }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title="From Voice to Velocity" 
        description="How unstructured audio becomes structured database actions." 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title="Next-Gen Diarization & Execution"
        tabs={[
          {
            id: 'diarization',
            title: 'Multi-Speaker Diarization',
            description: 'Accurately separates overlapping voices, labeling Speaker A vs Speaker B flawlessly.',
            visual: (
              <div className="p-6 flex flex-col gap-4 w-full">
                <div className="bg-card p-3 rounded-lg border-l-2 border-blue-500">
                   <span className="text-xs text-blue-400 font-bold">Speaker 1:</span>
                   <p className="text-sm">Let's approve the Q3 budget.</p>
                </div>
                <div className="bg-card p-3 rounded-lg border-l-2 border-purple-500 ml-8">
                   <span className="text-xs text-purple-400 font-bold">Speaker 2:</span>
                   <p className="text-sm">Agreed. I'll send it to finance.</p>
                </div>
              </div>
            )
          },
          {
            id: 'extraction',
            title: 'Action Item Extraction',
            description: 'Syrix listens to the context and pulls out structured tasks, deadlines, and owners.',
            visual: (
              <div className="p-6 bg-[#0a0a0f] border border-white/5 rounded-lg font-mono text-xs text-emerald-400 text-left">
                {`{
  "task": "Approve Q3 Budget",
  "owner": "Speaker 2",
  "department": "Finance",
  "status": "Pending Creation"
}`}
              </div>
            )
          },
          {
            id: 'voice-command',
            title: 'On-the-Go Voice Commands',
            description: 'Record a quick memo while commuting. Syrix transcribes it and commands the AI agent.',
            visual: (
              <div className="p-6 flex flex-col items-center justify-center h-full">
                 <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center animate-pulse mb-4">
                    <Mic className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-sm text-center">Listening for commands...</div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title="Zero-Friction Operations"
        useCases={[
          {
            title: "Automated Meeting Execution",
            description: "Following 2-hour strategic meetings, assistants spend hours compiling summaries. Syrix Speech to Text processes raw audio, structures the conversation into an executive checklist, and calls MCP tools to deploy engineering tasks into Jira automatically.",
            visual: (
              <div className="p-6 h-full flex flex-col justify-center gap-4">
                 <div className="flex gap-2 text-sm text-muted-foreground"><div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" /> <span>Discussed Q3 Roadmap</span></div>
                 <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-sm text-emerald-500 flex items-center justify-between">
                    <span>Task Created: Update Roadmap</span>
                    <Send className="w-4 h-4" />
                 </div>
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
