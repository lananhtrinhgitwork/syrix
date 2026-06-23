'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { 
  ArrowRight, 
  TrendingUp, 
  Database, 
  Search, 
  Zap, 
  ShieldCheck, 
  Lock, 
  Brain, 
  MessageSquare,
  Volume2
} from 'lucide-react';

export default function Solutions() {
  const t = useTranslations('solutions.hub');
  const tPage = useTranslations('solutionsPage');
  const tNav = useTranslations();
  const locale = useLocale();

  const [activeTab, setActiveTab] = useState<'support' | 'sales' | 'knowledge' | 'meetings'>('support');

  const tabs = ['support', 'sales', 'knowledge', 'meetings'] as const;

  const flow = {
    input: tPage(`simulator.flows.${activeTab}.input`),
    thought1: tPage(`simulator.flows.${activeTab}.thought1`),
    thought2: tPage(`simulator.flows.${activeTab}.thought2`),
    action1: tPage(`simulator.flows.${activeTab}.action1`),
    action2: tPage(`simulator.flows.${activeTab}.action2`),
    output: tPage(`simulator.flows.${activeTab}.output`),
  };

  const solutions = [
    {
      id: 'useCases',
      category: tPage('categories.useCases'),
      items: [
        {
          title: tNav('navigation.customerSupport'),
          description: tPage('descriptions.customerSupport'),
          href: `/${locale}/solutions/customer-support`,
          icon: MessageSquare,
          color: 'from-blue-500/20 to-cyan-500/20',
          textColor: 'text-blue-400',
        },
        {
          title: tNav('navigation.sales'),
          description: tPage('descriptions.sales'),
          href: `/${locale}/solutions/sales`,
          icon: TrendingUp,
          color: 'from-emerald-500/20 to-teal-500/20',
          textColor: 'text-emerald-400',
        },
        {
          title: tNav('navigation.internalKnowledge'),
          description: tPage('descriptions.internalKnowledge'),
          href: `/${locale}/solutions/internal-knowledge`,
          icon: Database,
          color: 'from-purple-500/20 to-indigo-500/20',
          textColor: 'text-purple-400',
        },
        {
          title: tNav('navigation.meetingExecution'),
          description: tPage('descriptions.meetingExecution'),
          href: `/${locale}/solutions/meeting-execution`,
          icon: Volume2,
          color: 'from-cyan-500/20 to-blue-500/20',
          textColor: 'text-cyan-400',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">{tPage('simulator.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{tPage('simulator.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Input and Cognitive Process (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Tab Selectors (Vertical on desktop, horizontal on mobile) */}
              <div className="flex flex-row lg:flex-col gap-2 p-1.5 bg-[#0a0a0f] border border-white/5 rounded-2xl overflow-x-auto lg:overflow-x-visible">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-left text-sm font-medium rounded-xl transition-all shrink-0 lg:shrink flex items-center gap-3 border ${
                      activeTab === tab
                        ? 'bg-primary/15 text-primary border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                        : 'border-transparent text-muted-foreground hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab === 'support' && <MessageSquare className="w-4 h-4" />}
                    {tab === 'sales' && <TrendingUp className="w-4 h-4" />}
                    {tab === 'knowledge' && <Database className="w-4 h-4" />}
                    {tab === 'meetings' && <Volume2 className="w-4 h-4" />}
                    {tPage(`simulator.tabs.${tab}`)}
                  </button>
                ))}
              </div>

              {/* Cognitive Steps Display */}
              <div className="flex-1 rounded-2xl border border-white/10 bg-card/20 backdrop-blur-md p-6 flex flex-col gap-6">
                {/* User Input Block */}
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {tPage('simulator.inputLabel')}
                  </div>
                  <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl text-sm font-medium text-gray-200">
                    {flow.input}
                  </div>
                </div>

                {/* Cognitive Processing Steps */}
                <div className="flex-1 flex flex-col justify-center gap-4">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-purple-400" />
                    {tPage('simulator.thoughtLabel')}
                  </div>
                  <div className="space-y-3 font-medium text-sm">
                    <motion.div 
                      key={activeTab + 't1'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3 p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl"
                    >
                      <div className="h-5 w-5 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5 text-xs text-purple-400 font-mono">1</div>
                      <p className="text-muted-foreground leading-relaxed">{flow.thought1}</p>
                    </motion.div>
                    <motion.div 
                      key={activeTab + 't2'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="flex items-start gap-3 p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl"
                    >
                      <div className="h-5 w-5 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5 text-xs text-purple-400 font-mono">2</div>
                      <p className="text-muted-foreground leading-relaxed">{flow.thought2}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal and Output (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="rounded-2xl border border-white/10 bg-[#050508] shadow-2xl flex-1 flex flex-col overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    <span className="text-xs font-mono text-muted-foreground ml-2">syrix-sandbox-terminal</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    ACTIVE
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-xs space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-muted-foreground font-bold">syrix-agent@core:~$</span> <span className="text-white">trigger --flow={activeTab}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-muted-foreground">[system] Initializing Model Context Protocol (MCP) handlers...</div>
                      <motion.div 
                        key={activeTab + 'a1'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="text-cyan-400 flex items-center gap-2"
                      >
                        <Zap className="w-3.5 h-3.5" /> {flow.action1}
                      </motion.div>
                      <motion.div 
                        key={activeTab + 'a2'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.45 }}
                        className="text-cyan-400 flex items-center gap-2"
                      >
                        <Zap className="w-3.5 h-3.5" /> {flow.action2}
                      </motion.div>
                    </div>
                  </div>

                  {/* Terminal Output Box */}
                  <motion.div 
                    key={activeTab + 'out'}
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm leading-relaxed"
                  >
                    <div className="font-bold flex items-center gap-2 mb-1.5 uppercase text-xs tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      {tPage('simulator.outputLabel')}
                    </div>
                    {flow.output}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Cards Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32">
        <div className="mx-auto max-w-6xl">
          {solutions.map((category) => (
            <div key={category.id} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center"
              >
                <h2 className="text-3xl font-bold text-white">{category.category}</h2>
              </motion.div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.15 }}
                  >
                    <Link href={item.href}>
                      <div className="group h-full rounded-2xl border border-white/10 bg-card/25 p-8 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card/45 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between min-h-[220px]">
                        <div>
                          <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} border border-white/5`}>
                            <item.icon className={`h-5 w-5 ${item.textColor}`} />
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:translate-x-1">
                          {tNav('common.learnMore')}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Sovereignty Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">{tPage('security.title')}</h2>
            <p className="text-lg text-muted-foreground">{tPage('security.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Panel 1: VPC */}
            <div className="bg-card/25 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-primary/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{tPage('security.vpc.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tPage('security.vpc.desc')}</p>
            </div>

            {/* Panel 2: RAG */}
            <div className="bg-card/25 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-primary/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{tPage('security.rag.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tPage('security.rag.desc')}</p>
            </div>

            {/* Panel 3: MCP */}
            <div className="bg-card/25 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-primary/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{tPage('security.mcp.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tPage('security.mcp.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
