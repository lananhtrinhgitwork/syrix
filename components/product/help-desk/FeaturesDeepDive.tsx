'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileText, CheckSquare, Activity, UserCheck, LayoutDashboard } from 'lucide-react';
import ChatMockup from './ChatMockup';
import ConfirmationCardMockup from './ConfirmationCardMockup';
import ThinkingLogMockup from './ThinkingLogMockup';
import type { UseTranslationsReturnValue } from './types';

interface Props {
  t: (key: string) => any;
  tRaw: (key: string) => any;
}

const features = [
  { key: 'feature1', visual: <ChatMockup />, Icon: MessageSquare },
  { key: 'feature2', visual: <ChatMockup />, Icon: FileText },
  { key: 'feature3', visual: <ConfirmationCardMockup />, Icon: CheckSquare },
  { key: 'feature4', visual: <ThinkingLogMockup />, Icon: Activity },
  { key: 'feature5', visual: <UserCheck className="h-12 w-12 text-primary" />, Icon: UserCheck },
  { key: 'feature6', visual: <LayoutDashboard className="h-12 w-12 text-primary" />, Icon: LayoutDashboard },
];

function FeatureBlock({ feature, index }: { feature: typeof features[0]; index: number }) {
  const reversed = index % 2 === 1;
  const feat = feature;
  const Icon = feat.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`grid items-center gap-8 md:gap-16 ${
        reversed ? 'md:grid-flow-col-dense md:grid-cols-2' : 'md:grid-cols-2'
      }`}
    >
      <div className={`${reversed ? 'md:order-2' : ''}`}>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">{feat.key}</h3>
        <p className="text-muted-foreground">{feat.key}</p>
      </div>
      <div className={`flex justify-center ${reversed ? 'md:order-1' : ''}`}>
        <div className="w-full max-w-sm">{feat.visual}</div>
      </div>
    </motion.div>
  );
}

export default function FeaturesDeepDive({ t, tRaw }: Props) {
  const featureKeys = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'] as const;
  const featureIcons = [MessageSquare, FileText, CheckSquare, Activity, UserCheck, LayoutDashboard];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {t('features.title')}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {featureKeys.map((key, i) => {
              const feature = t(`features.${key}`);
              const Icon = featureIcons[i];
              const reversed = i % 2 === 1;
              
              // Select visual based on feature
              let visual: React.ReactNode;
              switch (i) {
                case 0: case 1: visual = <ChatMockup />; break;
                case 2: visual = <ConfirmationCardMockup />; break;
                case 3: visual = <ThinkingLogMockup />; break;
                case 4: visual = <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10"><UserCheck className="h-16 w-16 text-cyan-400" /></div>; break;
                case 5: visual = <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10"><LayoutDashboard className="h-16 w-16 text-primary" /></div>; break;
                default: visual = null;
              }

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid items-center gap-8 md:gap-16 ${
                    reversed ? 'md:grid-flow-col-dense md:grid-cols-2' : 'md:grid-cols-2'
                  }`}
                >
                  <div className={reversed ? 'md:order-2' : ''}>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                  <div className={`flex justify-center ${reversed ? 'md:order-1' : ''}`}>
                    <div className="w-full max-w-sm">{visual}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}