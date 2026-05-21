import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/locales';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = await getMessages();
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}