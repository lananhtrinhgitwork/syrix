'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Globe, Building2, TrendingUp } from 'lucide-react';

export default function Solutions() {
  const t = useTranslations('solutions');
  const tNav = useTranslations();

  const solutions = [
    {
      category: 'Use Cases',
      items: [
        {
          title: tNav('navigation.customerSupport'),
          description: 'Automate multi-channel customer support with intelligent RAG and MCP tool execution.',
          href: '/solutions/customer-support',
        },
        {
          title: 'Sales Automation',
          description: 'Accelerate deal velocity with autonomous RFP parsing, smart pricing, and CRM execution.',
          href: '/solutions/sales',
        },
        {
          title: tNav('navigation.internalKnowledge'),
          description: 'Unify fragmented corporate silos into a single secure multi-tenant RAG brain.',
          href: '/solutions/internal-knowledge',
        },
        {
          title: tNav('navigation.meetingExecution'),
          description: 'Convert live audio streams into actionable system commands and task deployments.',
          href: '/solutions/meeting-execution',
        },
      ],
    },
    {
      category: 'Industries',
      items: [
        {
          title: tNav('navigation.realEstate'),
          description: 'Automate lead qualification, property inquiries, and transaction workflows.',
          href: '/solutions/real-estate',
        },
        {
          title: tNav('navigation.financialServices'),
          description: 'Handle compliance-heavy customer interactions with zero-hallucination AI.',
          href: '/solutions/financial-services',
        },
        {
          title: tNav('navigation.retailEcommerce'),
          description: 'Scale customer support and automate post-purchase workflows.',
          href: '/solutions/retail-ecommerce',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-32">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {t('hub.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              {t('hub.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {solutions.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </motion.div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                  >
                    <Link href={item.href}>
                      <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                          {category.category === 'Use Cases' ? (
                            item.title === 'Sales Automation' ? (
                              <TrendingUp className="h-6 w-6 text-primary" />
                            ) : (
                              <Globe className="h-6 w-6 text-primary" />
                            )
                          ) : (
                            <Building2 className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                        <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:gap-2">
                          {tNav('common.learnMore')}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
