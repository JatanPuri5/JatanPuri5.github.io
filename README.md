# Jatan Puri — Portfolio

A static, dependency-free portfolio site (plain HTML/CSS/JS — no build step, no npm install required).

## Run it locally

**Easiest:** just double-click `index.html` to open it in your browser.

**Recommended (so relative links behave exactly like production):**

Windows PowerShell:
```
cd path\to\portfolio
py -m http.server 3000
```
Then open http://localhost:3000

Mac/Linux:
```
cd path/to/portfolio
python3 -m http.server 3000
```

## What's inside

```
portfolio/
  index.html        → all page content and structure
  css/style.css      → design system (colors, type, layout, animation)
  js/main.js         → project/skills data + interactivity (nav, reveal animations, pipeline animation, copy email)
  assets/
    Jatan-Puri-Resume.pdf → your resume, wired to every "Resume" button
```

## Editing content

- **Projects, case studies, "More Experiments" cards, and skills** — edit the `projects`, `caseStudies`, `moreWork`, and `skillGroups` arrays at the top of `js/main.js`. The page re-renders from that data automatically.
- **Rotating hero role text** — edit the `roles` array in `js/main.js`.
- **Bio, headline, contact info, experience/education text** — edit directly in `index.html`.
- **Project screenshots** — drop image files into `assets/projects/` (folder already created), then in `js/main.js` set the `image` field on that project, e.g. `image: "assets/projects/bug-tracker-lite.png"`. It's `null` for all three projects right now, which shows a neutral placeholder mockup instead — add screenshots whenever you have real ones. Recommended: 1600×1000px or similar 16:10 crop, PNG or WebP, showing the actual app UI (not a stock photo).
- **Profile photo** — swap the `photo-placeholder` block inside `.about-photo` in `index.html` for an `<img>` tag once you have a headshot, e.g. `<img src="assets/profile.jpg" alt="Jatan Puri">`. Drop the image file in `assets/` first.
- **Resume** — replace `assets/Jatan-Puri-Resume.pdf` with an updated file of the same name, or update the `href` in the Resume buttons if you rename it.
- **Colors/fonts** — edit the `:root` variables at the top of `css/style.css`.
- **Contact form** — has no backend by design; it opens the visitor's email app with the message pre-filled (no fake "message sent" state, no hidden API key needed).

## Deploying

This is a static site, so it deploys anywhere with zero configuration:

- **Vercel / Netlify:** drag-and-drop the folder, or connect a GitHub repo — no build command needed (leave build command blank, output directory = `/`).
- **GitHub Pages:** push to a repo, enable Pages on the `main` branch root.

## Notes

- No fake stats, testimonials, or unverifiable claims are included — only what's in your resume and GitHub.
- Two project links (Real-Time Chat, Expense Tracker) point straight to their GitHub repos without invented feature lists — fill their descriptions in once you've confirmed exact details from the repos.
- Live demo links are left out since none currently exist. Add a `demo:` URL per project in `js/main.js` once you deploy one.
