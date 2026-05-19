import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/interfaces-carousel"

const ProjectModal = ({ project, onClose }) => {
  const images = project?.images?.length ? project.images : project ? [project.image] : []

  useEffect(() => {
    if (!project) return
    const onKey = (e) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="pointer-events-auto relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-black border border-white/10 rounded-lg"
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-1.5 border border-white/10 hover:border-white/25 rounded text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image carousel */}
              <Carousel className="w-full" orientation="horizontal" opts={{ loop: true }}>
                <CarouselContent className="-ml-0">
                  {images.map((src, i) => (
                    <CarouselItem key={i} className="pl-0">
                      <div className="relative w-full h-56 bg-black overflow-hidden">
                        <img
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover brightness-75"
                        />
                        {images.length > 1 && (
                          <div className="absolute top-2 left-2 text-xs text-white/50 bg-black/60 px-2 py-0.5 rounded">
                            {i + 1} / {images.length}
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2 bg-black/60 border-white/10 hover:border-white/30 text-white/50 hover:text-white hover:bg-black/80" />
                    <CarouselNext className="right-2 bg-black/60 border-white/10 hover:border-white/30 text-white/50 hover:text-white hover:bg-black/80" />
                  </>
                )}
              </Carousel>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest pr-8">
                  {project.title}
                </h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 border rounded-full flex-shrink-0 ${
                  project.liveStatus ? "text-green-400/70 border-green-400/20" : "text-yellow-400/70 border-yellow-400/20"
                }`}>
                  {project.liveStatus ? "Live" : "In progress"}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <p className="text-sm text-white/50 leading-relaxed">{project.description}</p>

                {project.details && (
                  <div>
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                      Technical Notes
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed">{project.details}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-0.5 border border-white/10 rounded-full text-white/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2 border-t border-white/[0.07]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white/50 hover:text-white border border-white/10 hover:border-white/25 px-4 py-2 rounded-md transition-colors">
                    <Github className="w-3.5 h-3.5" /> View Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white/50 hover:text-white border border-white/10 hover:border-white/25 px-4 py-2 rounded-md transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
