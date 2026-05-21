'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Mic, Check, Headphones, FileText, Play, Square, MessageSquare, Zap } from 'lucide-react';

/* ───────── Animated Waveform Bars ───────── */
function WaveformBars() {
  const bars = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="flex items-end justify-center gap-[3px] h-32">
      {bars.map((i) => (
        <span
          key={i}
          className="w-[5px] rounded-full bg-gradient-to-t from-primary/60 to-cyan-400"
          style={{
            height: `${40 + Math.sin(i * 0.8) * 30 + Math.random() * 20}%`,
            animation: `waveform-pulse 1.2s ease-in-out ${i * 0.08}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes waveform-pulse {
          0% { transform: scaleY(0.6); opacity: 0.6; }
          100% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ───────── Streaming Transcript Simulator ───────── */
function TranscriptSimulator({ t }: { t: (k: string) => string }) {
  const [playing, setPlaying] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = t('simulator.transcriptSample');
  const insight = t('simulator.insightSummary');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const charIndexRef = useRef(0);

  useEffect(() => {
    if (!playing) return;
    charIndexRef.current = 0;
    setDisplayedText('');
    intervalRef.current = setInterval(() => {
      if (charIndexRef.current < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndexRef.current + 3));
        charIndexRef.current += 3;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 30);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing, fullText]);

  const handleToggle = () => {
    if (playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

  const isComplete = displayedText.length >= fullText.length;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <Headphones className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-semibold text-white">{t('simulator.title')}</span>
        </div>
        <button
          onClick={handleToggle}
          className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/20"
        >
          {playing ? (
            <><Square className="h-3 w-3" /> Stop</>
          ) : (
            <><Play className="h-3 w-3" /> {t('simulator.buttonLabel')}</>
          )}
        </button>
      </div>

      {/* Transcript area */}
      <div className="min-h-[220px] p-4 font-mono text-[13px] leading-relaxed">
        {!playing && !displayedText ? (
          <p className="text-white/30 italic">{'Press "Play Sample Audio Stream" to start transcription...'}</p>
        ) : (
          <div className="space-y-2">
            {displayedText.split('\n').map((line, i) => {
              const isClient = line.startsWith('[Client');
              const isAssistant = line.startsWith('[Digital');
              return (
                <p key={i} className={`${isClient ? 'text-cyan-300' : isAssistant ? 'text-emerald-300' : 'text-white/70'}`}>
                  {line}
                  {i === displayedText.split('\n').length - 1 && playing && !isComplete && (
                    <span className="inline-block h-4 w-2 bg-primary/70 ml-0.5 animate-pulse" />
                  )}
                </p>
              );
            })}
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="border-t border-white/10 bg-white/[0.02] px-4 py-2.5">
        {playing && !isComplete ? (
          <div className="flex items-center gap-2 text-xs text-amber-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            {t('simulator.statusLabel')}
          </div>
        ) : isComplete ? (
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] p-2.5">
            <p className="flex items-start gap-2 text-xs text-emerald-400">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {insight}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ───────── Pillar Visual ───────── */
function PillarVisual({ icon: Icon, accent }: { icon: any; accent: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#12121a]/50 p-10 backdrop-blur-sm">
      <Icon className={`h-16 w-16 ${accent}`} />
    </div>
  );
}

/* ───────── Page ───────── */
export default function SpeechToTextPage() {
  const t = useTranslations('speechToText');
  const tRaw = t.raw;

  const metricsItems = (tRaw('metrics.items') as Array<{ label: string; old: string; new: string }>) || [];
  const pillarsData = [
    { key: 'diarization', icon: Mic, accent: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/[0.04]' },
    { key: 'vocabulary', icon: FileText, accent: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/[0.04]' },
  ];

  const useCaseItems = (tRaw('useCases.items') as Array<{ id: string; tag: string; title: string; desc: string }>) || [];

  return (
    <div className="min-h-screen pb-32">
      {/* ═══════ S1: HERO ═══════ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

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
                  Book a Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Waveform */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#12121a]/50 p-8 backdrop-blur-sm">
                <WaveformBars />
                <p className="mt-4 text-center text-xs text-muted-foreground">Live voice capture simulation</p>
              </div>
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
                    <div className="rounded-lg border border-red-500/20 bg-red-500/[0.04] p-3">
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-red-400">Legacy</span>
                      <p className="text-sm text-muted-foreground">{item.old}</p>
                    </div>
                    <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/[0.04] p-3">
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-cyan-400">With Syrix</span>
                      <p className="text-sm font-semibold text-cyan-400">{item.new}</p>
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
                    <div className={isReversed ? '' : ''}>
                      <PillarVisual icon={Icon} accent={p.accent} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S4: USE CASES ═══════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">{t('useCases.title')}</h2>
            </motion.div>

            <div className="space-y-16">
              {useCaseItems.map((uc, i) => {
                const isReversed = i % 2 !== 0;
                const icon = uc.id === 'meeting' ? MessageSquare : Zap;
                const accent = uc.id === 'meeting' ? 'text-purple-400' : 'text-amber-400';

                return (
                  <motion.div
                    key={uc.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center"
                  >
                    <div className={isReversed ? 'lg:order-last' : ''}>
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest ${accent}`}>
                        {uc.tag}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white tracking-tight md:text-3xl">
                        {uc.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {uc.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#12121a]/50 p-12 backdrop-blur-sm">
                      <div className={`rounded-2xl ${accent.replace('text', 'bg').replace('-400', '-500/15')} p-8`}>
                        <icon className={`h-16 w-16 ${accent}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ S5: TRANSCRIPTION SIMULATOR ═══════ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">{t('simulator.title')}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t('simulator.subtitle')}</p>
            </motion.div>

            <TranscriptSimulator t={t} />
          </div>
        </div>
      </section>

      {/* ═══════ S6: FINAL CTA ═══════ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-3xl font-bold sm:text-4xl"
            >
              Stop losing insights to bad note-taking.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              See how Syrix Speech to Text can transform your voice data into structured actions.
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
                Book a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
