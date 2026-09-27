"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Monospace Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#cf966b] shadow-[0_0_8px_rgba(207,150,107,0.6)]" />
            <span className="font-mono text-xs text-[#f5cfb3] tracking-widest uppercase">
              // 02. Selected Work &amp; Systems
            </span>
          </div>

          <a
            href="https://github.com/Guruprasadh-R"
            target="_blank"
            rel="noreferrer"
            className="self-start sm:self-auto inline-flex items-center gap-2 font-mono text-xs text-[#d6d3d1] hover:text-white transition-colors glass-pill px-3.5 py-1.5 rounded-full tactile-btn border-white/10"
          >
            <span>Explore all repositories</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Engineered systems from <span className="text-[#cf966b]">distributed SaaS</span> to kernel internals.
          </h2>
        </div>

        {/* Asymmetric Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: RecycKart (60% / 7 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[#cf966b] bg-[#cf966b]/15 border border-[#cf966b]/30 px-2.5 py-1 rounded-md">
                    01 &bull; FULL-STACK ECOSYSTEM
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Production
                  </span>
                </div>
                <span className="font-mono text-xs text-[#9ca3af]">2024</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[#f5cfb3] transition-colors">
                RecycKart
              </h3>
              <p className="text-sm sm:text-base text-[#d6d3d1] leading-relaxed mb-6 max-w-xl">
                A high-throughput e-commerce platform and marketplace dedicated to sustainable goods. Engineered with end-to-end inventory synchronization, secure transactional payment gateways, and a granular administrative management suite.
              </p>

              {/* Architectural Telemetry Box */}
              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#9ca3af] border-b border-white/[0.08] pb-2.5 mb-3">
                  <span>SUBSYSTEM</span>
                  <span>STATUS &amp; TELEMETRY</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[#d6d3d1]">Inventory Sync</span>
                    <span className="text-emerald-400">Real-time / WebSocket</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#d6d3d1]">Payment Gateway</span>
                    <span className="text-white">Atomic Transaction Flow</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#d6d3d1]">Data Layer</span>
                    <span className="text-[#f5cfb3]">MongoDB Replica Set</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-black/30 text-[#f5cfb3] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a
                href="https://recyckart.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#cf966b] hover:bg-[#d89e71] text-[#0b0d10] px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_20px_rgba(207,150,107,0.3)]"
              >
                <span>Live Deployment</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              <a
                href="https://github.com/kalviumcommunity/S74_Guruprasadh_Capstone_RecycKart"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 glass-pill px-4 py-2.5 rounded-xl text-xs font-medium text-white hover:text-[#cf966b] transition-colors tactile-btn border-white/10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Source Code</span>
              </a>
            </div>
          </motion.div>

          {/* Bento Card 2: Manage Your SaaS (40% / 5 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs text-[#f5cfb3] bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-md">
                  02 &bull; SAAS PLATFORM
                </span>
                <span className="font-mono text-xs text-[#9ca3af]">2024</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[#f5cfb3] transition-colors">
                Manage Your SaaS
              </h3>
              <p className="text-sm text-[#d6d3d1] leading-relaxed mb-6">
                Centralized subscription governance and billing analytics engine. Enables software companies to orchestrate multi-tenant workspaces, track recurring billing metrics, and manage user seats.
              </p>

              {/* Data Metric Simulator */}
              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#9ca3af] border-b border-white/[0.08] pb-2 mb-3">
                  <span>METRIC</span>
                  <span>PERFORMANCE</span>
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[#d6d3d1]">Query Latency</span>
                    <span className="text-emerald-400">14ms (PostgreSQL)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#d6d3d1]">Multi-Tenancy</span>
                    <span className="text-white">Row-Level Security</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#d6d3d1]">Architecture</span>
                    <span className="text-[#cf966b]">App Router / SSR</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                {["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-black/30 text-[#f5cfb3] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a
                href="https://www.manageyoursaas.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#cf966b] hover:bg-[#d89e71] text-[#0b0d10] px-4 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_20px_rgba(207,150,107,0.25)]"
              >
                <span>Live Site</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              <a
                href="https://github.com/manage-your-saas/manage-your-saas"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 glass-pill px-4 py-2.5 rounded-xl text-xs font-medium text-white hover:text-[#cf966b] transition-colors tactile-btn border-white/10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Code</span>
              </a>
            </div>
          </motion.div>

          {/* Bento Card 3: Celtrix OS (Full-width 12 cols Spotlight) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-12 glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN-SOURCE STEWARDSHIP
                  </span>
                  <span className="font-mono text-xs text-[#cf966b] bg-[#cf966b]/15 border border-[#cf966b]/30 px-3 py-1 rounded-full">
                    Contributor &amp; Co-maintainer
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-[#f5cfb3] transition-colors">
                  Celtrix Operating System
                </h3>

                <p className="text-sm sm:text-base text-[#d6d3d1] leading-relaxed max-w-2xl">
                  An open-source operating system project exploring modern Unix principles, low-level concurrency, and micro-kernel design. As co-maintainer, I actively conduct code reviews, refine kernel architecture, and implement low-level C routines and systems utilities.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {["C Systems Programming", "OS Architecture", "Kernel Primitives", "POSIX Standards", "Git Workflow", "Open Source Stewardship"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-black/30 text-[#f5cfb3] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://github.com/celtrix-os/Celtrix"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#cf966b] hover:bg-[#d89e71] text-[#0b0d10] px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_20px_rgba(207,150,107,0.3)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Inspect Celtrix Repository</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Systems Terminal Mockup */}
              <div className="lg:col-span-5 bg-black/40 rounded-2xl border border-white/10 p-5 font-mono text-xs overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[#9ca3af]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-[#f5cfb3]">celtrix-kernel / git log</span>
                </div>

                <div className="space-y-2 text-[#d6d3d1]">
                  <div className="text-[#cf966b]">
                    $ git log -n 1 --stat
                  </div>
                  <div className="text-white">
                    commit b4f819a (HEAD -&gt; main, origin/main)
                  </div>
                  <div className="text-[#9ca3af]">
                    Author: Guruprasadh R &lt;guruprasadh.raghavan@gmail.com&gt;
                  </div>
                  <div className="text-[#f5cfb3] pt-1">
                    refactor(memory): streamline paging tables &amp; ISR interrupts
                  </div>
                  <div className="text-[#9ca3af] text-[11px] pt-1">
                    4 files changed, 142 insertions(+), 38 deletions(-)
                  </div>
                  <div className="pt-2 text-emerald-400 text-[11px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Kernel build status: PASS (0 errors, 0 warnings)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
