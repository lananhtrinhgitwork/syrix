export const locales = ['vi', 'en'] as const;
export const defaultLocale = 'vi' as const;

export function getLocaleDirection(locale: string): 'ltr' | 'rtl' {
  return locale === 'vi' ? 'ltr' : 'ltr';
}