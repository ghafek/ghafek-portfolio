import Link from "next/link";
import { posts } from "./blog/posts";

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
      label: "coming soon",
      description:
        "The current portfolio homepage with a clean, responsive layout and room for future project details.",
    },
    {
      title: "Bachelor Thesis Project",
      label: "details soon",
      description:
        "A concise research project card for the semiconductor manufacturing thesis work and related analysis.",
    },
    {
      title: "Backend / Automation Projects",
      label: "coming soon",
      description:
        "Placeholder space for backend services, automation tooling, and infrastructure support projects.",
    },
    {
      title: "Data / ML Coursework Projects",
      label: "details soon",
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
        <a className="hover:underline" href="#blog">
          blog
        </a>
        <a className="hover:underline" href="#thesis">
          thesis
        </a>
        <a className="hover:underline" href="#experience">
          experience
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
            Computer Science student at Technische Universität Berlin, based in Berlin,
            Germany.
          </p>
          <p className="leading-relaxed">
            Backend engineering, automation, cloud infrastructure, and software engineering.
          </p>
          <p className={`leading-relaxed ${muted}`}>
            I build practical software systems and work across data systems, machine learning,
            and infrastructure-focused development in Berlin and beyond.
          </p>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <dl className="space-y-6">
            {projects.map((project) => (
              <div key={project.title} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="font-semibold">{project.title}:</dt>
                <dd className={`leading-relaxed ${muted}`}>
                  {project.description} ({project.label})
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="blog" className="space-y-6">
          <h2 className="text-xl font-semibold">Blog</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <span className={muted}>{post.date}</span>
                <Link className="leading-relaxed underline" href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="thesis" className="space-y-4">
          <h2 className="text-xl font-semibold">Bachelor thesis / research</h2>
          <p className="font-semibold leading-relaxed">
            Automated Process Family Identification and Anomaly Detection in Semiconductor
            Manufacturing
          </p>
          <p className={`leading-relaxed ${muted}`}>
            Bachelor thesis at TU Berlin in cooperation with FBH Berlin. This section is a
            concise skeleton for process-family identification, anomaly detection,
            semiconductor manufacturing data, and data-driven analysis.
          </p>
          <ul className={`list-disc space-y-1 pl-5 ${muted}`}>
            {thesisHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="space-y-6">
          <h2 className="text-xl font-semibold">Work experience</h2>
          {experience.map((item) => (
            <div key={item.company} className="space-y-2">
              <h3 className="font-semibold">
                {item.company} — {item.role}
              </h3>
              <ul className={`list-disc space-y-1 pl-5 ${muted}`}>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
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
          <p className={`leading-relaxed ${muted}`}>
            Open to internships, student roles, and software engineering collaborations.
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

      <footer className="mt-16 space-y-4 border-t border-neutral-300 pt-6 text-sm dark:border-neutral-700">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link className="underline" href="/impressum">
            Impressum
          </Link>
          <Link className="underline" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
        <div className={muted}>
          <p>Legal skeleton:</p>
          <ul className="list-disc space-y-1 pl-5">
            {legalNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
