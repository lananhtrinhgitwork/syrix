import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Logo from '@/components/ui/logo';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
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

          {/* Col 4: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.about')}</Link></li>
              <li><Link href="/security" className="text-sm text-muted-foreground hover:text-white transition-colors">Trust Center</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">{t('navigation.contact')}</Link></li>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-muted-foreground/50">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}