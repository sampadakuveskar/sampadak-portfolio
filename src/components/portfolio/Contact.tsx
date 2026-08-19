import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks — your message is on its way. I'll reply within 24 hours.");
    }, 600);
  };

  return (
    <section id="contact" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your project."
            description="Tell me what you're building and where it's stuck. I'll come back with an honest take on scope, timeline and budget."
          />
          <Reveal delay={120} className="mt-8 space-y-3">
            <a
              href="mailto:hello@alex.dev"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4 text-primary" />
              hello@alex.dev
            </a>
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              Lisbon, Portugal — remote friendly
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                placeholder="What are you building, and what's the deadline?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <Send className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
