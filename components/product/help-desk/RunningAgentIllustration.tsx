'use client';

import { motion } from 'framer-motion';

export default function RunningAgentIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#12121a] shadow-2xl"
    >
      {/* Widget Header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-gradient-to-r from-primary/20 to-cyan-500/20 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-xs font-bold text-white">
          S
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Syrix Help Desk</p>
          <p className="flex items-center gap-1 text-[10px] text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Online — 12 conversations
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 p-4">
        <div className="flex items-start gap-2.5 max-w-[85%]">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-[9px] font-bold text-white">
            S
          </div>
          <div className="rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2">
            <p className="text-sm text-white">Hi! How can I help you today?</p>
          </div>
        </div>

        <div className="ml-auto max-w-[85%]">
          <div className="rounded-2xl rounded-tr-sm bg-primary px-3 py-2">
            <p className="text-sm text-white">Show me apartments in D1 under 5B</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-[9px] font-bold text-white">
            S
          </div>
          <div className="rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2">
            <p className="text-sm text-white">I found 3 apartments matching your criteria:</p>
            <div className="mt-2 space-y-1">
              {['The Merit - 2BR - 4.2B', 'Sunwah Pearl - 3BR - 4.8B'].map((apt) => (
                <div key={apt} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
                  <div className="h-4 w-4 rounded bg-gradient-to-br from-cyan-500/30 to-primary/30" />
                  <span className="text-[11px] text-white/70">{apt}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-cyan-400">Would you like to schedule a viewing?</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-[9px] font-bold text-white">
            S
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2">
            <span className="flex gap-0.5">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: '0ms' }} />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: '150ms' }} />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: '300ms' }} />
            </span>
            <span className="text-xs text-cyan-400">Agent is thinking…</span>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <span className="flex-1 text-xs text-white/30">Type your message…</span>
          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}