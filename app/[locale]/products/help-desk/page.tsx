'use client';

import { useTranslations } from 'next-intl';
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

  const HeroMockup = (
    <div className="h-[300px] flex flex-col justify-end p-2">
      <div className="flex gap-3 items-start flex-row-reverse mb-4">
         <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 text-xs">You</div>
         <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none border border-primary/30 text-sm text-gray-200">
           Cancel my pro subscription and process a refund to my original card.
         </div>
      </div>
      <div className="flex gap-3 items-start mb-4">
         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-primary" /></div>
         <div className="bg-[#1a1a24] p-3 rounded-2xl rounded-tl-none border border-white/5 text-sm text-gray-300 w-full max-w-[280px]">
           <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1 border-b border-white/5 pb-2">
             <Sparkles className="w-3 h-3 text-cyan-400" /> Checking Stripe Billing API...
           </div>
           I've successfully canceled the Pro subscription. A refund of $49.00 has been initiated to your Visa ending in 4242. It will appear in 3-5 business days.
         </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge="Autonomous Help Desk"
        title="Support that acts, not just talks."
        description="Stop deflecting tickets with FAQ articles. Syrix reads your internal policies and executes real account changes via secure APIs—resolving 80% of tier-1 support autonomously."
        ctaPrimary="See it in Action"
        mockupContent={HeroMockup}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "80%", label: "Tickets Resolved Instantly" },
          { value: "24/7", label: "Global Coverage" },
          { value: "<200ms", label: "Response Latency" }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title="The Intelligence Loop" 
        description="How Syrix bridges the gap between static knowledge and real-time backend execution." 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title="More Than A Chatbot"
        subtitle="Core capabilities built for enterprise-grade customer experience."
        tabs={[
          {
            id: 'rag',
            title: 'Zero-Hallucination Answers',
            description: 'Answers strictly generated from admin-uploaded PDF manuals. No guessing.',
            visual: (
              <div className="text-sm bg-black/50 p-6 rounded-xl border border-white/10 w-full">
                 <p className="mb-4">"According to our <span className="text-primary underline">Return Policy v2.pdf</span>, you have 30 days to return the item."</p>
                 <div className="flex items-center gap-2 text-emerald-400"><CheckCircle2 className="w-4 h-4" /> Citation Verified</div>
              </div>
            )
          },
          {
            id: 'mcp',
            title: 'Autonomous API Actions',
            description: 'The agent securely updates CRM records, triggers refunds, or checks inventory live.',
            visual: (
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between p-3 border border-primary/30 bg-primary/10 rounded-lg">
                  <span className="text-sm">Initiate API: <code>/v1/stripe/refund</code></span>
                  <Lock className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex items-center justify-between p-3 border border-emerald-500/30 bg-emerald-500/10 rounded-lg">
                  <span className="text-sm font-medium text-emerald-500">200 OK: Refund Processed</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            )
          },
          {
            id: 'handoff',
            title: 'Seamless Human Handoff',
            description: 'Instantly escalates complex issues to human agents with full context attached.',
            visual: (
              <div className="p-6">
                 <div className="p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg mb-4 flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <p className="text-sm text-yellow-200/80">Sentiment dropped. Routing to Human Tier 2 Queue...</p>
                 </div>
                 <div className="bg-card p-4 rounded-lg text-xs text-muted-foreground">
                   [Context Packet Sent] User: "I am extremely angry about this delay..."
                 </div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title="Built for the Frontlines"
        useCases={[
          {
            title: "Night-Shift SLA Adherence",
            description: "Handle high-volume ticket surges at 3 AM. Syrix processes returns, answers technical queries, and updates orders while your human team sleeps—ensuring global SLA targets are met.",
            visual: (
              <div className="p-6 flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-bold text-white">500+ Concurrent Chats</p>
                  <p className="text-sm text-muted-foreground">Processed automatically</p>
                </div>
              </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title="Plugs right into your tech stack" />

      {/* 7. FAQ & CTA */}
      <FAQSection t={t} tRaw={tRaw} />
      <FinalCTASection t={t} tRaw={tRaw} />
    </main>
  );
}
