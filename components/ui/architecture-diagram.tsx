'use client';

import { motion } from 'framer-motion';
import { Database, Brain, Zap, ArrowRight, ArrowDown } from 'lucide-react';

export function ArchitectureDiagram({ title, description }: { title?: string, description?: string }) {
  return (
    <section className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title || "How Syrix Intelligence Works"}</h2>
          <p className="text-lg text-muted-foreground">{description || "A complete autonomous loop from unstructured data to executed actions."}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent w-2/3 mx-auto translate-x-[25%]" />

          {/* Tier 1: Ingestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-24 h-24 rounded-2xl bg-card border border-white/10 shadow-lg flex items-center justify-center mb-6 z-10 relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse" />
              <Database className="w-10 h-10 text-blue-400 relative z-10" />
            </div>
            <ArrowDown className="w-6 h-6 text-muted-foreground mb-4 md:hidden" />
            <h3 className="text-xl font-bold mb-2">1. Data Ingestion</h3>
            <p className="text-sm text-muted-foreground">Securely connect Confluence, Jira, G-Drive, and internal wikis via deep vector syncing.</p>
          </motion.div>

          {/* Tier 2: Reasoning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-24 h-24 rounded-2xl bg-card border border-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center mb-6 z-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-[spin_4s_linear_infinite] opacity-50" style={{ clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)' }} />
              <Brain className="w-10 h-10 text-primary relative z-10" />
            </div>
            <ArrowDown className="w-6 h-6 text-muted-foreground mb-4 md:hidden" />
            <h3 className="text-xl font-bold mb-2">2. Reasoning (RAG)</h3>
            <p className="text-sm text-muted-foreground">The AI Agent isolates intent, respects RBAC permissions, and extracts exact context with citations.</p>
          </motion.div>

          {/* Tier 3: Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-24 h-24 rounded-2xl bg-card border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center mb-6 z-10 relative">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl animate-pulse" />
              <Zap className="w-10 h-10 text-emerald-400 relative z-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. MCP Execution</h3>
            <p className="text-sm text-muted-foreground">Triggers system APIs securely—update CRM, dispatch Slack alerts, or reset server states.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
