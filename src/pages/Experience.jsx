import { motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";


const experiences = [
  {
    title: "Research Officer",
    company: "Práce BD",
    location: "Rajshahi, Bangladesh",
    period: "Feb 2025 – Present",
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
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Professional Experience</h2>
        </div>
      </ScrollAnimation>

      <div className="relative pl-6 border-l border-white/10 space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full border border-white/20 bg-white/70" />

              {/* Date */}
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2">{exp.period}</p>

              {/* Role + company */}
              <h3 className="text-base font-semibold text-white/85 mb-0.5">{exp.title}</h3>
              <p className="text-sm text-white/40 mb-1">
                {exp.company}
                <span className="mx-2 text-white/20">·</span>
                {exp.type}
                <span className="mx-2 text-white/20">·</span>
                {exp.location}
              </p>

              {/* Description bullets */}
              <ul className="mt-4 space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/45 leading-relaxed hover:text-white/70 transition-colors">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/25" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Certificate link */}
              {exp.certificateUrl && (
                <motion.a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-xs font-medium text-white/50 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  View Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;