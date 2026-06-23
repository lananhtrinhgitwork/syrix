'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Banknote, Check } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import CTA from '@/components/layout/cta';

export default function FinancialServices() {
  const t = useTranslations('industrySolutions');
  const locale = useLocale();

  return (
    <div className="min-h-screen pb-32">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {t('financialServices.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg text-muted-foreground md:text-xl"
            >
              {locale === 'vi' 
                ? 'Xử lý các tương tác khách hàng yêu cầu tuân thủ cao với AI không nói dối.'
                : 'Handle compliance-heavy customer interactions with zero-hallucination AI.'}
            </motion.p>
            <Link href="/book-demo">
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25">
                {t('contactSales')}
                <Banknote className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold">{t('challenge')}</h2>
                <p className="text-muted-foreground">
                  {t('financialServices.challengeDesc')}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold">{t('solution')}</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">{t('financialServices.bullet1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">{t('financialServices.bullet2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">{t('financialServices.bullet3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">{t('financialServices.bullet4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}