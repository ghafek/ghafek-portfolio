import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Ghafek Alsaho",
  description: "Privacy policy placeholder for the portfolio website.",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Datenschutz</h1>
      <p className="mt-6 leading-relaxed">
        Privacy policy content to be completed, especially for analytics and hosting
        information.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        Document the use of Vercel Analytics, Speed Insights, hosting, the anonymous view
        counter (Upstash Redis, aggregate counts only, no personal data), and any contact
        form or external links.
      </p>
      <p className="mt-10 text-sm">
        <Link className="underline" href="/">
          ← back to home
        </Link>
      </p>
    </main>
  );
}
