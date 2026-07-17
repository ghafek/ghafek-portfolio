import Link from "next/link";

export const metadata = {
  title: "Impressum | Ghafek Alsaho",
  description: "Impressum placeholder for the portfolio website.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Impressum</h1>
      <p className="mt-6 leading-relaxed">
        Impressum content to be completed before publication.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        Please add the legally required publisher information before going live.
      </p>
      <p className="mt-10 text-sm">
        <Link className="underline" href="/">
          ← back to home
        </Link>
      </p>
    </main>
  );
}
