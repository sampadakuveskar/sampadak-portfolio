import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Moreau. Built with React and TypeScript.
        </p>
        <div className="flex items-center gap-1">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Mail, label: "Email", href: "mailto:hello@alex.dev" },
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
