import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import TargetCursor from "./components/TargetCursor";
import ScrollToTop from "./components/ScrollToTop";
import IntroAnimation from "./components/IntroAnimation";
import PageTransition from "./components/PageTransition";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const Research = lazy(() => import("./pages/Research"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "MD Samiul Haque — Full Stack Developer & ML Researcher",
    description:
      "MD Samiul Haque — Full Stack Developer & ML Researcher. Paper published at UCICS 2025. Builds AI-powered apps with React, Next.js, Node.js, and Python. Based in Bogura, Bangladesh.",
  },
  "/about": {
    title: "About — MD Samiul Haque | Full Stack Developer & ML Researcher",
    description:
      "Full-stack developer and ML researcher with a paper published at UCICS 2025 on brain tumor detection. BSc Computer Science, CGPA 3.56. Based in Bogura, Bangladesh.",
  },
  "/projects": {
    title: "Projects — MD Samiul Haque | Full Stack Developer Portfolio",
    description:
      "Full-stack and AI-powered projects by MD Samiul Haque — CVAnalyzer AI, Hawa Somachar, Jotion, FlavorBot. Built with Next.js, React, TypeScript, and Groq LLM.",
  },
  "/skills": {
    title: "Skills — MD Samiul Haque | React, Next.js, Python, PyTorch",
    description:
      "Technical skills of MD Samiul Haque — React, Next.js, Node.js, TypeScript, Python, PyTorch, TensorFlow, MongoDB and more.",
  },
  "/experience": {
    title: "Experience — MD Samiul Haque | Research Officer",
    description:
      "Professional experience of MD Samiul Haque — Research Officer at Práce BD, automating data workflows with Python and delivering analytical dashboards.",
  },
  "/education": {
    title: "Education — MD Samiul Haque | BSc Computer Science",
    description:
      "Educational background of MD Samiul Haque — BSc in Computer Science & Engineering, CGPA 3.56, Varendra University.",
  },
  "/certificates": {
    title: "Certificates — MD Samiul Haque | Developer Certifications",
    description:
      "Professional certifications of MD Samiul Haque — TypeScript, JavaScript, and Python from Geekster and HackerRank.",
  },
  "/research": {
    title: "Research — MD Samiul Haque | ML Researcher | UCICS 2025",
    description:
      "ML research by MD Samiul Haque — transfer learning for brain tumor detection published at UCICS 2025, VGG-16 / ResNet-50 achieving 97% accuracy on MRI classification.",
  },
  "/contact": {
    title: "Contact — MD Samiul Haque | Hire a Full Stack Developer",
    description:
      "Get in touch with MD Samiul Haque for full-time roles, freelance projects, or research collaborations. Based in Bogura, Bangladesh.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "MD Samiul Haque — Full Stack Developer & ML Researcher",
      description:
        "Portfolio of MD Samiul Haque — Full Stack Developer & ML Researcher specializing in React, Next.js, and AI-powered applications.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const pageUrl = `https://portfolio-five-rosy-pzsm9uct65.vercel.app${location.pathname}`;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", pageUrl);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", pageUrl);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", meta.description);
  }, [location]);

  return null;
}

function PageWrapper({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem("intro_played") === "1"
  );

  const handleIntroComplete = () => {
    sessionStorage.setItem("intro_played", "1");
    setIntroDone(true);
  };

  return (
    <BrowserRouter>
      {!introDone && <IntroAnimation onComplete={handleIntroComplete} />}
      <PageTransition />
      <SEOUpdater />
      <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
      <div className="min-h-screen flex flex-col">
<Navbar />
        <main className="flex-grow">
          <PageWrapper>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/research" element={<Research />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </PageWrapper>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
