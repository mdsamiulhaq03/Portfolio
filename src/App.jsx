import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

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
      "Learn about MD Samiul Haque — BSc Computer Science graduate, Full Stack Developer with 3+ internships and 10+ projects. Based in Bogura, Bangladesh.",
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
      "Professional experience of MD Samiul Haque including 3+ internships in full stack web development.",
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

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://portfolio-five-rosy-pzsm9uct65.vercel.app${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://portfolio-five-rosy-pzsm9uct65.vercel.app${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
<Navbar />
        <main className="flex-grow">
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
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
