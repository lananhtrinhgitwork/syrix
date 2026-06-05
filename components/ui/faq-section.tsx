'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export function FAQSection({ 
  title, 
  faqs 
}: { 
  title?: string;
  faqs: { question: string, answer: string }[] 
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 border-t border-white/5 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
               <MessageCircleQuestion className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {title || "Frequently Asked Questions"}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="overflow-hidden rounded-xl border border-white/10 bg-[#12121a]/80 backdrop-blur-sm transition-all hover:border-white/20">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/5 px-6 py-5 bg-[#0a0a0f]/50">
                          <p className="text-base text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
