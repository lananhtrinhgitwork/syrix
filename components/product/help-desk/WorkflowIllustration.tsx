'use client';

import { motion } from 'framer-motion';

export default function WorkflowIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4"
    >
      {/* "700+ apps" badge */}
      <div className="mb-3 text-center">
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block rounded-full border border-purple-500/40 bg-purple-500/20 px-3 py-0.5 text-[10px] font-bold text-purple-400"
        >
          700+ apps
        </motion.span>
      </div>

      {/* Workflow canvas mockup */}
      <div className="space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-2.5">
        {/* Node row */}
        <div className="flex items-center gap-1">
          <NodeIcon label="Lead" color="bg-blue-500/20 text-blue-400" />
          <Connector />
          <NodeIcon label="CRM" color="bg-emerald-500/20 text-emerald-400" />
          <Connector />
          <NodeIcon label="Email" color="bg-amber-500/20 text-amber-400" />
          <Connector />
          <NodeIcon label="SMS" color="bg-purple-500/20 text-purple-400" />
        </div>

        {/* Status */}
        <div className="flex items-center gap-1.5 pt-1 text-[9px] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Automated execution
        </div>
      </div>
    </motion.div>
  );
}

function NodeIcon({ label, color }: { label: string; color: string }) {
  return (
    <div className={`flex h-5 w-10 items-center justify-center rounded border border-white/10 ${color} text-[8px] font-bold`}>
      {label}
    </div>
  );
}

function Connector() {
  return (
    <svg className="h-4 w-4 shrink-0 text-white/20" viewBox="0 0 16 4" fill="none">
      <path d="M2 2h12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M12 0l2 2-2 2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}