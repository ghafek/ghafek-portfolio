import { contact, muted } from "@/lib/content";

export const metadata = {
  title: "Contact | Ghafek Alsaho",
  description: "Availability, the roles I am looking for, and how to get in touch.",
};

export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="leading-relaxed">{contact.availability}</p>
      <p className={`leading-relaxed ${muted}`}>
        Looking for roles in {contact.lookingFor.join(", ")}.
      </p>
      <ul className="space-y-1">
        {contact.links.map((link) => (
          <li key={link.href}>
            {link.label}:{" "}
            <a
              className="underline"
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
