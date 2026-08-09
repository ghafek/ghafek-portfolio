"use client";

import { useEffect, useRef } from "react";

// IDs generated at https://giscus.app for the public ghafek-portfolio repo
// (Discussions enabled, giscus app installed, "Blog Comments" announcement category).
const giscusConfig = {
  repo: "ghafek/ghafek-portfolio",
  repoId: "R_kgDOTaj0AA",
  category: "Blog Comments",
  categoryId: "DIC_kwDOTaj0AM4DBZny",
};

const isConfigured = Boolean(giscusConfig.repoId && giscusConfig.categoryId);

export default function GiscusComments({
  lang,
  heading,
}: {
  lang: string;
  heading: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!isConfigured || !container || container.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", giscusConfig.repo);
    script.setAttribute("data-repo-id", giscusConfig.repoId);
    script.setAttribute("data-category", giscusConfig.category);
    script.setAttribute("data-category-id", giscusConfig.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-loading", "lazy");
    container.appendChild(script);
  }, [lang]);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">{heading}</h2>
      {isConfigured ? (
        <div ref={containerRef} />
      ) : (
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Comments are not configured yet. Generate the repoId and categoryId at
          giscus.app and add them to app/components/giscus-comments.tsx.
        </p>
      )}
    </section>
  );
}
