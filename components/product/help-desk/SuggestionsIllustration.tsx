'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Send } from 'lucide-react';

export default function SuggestionsIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4"
    >
      {/* Suggestion chips */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {[
          'Show apartments in D1',
          'Payment terms?',
          'Schedule viewing',
          'Price calculator',
        ].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-[9px] text-purple-400 transition-all hover:bg-purple-500/20"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Chat input */}
      <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
        <Lightbulb className="h-3 w-3 text-purple-400" />
        <span className="flex-1 text-[10px] text-white/30">Type a message or tap a suggestion…</span>
        <Send className="h-3 w-3 text-purple-400/50" />
      </div>
    </motion.div>
  );
}