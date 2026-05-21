'use client';

import { motion } from 'framer-motion';

const nodes = [
  { label: '⚡ Trigger\nLead Created', color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400', x: 'center' },
  { label: '☁️ Action\nGet CRM Contact', color: 'border-blue-500/40 bg-blue-500/10 text-blue-400', x: 'center' },
  { label: '🔀 Condition\nIs Eligible?', color: 'border-amber-500/40 bg-amber-500/10 text-amber-400', x: 'center' },
];

const branches = [
  { label: '📧 Send Email', color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400', x: 'left' },
  { label: '💰 Create Invoice', color: 'border-purple-500/40 bg-purple-500/10 text-purple-400', x: 'right' },
];

export default function WorkflowBuilderMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
        <span className="text-sm font-semibold text-white">Workflow Builder</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
          ⚡ 700+ Apps
        </span>
      </div>

      {/* Canvas */}
      <div className="relative p-6">
        {/* Grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {/* Main flow - center column */}
        <div className="relative flex flex-col items-center gap-3">
          {nodes.map((node, i) => (
            <div key={i} className="relative z-10">
              <div className={`rounded-xl border-2 ${node.color} px-5 py-3 shadow-lg backdrop-blur-sm`}>
                {node.label.split('\n').map((line, li) => (
                  <p key={li} className={`text-sm ${li === 0 ? 'font-semibold' : 'text-xs opacity-80'}`}>
                    {line}
                  </p>
                ))}
              </div>
              {/* Arrow down */}
              {i < nodes.length - 1 && (
                <svg className="mx-auto mt-1 h-4 w-4 text-white/30" viewBox="0 0 16 16" fill="none">
                  <path d="M8 4v8M4 8l4 4 4-4" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </div>
          ))}

          {/* Branch arrows */}
          <svg className="h-4 w-full text-white/20" viewBox="0 0 300 20" fill="none">
            <path d="M150 0 L150 10 L80 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M150 10 L220 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M75 10 L75 30" stroke="currentColor" strokeWidth="1.5" />
            <path d="M225 10 L225 30" stroke="currentColor" strokeWidth="1.5" />
            <path d="M70 30 L80 25 M80 35 L70 30" stroke="currentColor" strokeWidth="1.5" />
            <path d="M220 30 L230 25 M230 35 L220 30" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Branches */}
          <div className="flex w-full justify-center gap-8">
            {branches.map((branch, i) => (
              <div key={i} className={`rounded-xl border-2 ${branch.color} px-4 py-2.5 shadow-lg`}>
                {branch.label.split('\n').map((line, li) => (
                  <p key={li} className={`text-sm ${li === 0 ? 'font-semibold' : 'text-xs opacity-80'}`}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="mt-6 flex items-center justify-center gap-4 border-t border-white/10 pt-4">
          <button className="rounded-lg border border-dashed border-white/20 px-4 py-2 text-xs text-white/40 transition-colors hover:border-primary/50 hover:text-primary">
            + Add Step
          </button>
          <button className="rounded-lg bg-primary px-5 py-2 text-xs font-semibold text-white shadow-lg transition-all hover:bg-primary/90">
            ▶ Run
          </button>
        </div>
      </div>
    </motion.div>
  );
}