import { Github, ExternalLink, Star } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

import FlavorBot from "@/assets/projects_img/FlavorBot.png";
import CineScope from "@/assets/projects_img/CineScope.png";

const projects = [
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
            <div
              className="group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-200"
              style={{ background: "#0f0f0f", borderColor: "#2a2a2a" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#444")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#2a2a2a")
              }
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover brightness-90"
              />

              {/* Body */}
              <div className="flex flex-col flex-grow p-5 gap-3">
                {/* Status */}
                <div className="flex items-center justify-end">
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{
                      background: project.liveStatus ? "#1a2e1a" : "#2a2010",
                      color: project.liveStatus ? "#4ade80" : "#fbbf24",
                      border: `0.5px solid ${
                        project.liveStatus ? "#2a4a2a" : "#4a3a10"
                      }`,
                    }}
                  >
                    {project.liveStatus ? "Live" : "In progress"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium text-neutral-100 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-500 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full text-neutral-500"
                      style={{
                        background: "#161616",
                        border: "0.5px solid #2a2a2a",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-3 mt-1"
                  style={{ borderTop: "0.5px solid #1e1e1e" }}
                >
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-300 transition-colors px-2.5 py-1.5 rounded-md"
                      style={{
                        background: "#111",
                        border: "0.5px solid #222",
                      }}
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-300 transition-colors px-2.5 py-1.5 rounded-md"
                      style={{
                        background: "#111",
                        border: "0.5px solid #222",
                      }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  </div>
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
