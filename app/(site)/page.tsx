import { about, muted } from "@/lib/content";

export default function Home() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold tracking-tight">{about.name}</h1>
      <p className="leading-relaxed">{about.headline}</p>
      <p className="leading-relaxed">{about.location}</p>
      <p className={`leading-relaxed ${muted}`}>{about.summary}</p>
    </section>
  );
}
