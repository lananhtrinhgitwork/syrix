'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Shield, Users, TrendingUp, Clock, Search } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
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
            >
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25">
                  {t('hero.cta')}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t('problem.headline')}
              </h2>
              <p className="text-lg text-muted-foreground">{t('problem.body')}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <h3 className="mb-6 text-2xl font-bold text-destructive">{t('problem.before')}</h3>
                <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{t('problem.beforeDescription')}</pre>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <h3 className="mb-6 text-2xl font-bold text-primary">{t('problem.after')}</h3>
                <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{t('problem.afterDescription')}</pre>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t('howItWorks.headline')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {[
                {
                  number: '01',
                  icon: <Zap className="h-8 w-8 text-primary" />,
                  title: t('howItWorks.step1.title'),
                  description: t('howItWorks.step1.description'),
                },
                {
                  number: '02',
                  icon: <Search className="h-8 w-8 text-cyan-500" />,
                  title: t('howItWorks.step2.title'),
                  description: t('howItWorks.step2.description'),
                },
                {
                  number: '03',
                  icon: <Shield className="h-8 w-8 text-emerald-500" />,
                  title: t('howItWorks.step3.title'),
                  description: t('howItWorks.step3.description'),
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="rounded-xl border border-border bg-card p-8 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      {step.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t('productSuite.headline')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: t('navigation.helpDesk'),
                  tagline: t('helpDesk.capabilities.rag'),
                  bullets: [
                    'RAG-powered knowledge retrieval',
                    'Autonomous CRM lead creation',
                    'Intelligent escalation',
                    'Multi-channel deployment',
                  ],
                  href: '/products/help-desk',
                },
                {
                  title: t('navigation.aiAgent'),
                  tagline: t('aiAgent.capabilities.privateRetrieval'),
                  bullets: [
                    'Private knowledge retrieval',
                    'Cross-departmental synthesis',
                    'Zero data retention',
                  ],
                  href: '/products/ai-agent',
                },
                {
                  title: t('navigation.workspace'),
                  tagline: t('workspace.capabilities.taskAssignment'),
                  bullets: [
                    'Natural language task assignment',
                    'Automated thread summarization',
                    'Quick action triggers',
                  ],
                  href: '/products/workspace',
                },
                {
                  title: t('navigation.asr'),
                  tagline: 'Speak. Syrix handles the rest.',
                  bullets: [
                    'Real-time meeting transcription',
                    'Voice-driven task creation',
                    'Knowledge base contribution',
                  ],
                  href: '/products/asr',
                },
              ].map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={product.href}>
                    <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                      <h3 className="mb-3 text-lg font-bold">{product.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{product.tagline}</p>
                      <ul className="mb-6 space-y-2">
                        {product.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:gap-2">
                        {t('common.learnMore')}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t('metrics.headline')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '70%', label: 'Reduction in process handling time' },
                { value: '95%', label: 'Automated resolution rate' },
                { value: 'Days', label: 'Deployment time' },
                { value: '40%', label: 'Reduction in internal search time' },
              ].map((metric, index) => (
                <motion.div
                  key={metric.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-8 text-center"
                >
                  <div className="mb-2 text-4xl font-bold text-primary">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />

    </div>
  );
}