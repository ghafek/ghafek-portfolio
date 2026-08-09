import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Ghafek Alsaho",
  description: "Datenschutzerklärung für diese Website.",
};

type Section = {
  heading: string;
  paragraphs: string[];
};

const sections: Section[] = [
  {
    heading: "1. Verantwortlicher",
    paragraphs: [
      "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
      "Ghafek Alsaho, Berlin, Deutschland. E-Mail: alsaho@ghafek.xyz",
      "Diese Website ist ein privates, nicht kommerzielles Projekt. Es werden keine Waren oder Dienstleistungen angeboten und keine Werbung geschaltet.",
    ],
  },
  {
    heading: "2. Hosting",
    paragraphs: [
      "Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel technisch notwendige Daten, insbesondere die IP-Adresse der aufrufenden Geräte.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in einer sicheren, stabilen und effizienten Bereitstellung der Website. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.",
      "Da Vercel seinen Sitz in den USA hat, kann es zu einer Übermittlung personenbezogener Daten in ein Drittland kommen. Diese erfolgt auf Grundlage der EU-Standardvertragsklauseln sowie, soweit einschlägig, einer Zertifizierung nach dem EU-U.S. Data Privacy Framework.",
    ],
  },
  {
    heading: "3. Server-Logfiles",
    paragraphs: [
      "Beim Aufruf dieser Website werden automatisch Informationen übertragen und in Server-Logfiles verarbeitet: IP-Adresse, Datum und Uhrzeit der Anfrage, die konkret aufgerufene Seite, die übertragene Datenmenge, die zuvor besuchte Seite (Referrer) sowie Angaben zu Browser und Betriebssystem.",
      "Diese Daten dienen der Auslieferung der Website, der Systemsicherheit und der Fehleranalyse. Sie werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    heading: "4. Vercel Web Analytics",
    paragraphs: [
      "Diese Website nutzt Vercel Web Analytics zur Reichweitenmessung. Der Dienst arbeitet ohne Cookies und ohne geräteübergreifende Wiedererkennung. Es werden aggregierte Kennzahlen wie Seitenaufrufe, Referrer und ungefähre Herkunftsregion ausgewertet.",
      "Es werden keine Profile über einzelne Besucherinnen und Besucher gebildet und keine Daten an Werbenetzwerke weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in einer datensparsamen statistischen Auswertung der Websitenutzung.",
    ],
  },
  {
    heading: "5. Vercel Speed Insights",
    paragraphs: [
      "Zur Messung der technischen Performance wird Vercel Speed Insights eingesetzt. Erfasst werden Messwerte zur Ladegeschwindigkeit und Darstellungsqualität (Core Web Vitals). Auch dieser Dienst arbeitet ohne Cookies und ohne Profilbildung.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in der technischen Optimierung der Website.",
    ],
  },
  {
    heading: "6. Aufrufzähler für Blogbeiträge",
    paragraphs: [
      "Auf Blogbeiträgen wird die Anzahl der Aufrufe angezeigt. Gespeichert wird ausschließlich eine Zahl pro Beitrag in einer Redis-Datenbank bei der Upstash, Inc. (USA). Es werden keine IP-Adressen, keine Kennungen und keine sonstigen personenbezogenen Daten gespeichert.",
      "Um Mehrfachzählungen zu vermeiden, wird im Session Storage des verwendeten Browsers ein technischer Merker gesetzt. Dieser enthält keine personenbezogenen Daten, verlässt das Endgerät nicht und wird beim Schließen des Browser-Tabs automatisch gelöscht.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    heading: "7. Kommentarfunktion (giscus / GitHub)",
    paragraphs: [
      "Unter Blogbeiträgen ist die Kommentarfunktion giscus eingebunden. Kommentare werden nicht auf dieser Website, sondern als GitHub Discussions im zugehörigen öffentlichen Repository gespeichert. Anbieter ist die GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, ein Unternehmen der Microsoft Corporation.",
      "Beim Laden der Kommentarfunktion baut der Browser eine Verbindung zu giscus.app und zu GitHub auf. Dabei wird die IP-Adresse an diese Anbieter übertragen. Das Laden erfolgt verzögert, sobald der Kommentarbereich in Sichtweite kommt.",
      "Zum Verfassen eines Kommentars ist ein GitHub-Konto und eine Anmeldung bei GitHub erforderlich. Es gelten insoweit die Datenschutzbestimmungen von GitHub. Veröffentlichte Kommentare sind öffentlich einsehbar und mit dem GitHub-Benutzernamen verknüpft.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in der Möglichkeit, Rückmeldungen zu Beiträgen zu erhalten, ohne selbst personenbezogene Daten zu speichern.",
    ],
  },
  {
    heading: "8. Schriftarten",
    paragraphs: [
      "Die verwendeten Schriftarten werden lokal von dieser Website ausgeliefert. Beim Aufruf der Seite wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern hergestellt.",
    ],
  },
  {
    heading: "9. Kontaktaufnahme per E-Mail",
    paragraphs: [
      "Diese Website enthält kein Kontaktformular. Bei einer Kontaktaufnahme per E-Mail werden die übermittelten Daten ausschließlich zur Bearbeitung der Anfrage verarbeitet und nach abschließender Bearbeitung gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO beziehungsweise, bei Anbahnung eines Vertrags- oder Beschäftigungsverhältnisses, Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "10. Verschlüsselung",
    paragraphs: [
      "Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an der Adresszeile des Browsers (https).",
    ],
  },
  {
    heading: "11. Ihre Rechte",
    paragraphs: [
      "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht, einer Verarbeitung auf Grundlage berechtigter Interessen zu widersprechen (Art. 21 DSGVO).",
      "Zur Ausübung dieser Rechte genügt eine formlose E-Mail an alsaho@ghafek.xyz.",
      "Unabhängig davon steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, etwa bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="font-semibold leading-relaxed">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-neutral-600 dark:text-neutral-400"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
        Stand: August 2026
      </p>

      <p className="mt-10 text-sm">
        <Link className="underline" href="/">
          ← back to home
        </Link>
      </p>
    </main>
  );
}
