import { about, muted } from "@/lib/content";

export default function Home() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold tracking-tight">{about.greeting}</h1>
      <p className={`leading-relaxed ${muted}`}>{about.intro}</p>
      <p className="leading-relaxed">{about.summary}</p>
    </section>
  );
}
