# Nabajit Boro — Portfolio

Static single-page portfolio (no build step). Content aligned with your resume: Paytm Hotels, Jio, stack, Rubik project.

## Preview locally

```bash
cd ~/portfolio
python3 -m http.server 5173
# open http://localhost:5173
```

Or:

```bash
npx serve .
```

## Deploy

### Vercel

1. Push this folder to GitHub (e.g. `nabajit-cpu/portfolio`).
2. [vercel.com](https://vercel.com) → Import repo → Framework: **Other** → Output: root.
3. Deploy.

### Netlify

Drag the `portfolio` folder to [app.netlify.com/drop](https://app.netlify.com/drop), or connect Git with publish directory `.`.

### GitHub Pages

1. Repo → Settings → Pages → Source: **main** branch, folder **/ (root)**.
2. Site: `https://<username>.github.io/<repo>/`

## Customize

- Copy & links: `index.html` (contact section, meta description).
- Colors & motion: `styles.css` (`:root` variables).
- Animations: `main.js`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Structure & content |
| `styles.css` | Dark gradient / bento / glass UI |
| `main.js` | Scroll reveal, stat counters, cursor glow |
