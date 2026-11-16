# ghafek.xyz

Personal site and trilingual blog. Live at [www.ghafek.xyz](https://www.ghafek.xyz).

## Stack

- **Next.js 16** (App Router) with React 19 and TypeScript
- **Tailwind CSS 4**
- **Upstash Redis** for blog view counts
- **giscus** for comments, backed by GitHub Discussions
- Deployed on **Vercel**, with Vercel Web Analytics for traffic statistics and
  Speed Insights for Core Web Vitals

Every page is statically prerendered. The only route that runs on demand is the
view-counter API.

## Notable bits

**Trilingual blog.** English, German and Arabic sections are independent
streams, not translations of each other — each has its own posts and slugs. The
Arabic section renders right-to-left, using logical CSS properties so the layout
mirrors without special cases.

**Typography.** The portfolio uses system font stacks and downloads no font files. The
blog uses Bitter with Noto Naskh Arabic, self-hosted at build time by
`next/font`, so visitors' browsers do not contact Google for fonts. The Arabic section overrides the
font order: `next/font` expands the Latin stack to include a `local(Times New
Roman)` fallback, which carries Arabic glyphs and would otherwise swallow the
Arabic text before Noto was reached.

**Privacy.** The application sets no cookies of its own. Vercel Web Analytics
and Speed Insights collect usage and performance metrics. Comments load only
after an explicit click, so nothing contacts giscus or GitHub beforehand, and
they can be unloaded again as easily as they were loaded. Theme preferences and
optional comment sign-in use browser storage. The view counter stores aggregate
counts per post and language, without visitor identifiers.

**Theme.** Light and dark follow the system setting until the visitor overrides
them. The choice is applied by an inline script before first paint, so the page
never flashes the wrong theme, and the toggle's icon switches via CSS rather
than React state to keep server and client markup identical.

**Brand mark.** The favicon and header logo are the Arabic letter ghayn — the
first letter of Ghafek — drawn as a vector path extracted from Reem Kufi, so no
font is loaded at runtime.

## Layout

```
app/
  (site)/              portfolio pages: about, projects, thesis, experience, …
  blog/[lang]/         blog index and posts, per language
  api/views/[lang]/    view counter endpoint
  components/          logo, theme toggle, view counter, comments
lib/
  content.ts           portfolio content, single source for every page
  i18n.ts              locales and UI strings
  views.ts             Upstash client and slug allowlist
```

Blog post URLs are date-prefixed — `/blog/en/20260809-hello-world` — so they
sort chronologically while staying readable. The prefix is derived from the
post's `date` field rather than stored separately.

## Running locally

```bash
npm install
npm run dev
```

The view counter needs Upstash credentials in `.env.local`:

```
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
```

Without them the site runs fine — the counter simply omits itself rather than
failing.

## How this was built

Built with an AI coding agent (Claude Code), which I directed and reviewed.

I made the architecture and content decisions: independent per-language blog streams rather than translations, consent-gated comment loading, the date-prefixed URL scheme, and how the legal pages are handled.

I worked this way on purpose. While writing my bachelor thesis and working at Verimi, I wanted to see how far a well-directed agent workflow gets on a project with real constraints: GDPR, three languages, right-to-left layout, and a public deployment I have to stand behind.
