# Nabajit Boro — Portfolio

Static site: **no build step**. Live on Netlify, source on GitHub.

## Where to keep this portfolio (cheat sheet)

| What | Where |
|------|--------|
| **Source code (edit here)** | `~/portfolio` on your Mac |
| **Git backup** | [github.com/nabajit-cpu/myPortfolio](https://github.com/nabajit-cpu/myPortfolio) |
| **Live website** | Your Netlify URL (e.g. `https://your-name.netlify.app`) |
| **Resume PDF** | `~/portfolio/assets/Nabajit_Boro_Resume.pdf` → commit → push |
| **Put link on resume** | Header line: `Portfolio: https://your-netlify-url.app` |
| **LinkedIn** | Featured → Add link → title “Portfolio” |
| **Cold email** | One line: `Portfolio: <url>` (optional; you already have email tool) |
| **Job portals** | Naukri / Instahyre “Website” field → same Netlify URL |

You do **not** need another folder — `~/portfolio` + GitHub + Netlify is enough.

## Optional features (on the site)

1. **Download resume** — Add `assets/Nabajit_Boro_Resume.pdf` (see `assets/PUT_RESUME_HERE.txt`). Button dims until the file exists.
2. **Case study** — Paytm hotels sync → CMS → booking (expandable on the page).
3. **Custom domain** — Netlify → Site configuration → Domain management → Add domain (e.g. `nabajitboro.com`) → follow DNS steps.

## Preview locally

```bash
cd ~/portfolio
python3 -m http.server 5173
# http://localhost:5173
```

## Deploy / update (Netlify + Git)

```bash
cd ~/portfolio
git add .
git commit -m "Update portfolio"
git push origin main
```

Netlify redeploys `main` automatically.

### First-time Netlify

1. [app.netlify.com](https://app.netlify.com) → Import **nabajit-cpu/myPortfolio**
2. Build command: **empty** · Publish directory: **`.`**
3. Deploy → copy the `*.netlify.app` URL into resume & LinkedIn

## Customize

| File | Change |
|------|--------|
| `index.html` | Copy, experience bullets, case study |
| `styles.css` | Colors (`:root`) |
| `main.js` | Email helper, resume availability check |
| `assets/Nabajit_Boro_Resume.pdf` | Your PDF resume |

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page content & sections |
| `styles.css` | Layout & theme |
| `main.js` | Email helper, GitHub repos, resume check |
| `netlify.toml` | Publish root for Netlify |
| `assets/` | Resume PDF lives here |
