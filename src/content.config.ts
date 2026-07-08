import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Markdown files in src/content/notes/ are automatically added to /notes.
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { notes };
