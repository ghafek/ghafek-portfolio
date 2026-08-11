import { localeMeta, type Locale } from "@/lib/i18n";

export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  description: string;
  sections: PostSection[];
};

// Each language section is an independent blog stream: posts are written
// separately per language and are not translations of each other.
export const postsByLocale: Record<Locale, Post[]> = {
  en: [
    {
      slug: "hello-world",
      title: "Hello world!",
      date: "2026-08-09",
      category: "general",
      description: "First post: what this blog is for and what I plan to write about.",
      sections: [
        {
          heading: "Why this blog exists",
          paragraphs: [
            "I set this blog up as somewhere to write down what I learn while working on backend services, infrastructure and data systems. Short, practical notes rather than long essays.",
            "Topics will follow whatever I am actually working on: Kubernetes and logging, CI/CD and automation, API integration, and large-scale data systems from my studies at TU Berlin.",
            "The English, German and Arabic sections are independent. Each one has its own posts rather than translations of the others.",
          ],
        },
      ],
    },
  ],
  de: [
    {
      slug: "hallo-welt",
      title: "Hallo Welt!",
      date: "2026-08-09",
      category: "allgemein",
      description: "Erster Beitrag: worum es in diesem Blog geht.",
      sections: [
        {
          heading: "Warum es diesen Blog gibt",
          paragraphs: [
            "Ich habe diesen Blog eingerichtet, um festzuhalten, was ich bei der Arbeit an Backend-Diensten, Infrastruktur und Datensystemen lerne. Kurze, praktische Notizen statt langer Essays.",
            "Die Themen richten sich danach, woran ich gerade arbeite: Kubernetes und Logging, CI/CD und Automatisierung, API-Integration sowie großskalige Datensysteme aus meinem Studium an der TU Berlin.",
            "Die englischen, deutschen und arabischen Bereiche sind unabhängig voneinander. Jeder hat eigene Beiträge und keine Übersetzungen.",
          ],
        },
      ],
    },
  ],
  ar: [
    {
      slug: "marhaban-bil-aalam",
      title: "مرحبًا بالعالم!",
      date: "2026-08-09",
      category: "عام",
      description: "أول تدوينة: عن ماذا تدور هذه المدونة.",
      sections: [
        {
          heading: "لماذا هذه المدونة",
          paragraphs: [
            "أنشأت هذه المدونة لأدوّن فيها ما أتعلمه أثناء العمل على الخدمات الخلفية والبنية التحتية وأنظمة البيانات. ملاحظات قصيرة وعملية أكثر منها مقالات طويلة.",
            "ستتبع المواضيع ما أعمل عليه فعليًا: كوبرنيتس والسجلات، والتكامل والنشر المستمر والأتمتة، وتكامل واجهات البرمجة، وأنظمة البيانات واسعة النطاق من دراستي في جامعة برلين التقنية.",
            "الأقسام الإنجليزية والألمانية والعربية مستقلة عن بعضها. لكل قسم تدويناته الخاصة وليست ترجمات.",
          ],
        },
      ],
    },
  ],
};

export function getPosts(locale: Locale): Post[] {
  return [...postsByLocale[locale]].sort((a, b) => b.date.localeCompare(a.date));
}

// URL segment: a compact date prefix plus the slug, so posts sort
// chronologically and the address still says what the post is about. The
// prefix is derived from `date` rather than stored, so the two cannot drift.
export function postPath(post: Post): string {
  return `${post.date.replaceAll("-", "")}-${post.slug}`;
}

export function getPostByPath(locale: Locale, path: string): Post | undefined {
  return postsByLocale[locale].find((post) => postPath(post) === path);
}

// Compact day and month for the blog index, where the year heading already
// supplies the year. Post pages show the full ISO date instead.
export function formatDayMonth(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeMeta[locale].intl, {
    day: "2-digit",
    month: "short",
  }).format(new Date(iso));
}

// Unicode-aware so Arabic and German headings produce usable anchors.
export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function readingMinutes(post: Post): number {
  const words = post.sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}




