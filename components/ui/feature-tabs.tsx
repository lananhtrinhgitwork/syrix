'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FeatureTab {
  id: string;
  title: string;
  description: string;
  visual?: React.ReactNode;
}

export function FeatureTabs({ title, subtitle, tabs }: { title: string, subtitle?: string, tabs: FeatureTab[] }) {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabs.map((tab, i) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0f] hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{tab.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tab.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
