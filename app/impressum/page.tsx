import Link from "next/link";

export const metadata = {
  title: "Impressum | Ghafek Alsaho",
  description: "Anbieterkennzeichnung und Kontakt für diese Website.",
};

export default function ImpressumPage() {
  return (
    <main
      lang="de"
      className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16"
    >
      <h1 className="text-2xl font-semibold tracking-tight">Impressum</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-neutral-600 dark:text-neutral-400">
        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            Anbieter
          </h2>
          <p>Ghafek Alsaho</p>
          <p>Berlin, Deutschland</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a className="underline" href="mailto:alsaho@ghafek.xyz">
              alsaho@ghafek.xyz
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            Art der Website
          </h2>
          <p>
            Diese Website ist ein privates, nicht kommerzielles Projekt. Es werden keine
            Waren oder Dienstleistungen angeboten, keine Werbung geschaltet und keine
            Einnahmen erzielt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            Haftung für Inhalte und Links
          </h2>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte wird keine Gewähr übernommen.
          </p>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein
            Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber verantwortlich.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            Datenschutz
          </h2>
          <p>
            Informationen zur Verarbeitung personenbezogener Daten finden Sie in der{" "}
            <Link className="underline" href="/datenschutz">
              Datenschutzerklärung
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
