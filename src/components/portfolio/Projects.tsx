import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    name: "Meridian Analytics",
    summary:
      "Real-time reporting dashboard for logistics teams, with virtualised tables and streaming charts.",
    tags: ["React", "TypeScript", "WebSockets"],
    year: "2025",
  },
  {
    name: "Fold Commerce",
    summary:
      "Headless storefront and checkout rebuilt for speed — 98 Lighthouse performance on mobile.",
    tags: ["Next.js", "Stripe", "Edge"],
    year: "2024",
  },
  {
    name: "Kiln Design System",
    summary:
      "Accessible component library and documentation site adopted by six internal product teams.",
    tags: ["Design systems", "a11y", "Storybook"],
    year: "2024",
  },
  {
    name: "Wavelength CRM",
    summary:
      "Multi-tenant CRM with role-based access, audit trails and an offline-friendly mobile view.",
    tags: ["Postgres", "RLS", "PWA"],
    year: "2023",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="A few recent engagements. Details available on request — most client work sits behind a login."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.name}
              delay={i * 90}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Case study
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
