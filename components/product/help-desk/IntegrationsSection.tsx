'use client';

import { motion } from 'framer-motion';
import { Database, Mail, Calendar, Package, Settings, Globe } from 'lucide-react';
import type { UseTranslationsReturnValue } from './types';

interface Props {
  t: (key: string) => any;
  tRaw: (key: string) => any;
}

const integrations = [
  { name: 'Salesforce', Icon: Database },
  { name: 'HubSpot', Icon: Mail },
  { name: 'Google Calendar', Icon: Calendar },
  { name: 'Stripe', Icon: Package },
  { name: 'Zoho', Icon: Settings },
  { name: 'Zalo', Icon: Globe },
  { name: 'Slack', Icon: Mail },
  { name: 'MCP Protocol', Icon: Database },
];

export default function IntegrationsSection({ t, tRaw }: Props) {
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
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t('integrations.title')}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t('integrations.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {integrations.map(({ name, Icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, filter: 'grayscale(0)' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all grayscale hover:border-cyan-500/30 hover:bg-white/5"
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}