'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Users, Building2, Store, Shield, Award, TrendingUp } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function Customers() {
  const t = useTranslations();

  const caseStudies = [
    {
      company: 'FinSprint',
      industry: 'FinTech',
      employees: '200',
      result: '80% ticket auto-resolution, response time 4h → 10min',
      href: '/customers/fin-sprint',
    },
    {
      company: 'LandVista',
      industry: 'Real Estate',
      employees: '500',
      result: 'Search time 35min → 30sec, onboarding 2 weeks → 3 days',
      href: '/customers/land-vista',
    },
    {
      company: 'FlowTech',
      industry: 'B2B SaaS',
      employees: '100',
      result: 'Post-meeting admin → zero, 95% action item execution',
      href: '/customers/flow-tech',
    },
  ];

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
              {t('customers.headline')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg text-muted-foreground md:text-xl"
            >
              {t('customers.subtext')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
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
              <h2 className="mb-8 text-2xl font-bold">Trusted by Leading Enterprises</h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              {['FinTech', 'Real Estate', 'B2B SaaS', 'Retail', 'Manufacturing'].map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-center rounded-lg border border-border bg-background p-6"
                >
                  <span className="text-sm font-semibold">{logo}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
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
              <h2 className="mb-4 text-3xl font-bold text-foreground">Case Studies</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={caseStudy.href}>
                    <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                      <div className="mb-4 flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        <span className="text-sm font-semibold">{caseStudy.company}</span>
                      </div>
                      <p className="mb-4 text-xs text-muted-foreground">{caseStudy.industry} · {caseStudy.employees} employees</p>
                      <div className="mb-4 rounded-lg border border-border bg-background p-4">
                        <p className="text-sm font-semibold text-primary">{caseStudy.result}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:gap-2">
                        Read Case Study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

    </div>
  );
}