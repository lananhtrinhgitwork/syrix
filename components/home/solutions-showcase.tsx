'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ShieldCheck, TrendingUp, FolderSearch, Activity } from 'lucide-react';
import Link from 'next/link';

export function SolutionsShowcase() {
  const t = useTranslations('navigation');
  
  const solutions = [
    {
      id: 'customer-support',
      title: t('customerSupport'),
      icon: <ShieldCheck className="w-6 h-6" />,
      description: 'Turn your support center into a profit machine. Automate 80% of tier-1 requests while executing ERP billing changes live.',
      href: '/solutions/customer-support'
    },
    {
      id: 'sales',
      title: t('sales'),
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'An always-on BDR that never sleeps. Parses RFPs, calculates custom enterprise quotes, and books meetings 24/7.',
      href: '/solutions/sales'
    },
    {
      id: 'internal',
      title: t('internalKnowledge'),
      icon: <FolderSearch className="w-6 h-6" />,
      description: 'Unify Jira, Wiki, and Google Drive into a single, secure brain with strict RBAC mapping.',
      href: '/solutions/internal-knowledge'
    },
    {
      id: 'meetings',
      title: t('meetingExecution'),
      icon: <Activity className="w-6 h-6" />,
      description: 'Extract action items from multi-speaker meetings and automatically deploy Jira tickets.',
      href: '/solutions/meeting-execution'
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions for Every Department</h2>
          <p className="text-lg text-muted-foreground">Syrix adapts to your operational silos, converting unstructured processes into autonomous velocity.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={sol.href}
                className="block p-8 rounded-3xl border border-white/10 bg-[#0a0a0f] transition-all duration-300 hover:border-primary/50 hover:bg-white/5 h-full group relative overflow-hidden"
              >
                <div className="p-3 rounded-xl bg-white/5 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-fit mb-6">
                  {sol.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {sol.title}
                </h3>
                <p className="text-muted-foreground">
                  {sol.description}
                </p>
                <div className="absolute top-8 right-8 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
