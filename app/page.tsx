export default function Home() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python", "TypeScript/JavaScript", "Bash", "SQL"],
    },
    {
      title: "Web/backend",
      skills: ["Next.js", "React", "FastAPI", "REST APIs"],
    },
    {
      title: "Infrastructure/devops",
      skills: ["Docker", "Kubernetes", "Helm", "GitHub/GitLab CI/CD"],
    },
    {
      title: "Data/ML",
      skills: ["pandas", "evaluation scripts", "NLP/ML basics", "SystemDS coursework"],
    },
    {
      title: "Tools",
      skills: ["Git", "Linux/macOS", "VS Code", "JetBrains tools"],
    },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      label: "Coming soon",
      description:
        "The current portfolio homepage with a clean, responsive layout and room for future project details.",
    },
    {
      title: "Bachelor Thesis Project",
      label: "Details soon",
      description:
        "A concise research project card for the semiconductor manufacturing thesis work and related analysis.",
    },
    {
      title: "Backend / Automation Projects",
      label: "Coming soon",
      description:
        "Placeholder space for backend services, automation tooling, and infrastructure support projects.",
    },
    {
      title: "Data / ML Coursework Projects",
      label: "Details soon",
      description:
        "Placeholder space for coursework, experiments, and small data-driven or ML-focused projects.",
    },
  ];

  const thesisHighlights = [
    "Bachelor thesis at TU Berlin in cooperation with FBH Berlin.",
    "Focus on automated process-family identification and anomaly detection.",
    "Semiconductor manufacturing data and data-driven analysis.",
    "Concise skeleton only; final findings and results can be added later.",
  ];

  const experience = [
    {
      company: "Verimi GmbH",
      role: "IT / working student context",
      details: [
        "Backend and infrastructure-related work.",
        "Python/FastAPI, Kubernetes, CI/CD, logging/observability, automation, and deployment support.",
      ],
    },
    {
      company: "VARTAN.GROUP",
      role: "Software / IT role",
      details: [
        "APIs and data pipelines.",
        "Python and scripting for internal tooling and workflows.",
      ],
    },
    {
      company: "Lovehoney Group",
      role: "IT working student",
      details: [
        "Automation and Microsoft 365 support tasks.",
        "Support tooling, Python, and PowerShell for day-to-day operations.",
      ],
    },
  ];

  const legalNotes = [
    "Impressum content to be completed before publication.",
    "Privacy policy content to be completed, especially for analytics and hosting information.",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6f8fb_0%,_#eef2ff_35%,_#f8fafc_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_#111827_0%,_#0f172a_45%,_#020617_100%)] dark:text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-10 lg:px-16">
        <header className="sticky top-4 z-10 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/55">
          <nav className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <p className="font-semibold tracking-wide">Ghafek Alsaho</p>
            <div className="flex flex-wrap items-center gap-3 text-slate-700 dark:text-slate-300">
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#thesis">
                Thesis
              </a>
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#tech-stack">
                Tech stack
              </a>
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="space-y-24 pb-16 pt-14 sm:pt-20">
          <section className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-slate-300/80 bg-white/70 px-4 py-1 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-300">
                Computer Science student at Technische Universität Berlin
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Ghafek Alsaho
              </h1>
              <p className="text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300">
                Backend engineering, automation, cloud infrastructure, and software engineering
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I build practical software systems and work across data systems, machine learning,
                and infrastructure-focused development in Berlin and beyond.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:shadow-slate-100/15 dark:hover:bg-white"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Contact
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/55">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Overview
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>Location: Berlin, Germany</li>
                <li>Focus: backend, automation, cloud/infrastructure, data systems, ML</li>
                <li>GitHub: github.com/ghafek</li>
                <li>LinkedIn: linkedin.com/in/ghafek</li>
              </ul>
            </aside>
          </section>

          <section id="about" className="scroll-mt-24 space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
            <p className="max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
              I am Ghafek Alsaho, a Computer Science student at Technische Universität Berlin
              based in Germany/Berlin. My work and studies focus on backend engineering,
              automation, cloud and infrastructure, data systems, machine learning, and software
              engineering.
            </p>
          </section>

          <section id="projects" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-slate-300/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-600 dark:text-slate-300">
                      {project.label}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="thesis" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Bachelor thesis / research</h2>
            <article className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Automated Process Family Identification and Anomaly Detection in Semiconductor
                Manufacturing
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 dark:text-slate-300">
                Bachelor thesis at TU Berlin in cooperation with FBH Berlin. This section is a
                concise skeleton for process-family identification, anomaly detection,
                semiconductor manufacturing data, and data-driven analysis.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                {thesisHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-200/80 bg-white/70 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section id="experience" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Work experience</h2>
            <div className="grid gap-5 lg:grid-cols-3">
              {experience.map((item) => (
                <article
                  key={item.company}
                  className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="rounded-xl bg-slate-50/80 px-4 py-3 dark:bg-slate-950/30"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="tech-stack" className="scroll-mt-24 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tech stack</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-slate-300/80 bg-slate-100/80 px-3 py-1 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="scroll-mt-24 space-y-6 rounded-2xl border border-slate-200/80 bg-white/75 p-8 dark:border-slate-700 dark:bg-slate-900/60"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
            <p className="text-slate-700 dark:text-slate-300">
              Open to internships, student roles, and software engineering collaborations.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="mailto:alsaho@ghafek.xyz"
                className="rounded-xl border border-slate-300 bg-white p-4 text-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900/80 dark:hover:bg-slate-800"
              >
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">alsaho@ghafek.xyz</p>
              </a>
              <a
                href="https://github.com/ghafek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 bg-white p-4 text-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900/80 dark:hover:bg-slate-800"
              >
                <p className="font-semibold">GitHub</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">github.com/ghafek</p>
              </a>
              <a
                href="https://www.linkedin.com/in/ghafek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 bg-white p-4 text-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900/80 dark:hover:bg-slate-800"
              >
                <p className="font-semibold">LinkedIn</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">linkedin.com/in/ghafek</p>
              </a>
            </div>
          </section>
        </main>

        <footer className="mt-8 space-y-4 border-t border-slate-200/70 pb-8 pt-6 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-slate-950 dark:hover:text-white" href="/impressum">
              Impressum
            </a>
            <a className="transition hover:text-slate-950 dark:hover:text-white" href="/datenschutz">
              Datenschutz
            </a>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300/80 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-950/30">
            <p className="font-medium text-slate-700 dark:text-slate-300">Legal skeleton</p>
            <ul className="mt-2 space-y-1">
              {legalNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
