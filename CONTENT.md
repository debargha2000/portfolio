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
