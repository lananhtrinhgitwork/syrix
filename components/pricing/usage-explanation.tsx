'use client';

import { motion } from 'framer-motion';
import { Bot, Network, Zap, PlayCircle, Users, GitMerge, Check } from 'lucide-react';

export function UsageExplanation() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Usage-Based Engines</h2>
          <p className="text-lg text-muted-foreground">Pay for outcomes and system capacity, not empty human seats.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Concurrent Sessions (Help Desk) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Users className="w-32 h-32 text-cyan-400" />
            </div>
            
            <div className="mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 mb-4">
                 <Network className="w-4 h-4" /> Help Desk
              </div>
              <h3 className="text-2xl font-bold mb-2">Concurrent Sessions</h3>
              <p className="text-muted-foreground text-sm">You don't pay per user or per chat. You pay for the maximum number of conversations the AI handles *at the exact same second*.</p>
            </div>

            <div className="bg-[#1a1a24] rounded-2xl p-6 border border-white/5 relative z-10 flex-1 flex flex-col items-center justify-center min-h-[200px]">
               <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                  <Bot className="w-12 h-12 text-primary relative z-20" />
                  {/* Cloned Agents */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center animate-ping opacity-20"><Bot className="w-6 h-6 text-primary" /></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center animate-ping opacity-20 animation-delay-500"><Bot className="w-6 h-6 text-primary" /></div>
                  <div className="absolute top-1/2 left-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center animate-ping opacity-20 animation-delay-700"><Bot className="w-6 h-6 text-primary" /></div>
               </div>
               <p className="text-center text-xs text-muted-foreground mt-4 font-mono">1 Agent cloning itself to handle a traffic spike.</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
               <div className="flex justify-between items-end">
                  <div>
                     <p className="text-3xl font-bold text-white">$20<span className="text-lg text-muted-foreground font-normal">/mo</span></p>
                     <p className="text-xs text-muted-foreground uppercase tracking-wider">Per Peak Session (Pay-as-you-go)</p>
                     <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest opacity-80">Or fixed tiers: $60 (3) · $200 (10) · $600 (30)</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Automation Runs (AI Agent) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <GitMerge className="w-32 h-32 text-emerald-400" />
            </div>

            <div className="mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 mb-4">
                 <Zap className="w-4 h-4" /> AI Agent & Workflows
              </div>
              <h3 className="text-2xl font-bold mb-2">Automation Runs</h3>
              <p className="text-muted-foreground text-sm">Pay only when a workflow successfully completes its objective. 1 Run = 1 Jira ticket created, 1 quote sent, or 1 server restarted.</p>
            </div>

            <div className="bg-[#1a1a24] rounded-2xl p-6 border border-white/5 relative z-10 flex-1 flex flex-col items-center justify-center min-h-[200px]">
               <div className="flex items-center gap-2 w-full max-w-[280px]">
                  <div className="w-10 h-10 rounded-full bg-card border border-white/20 flex items-center justify-center shrink-0"><PlayCircle className="w-4 h-4 text-muted-foreground" /></div>
                  <div className="h-1 flex-1 bg-white/5 relative overflow-hidden">
                     <div className="absolute top-0 bottom-0 left-0 bg-emerald-500 w-full origin-left animate-[scaleX_2s_ease-in-out_infinite]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                     <Check className="w-5 h-5 text-emerald-400" />
                  </div>
               </div>
               <p className="text-center text-xs text-emerald-400 mt-6 font-mono">+1 Run Logged</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
               <div className="flex justify-between items-end">
                  <div>
                     <p className="text-2xl font-bold text-white mb-1">500 <span className="text-sm text-muted-foreground font-normal">VND/run</span><span className="text-[10px] text-muted-foreground uppercase tracking-wider ml-2">(0 - 3000 runs)</span></p>
                     <p className="text-2xl font-bold text-white">250 <span className="text-sm text-muted-foreground font-normal">VND/run</span><span className="text-[10px] text-muted-foreground uppercase tracking-wider ml-2">(3001+ runs)</span></p>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
