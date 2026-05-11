import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

import FlavorBot from "@/assets/projects_img/FlavorBot.png";
import CineScope from "@/assets/projects_img/CineScope.png";
import CVAnalyzer from "@/assets/projects_img/CVAnalyzer.png";
import HawaSomachar from "@/assets/projects_img/HawaSmachar.png";


const projects = [
    {
title: "CVAnalyzer AI",
description:
  "AI-powered CV analysis platform — upload your CV and get instant ATS scoring, skill gap detection, and a professionally rewritten version. No sign-up required. Built with Next.js 16, Groq (Llama 3.3 70B), and a full shadcn + Spline 3D UI.",
image: CVAnalyzer,
github: "https://github.com/mdsamiulhaq03/CVAnalyzer",
live: "https://cv-tracker-three.vercel.app/",
tags: ["Next.js", "TypeScript", "Groq", "Llama 3.3", "Tailwind", "shadcn/ui", "Spline", "Recharts", "Framer Motion"],
liveStatus: true,
  },

  {
title: "Hawa Somachar 🌤️",
description:
  "A beautifully animated real-time weather app built with Next.js 16, featuring live forecasts, interactive maps, air quality tracking, and smooth scroll animations. Powered by OpenWeatherMap with dark/light mode and GPS location support.",
image: HawaSomachar,
github: "https://github.com/mdsamiulhaq03/WeatherApp",
live: "https://hawasamchar.vercel.app/",
tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "MapLibre GL", "OpenWeatherMap"],
liveStatus: true,
  },
  {
    title: "FlavorBot AI — Smart Recipe Generator",
    description:
      "FlavorBot AI is a React + Vite app that generates recipes from your ingredients using AI, with a clean, fast, and responsive interface.",
    image: FlavorBot,
    github: "https://github.com/mdsamiulhaq03/flavorbot",
    live: "https://flavorbot-five.vercel.app",
    tags: ["Vite", "React", "Tailwind", "JavaScript", "GROQ API"],
    liveStatus: true,
  },

  {
    title: "CineScope — Movie Search Engine",
    description:
      "CineScope is a modern React + TypeScript movie discovery app using TMDB API with a Netflix-inspired UI and fully responsive design.",
    image: CineScope,
    github: "https://github.com/mdsamiulhaq03/CineScope",
    live: "https://cine-scope-samiul.vercel.app",
    tags: ["Vite", "Appwrite", "React", "Tailwind", "TypeScript", "TMDB API"],
    liveStatus: true,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="group flex flex-col h-full border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover brightness-75 group-hover:brightness-90 transition-all duration-200"
              />

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest leading-snug">
                  {project.title}
                </h3>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 border rounded-full flex-shrink-0 ml-2 ${
                    project.liveStatus
                      ? "text-green-400/70 border-green-400/20"
                      : "text-yellow-400/70 border-yellow-400/20"
                  }`}
                >
                  {project.liveStatus ? "Live" : "In progress"}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-grow p-5 gap-4">
                <p className="text-xs text-white/40 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 border border-white/10 rounded-full text-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex gap-2 pt-3 border-t border-white/[0.07]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
