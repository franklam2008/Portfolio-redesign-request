# franklam.us

Frank Lam's portfolio. Static site (no build step): plain HTML pages that load React and
Babel from a CDN and render in the browser. Deployed to Vercel from this repo.

The design system (warm neutrals, JetBrains Mono, rust accent) was generated with Claude and
lives in `_ds/`. Don't edit it by hand unless you mean to change the design system.

## Run it locally

```bash
npx serve -l 8000
```

Then open http://localhost:8000. (`serve` understands clean URLs like `/projects`, the same
way Vercel does. `python -m http.server` doesn't.)

In Claude Code, `.claude/launch.json` already has this as the `portfolio-static` server.

## Where things live

| To change…                         | Edit                                                                  |
| ---------------------------------- | --------------------------------------------------------------------- |
| Any copy, projects, jobs, skills   | `content.js` (all text is data; pages just render it)                 |
| The resume                         | replace `assets/frank-lam-resume.pdf`, then update `content.js` to match |
| Header, footer, shared helpers     | `layout.jsx`                                                          |
| One page's layout                  | `index.html`, `projects.html`, `experience.html`, `contact.html`      |
| Focus styles, mobile breakpoints   | `assets/site.css`                                                     |
| Link-preview image (LinkedIn etc.) | `assets/og-image.png` (1200×630)                                      |
| URL rules, redirects               | `vercel.json`                                                         |

In `content.js` strings, `**double asterisks**` render as bold.

## Deploying

Push to `master` and Vercel deploys it to https://www.franklam.us. Pushes to any other
branch get a Vercel preview URL, which is the safest way to review a change first.

## Contact form

The form on `/contact` opens the visitor's email app with a prefilled message until you set up a
form service. To have it post directly instead:

1. Create a form at https://formspree.io (free tier is fine).
2. Paste its endpoint (`https://formspree.io/f/xxxxxxxx`) into `contactForm.formspreeEndpoint`
   in `content.js`.

## Notes and tradeoffs

- Pages are compiled in the browser by Babel standalone. That's simple, but it's the biggest
  remaining load-time cost. Precompiling the JSX at deploy time is the next performance step.
- Most styling is inline React (design-system components). Anything that needs a media query or
  `:focus-visible` goes in `assets/site.css`.
- Keep `content.js` and the resume PDF in sync; the resume is the source of truth for facts.
