'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function ConfirmationCardMockup() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl border border-cyan-500/30 bg-gradient-to-br from-[#12121a] to-[#0f1a1f] p-5 shadow-xl shadow-cyan-500/10"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20">
          <span className="text-xs text-amber-500">!</span>
        </div>
        <span className="text-sm font-semibold text-white">Confirmation Required</span>
      </div>

      <div className="mb-4 space-y-2 rounded-lg border border-white/10 bg-white/5 p-3">
        <p className="text-xs font-medium text-white/60 uppercase tracking-wider">Summary</p>
        <p className="text-sm text-white">Schedule viewing: The Merit, 2BR</p>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Date: Fri, May 23, 2026</span>
          <span>Time: 10:00 AM</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500/20">
          <Check className="h-4 w-4" /> Confirm
        </button>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-500/20">
          <X className="h-4 w-4" /> Cancel
        </button>
      </div>
    </motion.div>
  );
}