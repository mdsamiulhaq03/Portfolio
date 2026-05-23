import { useState } from "react";
import { Github, ExternalLink, FolderOpen } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";

import FlavorBot from "@/assets/projects_img/FlavorBot/FlavorBot.png";
import CineScope from "@/assets/projects_img/CineScope/CineScope.png";
import CVAnalyzer from "@/assets/projects_img/CVAnalyzer/CVAnalyzer.png";
import HawaSomachar from "@/assets/projects_img/HawaSomachar/HawaSmachar.png";
import Jotion from "@/assets/projects_img/Jotion/Jotion.png";

const globs = {
  CVAnalyzer:   import.meta.glob("@/assets/projects_img/CVAnalyzer/*",   { eager: true }),
  Jotion:       import.meta.glob("@/assets/projects_img/Jotion/*",       { eager: true }),
  HawaSomachar: import.meta.glob("@/assets/projects_img/HawaSomachar/*", { eager: true }),
  FlavorBot:    import.meta.glob("@/assets/projects_img/FlavorBot/*",    { eager: true }),
  CineScope:    import.meta.glob("@/assets/projects_img/CineScope/*",    { eager: true }),
};

function getImages(glob) {
  return Object.values(glob).map((m) => m.default).sort();
}

const projects = [
  {
    title: "CVAnalyzer AI",
    description:
      "AI-powered CV analysis platform — upload your CV and get instant ATS scoring, skill gap detection, and a professionally rewritten version. No sign-up required. Built with Next.js 16, Groq (Llama 3.3 70B), and a full shadcn + Spline 3D UI.",
    image: CVAnalyzer,
    images: getImages(globs.CVAnalyzer),
    github: "https://github.com/mdsamiulhaq03/CVAnalyzer",
    live: "https://cv-tracker-three.vercel.app/",
    tags: ["Next.js", "TypeScript", "Groq", "Llama 3.3", "Tailwind", "shadcn/ui", "Spline", "Recharts", "Framer Motion"],
    liveStatus: true,
    details: "Built with Next.js 16 App Router and Groq's Llama 3.3 70B for instant inference. Key decisions: server actions for file parsing, Recharts for ATS score visualization, Spline 3D for the landing hero. No sign-up required — CV is processed in-memory and never stored.",
  },
  {
    title: "Jotion - Job & Internship Tracker",
    description:
      "A Notion-style job and internship application tracker built with Next.js, MongoDB, and NextAuth. Includes secure authentication, application status tracking, and a minimal, productivity-focused UI.",
    image: Jotion,
    images: getImages(globs.Jotion),
    github: "https://github.com/mdsamiulhaq03/job-tracker",
    live: "https://jotion-thejobtracker.vercel.app",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "NextAuth",
      "Tailwind",
      "Shadcn/UI",
    ],
    liveStatus: true,
    details: "Notion-inspired UI with drag-and-drop Kanban columns. NextAuth handles Google OAuth with JWT sessions stored in MongoDB. Key challenge: optimistic UI updates on status changes without full refetch.",
  },
  {
    title: "Hawa Somachar 🌤️",
    description:
      "A beautifully animated real-time weather app built with Next.js 16, featuring live forecasts, interactive maps, air quality tracking, and smooth scroll animations. Powered by OpenWeatherMap with dark/light mode and GPS location support.",
    image: HawaSomachar,
    images: getImages(globs.HawaSomachar),
    github: "https://github.com/mdsamiulhaq03/WeatherApp",
    live: "https://hawasamchar.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "MapLibre GL", "OpenWeatherMap"],
    liveStatus: true,
    details: "Uses OpenWeatherMap's One Call API 3.0 for hourly and 7-day forecasts. MapLibre GL renders interactive tile maps. Air quality index data pulled separately. Smooth scroll animations powered by Framer Motion.",
  },
  {
    title: "FlavorBot AI — Smart Recipe Generator",
    description:
      "FlavorBot AI is a React + Vite app that generates recipes from your ingredients using AI, with a clean, fast, and responsive interface.",
    image: FlavorBot,
    images: getImages(globs.FlavorBot),
    github: "https://github.com/mdsamiulhaq03/flavorbot",
    live: "https://flavorbot-five.vercel.app",
    tags: ["Vite", "React", "Tailwind", "JavaScript", "GROQ API"],
    liveStatus: true,
    details: "Sends user ingredient list to Groq API with a structured prompt. React state manages multi-step UX (input → loading → recipe card). Fully client-side — no backend or auth required.",
  },
  {
    title: "CineScope — Movie Search Engine",
    description:
      "CineScope is a modern React + TypeScript movie discovery app using TMDB API with a Netflix-inspired UI and fully responsive design.",
    image: CineScope,
    images: getImages(globs.CineScope),
    github: "https://github.com/mdsamiulhaq03/CineScope",
    live: "https://cine-scope-samiul.vercel.app",
    tags: ["Vite", "Appwrite", "React", "Tailwind", "TypeScript", "TMDB API"],
    liveStatus: true,
    details: "TMDB API integration with Appwrite for persisting search history. TypeScript throughout with strict mode. Netflix-inspired card hover animations built with Framer Motion.",
  },
];

