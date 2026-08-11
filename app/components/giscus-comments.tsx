"use client";

import { useEffect, useRef, useState } from "react";

// IDs generated at https://giscus.app for the public ghafek-portfolio repo
// (Discussions enabled, giscus app installed, "Blog Comments" announcement category).
const giscusConfig = {
  repo: "ghafek/ghafek-portfolio",
  repoId: "R_kgDOTaj0AA",
  category: "Blog Comments",
  categoryId: "DIC_kwDOTaj0AM4DBZny",
  discussionsUrl: "https://github.com/ghafek/ghafek-portfolio/discussions",
};

const isConfigured = Boolean(giscusConfig.repoId && giscusConfig.categoryId);

// giscus is loaded only after an explicit click, and unloading removes the
// iframe and the session entry giscus writes after a GitHub sign-in — so
// withdrawing consent is as easy as giving it (Art. 7(3) GDPR).
export default function GiscusComments({
  lang,
  heading,
  notice,
  loadLabel,
  unloadLabel,
  gitHubLabel,
}: {
  lang: string;
  heading: string;
  notice: string;
  loadLabel: string;
  unloadLabel: string;
  gitHubLabel: string;
}) {
  const [accepted, setAccepted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!accepted || !container || container.hasChildNodes()) return;

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
    container.appendChild(script);
  }, [accepted, lang]);

  function withdraw() {
    if (containerRef.current) {
      containerRef.current.replaceChildren();
    }
    try {
      localStorage.removeItem("giscus-session");
    } catch {
      // Storage unavailable; nothing to clear.
    }
    setAccepted(false);
  }

  if (!isConfigured) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">{heading}</h2>
      {accepted ? (
        <div className="space-y-4">
          <div ref={containerRef} />
          <button
            type="button"
            onClick={withdraw}
            className="rounded border border-neutral-400 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-900"
          >
            {unloadLabel}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {notice}
          </p>
          <button
            type="button"
            onClick={() => setAccepted(true)}
            className="rounded border border-neutral-400 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-900"
          >
            {loadLabel}
          </button>
          <p className="text-sm">
            <a
              className="underline"
              href={giscusConfig.discussionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {gitHubLabel}
            </a>
          </p>
        </div>
      )}
    </section>
  );
}
