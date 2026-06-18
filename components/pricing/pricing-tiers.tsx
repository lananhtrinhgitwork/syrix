'use client';

import { motion } from 'framer-motion';
import { Check, Diamond } from 'lucide-react';
import Link from 'next/link';

export function PricingTiers() {
  const tiers = [
    {
      name: 'AI Audit',
      subtitle: 'Your no-commitment AI entry point',
      price: 'FREE',
      duration: '60 minutes',
      deliverable: {
        title: 'Deliverable',
        desc: 'AI Opportunity Map — a concrete, business-specific AI roadmap tailored to your operations'
      },
      includes: [
        '60-minute 1-on-1 session with AI specialist.',
        'Deep analysis of your bottlenecks.',
        'Concrete roadmap with ROI estimates.',
        'Clear first-step recommendation.',
        'No commitment to next phase.'
      ],
      buttonLabel: 'Book Now',
      buttonPrimary: true,
      highlight: true
    },
    {
      name: 'AI Quick Start',
      subtitle: 'Implementation phase — first wins',
      price: '25M VND+',
      duration: '3–6 weeks',
      deliverable: {
        title: 'Deliverable',
        desc: '1–2 AI solutions deployed and running in your real operations with full training.'
      },
      includes: [
        'Architecture & implementation planning.',
        '1–2 AI solutions deployed live.',
        'Full staff training & documentation.',
        'Weekly sync & adjustments.',
        '30-day post-launch support.'
      ],
      buttonLabel: 'Book Now',
      buttonPrimary: false,
      highlight: false
    },
    {
      name: 'AI Scale',
      subtitle: 'Permanent AI layer in your ops',
      price: '23M VND+',
      priceSuffix: '/month',
      duration: 'Monthly retainer',
      deliverable: {
        title: 'Deliverable',
        desc: 'AI becomes embedded in how your company operates daily — continuous optimization.'
      },
      includes: [
        'Unlimited AI agent deployment.',
        'Ongoing integration & optimization.',
        'Quarterly strategy reviews.',
        'Priority support & iteration.',
        'Access to new AI capabilities as they emerge.'
      ],
      buttonLabel: 'Book Now',
      buttonPrimary: false,
      highlight: false
    }
  ];

  return (
    <section className="pb-24 pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] p-8 bg-[#151518] transition-all duration-300 ${
                  tier.highlight 
                    ? 'border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
                    : 'border border-white/5 hover:border-white/10'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{tier.subtitle}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                    {tier.priceSuffix && <span className="text-sm text-gray-400">{tier.priceSuffix}</span>}
                  </div>
                  <p className="text-sm text-gray-400">{tier.duration}</p>
                </div>

                <div className="bg-[#202024] rounded-xl p-5 mb-8 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Diamond className="w-4 h-4 text-gray-300" />
                    <span className="text-sm font-semibold text-gray-200">{tier.deliverable.title}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tier.deliverable.desc}
                  </p>
                </div>

                <div className="mb-8 flex-1">
                  <p className="text-sm text-gray-400 mb-4">Includes:</p>
                  <ul className="space-y-4">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" />
                        <span className="text-sm text-gray-300 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/book-demo" className="mt-auto w-full">
                  <button 
                    className={`w-full rounded-xl py-4 text-sm font-semibold transition-all ${
                      tier.buttonPrimary 
                        ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg' 
                        : 'bg-[#2A2A2E] text-white hover:bg-[#35353A]'
                    }`}
                  >
                    {tier.buttonLabel}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
