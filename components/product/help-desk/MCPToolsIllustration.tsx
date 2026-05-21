'use client';

import { motion } from 'framer-motion';

const apps = [
  { name: 'SF', color: 'bg-blue-500/20 text-blue-400', row: 0 },
  { name: 'HB', color: 'bg-orange-500/20 text-orange-400', row: 0 },
  { name: 'GC', color: 'bg-red-500/20 text-red-400', row: 0 },
  { name: 'ST', color: 'bg-indigo-500/20 text-indigo-400', row: 0 },
  { name: 'GM', color: 'bg-blue-400/20 text-blue-300', row: 1 },
  { name: 'SL', color: 'bg-green-500/20 text-green-400', row: 1 },
  { name: 'SH', color: 'bg-emerald-500/20 text-emerald-400', row: 1 },
  { name: 'NT', color: 'bg-rose-500/20 text-rose-400', row: 1 },
];

export default function MCPToolsIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4"
    >
      {/* MCP Hub */}
      <div className="mb-3 flex justify-center">
        <div className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30">
            <span className="text-xs font-bold text-white">MCP</span>
          </div>
          <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[8px] font-bold text-white">+</span>
        </div>
      </div>

      {/* App grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {apps.map((app) => (
          <div
            key={app.name}
            className={`flex aspect-square items-center justify-center rounded-lg border border-white/5 ${app.color} text-[9px] font-bold transition-all hover:scale-110`}
          >
            {app.name}
          </div>
        ))}
      </div>

      {/* Badge */}
      <div className="mt-2 text-center">
        <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[9px] font-medium text-amber-400">
          100+ integrations
        </span>
      </div>
    </motion.div>
  );
}