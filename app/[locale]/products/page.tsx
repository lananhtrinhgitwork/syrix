'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Database, Zap, Mail, AlertCircle, Globe } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function Products() {
  const t = useTranslations();

  const products = [
    {
      title: t('navigation.helpDesk'),
      tagline: t('helpDesk.capabilities.rag'),
      capabilities: [
        t('helpDesk.capabilities.rag'),
        t('helpDesk.capabilities.crm'),
        t('helpDesk.capabilities.email'),
        t('helpDesk.capabilities.escalation'),
        t('helpDesk.capabilities.multiChannel'),
      ],
      href: '/products/help-desk',
    },
    {
      title: t('navigation.aiAgent'),
      tagline: t('aiAgent.capabilities.privateRetrieval'),
      capabilities: [
        t('aiAgent.capabilities.privateRetrieval'),
        t('aiAgent.capabilities.crossDeptSynthesis'),
        t('aiAgent.capabilities.zeroRetention'),
      ],
      href: '/products/ai-agent',
    },
    {
      title: t('navigation.workspace'),
      tagline: t('workspace.capabilities.taskAssignment'),
      capabilities: [
        t('workspace.capabilities.taskAssignment'),
        t('workspace.capabilities.summarization'),
        t('workspace.capabilities.quickActions'),
      ],
      href: '/products/workspace',
    },
    {
      title: t('navigation.asr'),
      tagline: 'Speak. Syrix handles the rest.',
      capabilities: [
        'Real-time transcription with speaker identification',
        'Auto-generated meeting summaries',
        'Voice-driven task creation',
        'Knowledge base contribution',
      ],
      href: '/products/asr',
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
              {t('products.headline')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              {t('products.subtext')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={product.href}>
                  <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                    <h3 className="mb-3 text-lg font-bold">{product.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{product.tagline}</p>
                    <ul className="mb-6 space-y-2">
                      {product.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:gap-2">
                      {t('common.viewDetails')}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground">Use Case Comparison</h2>
          </motion.div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="p-4 text-left font-semibold">Use Case</th>
                  {products.map((product) => (
                    <th key={product.title} className="p-4 text-center font-semibold">
                      {product.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { useCase: 'Customer query resolution', products: ['helpDesk'] },
                  { useCase: 'Internal policy search', products: ['aiAgent'] },
                  { useCase: 'Multi-system workflow automation', products: ['workspace'] },
                  { useCase: 'Meeting transcription & summary', products: ['asr'] },
                  { useCase: 'Lead qualification & CRM update', products: ['helpDesk'] },
                  { useCase: 'Cross-department knowledge synthesis', products: ['aiAgent'] },
                  { useCase: 'Voice command task creation', products: ['asr'] },
                ].map((row, rowIndex) => (
                  <tr key={row.useCase} className={rowIndex % 2 === 0 ? 'bg-background' : 'bg-card'}>
                    <td className="p-4 font-medium">{row.useCase}</td>
                    {products.map((product) => (
                      <td key={product.title} className={`p-4 text-center ${row.products.includes(product.title.toLowerCase().split(' ')[0]) ? 'text-primary' : ''}`}>
                        {row.products.includes(product.title.toLowerCase().split(' ')[0]) ? '✓' : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

function Check({ className }: any) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}