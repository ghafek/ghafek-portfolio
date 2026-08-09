import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ghafek.xyz"),
  title: "Ghafek Alsaho | Portfolio",
  description:
    "Computer Science student at TU Berlin and working student in tech, focused on software engineering, automation, cloud systems, and AI/ML.",
  keywords: [
    "Ghafek Alsaho",
    "portfolio",
    "Computer Science",
    "TU Berlin",
    "software engineering",
    "cloud infrastructure",
    "automation",
    "AI/ML",
  ],
  openGraph: {
    title: "Ghafek Alsaho | Portfolio",
    description:
      "Computer Science student and software developer interested in backend systems, cloud deployments, automation, and AI/ML.",
    type: "website",
    url: "https://www.ghafek.xyz",
  },
  twitter: {
    card: "summary",
    title: "Ghafek Alsaho | Portfolio",
    description:
      "Computer Science student and software developer focused on practical systems and modern cloud-native tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
