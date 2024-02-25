import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './app/i18n/settings';

acceptLanguage.languages(languages);

export function middleware(req: NextRequest) {
  if (req.url.match(/(robots|sitemap)/)) {
    return NextResponse.next();
  }

  let lng;
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;
  const pathname = req.nextUrl.pathname;

  const pathnameIsMissingLocale = languages.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about

    return NextResponse.rewrite(new URL(`/${lng}${pathname}`, req.url));
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer')!);
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // Do not run the middleware on the following paths
  matcher: '/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico|devtools).*)',
};
