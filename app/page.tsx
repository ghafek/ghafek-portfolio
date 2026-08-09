import Link from "next/link";
import { formatDayMonth, formatYear, getPosts } from "./blog/posts";

export default function Home() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript/Node.js", "SQL", "Bash/Zsh", "Java", "HTML/CSS", "YAML", "JSON"],
    },
    {
      title: "Engineering",
      skills: ["Django", "REST APIs", "Git/GitLab CI/CD", "Docker", "Kubernetes", "Helm", "Bruno", "Postman"],
    },
    {
      title: "Platform & operations",
      skills: [
        "PostgreSQL",
        "OpenSearch",
        "Elasticsearch/Kibana",
        "Fluent Bit",
        "Vault",
        "OpenSSL/mTLS",
        "runbooks",
      ],
    },
    {
      title: "Service & automation",
      skills: [
        "Jira",
        "Confluence",
        "Atlassian Rovo agents",
        "Jira automation",
        "documentation-as-code",
      ],
    },
    {
      title: "Data systems",
      skills: [
        "Apache SystemDS (DML)",
        "relational algebra",
        "Star Schema Benchmark",
        "query performance analysis",
      ],
    },
    {
      title: "Coursework",
      skills: [
        "text mining",
        "LLM fine-tuning",
        "bias detection",
        "text anonymisation",
      ],
    },
    {
      title: "This site",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    },
  ];

  const projects = [
    {
      title: "Star Schema Benchmark for Apache SystemDS",
      description:
        "Co-developed the initial Star Schema Benchmark implementation for SystemDS with a project partner, contributing query scripts in the relational-algebra DML, the automated performance-run harnesses and the documentation. The 16-file integration commit landed on apache/systemds main. It grew out of the Large-scale Data Engineering project with the Big Data Engineering (DAMS) group at TU Berlin.",
      href: "https://github.com/apache/systemds/commit/20a7b67419e284ed908ededd19e80cd2713dca5a",
      linkText: "apache/systemds commit 20a7b674",
    },
    {
      title: "This site",
      description:
        "Portfolio and trilingual blog (English, German, Arabic, with right-to-left layout for Arabic). Next.js App Router, statically prerendered on Vercel, with a serverless view counter and comments backed by GitHub Discussions.",
      href: "https://github.com/ghafek/ghafek-portfolio",
      linkText: "github.com/ghafek/ghafek-portfolio",
    },
  ];

  const thesisParagraphs = [
    "Semiconductor wafers move through long, ordered sequences of process steps. In low-volume research production these routes vary widely, which makes later analysis hard: comparing two wafers is only meaningful if they went through comparable routes in the first place.",
    "I built an end-to-end pipeline that reconstructs each wafer's route from row-level event data, represents routes by short contiguous fragments, clusters them, and then challenges every resulting group against a stricter whole-route edit-distance test. Groups that survive are treated as candidate route families; wafers that sit near a boundary are surfaced as cases for expert review rather than silently reclassified.",
    "The emphasis throughout is interpretability and auditability: every acceptance decision is traceable, the validation is adversarial by design, and results are reported in a form that does not expose the underlying confidential data.",
  ];

  const experience = [
    {
      role: "IT Working Student — Technical Service & Automation",
      company: "Verimi GmbH",
      location: "Berlin, DE",
      period: "May 2025 – Sep 2026",
      details: [
        "Automated release-note generation from Jira and Confluence with a Node.js sync tool and GitLab CI, opening reviewable merge requests that keep publication under human approval.",
        "Implemented permission-controlled Django bulk workflows for Hydra OAuth2 client-secret rotation and service API-key updates, delivered end-to-end on UAT and production.",
        "Resolved two production incidents on a partner ticket integration: an expired authentication certificate, restored and validated in test and production, and a removed Jira API v2 search, replaced with a resilient v3 Enhanced JQL strategy.",
        "Investigated multi-system incidents by correlating Kubernetes logs, OpenSearch/Kibana data and PostgreSQL records, and troubleshot the Fluent Bit/Elasticsearch logging stack.",
        "Designed and validated a two-flow Atlassian Rovo/Jira triage automation with evidence-precedence rules and missing-data detection, and converted 31 fragmented knowledge sources into a governed Confluence package.",
        "Handled 70+ certificate renewal/generation requests across UAT and production, and authored an mTLS renewal and rollback runbook covering CSR signing and Kubernetes secret replacement.",
        "Rebuilt a partner API reference from Postman into a Bruno collection covering access, identification, signing and payment APIs, deployed to staging for review.",
      ],
    },
    {
      role: "IT Software Specialist",
      company: "VARTAN.GROUP",
      location: "Hamburg, DE",
      period: "Jun 2023 – Mar 2024",
      details: [
        "Integrated REST APIs connecting internal tooling with external services, streamlining service delivery.",
        "Built data pipelines and cleansing routines for reporting, and automated high-volume IT workflows with Python and shell scripting.",
      ],
    },
    {
      role: "IT Working Student",
      company: "Lovehoney Group",
      location: "Berlin, DE",
      period: "Aug 2021 – Mar 2023",
      details: [
        "Automated IT workflows and service-desk processes, and developed Python and PowerShell utilities underpinning HR and IT reporting.",
        "Administered Microsoft 365 and Freshservice, covering onboarding, licence governance and knowledge bases.",
      ],
    },
    {
      role: "Early Technical Roles",
      company: "Vartan Product Support · BurdaForward",
      location: "Hamburg, DE",
      period: "Jan 2016 – Sep 2017",
      details: [
        "Supported hardware rollouts and documentation at Vartan Product Support; managed programmatic campaigns and SSP/DSP bidding performance at BurdaForward.",
      ],
    },
  ];

  const education = [
    {
      qualification: "B.Sc. Computer Science",
      institution: "Technische Universität Berlin",
      location: "Berlin, DE",
      period: "2022 – present",
      note: null,
    },
    {
      qualification: "Apprenticeship: Computer Science Expert (Fachinformatiker Anwendungsentwicklung)",
      institution: "Hubert Burda Media",
      location: "Hamburg, DE",
      period: "Sep 2017 – Jul 2020",
      note: null,
    },
    {
      qualification: "Certified Statistician",
      institution: "Technical Institute of Statistics",
      location: "Damascus, Syria",
      period: "Sep 2011 – Jun 2014",
      note: "2 of 4 semesters completed",
    },
  ];

  const lookingFor = [
    "technical support / application support",
    "platform or DevOps support",
    "integration and API engineering",
    "automation engineering",
    "junior-to-mid backend with operations experience",
    "developer-documentation / DX roles",
  ];

  const muted = "text-neutral-600 dark:text-neutral-400";

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a className="hover:underline" href="#about">
          about
        </a>
        <a className="hover:underline" href="#projects">
          projects
        </a>
        <Link className="hover:underline" href="/blog">
          blog
        </Link>
        <a className="hover:underline" href="#thesis">
          thesis
        </a>
        <a className="hover:underline" href="#experience">
          experience
        </a>
        <a className="hover:underline" href="#education">
          education
        </a>
        <a className="hover:underline" href="#tech-stack">
          tech stack
        </a>
        <a className="hover:underline" href="#contact">
          contact
        </a>
      </nav>

      <main className="mt-16 space-y-16">
        <section id="about" className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight">Ghafek Alsaho</h1>
          <p className="leading-relaxed">
            Computer Science student at Technische Universität Berlin · Certified Computer
            Science Expert – Software Development
          </p>
          <p className="leading-relaxed">Berlin, Germany</p>
          <p className={`leading-relaxed ${muted}`}>
            I work on technical service and automation: API integrations, CI/CD pipelines,
            Kubernetes and logging infrastructure, certificate handling, and
            documentation-as-code. My studies and open-source work focus on large-scale data
            systems.
          </p>
          <p className={`leading-relaxed ${muted}`}>
            Spoken languages: German (C2) · English (C1) · Arabic (native)
          </p>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <dl className="space-y-6">
            {projects.map((project) => (
              <div key={project.title} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="font-semibold">{project.title}:</dt>
                <dd className={`space-y-2 leading-relaxed ${muted}`}>
                  <span className="block">{project.description}</span>
                  <a
                    className="block underline"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkText}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="blog" className="space-y-6">
          <h2 className="text-xl font-semibold">Blog</h2>
          <ul className="space-y-4">
            {getPosts("en").map((post) => (
              <li key={post.slug} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <span className={muted}>
                  {formatDayMonth(post.date, "en")} {formatYear(post.date, "en")}
                </span>
                <Link className="leading-relaxed underline" href={`/blog/en/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className={`text-sm ${muted}`}>
            <Link className="underline" href="/blog">
              all posts (EN / DE / AR) →
            </Link>
          </p>
        </section>

        <section id="thesis" className="space-y-4">
          <h2 className="text-xl font-semibold">Bachelor thesis</h2>
          <p className="font-semibold leading-relaxed">
            Automated Process Family Identification and Anomaly Detection in Semiconductor
            Manufacturing
          </p>
          <p className={`leading-relaxed ${muted}`}>
            Bachelor thesis with the Big Data Engineering (DAMS) group at TU Berlin, in
            cooperation with the Ferdinand-Braun-Institut (FBH). Currently under supervisor
            review.
          </p>
          {thesisParagraphs.map((paragraph) => (
            <p key={paragraph} className={`leading-relaxed ${muted}`}>
              {paragraph}
            </p>
          ))}
          <p className={`leading-relaxed ${muted}`}>
            Techniques: Python · SQLite · sequence mining · clustering · edit-distance
            validation
          </p>
        </section>

        <section id="experience" className="space-y-8">
          <h2 className="text-xl font-semibold">Work experience</h2>
          {experience.map((item) => (
            <div key={item.company} className="space-y-2">
              <h3 className="font-semibold leading-relaxed">{item.role}</h3>
              <p className={`text-sm ${muted}`}>
                {item.company} · {item.location} · {item.period}
              </p>
              <ul className={`list-disc space-y-1 pl-5 ${muted}`}>
                {item.details.map((detail) => (
                  <li key={detail} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="education" className="space-y-6">
          <h2 className="text-xl font-semibold">Education</h2>
          {education.map((item) => (
            <div key={item.qualification} className="space-y-1">
              <h3 className="font-semibold leading-relaxed">{item.qualification}</h3>
              <p className={`text-sm ${muted}`}>
                {item.institution} · {item.location} · {item.period}
                {item.note ? ` · ${item.note}` : ""}
              </p>
            </div>
          ))}
        </section>

        <section id="tech-stack" className="space-y-4">
          <h2 className="text-xl font-semibold">Tech stack</h2>
          <ul className="space-y-2">
            {skillGroups.map((group) => (
              <li key={group.title} className="leading-relaxed">
                <span className="font-semibold">{group.title}:</span>{" "}
                <span className={muted}>{group.skills.join(", ")}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="leading-relaxed">Available from October 2026.</p>
          <p className={`leading-relaxed ${muted}`}>
            Looking for roles in {lookingFor.join(", ")}.
          </p>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <a className="underline" href="mailto:alsaho@ghafek.xyz">
                alsaho@ghafek.xyz
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                className="underline"
                href="https://github.com/ghafek"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ghafek
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="underline"
                href="https://www.linkedin.com/in/ghafek"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ghafek
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-16 border-t border-neutral-300 pt-6 text-sm dark:border-neutral-700">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link className="underline" href="/impressum">
            Impressum
          </Link>
          <Link className="underline" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </footer>
    </div>
  );
}
