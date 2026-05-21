'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function BookDemo() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pb-32">
      {/* Hero */}
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
              {t('bookDemo.headline')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg text-muted-foreground md:text-xl"
            >
              {t('bookDemo.subtext')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25">
                  {t('bookDemo.form.submit')}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-border bg-card p-8"
            >
              <h2 className="mb-8 text-2xl font-bold">{t('bookDemo.form.submit')}</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.name')}</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.email')}</label>
                  <input type="email" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.company')}</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.companySize')}</label>
                  <select className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>&lt;50</option>
                    <option>50-200</option>
                    <option>200-1,000</option>
                    <option>1,000+</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.challenge')}</label>
                  <textarea rows={4} className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  {t('bookDemo.form.submit')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
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
              <h2 className="mb-4 text-3xl font-bold text-foreground">{t('bookDemo.quickContact')}</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-center">Email</h3>
                <p className="text-sm text-muted-foreground text-center">hello@syrix.ai</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <Phone className="mx-auto mb-4 h-8 w-8 text-cyan-500" />
                <h3 className="mb-2 font-semibold text-center">Phone</h3>
                <p className="text-sm text-muted-foreground text-center">[insert number]</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <MapPin className="mx-auto mb-4 h-8 w-8 text-emerald-500" />
                <h3 className="mb-2 font-semibold text-center">Location</h3>
                <p className="text-sm text-muted-foreground text-center">Vietnam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}