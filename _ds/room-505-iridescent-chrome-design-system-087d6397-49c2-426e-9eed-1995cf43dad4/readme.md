# Room 505 — "Iridescent Chrome" Design System

**Working name:** Iridescent Chrome. **Brand shown in the supplied artwork:** ROOM 505.

The unifying idea is not "retro" — it is a **material**: a polished, liquid surface that catches coloured light, floating on deep near-black. Everything in this system is a way of applying that material honestly: chrome-bevelled display type, iridescent liquid objects, restrained gradient buttons, film grain over ink.

## Sources given
- `uploads/Logo4454 HD.png` — 4096×3072 transparent PNG, the ROOM 505 chrome lockup (cyan/violet bevelled "ROOM" with a pink script "505" and swash underline). Trimmed and stored as `assets/logo-room505.png` (2354×1111) and `assets/logo-room505-1200.png` (web size).
- A written brand brief (colour palette, material techniques, typography, texture, two composition modes, things to avoid) supplied in the kickoff message, in Ukrainian.
- **No codebase, no Figma file, no slide deck, no font binaries and no photography were supplied.** Nothing here is reverse-engineered from a product; the component inventory is the standard from-scratch set, sized to the brief's two modes.

## Product context
Room 505 reads as a small identity / motion / interface studio (the brief describes both poster artwork and a "product UI mode" landing page: navbar with slash labels, hero with a short offer and a button, service/case cards, contact form). Two surfaces are therefore covered:
1. **Poster mode** — campaign and title artwork. Symmetric, centred, one big chrome line, lots of empty ink, optional starfield / scanlines / horizon grid.
2. **Product mode** — the studio's marketing site. Same colour and material code, asymmetric layout, liquid iridescent objects as decoration instead of poster symmetry, no neon grid.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, dry, physical. The studio talks about light, metal, surfaces and rooms — never about "solutions", "synergy" or "AI-powered". Sentences are short and declarative; a claim is followed by a concrete consequence.

- Yes: "Brands built like polished metal." / "We answer every brief within a day, and we say no clearly when we are not the right room."
- No: "We leverage cutting-edge design to unlock your brand potential."

**Person.** "We" for the studio, "you" for the reader. Never "I". Never third-person self-reference ("Room 505 believes…") outside the boilerplate line in the footer.

**Casing.**
- Display / hero lines: **UPPERCASE**, one to three words ("ROOM 505", "LAST LIGHT", "AFTER HOURS").
- Headings: uppercase or sentence case, but never Title Case Every Word.
- Body: sentence case, no exclamation marks.
- Slash labels: UPPERCASE, always ("/WORK/", "/NOW BOOKING").

**The slash label** is the system's verbal tic as much as a visual one: a section, nav item or piece of metadata is wrapped in slashes — `/SERVICES/` closed for structure, `/NOW BOOKING` open for running status. One to three words, no punctuation inside.

**Length.** Hero paragraph ≤ 2 sentences. Card body ≤ 20 words. Dialog body ≤ 2 sentences. Tooltips are 1–3 uppercase words. Buttons are verbs: "Book the room", "Send the brief", "Watch the reel".

**Numbers** are used sparingly and only when real (years lit, projects, hours). No invented percentages, no stat walls.

**Emoji: never.** The technical accent comes from mono slash labels and Lucide glyphs, not emoji. Unicode symbols are not used as icons either — only `/`, `·` and `—` as typographic separators.

---

## VISUAL FOUNDATIONS

**Background.** Always tinted near-black, never `#000`: `--ink-900 #0a0714` for pages, `--ink-800 #120a24` for cards, `--bg-sunken #07040f` for the footer. Large empty ink is the primary compositional device — more black space beats more effects.

**Colour.** One spectrum does all the light work: cyan `#4ce0ff` → indigo `#7c5cff` → magenta/pink `#ef4ea0`/`#ff4fb0`, optionally warming to amber `#ff8a3d` and gold `#ffc46b` for sunset compositions. It appears as a **fill** (text, blobs, switches, badges) and as **glow**, never as a full-page background wash. Interactive accent is the quieter, product-grade violet `--accent-500 #5b4fe0` / `--accent-400 #6a4ff0`. Text is lavender-white `#f4f0ff` with `--lav-400 #a89ec9` for secondary and `--lav-600` for muted. Semantic colours (`--success`, `--warning`, `--danger`) appear at 14–16% alpha behind a matching icon, never as a solid block.

