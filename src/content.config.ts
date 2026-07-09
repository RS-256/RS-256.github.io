import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { parse as parseYaml } from "yaml";
import { categoryIds } from "./data/categories";

// Markdown files in src/content/notes/ are automatically added to /notes.
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

// Works data: src/content/works.yaml (one entry equals one card).
const works = defineCollection({
  loader: file("./src/content/works.yaml", {
    parser: (text) => parseYaml(text),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      details: z.string().optional(),
      links: z.object({
        source: z.string().url().optional(),
        download: z.string().url().optional(),
        site: z.string().url().optional(),
      }),
      category: z.enum(categoryIds),
      featured: z.boolean().optional(),
      icon: image().optional(),
      pixelated: z.boolean().optional(),
    }),
});

// Resource links: src/content/resources.yaml (one entry equals one group).
const resources = defineCollection({
  loader: file("./src/content/resources.yaml", {
    parser: (text) => parseYaml(text),
  }),
  schema: z.object({
    label: z.string(),
    items: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          details: z.string().optional(),
          links: z
            .array(
              z.object({
                label: z.string(),
                url: z.string().url(),
                description: z.string().optional(),
              }),
            )
            .min(1),
        }),
      )
      .min(1),
  }),
});

export const collections = { notes, works, resources };
