# Implementation Plan — Portfolio Hardening & Polish

> A step-by-step, self-explanatory guide to take this portfolio from "talented single-author work-in-progress" to "production-grade, accessible, maintainable, and tested." Every step lists **what**, **why**, and **how to verify**.
>
> **Total estimated effort:** 18–24 hours of focused work, spread across 5 phases.
> **Phasing principle:** Foundation → Code Quality → UX/A11y → Performance & Ops → Content & DX. Each phase ends in a verifiable green state. Don't move on until the previous phase is green.

---

## Table of Contents

1. [Phase 1 — Foundation & Repo Hygiene](#phase-1--foundation--repo-hygiene)
2. [Phase 2 — Type Safety & Code Quality](#phase-2--type-safety--code-quality)
3. [Phase 3 — Accessibility & UX](#phase-3--accessibility--ux)
4. [Phase 4 — Performance, Security & Build Pipeline](#phase-4--performance-security--build-pipeline)
5. [Phase 5 — Content, Testing & DX](#phase-5--content-testing--dx)
6. [Phase 6 — Verification Checklist](#phase-6--verification-checklist)

---

## Phase 1 — Foundation & Repo Hygiene

> **Goal:** Remove dead code, lock down the toolchain, and create a clean slate. Every change here is reversible and safe.

---

### Step 1.1 — Delete dead migration scripts

**What:** Remove `fix_imports.ts` and `fix_imports_2.ts` from the project root.

**Why:** These are one-time refactor scripts that have already done their job (imports are now clean). Keeping them in the repo signals "work in progress" and confuses contributors. They also re-execute on every import if accidentally run, mutating source files.

**How to do it:**
```bash
git rm fix_imports.ts fix_imports_2.ts
```

**Verify:**
- [ ] `git ls-files | grep fix_imports` returns nothing
- [ ] `npm run build` still succeeds (no missing imports)
- [ ] `npm run dev` still serves the site

---

### Step 1.2 — Delete the abandoned Firebase plan

**What:** Delete `implementation_plan.md` at the project root (this is the file you're reading; we'll replace it with this polished version, but the original Firebase plan is dead).

**Wait — this IS the file.** This is the new implementation plan. So:
- The old Firebase plan must be in a different location, or it's already been replaced. Confirm by checking `git log -- implementation_plan.md`. If it's still tracked with the Firebase content, do `git rm implementation_plan.md` first, then proceed. If it's already gone or only contains this version, skip this step.

**Why:** The Firebase CMS plan is dead; the project ships static data. Dead docs rot and mislead future readers.

**How to do it (if old version present):**
```bash
git rm implementation_plan.md
```

**Verify:**
- [ ] No file with Firebase plan remains at root
- [ ] This new file is committed as `implementation_plan.md`

---

### Step 1.3 — Untrack the `dist/` folder

**What:** `dist/index.html` is currently tracked (visible in `git status`). Remove it from the index.

**Why:** `dist/` is in `.gitignore`, so it should never be committed. The current tracked state means every build shows a diff. Vercel builds from source, not from committed dist.

**How to do it:**
```bash
git rm -r --cached dist/
```

**Verify:**
- [ ] `git status` no longer shows `dist/` as tracked
- [ ] `git ls-files dist/` returns nothing
- [ ] `.gitignore` still has `dist` line
- [ ] Future builds don't pollute `git status`

---

### Step 1.4 — Remove empty folders

**What:** Delete `src/utils/` and `src/providers/` — both are empty.

**Why:** Empty tracked folders signal incomplete refactors and clutter the file tree. TypeScript and Vite don't need empty dirs to work.

**How to do it:**
```bash
# Empty folders won't be tracked by git, so just remove them locally.
# But verify they're actually empty first:
ls src/utils/
ls src/providers/

# If empty (or only contain hidden files), remove them:
rmdir src/utils/
rmdir src/providers/
```

> **Note:** Empty dirs in git aren't tracked at all — so this is a local cleanup, not a git operation. The reason to do it is for your own mental clarity when navigating the project.

**Verify:**
- [ ] `ls src/` no longer shows `utils/` or `providers/`
- [ ] `npm run build` succeeds
- [ ] `npm run dev` serves the site

---

### Step 1.5 — Add `.gemini/` and AI-tooling folders to `.gitignore`

**What:** Append `.gemini/`, `.cursor/`, `.windsurf/`, and any other local AI-tooling folder to `.gitignore`.

**Why:** These folders contain local LLM instructions and state that have no place in a portfolio repo. They're machine-specific.

**How to do it:**

Append to `.gitignore`:
```
# Local AI tooling folders
.gemini/
.cursor/
.windsurf/
.aider*
.continue/
```

**Verify:**
- [ ] `cat .gitignore | grep -E 'gemini|cursor|windsurf'` returns your new lines
- [ ] `git status` no longer shows `.gemini/` as untracked

---

### Step 1.6 — Rename the package

**What:** Change `"name": "react-vite-tailwind"` to `"name": "debargha-moriarty-portfolio"`.

**Why:** Generic names look unprofessional in `package-lock.json`, in Vercel logs, and in any third-party tools that read your package metadata.

**How to do it:** Edit `package.json`:
```json
{
  "name": "debargha-moriarty-portfolio",
  "private": true,
  "version": "1.0.0",
  ...
}
```

**Verify:**
- [ ] `npm run build` still works
- [ ] Vercel deployments continue to succeed (Vercel uses the project name, not `package.json`, so no break)

---

### Step 1.7 — Add an `engines` field

**What:** Pin Node.js and npm versions to avoid "works on my machine" issues.

**How to do it:** Add to `package.json`:
```json
{
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

**Verify:**
- [ ] `npm install` still works on your current Node version

---

### Step 1.8 — Add a `README.md`

**What:** Create a `README.md` at the project root.

**Why:** No one (including future-you) can land in this repo and know what it is, how to run it, or how to deploy it. The `implementation_plan.md` is for change history; the README is for orientation.

**How to do it:** Write a README with these sections:
1. **Title** — "Debargha Moriarty — Portfolio"
2. **One-paragraph description** — what this site is, who it's for
3. **Stack** — bullet list of major dependencies (React 19, Vite 8, Tailwind 4, Lenis, react-router 7, WebGL/Three-free)
4. **Local development** —
   - Prereqs (Node ≥ 20)
   - `npm install`
   - `npm run dev` → http://localhost:5173
   - `npm run build` → `dist/`
   - `npm run preview` → preview built output
   - `npm test` → run Vitest suite
5. **Deployment** — `vercel.json` handles it; push to main triggers a build; SPA rewrites route all paths to `/index.html`
6. **Architecture overview** — one paragraph on folder structure (`components/`, `pages/`, `hooks/`, `data/`, `styles/`)
7. **License & credits** — © 2026 Debargha Moriarty Studio; font credits (Fraunces by Undercase Type, Instrument Serif by Instrument, Inter Tight by Rasmus Andersson, JetBrains Mono)
8. **Contact** — studio@debarghamoriarty.com

**Verify:**
- [ ] `cat README.md | head` shows the title
- [ ] All commands in the README work

---

### Step 1.9 — Add a CHANGELOG.md

**What:** Create a `CHANGELOG.md` to track major changes.

**How to do it:** Use a simplified [Keep a Changelog](https://keepachangelog.com) format:
```markdown
# Changelog

## [Unreleased]
### Added
- (this implementation plan)
- Comprehensive test suite
- Full TypeScript types for all data

### Changed
- Tightened TypeScript (removed `any` in pages)
- Migrated site metadata to per-route configuration

### Fixed
- Accessibility: focus-visible outlines globally
- Accessibility: skip-to-content link
- Build: removed dead `gsap`/`three` chunk config

## [1.0.0] — 2026-06-XX
### Initial
- Original single-author portfolio
```

**Why this matters:** After several months, you won't remember when you did what. The git log gives you line-level diffs, but the changelog gives you the narrative.

**Verify:**
- [ ] File is committed

---

### **Phase 1 Done When:**

- [ ] `git status` is clean (no `dist/` showing as modified)
- [ ] `npm run dev` and `npm run build` both succeed
- [ ] `npm test` runs (even if no tests yet, the harness should still execute)
- [ ] `README.md` and `CHANGELOG.md` exist and are accurate
- [ ] The repo looks like a shippable project when you clone it fresh

---

## Phase 2 — Type Safety & Code Quality

> **Goal:** Replace `any` with real types, extract sub-components from page files, and eliminate the ref-merging hack. This phase is mostly mechanical — no behavior changes.

---

### Step 2.1 — Define types for `processData` and `studioData`

**What:** Create `src/data/types.ts` with explicit types for the data structures.

**Why:** Right now `Process.tsx` and `Studio.tsx` declare `m: any`, `e: any`, `f: any` etc. This defeats `strict: true`. The shapes are static — they should be typed once.

**How to do it:**

Create `src/data/types.ts`:
```typescript
export interface Movement {
  n: string;
  t: string;
  dur: string;
  desc: string;
  outputs: string[];
  tools: string;
  quote: string;
  bg: string;
}

export interface Engagement {
  t: string;
  d: string;
  from: string;
  dur: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ProcessData {
  movements: Movement[];
  engagements: Engagement[];
  faq: FAQ[];
}

export interface TeamMember {
  n: string;
  r: string;
  b: string;
  img: string;
}

export interface TimelineEvent {
  y: string;
  t: string;
}

export interface Belief {
  t: string;
  d: string;
  icon: string;
}

export interface Quote {
  q: string;
  a: string;
}

export interface StudioData {
  bio: string;
  team: TeamMember[];
  timeline: TimelineEvent[];
  clients: string[];
  beliefs: Belief[];
  quotes: Quote[];
}

export interface PressQuote {
  q: string;
  a: string;
  y: string;
}
```

Then in `processData.ts`:
```typescript
import type { ProcessData } from "./types";

export const processData: ProcessData = {
  // ... existing data
};
```

And in `studioData.ts`:
```typescript
import type { StudioData } from "./types";

export const studioData: StudioData = {
  // ... existing data
};
```

**Verify:**
- [ ] `npm run build` succeeds
- [ ] `npx tsc --noEmit` returns no errors
- [ ] Hover over data in your editor — autocomplete now works

---

### Step 2.2 — Replace `any` with proper types in pages

**What:** Sweep through `pages/Process.tsx`, `pages/Studio.tsx`, `pages/ProjectDetail.tsx`, `pages/Work.tsx`, `pages/Contact.tsx` and remove every `: any`.

**Specific replacements:**

**`pages/Process.tsx`:**
```typescript
// Before
function Movement({ m }: { m: any; i: number })
{movements.map((m: any, i: number) => (...))}
{engagements.map((e: any, i: number) => (...))}
{faq.map((f: any, i: number) => (....))}

// After
import type { Movement as MovementT, Engagement, FAQ } from "../data/types";

function Movement({ m, i }: { m: MovementT; i: number }) {...}
{movements.map((m, i) => (...))}
{engagements.map((e: Engagement, i: number) => (...))}
{faq.map((f: FAQ, i: number) => (....))}
```

**`pages/Studio.tsx`:**
```typescript
// Before
{beliefs.map((b: any, i: number) => (...))}
{clients.map((c: any) => (...))}
{quotes.map((q: any, i: number) => (...))}

// After
import type { Belief, Quote } from "../data/types";
{beliefs.map((b: Belief, i: number) => (...))}
{clients.map((c: string) => (...))}
{quotes.map((q: Quote, i: number) => (...))}
```

**`pages/Work.tsx`:**
```typescript
// Before
{p.tags.map((t: any, ti: number) => (...))}
: PROJECTS.filter((p: any) => p.tags.some((t: any) => t.toLowerCase().includes(filter.toLowerCase())))
{filtered.map((p: any, i: number) => (...))}

// After
import type { Project } from "../data/projects";
{p.tags.map((t, ti) => (...))}
: PROJECTS.filter((p: Project) => p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())))
{filtered.map((p, i) => (...))}
```

**`pages/ProjectDetail.tsx`:**
```typescript
// Before
{b.text?.split("").map((ch: any, idx: number) => (...))}
{b.items?.map((it: any, i: number) => {...})}
{p.tags.map((t: any) => (...))}
{p.blocks.map((b: any, i: number) => (...))}
{p.credits.map((c: any, i: number) => (...))}

// After — use the existing CaseBlock type
{b.text?.split("").map((ch, idx) => (...))}
{b.items?.map((it, i) => {...})}  // (after adding a StatItem type to data/types.ts)
{p.tags.map((t) => (...))}
{p.blocks.map((b, i) => (...))}
{p.credits.map((c, i) => (...))}
```

Also add to `data/types.ts`:
```typescript
export interface StatItem {
  label: string;
  value: string;
}

export interface CaseBlock {
  type: "image" | "image-pair" | "quote" | "text" | "stats" | "full-bleed";
  src?: string;
  src2?: string;
  caption?: string;
  text?: string;
  items?: StatItem[];
}
```
(Move from `data/projects.ts` to `data/types.ts` for cleaner separation.)

**`pages/Contact.tsx`:**
The local helper components don't have `: any` — verify by reading the file. Form state should be typed:
```typescript
const [form, setForm] = useState<{
  name: string; email: string; company: string;
  budget: string; timeline: string; message: string;
}>({...});
```
That's already typed via inference. No change needed.

**Verify:**
- [ ] `grep -rn ": any" src/` returns nothing (or only justified cases)
- [ ] `npx tsc --noEmit` returns no errors
- [ ] Editor autocomplete works on all data

---

### Step 2.3 — Extract sub-components from page files

**What:** Move inline sub-components out of `pages/*.tsx` into `components/*`.

**Specific moves:**

| From | To |
|---|---|
| `ProjectDetail.tsx` — `FullBleed`, `ImgBlock`, `ImgPair`, `QuoteBlock`, `TextBlock`, `StatsBlock`, `Block` | `components/work/case-blocks/` (one file each, or all in `case-blocks.tsx`) |
| `Contact.tsx` — `AvailCell`, `InputField`, `SelectField`, `SidebarBlock`, `FAQCard` | `components/contact/` |
| `Process.tsx` — `Movement`, `PricingCard`, `FAQItem` | `components/process/` |
| `Studio.tsx` — `BeliefCard`, `StudioQuote` | `components/studio/` |

**Why:** Page files should orchestrate. Sub-components that have their own props, state, or styling should be reusable.

**How to do it (example for `ProjectDetail.tsx`):**

1. Create `components/work/case-blocks/FullBleed.tsx`:
```typescript
import React from "react";
import { useParallax, useClipReveal } from "../../../hooks/motionUtils";
import type { CaseBlock } from "../../../data/types";

export const FullBleed = React.memo(function FullBleed({ b }: { b: CaseBlock }) {
  const parallax = useParallax<HTMLElement>(0.15);
  const clip = useClipReveal<HTMLElement>("h");
  return (
    <figure ref={(n) => { (parallax as any).current = n; (clip as any).current = n; }} className="my-20 md:my-32 -mx-6 md:-mx-10">
      ...
    </figure>
  );
});
```
2. Repeat for each.
3. In `pages/ProjectDetail.tsx`, import them:
```typescript
import { FullBleed, ImgBlock, ImgPair, QuoteBlock, TextBlock, StatsBlock } from "../components/work/case-blocks";
```

**Verify:**
- [ ] All pages still render identically
- [ ] `npm run dev` shows the same site
- [ ] Sub-components are exported as named exports (not default)
- [ ] `grep -c "React.memo" pages/` returns zero (all memoized components now in components/)

---

### Step 2.4 — Fix the ref-merging hack

**What:** Replace `(tilt as any).current = n; (reveal as any).current = n;` with a proper `mergeRefs` utility.

**Current pattern (5+ files):**
```typescript
ref={(n) => { (tilt as any).current = n; (reveal as any).current = n; }}
```

**How to do it:**

Create `src/hooks/useMergedRefs.ts`:
```typescript
import type { Ref, RefCallback } from "react";

/**
 * Combine multiple refs into one callback ref.
 * Useful when a component needs to attach several hooks to the same DOM node.
 */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && "current" in ref) {
        (ref as { current: T | null }).current = node;
      }
    });
  };
}
```

Then refactor hooks to **accept an optional external ref** instead of returning one. This is a bigger refactor, so the minimal fix is:

In each file, replace:
```typescript
const tilt = useTilt<HTMLDivElement>(8);
const reveal = useReveal<HTMLDivElement>(0.05 * i);
// ...
ref={(n) => { (tilt as any).current = n; (reveal as any).current = n; }}
```

with:
```typescript
const tilt = useTilt<HTMLDivElement>(8);
const reveal = useReveal<HTMLDivElement>(0.05 * i);
const mergedRef = mergeRefs(tilt, reveal);
// ...
ref={mergedRef}
```

**Verify:**
- [ ] No `(x as any).current = n` patterns remain
- [ ] Animations still work (the merged ref correctly drives both hooks)
- [ ] `grep -rn "as any" src/` returns no occurrences in components/

---

### Step 2.5 — Type the `as` prop on motion components

**What:** `Motion.tsx` has `as?: any` on `CharReveal`, `WordReveal`, `Scramble`. Replace with a proper union.

**How to do it:**
```typescript
// Before
as?: any;

