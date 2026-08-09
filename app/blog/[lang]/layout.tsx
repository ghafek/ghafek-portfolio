import Link from "next/link";
import { Bitter, Noto_Naskh_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, localeMeta, locales, ui } from "@/lib/i18n";

const bitter = Bitter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-blog",
});

// Not preloaded: the English and German sections never render Arabic glyphs,
// and preloading would cost them ~94 KB of font they never use.
const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-blog-arabic",
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const meta = localeMeta[lang];
  const t = ui[lang];

  return (
    <div
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${bitter.variable} ${notoNaskhArabic.variable} blog-zone`}
    >
      <div className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16">
        <header className="space-y-2 border-b border-neutral-300 pb-6 dark:border-neutral-700">
          <p className="text-2xl font-bold tracking-tight">
            <Link href={`/blog/${lang}`}>Ghafek Alsaho</Link>
          </p>
          {lang !== "ar" && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.tagline}</p>
          )}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm">
            <Link className="hover:underline" href={`/blog/${lang}`}>
              {t.posts}
            </Link>
            <Link className="hover:underline" href="/">
              {t.portfolio}
            </Link>
            {lang !== "ar" && (
              <a
                className="hover:underline"
                href="https://github.com/ghafek"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            )}
            <span className="ms-auto flex gap-3">
              {locales.map((locale) =>
                locale === lang ? (
                  <span key={locale} className="font-bold">
                    {localeMeta[locale].label}
                  </span>
                ) : (
                  <Link key={locale} className="underline" href={`/blog/${locale}`}>
                    {localeMeta[locale].label}
                  </Link>
                ),
              )}
            </span>
          </nav>
        </header>
        {children}

        <footer className="mt-16 border-t border-neutral-300 pt-6 text-sm dark:border-neutral-700">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link className="underline" href="/impressum">
              Impressum
            </Link>
            <Link className="underline" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
