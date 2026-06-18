'use client';

import { useLocale } from 'next-intl';
import { infoSecData } from './data';
import CTA from '@/components/layout/cta';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Reusable Accordion Component
function Accordion({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-4 bg-black/20">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-white">{title}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 border-t border-white/5 mt-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function InformationSecurityPolicy() {
  const locale = useLocale();
  const data = infoSecData(locale);
  const [activeSection, setActiveSection] = useState(data.nav.items[0].id);

  // ScrollSpy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    data.nav.items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data.nav.items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <div className="pt-32 pb-16 border-b border-white/10 bg-black/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">{data.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">{data.hero.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">{data.hero.description}</p>
          <p className="text-sm font-mono text-muted-foreground/50">{data.hero.effective}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-16 flex flex-col md:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 shrink-0 hidden md:block">
          <div className="sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 mb-6">{data.nav.title}</h3>
            <nav className="flex flex-col gap-3">
              {data.nav.items.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left text-sm transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-400 font-semibold translate-x-2' 
                      : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          {data.content.sections.map((section: any) => (
            <section key={section.id} id={section.id} className="mb-20 scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">{section.title}</h2>
              
              {section.intro && <p className="text-muted-foreground leading-relaxed mb-6">{section.intro}</p>}
              
              {section.body && (
                <div 
                  className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: section.body }} 
                />
              )}

              {/* Subsections (can be accordions or plain text) */}
              {section.subsections && (
                <div className="mt-8 space-y-2">
                  {section.subsections.map((sub: any, idx: number) => (
                    <Accordion key={idx} title={sub.title}>
                      {sub.body && <p className="text-muted-foreground leading-relaxed mt-4">{sub.body}</p>}
                      {sub.list && (
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
                          {sub.list.map((item: string, i: number) => <li key={i}>{item}</li>)}
                        </ul>
                      )}
                    </Accordion>
                  ))}
                </div>
              )}

              {/* Diagram / CIA Triad */}
              {section.diagram && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-black/30 border border-white/10 p-6 rounded-2xl">
                    <h3 className="font-bold text-blue-400 mb-3">{section.diagram.confidentialityTitle}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.diagram.confidentialityDesc}</p>
                  </div>
                  <div className="bg-black/30 border border-white/10 p-6 rounded-2xl">
                    <h3 className="font-bold text-blue-400 mb-3">{section.diagram.integrityTitle}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.diagram.integrityDesc}</p>
                  </div>
                  <div className="bg-black/30 border border-white/10 p-6 rounded-2xl">
                    <h3 className="font-bold text-blue-400 mb-3">{section.diagram.availabilityTitle}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.diagram.availabilityDesc}</p>
                  </div>
                </div>
              )}

              {/* Compliance list */}
              {section.compliance && (
                <ul className="space-y-4 mt-6">
                  {section.compliance.map((item: any, idx: number) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:gap-4 p-4 rounded-xl border border-white/5 bg-black/20">
                      <strong className="text-white min-w-[240px] shrink-0">{item.label}</strong>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Table / Lists */}
              {section.table && (
                <ul className="space-y-4 mt-6">
                  {section.table.map((item: any, idx: number) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:gap-4 p-4 rounded-xl border border-white/5 bg-black/20">
                      <strong className="text-white min-w-[200px] shrink-0">{item.label}</strong>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Steps */}
              {section.steps && (
                <div className="mt-8 space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                  {section.steps.map((step: any, idx: number) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                         <span className="text-xs font-bold text-blue-500">{step.label.split('—')[0].trim()}</span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-black/20">
                        <strong className="text-white block mb-1">{step.label.split('—')[1]?.trim() || step.label}</strong>
                        <span className="text-sm text-muted-foreground block">{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* FAQs Accordions */}
              {section.faqs && (
                <div className="mt-8">
                  {section.faqs.map((faq: any, idx: number) => (
                    <Accordion key={idx} title={faq.q}>
                      <div className="text-muted-foreground leading-relaxed mt-4 prose prose-invert prose-p:text-muted-foreground prose-strong:text-white" dangerouslySetInnerHTML={{ __html: faq.a }} />
                    </Accordion>
                  ))}
                </div>
              )}

              {section.outro && (
                <div 
                  className="mt-8 text-muted-foreground prose prose-invert prose-p:text-muted-foreground prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: section.outro }} 
                />
              )}
              
            </section>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-white/10">
        <CTA />
      </div>
    </div>
  );
}