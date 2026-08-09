import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GiscusComments from "@/app/components/giscus-comments";
import ViewCounter from "@/app/components/view-counter";
import { isLocale, locales, ui, type Locale } from "@/lib/i18n";
import {
  formatFullDate,
  getPost,
  postsByLocale,
  readingMinutes,
  slugifyHeading,
} from "../../posts";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    postsByLocale[lang].map((post) => ({ lang, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) {
    return {};
  }
  const post = getPost(lang, slug);
  if (!post) {
    return { title: "Post not found | Ghafek Alsaho" };
  }
  return {
    title: `${post.title} | Ghafek Alsaho`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${lang}/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;
  const post = getPost(locale, slug);
  if (!post) {
    notFound();
  }
  const t = ui[locale];
  const muted = "text-neutral-600 dark:text-neutral-400";

  return (
    <main className="mt-10">
      <p className="text-sm">
        <Link className="underline" href={`/blog/${locale}`}>
          {t.allPosts}
        </Link>
      </p>

      <article className="mt-10 space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold leading-snug">{post.title}</h1>
          <ul className={`space-y-1 text-sm ${muted}`}>
            <li>
              {t.author}: {t.authorName}
            </li>
            <li>
              {t.date}: {formatFullDate(post.date, locale)}
            </li>
            <li>
              {t.category}: {post.category}
            </li>
            <li>
              {t.readingTime}: {t.minRead(readingMinutes(post))}
            </li>
            <ViewCounter lang={locale} slug={post.slug} label={t.views} />
          </ul>
        </header>

        {post.sections.length > 1 && (
          <nav aria-label={t.contents} className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wide">{t.contents}</h2>
            <ul className="space-y-1 text-sm">
              {post.sections.map((section) => (
                <li key={section.heading}>
                  <a className="underline" href={`#${slugifyHeading(section.heading)}`}>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2
              id={slugifyHeading(section.heading)}
              className="scroll-mt-4 text-xl font-bold"
            >
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>

      <div className="mt-16">
        <GiscusComments
          lang={locale}
          heading={t.comments}
          notice={t.commentsNotice}
          loadLabel={t.commentsLoad}
          unloadLabel={t.commentsUnload}
          gitHubLabel={t.commentsGitHub}
          privacyLabel={t.commentsPrivacy}
        />
      </div>
    </main>
  );
}
