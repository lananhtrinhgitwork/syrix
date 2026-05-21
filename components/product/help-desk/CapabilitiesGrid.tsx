'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Users, Shield } from 'lucide-react';

interface CapabilitiesGridProps {
  t: (key: string) => string;
}

const icons = [Brain, Zap, Users, Shield];
const iconColors = ['text-primary', 'text-cyan-500', 'text-emerald-500', 'text-amber-500'];
const pillars = ['pillar1', 'pillar2', 'pillar3', 'pillar4'] as const;

export default function CapabilitiesGrid({ t }: CapabilitiesGridProps) {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">{t('capabilities.title')}</h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = icons[i];
              const color = iconColors[i];
              return (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className={`h-7 w-7 ${color}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {t(`capabilities.${pillar}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`capabilities.${pillar}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}