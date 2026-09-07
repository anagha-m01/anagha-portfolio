# Anagha M — Portfolio

A personal portfolio site for Anagha M (AI Engineer), built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack

- **React 19 + Vite** — app shell and build tooling
- **Tailwind CSS v4** — theme tokens defined in `src/index.css` (`@theme` block)
- **Framer Motion** — the hero pipeline animation, reveal-on-scroll transitions
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Content

All resume-derived content (experience, projects, skills, education) lives in
one place: `src/data/resumeData.js`. Edit that file to update copy — the
components render straight from it, so there's no need to touch JSX for
text changes.

## Structure

```
src/
  components/     one component per section (Hero, Experience, Projects, ...)
  data/           resumeData.js — single source of truth for content
  index.css       Tailwind v4 theme tokens + global styles
public/
  Anagha_M_Resume.pdf   linked from the hero "Resume" button — replace with
                        an updated resume export whenever the CV changes
  favicon.svg
```

## Deploying

This is a static Vite build, so it deploys to any static host:

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build`, then publish the `dist/` folder
  (e.g. via `gh-pages` or a deploy workflow). If hosting under a subpath
  (`username.github.io/repo-name`), set `base: '/repo-name/'` in
  `vite.config.js`.

## Notes

- The contact form opens the visitor's email client via a `mailto:` link —
  there's no backend. To collect submissions instead, wire the form to a
  service like Formspree, Resend, or a small serverless function.
- Update `public/Anagha_M_Resume.pdf` whenever the résumé changes; the file
  name is what the hero's "Resume" button links to.
- Colors, fonts, and spacing tokens are centralized in the `@theme` block
  at the top of `src/index.css`.
