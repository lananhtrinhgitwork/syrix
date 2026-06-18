'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Lock, Server } from 'lucide-react';
import CTA from '@/components/layout/cta';
import { PricingTiers } from '@/components/pricing/pricing-tiers';
import { UsageExplanation } from '@/components/pricing/usage-explanation';

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <main className="min-h-screen pb-32">
      {/* Act 1: Value Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-500/5 pointer-events-none" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Invest in Outcomes. <br className="hidden md:block" />Not Seats.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl"
            >
              Stop paying for inactive users. Syrix aligns pricing directly with your operational velocity. You only pay for the exact volume of work the AI executes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-600 hover:scale-105">
                  Calculate Your ROI
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Act 2: The 3 Core Packages (From Figma) */}
        <div className="mt-12 relative z-10">
          <PricingTiers />
        </div>
      </section>

      {/* Act 3 & 4: Usage-Based Engine & On-Premise */}
      <section className="bg-black border-y border-white/10 relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        <div className="relative z-10">
          <UsageExplanation />
        </div>


      {/* Act 5: Enterprise Customization */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12 mb-12">
           <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#1a1a24] to-[#0a0a0f] border border-amber-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Server className="w-8 h-8 text-amber-500" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-1">On-Premise & Dedicated VPC <Lock className="w-4 h-4 text-amber-500" /></h3>
                    <p className="text-sm text-gray-400">For organizations with strict compliance, deploy Syrix completely isolated within your own cloud infrastructure.</p>
                 </div>
              </div>
              <Link href="/contact">
                 <button className="px-6 py-3 border border-amber-500/50 text-amber-500 rounded-lg text-sm font-semibold hover:bg-amber-500/10 transition-colors whitespace-nowrap">
                   Contact Security Team
                 </button>
              </Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
    </main>
  );
}