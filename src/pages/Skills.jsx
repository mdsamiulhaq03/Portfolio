import {
  Code2,
  Layout,
  Server,
  Database,
  MessageSquare,
  Brain,
  Cloud,
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
  AWSLogo,
  RenderLogo,
  PostmanLogo,
  BashLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
  CppLogo,
  Html5,
  Css3,
  Bootstrap,
  MySQL,
  Firebase,
  SQLite,
  Android,
  MachineLearning,
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

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "HTML5", icon: <Html5 /> },
      { name: "CSS", icon: <Css3 /> },
    ],
  },
  {
    category: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React.js", icon: <ReactLogo /> },
      { name: "Next.js", icon: <NextjsLogo /> },
      { name: "Tailwind", icon: <TailwindLogo /> },
      { name: "Redux", icon: <ReduxLogo /> },
      { name: "Bootstrap", icon: <Bootstrap /> },
    ],
  },
  {
    category: "Back-End Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "Express", icon: <ExpressLogo /> },
      { name: "JWT", icon: <JWTLogo /> },
      { name: "Bcrypt", icon: <BcryptLogo /> },
    ],
  },
  {
    category: "Databases & Cloud Storage",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "Appwrite", icon: <Appwrite /> },
      { name: "Firebase", icon: <Firebase /> },
      { name: "SQLite", icon: <SQLite /> },
    ],
  },
  {
    category: "Version Control & DevOps",
    icon: <GitLogo />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitHub /> },
      { name: "Vercel", icon: <VercelLogo /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Git Desktop", icon: <GitLogo /> },
      { name: "Figma", icon: <Figma /> },
      { name: "Jupyter", icon: <Jupyter /> },
    ],
  },

  {
    category: "Machine Learning & Deep Learning",
    icon: <BrainCircuit className="w-6 h-6" />,
    items: [
      { name: "PyTorch", icon: <PyTorchLogo /> },
      { name: "TensorFlow", icon: <TensorFlow /> },
      { name: "Keras", icon: <KerasLogo /> },
    ],
  },
  {
    category: "Data Analysis & Visualization",
    icon: <Eye className="w-6 h-6" />,
    items: [
      { name: "Pandas", icon: <Pandas /> },
      { name: "Numpy", icon: <Numpy /> },
      { name: "Scikit-Learn", icon: <SkLearn /> },
    ],
  },

  {
    category: "Operating Systems",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "Windows", icon: <WindowsLogo className="w-4 h-4" /> },
      { name: "Ubuntu", icon: <UbuntuLogo className="w-4 h-4" /> },
      { name: "Linux", icon: <LinuxLogo className="w-4 h-4" /> },
      { name: "Android", icon: <Android className="w-4 h-4" /> },
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
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and tools I work
          with
        </p>
      </ScrollAnimation>

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
