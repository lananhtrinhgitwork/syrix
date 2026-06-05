'use client';

import { Network } from 'lucide-react';

export function EcosystemGrid({ title, description }: { title?: string, description?: string }) {
  const integrations = [
    { name: 'HubSpot', type: 'CRM' },
    { name: 'Salesforce', type: 'CRM' },
    { name: 'Jira', type: 'DevOps' },
    { name: 'Confluence', type: 'Wiki' },
    { name: 'Slack', type: 'Comms' },
    { name: 'Teams', type: 'Comms' },
    { name: 'Google Drive', type: 'Storage' },
    { name: 'Zendesk', type: 'Support' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title || "Zero Rip-and-Replace Integration"}</h2>
          <p className="text-lg text-muted-foreground">{description || "Syrix connects to your existing corporate architecture via secure MCP plugins in minutes."}</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 relative z-0">
            {integrations.map((app) => (
              <div 
                key={app.name}
                className="w-[140px] h-[80px] bg-card border border-white/10 rounded-xl flex flex-col items-center justify-center shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                <Network className="w-5 h-5 text-muted-foreground mb-1" />
                <span className="font-semibold text-sm">{app.name}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{app.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
