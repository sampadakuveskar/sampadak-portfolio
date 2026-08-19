import { Code2, Gauge, Layers, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: Code2,
    title: "Web app development",
    body: "End-to-end delivery of React and TypeScript applications, from architecture to launch.",
  },
  {
    icon: Layers,
    title: "Design system builds",
    body: "Reusable, documented component libraries that keep product teams consistent and fast.",
  },
  {
    icon: Gauge,
    title: "Performance audits",
    body: "Core Web Vitals diagnosis with a prioritised, measurable plan — and the fixes to match.",
  },
  {
    icon: Wrench,
    title: "Ongoing maintenance",
    body: "Retainer support for upgrades, bug fixes and steady feature work on existing products.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Services" title="How I can help." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 80}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <service.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
