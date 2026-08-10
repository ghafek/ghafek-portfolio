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
    blogTitle: string;
    commentsNotice: string;
    commentsLoad: string;
    commentsUnload: string;
    commentsGitHub: string;
    commentsPrivacy: string;
    themeToggle: string;
    legalNotice: string;
    privacyPolicy: string;
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
    blogTitle: "Blog",
    commentsNotice:
      "Comments are provided by giscus and stored as GitHub Discussions. Loading them contacts giscus.app and GitHub, which transmits your IP address to those services and may store data in your browser. Nothing is loaded until you choose to, and you can withdraw your consent at any time using the button that replaces this one.",
    commentsLoad: "Load comments",
    commentsUnload: "Unload comments and withdraw consent",
    commentsGitHub: "or open the discussions on GitHub",
    commentsPrivacy: "privacy policy",
    themeToggle: "Switch between light and dark theme",
    legalNotice: "Legal notice",
    privacyPolicy: "Privacy policy",
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
    blogTitle: "Blog",
    commentsNotice:
      "Die Kommentare werden über giscus bereitgestellt und als GitHub Discussions gespeichert. Beim Laden wird eine Verbindung zu giscus.app und GitHub hergestellt; dabei wird Ihre IP-Adresse an diese Dienste übertragen und es können Daten in Ihrem Browser gespeichert werden. Vorher wird nichts geladen. Sie können Ihre Einwilligung jederzeit über die Schaltfläche widerrufen, die anschließend an dieser Stelle erscheint.",
    commentsLoad: "Kommentare laden",
    commentsUnload: "Kommentare entladen und Einwilligung widerrufen",
    commentsGitHub: "oder die Diskussionen auf GitHub öffnen",
    commentsPrivacy: "Datenschutzerklärung",
    themeToggle: "Zwischen hellem und dunklem Design wechseln",
    legalNotice: "Impressum",
    privacyPolicy: "Datenschutz",
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
    blogTitle: "المدونة",
    commentsNotice:
      "يتم توفير التعليقات عبر giscus وتُحفظ في GitHub Discussions. عند التحميل يتم الاتصال بـ giscus.app وGitHub، ويُرسل عنوان IP الخاص بك إلى هاتين الخدمتين، وقد تُخزَّن بيانات في متصفحك. لا يتم تحميل أي شيء قبل ذلك، ويمكنك سحب موافقتك في أي وقت عبر الزر الذي يظهر مكان هذا الزر بعد التحميل.",
    commentsLoad: "تحميل التعليقات",
    commentsUnload: "إلغاء تحميل التعليقات وسحب الموافقة",
    commentsGitHub: "أو افتح النقاشات على GitHub",
    commentsPrivacy: "سياسة الخصوصية",
    themeToggle: "التبديل بين الوضع الفاتح والداكن",
    legalNotice: "بيان قانوني",
    privacyPolicy: "سياسة الخصوصية",
  },
};
