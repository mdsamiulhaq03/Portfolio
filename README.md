# MD Samiul Haque — Personal Portfolio

A modern, animated personal portfolio built with React, Vite, and Tailwind CSS. Features a 3D Spline scene on the homepage, scroll animations, and a dark minimal UI.

**Live site:** [mdsamiulhaque.vercel.app](https://mdsamiulhaque.vercel.app) *(update with your actual URL)*

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero section with 3D Spline scene, social links, and CV download |
| `/about` | Profile, bio, achievements, and areas of interest |
| `/skills` | Categorized technical skills with logos |
| `/projects` | Featured projects with live links and GitHub repos |
| `/experience` | Professional experience timeline |
| `/education` | Academic background |
| `/certificates` | Completed certifications |
| `/contact` | Contact form and direct contact details |

---

## Tech Stack

**Frontend**
- [React 18](https://react.dev) + [Vite 5](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — page and scroll animations
- [React Router DOM v6](https://reactrouter.com)

**3D & Visual**
- [@splinetool/react-spline](https://spline.design) — interactive 3D scene
- [OGL](https://github.com/oframe/ogl) — wireframe globe component
- [D3](https://d3js.org)

**Data & Utilities**
- [SWR](https://swr.vercel.app) — GitHub API data fetching
- [Lucide React](https://lucide.dev) — icons
- [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)

---

## Featured Projects

| Project | Description | Stack |
|---|---|---|
| [CVAnalyzer AI](https://cv-tracker-three.vercel.app/) | AI-powered CV analysis with ATS scoring and rewriting | Next.js, Groq, Llama 3.3, shadcn/ui |
| [Hawa Somachar](https://hawasamchar.vercel.app/) | Real-time weather app with maps and air quality | Next.js, OpenWeatherMap, MapLibre GL |
| [FlavorBot AI](https://flavorbot-five.vercel.app) | Recipe generator from ingredients using AI | React, Vite, GROQ API |
| [CineScope](https://cine-scope-samiul.vercel.app) | Movie discovery app with Netflix-inspired UI | React, TypeScript, TMDB API, Appwrite |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

---

## Project Structure

```
src/
├── assets/          # Images, PDFs (CV, certificates)
├── components/      # Navbar, Footer, Loading, ScrollAnimation, UI primitives
├── config/
│   └── contact.js   # Centralized contact details — edit here to update everywhere
├── pages/           # One file per route (Home, About, Skills, Projects, ...)
├── lib/
│   └── utils.js     # Shared helpers
├── App.jsx          # Route definitions
└── main.jsx         # Entry point
```

### Updating contact info

All contact details (email, phone, GitHub, LinkedIn, etc.) live in one place:

```js
// src/config/contact.js
export const CONTACT_INFO = {
  email: "samiultahsin2001@gmail.com",
  phone: "+8801758715154",
  github: "https://github.com/mdsamiulhaq03",
  linkedin: "https://www.linkedin.com/in/md-samiul-haq/",
  // ...
};
```

### Adding a project

Open `src/pages/Projects.jsx` and add an entry to the `projects` array:

```js
{
  title: "Project Name",
  description: "Short description.",
  image: MyImage,
  github: "https://github.com/...",
  live: "https://...",
  tags: ["React", "Tailwind"],
  liveStatus: true,
}
```

---

## Deployment

The project is configured for deployment on [Vercel](https://vercel.com). Push to `main` and Vercel will build automatically using `npm run build` with the output in `dist/`.

---

## Contact

**MD Samiul Haque**
- Email: samiultahsin2001@gmail.com
- GitHub: [mdsamiulhaq03](https://github.com/mdsamiulhaq03)
- LinkedIn: [md-samiul-haq](https://www.linkedin.com/in/md-samiul-haq/)
- Location: Bogura, Bangladesh
