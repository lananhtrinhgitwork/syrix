'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Check, DollarSign, TrendingUp, Zap } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function Pricing() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pb-32">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {t('pricing.headline')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              {t('pricing.subtext')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25">
                  {t('common.bookDemo')}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <h3 className="mb-2 text-2xl font-bold">{t('pricing.tiers.starter.name')}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{t('pricing.tiers.starter.bestFor')}</p>
                <p className="mb-6 text-4xl font-bold">{t('pricing.tiers.starter.price')}</p>
                <ul className="mb-8 space-y-3">
                  {(t.raw('pricing.tiers.starter.includes') as string[]) as string[] && (t.raw('pricing.tiers.starter.includes') as string[]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    {t('common.contactSales')}
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl border border-border bg-card p-8 ring-2 ring-primary"
              >
                <h3 className="mb-2 text-2xl font-bold">{t('pricing.tiers.growth.name')}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{t('pricing.tiers.growth.bestFor')}</p>
                <p className="mb-6 text-4xl font-bold">{t('pricing.tiers.growth.price')}</p>
                <ul className="mb-8 space-y-3">
                  {(t.raw('pricing.tiers.growth.includes') as string[]) as string[] && (t.raw('pricing.tiers.growth.includes') as string[]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    {t('common.contactSales')}
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <h3 className="mb-2 text-2xl font-bold">{t('pricing.tiers.enterprise.name')}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{t('pricing.tiers.enterprise.bestFor')}</p>
                <p className="mb-6 text-4xl font-bold">{t('pricing.tiers.enterprise.price')}</p>
                <ul className="mb-8 space-y-3">
                  {(t.raw('pricing.tiers.enterprise.includes') as string[]) as string[] && (t.raw('pricing.tiers.enterprise.includes') as string[]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    {t('common.contactSales')}
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage-Based Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">Usage-Based Pricing</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{t('pricing.usage.helpdesk')}</h3>
                <p className="mb-4 text-3xl font-bold text-primary">{t('pricing.usage.helpdeskPrice')}</p>
                <p className="text-sm text-muted-foreground">{t('pricing.usage.helpdeskAnalogy')}</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10">
                  <TrendingUp className="h-8 w-8 text-cyan-500" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{t('pricing.usage.automation')}</h3>
                <p className="mb-4 text-lg text-muted-foreground whitespace-pre-wrap">{t('pricing.usage.automationPrice')}</p>
                <p className="text-sm text-muted-foreground">1 run = 1 successful workflow execution</p>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-6 text-2xl font-bold">{t('pricing.usage.saas')}</h3>
                <div className="space-y-4">
                  {(t.raw('pricing.usage.saasItems') as string[]) as any[] && (t.raw('pricing.usage.saasItems') as string[]).map((item: any, index: number) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Bill */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">{t('pricing.sampleBill')}</h2>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('pricing.setup.helpdesk')}</span>
                  <span className="text-sm font-semibold">{t('pricing.setup.okr')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-sm font-semibold">{t('pricing.setup.totalSetup')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('pricing.monthly.helpdesk')}</span>
                  <span className="text-sm">{t('pricing.monthly.automation')}</span>
                </div>
                {String(t.raw('pricing.monthly.okr')).split('\n').map((item: string, i: number) => (
                  <div key={i} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-sm font-semibold">{t('pricing.monthly.pm')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-sm font-semibold">{t('pricing.monthly.leave')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-sm font-semibold">{t('pricing.monthly.timesheet')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-sm font-semibold">{t('pricing.monthly.totalMonthly')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">{t('pricing.comparison')}</h2>
            </motion.div>

            <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8">
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{t('pricing.comparisonText')}</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}