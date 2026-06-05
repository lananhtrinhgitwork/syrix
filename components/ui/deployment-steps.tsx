'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function DeploymentSteps({ title, steps }: { title: string; steps: Step[] }) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-border via-primary/50 to-border" />
            
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center max-w-[280px]"
              >
                <div className="w-24 h-24 rounded-full bg-card border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-gradient-to-br from-card to-primary/5">
                  <div className="text-primary w-10 h-10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute top-8 -right-4 md:-right-8 text-muted-foreground hidden md:block">
                  {idx < steps.length - 1 && <ArrowRight className="w-6 h-6 opacity-50" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
