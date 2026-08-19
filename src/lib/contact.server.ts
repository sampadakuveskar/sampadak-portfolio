import type { ContactInput } from "./contact-schema";

export type ContactResult = { ok: true; delivered: boolean };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Delivers a contact message.
 * - If CONTACT_WEBHOOK_URL is set, the payload is POSTed there (Zapier, Make, n8n, Slack…).
 * - Else if RESEND_API_KEY + CONTACT_TO_EMAIL are set, an email is sent via Resend.
 * - Otherwise the message is logged so the form still works in development.
 */
export async function deliverContactMessage(data: ContactInput): Promise<ContactResult> {
  const webhookUrl = process.env["CONTACT_WEBHOOK_URL"];
  const resendKey = process.env["RESEND_API_KEY"];
  const toEmail = process.env["CONTACT_TO_EMAIL"];
  const fromEmail = process.env["CONTACT_FROM_EMAIL"] ?? "onboarding@resend.dev";

  const payload = {
    name: data.name,
    email: data.email,
    message: data.message,
    receivedAt: new Date().toISOString(),
  };

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Contact webhook responded with ${res.status}`);
    return { ok: true, delivered: true };
  }

  if (resendKey && toEmail) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${resendKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${fromEmail}>`,
        to: [toEmail],
        reply_to: data.email,
        subject: `New portfolio enquiry from ${data.name}`,
        html: `<p><strong>From:</strong> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
      }),
    });
    if (!res.ok) throw new Error(`Email provider responded with ${res.status}`);
    return { ok: true, delivered: true };
  }

  console.info("[contact] no delivery target configured; message received:", payload);
  return { ok: true, delivered: false };
}
