'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Check, TrendingUp, Clock, Users, Building, FileText, DollarSign } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function FinSprint() {
  const t = useTranslations();

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
              FinSprint Case Study
            </motion.h1>
            <motion.p className="mb-10 text-lg text-muted-foreground md:text-xl">
              FinTech Startup, 200 Employees | VP of Customer Success: Mai Tran
            </motion.p>
            <Link href="/book-demo">
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25">
                See Our Results
                <ArrowRight className="h-5 w-5" />
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
                <h2 className="mb-6 text-2xl font-bold text-destructive">Before Syrix</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                    <span className="text-sm">500 daily support tickets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                    <span className="text-sm">4-hour average response time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                    <span className="text-sm">15 full-time support agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                    <span className="text-sm">12% churn rate due to slow response</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-emerald-500">After Syrix</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="text-sm">First response time: 4 hours → under 10 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="text-sm">80% tickets auto-resolved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="text-sm">Support team reduced: 15 → 5 agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="text-sm">+35% lead conversion rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-border bg-card p-8"
            >
              <h2 className="mb-6 text-2xl font-bold">Implementation</h2>
              <p className="text-muted-foreground mb-6">
                FinSprint deployed Syrix Help Desk + AI Agent to transform their customer support operations. The AI-powered solution handles routine inquiries autonomously while escalating complex issues to human agents when necessary.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="text-center">
                  <Clock className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold">3-6 Weeks</h3>
                  <p className="text-sm text-muted-foreground">Deployment time</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-cyan-500" />
                  <h3 className="mb-2 font-semibold">95%</h3>
                  <p className="text-sm text-muted-foreground">Automated resolution rate</p>
                </div>
                <div className="text-center">
                  <DollarSign className="mx-auto mb-4 h-12 w-12 text-emerald-500" />
                  <h3 className="mb-2 font-semibold">~$240K</h3>
                  <p className="text-sm text-muted-foreground">Annual cost savings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}