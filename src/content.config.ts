import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// src/content/notes/ に .md を置くと /notes に自動で追加される
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { notes };
