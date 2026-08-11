import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localeMeta, ui, type Locale } from "@/lib/i18n";
import { getPosts, postPath } from "../posts";

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

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;
  const t = ui[locale];
  const posts = getPosts(locale);

  return (
    <main className="mt-10 space-y-8">
      <h1 className="text-2xl font-bold tracking-tight">{t.blogTitle}</h1>
      <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="grid grid-cols-[7rem_1fr] items-baseline gap-x-4 gap-y-1 sm:grid-cols-[7rem_1fr_auto] sm:gap-x-6"
          >
            <span className="text-sm tabular-nums text-neutral-600 dark:text-neutral-400">
              {post.date}
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
    </main>
  );
}
