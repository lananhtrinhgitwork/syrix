'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronRight, ArrowRight, ShieldCheck, TrendingUp, FolderSearch, Activity } from 'lucide-react';
import Link from 'next/link';

export function SolutionsShowcase() {
  const t = useTranslations('navigation');
  
  const solutions = [
    {
      id: 'customer-support',
      title: t('customerSupport'),
      icon: <ShieldCheck className="w-5 h-5" />,
      description: 'Turn your support center into a profit machine. Automate 80% of tier-1 requests while executing ERP billing changes live.',
      href: '/solutions/customer-support',
      visual: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Instant Resolution
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">Zero hallucinations, full ERP access, and silent human escalation.</p>
        </div>
      )
    },
    {
      id: 'sales',
      title: t('sales'),
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'An always-on BDR that never sleeps. Parses RFPs, calculates custom enterprise quotes, and books meetings 24/7.',
      href: '/solutions/sales',
      visual: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-blue-500/10 text-blue-400 border border-blue-500/30 px-6 py-3 rounded-xl text-sm font-medium mb-4 flex items-center gap-2">
            Quote Generated: $4,500/mo <ArrowRight className="w-4 h-4" />
          </div>
          <p className="text-muted-foreground text-sm max-w-xs text-center">Automatically synced to Salesforce pipeline.</p>
        </div>
      )
    },
    {
      id: 'internal',
      title: t('internalKnowledge'),
      icon: <FolderSearch className="w-5 h-5" />,
      description: 'Unify Jira, Wiki, and Google Drive into a single, secure brain with strict RBAC mapping.',
      href: '/solutions/internal-knowledge',
      visual: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-purple-500/10 text-purple-400 border border-purple-500/30 px-6 py-3 rounded-lg text-sm font-mono mb-4 text-center">
            > Analyzing 50MB Engineering SOP
            <br />
            > RBAC Token Verified
          </div>
        </div>
      )
    },
    {
      id: 'meetings',
      title: t('meetingExecution'),
      icon: <Activity className="w-5 h-5" />,
      description: 'Extract action items from multi-speaker meetings and automatically deploy Jira tickets.',
      href: '/solutions/meeting-execution',
      visual: (
        <div className="flex flex-col items-center justify-center h-full">
           <div className="flex gap-1 mb-4 h-8 items-end">
              {[...Array(8)].map((_, i) => (
                 <div key={i} className="w-1.5 bg-cyan-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%` }} />
              ))}
           </div>
           <div className="text-cyan-400 text-sm font-medium">Extracting Actions -> Jira</div>
        </div>
      )
    }
  ];

  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeContent = solutions.find(s => s.id === activeTab);

  return (
    <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions for Every Department</h2>
          <p className="text-lg text-muted-foreground">Syrix adapts to your operational silos, converting unstructured processes into autonomous velocity.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Tabs Menu */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {solutions.map((sol) => (
              <button
                key={sol.id}
                onMouseEnter={() => setActiveTab(sol.id)}
                onClick={() => setActiveTab(sol.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border flex flex-col gap-2 relative overflow-hidden group ${
                  activeTab === sol.id 
                    ? 'bg-primary/5 border-primary/30 shadow-md' 
                    : 'bg-transparent border-transparent hover:bg-white/5'
                }`}
              >
                {activeTab === sol.id && (
                  <motion.div layoutId="activeSolutionTab" className="absolute inset-0 bg-primary/10 rounded-2xl pointer-events-none" />
                )}
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`p-2 rounded-lg ${activeTab === sol.id ? 'bg-primary text-primary-foreground' : 'bg-white/5 text-muted-foreground group-hover:text-foreground'}`}>
                    {sol.icon}
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${activeTab === sol.id ? 'text-primary' : 'text-foreground'}`}>
                    {sol.title}
                  </h3>
                </div>
                <p className={`text-sm relative z-10 pl-12 transition-colors ${activeTab === sol.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {sol.description}
                </p>
              </button>
            ))}
          </div>

          {/* Tab Visual & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="h-[400px] w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-3xl border border-white/10 bg-[#0a0a0f] shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none z-10" />
                  
                  {/* Dynamic Visual */}
                  <div className="absolute inset-0 z-0 p-8">
                    {activeContent?.visual}
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                     <Link href={activeContent?.href || '#'}>
                       <button className="w-full py-4 bg-white/10 hover:bg-primary hover:text-primary-foreground backdrop-blur-md border border-white/20 rounded-xl transition-all font-bold flex items-center justify-center gap-2 group">
                         Explore {activeContent?.title} Solution
                         <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
