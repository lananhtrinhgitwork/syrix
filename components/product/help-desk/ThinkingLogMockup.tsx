'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const steps = [
  { label: 'Validating input…', duration: 800 },
  { label: 'Retrieving knowledge…', duration: 1000 },
  { label: 'Running calculation…', duration: 1200 },
  { label: 'Done', duration: 500, isDone: true },
];

export default function ThinkingLogMockup() {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      for (let i = 0; i < steps.length; i++) {
        await new Promise((r) => setTimeout(r, steps[i].duration));
        if (cancelled) return;
        setActiveStep(i);
      }
    };
    setActiveStep(-1);
    const timer = setTimeout(run, 500);
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-[#12121a] p-4 font-mono">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">THINKING LOG</p>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <AnimatePresence key={index}>
            {activeStep >= index && (
              <motion.div
                initial={{ x: -8, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${
                  index === steps.length - 1 ? 'bg-emerald-500/10' : 'bg-blue-500/5'
                }`}
              >
                {index === steps.length - 1 ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                ) : (
                  <Loader2 className="h-4 w-4 animate-spin text-cyan-400 shrink-0" />
                )}
                <span className={`text-xs ${step.isDone ? 'font-semibold text-emerald-400' : 'text-muted-foreground'}`}>
                  {index === 0 && activeStep === 0 ? 'Agent is thinking…' : step.label}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}