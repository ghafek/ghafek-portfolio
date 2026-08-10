import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ghafek.xyz"),
  title: "Ghafek Alsaho",
  description:
    "Computer Science student at Technische Universität Berlin. Technical service and automation, platform operations, API integration, and large-scale data systems.",
  keywords: [
    "Ghafek Alsaho",
    "portfolio",
    "Computer Science",
    "TU Berlin",
    "automation",
    "platform operations",
    "API integration",
    "Apache SystemDS",
  ],
  openGraph: {
    title: "Ghafek Alsaho",
    description:
      "Computer Science student at TU Berlin working on technical service and automation, platform operations, API integration, and large-scale data systems.",
    type: "website",
    url: "https://www.ghafek.xyz",
  },
  twitter: {
    card: "summary",
    title: "Ghafek Alsaho",
    description:
      "Computer Science student at TU Berlin working on technical service and automation, platform operations, and large-scale data systems.",
  },
};

// Runs before first paint: applies the stored choice, or the system setting
// when there is none, so the page never flashes the wrong theme. Kept inline
// and dependency-free because anything async would paint first.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
