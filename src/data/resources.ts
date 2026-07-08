/**
 * /resources に表示するリンク集。
 * 1 カード = 1 エントリ(ResourceItem)。
 * links が 1 件だけのカードはクリックで直接そのリンクを開き、
 * 複数あるカードはポップアップでリンク一覧を表示する(招待リンク集などに便利)。
 * TODO: プレースホルダーを含むので、よく使うサイト・データに差し替え/追記する。
 */

export interface ResourceLink {
  label: string;
  url: string;
  /** ポップアップの一覧に表示する補足(任意) */
  description?: string;
}

export interface ResourceItem {
  title: string;
  /** カードに表示する短い説明 */
  description: string;
  /** ポップアップ用の詳しい説明(省略時は description を表示) */
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
