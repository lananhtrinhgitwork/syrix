'use client';

import { motion } from 'framer-motion';
import { Check, Diamond } from 'lucide-react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function PricingTiers() {
  const t = useTranslations('pricing.tiers');
  const locale = useLocale();

  const includesLabel = locale === 'vi' ? 'Bao gồm:' : 'Includes:';

  const tiers = [
    {
      name: t('audit.name'),
      subtitle: t('audit.subtitle'),
      price: t('audit.price'),
      duration: t('audit.duration'),
      deliverable: {
        title: t('audit.deliverable.title'),
        desc: t('audit.deliverable.desc')
      },
      includes: t.raw('audit.includes') as string[],
      buttonLabel: t('audit.buttonLabel'),
      buttonPrimary: true,
      highlight: true
    },
    {
      name: t('quickStart.name'),
      subtitle: t('quickStart.subtitle'),
      price: t('quickStart.price'),
      duration: t('quickStart.duration'),
      deliverable: {
        title: t('quickStart.deliverable.title'),
        desc: t('quickStart.deliverable.desc')
      },
      includes: t.raw('quickStart.includes') as string[],
      buttonLabel: t('quickStart.buttonLabel'),
      buttonPrimary: false,
      highlight: false
    },
    {
      name: t('scale.name'),
      subtitle: t('scale.subtitle'),
      price: t('scale.price'),
      priceSuffix: t('scale.priceSuffix'),
      duration: t('scale.duration'),
      deliverable: {
        title: t('scale.deliverable.title'),
        desc: t('scale.deliverable.desc')
      },
      includes: t.raw('scale.includes') as string[],
      buttonLabel: t('scale.buttonLabel'),
      buttonPrimary: false,
      highlight: false
    }
  ];

  return (
    <section className="pb-24 pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] p-8 bg-[#151518] transition-all duration-300 ${
                  tier.highlight 
                    ? 'border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
                    : 'border border-white/5 hover:border-white/10'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{tier.subtitle}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                    {tier.priceSuffix && <span className="text-sm text-gray-400">{tier.priceSuffix}</span>}
                  </div>
                  <p className="text-sm text-gray-400">{tier.duration}</p>
                </div>

                <div className="bg-[#202024] rounded-xl p-5 mb-8 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Diamond className="w-4 h-4 text-gray-300" />
                    <span className="text-sm font-semibold text-gray-200">{tier.deliverable.title}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tier.deliverable.desc}
                  </p>
                </div>

                <div className="mb-8 flex-1">
                  <p className="text-sm text-gray-400 mb-4">{includesLabel}</p>
                  <ul className="space-y-4">
                    {tier.includes && Array.isArray(tier.includes) && tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" />
                        <span className="text-sm text-gray-300 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/book-demo" className="mt-auto w-full">
                  <button 
                    className={`w-full rounded-xl py-4 text-sm font-semibold transition-all ${
                      tier.buttonPrimary 
                        ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg' 
                        : 'bg-[#2A2A2E] text-white hover:bg-[#35353A]'
                    }`}
                  >
                    {tier.buttonLabel}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
