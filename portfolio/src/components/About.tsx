"use client";

import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      value: "3+ Core Systems",
      label: "Production Deployments",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      value: "Full Stack development",
      label: "Idea to Product",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      value: "Vels University",
      label: "CS Engineering",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      value: "Open For Roles",
      label: "Software & Systems",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
          <span className="font-mono text-xs text-[#9ca3af] tracking-widest uppercase">
            / 01. ABOUT ME
          </span>
        </div>

        {/* Top Split: Section Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.15] drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
              Crafting systems that{" "}
              <span className="text-gold-gradient font-serif italic">
                make fundamental sense.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm sm:text-base text-[#e5e7eb] leading-relaxed flex flex-col gap-4 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            <p>
              I am <span className="text-white font-medium">Guruprasadh R</span>, a software engineer and Computer Science student at Vels University based in Chennai, India. My work bridges distributed web platforms with operating system internals.
            </p>
            <p>
              

I focus on creating scalable, well-structured software with an emphasis on both solid engineering and thoughtful user experiences. From backend systems and APIs to modern frontend applications, I aim to build software that is reliable, practical, and built to perform.
            </p>
          </div>
        </div>

        {/* Quick Highlights Row (derived from reference aesthetic) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass-panel p-5 rounded-2xl border border-white/[0.08] flex flex-col items-start gap-3 group hover:border-[#f59e0b]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs text-[#9ca3af] font-mono mt-0.5">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Academic Discipline */}
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-[#f59e0b] tracking-wider uppercase bg-[#f59e0b]/10 px-2 py-0.5 rounded">
                  UNDERGRADUATE
                </span>
                <span className="font-mono text-xs text-[#71717a]">2024 - 2028</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Computer Science &amp; Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-4">
                Rigorous focus on algorithmic computational complexity, operating systems concurrency, distributed database design, and computer systems architecture.
              </p>
            </div>
            <div className="font-mono text-xs text-[#fbbf24] pt-3 border-t border-white/[0.06]">
              Vels University &bull; Chennai
            </div>
          </div>

          {/* Pillar 2: Open Source Stewardship */}
          <div className="glass-panel-amber p-6 rounded-2xl border border-[#f59e0b]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  CO-MAINTAINER
                </span>
                <span className="font-mono text-xs text-[#71717a]">Active</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Celtrix Operating System
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-4">
                Core contributor driving architectural code reviews, kernel memory paging routines, and Unix-like systems utilities implemented.
              </p>
            </div>
            <a
              href="https://github.com/celtrix-os/Celtrix"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#fbbf24] hover:text-white transition-colors pt-3 border-t border-white/[0.06]"
            >
              <span>github.com/celtrix-os/Celtrix</span>
              <span className="text-xs">&rarr;</span>
            </a>
          </div>

          {/* Pillar 3: Product Engineering Philosophy */}
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-[#fbbf24] tracking-wider uppercase bg-white/[0.05] px-2 py-0.5 rounded">
                  EXECUTION
                </span>
                <span className="font-mono text-xs text-[#71717a]">Methodology</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Full-Cycle Ownership
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-4">
                From conceptual wireframes to high-throughput data schemas, atomic payment gateways, containerized CI/CD pipelines, and fluid reactive client interfaces.
              </p>
            </div>
            <div className="font-mono text-xs text-[#9ca3af] pt-3 border-t border-white/[0.06]">
              Deterministic &bull; Zero Bloat &bull; Production Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
