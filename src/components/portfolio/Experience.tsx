import { Reveal, SectionHeading } from "./Reveal";

const roles = [
  {
    period: "2022 — Present",
    role: "Independent Web Developer",
    company: "Freelance",
    points: [
      "Lead front-end partner for SaaS and fintech teams across Europe.",
      "Rebuilt a booking platform front end, cutting load time from 4.1s to 1.2s.",
    ],
  },
  {
    period: "2019 — 2022",
    role: "Senior Frontend Engineer",
    company: "Northwind Studio",
    points: [
      "Owned the shared component library used by six product squads.",
      "Introduced automated accessibility checks into the release pipeline.",
    ],
  },
  {
    period: "2017 — 2019",
    role: "Frontend Engineer",
    company: "Bluecrest Labs",
    points: [
      "Shipped dashboards handling millions of rows with virtualised tables.",
      "Migrated a legacy jQuery app to React and TypeScript incrementally.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've been shipping." />
        <ol className="mt-12 space-y-0 border-l border-border pl-6 sm:pl-10">
          {roles.map((role, i) => (
            <Reveal as="li" key={role.company} delay={i * 100} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[47px]" />
              <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {role.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                {role.role} <span className="text-muted-foreground">· {role.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5">
                {role.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
