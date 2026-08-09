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
      slug: "sample-post-infrastructure",
      title: "Sample post: infrastructure notes (dummy)",
      date: "2026-07-01",
      category: "infrastructure",
      description:
        "Dummy English post to exercise the new per-language blog structure.",
      sections: [
        {
          heading: "About this post",
          paragraphs: [
            "This is dummy content for the new blog structure. It exists only to test the layout, metadata, table of contents, view counter, and comments.",
            "It will be replaced by a real post before anything goes live.",
          ],
        },
        {
          heading: "What goes here later",
          paragraphs: [
            "Real write-ups about backend engineering, Kubernetes, CI/CD, and automation.",
          ],
        },
      ],
    },
    {
      slug: "sample-post-hello",
      title: "Sample post: hello world (dummy)",
      date: "2025-11-15",
      category: "general",
      description: "Older dummy English post to exercise year grouping on the index.",
      sections: [
        {
          heading: "Why this exists",
          paragraphs: [
            "A second dummy post with an older date, so the blog index can demonstrate grouping posts by year.",
          ],
        },
      ],
    },
  ],
  de: [
    {
      slug: "beispielbeitrag-backend",
      title: "Beispielbeitrag: Backend-Notizen (Dummy)",
      date: "2026-06-20",
      category: "backend",
      description:
        "Deutscher Dummy-Beitrag zum Testen der neuen mehrsprachigen Blogstruktur.",
      sections: [
        {
          heading: "Über diesen Beitrag",
          paragraphs: [
            "Dies ist Platzhalterinhalt für die neue Blogstruktur. Er testet Layout, Metadaten, Inhaltsverzeichnis, Aufrufzähler und Kommentare.",
            "Er wird vor der Veröffentlichung durch einen echten Beitrag ersetzt.",
          ],
        },
        {
          heading: "Was später hierher kommt",
          paragraphs: [
            "Echte Beiträge über Backend-Entwicklung, Infrastruktur und Automatisierung — unabhängig vom englischen Blogbereich.",
          ],
        },
      ],
    },
    {
      slug: "beispielbeitrag-hallo",
      title: "Beispielbeitrag: Hallo Welt (Dummy)",
      date: "2025-10-05",
      category: "allgemein",
      description: "Älterer deutscher Dummy-Beitrag für die Jahresgruppierung.",
      sections: [
        {
          heading: "Warum es diesen Beitrag gibt",
          paragraphs: [
            "Ein zweiter Dummy-Beitrag mit älterem Datum, damit die Gruppierung nach Jahren sichtbar wird.",
          ],
        },
      ],
    },
  ],
  ar: [
    {
      slug: "tadwina-tajribiya-bunya",
      title: "تدوينة تجريبية: ملاحظات عن البنية التحتية (محتوى مؤقت)",
      date: "2026-05-10",
      category: "بنية تحتية",
      description: "تدوينة عربية تجريبية لاختبار هيكل المدونة الجديد متعدد اللغات.",
      sections: [
        {
          heading: "عن هذه التدوينة",
          paragraphs: [
            "هذا محتوى تجريبي مؤقت لاختبار هيكل المدونة الجديد: التنسيق، والبيانات الوصفية، وجدول المحتويات، وعداد المشاهدات، والتعليقات.",
            "سيتم استبداله بتدوينة حقيقية قبل النشر.",
          ],
        },
        {
          heading: "ماذا سيأتي لاحقًا",
          paragraphs: [
            "تدوينات حقيقية عن هندسة البرمجيات والبنية التحتية — مستقلة عن القسمين الإنجليزي والألماني.",
          ],
        },
      ],
    },
    {
      slug: "tadwina-tajribiya-marhaba",
      title: "تدوينة تجريبية: مرحبًا بالعالم (محتوى مؤقت)",
      date: "2025-09-01",
      category: "عام",
      description: "تدوينة عربية تجريبية أقدم لاختبار التجميع حسب السنة.",
      sections: [
        {
          heading: "لماذا هذه التدوينة",
          paragraphs: [
            "تدوينة تجريبية ثانية بتاريخ أقدم حتى يظهر تجميع التدوينات حسب السنة في صفحة الفهرس.",
          ],
        },
      ],
    },
  ],
};

export function getPosts(locale: Locale): Post[] {
  return [...postsByLocale[locale]].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string): Post | undefined {
  return postsByLocale[locale].find((post) => post.slug === slug);
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

export function formatDayMonth(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeMeta[locale].intl, {
    day: "2-digit",
    month: "short",
  }).format(new Date(iso));
}

export function formatFullDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeMeta[locale].intl, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export function formatYear(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeMeta[locale].intl, { year: "numeric" }).format(
    new Date(iso),
  );
}

export function yearKey(iso: string): string {
  return iso.slice(0, 4);
}
