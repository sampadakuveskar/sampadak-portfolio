import { useState, type FormEvent } from "react";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactMessage } from "@/lib/contact.functions";
import { siteConfig, trackEvent } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const submit = useServerFn(sendContactMessage);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setSending(true);
    trackEvent("contact_submit", { source: "contact_form" });
    try {
      await submit({ data: parsed.data });
      form.reset();
      toast.success("Thanks — your message is on its way. I'll reply within 24 hours.");
      trackEvent("contact_success", { source: "contact_form" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong sending your message. Please email me directly.");
      trackEvent("contact_error", { source: "contact_form" });
    } finally {
      setSending(false);
    }
  };

  const fieldClass =
    "mt-2 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

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
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4 text-primary" />
              {siteConfig.email}
            </a>
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {siteConfig.location} — remote friendly
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`${fieldClass} h-11`}
                  placeholder="Jane Doe"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`${fieldClass} h-11`}
                  placeholder="jane@company.com"
                />
                {errors.email ? (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldClass} resize-none py-2.5`}
                placeholder="What are you building, and what's the deadline?"
              />
              {errors.message ? (
                <p id="message-error" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {/* Honeypot: hidden from humans, catches bots. */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              {sending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
