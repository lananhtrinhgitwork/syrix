'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Zap, Puzzle, Link2, Target } from 'lucide-react';
import WorkflowBuilderMockup from './WorkflowBuilderMockup';

export default function WorkflowSection() {
  const t = useTranslations('helpDesk.workflow');

  const features = [
    { icon: Zap, text: t('feature1') },
    { icon: Puzzle, text: t('feature2') },
    { icon: Link2, text: t('feature3') },
    { icon: Target, text: t('feature4') },
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                {t('badge')}
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t('heading')}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {t('subheading')}
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="rounded-lg bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Workflow Builder Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <WorkflowBuilderMockup />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-3xl text-center text-muted-foreground"
            >
              {t('desc')}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center"
            >
              <a
                href="https://xcorp.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
              >
                {t('cta')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}