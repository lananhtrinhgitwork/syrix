'use client';

import { motion } from 'framer-motion';

interface UseCase {
  title: string;
  description: string;
  visual: React.ReactNode;
}

export function UseCaseFlow({ title, useCases }: { title: string; useCases: UseCase[] }) {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          </div>
          
          <div className="space-y-16">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative rounded-xl border border-white/10 bg-[#0a0a0f] p-4 sm:p-6 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <div className="relative z-10">
                      {useCase.visual}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
