'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Bot, MessageSquare, Brain, Search, Mic, Waves } from 'lucide-react';

export function ProductBentoGrid() {
  const t = useTranslations('navigation');

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">One Engine. Infinite Workforces.</h2>
          <p className="text-lg text-muted-foreground">The Syrix product suite transforms every digital touchpoint into an autonomous, action-oriented intelligence.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[210px]">
          
          {/* Help Desk (Large Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f] transition-all hover:border-primary/50"
          >
            <Link href="/products/help-desk" className="absolute inset-0 z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-8 h-full flex flex-col">
              <div className="mb-4">
                 <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                   <Bot className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">{t('helpDesk')}</h3>
                 <p className="text-muted-foreground">Resolve 80% of support tickets instantly. Reads policies, calculates refunds, and acts on ERPs securely.</p>
              </div>

              {/* Visual Mockup */}
              <div className="mt-auto relative w-full h-[180px] rounded-tl-2xl bg-card border-t border-l border-white/10 p-4 overflow-hidden translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
                 <div className="flex gap-2 items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center"><MessageSquare className="w-4 h-4 text-cyan-400" /></div>
                    <div className="bg-primary/20 px-3 py-2 rounded-xl text-xs text-white">Refund my latest order.</div>
                 </div>
                 <div className="flex gap-2 items-start ml-10">
                    <div className="bg-[#1a1a24] px-3 py-2 rounded-xl text-xs text-emerald-400 border border-emerald-500/30">
                      Processing Stripe API... Refund of $49 issued.
                    </div>
                 </div>
              </div>

              <div className="absolute top-8 right-8 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* AI Agent (Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f] transition-all hover:border-emerald-500/50"
          >
            <Link href="/products/ai-agent" className="absolute inset-0 z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                 <Brain className="w-6 h-6 text-emerald-400" />
                 <h3 className="text-xl font-bold">{t('aiAgent')}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Your internal corporate intelligence. Unify wikis & Jira.</p>
              
              <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground bg-card p-3 rounded-lg border border-white/5">
                 <div className="flex items-center gap-2"><Search className="w-3 h-3 text-emerald-500" /> Searching 1.2M Docs</div>
              </div>
              
              <div className="absolute top-6 right-6 text-emerald-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Speech to Text (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f] transition-all hover:border-blue-500/50"
          >
            <Link href="/products/asr" className="absolute inset-0 z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                 <Mic className="w-6 h-6 text-blue-400" />
                 <h3 className="text-xl font-bold">{t('asr')}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Extract tasks directly from meeting audio streams.</p>
              
              <div className="mt-auto flex items-end justify-center gap-1 h-12 opacity-50 group-hover:opacity-100 transition-opacity">
                 {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 bg-blue-500 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }} />
                 ))}
              </div>
              
              <div className="absolute top-6 right-6 text-blue-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
