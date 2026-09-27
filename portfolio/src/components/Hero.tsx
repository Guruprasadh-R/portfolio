"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [hudVisible, setHudVisible] = useState(true);

  const copyEmail = () => {
    navigator.clipboard.writeText("guruprasadh.raghavan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 px-6 sm:px-10 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Subtle warm amber radial glow accentuating the sunset horizon */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] rounded-full pointer-events-none opacity-[0.14] blur-[140px]"
        style={{ background: "#f59e0b" }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column (7 cols): Asymmetric Editorial Typography & Action Cluster */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Overline Atmospheric Beacon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 glass-pill px-4 py-1.5 rounded-full mb-6 border-amber-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs text-[#fed7aa] tracking-tight">
              Edge Engineer &bull; Chennai, IN &bull; 13.08&deg; N
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.98] text-white mb-6"
          >
            Engineering <br />
            <span className="text-[#f59e0b] drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
              at the edge,
            </span>{" "}
            <br />
            above the clouds.
          </motion.h1>

          {/* Subtitle / Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#d6d3d1] leading-relaxed max-w-[54ch] mb-8 drop-shadow-sm"
          >
            I&apos;m <span className="text-white font-medium">Guruprasadh R</span> — a software engineer
            bridging low-level C systems architecture, distributed cloud databases, and reactive frontend experiences.
            CS student at Anna University and co-maintainer of Celtrix OS.
          </motion.p>

          {/* Actions Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#projects"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-[#090807] px-6 py-3 rounded-xl font-semibold text-sm tracking-tight flex items-center gap-2 tactile-btn shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.45)]"
            >
              <span>Explore Selected Work</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            {/* Tactile Copy Email Button */}
            <button
              onClick={copyEmail}
              className="glass-panel px-4 py-3 rounded-xl text-sm font-medium text-[#fafaf9] hover:text-white hover:bg-white/[0.08] transition-colors flex items-center gap-2 tactile-btn"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-emerald-400 font-mono text-xs">Email Copied!</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/Guruprasadh-R"
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-3 rounded-xl text-[#d6d3d1] hover:text-white hover:bg-white/[0.08] transition-colors tactile-btn"
              aria-label="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/guruprasadh-raghavan-a6a8b434a"
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-3 rounded-xl text-[#d6d3d1] hover:text-white hover:bg-white/[0.08] transition-colors tactile-btn"
              aria-label="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Column (5 cols): Atmospheric Edge Station HUD Bento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4 z-10"
        >
          {/* Main Atmospheric Telemetry Card */}
          <div className="glass-panel rounded-3xl p-6 relative overflow-hidden border-amber-500/20 backdrop-blur-2xl">
            {/* Header with terminal coordinates and toggle */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#fed7aa]">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>STATION // EDGE-NODE-01</span>
              </div>
              <button
                onClick={() => setHudVisible(!hudVisible)}
                className="text-[10px] font-mono text-[#a8a29e] hover:text-white glass-pill px-2.5 py-1 rounded-md transition-colors"
                title="Toggle HUD detail"
              >
                {hudVisible ? "MINIMIZE" : "EXPAND"}
              </button>
            </div>

            {/* Telemetry Stream */}
            {hudVisible && (
              <div className="font-mono text-xs flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-[#a8a29e]">
                  <span className="text-white/70">Atmosphere</span>
                  <span className="text-amber-300 font-medium">Sunset &bull; 3,420m Barometric</span>
                </div>
                <div className="flex items-center justify-between text-[#a8a29e]">
                  <span className="text-white/70">Edge Runtime</span>
                  <span className="text-emerald-400">Next.js App Router &bull; C</span>
                </div>
                <div className="flex items-center justify-between text-[#a8a29e]">
                  <span className="text-white/70">Stewardship</span>
                  <span className="text-[#f59e0b]">celtrix-os / co-maintainer</span>
                </div>
                <div className="flex items-center justify-between text-[#a8a29e]">
                  <span className="text-white/70">Base Station</span>
                  <span className="text-white">Anna University &bull; Chennai</span>
                </div>
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                  <span className="text-[#a8a29e]">Signal Integrity</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    99.98% / Ultra-Low Latency
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Metrics Split Bento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel rounded-2xl p-5 border-amber-500/10">
              <div className="font-mono text-xs text-[#fed7aa] mb-1">Architecture</div>
              <div className="text-lg font-bold text-white tracking-tight">Full Stack</div>
              <div className="text-xs text-[#a8a29e] mt-1">C Systems to Web APIs</div>
            </div>

            <div className="glass-panel rounded-2xl p-5 border-amber-500/10">
              <div className="font-mono text-xs text-[#fed7aa] mb-1">Academics</div>
              <div className="text-lg font-bold text-white tracking-tight">Anna Univ</div>
              <div className="text-xs text-[#a8a29e] mt-1">Computer Science &bull; 2026</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
