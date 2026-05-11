import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";


const experiences = [
  {
    title: "Product Researcher",
    company: "Práce BD",
    location: "OnSite-Rajshahi",
    period: "Feb 2025 - Aug 2026",
    type: "Part-Time",
    certificateUrl: null,
    description: [
      "Automated processing and validation of 10,000+ records using Python, reducing manual review time by ~40%, and built reusable reporting scripts supporting hiring and operations decisions.",
      "Collaborated with HR and operations teams to translate business needs into reproducible, data-driven workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="group flex flex-col border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
                <div className="p-2 bg-white/10 rounded-md">
                  <Building2 className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-white/40 mt-0.5">{exp.company}</p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 px-5 py-3 border-b border-white/[0.07] text-xs text-white/40">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.location}</span>
                <span>•</span>
                <span>{exp.period}</span>
                <span className="px-2 py-0.5 border border-white/10 rounded-full text-white/30">
                  {exp.type}
                </span>
              </div>

              {/* Description */}
              <div className="divide-y divide-white/[0.07]">
                {exp.description.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-5 py-3 text-sm text-white/50 hover:text-white/80 hover:bg-white/[0.03] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/30" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              {exp.certificateUrl && (
                <div className="px-5 py-4 border-t border-white/[0.07]">
                  <motion.a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white/50 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Certificate
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;