'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';
import type { UseTranslationsReturnValue } from './types';

interface Props {
  t: (key: string) => any;
  tRaw: (key: string) => any;
}

export default function ProblemSolutionSection({ t, tRaw }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative grid grid-cols-1 gap-0 md:grid-cols-2">
            {/* Center divider */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:block" />

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-l-xl border border-red-500/20 bg-gradient-to-br from-[#0a0a0f] to-red-950/10 p-8 md:p-12"
            >
              <h2 className="mb-8 text-2xl font-bold text-red-400 md:text-3xl">
                {t('problem.title')}
              </h2>
              <ul className="space-y-4">
                {(tRaw('problem.items') as string[]).map((item: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                      <X className="h-3.5 w-3.5 text-red-400" />
                    </div>
                    <span className="text-sm text-muted-foreground md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-r-xl border border-cyan-500/20 bg-gradient-to-br from-[#12121a] to-cyan-950/10 p-8 md:p-12"
            >
              <h2 className="mb-8 text-2xl font-bold text-cyan-400 md:text-3xl">
                {t('solution.title')}
              </h2>
              <ul className="space-y-4">
                {(tRaw('solution.items') as string[]).map((item: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm text-muted-foreground md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}