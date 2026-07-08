/** SNS・外部プロフィールへのリンク */

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  /** astro-icon のアイコン名(simple-icons コレクション) */
  icon: string;
  /** ホバー時のブランドカラー(ライトテーマ) */
  color: string;
  /** ホバー時のブランドカラー(ダークテーマ)。黒系ブランドは明るい色に差し替える */
  darkColor?: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    username: "RS-256",
    url: "https://github.com/RS-256",
    icon: "simple-icons:github",
    color: "#181717",
    darkColor: "#f0f6fc",
  },
  {
    platform: "Modrinth",
    username: "rs256",
    url: "https://modrinth.com/user/rs256",
    icon: "simple-icons:modrinth",
    color: "#00af5c",
    darkColor: "#1bd96a",
  },
  {
    platform: "YouTube",
    username: "@RS65536",
    url: "https://www.youtube.com/@RS65536",
    icon: "simple-icons:youtube",
    color: "#ff0000",
    darkColor: "#ff4d4d",
  },
  {
    platform: "Discord",
    username: "discord.gg/yGJh3SjyV",
    url: "https://discord.gg/yGJh3SjyV",
    icon: "simple-icons:discord",
    color: "#5865f2",
    darkColor: "#7289da",
  },
  {
    platform: "X (Twitter)",
    username: "@RS131072",
    url: "https://x.com/RS131072",
    icon: "simple-icons:x",
    color: "#000000",
    darkColor: "#ffffff",
  },
];
