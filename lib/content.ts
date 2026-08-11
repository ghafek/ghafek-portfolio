// Portfolio content, shared by the landing page and the section subpages.

export const muted = "text-neutral-600 dark:text-neutral-400";

export const about = {
  // Full name is still used in the site headers and metadata.
  name: "Ghafek Alsaho",
  greeting: "Hey, I'm Ghafek",
  intro:
    "Computer Science student at Technische Universität Berlin, Certified Computer Science Expert – Software Development. Based in Berlin, Germany.",
  summary:
    "I work on technical service and automation: API integrations, CI/CD pipelines, Kubernetes and logging infrastructure, certificate handling, and documentation-as-code. My studies and open-source work focus on large-scale data systems.",
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript/Node.js", "SQL", "Bash/Zsh", "Java", "HTML/CSS", "YAML", "JSON"],
  },
  {
    title: "Engineering",
    skills: ["Django", "REST APIs", "Git/GitLab CI/CD", "Docker", "Kubernetes", "Helm", "Bruno", "Postman"],
  },
  {
    title: "Platform & operations",
    skills: [
      "PostgreSQL",
      "OpenSearch",
      "Elasticsearch/Kibana",
      "Fluent Bit",
      "Vault",
      "OpenSSL/mTLS",
      "runbooks",
    ],
  },
  {
    title: "Service & automation",
    skills: [
      "Jira",
      "Confluence",
      "Atlassian Rovo agents",
      "Jira automation",
      "documentation-as-code",
    ],
  },
  {
    title: "Data systems",
    skills: [
      "Apache SystemDS (DML)",
      "relational algebra",
      "Star Schema Benchmark",
      "query performance analysis",
    ],
  },
  {
    title: "Coursework",
    skills: ["text mining", "LLM fine-tuning", "bias detection", "text anonymisation"],
  },
  {
    title: "This site",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

export const projects = [
  {
    title: "Star Schema Benchmark for Apache SystemDS",
    description:
      "Co-developed the initial Star Schema Benchmark implementation for SystemDS with a project partner, contributing query scripts in the relational-algebra DML, the automated performance-run harnesses and the documentation. The 16-file integration commit landed on apache/systemds main. It grew out of the Large-scale Data Engineering project with the Big Data Engineering (DAMS) group at TU Berlin.",
    href: "https://github.com/apache/systemds/commit/20a7b67419e284ed908ededd19e80cd2713dca5a",
    linkText: "apache/systemds commit 20a7b674",
  },
  {
    title: "This site",
    description:
      "Portfolio and trilingual blog (English, German, Arabic, with right-to-left layout for Arabic). Next.js App Router, statically prerendered on Vercel, with a serverless view counter and comments backed by GitHub Discussions.",
    href: "https://github.com/ghafek/ghafek-portfolio",
    linkText: "github.com/ghafek/ghafek-portfolio",
  },
];

export const thesis = {
  title:
    "Automated Process Family Identification and Anomaly Detection in Semiconductor Manufacturing",
  summary:
    "Bachelor thesis with the Big Data Engineering (DAMS) group at TU Berlin, in cooperation with the Ferdinand-Braun-Institut (FBH). Currently under supervisor review.",
  paragraphs: [
    "Semiconductor wafers move through long, ordered sequences of process steps. In low-volume research production these routes vary widely, which makes later analysis hard: comparing two wafers is only meaningful if they went through comparable routes in the first place.",
    "I built an end-to-end pipeline that reconstructs each wafer's route from row-level event data, represents routes by short contiguous fragments, clusters them, and then challenges every resulting group against a stricter whole-route edit-distance test. Groups that survive are treated as candidate route families; wafers that sit near a boundary are surfaced as cases for expert review rather than silently reclassified.",
    "The emphasis throughout is interpretability and auditability: every acceptance decision is traceable, the validation is adversarial by design, and results are reported in a form that does not expose the underlying confidential data.",
  ],
  techniques:
    "Techniques: Python · SQLite · sequence mining · clustering · edit-distance validation",
};

export const experience = [
  {
    role: "IT Working Student — Technical Service & Automation",
    company: "Verimi GmbH",
    location: "Berlin, DE",
    period: "May 2025 – Sep 2026",
    details: [
      "Automated release-note generation from Jira and Confluence with a Node.js sync tool and GitLab CI, opening reviewable merge requests that keep publication under human approval.",
      "Implemented permission-controlled Django bulk workflows for Hydra OAuth2 client-secret rotation and service API-key updates, delivered end-to-end on UAT and production.",
      "Resolved two production incidents on a partner ticket integration: an expired authentication certificate, restored and validated in test and production, and a removed Jira API v2 search, replaced with a resilient v3 Enhanced JQL strategy.",
      "Investigated multi-system incidents by correlating Kubernetes logs, OpenSearch/Kibana data and PostgreSQL records, and troubleshot the Fluent Bit/Elasticsearch logging stack.",
      "Designed and validated a two-flow Atlassian Rovo/Jira triage automation with evidence-precedence rules and missing-data detection, and converted 31 fragmented knowledge sources into a governed Confluence package.",
      "Handled 70+ certificate renewal/generation requests across UAT and production, and authored an mTLS renewal and rollback runbook covering CSR signing and Kubernetes secret replacement.",
      "Rebuilt a partner API reference from Postman into a Bruno collection covering access, identification, signing and payment APIs, deployed to staging for review.",
    ],
  },
  {
    role: "IT Software Specialist",
    company: "VARTAN.GROUP",
    location: "Hamburg, DE",
    period: "Jun 2023 – Mar 2024",
    details: [
      "Integrated REST APIs connecting internal tooling with external services, streamlining service delivery.",
      "Built data pipelines and cleansing routines for reporting, and automated high-volume IT workflows with Python and shell scripting.",
    ],
  },
  {
    role: "IT Working Student",
    company: "Lovehoney Group",
    location: "Berlin, DE",
    period: "Aug 2021 – Mar 2023",
    details: [
      "Automated IT workflows and service-desk processes, and developed Python and PowerShell utilities underpinning HR and IT reporting.",
      "Administered Microsoft 365 and Freshservice, covering onboarding, licence governance and knowledge bases.",
    ],
  },
  {
    role: "Early Technical Roles",
    company: "Vartan Product Support · BurdaForward",
    location: "Hamburg, DE",
    period: "Jan 2016 – Sep 2017",
    details: [
      "Supported hardware rollouts and documentation at Vartan Product Support; managed programmatic campaigns and SSP/DSP bidding performance at BurdaForward.",
    ],
  },
];

export const education = [
  {
    qualification: "B.Sc. Computer Science",
    institution: "Technische Universität Berlin",
    location: "Berlin, DE",
    period: "2022 – present",
    note: null,
  },
  {
    qualification:
      "Apprenticeship: Computer Science Expert (Fachinformatiker Anwendungsentwicklung)",
    institution: "Hubert Burda Media",
    location: "Hamburg, DE",
    period: "Sep 2017 – Jul 2020",
    note: null,
  },
  {
    qualification: "Certified Statistician",
    institution: "Technical Institute of Statistics",
    location: "Damascus, Syria",
    period: "Sep 2011 – Jun 2014",
    note: "2 of 4 semesters completed",
  },
];

export const contact = {
  primaryInterest:
    "Most interested in data engineering and data platform roles, where my studies and open-source work meet the operational side of my job experience.",
  alsoOpenTo:
    "Also open to: integration and API engineering, automation engineering, platform or DevOps support, application support, and junior-to-mid backend roles with an operations component.",
  links: [
    { label: "Email", text: "alsaho@ghafek.xyz", href: "mailto:alsaho@ghafek.xyz", external: false },
    {
      label: "GitHub",
      text: "github.com/ghafek",
      href: "https://github.com/ghafek",
      external: true,
    },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/ghafek",
      href: "https://www.linkedin.com/in/ghafek",
      external: true,
    },
  ],
};

export const navItems = [
  { label: "about", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "thesis", href: "/thesis" },
  { label: "experience", href: "/experience" },
  { label: "education", href: "/education" },
  { label: "tech stack", href: "/tech-stack" },
  { label: "contact", href: "/contact" },
];
