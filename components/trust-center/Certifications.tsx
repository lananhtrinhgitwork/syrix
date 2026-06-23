'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Certifications() {
  const t = useTranslations();

  return (
    <section className="py-24 bg-[#0a0a0f] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            
            {/* Left Column: Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-serif">
                {t('trustCenter.certificationsTitle').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t('trustCenter.certificationsTitle').split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="text-lg text-gray-400 max-w-md">
                {t('trustCenter.certificationsSubtitle')}
              </p>
            </motion.div>

            {/* Right Column: FedRAMP Logo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-start lg:justify-end items-center"
            >
              <div className="flex flex-col items-center">
                {/* FedRAMP SVG Replica */}
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                  {/* Dark Blue Base Circle */}
                  <circle cx="60" cy="60" r="50" fill="#0B2341" />
                  {/* Red Swishes - Approximated */}
                  <path d="M10 60 C 30 40, 80 40, 110 50 C 90 65, 50 65, 10 60 Z" fill="#E3002F" />
                  <path d="M15 75 C 40 60, 85 60, 105 70 C 80 85, 45 85, 15 75 Z" fill="#E3002F" />
                  <path d="M25 90 C 50 80, 80 80, 95 88 C 75 100, 50 100, 25 90 Z" fill="#E3002F" />
                </svg>
                <div className="text-4xl tracking-widest font-light text-gray-200 uppercase font-sans">
                  FedRAMP
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 max-w-5xl"
          >
            {((t.raw('trustCenter.certifications') as string[]) as any[] && (t.raw('trustCenter.certifications') as string[])).map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
