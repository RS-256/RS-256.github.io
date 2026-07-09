/**
 * Accessors for works data.
 * The source data lives in src/content/works.yaml and is validated by src/content.config.ts.
 * Add or edit works by changing only works.yaml.
 */

import { getCollection, type CollectionEntry } from "astro:content";
import { categories } from "./categories";

export { categories, type CategoryId } from "./categories";

/** One works.yaml entry with its id attached. */
export type Work = CollectionEntry<"works">["data"] & { id: string };

/** All works in the order defined by works.yaml. */
export async function getWorks(): Promise<Work[]> {
  const entries = await getCollection("works");
  return entries.map((entry) => ({ id: entry.id, ...entry.data }));
}

/** Works for the home page: entries with featured: true. */
export async function getFeaturedWorks(): Promise<Work[]> {
  return (await getWorks()).filter((work) => work.featured);
}

/** For /works: returns works grouped by category definition order. */
export async function getWorksByCategory() {
  const works = await getWorks();
  return categories
    .map((category) => ({
      category,
      items: works.filter((work) => work.category === category.id),
    }))
    .filter((group) => group.items.length > 0);
}
