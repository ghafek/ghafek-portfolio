import { muted, thesis } from "@/lib/content";

export const metadata = {
  title: "Bachelor thesis | Ghafek Alsaho",
  description:
    "Bachelor thesis on automated process family identification and anomaly detection in semiconductor manufacturing, TU Berlin with the Ferdinand-Braun-Institut.",
};

export default function ThesisPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Bachelor thesis</h1>
      <p className="font-semibold leading-relaxed">{thesis.title}</p>
      <p className={`leading-relaxed ${muted}`}>{thesis.summary}</p>
      {thesis.paragraphs.map((paragraph) => (
        <p key={paragraph} className={`leading-relaxed ${muted}`}>
          {paragraph}
        </p>
      ))}
      <p className={`leading-relaxed ${muted}`}>{thesis.techniques}</p>
    </section>
  );
}
