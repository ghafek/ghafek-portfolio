import { experience, muted } from "@/lib/content";

export const metadata = {
  title: "Work experience | Ghafek Alsaho",
  description:
    "Work experience in technical service and automation, platform operations and API integration.",
};

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Work experience</h1>
      {experience.map((item) => (
        <div key={item.company} className="space-y-2">
          <h2 className="font-semibold leading-relaxed">{item.role}</h2>
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
  );
}
