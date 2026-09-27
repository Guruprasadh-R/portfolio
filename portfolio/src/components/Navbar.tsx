"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Determine active section based on scroll offset
    const handleScroll = () => {
      const sections = ["contact", "skills", "projects", "about"];
      const scrollPos = window.scrollY + 200;

      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop) {
          current = section;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Live Chennai (IST) clock
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "#", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 py-3.5 sm:py-5 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Brand Monogram & Persona */}
        <a
          href="#"
          className="flex items-center gap-2.5 glass-pill px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full tactile-btn group"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-[#0b0e14] font-bold text-xs flex items-center justify-center font-mono shadow-[0_0_12px_rgba(245,158,11,0.4)] flex-shrink-0">
            G
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-white group-hover:text-[#fbbf24] transition-colors leading-tight">
              Guruprasadh R
            </span>
            <span className="hidden sm:block text-[10px] text-[#9ca3af] font-mono tracking-tight leading-tight">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Center: Floating Minimal Glass Navigation Capsule */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-white/[0.1] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-200 rounded-full flex flex-col items-center ${
                  isActive
                    ? "text-[#fbbf24]"
                    : "text-[#d1d5db] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navDot"
                    className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Local Time & Contact Trigger */}
        <div className="flex items-center gap-2">
          {time && (
            <div className="hidden lg:flex items-center gap-2 glass-pill px-3.5 py-2 rounded-full font-mono text-[11px] text-[#9ca3af] border border-white/[0.08]">
              <span className="text-white/40">CHE</span>
              <span className="text-white font-medium">{time}</span>
            </div>
          )}

          <a
            href="https://github.com/Guruprasadh-R"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 glass-pill px-3.5 py-2 rounded-full text-xs font-medium text-[#d1d5db] hover:text-white transition-colors tactile-btn border border-white/[0.08]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 bg-[#12161f]/80 hover:bg-[#181d28] border border-[#f59e0b]/40 hover:border-[#f59e0b] text-[#fef3c7] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_16px_rgba(245,158,11,0.15)] group"
          >
            <span>Let&apos;s Build</span>
            <span className="text-[#f59e0b] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass-pill w-8 h-8 rounded-full flex items-center justify-center text-white"
            aria-label="Toggle Navigation Menu"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-panel mt-3 rounded-2xl p-4 flex flex-col gap-2 max-w-7xl mx-auto pointer-events-auto border border-white/[0.12]"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-[#fbbf24] bg-white/[0.08]"
                    : "text-[#d1d5db] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between text-xs text-[#9ca3af] px-2 font-mono">
              <span>Chennai, IN</span>
              <span className="text-[#fafafa]">{time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
