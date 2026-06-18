'use client';

import { Database, Cloud, Kanban, FileText, Slack, Users, HardDrive, Headset } from 'lucide-react';

export function EcosystemGrid({ title, description }: { title?: string, description?: string }) {
  const integrations = [
    { name: 'HubSpot', type: 'CRM', icon: Database },
    { name: 'Salesforce', type: 'CRM', icon: Cloud },
    { name: 'Jira', type: 'DevOps', icon: Kanban },
    { name: 'Confluence', type: 'Wiki', icon: FileText },
    { name: 'Slack', type: 'Comms', icon: Slack },
    { name: 'Teams', type: 'Comms', icon: Users },
    { name: 'Google Drive', type: 'Storage', icon: HardDrive },
    { name: 'Zendesk', type: 'Support', icon: Headset },
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
            {integrations.map((app) => {
              const Icon = app.icon;
              return (
                <div 
                  key={app.name}
                  className="w-[140px] h-[80px] bg-card border border-white/10 rounded-xl flex flex-col items-center justify-center shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                >
                  <Icon className="w-5 h-5 text-muted-foreground mb-1" />
                  <span className="font-semibold text-sm">{app.name}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{app.type}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
