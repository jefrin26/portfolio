# AI Context — Portfolio

This file is for AI agents working on this repo. It captures the things a
human would normally tell you before you start touching anything. Read this
before making changes.

## The #1 gotcha: two codebases, one site

This repo contains **two separate implementations** of the same portfolio:

| Path | Purpose | Status |
| :--- | :------ | :----- |
| `static/` | The **real, deployed** site (plain HTML/CSS/JS) | ACTIVE — edit this |
| `src/` | An Astro version | NOT deployed — reference only |

- The live site at https://jefrin26.github.io/portfolio/ is served from the
  `host` branch (static files at repo root). See "Deployment flow" below.
  A GitHub Actions workflow on `main` also exists but is the **old** method.
- **Never "fix" the site by editing `src/`** — changes there will never go
  live. If you edit `src/`, it's only for keeping the reference version in
  sync, and the user must be told that it does not affect the deployed site.
- When in doubt, the source of truth for live content is `static/index.html`.
  Note: `src/data/site.ts` is NOT synced with `static/index.html` — do not
  assume they match.

## Deployment flow

There are **two ways** the site gets hosted; the `host` branch is the one
currently used:

1. **`host` branch (current method)** — hosts via GitHub Pages
   "Deploy from a branch" (repo settings → Pages → Source: Deploy from a
   branch → `host` / root). The branch contains only the static site at the
   repo **root** (`index.html`, `css/`, `js/`, `favicon.svg`, `.nojekyll`).
   - After editing files in `static/` on `main`, **copy them to the `host`
     branch at root** and push `host` to publish. This is a manual step — the
     user does it, or an AI must do it when asked.
   - The `host` branch deliberately has NO Astro project, NO `src/`, NO
     Actions workflow.
2. **GitHub Actions (old method)** — `.github/workflows/deploy.yml` on `main`
   publishes `./static`. Still present on `main` but superseded by the `host`
   branch approach. Don't assume a push to `main` alone publishes the site.

### Sync `static/` → `host` branch (the usual publish step)

1. Edit + commit on `main` (working copy in `static/`).
2. `git checkout host`
3. Copy changed files: `cp -r static/index.html static/css static/js static/favicon.svg .`
4. Commit + push: `git push origin host`
5. GitHub Pages picks it up automatically (keep `.nojekyll`).

The `src/` Astro version never gets built or deployed. Do not add CI steps
for it without asking.

## Owner / persona facts (Jefrin)

Use these for any content changes; do not guess or invent:

- Name: Jefrin (handle: `jefrin26`)
- Role: Network Engineer — final-year B.Tech IT (class of 2027), Kanyakumari, TN
- Email: jefrin.j@outlook.com
- GitHub: https://github.com/jefrin26 · LinkedIn: https://www.linkedin.com/in/jefrin--/
- Tagline: "Final-year B.Tech IT student engineering networks that stay up —
  learning Cisco IOS, automating with Python, and building apps with Flutter."
- CCNA: in progress (status shown as such on the site — do not mark as earned)
- Availability: "Open to network roles & internships"
- Stats used on site: 1.4 yrs internship, 99.9% uptime, 24/7 always-on
- Projects: Camber (F1 tire health dashboard, Python), React Quiz Engine

## Design conventions (match these when editing)

- Aesthetic: terminal / CLI / network-ops theme. Monospace (`mono`) labels,
  `❯` prompt markers, LED-style dots, status-bar footer ("all systems
  operational"), uptime references, section headers like `##` headings.
- All copy is in `static/index.html`; styles in `static/css/main.css`;
  small JS bits (year, typing effect, etc.) in `static/js/main.js`.
- The Astro version (`src/`) mirrors the same theme via Tailwind v4 + global.css.

## Commands

- Dev server (background mode — use this, never a blocking `astro dev`):
  `astro dev --background`
- Manage it: `astro dev stop` / `astro dev status` / `astro dev logs`
- `npm run check` runs `astro check` (type-checking for `src/` only).
- Node >= 22.12.0 required.

## Gotchas / history

- A CNAME existed and was removed (repo does not use a custom domain).
- There is no test suite in this repo.
- Do not commit secrets. The repo is public (GitHub Pages).
- `static/index.html` is the only place to edit live content — search it
  before assuming where content lives.
- If asked to "add a page" or "make a component", clarify whether it's for
  the deployed static site or the reference Astro version first.