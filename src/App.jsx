import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import TargetCursor from "./components/TargetCursor";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "MD Samiul Haque - Full Stack Developer | MERN Stack Expert",
    description:
      "MD Samiul Haque — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Bogura, Bangladesh.",
  },
  "/about": {
    title: "About - MD Samiul Haque | Full Stack Developer",
    description:
      "Learn about MD Samiul Haque — BSc Computer Science graduate, Full Stack Developer with 1 internship and 5 shipped projects. Based in Bogura, Bangladesh.",
  },
  "/projects": {
    title: "Projects - MD Samiul Haque | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by MD Samiul Haque using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - MD Samiul Haque | React, Node.js, MERN Stack",
    description:
      "Technical skills of MD Samiul Haque — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - MD Samiul Haque | Full Stack Developer",
    description:
      "Professional experience of MD Samiul Haque — Product Researcher at Práce BD, automating data workflows with Python.",
  },
  "/education": {
    title: "Education - MD Samiul Haque | BSc Computer Science",
    description:
      "Educational background of MD Samiul Haque — BSc in Computer Science with 3.56 CGPA.",
  },
  "/certificates": {
    title: "Certificates - MD Samiul Haque | Developer Certifications",
    description:
      "Professional certifications and achievements of MD Samiul Haque in web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - MD Samiul Haque | Hire a Full Stack Developer",
    description:
      "Get in touch with MD Samiul Haque for freelance projects, job opportunities or collaborations. Based in Bogura, Bangladesh.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "MD Samiul Haque - Full Stack Developer",
      description:
        "Portfolio of MD Samiul Haque — Full Stack Developer specializing in MERN stack and modern web technologies.",
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

// Component to wrap routes with fade transition on route change
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
  return (
    <BrowserRouter>
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
