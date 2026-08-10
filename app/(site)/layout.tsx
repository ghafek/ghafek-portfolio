import Link from "next/link";
import Logo from "@/app/components/logo";
import ThemeToggle from "@/app/components/theme-toggle";
import { about, contact, muted, navItems } from "@/lib/content";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Logo className="h-6 w-auto" />
          <span>{about.name}</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} className="hover:underline" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle label="Switch between light and dark theme" />
        </div>
      </header>

      <main className="mt-16">{children}</main>

      <footer className="mt-24 space-y-4 border-t border-neutral-300 pt-8 text-center text-sm dark:border-neutral-700">
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <Link key={item.href} className="hover:underline" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className={`flex flex-wrap justify-center gap-x-5 gap-y-2 ${muted}`}>
          {contact.links.map((link) => (
            <a
              key={link.href}
              className="hover:underline"
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 ${muted}`}>
          <span>© {new Date().getFullYear()} {about.name}</span>
          <Link className="hover:underline" href="/impressum">
            Impressum
          </Link>
          <Link className="hover:underline" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </footer>
    </div>
  );
}
