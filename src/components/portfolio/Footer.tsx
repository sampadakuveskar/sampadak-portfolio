import { Download, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, trackEvent } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with React and TypeScript.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeFileName}
            onClick={() => trackEvent("resume_download", { location: "footer" })}
            className="mr-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="size-4" />
            Résumé
          </a>
          {[
            { icon: Github, label: "GitHub", href: siteConfig.social.github },
            { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
            { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
