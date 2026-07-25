# Personal Website — Bassam El Rawas

A minimal, warm, single-page academic site. Plain HTML/CSS/JS — no build step,
no framework. Just edit and push.

```
Website/
├── index.html          ← all the content (edit the text here)
├── css/style.css       ← all the styling (colors, fonts, layout)
├── js/main.js          ← mobile menu, dark-mode toggle, footer year
└── assets/
    ├── profile.svg     ← placeholder → replace with profile.jpg
    ├── pub-placeholder.svg
    └── favicon.svg
```

## How to edit the content

Everything you need to change is in **`index.html`**, marked with
`<!-- PLACEHOLDER -->` comments:

- **Intro paragraph** — the `.lead` paragraph in the hero section.
- **Links** — EPFL profile, email, Scholar, GitHub, CV. Add/remove `<a class="btn">` tags.
- **Publications** — duplicate one `<li class="pub">` block per paper.
- **Teaching** — duplicate one `<li class="teach">` block per course.
- **Hobbies** — edit the four `.hobby` cards (swap emoji + text, add more).

### Add your photo
1. Drop a square image into `assets/` named `profile.jpg`.
2. In `index.html`, change `assets/profile.svg` → `assets/profile.jpg`.

### Add your CV
Drop `cv.pdf` into `assets/` (the CV button already points to `assets/cv.pdf`).

### Change the background image
The site uses a subtle warm background (`assets/background.svg`) with a
readability overlay on top. To use **your own photo** instead:
1. Put your image in `assets/` (e.g. `background.jpg`).
2. In `css/style.css`, find the `body` rule and change
   `url("../assets/background.svg")` → `url("../assets/background.jpg")`.
3. If text is hard to read over a busy photo, increase the overlay opacity:
   raise the `--bg-overlay` alpha values in the `:root` blocks (e.g. `.62` → `.75`).

### Change colors
Edit the `:root` block at the top of `css/style.css`. The main knobs are
`--accent` (terracotta) and `--accent-2` (amber). Dark-mode values live in
`:root[data-theme="dark"]`.

## Preview locally

Open `index.html` directly in a browser, or run a tiny server:

```bash
cd Website
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo named **`<your-username>.github.io`** (so the site lives at
   `https://<your-username>.github.io`).
2. Push these files to the repo's default branch:

   ```bash
   cd Website
   git init
   git add .
   git commit -m "Initial personal website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: `main` / root**. Save.
4. Wait ~1 minute, then visit `https://<your-username>.github.io`.

> To host under a project repo instead (e.g. `github.com/you/website`), the site
> will be at `https://you.github.io/website/` — the relative paths here already
> work for that too.
