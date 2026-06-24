# Debargha Moriarty — Portfolio

A high-performance, minimalist personal portfolio showcasing architectural design logic and interactive web experiences.

## Stack
- React 19
- Vite 8
- Tailwind 4
- Lenis (Smooth scrolling)
- React Router 7
- WebGL/Three-free

## Local Development
- **Prerequisites**: Node ≥ 20
- `npm install`
- `npm run dev` → http://localhost:5173
- `npm run build` → builds static output to `dist/`
- `npm run preview` → preview built output locally
- `npm test` → run Vitest suite

## Deployment
Vercel is configured via `vercel.json` to handle the deployments. Pushing to the `main` branch automatically triggers a build. SPA rewrites automatically route all paths to `/index.html`.

## Architecture
- `components/` - Reusable UI elements (cards, buttons, typography)
- `pages/` - Top level routing views (Home, About, Work, Contact)
- `hooks/` - Custom logic
- `data/` - Static site data (projects, experiences)
- `styles/` - Global styling configurations

## License & Credits
© 2026 Debargha Moriarty Studio.
Typography credits: Fraunces by Undercase Type, Instrument Serif by Instrument, Inter Tight by Rasmus Andersson, JetBrains Mono.

## Contact
studio@debarghamoriarty.com
