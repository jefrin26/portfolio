# Portfolio

Personal portfolio site for Jefrin — Network Engineer (final-year B.Tech IT).

## Deployment (GitHub Pages)

The live site is the plain HTML/CSS/JS version in `static/`. The GitHub Actions
workflow (`.github/workflows/deploy.yml`) publishes it to
`https://jefrin26.github.io/portfolio/` — no build step required.

- Repo settings → Pages → Source: **GitHub Actions**
- Push to `main` (or trigger the workflow manually) to deploy

## Structure

| Path | What it is |
| :--- | :--------- |
| `static/` | **Deployed site** — `index.html`, `css/main.css`, `js/main.js` |
| `src/` | Alternate Astro version (kept for reference, not deployed) |

## Editing the deployed site

All content lives directly in `static/index.html` — edit, commit, push,
and the workflow redeploys automatically.
