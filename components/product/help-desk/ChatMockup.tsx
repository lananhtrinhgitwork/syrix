'use client';

import { motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatMockup() {
  const suggestions = ['Show me apartments in District 1', 'What are your payment terms?', 'I need a quote for 50 users'];

  return (
    <div className="relative">
      {/* Floating icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="absolute -top-2 -right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </motion.div>

      {/* Widget card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#12121a] shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-primary/20 to-cyan-500/20 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500">
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Syrix Help Desk</p>
              <p className="text-[10px] text-emerald-400">● Online</p>
            </div>
          </div>
          <button className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="space-y-3 p-4">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-2 max-w-[85%]"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-[10px] font-bold text-white">
              S
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2">
              <p className="text-sm text-white">Hi! I'm your Syrix assistant. How can I help you today?</p>
            </div>
          </motion.div>

          {/* Suggestion chips */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="ml-8 flex flex-wrap gap-2"
          >
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs text-primary transition-all hover:bg-primary/20 hover:border-primary/50"
              >
                {s}
              </button>
            ))}
          </motion.div>

          {/* User message */}
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="ml-auto max-w-[85%]"
          >
            <div className="rounded-2xl rounded-tr-sm bg-primary px-3 py-2">
              <p className="text-sm text-white">Show me apartments in District 1 under 5 billion VND</p>
            </div>
          </motion.div>

          {/* Agent reply */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-start gap-2 max-w-[90%]"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-[10px] font-bold text-white">
              S
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2">
              <p className="text-sm text-white">I found 3 apartments in District 1 under 5 billion VND:</p>
              <div className="mt-2 space-y-1.5">
                {['The Merit - 2BR - 4.2B', 'Sunwah Pearl - 3BR - 4.8B', 'Saigon Metropole - 2BR - 3.9B'].map((apt, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-500/30 to-primary/30" />
                    <span className="text-xs text-white/80">{apt}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-cyan-400">Would you like to schedule a viewing?</p>
            </div>
          </motion.div>

          {/* Thinking indicator */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="flex items-start gap-2"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-[10px] font-bold text-white">
              S
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2">
              <span className="flex gap-0.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: '0ms' }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: '150ms' }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: '300ms' }} />
              </span>
              <span className="text-xs text-muted-foreground">Agent is thinking…</span>
            </div>
          </motion.div>
        </div>

        {/* Input bar */}
        <div className="border-t border-white/10 px-4 py-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <input
              type="text"
              placeholder="Type your message…"
              className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
              readOnly
            />
            <Send className="h-4 w-4 text-primary" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}