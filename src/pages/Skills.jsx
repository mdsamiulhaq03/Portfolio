import {
  Code2,
  Layout,
  Server,
  Database,
  MessageSquare,
  Brain,
  Terminal,
  Wrench,
  Users,
  BrainCircuit,
  Eye,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  PythonLogo,
  ReduxLogo,
  ExpressLogo,
  BcryptLogo,
  JWTLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
  Html5,
  Css3,
  Bootstrap,
  Firebase,
  SQLite,
  Android,
  PyTorchLogo,
  TensorFlow,
  KerasLogo,
  Pandas,
  Numpy,
  SkLearn,
  GitHub,
  Figma,
  Jupyter,
  Appwrite,
} from "@/components/TechLogos";

const DOTS = {
  strong:      [1, 1, 1],
  comfortable: [1, 1, 0],
  familiar:    [1, 0, 0],
};

function ProficiencyDots({ level }) {
  if (!level) return null;
  return (
    <div className="flex gap-[3px] ml-auto flex-shrink-0">
      {DOTS[level].map((filled, i) => (
        <span
          key={i}
          className={`block w-1.5 h-1.5 rounded-full ${filled ? "bg-white/70" : "bg-white/15"}`}
        />
      ))}
    </div>
  );
}

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "JavaScript", icon: <JavaScriptLogo />, level: "strong" },
      { name: "TypeScript", icon: <TypeScriptLogo />, level: "comfortable" },
      { name: "Python", icon: <PythonLogo />, level: "comfortable" },
      { name: "HTML5", icon: <Html5 />, level: "strong" },
      { name: "CSS", icon: <Css3 />, level: "strong" },
    ],
  },
  {
    category: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React.js", icon: <ReactLogo />, level: "strong" },
      { name: "Next.js", icon: <NextjsLogo />, level: "comfortable" },
      { name: "Tailwind", icon: <TailwindLogo />, level: "strong" },
      { name: "Redux", icon: <ReduxLogo />, level: "comfortable" },
      { name: "Bootstrap", icon: <Bootstrap />, level: "comfortable" },
    ],
  },
  {
    category: "Back-End Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <NodeLogo />, level: "strong" },
      { name: "Express", icon: <ExpressLogo />, level: "strong" },
      { name: "JWT", icon: <JWTLogo />, level: "strong" },
      { name: "Bcrypt", icon: <BcryptLogo />, level: "comfortable" },
    ],
  },
  {
    category: "Databases & Cloud Storage",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <MongoDBLogo />, level: "strong" },
      { name: "Appwrite", icon: <Appwrite />, level: "comfortable" },
      { name: "Firebase", icon: <Firebase />, level: "comfortable" },
      { name: "SQLite", icon: <SQLite />, level: "familiar" },
    ],
  },
  {
    category: "Version Control & DevOps",
    icon: <GitLogo />,
    items: [
      { name: "Git", icon: <GitLogo />, level: "strong" },
      { name: "GitHub", icon: <GitHub />, level: "strong" },
      { name: "Vercel", icon: <VercelLogo />, level: "comfortable" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "VS Code", icon: <VSCodeLogo />, level: "strong" },
      { name: "Git Desktop", icon: <GitLogo />, level: "comfortable" },
      { name: "Figma", icon: <Figma />, level: "comfortable" },
      { name: "Jupyter", icon: <Jupyter />, level: "comfortable" },
    ],
  },

  {
    category: "Machine Learning & Deep Learning",
    icon: <BrainCircuit className="w-6 h-6" />,
    items: [
      { name: "PyTorch", icon: <PyTorchLogo />, level: "familiar" },
      { name: "TensorFlow", icon: <TensorFlow />, level: "familiar" },
      { name: "Keras", icon: <KerasLogo />, level: "familiar" },
    ],
  },
  {
    category: "Data Analysis & Visualization",
    icon: <Eye className="w-6 h-6" />,
    items: [
      { name: "Pandas", icon: <Pandas />, level: "comfortable" },
      { name: "Numpy", icon: <Numpy />, level: "comfortable" },
      { name: "Scikit-Learn", icon: <SkLearn />, level: "familiar" },
    ],
  },

  {
    category: "Operating Systems",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "Windows", icon: <WindowsLogo className="w-4 h-4" />, level: "strong" },
      { name: "Ubuntu", icon: <UbuntuLogo className="w-4 h-4" />, level: "comfortable" },
      { name: "Linux", icon: <LinuxLogo className="w-4 h-4" />, level: "comfortable" },
      { name: "Android", icon: <Android className="w-4 h-4" />, level: "familiar" },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Debugging", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Technical Skills</h2>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and tools I work
          with
        </p>
      </ScrollAnimation>

      {/* Proficiency legend */}
      <div className="flex items-center gap-5 mb-8 px-1">
        {[
          { level: "strong", label: "Strong" },
          { level: "comfortable", label: "Comfortable" },
          { level: "familiar", label: "Familiar" },
        ].map(({ level, label }) => (
          <div key={level} className="flex items-center gap-2">
            <ProficiencyDots level={level} />
            <span className="text-xs text-white/30 uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="flex flex-col border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200">
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
                <span className="text-white/60">{skillGroup.icon}</span>
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.07]">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-3 text-white/40 hover:text-white hover:bg-white/5 transition-colors group"
                  >
                    <span className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-medium">{skill.name}</span>
                    <ProficiencyDots level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
