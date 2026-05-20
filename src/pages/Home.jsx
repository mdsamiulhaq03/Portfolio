import { VercelLogo } from "@/components/TechLogos";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  User,
  Eye,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
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
  const [cvOpen, setCvOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setCvOpen(false); };
    if (cvOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [cvOpen]);
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
    <>
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative w-full max-w-4xl mx-auto md:h-[calc(100vh-80px)]">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div ref={heroRef} className="flex flex-col md:flex-row items-center justify-between h-full gap-10 py-10 relative z-10">

          {/* Left — text content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Name — TextPressure */}
            <motion.div
              className="w-full mb-2"
              style={{ height: '80px' }}
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
                <button
                  onClick={() => setCvOpen(true)}
                  className="cursor-target flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                  Preview CV
                </button>
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

          {/* Right — profile photo with floating skill badges */}
          <motion.div
            className="hidden md:flex flex-shrink-0 items-center justify-center pr-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">

              {/* Dark background circle behind photo */}
              <div
                className="absolute -inset-8 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(20,20,30,0.9) 40%, transparent 75%)' }}
              />

              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.08) 75%, transparent 100%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              />
              {/* Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src={profileDp}
                  alt="MD Samiul Haque"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating tech badges */}

              {/* React — top right of circle */}
              <motion.div
                className="absolute -top-4 right-4"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 11px', borderRadius: '999px',
                  background: 'rgba(15,15,15,0.88)', border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)', fontSize: '11px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)', letterSpacing: '0.03em', whiteSpace: 'nowrap',
                  boxShadow: '0 0 10px rgba(255,255,255,0.06)',
                }}>
                  {/* React official atom logo */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}>
                    <circle cx="12" cy="12" r="2.05" fill="rgba(255,255,255,0.75)"/>
                    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.15" fill="none"/>
                    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.15" fill="none" transform="rotate(60 12 12)"/>
                    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.15" fill="none" transform="rotate(120 12 12)"/>
                  </svg>
                  React
                </span>
              </motion.div>

              {/* Node.js — left middle */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-14"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 11px', borderRadius: '999px',
                  background: 'rgba(15,15,15,0.88)', border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)', fontSize: '11px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)', letterSpacing: '0.03em', whiteSpace: 'nowrap',
                  boxShadow: '0 0 10px rgba(255,255,255,0.06)',
                }}>
                  {/* Node.js official hexagon badge logo */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)" style={{flexShrink:0}}>
                    <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.65c-.48.28-.78.79-.78 1.33v8.04c0 .54.3 1.05.78 1.33l7.44 4.3c.23.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.79.78-1.33V7.98c0-.54-.3-1.05-.78-1.33L12.78 2.05c-.23-.13-.5-.2-.78-.2zm0 1.9l6.8 3.93v7.64L12 19.25l-6.8-3.93V7.68L12 3.75z"/>
                  </svg>
                  Node.js
                </span>
              </motion.div>

              {/* TypeScript — top left */}
              <motion.div
                className="absolute -top-5 left-10"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 11px', borderRadius: '999px',
                  background: 'rgba(15,15,15,0.88)', border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)', fontSize: '11px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)', letterSpacing: '0.03em', whiteSpace: 'nowrap',
                  boxShadow: '0 0 10px rgba(255,255,255,0.06)',
                }}>
                  {/* TypeScript official rounded-square TS logo */}
                  <svg width="13" height="13" viewBox="0 0 24 24" style={{flexShrink:0}}>
                    <rect x="1" y="1" width="22" height="22" rx="3.5" fill="rgba(255,255,255,0.75)"/>
                    <text x="12" y="17.2" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="10.5" fill="rgba(0,0,0,0.85)">TS</text>
                  </svg>
                  TypeScript
                </span>
              </motion.div>

              {/* Next.js — bottom left */}
              <motion.div
                className="absolute -bottom-5 left-6"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.0, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 11px', borderRadius: '999px',
                  background: 'rgba(15,15,15,0.88)', border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)', fontSize: '11px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)', letterSpacing: '0.03em', whiteSpace: 'nowrap',
                  boxShadow: '0 0 10px rgba(255,255,255,0.06)',
                }}>
                  {/* Next.js official logo — circle with stylised N */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)" style={{flexShrink:0}}>
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                  </svg>
                  Next.js
                </span>
              </motion.div>

              {/* MongoDB — bottom right */}
              <motion.div
                className="absolute -bottom-3 right-6"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 11px', borderRadius: '999px',
                  background: 'rgba(15,15,15,0.88)', border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)', fontSize: '11px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)', letterSpacing: '0.03em', whiteSpace: 'nowrap',
                  boxShadow: '0 0 10px rgba(255,255,255,0.06)',
                }}>
                  {/* MongoDB official leaf logo */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)" style={{flexShrink:0}}>
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
                  </svg>
                  MongoDB
                </span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {cvOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setCvOpen(false)}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-3xl h-[90vh] flex flex-col rounded-lg overflow-hidden border border-white/10"
            style={{ background: 'rgba(10,10,12,0.97)' }}
            initial={{ scale: 0.92, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
              <span className="text-xs uppercase tracking-widest text-white/40">Samiul_Haque_CV.pdf</span>
              <div className="flex items-center gap-2">
                <a
                  href={cvPdf}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-white/15 hover:border-white/30 hover:bg-white/5 rounded text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  <FileDown className="w-3 h-3" />
                  Download
                </a>
                <button
                  onClick={() => setCvOpen(false)}
                  className="flex items-center justify-center w-7 h-7 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded text-white/40 hover:text-white transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <iframe
              src={`${cvPdf}#toolbar=0&navpanes=0&scrollbar=1`}
              className="flex-1 w-full"
              title="CV Preview"
              style={{ border: 'none', background: '#fff' }}
            />
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
