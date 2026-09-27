"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-20 sm:pt-28 pb-8 sm:pb-10 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-between">
      {/* 12-Column Grid with Center Breathing Room for the Cliff Developer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto pt-4 sm:pt-6">
        {/* Left Column (Cols 1-5): Editorial Typography & Direct Actions */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start z-10">
          {/* Overline Kicker Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 glass-pill px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-5 sm:mb-6 border border-white/[0.15] shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
            <span className="font-mono text-[10px] sm:text-[11px] text-[#e5e7eb] tracking-widest uppercase">
              IDEAS &bull; CODE &bull; SYSTEMS
            </span>
          </motion.div>

          {/* High-Impact Editorial Serif Headline with Localized Drop-Shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-[3.65rem] xl:text-[4rem] font-serif leading-[1.08] sm:leading-[1.06] tracking-tight text-white mb-5 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] drop-shadow-[0_8px_28px_rgba(0,0,0,0.85)]"
          >
            Engineering curiosity <br />
            into{" "}
            <span className="text-gold-gradient font-serif italic font-normal">
              products people
            </span>{" "}
            <br />
            actually rely on.
          </motion.h1>

          {/* Subtitle / Bio Narrative with Localized Drop-Shadow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-base text-[#f3f4f6] leading-relaxed max-w-[46ch] mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
          >
            I&apos;m <span className="text-white font-medium">Guruprasadh R</span>, a developer and CS student at Anna University building dependable, high-throughput digital systems — from operating system internals in Celtrix OS to scalable full-stack cloud applications.
          </motion.p>

          {/* Tactile Actions Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3.5"
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0b0e14] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm tracking-tight flex items-center gap-2 tactile-btn shadow-[0_0_24px_rgba(245,158,11,0.35)]"
            >
              <span>Explore My Work</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <a
              href="#about"
              className="glass-panel px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-white hover:text-[#fbbf24] hover:border-[#f59e0b]/40 transition-all tactile-btn border border-white/[0.15] shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            >
              <span>About My Journey</span>
            </a>
          </motion.div>
        </div>

        {/* Center Buffer Space (Cols 6-8): Intentionally Open to Showcase Cliff & Developer */}
        <div className="hidden lg:block lg:col-span-3 pointer-events-none" aria-hidden="true" />

        {/* Right Column (Cols 9-12): Flight Progression & Telemetry Terminal on Far Right */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6 items-end z-10 w-full lg:w-auto">
          {/* Vertical Flight Progression Tracker */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:flex flex-col items-end gap-2.5"
          >
            <div className="font-mono text-[11px] text-[#fef3c7] italic tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Architecting with craft &bull; Scaling with discipline ~
            </div>

            <div className="glass-panel px-4 py-3 rounded-2xl border border-white/[0.15] flex flex-col gap-2 font-mono text-xs shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 text-[#fbbf24]">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b] animate-pulse" />
                <span className="font-bold">01 / Architect</span>
              </div>
              <div className="flex items-center gap-3 text-[#d1d5db] pl-5">
                <span>02 / Build</span>
              </div>
              <div className="flex items-center gap-3 text-[#d1d5db] pl-5">
                <span>03 / Refine</span>
              </div>
              <div className="flex items-center gap-3 text-[#d1d5db] pl-5">
                <span>04 / Scale</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Telemetry Terminal Card on the Right Cloud Horizon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full glass-panel-amber rounded-2xl p-3.5 sm:p-5 shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl border border-[#f59e0b]/30"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.1]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#9ca3af] tracking-tight">
                ~/guruprasadh/sysinfo
              </span>
            </div>

            {/* Terminal Lines */}
            <div className="font-mono text-[11px] sm:text-xs flex flex-col gap-1 sm:gap-1.5 text-[#e5e7eb]">
              <div className="text-[#fbbf24]">
                &gt; Passion for solving hard engineering problems
              </div>
              <div className="text-white/90">
                &gt; Clean code. High throughput. Real impact.
              </div>
              <div className="text-[#cbd5e1]">
                &gt; Co-maintainer @ celtrix-os / kernel
              </div>
              <div className="text-[#9ca3af]">
                &gt; CS Undergrad @ Anna University
              </div>
              <div className="flex items-center gap-1 text-[#f59e0b] pt-0.5">
                <span>&gt; Always learning</span>
                <span className="w-1.5 h-3.5 bg-[#f59e0b] animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Center: Minimalist "Scroll to Explore" Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center justify-center gap-1.5 pt-3 pb-1 pointer-events-none"
      >
        <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-[#f59e0b]/50 flex justify-center pt-1 sm:pt-1.5 bg-[#0b0e14]/50 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]"
          />
        </div>
        <span className="font-mono text-[9px] sm:text-[10px] text-[#e5e7eb] tracking-widest uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
