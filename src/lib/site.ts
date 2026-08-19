/** Site-wide, easily customizable configuration. */
export const siteConfig = {
  name: "Alex Moreau",
  role: "Web Developer",
  email: "hello@alex.dev",
  location: "Lisbon, Portugal",
  /** Swap this for your own file (drop a PDF in /public) or an external link. */
  resumeUrl: "/resume.pdf",
  resumeFileName: "Alex-Moreau-Resume.pdf",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

type TrackPayload = Record<string, string | number | boolean>;

/** Lightweight analytics hook — forwards to dataLayer/gtag/plausible when present. */
export function trackEvent(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (name: string, opts?: { props: TrackPayload }) => void;
  };
  w.dataLayer?.push({ event, ...payload });
  w.gtag?.("event", event, payload);
  w.plausible?.(event, { props: payload });
  if (import.meta.env.DEV) console.info("[track]", event, payload);
}
