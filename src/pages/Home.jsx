import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSWR from "swr";
import cvPdf from "@/assets/files/cv_pdf/Samiul_Haque_CV.pdf";
import { CONTACT_INFO } from "@/config/contact";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = CONTACT_INFO.email;
  const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, "");

  const { data: githubData } = useSWR(
    "https://api.github.com/users/mdsamiulhaq03",
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60000 }
  );

  function formatRepoCount(count) {
    if (count < 10) return count.toString();
    if (count < 100) return `${Math.floor(count / 10) * 10}+`;
    return `${Math.floor(count / 100) * 100}+`;
  }

  const displayRepos = formatRepoCount(githubData?.public_repos || 0);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative w-full max-w-7xl mx-auto" style={{ height: "calc(100vh - 80px)" }}>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="flex flex-col md:flex-row h-full">
          {/* Left — hero content */}
          <div className="flex-1 flex flex-col justify-center px-10 py-10 relative z-10">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              MD Samiul Haque
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/50 mb-5 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              I design & code for web
            </motion.h2>

            <motion.p
              className="text-sm text-white/40 mb-8 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Software Developer specializing in Full Stack Development with
              expertise in React.js, Node.js and modern Web Technologies.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* CTA buttons */}
              <div className="flex gap-3">
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                  Download CV
                </a>
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  <User className="w-3.5 h-3.5" aria-hidden="true" />
                  About Me
                </Link>
              </div>

              {/* Email copy */}
              <button
                onClick={handleEmailClick}
                className="group flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded transition-colors cursor-copy sm:cursor-pointer w-fit"
                aria-label={`Email: ${email}`}
              >
                <div className="w-3 text-white/20 group-hover:text-white/50 transition-colors">
                  <VercelLogo />
                </div>
                <span className="text-xs text-white/30 group-hover:text-white/70 transition-colors font-mono">
                  {email}
                </span>
                <div className="ml-1 hidden sm:block text-white/20 group-hover:text-white/50 transition-colors">
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-400/70" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                </div>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex border border-white/10 rounded-lg overflow-hidden divide-x divide-white/[0.07] w-fit">
                <motion.a
                  href="https://github.com/mdsamiulhaq03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 px-6 py-3 text-white/30 hover:text-white hover:bg-white/5 transition-colors group"
                  whileHover={{ y: -1 }}
                  aria-label="Visit GitHub profile"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                    {displayRepos}
                  </span>
                  <span className="text-xs uppercase tracking-widest">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/md-samiul-haq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 px-6 py-3 text-white/30 hover:text-white hover:bg-white/5 transition-colors group"
                  whileHover={{ y: -1 }}
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                    50+
                  </span>
                  <span className="text-xs uppercase tracking-widest">LinkedIn</span>
                </motion.a>

                <motion.a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 px-6 py-3 text-white/30 hover:text-white hover:bg-white/5 transition-colors group"
                  whileHover={{ y: -1 }}
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                    24x7
                  </span>
                  <span className="text-xs uppercase tracking-widest">WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right — Spline 3D scene */}
          <div className="flex-1 relative min-h-[400px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
