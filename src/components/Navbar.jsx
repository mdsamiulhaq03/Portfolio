import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import SearchDialog from "./SearchDialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/education", label: "Education" },
    { path: "/experience", label: "Experience" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/certificates", label: "Certificates" },
    { path: "/research", label: "Research" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
          >
            <Code2 className="w-5 h-5" aria-hidden="true" />
            <span className="text-base font-semibold uppercase tracking-widest">
              Samiul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <SearchDialog />
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={
                  location.pathname === link.path ? "page" : undefined
                }
                className={`cursor-target px-3 py-1.5 text-base uppercase tracking-widest rounded transition-colors duration-150 ${
                  location.pathname === link.path
                    ? "text-white border-b border-white/50"
                    : "text-white/30 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            <SearchDialog />
            <button
              className="p-1.5 border border-white/10 rounded text-white/40 hover:text-white hover:border-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Menu className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="divide-y divide-white/[0.07]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                aria-current={
                  location.pathname === link.path ? "page" : undefined
                }
                className={`flex items-center px-5 py-3 text-base uppercase tracking-widest transition-colors ${
                  location.pathname === link.path
                    ? "text-white bg-white/5"
                    : "text-white/30 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
