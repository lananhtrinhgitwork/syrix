'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function AutomatedWorkflowIllustration() {
  const steps = ['Lead Captured', 'Validated', 'Price Calculated', 'Booked', 'Notified'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] font-semibold text-emerald-400">Automated Execution</span>
      </div>

      <div className="flex flex-wrap items-center gap-1">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-1">
            <div className="flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1">
              <CheckCircle className="h-3 w-3 text-emerald-400" />
              <span className="text-[9px] text-emerald-300">{step}</span>
            </div>
            {i < steps.length - 1 && <ArrowRight className="h-3 w-3 text-white/20" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
}