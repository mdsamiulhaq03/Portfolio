import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Briefcase, GraduationCap, Globe, User } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import ProfileCard from "@/components/ProfileCard";
import profileImg from "@/assets/profile/profile.jpg";
import cvPdf from "@/assets/files/cv_pdf/Samiul_Haque_CV.pdf";

const About = () => {
  const achievements = [
    {
      icon: Code2,
      title: "5 Projects",
      description: "Shipped full-stack web applications",
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
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <User className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">About Me</h2>
        </motion.div>
      </ScrollAnimation>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Profile Card */}
        <ScrollAnimation>
          <div className="flex justify-center">
            <ProfileCard
              avatarUrl={profileImg}
              name=""
              title=""
              showUserInfo={false}
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(125, 190, 255, 0.5)"
              innerGradient="linear-gradient(145deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)"
              maxHeight={420}
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
              <h3 className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-4">
                Quick Facts
              </h3>
              <div className="flex flex-col border border-white/10 rounded-lg overflow-hidden">
                {[
                  "Based in Bangladesh",
                  "BSc in Computer Science",
                  "CGPA: 3.56",
                ].map((fact, i, arr) => (
                  <div
                    key={fact}
                    className={`flex items-center gap-3 px-4 py-3 text-sm text-white/50 hover:text-white hover:bg-white/5 transition-colors ${i < arr.length - 1 ? "border-b border-white/[0.07]" : ""}`}
                  >
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full flex-shrink-0" />
                    {fact}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={cvPdf}
                download
                className="cursor-target px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download CV
              </a>

              <Link
                to="/skills"
                className="cursor-target px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
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
          <h3 className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-6">
            Achievements
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="flex flex-col border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
                    <item.icon className="w-4 h-4 text-white/60" />
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest">{item.title}</h4>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm text-white/40">{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Interests */}
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-6">
            Areas of Interest
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="flex items-center gap-3 px-4 py-3 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-colors duration-200 text-white/40 hover:text-white">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{interest}</span>
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
