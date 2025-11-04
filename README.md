# tuanmtrinh.github.io (Vite + React)

This repo hosts a Vite + React portfolio and deploys with **GitHub Pages** via **GitHub Actions**.

## Local development

```bash
# Node 20+ recommended
npm install
npm run dev
```

## Build

```bash
npm run build
# output in ./dist
```

## Deploy on GitHub Pages

1. Push this repo to `tuanmtrinh/tuanmtrinh.github.io` on the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. The included workflow at `.github/workflows/pages.yml` will:
   - install deps
   - run `npm run build`
   - copy `dist/index.html` to `dist/404.html` (SPA fallback)
   - publish `dist/` to GitHub Pages.
4. After the workflow finishes, your site will be live at `https://tuanmtrinh.github.io/`.

> If you prefer deploying to a `gh-pages` branch, keep the `gh-pages` dev dependency and run `npm run deploy` from your local machine. For GitHub Actions deployment, the `gh-pages` package is not required.
