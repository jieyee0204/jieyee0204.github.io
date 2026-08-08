# Personal Homepage — Jie Yee Lim

## Overview
Academic personal website for Jie Yee Lim, a Quantitative Psychology PhD student at Georgia Institute of Technology, advised by Dr. Audrey Leroux.

## Tech Stack
- Static HTML/CSS (no framework, no build step)
- Designed for easy hosting on GitHub Pages or similar

## Structure
```
Website/
├── index.html          — About page: bio, research interests
├── research.html       — Research positions (GaTech, UPenn, Taiwan, CYCU)
├── publications.html   — Publications and Presentations (separate H2 for each)
├── teaching.html       — Teaching assistant experience (GaTech, Wharton/UPenn, CYCU)
├── travel-log.html     — Travel: stat strip + per-country photo grid
├── css/
│   └── style.css       — All styles; Georgia Tech navy (#003057) + gold (#b3a369) theme
├── js/
│   └── main.js         — Collapsible nav toggle for <=640px (shared by all pages)
├── assets/
│   ├── cv/Curriculum Vitae_Jie Yee Lim_August 2026.pdf  — linked from sidebar nav
│   └── img/
│       ├── profile.jpg — Profile photo (user must add manually)
│       └── travel/     — Travel photos for misc page
└── CLAUDE.md           — This file
```

## Design
- **Top-bar layout** (no sidebar): sticky bar with the "Jie Yee Lim" wordmark at the left
  and the nav (About / CV / Teaching / Misc) at the right
- Profile photo + name live in the `.intro` hero on `index.html` only
- Email/LinkedIn icons sit in the footer of every page
- Typography: Source Serif 4 (headings) + Inter (body), loaded from Google Fonts with
  system-font fallbacks — no build step required
- Design tokens live in `:root` in style.css; change the palette there, not inline
- Content column is capped at `--measure` (760px) for readability
- Nav order: About · Research · Publications · Teaching · Travel Log · CV
  (CV last, opens the PDF)
- Six nav items need ~637px for one row; below **660px** the nav collapses into a dropdown
  panel under the bar, toggled by `js/main.js`. Keep the `BREAKPOINT` constant in main.js in
  sync with the `@media` rule in style.css.
- Nav label length drives that breakpoint — measured minimums for the last section name were
  557px ("Travel"), 700px ("Personal Interests"), 637px ("Travel Log"). Re-measure and reset
  both the `@media` rule and `BREAKPOINT` after any rename; do not assume the row still fits.
- Nav labels take no leading article ("Travel Log", not "The Travel Log") — they render
  uppercase and an article reads awkwardly beside ABOUT / RESEARCH / TEACHING.
- Top bar and footer are duplicated in each HTML file — update **all five** when changing nav
- `.entry` cards are shared by research.html and teaching.html (formerly `.teaching-entry`)

## Gotchas
- The CV filename contains spaces — the `href` must stay percent-encoded (`%20`).
  If you rename the PDF, update the link in **all three** HTML files.
- Nav labels are long, so the desktop row is near capacity. It is verified one-row down
  to 660px, collapsing to the dropdown below 640px. If you add a sixth item or rename one
  to something longer, re-check widths at 660 / 900 / 1280px and raise the 640px
  breakpoint if the row collides.
- Job titles on research.html are factual and must match the CV exactly — do not reword a
  title to adjust tone. The Georgia Tech role is **Graduate Student Researcher**.
- Tone is instead controlled through the **bullet verbs**: "Support" / "Contributed to"
  rather than "Designed" / "Led". Jie Yee is a rising second-year still choosing a
  dissertation topic, so the page should describe contributions to Math Words and to
  Dr. Leroux's studies, never a personal research agenda. Keep first-person framing
  ("my research focuses on…") off this page.
- `.pub-list` is used on publications.html for both sections. Presentation titles are
  italicised via `.pub-title` (APA 7); journal article titles are not — there the
  `.pub-title` span wraps the journal name and volume instead.

## Key Info (from CV)
- **Name**: Jie Yee Lim
- **Email**: jieyee@gatech.edu
- **LinkedIn**: linkedin.com/in/jieyeelim
- **Education**: PhD GaTech (2025–), MS UPenn (2023–2024), BS CYCU Taiwan (2018–2022)
- **Research areas**: Psychometrics, IRT, multilevel modeling, measurement invariance, simulation studies, SEM, missing data

## Current Teaching (update each semester)
Listed newest-first (reverse chronological), matching CV convention:
- CEISMC Summer PEAKS — Camp Leader, Summer 2026
- PSYC 4031: Psychology Capstone — Spring 2026
- CS 8803: Quantitative Research Methods — Fall 2025

Not every entry is a TA-ship, so the role goes in the `.meta` line
("Camp Leader · Summer 2026"), not in a shared heading.

Teaching entries carry no prose descriptions — the CV holds the detail. When a course
title alone is ambiguous, add a `<div class="program">` line under `.meta` instead
(sentence case; uppercase wraps to three lines on phones).

New entries go at the **top** of their institution's group. Institutions themselves are
also ordered newest-first (GaTech → Wharton → CYCU).

## Adding Content
- **Travel photos**: Place images in `assets/img/travel/` named after the country
  (lowercase, hyphenated, no dates: `japan.jpg`), then add `<figure class="photo-card">`
  blocks in `travel-log.html`.
  - A country may appear **more than once** — the page is a log of trips, not a checklist
    of countries. When it does, filenames take the form `country-city.jpg`
    (`germany-berlin.jpg`, `germany-heidelberg.jpg`, `denmark-aarhus.jpg`).
  - Crop every photo to **4:3** before adding. Cards size to their photo's true ratio,
    so a 3:2 or 16:9 shot renders shorter than its neighbours and breaks the uniform grid.
  - Cards are ordered **newest first** by year and month; each caption carries a
    `.place` ("City, Country") stacked over a `.date` ("March 2024"). Insert new cards
    in chronological position, not at the end.
  - Photos keep their natural aspect ratio (no fixed card height, no cropping), so a
    row containing a portrait photo is taller than its landscape neighbours. Do not
    reintroduce `height`/`object-fit: cover` on `.photo-card img` — that was what
    silently cropped the portrait shots.
  - **HEIC/HEIF will not render in any browser except Safari** — iPhone photos must be
    converted to JPEG first. No ImageMagick or ffmpeg on this machine; convert with
    PowerShell + WPF `BitmapDecoder`/`JpegBitmapEncoder` (the Windows HEIF Image
    Extension is installed).
  - Resize to **1400px on the long side, quality 82**. Raw phone photos are ~4MB each;
    at 21 photos that is a 44MB page. The same set normalizes to 5.5MB.
- **Publications**: Add `<li>` entries to the `.pub-list` in `index.html`
- **Teaching**: Add `.teaching-entry` blocks in `teaching.html`
- **CV update**: Replace `assets/cv/Curriculum Vitae_Jie Yee Lim_August 2026.pdf`

## Notes
- Profile photo must be added manually (save LinkedIn headshot as `assets/img/profile.jpg`)
- Sidebar nav is duplicated across HTML files — any nav changes must be applied to all three pages

