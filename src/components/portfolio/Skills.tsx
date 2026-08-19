import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    title: "Frontend",
    items: ["React 19", "TypeScript", "Next.js", "TanStack Router & Query", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PostgreSQL", "REST & tRPC", "Edge functions", "Auth & RLS"],
  },
  {
    title: "Craft",
    items: ["Design systems", "Accessibility (WCAG)", "Core Web Vitals", "Testing", "CI/CD"],
  },
];

const levels = [
  { label: "React & TypeScript", value: 95 },
  { label: "UI architecture & design systems", value: 90 },
  { label: "Node & data modelling", value: 80 },
  { label: "Performance & accessibility", value: 88 },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit, weighted toward the front end."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-3">
            {groups.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 90}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="space-y-6">
            {levels.map((level, i) => (
              <Reveal key={level.label} delay={i * 80}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium">{level.label}</span>
                  <span className="text-muted-foreground">{level.value}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
                    style={{ width: `${level.value}%` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
