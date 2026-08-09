import Link from "next/link";

export const metadata = {
  title: "Impressum | Ghafek Alsaho",
  description: "Provider identification and contact details for this website.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Impressum (legal notice)</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-neutral-600 dark:text-neutral-400">
        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">Provider</h2>
          <p>Ghafek Alsaho</p>
          <p>Berlin, Germany</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">Contact</h2>
          <p>
            Email:{" "}
            <a className="underline" href="mailto:alsaho@ghafek.xyz">
              alsaho@ghafek.xyz
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            Nature of this website
          </h2>
          <p>
            This website is a private, non-commercial project. No goods or services are
            offered, no advertising is displayed and no revenue is generated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            Liability for content and links
          </h2>
          <p>
            The content of this website has been compiled with care. No guarantee is given for
            its accuracy, completeness or timeliness.
          </p>
          <p>
            This website contains links to external websites over whose content the provider
            has no influence. Responsibility for the content of linked pages always rests with
            their respective provider or operator.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            Data protection
          </h2>
          <p>
            Information on the processing of personal data can be found in the{" "}
            <Link className="underline" href="/datenschutz">
              privacy policy
            </Link>
            .
          </p>
        </section>
      </div>

      <p className="mt-10 text-sm">
        <Link className="underline" href="/">
          ← back to home
        </Link>
      </p>
    </main>
  );
}
