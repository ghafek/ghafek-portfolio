"use client";

import { useEffect, useState } from "react";

// Counts one view per browser session (sessionStorage flag, no cookies and no
// personal data). Renders nothing until a count is available, so an
// unconfigured or unreachable counter never breaks the page.
export default function ViewCounter({
  lang,
  slug,
  label,
}: {
  lang: string;
  slug: string;
  label: string;
}) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const storageKey = `viewed:${lang}:${slug}`;
    let alreadyViewed = true;
    try {
      alreadyViewed = sessionStorage.getItem(storageKey) === "1";
      sessionStorage.setItem(storageKey, "1");
    } catch {
      // Storage unavailable (e.g. strict privacy mode): read-only fallback.
    }

    fetch(`/api/views/${lang}/${slug}`, { method: alreadyViewed ? "GET" : "POST" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { views?: number } | null) => {
        if (data && typeof data.views === "number") {
          setViews(data.views);
        }
      })
      .catch(() => {});
  }, [lang, slug]);

  if (views === null) return null;

  return (
    <li>
      {label}: {views}
    </li>
  );
}
