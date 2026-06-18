'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Logo from '@/components/ui/logo';

function DropdownMenu({
  name,
  label,
  items,
  openDropdown,
  toggleDropdown,
  setOpenDropdown,
  isActive,
  localeHref,
  closeMobileMenu,
}: {
  name: string;
  label: string;
  items: { label: string; href: string }[];
  openDropdown: string | null;
  toggleDropdown: (name: string) => void;
  setOpenDropdown: (name: string | null) => void;
  isActive: (path: string) => boolean;
  localeHref: (path: string) => string;
  closeMobileMenu: () => void;
}) {
  const localRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (localRef.current && !localRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setOpenDropdown]);

  return (
    <div 
      className="relative" 
      ref={localRef}
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        onClick={() => toggleDropdown(name)}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive(items[0]?.href?.split('/').slice(0, 2).join('/') || '')
            ? 'text-primary'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === name ? 'rotate-180' : ''}`} />
      </button>
      {openDropdown === name && (
        <div className="absolute top-full left-0 pt-2 w-56 z-50">
          <div className="rounded-xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={localeHref(item.href)}
                className={`block px-4 py-3 text-sm transition-all ${
                  isActive(item.href) ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);

  const localeHref = (path: string) => `/${locale}${path}`;

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleLocale = () => {
    const newLocale = locale === 'vi' ? 'en' : 'vi';
    const cleanPath = pathname.replace(/^\/(vi|en)/, '');
    window.location.href = `/${newLocale}${cleanPath}`;
  };

  const isActive = (path: string) => {
    const cleanPath = pathname.replace(/^\/(vi|en)/, '');
    return cleanPath === path || cleanPath.startsWith(path + '/');
  };

  if (pathname.includes('/book-demo') || pathname.includes('/contact')) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — official SVG */}
          <Link href={localeHref('/')} className="flex items-center shrink-0">
            <Logo className="h-7 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <DropdownMenu
              name="products"
              label={t('navigation.products')}
              items={[
                { label: t('navigation.helpDesk'), href: '/products/help-desk' },
                { label: t('navigation.aiAgent'), href: '/products/ai-agent' },
                { label: t('navigation.asr'), href: '/products/asr' },
              ]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              setOpenDropdown={setOpenDropdown}
              isActive={isActive}
              localeHref={localeHref}
              closeMobileMenu={() => setIsMenuOpen(false)}
            />
            <DropdownMenu
              name="solutions"
              label={t('navigation.solutions')}
              items={[
                { label: t('navigation.customerSupport'), href: '/solutions/customer-support' },
                { label: 'Sales Automation', href: '/solutions/sales' },
                { label: t('navigation.internalKnowledge'), href: '/solutions/internal-knowledge' },
                { label: t('navigation.meetingExecution'), href: '/solutions/meeting-execution' },
              ]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              setOpenDropdown={setOpenDropdown}
              isActive={isActive}
              localeHref={localeHref}
              closeMobileMenu={() => setIsMenuOpen(false)}
            />
            <Link
              href={localeHref('/pricing')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/pricing') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('navigation.pricing')}
            </Link>
            <Link
              href={localeHref('/contact')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('navigation.contact')}
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
             <Link
              href={localeHref('/book-demo')}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40 hover:scale-[1.02]"
            >
              {t('navigation.bookDemo')}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Panel */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <Logo className="h-6 w-auto" />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <MobileNavSection title={t('navigation.products')} items={[
                { label: t('navigation.helpDesk'), href: localeHref('/products/help-desk') },
                { label: t('navigation.aiAgent'), href: localeHref('/products/ai-agent') },
                { label: t('navigation.asr'), href: localeHref('/products/asr') },
              ]} />
              <MobileNavSection title={t('navigation.solutions')} items={[
                { label: t('navigation.customerSupport'), href: localeHref('/solutions/customer-support') },
                { label: 'Sales Automation', href: localeHref('/solutions/sales') },
                { label: t('navigation.internalKnowledge'), href: localeHref('/solutions/internal-knowledge') },
                { label: t('navigation.meetingExecution'), href: localeHref('/solutions/meeting-execution') },
              ]} />
              <MobileNavLink href={localeHref('/pricing')} label={t('navigation.pricing')} />
              <MobileNavLink href={localeHref('/contact')} label={t('navigation.contact')} />
            </div>
            <div className="mt-auto pt-8 border-t border-white/10 space-y-3">
              <Link
                href={localeHref('/book-demo')}
                className="block w-full text-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.bookDemo')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileNavSection({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-white/5 transition-colors"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
      </button>
      {expanded && (
        <div className="ml-4 border-l border-white/10 pl-4 space-y-1 mb-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string; }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-white/5 transition-colors"
    >
      {label}
    </Link>
  );
}