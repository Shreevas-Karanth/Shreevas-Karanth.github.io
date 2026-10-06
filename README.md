# Shreevas M Karanth — Portfolio

A single-page portfolio built with [Astro](https://astro.build), deployed to GitHub Pages by GitHub Actions.

Live at **https://shreevas-karanth.github.io**

```
src/
  data/profile.ts         YOUR PERSONAL DETAILS (email, phone, links, résumé)  <- edit this
  pages/index.astro       the page: lists the sections in order
  layouts/Base.astro      <head>, nav, footer, theme toggle
  components/*.astro      one file per section (Hero, About, WhatIDo, ProblemsSolved,
                          Architecture, Approach, Experience, Leadership, AIImpact, Contact)
  styles/global.css       all styles, light + dark theme
public/                   files copied as-is (e.g. resume.pdf)
.github/workflows/deploy.yml   builds and publishes on every push to main
```

## Edit content

- **Contact details and links:** `src/data/profile.ts`. Any value left as `""` is hidden.
- **Section text:** open the matching file in `src/components/`. It's plain HTML.
- **Section order:** reorder the components in `src/pages/index.astro`. If you add a
  section to the nav, update the links in `src/layouts/Base.astro`.
- **Résumé button:** put your PDF at `public/resume.pdf` and set `resume: "/resume.pdf"` in `profile.ts`.

## Run locally

Requires Node 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # production build into dist/
npm run preview   # serve the built dist/ locally
```

## Publish on GitHub Pages

One-time setup:

1. On GitHub, open the **Shreevas-Karanth.github.io** repository.
2. Go to **Settings → Pages → Build and deployment** and set **Source: GitHub Actions**.

After that, every push to `main` builds the site and publishes it. Progress is in the repo's **Actions** tab.

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Custom domain (optional)

Add a file `public/CNAME` that contains just your domain (e.g. `shreevas.dev`). Set the same domain in
**Settings → Pages → Custom domain**, point a `CNAME` DNS record to `shreevas-karanth.github.io`,
and change `site` in `astro.config.mjs` to your domain.
