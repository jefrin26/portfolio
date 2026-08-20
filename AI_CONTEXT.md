# AI Context — Portfolio

This file is for AI agents working on this repo. It captures the things a
human would normally tell you before you start touching anything. Read this
before making changes.

## Architecture (read this first)

| Path              | Purpose                                                            | Status    |
| :---------------- | :----------------------------------------------------------------- | :-------- |
| `src/`            | Astro source — **the only place to develop**                       | ACTIVE    |
| `src/data/*.json` | **All site content** (text) — edit here for any content change     | ACTIVE    |
| `static/`         | **Generated output** of `npm run build` — NEVER hand-edit          | GENERATED |
| `host` branch     | Published site (static files at repo root), served by GitHub Pages | DEPLOY    |

- The live site at https://jefrin26.github.io/portfolio/ is served from the
  `host` branch.
- **Never edit `static/` by hand.** It is a build artifact — any manual edit
  is wiped on the next `npm run build`. The old hand-crafted
  `static/css/main.css` + `static/js/main.js` were replaced by the build.
- **Never edit `host` branch files directly.** Always: edit `src/` →
  `npm run build` → copy fresh output to `host` → push `host`.

## Deployment flow (publish step)

1. Edit `src/` (JSON for content) and commit on `main`.
2. `npm run build` → regenerates `static/`.
3. Copy to `host` branch:

   ```sh
   git checkout host
   cp -r static/index.html static/favicon.svg static/favicon.ico static/.nojekyll static/_astro .
   git add -A && git commit -m "Update site"
   git push origin host
   git checkout main
   ```

4. GitHub Pages picks it up automatically (`.nojekyll` is already present).

The old `.github/workflows/deploy.yml` (Actions deploy of `./static`) was
removed — the `host` branch method is the only deployment path.

## Content lives in JSON — mapping

| File                       | Controls                                                                                                                                                                                                                           |
| :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/site.json`       | Profile (name, handle, role, ccnaStatus, badges, tagline, bio, specializations, location, email, github, linkedin, availability, uptime, est), footer "built with" text, nav links, stats bar, about + contact section titles/text |
| `src/data/skills.json`     | Skills section: title, sub, categories with tags                                                                                                                                                                                   |
| `src/data/certs.json`      | Certs section: title, sub, items (name, issuer, year, status)                                                                                                                                                                      |
| `src/data/projects.json`   | Projects section: title, sub, items (name, command, summary, tags, links, topology labels)                                                                                                                                         |
| `src/data/experience.json` | Experience section: title, command line, items (hop, role, company, period, points)                                                                                                                                                |

Content changes are JSON-only. Component markup (`src/components/*.astro`)
is UI — leave it alone unless the user asks for design work.

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
- Colors are Tailwind theme tokens in `src/styles/global.css`
  (`rosso-*` red, `led-green/led-amber` LEDs, `navy-*` dark, `paper-*` light).
- Topology SVGs are components: `Topology.astro` (hero) and
  `MiniTopology.astro` (per-project, labels come from `projects.json`).
- Scroll-reveal, active-nav highlighting, theme toggle and dynamic year are
  handled by the `<script>` in `Layout.astro` + `Navbar.astro`.
- **The design is deliberate and the user likes it — do not redesign, do not
  restyle, do not add UI without being asked.**

## Commands

- Dev server (background mode — use this, never a blocking `astro dev`):
  `astro dev --background`
- Manage it: `astro dev stop` / `astro dev status` / `astro dev logs`
- `npm run check` — `astro check` type-check (must pass before finishing)
- `npm run format` / `npm run format:check` — prettier (with
  `prettier-plugin-astro`); run `format` before finishing
- `npm run build` — generates `static/` (the deployable site)
- Node >= 22.12.0 required. If `node_modules` is missing, run `npm install`.

## What the user means by these words

- **"run" / "run it"** → run the dev server **locally** only
  (`astro dev --background`). Do NOT build, do NOT push, do NOT touch `host`.
- **"host" / "publish" / "deploy"** → only then: `npm run build`, copy fresh
  output from `static/` to the `host` branch, push `host` (and `main` if it
  has uncommitted work).

## Gotchas / history

- A CNAME existed and was removed (repo does not use a custom domain).
- There is no test suite in this repo; `npm run check` is the gate.
- Do not commit secrets. The repo is public (GitHub Pages).
- Build output uses `base: '/portfolio'` (GitHub Pages project-site path).
- `public/` assets (favicons, `.nojekyll`) are copied into `static/` on build.
- When the user says "publish" or "deploy", they mean the `host` branch flow
  above — not the Actions workflow.
