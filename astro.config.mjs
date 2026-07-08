// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// TODO: カスタムドメイン確定後に site を実ドメインへ差し替える(public/CNAME も同様)
export default defineConfig({
  site: "https://example.com",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
