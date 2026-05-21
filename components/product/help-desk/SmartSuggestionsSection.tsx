'use client';

import { motion } from 'framer-motion';
import { SmartSuggestionsFlow } from './FlowDiagram';
import type { UseTranslationsReturnValue } from './types';

interface Props {
  t: (key: string) => any;
  tRaw: (key: string) => any;
}

export default function SmartSuggestionsSection({ t, tRaw }: Props) {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                {t('smartSuggestions.title')}
              </h2>
              <p className="text-muted-foreground">{t('smartSuggestions.desc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SmartSuggestionsFlow />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}