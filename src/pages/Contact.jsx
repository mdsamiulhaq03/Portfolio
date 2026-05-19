import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@/config/contact";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: CONTACT_INFO.location,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Time Zone",
      value: CONTACT_INFO.timezone,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: CONTACT_INFO.github,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: CONTACT_INFO.linkedin,
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      link: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}`,
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Get in Touch
          </h2>
        </motion.div>

        <RotatingEarth width={900} height={280} className="hidden sm:block w-full mb-8" />

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
                <h3 className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                  Contact Information
                </h3>
              </div>
              <div className="divide-y divide-white/[0.07]">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-center gap-3 px-5 py-3 text-white/40 hover:text-white hover:bg-white/[0.03] transition-colors group"
                      >
                        <span className="flex-shrink-0">{info.icon}</span>
                        <div>
                          <p className="text-xs text-white/30 uppercase tracking-widest">{info.label}</p>
                          <p className="text-sm text-white/60 group-hover:text-white transition-colors">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 px-5 py-3 text-white/40">
                        <span className="flex-shrink-0">{info.icon}</span>
                        <div>
                          <p className="text-xs text-white/30 uppercase tracking-widest">{info.label}</p>
                          <p className="text-sm text-white/60">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
                <h3 className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                  Connect with Me
                </h3>
              </div>
              <div className="divide-y divide-white/[0.07]">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 px-5 py-3 text-white/40 hover:text-white hover:bg-white/[0.03] transition-colors"
                  >
                    {social.icon}
                    <span className="text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col border border-white/10 rounded-lg overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
              <h3 className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-white/40 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 rounded-md bg-white/[0.03] border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-colors text-sm text-white/80"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-white/40 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 rounded-md bg-white/[0.03] border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-colors text-sm text-white/80"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-white/40 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2.5 rounded-md bg-white/[0.03] border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-colors text-sm text-white/80"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white/40 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2.5 rounded-md bg-white/[0.03] border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-colors resize-none text-sm text-white/80"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-target w-full px-6 py-2.5 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400/70 text-center text-sm border border-green-400/20 rounded-md py-2"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400/70 text-center text-sm border border-red-400/20 rounded-md py-2"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
