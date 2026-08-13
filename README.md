# Portfolio

Personal portfolio site for Jefrin — Network Engineer (final-year B.Tech IT).

## Deploying

GitHub Pages serves the repo root directly (branch deployment, no build step):

1. Repo settings → **Pages**
2. Source: **Deploy from a branch** → branch `main` → folder `/ (root)`

`.nojekyll` at the root stops Jekyll processing, so `index.html`, `css/`,
`js/`, and `favicon.svg` are served as-is at
`https://jefrin26.github.io/portfolio/`.

## Editing

All content lives in `index.html`. Edit → commit → push → auto-deploys.