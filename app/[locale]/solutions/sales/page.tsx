'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Cpu, Terminal, AlertTriangle, CheckCircle, MessageSquare } from 'lucide-react';

interface UseCaseItemStructure {
  id: string;
  tag: string;
  title: string;
  pain: string;
  solution: string;
  value: string;
}

function TerminalEmulator() {
  const lines = [
    '[RAG ENGINE] SCANNING 50MB RFP DOCUMENT...',
    '[MATCHING] VALIDATING FEATURE REQUIREMENTS VS PRODUCT SPECS...',
    '[PRICING] CALCULATING MAX DISCOUNT: 25% (ANNUAL VOLUME)',
    '[MCP HUBSPOT] CALLING createQuote() ON CRM...',
    '[QUOTE] GENERATED QUOTE #Q-2026-4432',
    '[EMAIL] DISPATCHED TO CLIENT - RESPONSE WINDOW: 48H',
  ];
  const [visibleLines, setVisibleLines] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) { if (intervalRef.current) clearInterval(intervalRef.current); return prev; }
        return prev + 1;
      });
    }, 450);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-emerald-500/20 bg-black/80 shadow-lg">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <Terminal className="h-3.5 w-3.5 text-emerald-400" />
        <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Sales Console</span>
      </div>
      <div className="p-3 font-mono text-[11px] leading-relaxed">
        {lines.slice(0, visibleLines).map((line, i) => (
          <p key={i} className={`${line.includes('GENERATED') || line.includes('DISPATCHED') ? 'text-emerald-400' : line.includes('CALCULATING') ? 'text-amber-400' : line.includes('SCANNING') ? 'text-cyan-400' : 'text-white/60'}`}>
            {line}{i === visibleLines - 1 && visibleLines < lines.length && <span className="inline-block h-3.5 w-1.5 bg-emerald-400/70 ml-1 animate-pulse" />}
          </p>
        ))}
      </div>
    </div>
  );
}

function TimelineNode({ icon: Icon, color, title, description, status }: { icon: any; color: string; title: string; description: string; status: string }) {
  return (
    <div className="flex-1">
      <div className={`rounded-xl border ${color === 'red' ? 'border-red-500/20 bg-red-500/[0.04]' : color === 'cyan' ? 'border-cyan-500/20 bg-cyan-500/[0.04]' : 'border-emerald-500/20 bg-emerald-500/[0.04]'} p-5`}>
        <div className="mb-3 flex items-center gap-2">
          <Icon className={`h-5 w-5 ${color === 'red' ? 'text-red-400' : color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}`} />
          <span className={`text-xs font-bold uppercase tracking-widest ${color === 'red' ? 'text-red-400' : color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}`}>{status}</span>
        </div>
        <h4 className="mb-2 text-sm font-bold text-white">{title}</h4>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function SalesSolution() {
  const t = useTranslations('solutionsV4');
  const tRaw = t.raw;
  const useCasesList = (tRaw('sales.useCases') as UseCaseItemStructure[]) || [];

  return (
    <div className="min-h-screen pb-32">
      <section className="border-b border-white/5 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <span className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">{t('sales.badge')}</span>
              <h1 className="mb-4 text-3xl font-extrabold text-white">{t('sales.synergyTitle')}</h1>
              <p className="text-base leading-relaxed text-muted-foreground">{t('sales.synergyDesc')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3">
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#12121a]/50 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3">
                  <MessageSquare className="h-5 w-5 text-cyan-400" />
                  <span className="text-[10px] font-semibold text-cyan-400">Help Desk</span>
                </div>
                <svg className="h-6 w-12 shrink-0 text-white/30" viewBox="0 0 40 10" fill="none"><path d="M0 5 L25 5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="animate-pulse" /><path d="M22 1 L28 5 L22 9" stroke="currentColor" strokeWidth="1.5" /></svg>
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3">
                  <Cpu className="h-5 w-5 text-amber-400" />
                  <span className="text-[10px] font-semibold text-amber-400">AI Agent</span>
                </div>
                <svg className="h-6 w-12 shrink-0 text-white/30" viewBox="0 0 40 10" fill="none"><path d="M0 5 L25 5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="animate-pulse" /><path d="M22 1 L28 5 L22 9" stroke="currentColor" strokeWidth="1.5" /></svg>
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <span className="text-[10px] font-semibold text-emerald-400">HubSpot CRM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {useCasesList.map((item, idx) => {
        if (idx === 0) {
          return (
            <section key={item.id} className="py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400">{item.tag}</span>
                    <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{item.title}</h2>
                  </motion.div>
                  <div className="grid items-start gap-12 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                      <div className="space-y-8">
                        <div>
                          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-400"><AlertTriangle className="h-4 w-4" /> The Pain</h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.pain}</p>
                        </div>
                        <div>
                          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-cyan-400"><Cpu className="h-4 w-4" /> How Syrix Solves</h4>
                          <p className="text-sm leading-relaxed text-white/90">{item.solution}</p>
                        </div>
                        <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-400"><CheckCircle className="h-4 w-4" /> Business Value</h4>
                          <p className="text-sm leading-relaxed text-emerald-300/90">{item.value}</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                      <TerminalEmulator />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          );
        } else {
          return (
            <section key={item.id} className="bg-card py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400">{item.tag}</span>
                    <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{item.title}</h2>
                  </motion.div>
                  <div className="relative mt-10 flex flex-col gap-6 md:flex-row md:gap-3">
                    <div className="absolute left-[19px] top-0 h-full w-[2px] bg-white/5 md:left-0 md:top-1/2 md:h-[2px] md:w-full" />
                    <TimelineNode icon={AlertTriangle} color="red" status="Pain" title="The Bottleneck" description={item.pain} />
                    <TimelineNode icon={Cpu} color="cyan" status="Execution" title="How Syrix Solves" description={item.solution} />
                    <TimelineNode icon={CheckCircle} color="green" status="Value" title="Business Impact" description={item.value} />
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })}

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6 text-3xl font-bold sm:text-4xl">
              Accelerate your enterprise sales cycle.
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link href="/book-demo" className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all hover:bg-emerald-500/90 hover:scale-105 hover:shadow-emerald-500/30">
                Book a Demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
