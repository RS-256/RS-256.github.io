# rs256 Portfolio

Portfolio site for rs256 (Yamayu). Built with **Astro + TypeScript + Tailwind CSS** and hosted on GitHub Pages.

## Development

```sh
npm install
npm run dev      # Development server (http://localhost:4321)
npm run build    # Production build (dist/)
npm run preview  # Preview the built site
```

## Updating Content

| What to update | File to edit |
| --- | --- |
| Works (Featured / Works) | `src/content/works.yaml` - Add one entry. Set `featured: true` to show it on the home page (4 items recommended). Categories are defined in `src/data/categories.ts`. |
| Videos | `src/data/videos.ts` - Add the YouTube video ID and title (about 3 items recommended). |
| About (intro / skills) | `src/data/about.ts` - Paragraphs and language/framework chips. |
| Social links | `src/data/links.ts` |
| Resources | `src/content/resources.yaml` |
| Notes | Add `src/content/notes/*.md` files (frontmatter: `title` / `date` / `description`). |
| Profile text | Hero section in `src/pages/index.astro` |

To use work icon images, place them in `src/assets/works/` and set `icon: ../assets/works/<name>.png` (path relative to `works.yaml`). If omitted, an initial-letter tile is shown.

## Pre-Publish Checklist

- [X] `src/content/works.yaml` - Review the 3 work descriptions marked with `TODO` comments (CarpetSuppression / worldEdit-RegexSupport / minecraft-server-launcher).
- [X] `src/content/resources.yaml` - Replace placeholder links.
- [ ] `src/pages/index.astro` - Adjust the profile text and avatar image.
- [ ] `public/CNAME` - Set the actual custom domain (currently `example.com`).
- [ ] `astro.config.mjs` `site` - Set the actual domain URL.
- [ ] `src/content/notes/markdown-sample.md` - Sample article for display checks; delete it if unnecessary.

## Deployment

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`) to build and publish the site to GitHub Pages.

Initial repository setup:
1. In the GitHub repository, set **Settings -> Pages -> Source** to **GitHub Actions**.
2. Point the custom domain DNS (A records or CNAME) to GitHub Pages.
