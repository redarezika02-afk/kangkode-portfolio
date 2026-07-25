# Kangkode — Portfolio (SvelteKit)

Personal portfolio for **Reda Rezika** — fullstack developer. Built with SvelteKit
and prerendered to a fully static site, so it deploys anywhere.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build (static output)

```bash
npm run build      # outputs to ./build
npm run preview    # preview the production build locally
```

`./build` is a plain static site — HTML, CSS, JS, and assets. Upload it to any
static host.

## Deploy to Cloudflare Pages

Two easy options:

- **Git integration (recommended):** push this repo to GitHub/GitLab, create a
  Pages project, and set:
  - Build command: `npm run build`
  - Build output directory: `build`
- **Direct upload:** run `npm run build` and upload the `./build` folder in the
  Cloudflare Pages dashboard (or via `npx wrangler pages deploy build`).

No adapter change needed — `@sveltejs/adapter-static` already produces the right
output. (The same `./build` folder also works on Netlify, Vercel static, GitHub
Pages, S3, etc.)

## Editing content — no markup required

Everything is data-driven. You almost never touch the components.

| What you want to change                 | Edit this file                        |
| --------------------------------------- | ------------------------------------- |
| Name, bio, contact, stats, skills       | `src/lib/data/profile.js`             |
| Projects, cards, and case-study content | `src/lib/data/projects.js`            |
| Colors, fonts, spacing (design tokens)  | `src/app.css` (`:root` variables)     |
| Screenshots / favicon                   | `static/shots/`, `static/`            |
| CV download link                        | `profile.cv` in `src/lib/data/profile.js` |

> **CV:** the CV PDF is intentionally **not** committed (it contains a phone
> number) and is git-ignored. `profile.cv` is empty, so the contact section
> shows a **LinkedIn** button. To offer a direct download, host the PDF
> yourself (Google Drive / Dropbox / R2 / …) and paste the public URL into
> `profile.cv`.

### Add a new project

1. Drop screenshots into `static/shots/`.
2. In `src/lib/data/projects.js`, copy an existing project object and edit it.
   - For a **card only**, set `hasCaseStudy: false` and fill in `card`.
   - For a **full case study**, set `hasCaseStudy: true` and add `hero`, `facts`,
     `factTags`, and a `sections` array.
3. The `strata` strip uses `L(design, web, mobile, api, data, infra)` — pass
   `true` for each layer you personally owned.

Case-study pages are generated automatically at `/work/<slug>` and prerendered.

### Section block types (for `sections`)

- `overview` — intro copy + the "at a glance" facts sidebar
- `evolution` — a v1 vs v2 side-by-side + a migration table
- `browserGallery` — screenshots in a browser frame with captions
- `phones` — mobile screenshots in phone frames
- `grid` — a grid of feature/tech cards with icons

### Show a GitHub link

`profile.github` is empty by default (the link is hidden). Set it to a URL to
show the GitHub icon in the footer.

## Tech

SvelteKit 2 · Svelte 5 · Vite · `adapter-static`. Fonts: Plus Jakarta Sans +
JetBrains Mono (Google Fonts). No runtime dependencies — it's a static site.