**Type.** Display = heavy, wide-geometric uppercase (Archivo variable, width 112, weight 800/900) with tight `-0.035em` tracking for hero lines; body = Space Grotesk 16px / 1.6; labels = JetBrains Mono 11px uppercase at `0.18em` tracking. Scale: hero `clamp(3.5rem,9vw,8.5rem)` → display → h1 3rem → h2 2.125rem → h3 1.5rem → body 1rem → caption 0.8125rem → label 0.6875rem.

**Two material techniques, used deliberately:**
1. **Chrome bevel text** — multi-stop vertical gradient (white → cyan → white → violet → magenta → dark), a 0.6px white text-stroke, an angled white sheen ribbon in `screen` blend, plus a hue-matched outer bloom. For logos, poster titles, case-study titles. **One per view.**
2. **Liquid iridescent object** — organic blob/ribbon built from a conic spectrum gradient with an inner dark shadow, an inner white highlight and a sheen band; drifts slowly (18s). Purely decorative, one per composition, usually bleeding off an edge in product mode.

Buttons use neither: they get a smooth `--grad-accent` fill (or the spectrum for the single `chrome` variant), a bevel inset, and glow **only on hover**.

**Backgrounds & texture.** Film grain (`assets/grain.png`, 180px tile, `overlay` blend) sits over every dark composition: 5% in UI, 9% in poster mode, 14% for VHS treatments. Poster mode may add `assets/starfield.png`, 1-in-3px scanlines at 6%, and the perspective neon horizon grid (masked to fade upward). **No grid, no scanlines in product UI.** Imagery, when supplied, should be cool-toned, high-contrast, slightly grainy; warm grades only alongside the warm spectrum.

**Radii.** 4 / 8 / 12 / 18 / 28 / pill. Buttons, chips, badges, inputs and selects are pills; cards are 18px; dialogs 28px; textareas 12px; the organic `--radius-blob` is only for liquid objects. Nothing is sharp-cornered except full-bleed sections.

**Cards.** `--ink-800` under a white glass sheen (7% → 0%, 160°), a 1px `--border-hairline` (lavender at 8%), `--shadow-2`, and a top inset highlight. Interactive cards lift 3px, brighten the hairline to 14% and deepen to `--shadow-3`. Optional single-hue bloom (`--glow-cyan|indigo|magenta`) marks at most one card in a group. Cards never nest.

**Shadow vs glow.** On near-black, shadow does the separating (`--shadow-1/2/3`, all pure black at 50–80%) and glow does the signalling. Glow is always the same hue as the thing emitting it, always `-8px` spread inward so it reads as bloom rather than a halo ring. Inset bevels (`--shadow-inset-bevel`) give buttons their glossy edge.

**Transparency & blur.** Reserved for layers that sit *over* content: the sticky navbar (`--blur-nav` 18px over 72% ink), the dialog scrim (`--blur-glass` 14px over 76% sunken ink). Card "glass" is a gradient, not a backdrop filter — cheaper and steadier over grain.

**Borders.** Hairlines only: 8% (default), 14% (hover/focus surface), 24% (emphasis), plus `--border-accent` (violet at 55%) for focus and selection. No 2px borders, no coloured left-border accents.

**Layout.** `--content-max 1200px`, `--content-narrow 680px`, `--poster-max 960px`; gutters `clamp(20px,4vw,64px)`; section rhythm `--section-y clamp(72px,10vw,160px)` and `--section-y-poster` up to 220px. Spacing scale 4→192. Fixed elements: exactly one — the sticky navbar (76px). Toasts are fixed bottom-right; dialogs are fixed-centred. Poster compositions are centred and symmetric; product compositions are two-column and deliberately unbalanced (≈1.15fr / 0.85fr).

**Animation.** Fast and eased-out, never bouncy: `--dur-fast 160ms` for hover/colour/border, `--dur-base 240ms` for reveals and panels, `--dur-bloom 900ms` for a glow rising on load, `--dur-drift 18s` for the liquid morph loop. Easing is `cubic-bezier(.22,1,.36,1)` out and `cubic-bezier(.65,0,.35,1)` in-out. No springs, no scale-in entrances, no parallax.

**States.**
- Hover: surfaces brighten (white 3% → 7%), hairlines 8% → 14%, glows switch on. Never a colour change on text alone.
- Press: `translateY(1px) scale(.985)` at 90ms, glow stays.
- Focus: `--focus-ring` — 2px ink gap then 2px `--accent-300`; fields also get a 3px soft violet ring at 22%.
- Selected: translucent accent violet at 28% with `--border-accent`.
- Disabled: opacity 0.38, no glow, `not-allowed`.

