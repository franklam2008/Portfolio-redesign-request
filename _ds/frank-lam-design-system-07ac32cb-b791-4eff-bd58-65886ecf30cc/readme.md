# Frank Lam — Design System

A from-scratch design system for **Frank Lam's personal portfolio** — a software
engineer's site. No existing codebase, Figma file, or brand guide was provided;
the only supplied asset is a wordmark logo (`assets/logo-frank-wordmark.png`).
Everything else here (palette, type scale, components, UI kits) was designed
fresh based on direction from Frank: monospace-forward/technical feel, warm
neutral palette, "FL"/wordmark identity, software-engineer audience.

**Sources provided:** one image asset (wordmark logo, lowercase "frank" in a
bold custom display face). No GitHub repo, Figma file, or existing site was
attached. If Frank has a live site, repo, or Figma to hand over, re-run this
skill with those attached and the system should be rebuilt from that ground
truth instead of the choices below.

## Index

- `styles.css` — root stylesheet, `@import`s everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `assets/` — `logo-frank-wordmark.png` (provided logo)
- `components/core/` — Button, Tag, Card
- `components/forms/` — Input
- `components/navigation/` — NavLink
- `ui_kits/homepage/` — full homepage recreation
- `ui_kits/case-study/` — project/case-study page recreation
- `guidelines/` — specimen cards for the Design System tab (Colors, Type, Spacing, Brand)
- `SKILL.md` — portable skill file for use in Claude Code

## Content fundamentals

- **Voice:** first person, plain-spoken, low-ceremony. Frank talks about his
  own work directly — "I build," "I shipped," "I'm currently" — not third-person
  bio-speak ("Frank is a software engineer who...").
- **Casing:** sentence case everywhere. No title-case headers, no ALL CAPS body
  copy. All-caps is reserved for tiny UI labels (nav items, eyebrow tags,
  metadata) at small size + wide letter-spacing — a UI convention, not a
  writing-voice convention.
  - Example headline: `Software engineer, based in San Francisco.`
  - Example eyebrow label: `PROJECTS` / `NOW BUILDING`
- **Tone:** dry, confident, unadorned. No marketing adjectives ("revolutionary,"
  "seamless," "cutting-edge"). Describe what something *is* and *does*, briefly.
  - Good: "A CLI that diffs two Postgres schemas and generates the migration."
  - Avoid: "An innovative tool that seamlessly revolutionizes your database workflow."
- **Length:** short. Homepage intro is 1–2 sentences. Project descriptions are
  1 sentence + a stack line, not paragraphs. Case studies get more room but
  still favor short paragraphs and code/output over prose.
- **Punctuation/format:** periods at the end of full sentences, even in short
  headlines. En dashes for asides. Inline code in `monospace` for tool names,
  languages, commands.
- **Emoji:** none. This is a technical/dev-facing site; emoji would undercut
  the dry tone.
- **Pronouns:** "I" for Frank, "you" only in direct address (contact CTA:
  "Say hi" / "Get in touch"). No royal "we."

## Visual foundations

- **Palette:** warm neutrals — cream page background (`--cream-100`), sand
  surfaces, ink-brown text (never pure black `#000`, ink is a warm near-black
  `#1B1712`). One accent: a rust/terracotta (`--accent`, `#C1512F`), used
  sparingly for links, primary buttons, active states, and the one splash of
  color per screen. Semantic colors (moss green success, clay red danger, gold
  warning) exist but are rare — this is a portfolio, not a dashboard.
- **Type:** monospace-forward, single family (JetBrains Mono) carrying every
  role — display, body, UI, code — differentiated by size/weight/case rather
  than font-switching. This is a deliberate "everything is code" statement,
  fitting a software engineer's site. Body copy sits at 16–18px with generous
  1.6 line-height for readability despite the monospace grid; headlines use
  tight tracking (`-0.02em`) and tight leading; small UI/meta labels use wide
  letter-spacing + uppercase.
- **Backgrounds:** flat cream/sand fields only. No photography-heavy hero, no
  gradients, no repeating patterns/textures. The only imagery is project
  screenshots (framed in a browser-chrome or device card) and the one logo
  asset. Flat and quiet by design — the code and copy carry the visual weight.
- **Animation:** minimal and functional, never decorative. Short (120–280ms)
  ease-out transitions (`--ease-standard`) on hover/focus/press only — color
  shifts, small translateY on card hover, underline draw-in on links. No
  entrance animations, no bouncing, no looping motion.
