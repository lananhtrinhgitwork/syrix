'use client';

import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  title: string;
  desc: string;
  illustration: React.ReactNode;
  delay?: number;
}

export default function PillarCard({ icon: Icon, accentColor, borderColor, glowColor, title, desc, illustration, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:scale-[1.02] ${borderColor} hover:shadow-[0_0_30px_-5px] ${glowColor}`}
    >
      {/* Illustration */}
      <div className="mb-4">{illustration}</div>

      {/* Icon + Title */}
      <div className="mb-2 flex items-center gap-2">
        <Icon className={`h-5 w-5 ${accentColor}`} />
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
    </motion.div>
  );
}