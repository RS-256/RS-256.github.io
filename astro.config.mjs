// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// TODO: カスタムドメイン確定後に site を実ドメインへ差し替える(public/CNAME も同様)
export default defineConfig({
  site: "https://example.com",
  // PORT 環境変数があればそれを使う(プレビューツールとの共存用)
  server: { port: Number(process.env.PORT) || 4321 },
  image: {
    // Discord サーバーアイコンをビルド時に取り込んで最適化する
    domains: ["cdn.discordapp.com"],
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
