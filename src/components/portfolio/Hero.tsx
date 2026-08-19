import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { siteConfig, trackEvent } from "@/lib/site";
import { Reveal } from "./Reveal";

const stats = [
  { value: "8+", label: "Years building for the web" },
  { value: "60+", label: "Products shipped" },
  { value: "24", label: "Happy long-term clients" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Available for freelance work
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              {siteConfig.name} — web developer crafting fast, accessible products.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design and build modern web applications with React, TypeScript and thoughtful
              interface engineering — from first wireframe to production deployment.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View selected work
                <ArrowDownRight className="size-4" />
              </a>
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName}
                onClick={() => trackEvent("resume_download", { location: "hero" })}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="size-4" />
                Download résumé
              </a>
              <div className="flex items-center gap-1 pl-1">
                {[
                  { icon: Github, label: "GitHub", href: siteConfig.social.github },
                  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
                  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-display text-3xl font-semibold">{stat.value}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="order-first lg:order-none">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl bg-accent/60" aria-hidden="true" />
            <img
              src={portrait}
              alt={`${siteConfig.name} working at a desk`}
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