- **Hover states:** primary buttons darken (`--accent` → `--accent-hover`);
  secondary/ghost buttons and cards gain a subtle background tint
  (`--surface-raised`/`--sand-300`) and a 1px border shift, sometimes a 2px
  upward nudge. Links get an underline draw or color shift to `--accent-hover`.
- **Press/active states:** darken one step further (`--accent-active`) plus a
  ~1px downward shift — a "pressed into the page" feel, no scale/shrink
  transforms.
- **Borders:** hairline (1px) borders in `--border-subtle`/`--border-default`
  used constantly — on cards, inputs, tags, dividers — instead of shadows, to
  keep the flat/paper feel. Borders darken to `--border-strong` on
  hover/focus of interactive containers.
- **Shadows:** very restrained. `--shadow-sm` only appears on raised
  interactive surfaces on hover (cards, dropdowns) — never a default resting
  shadow. No inner shadows. No colored/glow shadows.
- **Corner radii:** small and consistent — `--radius-sm` (3px) on tags/inputs,
  `--radius-md` (6px) on buttons/cards. No pill buttons except the one true
  pill use-case, status/tag chips (`--radius-pill`). Never fully rounded
  "bubble" cards.
- **Cards:** flat cream/sand fill, 1px `--border-subtle`, `--radius-md`, no
  default shadow, no colored left-border accent strip. On hover: border
  darkens + very light shadow + tiny lift. This is the opposite of the
  "shadow + rounded corner + colored left border" AI-slop card pattern —
  intentionally flatter and more paper-like.
- **Transparency/blur:** essentially unused. No frosted-glass panels, no
  backdrop-blur. The one exception would be a sticky nav bar gaining a subtle
  translucent cream background + hairline border on scroll, for legibility
  over content — not a decorative glass effect.
- **Imagery color vibe:** project screenshots are shown true-to-source (no
  color grading applied by the design system) inside a neutral browser-chrome
  frame on a sand/cream mat — kept calm and desaturated relative to the accent
  color, so the rust accent still reads as *the* color on the page.
- **Layout:** single-column, generous max-width (`--container-max` 880px for
  reading, `--container-wide` 1200px for project grids), left-aligned text
  (no centered hero blocks). Sticky top nav, minimal — logo/name left, 3–4
  nav links right. Section spacing is large and consistent
  (`--space-8`/`--space-9`) — whitespace, not dividiers, separates sections.

## Iconography

- No icon set was provided. This system uses **Lucide** (CDN,
  `unpkg.com/lucide-static` or `lucide-react`), a stroke-based icon set that
  matches the technical/monospace tone — thin (1.5–2px) strokes, no fill,
  24×24 grid, sized down to 16–18px inline with text.
- Icons are used sparingly: external-link arrows, a github/mail glyph in
  contact links, a small chevron for expandable sections. Never decorative
  icon rows, never icon-only nav (always paired with a text label).
- No emoji anywhere (see Content fundamentals). No unicode-symbol icons.
- The only "custom" mark is the provided wordmark logo image
  (`assets/logo-frank-wordmark.png`) — used as-is, never redrawn or
  approximated. Where a plain mark is needed and the image doesn't fit
  (e.g. favicon-scale contexts), fall back to the initials **"FL"** set in
  `--font-mono` `--weight-bold`, not a redrawn version of the logo.

## Intentional additions

No source defined a component inventory, so a small standard set was
authored, sized to what a one-person portfolio actually needs — not a full
app component library:

- **Button** — primary/secondary/ghost actions (contact CTA, "view project").
- **Tag** — tech-stack chips on project cards, filter chips.
- **Card** — project/case-study preview card.
- **Input** — the one form control needed, for a contact form.
- **NavLink** — top-nav link with active/hover state.

Left out on purpose: Dialog, Toast, Tooltip, Select, Checkbox/Radio/Switch,
Avatar, Tabs — none of these appear in a static personal portfolio; adding
them would be inventing UI Frank doesn't need.

## Fonts note

JetBrains Mono is loaded from Google Fonts CDN (see `tokens/fonts.css`) —
not self-hosted binaries, since no font files were provided. If Frank has a
licensed/preferred font (or wants the files self-hosted), swap
`tokens/fonts.css` for local `@font-face` rules.
