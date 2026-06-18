'use client';

import { motion } from 'framer-motion';
import { UserX, Bot, ArrowRight, XCircle, CheckCircle2, Database, Send } from 'lucide-react';

export function BeforeAfterFlowchart() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
      {/* Before Flow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border border-destructive/20 bg-destructive/5 p-8 flex flex-col items-center"
      >
        <h3 className="mb-8 text-2xl font-bold text-destructive tracking-widest uppercase">Before (Manual)</h3>
        
        <div className="flex flex-col items-center w-full max-w-xs relative space-y-6">
          <div className="flex items-center justify-between w-full p-4 rounded-lg bg-card border border-border">
            <span className="text-sm font-medium">11:00 PM - Lead Arrives</span>
            <Bot className="w-5 h-5 text-muted-foreground" />
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
          
          <div className="flex items-center justify-between w-full p-4 rounded-lg bg-card border border-border">
            <span className="text-sm font-medium text-muted-foreground">Chatbot gives generic FAQ</span>
            <XCircle className="w-5 h-5 text-destructive" />
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />

          <div className="flex items-center justify-between w-full p-4 rounded-lg bg-card border border-destructive/50">
            <span className="text-sm font-medium text-destructive">Human must wake up to update CRM</span>
            <UserX className="w-5 h-5 text-destructive" />
          </div>
        </div>
      </motion.div>

      {/* After Flow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-xl border border-primary/20 bg-primary/5 p-8 flex flex-col items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
        <h3 className="mb-8 text-2xl font-bold text-primary tracking-widest uppercase relative z-10">After (Syrix)</h3>
        
        <div className="flex flex-col items-center w-full max-w-xs relative z-10 space-y-6">
          <div className="flex items-center justify-between w-full p-4 rounded-lg bg-card border border-primary/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="text-sm font-medium">11:00 PM - Lead Arrives</span>
            <Bot className="w-5 h-5 text-primary" />
          </div>
          
          <div className="h-6 w-0.5 bg-gradient-to-b from-primary/50 to-primary relative">
             <motion.div 
               animate={{ y: [0, 24] }} 
               transition={{ repeat: Infinity, duration: 1 }} 
               className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-400 blur-[2px]" 
             />
          </div>
          
          <div className="flex items-center justify-between w-full p-4 rounded-lg bg-card border border-primary/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="text-sm font-medium">Syrix calculates quote (RAG)</span>
            <Database className="w-5 h-5 text-primary" />
          </div>

          <div className="h-6 w-0.5 bg-gradient-to-b from-primary/50 to-primary relative">
             <motion.div 
               animate={{ y: [0, 24] }} 
               transition={{ repeat: Infinity, duration: 1 }} 
               className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-400 blur-[2px]" 
             />
          </div>

          <div className="flex items-center justify-between w-full p-4 rounded-lg bg-card border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <span className="text-sm font-medium text-emerald-500">Auto-updates CRM via MCP</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
