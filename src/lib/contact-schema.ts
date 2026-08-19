import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(160),
  message: z
    .string()
    .trim()
    .min(20, "Please add at least 20 characters so I can help properly")
    .max(4000, "Message is too long"),
  /** Honeypot — must stay empty. */
  company: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
