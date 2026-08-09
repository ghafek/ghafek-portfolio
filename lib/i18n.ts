export const locales = ["en", "de", "ar"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeMeta: Record<
  Locale,
  { label: string; htmlLang: string; dir: "ltr" | "rtl"; intl: string }
> = {
  en: { label: "EN", htmlLang: "en", dir: "ltr", intl: "en-US" },
  de: { label: "DE", htmlLang: "de", dir: "ltr", intl: "de-DE" },
  ar: { label: "عربي", htmlLang: "ar", dir: "rtl", intl: "ar" },
};

export const ui: Record<
  Locale,
  {
    tagline: string;
    intro: string;
    posts: string;
    portfolio: string;
    allPosts: string;
    author: string;
    authorName: string;
    date: string;
    category: string;
    readingTime: string;
    minRead: (minutes: number) => string;
    views: string;
    contents: string;
    comments: string;
  }
> = {
  en: {
    tagline: "Notes about backend engineering, infrastructure, and studies.",
    intro:
      "A simple space for notes and write-ups. Each language section of this blog is independent — posts are not translations of each other.",
    posts: "posts",
    portfolio: "portfolio",
    allPosts: "← all posts",
    author: "author",
    authorName: "Ghafek Alsaho",
    date: "date",
    category: "category",
    readingTime: "reading time",
    minRead: (minutes) => `${minutes} min read`,
    views: "views",
    contents: "Contents",
    comments: "Comments",
  },
  de: {
    tagline: "Notizen zu Backend-Entwicklung, Infrastruktur und Studium.",
    intro:
      "Ein einfacher Ort für Notizen und Beiträge. Jeder Sprachbereich dieses Blogs ist unabhängig — die Beiträge sind keine Übersetzungen voneinander.",
    posts: "Beiträge",
    portfolio: "Portfolio",
    allPosts: "← alle Beiträge",
    author: "Autor",
    authorName: "Ghafek Alsaho",
    date: "Datum",
    category: "Kategorie",
    readingTime: "Lesezeit",
    minRead: (minutes) => `${minutes} Min. Lesezeit`,
    views: "Aufrufe",
    contents: "Inhalt",
    comments: "Kommentare",
  },
  ar: {
    tagline: "ملاحظات عن هندسة البرمجيات والبنية التحتية والدراسة.",
    intro:
      "مساحة بسيطة للملاحظات والمقالات. كل قسم لغوي في هذه المدونة مستقل بذاته — التدوينات ليست ترجمات لبعضها البعض.",
    posts: "التدوينات",
    portfolio: "الموقع الشخصي",
    allPosts: "→ كل التدوينات",
    author: "الكاتب",
    authorName: "Ghafek Alsaho",
    date: "التاريخ",
    category: "التصنيف",
    readingTime: "وقت القراءة",
    minRead: (minutes) => `${minutes} دقائق قراءة`,
    views: "المشاهدات",
    contents: "المحتويات",
    comments: "التعليقات",
  },
};
