# Portfolio Optimization — Design Spec
**Date:** 2026-05-23  
**Priority:** Content & UI first, then SEO, then Performance

---

## 1. Content Accuracy (Page-by-Page)

### Home (`src/pages/Home.jsx`)
- Hero description: update from generic "BSc grad…5 shipped projects, 1 internship" to reflect published paper at UCICS 2025 and ML research identity.
- Floating badge: replace "MongoDB" badge with "PyTorch" to signal ML stack alongside web stack.

### About (`src/pages/About.jsx`)
- Bio paragraphs: replace generic filler text with accurate summary matching CV — full-stack developer AND ML researcher, UCICS 2025 paper, React/Next.js/Node.js/Python, end-to-end ML pipelines.
- Achievements: add a fourth card — "1 Paper Published" / "UCICS 2025 international conference".
- Quick Facts: add "Research published at UCICS 2025" and "Research Officer @ Práce BD".

### Experience (`src/pages/Experience.jsx`)
- Fix title: "Product Researcher" → "Research Officer" (matches CV exactly).
- Fix period: "Feb 2025 - Aug 2026" → "Feb 2025 – Present".
- Description bullets already accurate; no change needed.

### Skills (`src/pages/Skills.jsx`)
- PyTorch, TensorFlow, Keras: bump from `familiar` → `comfortable` (justified by published research using these tools).
- Add MySQL to Databases (present in CV, missing from skills page).
- Add GitHub Actions to DevOps/Deploy (present in CV, missing).

### Footer (`src/components/Footer.jsx`)
- Add "Research" link (`/research`) to Quick Links column.
- Update tagline from "Full Stack Developer" to "Full Stack Developer & ML Researcher".

---

## 2. SEO (`src/App.jsx` + `index.html`)

- Home page title: "MD Samiul Haque - Full Stack Developer & ML Researcher | Next.js · TypeScript"
- Home meta description: mention UCICS 2025 paper and ML research.
- Research page: already has SEO entry, no change needed.
- About page meta: mention published paper.
- All other page titles: remove "MERN Stack Expert" where present; keep concise.
- `index.html` static title + description: update to match new identity.
- Structured data (`index.html`): update `jobTitle` from "Full Stack Developer" to "Full Stack Developer & ML Researcher".

---

## 3. Performance

- `src/pages/Projects.jsx`: add `loading="lazy"` to all `<img>` tags (5 project images load eagerly on page mount).
- `src/pages/Education.jsx`: add `loading="lazy"` to institution images.
- Verify `d3` usage — if unused, flag for removal (not removed automatically to avoid breakage).

---

## 4. Scope Boundaries (YAGNI)

- No new pages, no new components.
- No changes to animation logic, routing, or build config.
- No changes to Projects content (already accurate to CV).
- No changes to Certificates content (user hasn't indicated inaccuracies).
- Contact page: no changes needed.
