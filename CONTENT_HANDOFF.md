# Portfolio content handoff

The visual foundation uses the existing React + TypeScript + Vite app. No dependencies or deployment configuration were added. Run `npm run dev` for local preview and `npm run build` for a static build.

## Structure

- `src/App.tsx`: reusable navigation, project card, image, contact and case-study components, plus homepage sections.
- `src/data/projects.ts`: typed project copy, metrics, caveats, image sources and central contact configuration.
- `src/index.css`: global typography, colours, accessibility and motion preferences.
- `src/App.css`: page layouts, project variants and responsive rules.

Case studies use `#work/marental`, `#work/amalfi-re` and `#work/italyana`. Hash URLs support refreshes on static hosts without server rewrites. GitHub Pages deployment, including its eventual repository base path, is intentionally not configured.

## Remaining manual content

1. Confirmed email address, LinkedIn URL, GitHub URL and CV URL. Add those verified public destinations to `contactLinks` in `src/data/projects.ts`.
2. An Open Graph image and the final public site URL, if social sharing previews are required. The title, description and Open Graph type are already present.

## Images

The original PNG screenshots in `public/screenshot/` are preserved. The site loads generated WebP derivatives from `public/screenshot/optimized/`; these are smaller copies of the same supplied screenshots, generated for delivery only.

All reported metrics come from the supplied brief, not an independent analytics audit. No booking, revenue or lead claims have been added. Proposed next steps in case studies are priorities, not claims of completed work.

Typography uses Manrope and DM Sans from Google Fonts, with local sans-serif fallbacks. The layout remains functional without external font access. Reduced-motion preferences disable transitions and smooth scrolling.