// After
type RevealTag = "span" | "div" | "h1" | "h2" | "h3" | "p" | "section" | "article";
as?: RevealTag;
```

Then remove the `TagAny = Tag as any;` workaround.

**Verify:**
- [ ] `Motion.tsx` no longer contains `as any`
- [ ] All usages still compile

---

### Step 2.6 — Fix mid-file imports in `ProjectDetail.tsx`

**What:** `ProjectDetail.tsx` has imports on lines 1-10, then `import React, { useRef } from "react";` on line 7 (duplicated), and another import on line 125 (`ProjectProgress`, `HeroImage`, `CASColumn`, `CreditRow`).

**How to do it:**

Move the line-7 import into the top block. Move the line-125 import to the top:
```typescript
import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { getProject, getNextProject, getPrevProject } from "../data/projects";
import { type CaseBlock } from "../data/types";
import { CharReveal, WordReveal, Counter } from "../components/motion/Motion";
import { useParallax, useClipReveal, useReveal } from "../hooks/motionUtils";
import { ProjectProgress, HeroImage, CASColumn, CreditRow } from "../components/work/ProjectComponents";
```

**Verify:**
- [ ] All imports are at the top of the file
- [ ] `npx tsc --noEmit` is clean

---

### Step 2.7 — Fix the "Moriatry" typo hot-fix at the source

**What:** `Motion.tsx:77-80` defends against the typo "Moriatry" being somewhere in user input. The typo is in `index.html` (`<title>` says "MORIATRY"). Fix the HTML, then remove the JS defense.

**How to do it:**

1. Edit `index.html` line 6: change `DEBARGHA MORIATRY` → `DEBARGHA MORIARTY`
2. Search `dist/index.html` — it's already committed (will be removed in Phase 1.3)
3. Search the codebase for any other `Moriarty` typos:
```bash
grep -rn "Moriatry\|MORIATRY" src/ public/
```
4. In `Motion.tsx`, simplify:
```typescript
// Before
const isMoriarty = w.replace(/[^a-zA-Z]/g, '') === "Moriarty" || w.replace(/[^a-zA-Z]/g, '') === "Moriatry";
<span ...>{w.replace("Moriatry", "Moriarty")}</span>

