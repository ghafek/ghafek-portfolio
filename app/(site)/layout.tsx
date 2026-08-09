import Link from "next/link";
import { navItems } from "@/lib/content";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {navItems.map((item) => (
          <Link key={item.href} className="hover:underline" href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <main className="mt-16">{children}</main>

      <footer className="mt-16 border-t border-neutral-300 pt-6 text-sm dark:border-neutral-700">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link className="underline" href="/impressum">
            Impressum
          </Link>
          <Link className="underline" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </footer>
    </div>
  );
}
