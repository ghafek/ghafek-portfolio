import { education, muted } from "@/lib/content";

export const metadata = {
  title: "Education | Ghafek Alsaho",
  description: "Computer Science studies at TU Berlin and earlier qualifications.",
};

export default function EducationPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Education</h1>
      {education.map((item) => (
        <div key={item.qualification} className="space-y-1">
          <h2 className="font-semibold leading-relaxed">{item.qualification}</h2>
          <p className={`text-sm ${muted}`}>
            {item.institution} · {item.location} · {item.period}
            {item.note ? ` · ${item.note}` : ""}
          </p>
        </div>
      ))}
    </section>
  );
}