// After
const isMoriarty = w.replace(/[^a-zA-Z]/g, '') === "Moriarty";
<span ... className={`... ${isMoriarty ? "text-[var(--orange)]" : ""}`}>{w}</span>
```

**Verify:**
- [ ] `grep -rn "Moriatry\|MORIATRY" src/ public/ index.html` returns nothing
- [ ] Browser tab title reads "DEBARGHA MORIARTY"
- [ ] No functional change to word reveal animation

---

### Step 2.8 — Remove dead `gsap`/`three` chunk config

**What:** `vite.config.ts` has `manualChunks` rules for `gsap`, `@react-three`, `node_modules/three`, and `lenis` — but the source uses none of `gsap`, `three`, or `@react-three`. Only `lenis` is used.

**How to do it:**

Edit `vite.config.ts`:
```typescript
// Before
if (id.includes('three') || id.includes('@react-three')) {
  return 'three-webgl';
}
if (id.includes('react-dom')) return 'react-dom';
if (id.includes('react-router')) return 'react-router';
if (id.includes('gsap')) return 'gsap';
if (id.includes('lenis')) return 'lenis';

// After
if (id.includes('react-dom')) return 'react-dom';
if (id.includes('react-router')) return 'react-router';
if (id.includes('lenis')) return 'lenis';
```

Also, `chunkSizeWarningLimit: 1000` is a workaround for "the only chunk exceeding 500KB is react-three" — but react-three isn't in the project. Set it back to the default 500:

```typescript
// Before
chunkSizeWarningLimit: 1000,

