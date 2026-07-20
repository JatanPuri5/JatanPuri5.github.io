# Jatan Puri Portfolio

A static GitHub Pages portfolio for Jatan Puri, built with plain HTML, CSS, and JavaScript. The site presents Jatan's software engineering background, freelance/project experience, selected repositories, technical skills, contact details, profile photo, and resume.

## Visual Design

The portfolio uses a light editorial developer-portfolio style:

- Warm off-white background with a subtle square technical grid
- Near-black typography with orange/coral accents
- Sticky compact navigation with active-section underline and scroll progress
- Centered hero, profile-led about section, teal experience bands, bordered project cards, compact skill cards, contact form, and dark footer
- Responsive layouts for desktop, tablet, and mobile

## File Structure

```text
portfolio/
  index.html
  css/
    style.css
  js/
    main.js
  assets/
    profile.jpg
    Jatan-Puri-Resume.pdf
  .nojekyll
  CNAME
  README.md
```

## Local Preview

Run the site through a basic local HTTP server:

```bash
py -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

On macOS/Linux, use:

```bash
python3 -m http.server 3000
```

## Editing Personal Information

Personal biography, contact details, resume links, and the main page structure live in `index.html`.

Project cards, project highlights, core expertise cards, technical skill groups, education cards, and the rotating hero roles are managed in `js/main.js`.

Visual tokens, layout, responsive behavior, and animations live in `css/style.css`.

## Editing Projects

Open `js/main.js` and edit the `projects` array. Each project supports:

- `number`
- `name`
- `category`
- `description`
- `points`
- `tags`
- `repo`

Only add a live demo link after a working public demo exists.

## Replacing Profile Photo

Replace `assets/profile.jpg` with a new image using the same filename. Keep the image optimized and avoid deleting the file, because `index.html` references it directly.

## Replacing Resume

Replace `assets/Jatan-Puri-Resume.pdf` with the updated resume using the same filename. Do not rename or corrupt the PDF unless you also update every resume link in `index.html`.

## GitHub Pages Deployment

This portfolio is deployable from the repository root on GitHub Pages. It has no build step, no backend, and no environment variables.

The custom domain is stored in `CNAME` and should contain only:

```text
jatanpuri.dev
```

Keep `.nojekyll` in the repository so GitHub Pages serves files exactly as expected.

## Update And Push

After editing and reviewing locally:

```bash
git add .
git commit -m "Redesign portfolio"
git push
```
