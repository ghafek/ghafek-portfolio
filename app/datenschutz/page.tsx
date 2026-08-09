import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Ghafek Alsaho",
  description: "Privacy policy for this website.",
};

type Section = {
  heading: string;
  paragraphs: string[];
};

const sections: Section[] = [
  {
    heading: "1. Controller",
    paragraphs: [
      "The controller for the processing of personal data on this website is:",
      "Ghafek Alsaho, Berlin, Germany. Email: alsaho@ghafek.xyz",
      "This website is a private, non-commercial project. No goods or services are offered and no advertising is displayed.",
    ],
  },
  {
    heading: "2. Hosting",
    paragraphs: [
      "This website is hosted by Vercel Inc., USA. When the site is accessed, Vercel processes technically necessary data, in particular the IP address of the requesting device.",
      "The legal basis is Art. 6(1)(f) GDPR. The legitimate interest lies in providing the website securely, reliably and efficiently. Processing takes place on the basis of Vercel's privacy and contractual terms. Insofar as Vercel acts as a processor and a data processing agreement is required and available, processing takes place on that basis.",
      "As Vercel is based in the USA, personal data may be transferred to a third country. Vercel Inc. is certified under the EU-U.S. Data Privacy Framework; transfers take place on that basis, supplemented by the EU Standard Contractual Clauses. The current certification status can be checked in the list at dataprivacyframework.gov.",
    ],
  },
  {
    heading: "3. Server log files",
    paragraphs: [
      "When this website is accessed, information is automatically transmitted and processed in server log files: IP address, date and time of the request, the specific page requested, the volume of data transferred, the previously visited page (referrer), and details of the browser and operating system.",
      "This data serves to deliver the website, maintain system security and analyse errors. It is not combined with other data sources. The legal basis is Art. 6(1)(f) GDPR.",
      "Server log files are retained only for as long as necessary for the purposes stated. The specific retention period follows the hosting provider's default settings. No storage or evaluation beyond this is carried out by the controller.",
    ],
  },
  {
    heading: "4. Cookies",
    paragraphs: [
      "This website sets no cookies of its own and uses no cookies for analytics, marketing or recognition purposes. Simply visiting the pages neither stores information on your device nor reads information from it.",
      "Only if you explicitly load the comment function by clicking may giscus and GitHub create entries in your browser storage and set cookies, in particular if you are signed in to GitHub. Details are set out in section 8. The controller has no influence over that processing.",
    ],
  },
  {
    heading: "5. Vercel Web Analytics",
    paragraphs: [
      "This website uses Vercel Web Analytics to measure reach. The service works without cookies and without cross-device recognition.",
      "The data processed includes in particular the URL or path requested, the referring page, filtered URL parameters, the country of origin, information about browser, device type and operating system, and timestamps. To distinguish visits, Vercel derives a hash value from request data which is discarded after 24 hours. IP addresses are not stored.",
      "No profiles of individual visitors are created and no data is passed to advertising networks. The legal basis is Art. 6(1)(f) GDPR; the legitimate interest lies in a data-minimising statistical evaluation of how the website is used.",
    ],
  },
  {
    heading: "6. Vercel Speed Insights",
    paragraphs: [
      "Vercel Speed Insights is used to measure technical performance. It records metrics on loading speed and rendering quality (Core Web Vitals), together with the URL and route requested, information on connection speed, browser, device type and operating system, the country of origin, information on the page element that triggered the measurement, information about the SDK used, and timestamps. This service also works without cookies and without profiling; no attribution to individual persons takes place.",
      "The legal basis is Art. 6(1)(f) GDPR; the legitimate interest lies in the technical optimisation of the website.",
    ],
  },
  {
    heading: "7. View counter for blog posts",
    paragraphs: [
      "Where a view count is displayed on blog posts, only a single number per post is stored in a Redis database operated by Upstash, Inc. (USA). No IP addresses, no identifiers and no other personal data are stored.",
      "No information is stored on your device or read from it. Page loads are counted rather than individual people, so the figure shown is only an approximation.",
      "The counter value itself contains no personal data and is stored permanently. Upstash, Inc. is certified under the EU-U.S. Data Privacy Framework; insofar as personal data is transferred to the USA in operating the database, this takes place on that basis, supplemented by the EU Standard Contractual Clauses.",
      "The legal basis for storing the counter value is Art. 6(1)(f) GDPR.",
    ],
  },
  {
    heading: "8. Comment function (giscus / GitHub)",
    paragraphs: [
      "Where the giscus comment function is embedded below blog posts, comments are not stored on this website but as GitHub Discussions in the associated public repository. The provider is GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, a company of Microsoft Corporation.",
      "The comment function is not loaded automatically. Initially only a notice and a button are shown below the post. The script from giscus.app is loaded, and a connection to giscus.app and GitHub established, only once you actively click that button. Your IP address is transmitted to those providers in the process.",
      "After loading, giscus stores an entry for session management in your browser's local storage; once you sign in to GitHub, a session identifier is stored there as well. This storage takes place solely on the basis of your prior consent under Sec. 25(1) TDDDG. You may leave the comment function unused at any time; without a click, no data is transmitted to giscus or GitHub.",
      "A GitHub account and sign-in are required in order to post a comment. GitHub's privacy terms apply in that respect. Published comments are publicly visible and linked to the GitHub username. Retention is governed by GitHub's provisions; comments generally remain stored until they are deleted.",
      "GitHub, Inc. is certified under the EU-U.S. Data Privacy Framework; transfers of personal data to the USA take place on that basis, supplemented by the EU Standard Contractual Clauses.",
      "The legal basis for loading the comment function, and for the associated storage in your browser, is your consent under Art. 6(1)(a) GDPR in conjunction with Sec. 25(1) TDDDG. You may withdraw that consent at any time with effect for the future by no longer loading the comment function and deleting the entries set by giscus in your browser settings.",
      "Further information is available in GitHub's privacy statement and in the information published by the giscus project.",
    ],
  },
  {
    heading: "9. Fonts",
    paragraphs: [
      "The fonts used are served locally by this website. No connection to servers operated by Google or any other font provider is established when a page is loaded.",
    ],
  },
  {
    heading: "10. Contact by email",
    paragraphs: [
      "This website contains no contact form. If you make contact by email, the data you send is processed solely in order to handle your enquiry and is deleted once it has been dealt with, unless statutory retention obligations apply.",
      "Email communication via the address alsaho@ghafek.xyz takes place through iCloud Mail. The provider is Apple Distribution International Ltd., Hollyhill Industrial Estate, Hollyhill, Cork, Ireland. Personal data such as the email address, the content of the message, technical metadata and the timing of the communication may be processed in this context.",
      "The legal basis is Art. 6(1)(f) GDPR or, where a contractual or employment relationship is being initiated, Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "11. Encryption",
    paragraphs: [
      "This website uses TLS encryption for security reasons. You can recognise an encrypted connection by the browser address bar (https).",
    ],
  },
  {
    heading: "12. Your rights",
    paragraphs: [
      "You have the right of access (Art. 15 GDPR), to rectification (Art. 16 GDPR), to erasure (Art. 17 GDPR), to restriction of processing (Art. 18 GDPR) and to data portability (Art. 20 GDPR).",
      "An informal email to alsaho@ghafek.xyz is enough to exercise these rights.",
      "Independently of this, you have the right to lodge a complaint with a data protection supervisory authority, for example the Berlin Commissioner for Data Protection and Freedom of Information.",
    ],
  },
  {
    heading: "13. Right to object (Art. 21 GDPR)",
    paragraphs: [
      "Where processing is based on legitimate interests under Art. 6(1)(f) GDPR, you have the right to object to that processing at any time on grounds relating to your particular situation.",
      "If you object, the data concerned will no longer be processed on that basis unless there are compelling legitimate grounds for the processing which override your interests, rights and freedoms, or unless the processing serves to establish, exercise or defend legal claims.",
      "An objection can be raised informally by email to alsaho@ghafek.xyz.",
    ],
  },
  {
    heading: "14. Automated decision-making",
    paragraphs: [
      "No automated decision-making, including profiling, within the meaning of Art. 22 GDPR takes place on this website.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Datenschutz (privacy policy)</h1>

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
        Last updated: August 2026
      </p>

      <p className="mt-10 text-sm">
        <Link className="underline" href="/">
          ← back to home
        </Link>
      </p>
    </main>
  );
}
