// Legal texts (Impressum, Datenschutz) live as Markdown so the final texts
// from the client can be pasted in without touching any code.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const legalCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Placeholder texts must never go live (go-live blocker). */
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  legal: legalCollection,
};
