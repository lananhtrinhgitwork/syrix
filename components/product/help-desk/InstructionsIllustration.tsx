'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function InstructionsIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4"
    >
      {/* Role field */}
      <div className="mb-3">
        <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-cyan-400">Agent Role</label>
        <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">Customer Support Agent</div>
      </div>

      {/* Tone selector */}
      <div className="mb-3">
        <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-cyan-400">Tone</label>
        <div className="flex gap-1.5">
          {['Professional', 'Friendly', 'Direct'].map((tone) => (
            <span key={tone} className={`rounded-md border px-2 py-1 text-[10px] ${tone === 'Professional' ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' : 'border-white/10 text-white/40'}`}>
              {tone}
            </span>
          ))}
        </div>
      </div>

      {/* Behavior checkboxes */}
      <div>
        <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-cyan-400">Behavior</label>
        <div className="space-y-1.5">
          {['Greet visitors proactively', 'Suggest relevant questions', 'Handoff when uncertain'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-[10px] text-white/60">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}