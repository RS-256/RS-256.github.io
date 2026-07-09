/**
 * Accessors for resources data.
 * The source data lives in src/content/resources.yaml and is validated by src/content.config.ts.
 * Add or edit links by changing only resources.yaml.
 */

import { getCollection, type CollectionEntry } from "astro:content";

export type ResourceGroup = CollectionEntry<"resources">["data"];
export type ResourceItem = ResourceGroup["items"][number];
export type ResourceLink = ResourceItem["links"][number];

/** All groups in the order defined by resources.yaml. */
export async function getResourceGroups(): Promise<ResourceGroup[]> {
  const entries = await getCollection("resources");
  return entries.map((entry) => entry.data);
}