// After
chunkSizeWarningLimit: 500,
```

**Verify:**
- [ ] `npm run build` produces the same output (or smaller, since `three-webgl` chunk is gone)
- [ ] `dist/assets/` no longer contains a three-related chunk
- [ ] No build warnings

---

### **Phase 2 Done When:**

- [ ] `grep -rn ": any" src/` returns zero matches
- [ ] `grep -rn "as any" src/` returns zero matches
- [ ] `npx tsc --noEmit` returns zero errors
- [ ] `npm run build` succeeds with smaller output
- [ ] All pages render identically in browser

---

## Phase 3 — Accessibility & UX

> **Goal:** Make the site usable by keyboard, screen reader, and reduced-motion users. The site already respects `prefers-reduced-motion` — this phase closes the keyboard-accessibility gap.

---

### Step 3.1 — Add `:focus-visible` global styles

**What:** Define visible focus indicators globally. Without this, the custom-cursor-hiding strategy makes the site unusable by keyboard.

**Why:** `cursor.css` sets `cursor: none` on body when hover-capable. Keyboard users don't get a cursor at all and currently have NO focus indicator. This is the single biggest accessibility bug in the codebase.

**How to do it:**

Append to `src/index.css`:
```css
/* Keyboard focus indicators — visible at all times */
*:focus {
  outline: none;
}
*:focus-visible {
  outline: 2px solid var(--acid);
  outline-offset: 3px;
  border-radius: 2px;
}

/* High-contrast mode: thicker outline */
@media (prefers-contrast: more) {
  *:focus-visible {
    outline-width: 3px;
    outline-offset: 4px;
  }
}

/* Make sure focus-visible works on dark-bg interactive elements too */
button:focus-visible,
a:focus-visible,
[role="button"]:focus-visible {
  outline-color: var(--acid);
}
```

**Verify:**
- [ ] Tab through the site with mouse hidden — every focusable element shows a yellow-green outline
- [ ] The outline matches your `--acid` color

---

### Step 3.2 — Add a "Skip to content" link

**What:** Add a skip link as the first focusable element of the page.

**Why:** Screen-reader and keyboard users need a way to bypass the nav. This is the standard a11y pattern; Lighthouse will flag its absence.

**How to do it:**

1. In `index.html`, add a `<main id="main">` wrapper is already provided by pages. Make sure each page's `<main>` has `id="main"` and `tabIndex={-1}`.
2. Add a skip link component:

Create `src/components/ui/SkipLink.tsx`:
```typescript
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed top-4 left-4 z-[200] bg-[var(--acid)] text-[var(--bg)] px-4 py-2 font-mono text-xs uppercase tracking-widest"
    >
      Skip to content →
    </a>
  );
}
```

3. Add to `src/components/layout/Layout.tsx`, just inside the fragment:
```typescript
<>
  <SkipLink />
  <Nav />
  ...
