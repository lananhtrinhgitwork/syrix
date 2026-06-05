'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SolutionHeroProps {
  badge: string;
  title: string;
  description: string;
  visual: React.ReactNode;
}

export function SolutionHero({ badge, title, description, visual }: SolutionHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left"
          >
            <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400 mb-6 border border-cyan-500/20">
              {badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              {description}
            </p>
            <Link href="/book-demo">
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:bg-primary/90 hover:scale-105">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0f]/80 p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              <div className="relative z-10">
                {visual}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
