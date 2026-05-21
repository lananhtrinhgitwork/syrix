'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Check, Code2, Layers, Share2, Cpu, Server, Lock, Terminal, FileText, Database, Wrench } from 'lucide-react';

/* ───────── Hero Builder Canvas Mockup ───────── */
function BuilderCanvasMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-xs font-medium text-white/50">Syrix Agent Builder</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium text-cyan-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          Live
        </span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        {/* Node 1: Topic */}
        <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/[0.06] p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-[11px] font-semibold text-cyan-400">Topic</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
            <span className="text-xs text-white/70">IT Operations</span>
            <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 text-[9px] font-medium text-cyan-400">Active</span>
          </div>
        </div>

        {/* Arrow */}
        <svg className="h-3 w-full text-white/10" viewBox="0 0 40 10" fill="none">
          <path d="M20 0 L20 7 L16 7 M20 7 L24 7" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Node 2: Knowledge */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <Database className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[11px] font-semibold text-emerald-400">Knowledge Config (RAG)</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-white/60">
            <span className="rounded bg-white/5 px-2 py-1">Engineering_SOP_v4.pdf</span>
            <span className="rounded bg-white/5 px-2 py-1">HR_Policy_2026.pdf</span>
            <span className="rounded bg-white/5 px-2 py-1">+12 files</span>
          </div>
        </div>

        {/* Arrow */}
        <svg className="h-3 w-full text-white/10" viewBox="0 0 40 10" fill="none">
          <path d="M20 0 L20 7 L16 7 M20 7 L24 7" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Node 3: MCP Tools */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <Wrench className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[11px] font-semibold text-amber-400">Action Tools (MCP)</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-white/60">
            <span className="rounded bg-white/5 px-2 py-1">Jira</span>
            <span className="rounded bg-white/5 px-2 py-1">Kubernetes</span>
            <span className="rounded bg-white/5 px-2 py-1">HRIS</span>
            <span className="rounded bg-white/5 px-2 py-1">+1</span>
          </div>
        </div>

        {/* Terminal Log */}
        <div className="mt-3 rounded-lg border border-white/10 bg-black/60 p-3 font-mono text-[10px] leading-relaxed">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <Terminal className="h-3 w-3" />
            <span className="text-[9px] font-semibold uppercase tracking-wider text-white/40">Agent Console</span>
          </div>
          <div className="mt-1.5 space-y-0.5 text-white/50">
            <p className="text-emerald-400/80">{'>'} agent.init("IT_Operations_Specialist")</p>
            <p className="text-emerald-400/80">{'>'} rag.index(["Engineering_SOP_v4", "HR_Policy_2026", ...])</p>
            <p className="text-emerald-400/80">{'>'} mcp.connect([Jira, Kubernetes, HRIS])</p>
            <p className="text-cyan-400">{'>>'} Agent ready. 14 files indexed. 4 tools connected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── FAQ Accordion Item ───────── */
function FaqItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-white/10">
      <details className="group" open={defaultOpen}>
        <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-foreground transition-colors hover:bg-white/[0.02]">
          <span className="text-sm leading-snug">{question}</span>
          <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="border-t border-border/50 px-5 pb-5 pt-4">
          <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      </details>
    </div>
  );
}

/* ───────── Page ───────── */
export default function AIAgentPage() {
  const t = useTranslations('aiAgent');
  const tRaw = t.raw;

  const metricsItems = (tRaw('metrics.items') as Array<{ label: string; old: string; new: string }>) || [];
  const pillarsData = [
    { key: 'builder', icon: Layers, accent: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/[0.04]' },
    { key: 'rag', icon: Share2, accent: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/[0.04]' },
    { key: 'mcp', icon: Code2, accent: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/[0.04]' },
  ];
  const interactiveSteps = (tRaw('interactive.steps') as Array<{ title: string; desc: string }>) || [];
  const faqItems = (tRaw('faq.items') as Array<{ q: string; a: string }>) || [];

  return (
    <div className="min-h-screen pb-32">
      {/* ═══════ S1: HERO ═══════ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                {t('hero.badge')}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {t('hero.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] hover:shadow-primary/30"
                >
                  Book a Private Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Builder Canvas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <BuilderCanvasMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ S2: METRICS ═══════ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">{t('metrics.title')}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t('metrics.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {metricsItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                  <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground">{item.label}</h3>
                  <div className="space-y-4">
                    {/* Old */}
                    <div className="rounded-lg border border-red-500/20 bg-red-500/[0.04] p-3">
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-red-400">Legacy</span>
                      <p className="text-sm text-muted-foreground">{item.old}</p>
                    </div>
                    {/* New */}
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-3">
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-emerald-400">With Syrix</span>
                      <p className="text-sm font-semibold text-emerald-400">{item.new}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S3: PILLARS ═══════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">{t('pillars.title')}</h2>
            </motion.div>

            <div className="space-y-20">
              {pillarsData.map((p, i) => {
                const pillar = tRaw(`pillars.${p.key}`) as { tag: string; title: string; description: string; features: string[] };
                const isReversed = i % 2 !== 0;
                const Icon = p.icon;

                return (
                  <motion.div
                    key={p.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center`}
                  >
                    {/* Text */}
                    <div className={isReversed ? 'lg:order-last' : ''}>
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest ${p.accent}`}>
                        {pillar.tag}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white tracking-tight md:text-3xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {pillar.features.map((feat, fi) => (
                          <li key={fi} className="flex items-start gap-3">
                            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.accent}`} />
                            <span className="text-sm text-muted-foreground">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className={`rounded-2xl border ${p.border} ${p.bg} p-8 backdrop-blur-sm`}>
                      <div className="flex items-center justify-center">
                        <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${p.accent.replace('text', 'bg').replace('-400', '-500/15')}`}>
                          <Icon className={`h-10 w-10 ${p.accent}`} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S4: INTERACTIVE TIMELINE ═══════ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">{t('interactive.title')}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t('interactive.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {interactiveSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                  {/* Step number */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S5: FAQ ═══════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">{t('faq.title')}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t('faq.subtitle')}</p>
            </motion.div>

            <div className="mt-12 space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <FaqItem question={item.q} answer={item.a} defaultOpen={i === 0} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S6: FINAL CTA ═══════ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-3xl font-bold sm:text-4xl"
            >
              Give your organization a brain that never forgets.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Schedule a private demo to see how Syrix AI Agent can transform your internal operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/30"
              >
                Book a Private Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