</>
```

4. In `pages/Home.tsx`, `pages/Work.tsx`, etc., change `<main>` → `<main id="main" tabIndex={-1}>`.

**Verify:**
- [ ] Press Tab on page load — first focus is the skip link
- [ ] Press Enter — focus jumps to `<main>` element
- [ ] Screen reader announces "Skip to content link"

---

### Step 3.3 — Fix heading hierarchy

**What:** Audit every page and ensure heading levels descend logically: `<h1>` → `<h2>` → `<h3>`. No level-skipping (h1 → h3).

**Audit checklist:**

**Home page:**
- [ ] Hero `<h1>` ✓ (currently used for "Designing the quiet spaces...")
- [ ] Marquee: no heading needed (decorative)
- [ ] Featured `<h2>` for "Selected recently." ✓
- [ ] StudioTease `<h3>` for bio (currently `<h3>`) — should be `<h2>` to match siblings
- [ ] Services `<h2>` for "What we actually make." ✓
- [ ] ProcessTease `<h2>` for "Four movements, one year." ✓
- [ ] Press `<h2>` for "Kind words." ✓
- [ ] CTA `<h2>` for "Currently accepting..." ✓

**Work page:**
- [ ] `<h1>` "Work that listens." ✓
- [ ] `<h2>` "Three NDA'd projects..." ✓

**ProjectDetail:**
- [ ] `<h1>` project title ✓
- [ ] `<h2>` Overview, Credits ✓
- [ ] `<h3>` for I./II./III. labels? Currently text-only — could be `<h3>`s for screen-reader context

**Studio:**
- [ ] `<h1>` "A studio, not an agency." ✓
- [ ] `<h2>` "Beliefs", "Six makers", "Timeline", "Clients", "Press", "Want to meet?" ✓

**Process:**
- [ ] `<h1>` "Four movements." ✓
- [ ] `<h2>` "Engagements", "Things we get asked", "Ready to begin?" ✓
- [ ] `<h3>` for each movement title ✓

**Contact:**
- [ ] `<h1>` "Let's make something worth it." ✓
- [ ] `<h2>` "Availability", "Enquiry", "FAQ" ✓

**How to do it:** Where a `CharReveal as="h2"` exists, change to the correct heading level. Where no heading exists but should, add one.

**Verify:**
- [ ] Open Chrome DevTools → Elements → search `<h1>`, `<h2>`, `<h3>` — every page has exactly one `<h1>`
- [ ] Headings descend in order without skipping levels

---

### Step 3.4 — Make the mobile menu properly keyboard-accessible

**What:** The mobile menu has `aria-modal`, but it doesn't trap focus inside the dialog while it's open. Tab can escape the menu.

**How to do it:**

Create a `useFocusTrap` hook in `src/hooks/useFocusTrap.ts`:
```typescript
import { useEffect, RefObject } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const previouslyFocused = document.activeElement as HTMLElement;
    
    const focusables = () => Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
    focusables()[0]?.focus();
    
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const closeBtn = root.querySelector<HTMLElement>('[aria-label="Close mobile menu"]');
        closeBtn?.click();
      }
    };
    
    document.addEventListener("keydown", onKey);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("keydown", onEscape);
      previouslyFocused?.focus();
    };
  }, [ref, active]);
}
```

In `Nav.tsx`:
```typescript
const menuRef = useRef<HTMLDivElement>(null);
useFocusTrap(menuRef, menuOpen);
// ...
<div ref={menuRef} id="mobile-menu" ...>
```

**Verify:**
- [ ] Open mobile menu with the button. Tab cycles only within the menu.
- [ ] Press Escape — menu closes, focus returns to the menu button.
- [ ] After closing, focus is restored.

---

### Step 3.5 — Add `aria-live` for the preloader

**What:** Screen-reader users wait during preloader without announcement.

**How to do it:**

In `Preloader.tsx`, add:
```typescript
return (
  <div
    ref={root}
    className={styles.preloader}
    role="status"
    aria-live="polite"
    aria-label={`Loading portfolio — ${progress}%`}
  >
    ...
  </div>
);
```

You'll need to track progress in a state var instead of writing to `innerText`:
```typescript
const [progress, setProgress] = useState(0);
useEffect(() => {
  let p = 0;
  let raf: number;
  const animate = () => {
    p += (100 - p) * 0.08;
    setProgress(Math.floor(p));
    if (counterRef.current) counterRef.current.innerText = String(Math.floor(p)).padStart(3, "0");
    if (p > 99.5 && !displayComplete) setDisplayComplete(true);
    else if (p <= 99.5) raf = requestAnimationFrame(animate);
  };
  raf = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(raf);
}, [displayComplete]);
```

**Verify:**
- [ ] VoiceOver / NVDA announces "Loading portfolio — XX%" during preloader
- [ ] Visible counter still updates (now driven by `setProgress`)

---

### Step 3.6 — Make form errors accessible

**What:** The contact form uses `required` but has no error feedback for screen readers.

**How to do it:**

1. Add validation state:
```typescript
const [errors, setErrors] = useState<Record<string, string>>({});
```

2. On submit, validate:
```typescript
const validate = () => {
  const e: Record<string, string> = {};
  if (!form.name.trim()) e.name = "Please tell us your name.";
  if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Please use a valid email address.";
  if (!form.message.trim()) e.message = "Please describe the project.";
  return e;
};

const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const e = validate();
  if (Object.keys(e).length) {
    setErrors(e);
    return;
  }
  setErrors({});
  setSubmitted(true);
  // ... confetti
};
```

3. Mark fields:
```typescript
<input
  required
  value={value}
  onChange={(e) => onChange(e.target.value)}
  aria-invalid={!!errors[name]}
  aria-describedby={errors[name] ? `${name}-err` : undefined}
  className="input-line w-full py-3 text-lg font-display"
