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
      "Diese Website wird bei der Vercel Inc., USA, gehostet. Beim Aufruf der Website verarbeitet Vercel technisch notwendige Daten, insbesondere die IP-Adresse der aufrufenden Geräte.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in einer sicheren, stabilen und effizienten Bereitstellung der Website. Die Verarbeitung erfolgt auf Grundlage der Datenschutz- und Vertragsbedingungen von Vercel. Soweit Vercel als Auftragsverarbeiter tätig wird und ein Vertrag zur Auftragsverarbeitung erforderlich und verfügbar ist, erfolgt die Verarbeitung auf dieser Grundlage.",
      "Da Vercel seinen Sitz in den USA hat, kann es zu einer Übermittlung personenbezogener Daten in ein Drittland kommen. Vercel Inc. ist nach dem EU-U.S. Data Privacy Framework zertifiziert; die Übermittlung erfolgt auf dieser Grundlage, ergänzend auf Grundlage der EU-Standardvertragsklauseln. Der Zertifizierungsstatus kann über die Liste unter dataprivacyframework.gov eingesehen werden.",
    ],
  },
  {
    heading: "3. Server-Logfiles",
    paragraphs: [
      "Beim Aufruf dieser Website werden automatisch Informationen übertragen und in Server-Logfiles verarbeitet: IP-Adresse, Datum und Uhrzeit der Anfrage, die konkret aufgerufene Seite, die übertragene Datenmenge, die zuvor besuchte Seite (Referrer) sowie Angaben zu Browser und Betriebssystem.",
      "Diese Daten dienen der Auslieferung der Website, der Systemsicherheit und der Fehleranalyse. Sie werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
      "Server-Logfiles werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist. Die konkrete Speicherdauer richtet sich nach den Voreinstellungen des Hosting-Anbieters. Eine darüber hinausgehende Speicherung oder Auswertung durch den Verantwortlichen findet nicht statt.",
    ],
  },
  {
    heading: "4. Cookies",
    paragraphs: [
      "Diese Website setzt keine eigenen Cookies und verwendet keine Cookies zu Analyse-, Marketing- oder Wiedererkennungszwecken. Beim bloßen Aufruf der Seiten werden keine Informationen auf Ihrem Endgerät gespeichert oder von dort ausgelesen.",
      "Nur wenn Sie die Kommentarfunktion durch Klick ausdrücklich laden, können durch giscus und GitHub Einträge im Browserspeicher angelegt und Cookies gesetzt werden, insbesondere wenn Sie bei GitHub angemeldet sind. Einzelheiten finden Sie in Abschnitt 8. Auf diese Verarbeitung hat der Verantwortliche keinen Einfluss.",
    ],
  },
  {
    heading: "5. Vercel Web Analytics",
    paragraphs: [
      "Diese Website nutzt Vercel Web Analytics zur Reichweitenmessung. Der Dienst arbeitet ohne Cookies und ohne geräteübergreifende Wiedererkennung.",
      "Verarbeitet werden dabei insbesondere die aufgerufene URL beziehungsweise der Pfad, die verweisende Seite (Referrer), gefilterte URL-Parameter, das Herkunftsland, Angaben zu Browser, Gerätetyp und Betriebssystem sowie Zeitstempel. Zur Unterscheidung von Besuchen bildet Vercel aus Anfragedaten einen Hashwert, der nach 24 Stunden verworfen wird. IP-Adressen werden nicht gespeichert.",
      "Es werden keine Profile über einzelne Besucherinnen und Besucher gebildet und keine Daten an Werbenetzwerke weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in einer datensparsamen statistischen Auswertung der Websitenutzung.",
    ],
  },
  {
    heading: "6. Vercel Speed Insights",
    paragraphs: [
      "Zur Messung der technischen Performance wird Vercel Speed Insights eingesetzt. Erfasst werden Messwerte zur Ladegeschwindigkeit und Darstellungsqualität (Core Web Vitals) sowie ergänzend die aufgerufene URL und Route, Angaben zur Verbindungsgeschwindigkeit, Browser, Gerätetyp und Betriebssystem, das Herkunftsland, Angaben zum auslösenden Seitenelement, Informationen zum eingesetzten SDK und Zeitstempel. Auch dieser Dienst arbeitet ohne Cookies und ohne Profilbildung; eine Zuordnung zu einzelnen Personen erfolgt nicht.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in der technischen Optimierung der Website.",
    ],
  },
  {
    heading: "7. Aufrufzähler für Blogbeiträge",
    paragraphs: [
      "Soweit auf Blogbeiträgen die Anzahl der Aufrufe angezeigt wird, wird ausschließlich eine Zahl pro Beitrag in einer Redis-Datenbank bei der Upstash, Inc. (USA) gespeichert. Es werden keine IP-Adressen, keine Kennungen und keine sonstigen personenbezogenen Daten gespeichert.",
      "Es werden keine Informationen auf Ihrem Endgerät gespeichert oder von dort ausgelesen. Gezählt werden Seitenaufrufe, nicht einzelne Personen; der angezeigte Wert ist daher nur ein Näherungswert.",
      "Der Zählerstand selbst enthält keine personenbezogenen Daten und wird dauerhaft gespeichert. Upstash, Inc. ist nach dem EU-U.S. Data Privacy Framework zertifiziert; soweit im Rahmen des Betriebs der Datenbank personenbezogene Daten in die USA übermittelt werden, erfolgt dies auf dieser Grundlage, ergänzend auf Grundlage der EU-Standardvertragsklauseln.",
      "Rechtsgrundlage für die Speicherung des Zählerstands ist Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    heading: "8. Kommentarfunktion (giscus / GitHub)",
    paragraphs: [
      "Soweit unter Blogbeiträgen die Kommentarfunktion giscus eingebunden ist, werden Kommentare nicht auf dieser Website, sondern als GitHub Discussions im zugehörigen öffentlichen Repository gespeichert. Anbieter ist die GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, ein Unternehmen der Microsoft Corporation.",
      "Die Kommentarfunktion wird nicht automatisch geladen. Unter dem Beitrag wird zunächst nur ein Hinweis mit einer Schaltfläche angezeigt. Erst wenn Sie diese Schaltfläche aktiv anklicken, wird das Skript von giscus.app nachgeladen und eine Verbindung zu giscus.app und GitHub aufgebaut. Dabei wird Ihre IP-Adresse an diese Anbieter übertragen.",
      "Nach dem Laden speichert giscus im lokalen Speicher (Local Storage) Ihres Browsers einen Eintrag zur Sitzungsverwaltung; nach einer Anmeldung bei GitHub wird dort zusätzlich eine Sitzungskennung abgelegt. Diese Speicherung erfolgt ausschließlich aufgrund Ihrer vorherigen Einwilligung nach § 25 Abs. 1 TDDDG. Sie können die Kommentarfunktion jederzeit ungenutzt lassen; ohne Klick werden keine Daten an giscus oder GitHub übertragen.",
      "Zum Verfassen eines Kommentars ist ein GitHub-Konto und eine Anmeldung bei GitHub erforderlich. Es gelten insoweit die Datenschutzbestimmungen von GitHub. Veröffentlichte Kommentare sind öffentlich einsehbar und mit dem GitHub-Benutzernamen verknüpft. Die Speicherdauer richtet sich nach den Vorgaben von GitHub; Kommentare bleiben grundsätzlich so lange gespeichert, bis sie gelöscht werden.",
      "GitHub, Inc. ist nach dem EU-U.S. Data Privacy Framework zertifiziert; die Übermittlung personenbezogener Daten in die USA erfolgt auf dieser Grundlage, ergänzend auf Grundlage der EU-Standardvertragsklauseln.",
      "Rechtsgrundlage für das Laden der Kommentarfunktion und die damit verbundene Speicherung im Browser ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die Kommentarfunktion nicht mehr laden und die von giscus gesetzten Einträge in den Browsereinstellungen löschen.",
      "Weitere Informationen finden sich in den Datenschutzbestimmungen von GitHub sowie in den Informationen des Dienstes giscus.",
    ],
  },
  {
    heading: "9. Schriftarten",
    paragraphs: [
      "Die verwendeten Schriftarten werden lokal von dieser Website ausgeliefert. Beim Aufruf der Seite wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern hergestellt.",
    ],
  },
  {
    heading: "10. Kontaktaufnahme per E-Mail",
    paragraphs: [
      "Diese Website enthält kein Kontaktformular. Bei einer Kontaktaufnahme per E-Mail werden die übermittelten Daten ausschließlich zur Bearbeitung der Anfrage verarbeitet und nach abschließender Bearbeitung gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      "Die E-Mail-Kommunikation über die Adresse alsaho@ghafek.xyz erfolgt über iCloud Mail. Anbieter ist die Apple Distribution International Ltd., Hollyhill Industrial Estate, Hollyhill, Cork, Irland. Dabei können personenbezogene Daten wie E-Mail-Adresse, Inhalt der Nachricht, technische Metadaten und Zeitpunkte der Kommunikation verarbeitet werden.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO beziehungsweise, bei Anbahnung eines Vertrags- oder Beschäftigungsverhältnisses, Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "11. Verschlüsselung",
    paragraphs: [
      "Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an der Adresszeile des Browsers (https).",
    ],
  },
  {
    heading: "12. Ihre Rechte",
    paragraphs: [
      "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie auf Datenübertragbarkeit (Art. 20 DSGVO).",
      "Zur Ausübung dieser Rechte genügt eine formlose E-Mail an alsaho@ghafek.xyz.",
      "Unabhängig davon steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, etwa bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit.",
    ],
  },
  {
    heading: "13. Widerspruchsrecht (Art. 21 DSGVO)",
    paragraphs: [
      "Wenn die Datenverarbeitung auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen diese Verarbeitung Widerspruch einzulegen.",
      "Legen Sie Widerspruch ein, werden die betroffenen Daten nicht mehr auf dieser Grundlage verarbeitet, es sei denn, es liegen zwingende schutzwürdige Gründe für die Verarbeitung vor, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
      "Ein Widerspruch kann formlos per E-Mail an alsaho@ghafek.xyz erklärt werden.",
    ],
  },
  {
    heading: "14. Automatisierte Entscheidungsfindung",
    paragraphs: [
      "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO findet auf dieser Website nicht statt.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <main
      lang="de"
      className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16"
    >
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
