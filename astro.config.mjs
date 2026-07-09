// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://rs256.net",
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
