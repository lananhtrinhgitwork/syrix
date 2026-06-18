'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';
import Logo from '@/components/ui/logo';
export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'vi' ? 'en' : 'vi';
    const cleanPath = pathname.replace(/^\/(vi|en)/, '');
    window.location.href = `/${newLocale}${cleanPath}`;
  };

  if (pathname.includes('/book-demo') || pathname.includes('/contact')) return null;

  return (
    <footer className="bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Col 1: Brand (2x width on desktop) */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Logo className="h-6 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs">
              {t('footer.top')}
            </p>
            <p className="mt-6 text-xs text-muted-foreground/50">
              {t('footer.builtByXperc')}
            </p>
          </div>

          {/* Col 2: Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">{t('footer.products')}</h3>
            <ul className="space-y-3">
              <li><Link href="/products/help-desk" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.helpDesk')}</Link></li>
              <li><Link href="/products/ai-agent" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.aiAgent')}</Link></li>
              <li><Link href="/products/asr" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.asr')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions/customer-support" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.customerSupport')}</Link></li>
              <li><Link href="/solutions/sales" className="text-sm text-muted-foreground hover:text-white transition-colors">Sales Automation</Link></li>
              <li><Link href="/solutions/internal-knowledge" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.internalKnowledge')}</Link></li>
              <li><Link href="/solutions/meeting-execution" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.meetingExecution')}</Link></li>
            </ul>
          </div>

          {/* Col 4: Company & Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3 mb-6">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.about')}</Link></li>
              <li><Link href="/security" className="text-sm text-muted-foreground hover:text-white transition-colors">Trust Center</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.contact')}</Link></li>
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">hello@syrix.ai</li>
              <li className="text-sm text-muted-foreground">+84 90 123 4567</li>
              <li className="text-sm text-muted-foreground">Vietnam</li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              <li><Link href="/legal/privacy-policy" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.privacyPolicy')}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-xs text-muted-foreground/50">
            {t('footer.copyright')}
          </p>
          <button
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase tracking-wider">{locale}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}