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
import { useState, useRef } from "react";
import useSWR from "swr";
import cvPdf from "@/assets/files/cv_pdf/Samiul_Haque_CV.pdf";
import { CONTACT_INFO } from "@/config/contact";
import { Spotlight } from "@/components/ui/spotlight";
import TextPressure from "@/components/TextPressure";
import VariableProximity from "@/components/VariableProximity";
import profileDp from "@/assets/profile/Dp.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const [copied, setCopied] = useState(false);
  const heroRef = useRef(null);
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
      <div className="relative w-full max-w-4xl mx-auto md:h-[calc(100vh-80px)]">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div ref={heroRef} className="flex flex-col md:flex-row items-center justify-between h-full gap-10 py-10 relative z-10">

          {/* Left — text content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Name — TextPressure */}
            <motion.div
              className="w-full mb-2"
              style={{ height: '120px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TextPressure
                text="MD Samiul Haque"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                minFontSize={28}
              />
            </motion.div>

            <motion.div
              className="text-xl sm:text-2xl font-bold text-white/50 mb-4 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <VariableProximity
                label="Full Stack Developer · MERN · Next.js · TypeScript"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={heroRef}
                radius={150}
                falloff="linear"
              />
            </motion.div>

            <motion.div
              className="text-sm text-white/40 mb-8 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <VariableProximity
                label="BSc Computer Science graduate building production-ready web apps. 5 shipped projects, 1 internship, actively seeking full-time roles."
                fromFontVariationSettings="'wght' 300, 'opsz' 9"
                toFontVariationSettings="'wght' 700, 'opsz' 40"
                containerRef={heroRef}
                radius={120}
                falloff="gaussian"
              />
            </motion.div>

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
                  className="cursor-target flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                  Download CV
                </a>
                <Link
                  to="/about"
                  className="cursor-target flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
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
                  className="cursor-target flex flex-col items-center gap-1.5 px-6 py-3 text-white/30 hover:text-white hover:bg-white/5 transition-colors group"
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
                  className="cursor-target flex flex-col items-center gap-1.5 px-6 py-3 text-white/30 hover:text-white hover:bg-white/5 transition-colors group"
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
                  className="cursor-target flex flex-col items-center gap-1.5 px-6 py-3 text-white/30 hover:text-white hover:bg-white/5 transition-colors group"
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

          {/* Right — profile photo */}
          <motion.div
            className="hidden md:flex flex-shrink-0 items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              {/* Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src={profileDp}
                  alt="MD Samiul Haque"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
