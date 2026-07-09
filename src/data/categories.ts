/**
 * Category definitions for works. The /works page follows this array order.
 * Add new categories here; works.yaml category values must use these ids.
 */

export const categories = [
  {
    id: "minecraft-mods",
    label: "Minecraft Mods",
    description: "Minecraft(Fabric)向けに開発している Mod",
  },
  {
    id: "web-tools",
    label: "Web Tools",
    description: "ブラウザで動作するツール",
  },
  {
    id: "apps-extensions",
    label: "Apps & Extensions",
    description: "ブラウザ拡張機能やデスクトップアプリ",
  },
  {
    id: "scripts",
    label: "Scripts",
    description: "Carpet Script などのスクリプト類",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

/** For the zod enum, so schema validation catches mistyped category values. */
export const categoryIds = categories.map((c) => c.id) as [
  CategoryId,
  ...CategoryId[],
];
