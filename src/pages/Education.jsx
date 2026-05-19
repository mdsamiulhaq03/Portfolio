import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  FileText,
  ExternalLink,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import schoolImg from "@/assets/education/school_img.webp";
import universityImg from "@/assets/education/University_img.jpg";
import collegeImg from "@/assets/education/college_img.jpg";


const Education = () => {
  const educationData = [
    {
      school: "Varendra University",
      location: "Rajshahi, Bangladesh",
      duration: "May 2021 - July 2025",
      degree: "Bachelor in Computer Science and Engineering (BSc)",
      grade: "CGPA: 3.56 (89%)",
      image: universityImg,
      resultUrl: null,
      coursework: [
        "Software Development",
        "DSA",
        "OOPs",
        "DBMS",
        "AI",
        "ML",
        "OS",
        "Networking",
      ],
      description:
        "At Varendra University, I developed a solid foundation in computer science, with a strong focus on software development, problem-solving, and practical applications. Participating in hands-on projects, internships, and coding challenges allowed me to further strengthen my technical and analytical skills.",
    },

    {
      school: "Jamur Islamia College",
      location: "Bogura,Bangladesh",
      duration: "June 2018 - July 2020",
      degree: "Higher School Secondary (Hsc)",
      grade: "Percentage: 100%",
      image: collegeImg,
      resultUrl: null,
      subjects: [
        "Physics",
        "Chemistry",
        "Biology",
        "Higher Mathematics",
        "ICT",
        "Computer Science",
      ],
      description:
        "My higher secondary education laid the foundation for my technical journey, strengthening my analytical thinking and problem-solving abilities. The strong emphasis on mathematics and computer science has been instrumental in shaping my passion for software development.",
    },

    {
      school: "Sherpur Dj High School",
      location: "Bogura,Bangladesh",
      duration: "June 2014 - July 2018",
      degree: "Secondary School Certificate(SSC)",
      grade: "Percentage: 98%",
      image: schoolImg,
      resultUrl: null,
      subjects: [
        "Physics",
        "Chemistry",
        "Biology",
        "Math",
        "English",
        "Bangla",
        "ICT",
      ],
      description:
        "My secondary education built a strong foundation in science, mathematics, and ICT, developing my logical thinking and problem-solving skills for future studies in computer science.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={edu.school}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-4 px-5 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-white/40 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest">
                    {edu.school}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-white/30 text-xs pl-7 sm:pl-0">
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-[300px,1fr]">
                {/* Image */}
                <div className="relative h-56 md:h-full border-b md:border-b-0 md:border-r border-white/[0.07]">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover brightness-50"
                  />
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-white/50 text-xs">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/50 text-xs">
                        <Award className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col divide-y divide-white/[0.07]">
                  {/* Degree */}
                  <div className="flex items-center gap-3 px-5 py-3 text-white/50">
                    <BookOpen className="w-4 h-4 flex-shrink-0 text-white/30" />
                    <span className="text-xs uppercase tracking-widest">{edu.degree}</span>
                  </div>

                  {/* Description */}
                  <div className="flex items-start gap-3 px-5 py-4">
                    <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/20" />
                    <p className="text-xs text-white/40 leading-relaxed">{edu.description}</p>
                  </div>

                  {/* Coursework / Subjects */}
                  {(edu.coursework || edu.subjects) && (
                    <div className="flex flex-wrap gap-2 px-5 py-4">
                      {(edu.coursework || edu.subjects).map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 border border-white/10 rounded-full text-white/30"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  {edu.resultUrl && (
                    <div className="px-5 py-4">
                      <motion.a
                        href={edu.resultUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-target inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white/40 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        View Result
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;
