'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Users, DollarSign, Check, Shield } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function RealEstate() {
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
              Real Estate Solution
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg text-muted-foreground md:text-xl"
            >
              Automate lead qualification, property inquiries, and transaction workflows.
            </motion.p>
            <Link href="/book-demo">
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25">
                Contact Sales
                <Home className="h-5 w-5" />
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
                <h2 className="mb-6 text-2xl font-bold">Challenge</h2>
                <p className="text-muted-foreground">
                  High volume of property inquiries and complex transaction processes require immediate attention and accurate documentation.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold">Solution</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">Automated lead qualification and property inquiry responses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">Real-time property information retrieval from listings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">Automated transaction workflow management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">Multi-channel support (phone, chat, email)</span>
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