const FILTERS = ["All", "Next.js", "React", "TypeScript", "AI/LLM"];
const AI_TAGS = ["GROQ API", "Groq", "Llama 3.3", "AI/LLM"];

function matchesFilter(project, filter) {
  if (filter === "All") return true;
  if (filter === "AI/LLM") return project.tags.some((t) => AI_TAGS.includes(t));
  return project.tags.includes(filter);
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const featured = projects[0];
  const rest = projects.slice(1);

  const visibleFeatured = matchesFilter(featured, activeFilter) ? featured : null;
  const visibleRest = rest.filter((p) => matchesFilter(p, activeFilter));

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Featured Projects</h2>
        </div>
      </ScrollAnimation>

      {/* Filter pills */}
      <ScrollAnimation>
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeFilter === f
                  ? "border-white/50 text-white/90"
                  : "border-white/10 text-white/30 hover:border-white/25 hover:text-white/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </ScrollAnimation>

      {/* Featured project */}
      <AnimatePresence>
        {visibleFeatured && (
          <motion.div
            key={featured.title}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-5 group flex flex-col border border-white/15 rounded-lg overflow-hidden hover:border-white/25 transition-colors duration-200 relative"
          >
            <span className="absolute top-3 left-3 z-10 text-xs px-2.5 py-0.5 border border-white/20 rounded-full text-white/50 bg-black/60 backdrop-blur-sm">
              ⭐ Featured
            </span>
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="w-full h-56 object-cover brightness-75 group-hover:brightness-90 transition-all duration-200"
            />
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest">
                {featured.title}
              </h3>
              <span className="text-xs font-medium px-2.5 py-0.5 border rounded-full flex-shrink-0 ml-2 text-green-400/70 border-green-400/20">
                Live
              </span>
            </div>
            <div className="flex flex-col flex-grow p-5 gap-4">
              <p className="text-xs text-white/40 leading-relaxed flex-grow">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-0.5 border border-white/10 rounded-full text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-3 border-t border-white/[0.07]">
                <a href={featured.github} target="_blank" rel="noopener noreferrer"
                  className="cursor-target flex items-center gap-1.5 text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-colors">
                  <Github className="w-3 h-3" /> Code
                </a>
                <a href={featured.live} target="_blank" rel="noopener noreferrer"
                  className="cursor-target flex items-center gap-1.5 text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-colors">
                  <ExternalLink className="w-3 h-3" /> Live
                </a>
                <button onClick={() => setSelectedProject(featured)}
                  className="cursor-target flex items-center gap-1.5 text-xs text-white/60 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-1.5 rounded-md transition-colors ml-auto">
                  Read more →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Remaining projects grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence>
          {visibleRest.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group flex flex-col h-full border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200"
            >
              <img src={project.image} alt={project.title}
                loading="lazy"
                className="w-full h-44 object-cover brightness-75 group-hover:brightness-90 transition-all duration-200" />
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest leading-snug">
                  {project.title}
                </h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 border rounded-full flex-shrink-0 ml-2 ${
                  project.liveStatus ? "text-green-400/70 border-green-400/20" : "text-yellow-400/70 border-yellow-400/20"
                }`}>
                  {project.liveStatus ? "Live" : "In progress"}
                </span>
              </div>
              <div className="flex flex-col flex-grow p-5 gap-4">
                <p className="text-xs text-white/40 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-0.5 border border-white/10 rounded-full text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-3 border-t border-white/[0.07]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="cursor-target flex items-center gap-1.5 text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-colors">
                    <Github className="w-3 h-3" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="cursor-target flex items-center gap-1.5 text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-colors">
                    <ExternalLink className="w-3 h-3" /> Live
                  </a>
                  <button onClick={() => setSelectedProject(project)}
                    className="cursor-target flex items-center gap-1.5 text-xs text-white/60 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.03] px-3 py-1.5 rounded-md transition-colors ml-auto">
                    More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Projects;
