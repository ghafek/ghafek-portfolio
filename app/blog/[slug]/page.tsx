import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GiscusComments from "../../components/giscus-comments";
import ViewCounter from "../../components/view-counter";
import { posts, readingTime, slugifyHeading } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
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
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) {
    notFound();
  }

  const muted = "text-neutral-600 dark:text-neutral-400";

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16">
      <p className="text-sm">
        <Link className="underline" href="/">
          ← back to home
        </Link>
      </p>

      <article className="mt-10 space-y-10">
        <header className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight">{post.title}</h1>
          <ul className={`space-y-1 text-sm ${muted}`}>
            <li>author: Ghafek Alsaho</li>
            <li>date: {post.date}</li>
            <li>category: {post.category}</li>
            <li>reading time: {readingTime(post)}</li>
            <ViewCounter slug={post.slug} />
          </ul>
        </header>

        {post.sections.length > 1 && (
          <nav aria-label="Table of contents" className="space-y-2">
            <h2 className="text-sm font-semibold uppercase">Contents</h2>
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
              className="scroll-mt-4 text-xl font-semibold"
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
        <GiscusComments />
      </div>
    </main>
  );
}
