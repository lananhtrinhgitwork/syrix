'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import HeroSection from '@/components/product/help-desk/HeroSection';
import ProblemSolutionSection from '@/components/product/help-desk/ProblemSolutionSection';
import CapabilitiesGrid from '@/components/product/help-desk/CapabilitiesGrid';
import HowItWorksSection from '@/components/product/help-desk/HowItWorksSection';
import WorkflowSection from '@/components/product/help-desk/WorkflowSection';
import UseCasesGrid from '@/components/product/help-desk/UseCasesGrid';
import SmartSuggestionsSection from '@/components/product/help-desk/SmartSuggestionsSection';
import FAQSection from '@/components/product/help-desk/FAQSection';
import FinalCTASection from '@/components/product/help-desk/FinalCTASection';

export default function HelpDeskPage() {
  const t = useTranslations('helpDesk');
  const tRaw = t.raw;

  return (
    <main className="min-h-screen pb-32">
      <HeroSection t={t} tRaw={tRaw} />
      <ProblemSolutionSection t={t} tRaw={tRaw} />
      <CapabilitiesGrid t={t} />
      <HowItWorksSection t={t} tRaw={tRaw} />
      <WorkflowSection />
      <UseCasesGrid t={t} tRaw={tRaw} />
      <SmartSuggestionsSection t={t} tRaw={tRaw} />
      <FAQSection t={t} tRaw={tRaw} />
      <FinalCTASection t={t} tRaw={tRaw} />
    </main>
  );
}
