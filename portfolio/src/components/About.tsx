"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Monospace Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
          <span className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            // 01. Foundations & Philosophy
          </span>
        </div>

        {/* Asymmetric 7/5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Narrative Statement */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Engineering high-throughput web applications with{" "}
              <span className="text-[#f59e0b]">low-level systems discipline.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed max-w-[65ch]">
              <p>
                I am <span className="text-white font-medium">Guruprasadh R</span>, a software engineer and Computer Science student at Anna University based in Chennai, India. My work spans the continuum between distributed web systems and operating system internals.
              </p>
              <p>
                I believe that resilient software requires both micro-architectural empathy and uncompromising frontend polish. Whether optimizing transactional state in PostgreSQL, authoring low-level C routines as a co-maintainer of Celtrix OS, or sculpting reactive micro-interactions in Next.js, I build software that executes predictably under pressure.
              </p>
              <p>
                Currently seeking high-velocity engineering teams, systems engineering internships, and product-focused collaborative challenges.
              </p>
            </div>

            {/* Micro Telemetry Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/[0.08]">
              <div>
                <div className="font-mono text-[11px] text-[#71717a] uppercase tracking-wider">Education</div>
                <div className="text-sm font-medium text-white mt-1">Anna University</div>
                <div className="font-mono text-xs text-[#a1a1aa]">B.Tech in CS</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#71717a] uppercase tracking-wider">Base</div>
                <div className="text-sm font-medium text-white mt-1">Chennai, India</div>
                <div className="font-mono text-xs text-[#a1a1aa]">UTC+05:30 (IST)</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-mono text-[11px] text-[#71717a] uppercase tracking-wider">Open Source</div>
                <div className="text-sm font-medium text-white mt-1">Celtrix OS</div>
                <div className="font-mono text-xs text-[#a1a1aa]">Co-maintainer</div>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Bento Engineering Telemetry */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Card 1: Academic & Systems Foundation */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="glass-panel p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#f59e0b] tracking-wider uppercase flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  Academic Rigor
                </span>
                <span className="font-mono text-[10px] text-[#71717a] px-2 py-0.5 rounded bg-white/[0.04]">
                  UNDERGRADUATE
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                Computer Science &amp; Engineering
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4">
                Curriculum centered on computational complexity, concurrent operating systems, distributed database architecture, and compiler construction.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#d4d4d8]">
                <span className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.05]">Operating Systems</span>
                <span className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.05]">Data Structures</span>
                <span className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.05]">Algorithms</span>
              </div>
            </motion.div>

            {/* Card 2: Open Source Stewardship */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="glass-panel p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-emerald-400 tracking-wider uppercase flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                  Active Stewardship
                </span>
                <span className="font-mono text-[10px] text-emerald-400/90 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  MAINTAINER
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                Celtrix Operating System
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4">
                Direct contributor and co-maintainer driving core architecture reviews, kernel utility implementations in C, and developer onboarding workflows.
              </p>
              <a
                href="https://github.com/celtrix-os/Celtrix"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#f59e0b] hover:text-[#fbbf24] transition-colors group-hover:translate-x-0.5"
              >
                <span>github.com/celtrix-os/Celtrix</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </motion.div>

            {/* Card 3: Execution Values / Principles */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center font-mono text-xs">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Full Cycle Ownership</div>
                  <div className="text-[11px] text-[#71717a]">Architecture &bull; API &bull; UI &bull; Deployment</div>
                </div>
              </div>
              <span className="font-mono text-[10px] text-[#a1a1aa] bg-white/[0.04] px-2 py-1 rounded">
                100% PROD-READY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
