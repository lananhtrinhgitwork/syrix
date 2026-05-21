'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Upload, Settings, Globe } from 'lucide-react';

interface FlowStep {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}

const steps: FlowStep[] = [
  { icon: <Upload className="h-5 w-5" />, label: 'Upload Docs', sublabel: 'PDF, DOCX, links' },
  { icon: <Settings className="h-5 w-5" />, label: 'Configure', sublabel: 'Tone, tools, KB' },
  { icon: <Globe className="h-5 w-5" />, label: 'Deploy', sublabel: 'Embed widget' },
];

export function HowItWorksFlow() {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 shadow-lg shadow-primary/10">
            <span className="text-primary">{step.icon}</span>
          </div>
          <p className="mt-2 text-xs font-semibold text-white">{step.label}</p>
          <p className="text-[10px] text-muted-foreground">{step.sublabel}</p>
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute translate-x-16">
              <ArrowRight className="h-4 w-4 text-primary/50" />
            </div>
          )}
        </motion.div>
      ))}
      {/* Mobile arrows */}
      <div className="flex md:hidden gap-1 mt-2">
        {steps.slice(0, -1).map((_, i) => (
          <ArrowRight key={i} className="h-3 w-3 text-primary/50" />
        ))}
      </div>
    </div>
  );
}

export function SmartSuggestionsFlow() {
  return (
    <div className="space-y-3">
      {[
        { icon: '👤', label: 'Visitor lands' },
        { icon: '💬', label: 'Agent suggests questions' },
        { icon: '📝', label: 'Slot Filling — asks for missing info' },
        { icon: '✅', label: 'Detects buying intent → closes' },
      ].map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"
        >
          <span className="text-lg">{step.icon}</span>
          <span className="text-sm text-white/80">{step.label}</span>
          {i < 3 && (
            <div className="ml-auto flex items-center">
              <svg className="h-4 w-4 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}