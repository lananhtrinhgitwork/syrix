'use client';

import { motion } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
}

export function MetricsBanner({ metrics }: { metrics: Metric[] }) {
  return (
    <section className="py-24 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-6 md:py-0 flex flex-col justify-center"
            >
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-primary/80 mb-3 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                {metric.value}
              </div>
              <div className="text-base text-muted-foreground font-medium uppercase tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
