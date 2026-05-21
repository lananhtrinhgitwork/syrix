'use client';

import { motion } from 'framer-motion';
import { Code, CheckCircle } from 'lucide-react';

export default function DeployIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4"
    >
      {/* Script tag simulation */}
      <div className="mb-3 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-1.5 text-[9px] text-white/40">
          <Code className="h-3 w-3 text-cyan-400" />
          <span className="font-mono">&lt;script src=&quot;https://syrix.ai/widget.js&quot; data-agent-id=&quot;agent_abc123&quot;&gt;&lt;/script&gt;</span>
        </div>
      </div>

      {/* Website preview mockup */}
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3">
        {/* Browser bar */}
        <div className="mb-2 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <span className="ml-1.5 rounded bg-white/10 px-2 py-0.5 text-[7px] text-white/40">yoursite.com</span>
        </div>
        {/* Page content placeholder */}
        <div className="space-y-1">
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/5" />
        </div>
        {/* Chat widget floating */}
        <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 shadow-lg">
          <span className="text-[6px] font-bold text-white">S</span>
        </div>
      </div>

      {/* Success indicator */}
      <div className="mt-2 flex items-center justify-center gap-1">
        <CheckCircle className="h-3 w-3 text-emerald-400" />
        <span className="text-[9px] text-emerald-400">Added successfully</span>
      </div>
    </motion.div>
  );
}