export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  sections: PostSection[];
};

export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function readingTime(post: Post): string {
  const words = post.sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export const posts: Post[] = [
  {
    slug: "first-post",
    title: "First post coming soon",
    date: "TBD",
    category: "General",
    description:
      "Placeholder first post while the blog skeleton, per-post metadata, and comments are wired up.",
    sections: [
      {
        heading: "About this post",
        paragraphs: [
          "This is a placeholder post so the blog structure, per-post metadata, table of contents, and the comment section are wired up end to end.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Real posts about backend engineering, infrastructure, automation, and study notes from TU Berlin will replace this entry.",
        ],
      },
    ],
  },
];
