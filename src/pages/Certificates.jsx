import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

import typescriptPdf from "@/assets/files/certificates_pdf/TypeScript.pdf";

import javascriptPdf from "@/assets/files/certificates_pdf/javascript.pdf";

import pythonPdf from "@/assets/files/certificates_pdf/python.pdf";


const certificates = [
  {
    title: "Typescript Programming",
    issuer: "Geekster",
    date: "22th April 2025",
    link: typescriptPdf,
    description:
      "Covers TypeScript fundamentals, including syntax, types. Includes practical examples and real-world applications.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
    ],
  },
 
  {
    title: "JavaScript Programming",
    issuer: "HackerRank",
    date: "18th February 2025",
    link: javascriptPdf,
    description:
      "Validates JavaScript fundamentals, including syntax, functions, and problem-solving.",
    skills: ["JavaScript", "ES6", "Asynchronous Programming"],
  },
  
  {
    title: "Python Programming",
    issuer: "HackerRank",
    date: "10 Oct 2023",
    link: pythonPdf,
    description:
      "Validates Python basics, including loops, functions, and data structures.",
    skills: ["Python", "Functions", "Data Structures"],
  },
  
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid sm:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest leading-snug">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/30 text-xs flex-shrink-0 mt-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-grow p-5 gap-4">
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
                  {cert.issuer}
                </span>
                <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 border border-white/10 rounded-full text-white/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target inline-flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white border border-white/10 hover:border-white/20 rounded-md px-4 py-2 w-fit transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  View Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;