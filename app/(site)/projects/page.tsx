import { muted, projects } from "@/lib/content";

export const metadata = {
  title: "Projects | Ghafek Alsaho",
  description:
    "Open-source and personal projects, including a merged Star Schema Benchmark contribution to Apache SystemDS.",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <dl className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="space-y-2">
            <dt className="font-semibold leading-relaxed">{project.title}</dt>
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
  );
}
