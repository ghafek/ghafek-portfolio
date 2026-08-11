import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localeMeta, ui, type Locale } from "@/lib/i18n";
import { formatDayMonth, getPosts, postPath, type Post } from "../posts";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }
  return {
    title: `Blog (${localeMeta[lang].label}) | Ghafek Alsaho`,
    description: ui[lang].tagline,
  };
}

// Posts arrive newest first, so the groups come out in that order too; the
// entries are sorted anyway so the year headings cannot drift out of order.
function groupByYear(posts: Post[]): [string, Post[]][] {
  const groups = new Map<string, Post[]>();
  for (const post of posts) {
    const year = post.date.slice(0, 4);
    const group = groups.get(year) ?? [];
    group.push(post);
    groups.set(year, group);
  }
  return [...groups.entries()].sort(([a], [b]) => b.localeCompare(a));
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;
  const t = ui[locale];
  const years = groupByYear(getPosts(locale));

  return (
    <main className="mt-10 space-y-12">
      <h1 className="text-2xl font-bold tracking-tight">{t.blogTitle}</h1>
      <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      {years.map(([year, posts]) => (
        <section key={year} className="space-y-5">
          <h2 className="text-2xl font-bold tabular-nums">{year}</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="grid grid-cols-[6rem_1fr] items-baseline gap-x-4 gap-y-1 sm:grid-cols-[6rem_1fr_auto] sm:gap-x-6"
              >
                <span className="text-sm tabular-nums text-neutral-600 dark:text-neutral-400">
                  {formatDayMonth(post.date, locale)}
                </span>
                <Link
                  className="font-semibold leading-relaxed hover:underline"
                  href={`/blog/${locale}/${postPath(post)}`}
                >
                  {post.title}
                </Link>
                <span className="col-start-2 row-start-2 justify-self-start rounded border border-neutral-400 px-2 py-0.5 text-xs text-neutral-600 sm:col-start-3 sm:row-start-1 dark:border-neutral-600 dark:text-neutral-400">
                  {post.category}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
