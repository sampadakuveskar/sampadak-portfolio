import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";
import { deliverContactMessage } from "./contact.server";

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) return { ok: true as const, delivered: false };
    return await deliverContactMessage(data);
  });
