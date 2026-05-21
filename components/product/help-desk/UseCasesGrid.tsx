'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, HeadphonesIcon, TrendingUp, Building2, Banknote } from 'lucide-react';
import type { UseTranslationsReturnValue } from './types';

interface Props {
  t: (key: string) => any;
  tRaw: (key: string) => any;
}

const cases = [
  { key: 'case1', href: '/solutions/customer-support', Icon: HeadphonesIcon },
  { key: 'case2', href: '/solutions/customer-support', Icon: TrendingUp },
  { key: 'case3', href: '/solutions/real-estate', Icon: Building2 },
  { key: 'case4', href: '/solutions/financial-services', Icon: Banknote },
];

export default function UseCasesGrid({ t, tRaw }: Props) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {t('useCases.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cases.map(({ key, href, Icon }, i) => {
              const useCase = t(`useCases.${key}`);
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{useCase.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{useCase.desc}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2"
                  >
                    {useCase.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}