'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTA from '@/components/layout/cta';
import AnimatedTerminal from '@/components/ui/animated-terminal';
import { BeforeAfterFlowchart } from '@/components/ui/flowchart';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { ProductBentoGrid } from '@/components/home/product-bento';
import { SolutionsShowcase } from '@/components/home/solutions-showcase';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      {/* Act 1: The Hook (Hero) */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-[58px] md:leading-[1.1]">
                {t('hero.headline')}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl"
            >
              {t('hero.subheadline')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-4 mb-16"
            >
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:bg-primary/90 hover:scale-105">
                  {t('hero.cta')}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <AnimatedTerminal />
              
              {/* Decorative nodes behind terminal */}
              <div className="absolute -left-12 top-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
              <div className="absolute -right-12 top-1/2 w-24 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Act 2: The Pain (Problem) */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                {t('problem.headline')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('problem.body')}</p>
            </motion.div>

            <BeforeAfterFlowchart />
          </div>
        </div>
      </section>

      {/* Act 3: The Engine (Architecture) */}
      <ArchitectureDiagram 
        title="The Intelligence Engine" 
        description="How Syrix bridges the gap between conversational AI and enterprise backend execution."
      />

      {/* Act 4: The Arsenal (Product Bento) */}
      <ProductBentoGrid />

      {/* Act 5: The Application (Solutions) */}
      <SolutionsShowcase />

      {/* Act 6: Ecosystem */}
      <EcosystemGrid />

      {/* Act 7: Metrics & Proof */}
      <MetricsBanner 
        metrics={[
          { value: '70%', label: 'Handling Time Reduced' },
          { value: '95%', label: 'Automated Resolution' },
          { value: '40%', label: 'Internal Search Time Saved' },
        ]}
      />

      {/* Final CTA */}
      <CTA />

    </main>
  );
}