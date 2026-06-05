'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Target, Heart, Award, Shield, Server, Cloud, Cpu, Code2, Check } from 'lucide-react';
import CTA from '@/components/layout/cta';

export default function About() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pb-32 bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        
        {/* Abstract Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Empowering Global Business
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white font-serif"
            >
              Building the Future of<br className="hidden md:block" /> Enterprise Software.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              XPERC is a premier software development and technology services company. With over 15 years of deep expertise in Cloud, HPC, and custom IT solutions, we partner with enterprises to turn complex challenges into scalable digital realities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-500 hover:scale-105">
                  Partner with XPERC
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Solutions */}
      <section className="py-24 relative border-t border-white/5 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Our Expertise</h2>
              <h3 className="text-3xl font-bold text-white md:text-4xl">Engineered for Scale and Security</h3>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <Code2 className="h-8 w-8 text-blue-400" />, title: 'Software Development', description: 'Dedicated development teams and professional IT consulting tailored for your specific business logic.' },
                { icon: <Cloud className="h-8 w-8 text-cyan-400" />, title: 'Cloud Solutions', description: '15+ years of robust architecture design, cloud migrations, and highly available deployments.' },
                { icon: <Cpu className="h-8 w-8 text-emerald-400" />, title: 'HPC Systems', description: 'High-Performance Computing infrastructure designed for intensive research and data processing.' },
                { icon: <Server className="h-8 w-8 text-purple-400" />, title: 'xCorp Platform', description: 'Our proprietary integrated management system for Timesheets, OKRs, HR, and complete business operations.' },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#12121a]/80 backdrop-blur p-8 hover:border-white/20 transition-all group"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-900/10 rounded-tl-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">The XPERC DNA</h2>
                <h3 className="text-4xl font-bold text-white mb-6 font-serif">A "Win-Win" Partnership Model.</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We don't just write code; we build lifelong technical alliances. From startups to global enterprises, we prioritize transparency, strict data security, and lifetime support for the solutions we deliver.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check className="w-4 h-4 text-emerald-400" /></div>
                    Lifetime Product Support
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check className="w-4 h-4 text-emerald-400" /></div>
                    Uncompromising Security Standards
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check className="w-4 h-4 text-emerald-400" /></div>
                    Transparent "Time & Materials" Engagement
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4 mt-8">
                  <div className="bg-[#12121a] border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                     <span className="text-4xl font-bold text-white mb-2">15+</span>
                     <span className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/40 to-blue-600/10 border border-blue-500/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-40">
                     <Target className="w-8 h-8 text-blue-400 mb-3" />
                     <span className="text-sm font-bold text-white">Global Reach</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-600/10 border border-emerald-500/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-40">
                     <Shield className="w-8 h-8 text-emerald-400 mb-3" />
                     <span className="text-sm font-bold text-white">Secure Systems</span>
                  </div>
                  <div className="bg-[#12121a] border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                     <span className="text-4xl font-bold text-white mb-2">100%</span>
                     <span className="text-xs text-gray-400 uppercase tracking-wider">Client Commitment</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}