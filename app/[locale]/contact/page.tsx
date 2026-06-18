'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import CTA from '@/components/layout/cta';
import Logo from '@/components/ui/logo';

export default function Contact() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      <div className="relative z-10 w-full p-6">
        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
          <Logo className="h-8 w-auto" />
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 relative z-10 -mt-20">
        <div className="w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
              {t('contact.headline')}
            </h1>
            <p className="text-muted-foreground">
              {t('contact.subtext')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/50"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">{t('contact.form.name')}</label>
                  <input type="text" className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t('contact.form.email')}</label>
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{t('contact.form.company')}</label>
                <input type="text" className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{t('contact.form.companySize')}</label>
                <select className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none">
                  <option>&lt;50</option>
                  <option>50-200</option>
                  <option>200-1,000</option>
                  <option>1,000+</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{t('contact.form.challenge')}</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
              </div>
              <button className="mt-2 w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                {t('contact.form.submit')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}