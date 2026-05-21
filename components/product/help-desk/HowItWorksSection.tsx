'use client';

import { motion } from 'framer-motion';

import InstructionsIllustration from './InstructionsIllustration';
import KnowledgeIllustration from './KnowledgeIllustration';
import MCPToolsIllustration from './MCPToolsIllustration';
import SuggestionsIllustration from './SuggestionsIllustration';

interface StepItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
}

interface Props {
  t: (key: string) => any;
  tRaw: (key: string) => any;
}

const stepAccents: Record<string, { color: string; glow: string }> = {
  identity: { color: 'text-cyan-400', glow: 'shadow-cyan-500/10' },
  knowledge: { color: 'text-emerald-400', glow: 'shadow-emerald-500/10' },
  mcp: { color: 'text-amber-400', glow: 'shadow-amber-500/10' },
  suggestion: { color: 'text-purple-400', glow: 'shadow-purple-500/10' },
};

const stepIllustrations: Record<string, React.ReactNode> = {
  identity: <InstructionsIllustration />,
  knowledge: <KnowledgeIllustration />,
  mcp: <MCPToolsIllustration />,
  suggestion: <SuggestionsIllustration />,
};

export default function HowItWorksSection({ t, tRaw }: Props) {
  const stepsData = (tRaw('howItWorks.steps') as StepItem[]) || [];

  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t('howItWorks.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t('howItWorks.subtitle')}
            </p>
          </motion.div>

          {/* Alternating Step Cards */}
          <div className="space-y-16">
            {stepsData.map((step, i) => {
              const accent = stepAccents[step.id] || { color: 'text-primary', glow: 'shadow-primary/10' };
              const illustration = stepIllustrations[step.id] || null;
              const isReversed = i % 2 !== 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center bg-[#12121a]/30 border border-white/5 p-8 md:p-12 rounded-2xl transition-all duration-300 hover:border-white/10 hover:shadow-lg ${accent.glow}`}
                >
                  {/* Text Content */}
                  <div className={isReversed ? 'lg:order-last' : ''}>
                    <span className={`inline-block text-xs font-bold uppercase tracking-widest ${accent.color}`}>
                      {step.tag}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white tracking-tight md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="rounded-xl border border-white/10 bg-[#0a0a0f]/60 p-4 backdrop-blur-sm shadow-inner">
                    {illustration}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}