'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ShieldCheck, TrendingUp, FolderSearch, Activity } from 'lucide-react';
import Link from 'next/link';

export function SolutionsShowcase() {
  const t = useTranslations();
  
  const solutions = [
    {
      id: 'customer-support',
      title: t('navigation.customerSupport'),
      icon: <ShieldCheck className="w-6 h-6" />,
      description: t('home.solutionsShowcase.customerSupport'),
      href: '/solutions/customer-support'
    },
    {
      id: 'sales',
      title: t('navigation.sales'),
      icon: <TrendingUp className="w-6 h-6" />,
      description: t('home.solutionsShowcase.sales'),
      href: '/solutions/sales'
    },
    {
      id: 'internal',
      title: t('navigation.internalKnowledge'),
      icon: <FolderSearch className="w-6 h-6" />,
      description: t('home.solutionsShowcase.internal'),
      href: '/solutions/internal-knowledge'
    },
    {
      id: 'meetings',
      title: t('navigation.meetingExecution'),
      icon: <Activity className="w-6 h-6" />,
      description: t('home.solutionsShowcase.meetings'),
      href: '/solutions/meeting-execution'
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('home.solutionsTitle')}</h2>
          <p className="text-lg text-muted-foreground">{t('home.solutionsDesc')}</p>
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
                <p className="text-muted-foreground font-medium text-sm leading-relaxed">
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