**What to avoid.** Arcade neon everywhere; two chrome elements in one view; the horizon grid in product UI; gradient page backgrounds; a full-saturation spectrum behind text; drawn/illustrated SVG imagery.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) at its default 2px stroke, outline only. No icon font, no sprite sheet, no filled icon set, **no emoji, no unicode glyph icons.** ⚠️ *Substitution flagged:* the brief supplied no icon assets, so Lucide is the nearest neutral technical match. If Room 505 has its own set, drop the SVGs into `assets/icons/` and repoint `components/core/Icon.jsx`.
- **Delivery:** the `Icon` component lazy-loads `unpkg.com/lucide@0.441.0` once and renders the real Lucide geometry as inline SVG with `stroke="currentColor"`, so icons inherit text colour (or take a spectrum token). Names are kebab-case (`arrow-up-right`). Never inline hand-drawn SVG paths in a design.
- **Sizes:** 16 (inline, captions), 20 (default, buttons, lists), 24 (nav, card headers), 40+ only as a placeholder mark in an empty media slot.
- **Colour:** `currentColor` by default; `--spectrum-cyan` for informational accents; semantic hue inside toasts. Icons are never gradient-filled — gradients belong to type and liquid forms.
- **Logo:** the supplied ROOM 505 chrome lockup is the only brand mark, kept as a raster PNG with its baked-in bevel and glow. Do not recolour, outline, or rebuild it as type; place it on ink with clear space of at least half the mark's height. No mark was supplied for a monogram/favicon, so none exists — use the wordmark in the display face instead.
- **Illustration:** none supplied. The system's decorative vocabulary is the liquid object plus the generated textures `assets/grain.png` and `assets/starfield.png`. No illustration was invented.

---

## FONTS — substitution notice

⚠️ No font binaries were supplied. Current stand-ins, served from Google Fonts (`tokens/fonts.css`):

| Role | Substitute | What the brief asked for |
|---|---|---|
| Display | **Archivo** variable @ width 112, weights 600–900 | Bold geometric / semi-condensed sans with character |
| Body | **Space Grotesk** 400–700 | Clean modern grotesk, readable on dark |
| Mono / labels | **JetBrains Mono** 400–700 | Small technical uppercase labels |

**Please send the real display and text faces** (or name them) and we will swap the `@font-face` closure and the two type tokens.

---

## INDEX

**Root**
- `styles.css` — the only file consumers link; `@import`s everything below.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills entry point.
- `readme.md` — this file.

**Tokens** (`tokens/`): `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`, `base.css` (resets + `.ic-chrome`, `.ic-spectrum-text`, `.ic-grain`, `.ic-scanlines` utilities).

**Assets** (`assets/`): `logo-room505.png`, `logo-room505-1200.png`, `grain.png`, `starfield.png`.

**Components** (`components/`) — `window.Room505IridescentChromeDesignSystem_087d63`:
- `core/` — `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `Card`
- `brand/` — `ChromeHeading`, `LiquidBlob`, `SlashLabel`, `GrainOverlay`, `NeonGrid`
- `forms/` — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- `navigation/` — `Navbar`, `Tabs`
- `feedback/` — `Dialog`, `Toast`, `Tooltip`

*Intentional additions* (no source defined an inventory, so this is the standard from-scratch set) — plus five brand-specific primitives the brief explicitly asks for: `ChromeHeading`, `LiquidBlob`, `SlashLabel`, `GrainOverlay`, `NeonGrid`. `Icon` is an added wrapper so no design hand-rolls SVG.

**Guidelines / specimen cards** (`guidelines/`): colours (ink, spectrum, accent, text, semantic, gradients, surfaces), type (display, chrome, body, slash labels, scale), material (liquid, texture, elevation, radii, motion), spacing (tokens, in use), brand (logo, two modes).

**UI kits** (`ui_kits/`)
- `studio_site/` — product mode: `index.html` + `StudioSiteApp/Home/WorkDetail/Contact/Footer.jsx`. Interactive: filter chips, card → case study, form → toast, dialog.
- `poster/` — poster mode: `index.html` (chrome title), `poster-logo.html`, `poster-sunset.html`.

**Deliberately absent:** photography, case-study artwork, slide templates (no deck was supplied), and any invented logo variants.
