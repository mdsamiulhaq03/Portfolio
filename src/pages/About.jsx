import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Briefcase, GraduationCap, Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import profileImg from "@/assets/profile/profile.jpg";
import cvPdf from "@/assets/files/cv_pdf/Samiul_Haque_CV.pdf";

const About = () => {
  const achievements = [
    {
      icon: Code2,
      title: "5+ Projects",
      description: "Completed full-stack web applications",
    },
    {
      icon: Briefcase,
      title: "1 Internship",
      description: "Professional work experience",
    },
    {
      icon: GraduationCap,
      title: "3.56 CGPA",
      description: "Academic excellence",
    },
  ];

  const interests = [
    "Web Development",
    "Cloud Computing",
    "Open Source",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      {/* Title */}
      <ScrollAnimation>
        <motion.h2
          className="text-4xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>
      </ScrollAnimation>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Profile Image */}
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="MD Samiul Haque"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        {/* Content */}
        <ScrollAnimation>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hi! I'm a passionate full-stack developer with expertise in
                building modern web applications. My journey in tech started
                during my college years, where I discovered my love for creating
                innovative solutions through code.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I completed my BSc in Computer Science, maintaining a strong
                academic record while actively engaging in real-world projects
                and internships. This blend of theoretical knowledge and
                practical experience has shaped my approach to problem-solving
                and software development.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I specialize in HTML, CSS, JavaScript, React, Node.js, and
                modern web technologies, with a keen interest in building
                performant and user-friendly applications.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Quick Facts
              </h3>

              <ul className="space-y-3">
                {[
                  "Based in Bangladesh",
                  "BSc in Computer Science",
                  "CGPA: 3.56",
                ].map((fact) => (
                  <li
                    key={fact}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={cvPdf}
                download
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download CV
              </a>

              <Link
                to="/skills"
                className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                My Skills
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Achievements */}
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
                  <item.icon className="w-6 h-6 text-white mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Interests */}
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3 hover:bg-white/10 transition">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