/>
{errors[name] && <span id={`${name}-err`} className="text-xs text-[var(--rust)] mt-1">{errors[name]}</span>}
```

**Verify:**
- [ ] Tab into form, leave required fields blank, submit — errors appear and are announced
- [ ] `aria-invalid="true"` on errored fields

---

### Step 3.7 — Replace `innerHTML` in `useScramble` with safe DOM construction

**What:** `motionUtils.ts:285` writes `innerHTML`. While the source is currently trusted, this is a footgun for any future contributor.

**How to do it:**

Replace the innerHTML logic with explicit DOM manipulation:
```typescript
const update = () => {
  // Clear previous scramble spans
  el.innerHTML = ""; // <-- still here, but only on a controlled element
  // OR: build a DocumentFragment
  
  // Build new content with explicit spans
  const fragment = document.createDocumentFragment();
  let complete = 0;
  for (let i = 0; i < queue.length; i++) {
    const q = queue[i];
    const { from: f, to: t, start, end } = q;
    if (frame >= end) {
      complete++;
      fragment.appendChild(document.createTextNode(t));
    } else if (frame >= start) {
      if (!q.char || Math.random() < 0.28) {
        q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      const span = document.createElement("span");
      span.className = "text-[var(--acid)]";
      span.textContent = q.char;
      fragment.appendChild(span);
    } else {
      fragment.appendChild(document.createTextNode(f));
    }
  }
  el.replaceChildren(fragment);
  // ...
};
```

`replaceChildren(fragment)` is safer than `innerHTML =` because no string is interpreted as HTML.

**Verify:**
- [ ] Hover over scrambled nav items — animations still work
- [ ] No `innerHTML =` in `motionUtils.ts`

---

### Step 3.8 — Add `noscript` fallback

**What:** Without JS, the page is blank.

**How to do it:**

In `index.html`, just before `<div id="root"></div>`:
```html
<noscript>
  <main style="font-family: sans-serif; padding: 4rem; color: #f4f1ea; background: #0a0a0a; min-height: 100vh;">
    <h1>Debargha Moriarty</h1>
    <p>This portfolio requires JavaScript to render. Email <a href="mailto:studio@debarghamoriarty.com" style="color: #c6ff3d;">studio@debarghamoriarty.com</a> to get in touch.</p>
  </main>
</noscript>
```

**Verify:**
- [ ] Disable JS in DevTools — fallback message displays

---

### **Phase 3 Done When:**

- [ ] Lighthouse Accessibility score ≥ 95
- [ ] `axe DevTools` shows zero "serious" or "critical" issues
- [ ] Keyboard-only navigation reaches every interactive element
- [ ] Screen reader (VoiceOver / NVDA) announces headings, links, and form errors correctly

---

## Phase 4 — Performance, Security & Build Pipeline

> **Goal:** Lock in current performance, add a CSP, and set up CI.

---

### Step 4.1 — Add a Content-Security-Policy header

**What:** `vercel.json` sets X-Frame-Options, X-Content-Type-Options, Referrer-Policy. Add a CSP.

**Why:** Defense-in-depth against any future XSS.

**How to do it:**

Add to `vercel.json` headers array:
```json
{
  "source": "/(.*)",
  "headers": [
    { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' https://images.pexels.com data:; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" },
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "X-Frame-Options", "value": "DENY" },
    { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
  ]
}
```

> **Note:** `'unsafe-inline'` for styles is needed because Tailwind injects styles. If you want strict CSP, you'd need to extract all inline styles to CSS files — significant work. The above is a pragmatic middle ground.

**Verify:**
- [ ] After deploy, `curl -I https://your-site.vercel.app` shows the CSP header
- [ ] No regressions in browser console

---

### Step 4.2 — Add image error handling

**What:** All project images are external (Pexels). If any 404s, the user sees broken image icons.

**How to do it:**

In `ProjectImage.tsx` and any other `<img>` tag:
```typescript
<img
  src={src}
  alt={title}
  loading="lazy"
  decoding="async"
  onError={(e) => {
    e.currentTarget.src = "/images/fallback.jpg";
  }}
  className="..."
/>
```

Create a fallback image `public/images/fallback.jpg` (or use the hero-ink.jpg as a generic poster).

**Verify:**
- [ ] Replace one project's image URL with a 404 URL — fallback renders

---

### Step 4.3 — Add image dimension attributes to prevent CLS

**What:** `<img>` tags without `width`/`height` cause layout shifts when loaded.

**How to do it:**

For project images with known aspect ratios (defined in `Project.interface`), add:
```typescript
<img
  src={src}
  alt={title}
  width={1600}
  height={1200}
  loading="lazy"
  decoding="async"
/>
```

The actual rendered size is controlled by CSS, but the browser reserves space.

**Verify:**
- [ ] Lighthouse CLS < 0.05
- [ ] No layout shift as images load

---

### Step 4.4 — Add Open Graph and Twitter meta tags

**What:** Social sharing previews are missing.

**How to do it:**

In `index.html` `<head>`:
```html
<meta property="og:title" content="Debargha Moriarty — Independent Art Director & Digital Designer" />
<meta property="og:description" content="Independent art direction and digital design studio crafting identities, interfaces and moving image for ambitious brands." />
<meta property="og:image" content="https://your-domain.com/images/og-image.jpg" />
<meta property="og:url" content="https://your-domain.com" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Debargha Moriarty — Independent Art Director & Digital Designer" />
<meta name="twitter:description" content="Independent art direction and digital design studio crafting identities, interfaces and moving image for ambitious brands." />
<meta name="twitter:image" content="https://your-domain.com/images/og-image.jpg" />
```

You'll need to create `public/images/og-image.jpg` (1200×630 recommended).

**Verify:**
- [ ] Share URL on Twitter/LinkedIn/Slack — preview shows title, image, description

---

### Step 4.5 — Add a `robots.txt` and sitemap

**What:** Search engines need these.

**How to do it:**

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/work</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://your-domain.com/studio</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://your-domain.com/process</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://your-domain.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Add each project URL -->
  <url><loc>https://your-domain.com/work/octave</loc><priority>0.9</priority></url>
  <url><loc>https://your-domain.com/work/maison-rouge</loc><priority>0.9</priority></url>
  <!-- ...etc -->
</urlset>
```

**Verify:**
- [ ] `https://your-domain.com/robots.txt` is reachable
- [ ] Submit to Google Search Console

---

### Step 4.6 — Set up ESLint and Prettier

**What:** No linting or formatting currently. Single-author work, but consistency matters.

**How to do it:**

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y prettier eslint-config-prettier
```

Create `.eslintrc.cjs`:
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  settings: { react: { version: "detect" } },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  },
};
```

Create `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

Add to `package.json`:
```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
}
```

**Verify:**
- [ ] `npm run lint` runs without errors
- [ ] `npm run format` reformatting produces no semantic changes
- [ ] Add `// eslint-disable-next-line` only with justification

---

### Step 4.7 — Add a pre-commit hook

**What:** Prevent commits that break the build.

**How to do it:**

```bash
npm install -D husky lint-staged
npx husky init
```

In `.husky/pre-commit`:
```bash
npx lint-staged
```

In `package.json`:
```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.css": ["prettier --write"]
}
```

**Verify:**
- [ ] Make a small change and commit — pre-commit hook runs lint and format

---

### **Phase 4 Done When:**

- [ ] Lighthouse Performance ≥ 95
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] CSP header present on deployed site
- [ ] OG previews work when sharing
- [ ] ESLint runs clean

