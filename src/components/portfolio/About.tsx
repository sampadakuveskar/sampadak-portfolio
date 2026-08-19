import { Reveal, SectionHeading } from "./Reveal";

const facts = [
  { label: "Based in", value: "Lisbon, working worldwide" },
  { label: "Focus", value: "Product UI, design systems, performance" },
  { label: "Stack", value: "React, TypeScript, Node, Postgres" },
  { label: "Response time", value: "Usually within 24 hours" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <SectionHeading
          eyebrow="About me"
          title="I build interfaces that feel considered, not assembled."
          description="After eight years split between product studios and in-house teams, I've learned that great software comes from tight feedback loops. I work close to design, ship small and often, and treat accessibility and performance as requirements rather than polish."
        />
        <div>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-muted-foreground">
              My typical engagement starts with a short discovery week: mapping flows, auditing what
              already exists, and agreeing on the smallest valuable release. From there I own the
              front end end-to-end — component architecture, state, API contracts, testing and
              deployment.
            </p>
          </Reveal>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={120 + i * 60} className="bg-card p-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm font-medium">{fact.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
