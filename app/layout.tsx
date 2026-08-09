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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
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