---

## Phase 5 — Content, Testing & DX

> **Goal:** Add test coverage for the most important code paths. Improve content authoring ergonomics.

---

### Step 5.1 — Add tests for `data/projects.ts` helpers

**What:** `getProject`, `getNextProject`, `getPrevProject` have wrap-around logic that needs verification.

**Create `src/data/projects.test.ts`:**
```typescript
import { describe, it, expect } from "vitest";
import { PROJECTS, getProject, getNextProject, getPrevProject } from "./projects";

describe("data/projects", () => {
  it("getProject returns matching project", () => {
    const p = getProject("octave");
    expect(p?.slug).toBe("octave");
  });

  it("getProject returns undefined for unknown slug", () => {
    expect(getProject("nope")).toBeUndefined();
  });

  it("getNextProject wraps from last to first", () => {
    const last = PROJECTS[PROJECTS.length - 1];
    const next = getNextProject(last.slug);
    expect(next?.slug).toBe(PROJECTS[0].slug);
  });

  it("getPrevProject wraps from first to last", () => {
    const first = PROJECTS[0];
    const prev = getPrevProject(first.slug);
    expect(prev?.slug).toBe(PROJECTS[PROJECTS.length - 1].slug);
  });

  it("every project has required fields", () => {
    PROJECTS.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.hero).toMatch(/^https?:\/\//);
      expect(p.thumbnail).toMatch(/^https?:\/\//);
      expect(p.blocks.length).toBeGreaterThan(0);
    });
  });

  it("every block type is supported by ProjectDetail", () => {
    const supported = new Set(["image", "image-pair", "quote", "text", "stats", "full-bleed"]);
    PROJECTS.forEach((p) => {
      p.blocks.forEach((b) => {
        expect(supported.has(b.type)).toBe(true);
      });
    });
  });
});
```

**Verify:**
- [ ] `npm test` passes
- [ ] `npx vitest run src/data/projects.test.ts` passes

---

### Step 5.2 — Add tests for `useMagnetic` and `useTilt`

**What:** These hooks contain the most complex logic in `motionUtils.ts` — RAF loops, scroll-position caching, intersection observation.

**Create `src/hooks/motionUtils.test.ts`:**
```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";

beforeEach(() => {
  // Reset DOM
  document.body.innerHTML = "";
  // Mock IntersectionObserver
  (global as any).IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  // Mock matchMedia
  (global as any).window.matchMedia = vi.fn().mockReturnValue({ matches: false });
});

describe("useMagnetic", () => {
  it("returns a ref", () => {
    const { result } = renderHook(() => useMagnetic<HTMLDivElement>());
    expect(result.current).toBeDefined();
  });
  
  // More tests...
});
```

**Verify:**
- [ ] Tests pass
- [ ] Coverage of motionUtils ≥ 70%

---

### Step 5.3 — Add tests for `useMediaQuery`

**Create `src/hooks/useMediaQuery.test.ts`:**
```typescript
import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMediaQuery } from "./useMediaQuery";

describe("useMediaQuery", () => {
  it("returns false when matchMedia returns false", () => {
    (window.matchMedia as any) = vi.fn().mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
    const { result } = renderHook(() => useMediaQuery("(max-width: 767px)"));
    expect(result.current).toBe(false);
  });
  
  it("returns true when matchMedia returns true", () => {
    (window.matchMedia as any) = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
    const { result } = renderHook(() => useMediaQuery("(max-width: 767px)"));
    expect(result.current).toBe(true);
  });
  
  it("updates when media query changes", () => {
    const listeners: Array<() => void> = [];
    (window.matchMedia as any) = vi.fn().mockReturnValue({
      matches: false,
      addEventListener: (_: string, cb: () => void) => listeners.push(cb),
      removeEventListener: vi.fn(),
    });
    const { result, rerender } = renderHook(() => useMediaQuery("(max-width: 767px)"));
    expect(result.current).toBe(false);
    
    // Trigger change
    act(() => {
      listeners.forEach((cb) => cb());
    });
    expect(result.current).toBe(true);
  });
});
```

**Verify:**
- [ ] All `useMediaQuery` tests pass

---

### Step 5.4 — Add tests for `Work.tsx` filter logic

**Create `src/pages/Work.test.tsx`:**
```typescript
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Work from "./Work";

describe("Work page filter", () => {
  it("shows all projects initially", () => {
    render(<MemoryRouter><Work /></MemoryRouter>);
    expect(screen.getAllByRole("link", { name: /Octave|Atlas|Maison|H.n|Formhaus|Meridian/i }).length).toBeGreaterThan(0);
  });
  
  it("filters by tag when category clicked", () => {
    render(<MemoryRouter><Work /></MemoryRouter>);
    fireEvent.click(screen.getByRole("button", { name: /Editorial/i }));
    // Should show only Editorial projects
  });
});
```

**Verify:**
- [ ] Filter logic tests pass

---

### Step 5.5 — Set up a content directory

**What:** Move content out of `src/data/` into `content/` and add a TypeScript loader. This makes future CMS migration easier.

**How to do it:**

1. Create `content/` at root:
```
content/
├── projects/
│   ├── octave.json
│   ├── maison-rouge.json
│   └── ...
├── studio.json
└── process.json
```

2. Each `octave.json`:
```json
{
  "slug": "octave",
  "index": "01",
  "title": "Octave",
  "subtitle": "Record label identity & interactive sleeve system",
  ...
}
```

3. Add `src/data/loader.ts`:
```typescript
import projectsData from "../../content/projects";
import studioData from "../../content/studio.json";
import processData from "../../content/process.json";
import type { Project, ProcessData, StudioData } from "./types";

export const PROJECTS: Project[] = projectsData;
export const studioData: StudioData = studioData;
export const processData: ProcessData = processData;
```

