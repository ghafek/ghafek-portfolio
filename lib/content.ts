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
      "Power Automate",
      "Power BI",
      "Azure/M365",
      "PowerShell",
    ],
  },
  {
    title: "Data systems",
    skills: [
      "Apache SystemDS (DML)",
      "Star Schema Benchmark",
      "benchmark scripting",
    ],
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
      "Co-developed the initial Star Schema Benchmark implementation for Apache SystemDS with a project partner, as the programming project of TU Berlin's Large-scale Data Engineering module (Big Data Engineering / DAMS Lab): all 13 SSB queries in DML, shell scripts for automated performance runs, and the documentation. It landed on apache/systemds main as commit 20a7b67 in January 2026.",
    href: "https://github.com/apache/systemds/commit/20a7b67419e284ed908ededd19e80cd2713dca5a",
    linkText: "apache/systemds commit 20a7b67",
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
    "Bachelor thesis with the Big Data Engineering (DAMS) group at TU Berlin, in cooperation with the Ferdinand-Braun-Institut (FBH). Graded 1.7.",
  // Withheld until rewritten in my own words (see JOBS/profile/academic-profile.public.txt).
  paragraphs: [] as string[],
  techniques:
    "Techniques: Python · SQLite · sequence mining · clustering · edit-distance validation",
};

export const experience = [
  {
    role: "Working Student — Partner Integration",
    company: "Verimi GmbH",
    location: "Berlin, DE",
    period: "May 2025 – Sep 2026",
    details: [
      "Automated Jira/Confluence release-note generation with a Node.js sync tool and GitLab CI, opening reviewable merge requests that keep publication under human approval.",
      "Implemented permission-controlled Django bulk workflows for client-secret rotation and API-key updates, delivered across UAT and production.",
      "Resolved a certificate-related integration outage, validating the fix in test and production, and replaced a removed Jira v2 search endpoint with a v3 Enhanced JQL client; investigated incidents across Kubernetes logs, OpenSearch/Kibana and PostgreSQL.",
      "Designed and validated a two-flow Atlassian Rovo/Jira triage automation with evidence-precedence rules and missing-data detection, and converted 31 fragmented knowledge sources into a governed, review-ready Confluence migration package.",
      "Handled recurring certificate creation and renewal requests for internal and partner systems, and authored an mTLS renewal and rollback runbook covering CSR signing and Kubernetes secret replacement.",
      "Built a Bruno-based Partner API reference (access, identification, signing, payment) and deployed it to staging for review.",
      "Troubleshot Kubernetes logging components, including Fluent Bit, Elasticsearch and Kibana, and documented resource tuning and recovery procedures.",
    ],
  },
  {
    role: "IT Software Specialist",
    company: "VARTAN.AERO GmbH",
    location: "Hamburg, DE",
    period: "Jun 2023 – Feb 2024",
    details: [
      "Automated internal processes and connected ERP systems with Python scripts, and automated data imports/exports with data standardisation.",
      "Configured Power BI dashboards and interfaces with local teams worldwide; wrote SQL queries for databases including MySQL and built Power Automate workflows.",
    ],
  },
  {
    role: "IT Working Student",
    company: "WOW Tech Europe GmbH (Lovehoney Group)",
    location: "Berlin, DE",
    period: "Aug 2021 – Feb 2023",
    details: [
      "Automated and documented company-wide processes across HR, ITSM and identity-management tools with scripting and Microsoft Power Automate cloud flows.",
      "Administered Microsoft Azure and Microsoft 365 with advanced PowerShell scripting; provided 1st–3rd level support and on-/offboarding.",
    ],
  },
];

export const education = [
  {
    qualification: "B.Sc. Computer Science (expected Sept 2027)",
    institution: "Technische Universität Berlin",
    location: "Berlin, DE",
    period: "2022 – present",
    note: "Bachelor thesis graded 1.7",
  },
  {
    qualification:
      "Completed IT Apprenticeship: Software Development (Fachinformatiker Anwendungsentwicklung, IHK)",
    institution: "BurdaForward Advertising GmbH (Hubert Burda Media)",
    location: "Hamburg, DE",
    period: "Sep 2017 – Jul 2020",
    note: "Developed internal tools and HTML/JavaScript/CSS ad templates; analysed and acceptance-tested apps.",
  },
  {
    qualification: "Studies in Statistics (not completed)",
    institution: "Technical Institute of Statistics",
    location: "Damascus, Syria",
    period: "2011 – 2014",
    note: "2 of 4 semesters completed",
  },
];

export const contact = {
  primaryInterest:
    "I'm interested in building technical solutions end to end across software development, cloud, DevOps and AI-supported workflows. Consulting appeals to me because it offers work across different companies and sectors.",
  alsoOpenTo:
    "Also open to technology consulting, integration and API engineering, automation, cloud/DevOps support, application support, backend development and data engineering.",
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
