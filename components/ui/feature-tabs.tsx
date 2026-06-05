'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FeatureTab {
  id: string;
  title: string;
  description: string;
  visual: React.ReactNode;
}

export function FeatureTabs({ title, subtitle, tabs }: { title: string, subtitle?: string, tabs: FeatureTab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Tabs Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-5 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                  activeTab === tab.id 
                    ? 'bg-primary/10 border-primary/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                    : 'bg-transparent border-transparent hover:bg-white/5'
                }`}
              >
                <div>
                  <h3 className={`font-semibold mb-1 transition-colors ${activeTab === tab.id ? 'text-primary' : 'text-foreground group-hover:text-primary/80'}`}>
                    {tab.title}
                  </h3>
                  <p className={`text-sm transition-colors ${activeTab === tab.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {tab.description}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === tab.id ? 'text-primary translate-x-1' : 'text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2'}`} />
              </button>
            ))}
          </div>

          {/* Tab Content / Visual */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full rounded-2xl border border-white/10 bg-[#0a0a0f] p-6 shadow-2xl overflow-hidden relative flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                {activeContent?.visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
