export default function Home() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript/TypeScript", "Java", "C"],
    },
    {
      title: "Web",
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "Docker", "Kubernetes", "VS Code", "Linux", "Vercel"],
    },
    {
      title: "Interests",
      skills: [
        "Machine Learning",
        "Data Processing",
        "Automation",
        "Distributed Systems",
      ],
    },
  ];

  const projects = [
    {
      title:
        "Bachelor Thesis: Automated Process Family Identification and Anomaly Detection in Semiconductor Manufacturing",
      description:
        "Research-focused work on identifying process families and detecting anomalies in manufacturing data pipelines.",
    },
    {
      title: "Cloud & DevOps Work",
      description:
        "Hands-on work with Kubernetes, structured logging, deployment automation, and practical infrastructure operations.",
    },
    {
      title: "Personal Portfolio",
      description:
        "This website, built with Next.js and Tailwind CSS, designed for fast deployment and iteration on Vercel.",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6f8fb_0%,_#eef2ff_35%,_#f8fafc_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_#111827_0%,_#0f172a_45%,_#020617_100%)] dark:text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-10 lg:px-16">
        <header className="sticky top-4 z-10 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/55">
          <nav className="flex items-center justify-between gap-4 text-sm">
            <p className="font-semibold tracking-wide">Ghafek Alsaho</p>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-slate-950 dark:hover:text-white" href="#projects">
                Projects
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
                Computer Science at TU Berlin
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Ghafek Alsaho
              </h1>
              <h2 className="text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300">
                Computer Science Student & Software Developer
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I build practical software systems and enjoy working on automation, cloud
                infrastructure, data processing, and AI-related projects.
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
                Focus Areas
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>Software Engineering</li>
                <li>AI/ML and Data-Driven Systems</li>
                <li>Automation and Distributed Systems</li>
                <li>Cloud Infrastructure</li>
              </ul>
            </aside>
          </section>

          <section id="about" className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h3>
            <p className="max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
              I am a B.Sc. Computer Science student at Technische Universitat Berlin and a
              working student in tech. My interests center around backend systems, cloud
              deployments, automation, and AI/ML, with a strong preference for building
              reliable, practical products.
            </p>
          </section>

          <section id="projects" className="space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h3>
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <h4 className="text-base font-semibold leading-6 text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {group.title}
                  </h4>
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

          <section id="contact" className="space-y-6 rounded-2xl border border-slate-200/80 bg-white/75 p-8 dark:border-slate-700 dark:bg-slate-900/60">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Open to internships, student roles, and software engineering collaborations.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="mailto:ghafek@pm.me"
                className="rounded-xl border border-slate-300 bg-white p-4 text-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900/80 dark:hover:bg-slate-800"
              >
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">ghafek@pm.me</p>
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
      </div>
    </div>
  );
}
