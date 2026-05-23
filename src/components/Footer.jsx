import { Link } from "react-router-dom";
import { Code2, Github, Linkedin, Mail, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      label: "Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Education", path: "/education" },
        { name: "Experience", path: "/experience" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Certificates", path: "/certificates" },
        { name: "Research", path: "/research" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  const socials = [
    {
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
      href: CONTACT_INFO.github,
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
      href: CONTACT_INFO.linkedin,
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      href: `tel:${CONTACT_INFO.phone}`,
    },
  ];

  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">

          {/* Branding */}
          <div className="py-10 md:pr-10">
            <Link
              to="/"
              className="cursor-target inline-flex items-center gap-2.5 text-white/70 hover:text-white transition-colors mb-4"
            >
              <Code2 className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                MD Samiul Haque
              </span>
            </Link>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              Full Stack Developer & ML Researcher based in Bogura, Bangladesh. Building AI-powered apps and modern web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="py-10 md:px-10">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6">
              {columns[0].links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="cursor-target py-1.5 text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="py-10 md:pl-10">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex flex-col border border-white/10 rounded-lg overflow-hidden">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className={`cursor-target flex items-center gap-3 px-4 py-2.5 text-white/30 hover:text-white hover:bg-white/[0.03] transition-colors ${
                    i < socials.length - 1 ? "border-b border-white/[0.07]" : ""
                  }`}
                >
                  {s.icon}
                  <span className="text-xs uppercase tracking-widest">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-5 border-t border-white/[0.07]">
          <p className="text-xs text-white/20 uppercase tracking-widest">
            © {currentYear} MD Samiul Haque
          </p>
          <p className="text-xs text-white/20 uppercase tracking-widest">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
