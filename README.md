# rs256 Portfolio

rs256(やまゆー)のポートフォリオサイト。**Astro + TypeScript + Tailwind CSS** 製、GitHub Pages でホスティング。

## 開発

```sh
npm install
npm run dev      # 開発サーバー (http://localhost:4321)
npm run build    # 本番ビルド (dist/)
npm run preview  # ビルド結果のプレビュー
```

## コンテンツの更新方法

| 更新したいもの | 編集するファイル |
| --- | --- |
| 作品(Featured / Works) | `src/data/works.ts` — 配列に 1 エントリ追記。`featured: true` でトップに表示(4件推奨) |
| 動画(Videos) | `src/data/videos.ts` — YouTube の動画 ID とタイトルを追記(3件程度推奨) |
| SNS リンク | `src/data/links.ts` |
| リソース集 | `src/data/resources.ts` |
| 記事(Notes) | `src/content/notes/*.md` を追加(frontmatter: `title` / `date` / `description`) |
| 自己紹介文 | `src/pages/index.astro` のヒーローセクション |

作品アイコン画像を使う場合は `src/assets/works/` に置き、`works.ts` で `import` して `icon` に渡す(省略時は頭文字タイルが表示される)。

## ⚠️ 公開前に確認・差し替えるもの

- [ ] `src/data/works.ts` — `TODO` コメント付きの作品説明 3 件(CarpetSuppression / worldEdit-RegexSupport / minecraft-server-launcher)を確認
- [ ] `src/data/resources.ts` — プレースホルダーのリンク
- [ ] `src/pages/index.astro` — 自己紹介文の調整とアバター画像(現在は「や」のタイル)
- [ ] `public/CNAME` — 実際のカスタムドメイン(現在 `example.com`)
- [ ] `astro.config.mjs` の `site` — 実際のドメイン URL
- [ ] `src/content/notes/markdown-sample.md` — 表示確認用サンプル記事(不要なら削除)

## デプロイ

`main` に push すると GitHub Actions(`.github/workflows/deploy.yml`)が自動でビルドして GitHub Pages に公開する。

初回のみリポジトリ設定が必要:
1. GitHub リポジトリの **Settings → Pages → Source** を **GitHub Actions** に変更
2. カスタムドメインの DNS(A レコード or CNAME)を GitHub Pages に向ける
