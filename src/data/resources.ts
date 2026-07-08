/**
 * Link collection shown on /resources.
 * One card equals one ResourceItem entry.
 * Cards with one link open that link directly.
 * Cards with multiple links show a dialog list, which is useful for invite link collections.
 * TODO: Replace or extend the placeholders with frequently used sites and data.
 */

export interface ResourceLink {
  label: string;
  url: string;
  /** Optional note shown in the dialog list */
  description?: string;
}

export interface ResourceItem {
  title: string;
  /** Short description shown on the card */
  description: string;
  /** Detailed description for the dialog; falls back to description when omitted */
  details?: string;
  links: ResourceLink[];
}

export interface ResourceGroup {
  label: string;
  items: ResourceItem[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    label: "開発ドキュメント",
    items: [
      {
        title: "MDN Web Docs",
        description: "Web 技術の一次資料。HTML / CSS / JS はまずここ。",
        links: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/ja/" }],
      },
      {
        title: "Fabric Wiki",
        description: "Fabric Mod 開発の公式ドキュメント。",
        links: [{ label: "Fabric Wiki", url: "https://fabricmc.net/wiki/" }],
      },
      {
        title: "Astro Docs",
        description: "このサイトでも使っている Astro の公式ドキュメント。",
        links: [{ label: "Astro Docs", url: "https://docs.astro.build/ja/" }],
      },
    ],
  },
  {
    label: "データ・ツール",
    items: [
      {
        title: "Minecraft Wiki",
        description: "ゲーム内データの確認に。",
        links: [{ label: "Minecraft Wiki", url: "https://ja.minecraft.wiki/" }],
      },
      {
        title: "misode.github.io",
        description: "データパック / ワールド生成関連のジェネレーター群。",
        links: [{ label: "misode.github.io", url: "https://misode.github.io/" }],
      },
      {
        title: "(プレースホルダー)よく使うデータ",
        description: "よく参照するデータへのリンクをここに追加。",
        links: [{ label: "example.com", url: "https://example.com/" }],
      },
    ],
  },
  {
    label: "コミュニティ・配布先",
    items: [
      {
        title: "Modrinth",
        description: "Mod の主な配布先プラットフォーム。",
        links: [{ label: "Modrinth", url: "https://modrinth.com/" }],
      },
      {
        title: "Invite Links",
        description:
          "参加しているコミュニティへの招待リンク集。クリックで一覧を表示。",
        details:
          "参加しているコミュニティ・サーバーへの招待リンク集です。(プレースホルダー:実際のサーバーに合わせて追記・編集してください)",
        links: [
          {
            label: "やまゆーの Discord サーバー",
            url: "https://discord.gg/yGJh3SjyV",
            description: "自分のコミュニティサーバー",
          },
          {
            label: "(プレースホルダー)コミュニティ A",
            url: "https://example.com/",
            description: "参加しているサーバーの説明",
          },
          {
            label: "(プレースホルダー)コミュニティ B",
            url: "https://example.com/",
            description: "参加しているサーバーの説明",
          },
        ],
      },
    ],
  },
];
