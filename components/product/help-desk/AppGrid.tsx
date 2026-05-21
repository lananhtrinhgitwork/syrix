'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const appIcons = [
  { name: 'SF', color: 'bg-blue-500/20 text-blue-400', tooltip: 'Salesforce' },
  { name: 'HB', color: 'bg-orange-500/20 text-orange-400', tooltip: 'HubSpot' },
  { name: 'GC', color: 'bg-red-500/20 text-red-400', tooltip: 'Google Calendar' },
  { name: 'ST', color: 'bg-indigo-500/20 text-indigo-400', tooltip: 'Stripe' },
  { name: 'GM', color: 'bg-blue-400/20 text-blue-300', tooltip: 'Gmail' },
  { name: 'SL', color: 'bg-green-500/20 text-green-400', tooltip: 'Slack' },
  { name: 'SH', color: 'bg-emerald-500/20 text-emerald-400', tooltip: 'Shopify' },
  { name: 'NT', color: 'bg-rose-500/20 text-rose-400', tooltip: 'Notion' },
  { name: 'PP', color: 'bg-sky-500/20 text-sky-400', tooltip: 'PayPal' },
  { name: 'ZD', color: 'bg-yellow-500/20 text-yellow-400', tooltip: 'Zendesk' },
  { name: 'WC', color: 'bg-violet-500/20 text-violet-400', tooltip: 'WooCommerce' },
  { name: 'CF', color: 'bg-teal-500/20 text-teal-400', tooltip: 'Confluence' },
];

interface Props {
  className?: string;
}

export default function AppGrid({ className = '' }: Props) {
  return (
    <div className={`grid grid-cols-4 gap-1.5 ${className}`}>
      {appIcons.map((app, i) => (
        <motion.div
          key={app.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: 'spring', stiffness: 260, damping: 20 }}
          title={app.tooltip}
          className={`flex aspect-square cursor-default items-center justify-center rounded-lg border border-white/5 ${app.color} text-[9px] font-bold transition-all hover:scale-110`}
        >
          {app.name}
        </motion.div>
      ))}
    </div>
  );
}