> **Alternative:** Keep the current `data/*.ts` structure for now. The CMS migration is a much larger task. This step is optional.

**Verify:**
- [ ] If done: `npm run build` succeeds; content still loads

---

### Step 5.6 — Add a `CONTENT.md` guide for editors

**What:** If anyone else ever edits content, they need a guide.

**Create `CONTENT.md`:**
```markdown
# Content Guide

## Where content lives
- `src/data/projects.ts` — project case studies
- `src/data/studioData.ts` — studio bio, team, timeline, clients
- `src/data/processData.ts` — process movements, pricing, FAQ

## Adding a new project

1. Add a new entry to `PROJECTS` array in `src/data/projects.ts`.
2. Required fields:
   - `slug` (URL-friendly, unique, e.g. `"new-project"`)
   - `index` (display number, e.g. `"07"`)
   - `title` (display name)
   - `subtitle` (one-line description)
   - `tags` (array of category strings)
   - `year`
   - `client`
   - `role` (your role on the project)
   - `thumbnail` (image URL, 1600px wide)
   - `hero` (image URL, 2400px wide)
   - `intro`, `challenge`, `approach`, `solution` (paragraphs)
   - `credits` (array of `{role, name}`)
   - `blocks` (case study content)

3. Block types:
   - `full-bleed` — full-width image with caption
   - `image` — single image with caption
   - `image-pair` — two side-by-side images
   - `quote` — pull quote with attribution
   - `text` — paragraph of body copy
   - `stats` — array of `{label, value}` metrics

## Style
- All copy follows editorial tone: confident, considered, plainspoken.
- No Lorem Ipsum. No filler. Real metrics where possible.
- Image URLs from Pexels or self-hosted in `public/images/`.

## Testing
- After adding a project, run `npm test` to verify it has all required fields.
```

**Verify:**
- [ ] File exists and is committed

---

### **Phase 5 Done When:**

- [ ] `npm test` runs and passes
- [ ] Test coverage of `src/data/`, `src/hooks/`, `src/pages/` ≥ 60%
- [ ] `CONTENT.md` exists
- [ ] Optional: content moved to JSON files

---

## Phase 6 — Verification Checklist

> Run all of these before declaring the codebase "production-perfect."

---

### Pre-Deploy Verification

Run from project root:

```bash
# 1. TypeScript compiles clean
npx tsc --noEmit

# 2. Lint passes
npm run lint

# 3. Tests pass
npm test

# 4. Build succeeds
npm run build

# 5. Build is smaller than before
ls -lah dist/assets/

# 6. No committed secrets
git ls-files | xargs grep -l "API_KEY\|SECRET\|PASSWORD\|TOKEN" 2>/dev/null
# (should return nothing)

# 7. No TODO/FIXME markers left
grep -rn "TODO\|FIXME\|XXX\|HACK" src/

# 8. No console.log left (errors are OK)
grep -rn "console\.log" src/

# 9. Bundle analyzer (optional)
npx vite-bundle-visualizer
```

### Browser Verification

Visit each page in a real browser (not just DevTools):

- [ ] `/` (Home) — Hero ink canvas animates, marquee scrolls, all sections appear
- [ ] `/work` — Filter buttons work, project cards render, hover effects active
- [ ] `/work/octave` (and every other project) — Hero parallax, blocks render, prev/next navigation
- [ ] `/studio` — Team list hover shows portrait, timeline progress animates
- [ ] `/process` — Movement parallax, pricing cards tilt, FAQ expands
- [ ] `/contact` — Form validation works, submit triggers confetti

### Accessibility Verification

```bash
# Lighthouse
npx lighthouse https://your-domain.com --view

# axe DevTools (Chrome extension, run on each page)

# Keyboard-only navigation
# 1. Hide your mouse.
# 2. Tab through every page.
# 3. Verify focus is always visible.
# 4. Verify Tab order is logical.

# Screen reader
# macOS: VoiceOver (Cmd+F5)
# Windows: NVDA (free)
# 1. Navigate to each page.
# 2. Verify all headings are announced.
# 3. Verify all links are announced with destination.
# 4. Verify form errors are announced.
```

### Performance Verification

```bash
# After deploying to production:
npx lighthouse https://your-domain.com --only-categories=performance --view

# Targets:
# - Performance: ≥ 95
# - FCP: < 1.5s
# - LCP: < 2.5s
# - CLS: < 0.05
# - TBT: < 200ms
```

### Security Verification

```bash
# Verify headers
curl -I https://your-domain.com

# Expected:
# Content-Security-Policy: default-src 'self'...
# X-Content-Type-Options: nosniff
# X-Frame-Options: DENY
# Referrer-Policy: strict-origin-when-cross-origin

# Test for XSS
# Try navigating to /work/<script>alert(1)</script>
# Should 404 cleanly, not execute script.
```

### Final Code Review

Open the repo in a fresh clone. Ask:
- [ ] Could a new engineer understand this in 30 minutes?
- [ ] Is the README accurate?
- [ ] Is the CHANGELOG up to date?
- [ ] Are all TODOs resolved?
- [ ] Does `npm install && npm run dev` "just work"?

---

## Summary

| Phase | Effort | Status |
|---|---|---|
| 1. Foundation & Repo Hygiene | 1–2 hours | ☐ |
| 2. Type Safety & Code Quality | 3–4 hours | ☐ |
| 3. Accessibility & UX | 4–6 hours | ☐ |
| 4. Performance, Security & Build | 2–3 hours | ☐ |
| 5. Content, Testing & DX | 4–6 hours | ☐ |
| 6. Verification | 1–2 hours | ☐ |
| **Total** | **~16–22 hours** | |

After Phase 6, the codebase will be:
- ✅ Fully typed (zero `any`)
- ✅ Accessible (Lighthouse a11y ≥ 95)
- ✅ Secured (CSP, headers, no XSS surface)
- ✅ Tested (60%+ coverage of critical paths)
- ✅ Performant (Lighthouse perf ≥ 95)
- ✅ Documented (README, CHANGELOG, CONTENT, this plan)
- ✅ Tooled (ESLint, Prettier, husky)

The studio's craft — typography, motion, WebGL — will remain the star. The foundation underneath will finally match.
