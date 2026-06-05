'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductHeroProps {
  badge: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  mockupContent: React.ReactNode;
}

export function ProductHero({ badge, title, description, ctaPrimary, ctaSecondary, mockupContent }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6 border border-primary/20">
              {badge}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105">
                  {ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              {ctaSecondary && (
                <button className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10">
                  {ctaSecondary}
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Mockup Container */}
            <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              {mockupContent}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
