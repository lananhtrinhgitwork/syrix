'use client';

import { motion } from 'framer-motion';
import { Terminal, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AnimatedTerminal() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { text: "> Connecting to HubSpot CRM...", status: "loading" },
    { text: "> Analyzing customer intent: 'Upgrade to Enterprise'", status: "done" },
    { text: "> Calculating new MRR & Generating Quote PDF", status: "loading" },
    { text: "> Quote sent & Calendar invite dispatched.", status: "done" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 bg-[#0a0a0f]/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
      <div className="flex items-center px-4 py-3 border-b border-white/10 bg-black/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Terminal className="w-3.5 h-3.5" />
          syrix-agent-execution
        </div>
      </div>
      <div className="p-6 font-mono text-sm sm:text-base text-left h-[200px] flex flex-col justify-end">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= i ? 1 : 0, y: step >= i ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className={`mb-3 flex items-start gap-3 ${step >= i ? 'block' : 'hidden'}`}
          >
            <span className="text-cyan-400 shrink-0">~</span>
            <span className="text-gray-300">{s.text}</span>
            {step > i && s.status === 'done' && (
              <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto shrink-0 mt-0.5" />
            )}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2.5 h-5 bg-cyan-400 ml-6 mt-1"
        />
      </div>
    </div>
  );
}
