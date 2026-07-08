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
| Works (Featured / Works) | `src/data/works.ts` - Add one entry to the array. Set `featured: true` to show it on the home page (4 items recommended). |
| Videos | `src/data/videos.ts` - Add the YouTube video ID and title (about 3 items recommended). |
| Social links | `src/data/links.ts` |
| Resources | `src/data/resources.ts` |
| Notes | Add `src/content/notes/*.md` files (frontmatter: `title` / `date` / `description`). |
| Profile text | Hero section in `src/pages/index.astro` |

To use work icon images, place them in `src/assets/works/`, import them in `works.ts`, and pass them to `icon`. If omitted, an initial-letter tile is shown.

## Pre-Publish Checklist

- [ ] `src/data/works.ts` - Review the 3 work descriptions marked with `TODO` comments (CarpetSuppression / worldEdit-RegexSupport / minecraft-server-launcher).
- [ ] `src/data/resources.ts` - Replace placeholder links.
- [ ] `src/pages/index.astro` - Adjust the profile text and avatar image.
- [ ] `public/CNAME` - Set the actual custom domain (currently `example.com`).
- [ ] `astro.config.mjs` `site` - Set the actual domain URL.
- [ ] `src/content/notes/markdown-sample.md` - Sample article for display checks; delete it if unnecessary.

## Deployment

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`) to build and publish the site to GitHub Pages.

Initial repository setup:
1. In the GitHub repository, set **Settings -> Pages -> Source** to **GitHub Actions**.
2. Point the custom domain DNS (A records or CNAME) to GitHub Pages.
