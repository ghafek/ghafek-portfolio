import { muted, skillGroups } from "@/lib/content";

export const metadata = {
  title: "Tech stack | Ghafek Alsaho",
  description:
    "Languages, engineering, platform and operations tooling, and university coursework.",
};

export default function TechStackPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Tech stack</h1>
      <ul className="space-y-2">
        {skillGroups.map((group) => (
          <li key={group.title} className="leading-relaxed">
            <span className="font-semibold">{group.title}:</span>{" "}
            <span className={muted}>{group.skills.join(", ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
