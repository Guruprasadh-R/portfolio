"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Monogram & Live Status */}
        <a
          href="/"
          className="flex items-center gap-3 glass-pill px-4 py-2 rounded-full tactile-btn group"
        >
          <div className="w-6 h-6 rounded-full bg-[#f59e0b] text-[#09090b] font-bold text-xs flex items-center justify-center font-mono">
            G
          </div>
          <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#f59e0b] transition-colors">
            Guruprasadh
          </span>
          <span className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-white/10 text-[11px] font-mono text-[#a1a1aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to roles</span>
          </span>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-2 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-[#a1a1aa] hover:text-white transition-colors rounded-full hover:bg-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Local Time & Contact Trigger */}
        <div className="flex items-center gap-2">
          {time && (
            <div className="hidden lg:flex items-center gap-2 glass-pill px-3 py-2 rounded-full font-mono text-[11px] text-[#a1a1aa]">
              <span className="text-white/40">CHE</span>
              <span className="text-[#fafafa]">{time}</span>
            </div>
          )}

          <a
            href="https://github.com/Guruprasadh-R"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 glass-pill px-3.5 py-2 rounded-full text-xs font-medium text-[#a1a1aa] hover:text-white transition-colors tactile-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#09090b] px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <span>Let&apos;s talk</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass-pill w-9 h-9 rounded-full flex items-center justify-center text-white"
            aria-label="Toggle Navigation Menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-panel mt-3 rounded-2xl p-4 flex flex-col gap-2 max-w-7xl mx-auto pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between text-xs text-[#a1a1aa] px-2 font-mono">
              <span>Chennai, IN</span>
              <span className="text-[#fafafa]">{time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
