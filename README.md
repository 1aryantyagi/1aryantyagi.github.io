# Portfolio — Aryan Tyagi

Personal site for **1aryantyagi.github.io**, built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Prerequisites

- Node.js 20+ (recommended)

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs static files to `dist/`. The build copies `index.html` to `dist/404.html` so client-side routing works on GitHub Pages.

```bash
npm run preview
```

Serves the production build locally.

## Deploy (GitHub Pages)

1. In the repository **Settings → Pages**, set **Build and deployment** source to **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` runs `npm ci`, `npm run build`, and publishes `dist/` with **actions/deploy-pages**.

For a manual deploy, you can also push the contents of `dist/` to the branch GitHub Pages uses, but Actions is preferred.

## Project structure

- `src/App.tsx` — page shell, lazy-loaded GitHub section
- `src/data/resume.ts` — experience, projects, skills (edit copy here)
- `src/data/chatKnowledge.ts` — “Ask about Aryan” static knowledge base
- `public/Aryan_CV.pdf` — resume download

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Vite dev server          |
| `npm run build`| Typecheck + production build + `404.html` |
| `npm run preview` | Preview production build |

## Legacy site

The previous single-file site is preserved at `legacy/index.html` for reference only.
