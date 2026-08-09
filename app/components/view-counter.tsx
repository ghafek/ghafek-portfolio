"use client";

import { useEffect, useRef, useState } from "react";

// Counts page loads. Nothing is written to the visitor's device: an earlier
// sessionStorage marker was dropped because storing it would need consent
// under Sec. 25 TDDDG, and the exemption for it was not defensible. The
// counter is therefore approximate rather than a unique-visitor figure.
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
  // Strict Mode replays effects in development; without this the same post
  // would be counted twice per mount there.
  const countedRef = useRef<string | null>(null);

  useEffect(() => {
    const key = `${lang}/${slug}`;
    if (countedRef.current === key) return;
    countedRef.current = key;

    let cancelled = false;

    fetch(`/api/views/${lang}/${slug}`, { method: "POST" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { views?: number } | null) => {
        if (!cancelled && data && typeof data.views === "number") {
          setViews(data.views);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [lang, slug]);

  if (views === null) return null;

  return (
    <li>
      {label}: {views}
    </li>
  );
}
