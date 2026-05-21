import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/locales'; // Khớp 100% với lib/locales.ts ở gốc

export default createMiddleware({
  locales: locales,            // ['vi', 'en']
  defaultLocale: defaultLocale,   // 'vi'
  localePrefix: 'always'       // Bắt buộc luôn hiển thị /vi hoặc /en để tránh lỗi 404
});

export const config = {
  // Quét toàn bộ các route, bỏ qua file tĩnh, hình ảnh, favicon
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};