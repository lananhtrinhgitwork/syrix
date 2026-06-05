'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Lock, Shield, Database, FileText, Check, Users } from 'lucide-react';
import CTA from '@/components/layout/cta';
import Certifications from '@/components/trust-center/Certifications';

export default function Security() {
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
              Trust Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg text-muted-foreground md:text-xl"
            >
              Your data never leaves your control. XPERC is designed for organizations that demand the highest standards of security, privacy, and compliance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25">
                  Book Demo
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
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
              <h2 className="mb-4 text-3xl font-bold text-foreground">Security Pillars</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {(t.raw('security.pillars') as string[]) as any[] && (t.raw('security.pillars') as string[]).map((pillar: any, index: number) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    {index === 0 && <Shield className="h-8 w-8 text-primary" />}
                    {index === 1 && <Lock className="h-8 w-8 text-cyan-500" />}
                    {index === 2 && <Users className="h-8 w-8 text-emerald-500" />}
                    {index === 3 && <Database className="h-8 w-8 text-amber-500" />}
                    {index === 4 && <FileText className="h-8 w-8 text-purple-500" />}
                    {index === 5 && <Check className="h-8 w-8 text-pink-500" />}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* CTA */}
      <CTA />

    </div>
  );
}