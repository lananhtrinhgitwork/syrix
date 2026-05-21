'use client';

import { motion } from 'framer-motion';
import { FileText, Upload, CheckCircle } from 'lucide-react';

export default function KnowledgeIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4"
    >
      {/* Upload zone */}
      <div className="mb-3 flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-emerald-500/30 bg-emerald-500/5 py-3 transition-colors hover:border-emerald-500/50">
        <Upload className="h-4 w-4 text-emerald-400" />
        <span className="text-xs text-emerald-400">Upload documents</span>
      </div>

      {/* File list */}
      <div className="space-y-1.5">
        {[
          { name: 'Product_Catalog_2026.pdf', size: '2.4 MB', status: 'indexed' },
          { name: 'FAQ_Support.docx', size: '180 KB', status: 'indexed' },
          { name: 'Pricing_Policy.pdf', size: '890 KB', status: 'indexing' },
        ].map((file) => (
          <div key={file.name} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
            <FileText className={`h-3.5 w-3.5 shrink-0 ${file.status === 'indexed' ? 'text-emerald-400' : 'text-amber-400'}`} />
            <div className="flex-1 min-w-0">
              <p className="truncate text-[10px] text-white/70">{file.name}</p>
              <p className="text-[9px] text-white/30">{file.size}</p>
            </div>
            {file.status === 'indexed' ? (
              <CheckCircle className="h-3 w-3 shrink-0 text-emerald-400" />
            ) : (
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                <span className="text-[9px] text-amber-400">Indexing</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Knowledge graph mini */}
      <div className="mt-3 flex items-center justify-center gap-1">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[8px] text-emerald-400">K</div>
        <svg className="h-4 w-8 text-emerald-500/30" viewBox="0 0 30 10" fill="none">
          <path d="M5 5 L15 5 L25 5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[8px] text-cyan-400">A</div>
        <svg className="h-4 w-8 text-cyan-500/30" viewBox="0 0 30 10" fill="none">
          <path d="M5 5 L15 5 L25 5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-[8px] text-purple-400">F</div>
      </div>
    </motion.div>
  );
}