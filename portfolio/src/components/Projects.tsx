"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-4 sm:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
            <span className="font-mono text-xs text-[#9ca3af] tracking-widest uppercase">
              / 02. SELECTED WORK &amp; SYSTEMS
            </span>
          </div>

          <a
            href="https://github.com/Guruprasadh-R"
            target="_blank"
            rel="noreferrer"
            className="self-start sm:self-auto inline-flex items-center gap-2 font-mono text-xs text-[#d1d5db] hover:text-[#fbbf24] transition-colors glass-pill px-4 py-2 rounded-full tactile-btn border border-white/[0.1]"
          >
            <span>Explore all repositories</span>
            <span className="text-xs">&rarr;</span>
          </a>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight max-w-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
            Engineered systems from{" "}
            <span className="text-gold-gradient font-serif italic">
              distributed cloud SaaS
            </span>{" "}
            to modern web applications.
          </h2>
        </div>

        {/* Asymmetric Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project 1: RecycKart */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-9 border border-white/[0.08] hover:border-[#f59e0b]/30 transition-all flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
          >
            <div>
              {/* Meta */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[#fbbf24] bg-[#f59e0b]/10 border border-[#f59e0b]/20 px-2.5 py-1 rounded-md">
                    01 &bull; E-COMMERCE PLATFORM
                  </span>

                  <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Production
                  </span>
                </div>

                <span className="font-mono text-xs text-[#71717a]">
                  2025
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 tracking-tight">
                RecycKart
              </h3>

              <p className="text-sm sm:text-base text-[#d1d5db] leading-relaxed mb-6 max-w-xl">
                A marketplace for recycled products where users can buy
                products and contribute recyclable materials.
              </p>

              {/* Project Information */}
              <div className="bg-[#0b0e14]/70 border border-white/[0.06] rounded-2xl p-4 sm:p-5 mb-6 backdrop-blur-md">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#71717a] border-b border-white/[0.06] pb-2.5 mb-3">
                  <span>PROJECT INFO</span>
                  <span>DETAILS</span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#9ca3af]">Platform</span>
                    <span className="text-white text-right">
                      Recycled Products Marketplace
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#9ca3af]">User Flow</span>
                    <span className="text-white text-right">
                      Buyers &amp; Sellers
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#9ca3af]">Contribution</span>
                    <span className="text-[#fbbf24] text-right">
                      Recyclable Materials
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                  "Postman",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] text-[#e5e7eb] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href="https://recyckart.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0b0e14] px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_20px_rgba(245,158,11,0.25)]"
              >
                <span>Live Deployment</span>
                <span className="text-xs">&rarr;</span>
              </a>

              <a
                href="https://github.com/kalviumcommunity/S74_Guruprasadh_Capstone_RecycKart"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 glass-pill px-4 py-2.5 rounded-xl text-xs font-medium text-white hover:text-[#fbbf24] transition-colors tactile-btn border border-white/[0.08]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Source Code</span>
              </a>
            </div>
          </motion.div>

          {/* Project 2: Manage Your SaaS */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-9 border border-white/[0.08] hover:border-[#f59e0b]/30 transition-all flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
          >
            <div>
              {/* Meta */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs text-[#d1d5db] bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 rounded-md">
                  02 &bull; SAAS PLATFORM
                </span>

                <span className="font-mono text-xs text-[#71717a]">
                  2025–PRESENT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 tracking-tight">
                Manage Your SaaS
              </h3>

              <p className="text-sm text-[#d1d5db] leading-relaxed mb-6">
                Co-built a scalable MicroSaaS with secure OAuth integrations
                for Google Analytics, Search Console, and Dodo payments,
                collaborating closely with founders.
              </p>

              {/* Data Sources */}
              <div className="bg-[#0b0e14]/70 border border-white/[0.06] rounded-2xl p-4 sm:p-5 mb-6 backdrop-blur-md">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#71717a] border-b border-white/[0.06] pb-2 mb-3">
                  <span>DATA SOURCES</span>
                  <span>INSIGHTS</span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#9ca3af]">Traffic</span>
                    <span className="text-emerald-400 text-right">
                      Google Analytics
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#9ca3af]">SEO</span>
                    <span className="text-white text-right">
                      Search Console
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#9ca3af]">Revenue</span>
                    <span className="text-white text-right">
                      Payment Data
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#9ca3af]">Reporting</span>
                    <span className="text-[#fbbf24] text-right">
                      Real-time + Historical
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Supabase",
                  "Chart.js",
                  "Recharts",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[#e5e7eb] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href="https://www.manageyoursaas.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0b0e14] px-4 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_20px_rgba(245,158,11,0.25)]"
              >
                <span>Live Site</span>
                <span className="text-xs">&rarr;</span>
              </a>

              <a
                href="https://github.com/manage-your-saas/manage-your-saas"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 glass-pill px-4 py-2.5 rounded-xl text-xs font-medium text-white hover:text-[#fbbf24] transition-colors tactile-btn border border-white/[0.08]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Code</span>
              </a>
            </div>
          </motion.div>

          {/* Project 3: Celtrix */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="lg:col-span-12 glass-panel-amber rounded-3xl p-6 sm:p-10 border border-[#f59e0b]/25 relative overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN-SOURCE
                  </span>

                  <span className="font-mono text-xs text-[#fbbf24] bg-[#f59e0b]/10 border border-[#f59e0b]/20 px-3 py-1 rounded-full">
                    Contributor &amp; Co-maintainer
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                  Celtrix
                </h3>

                <p className="text-sm sm:text-base text-[#d1d5db] leading-relaxed max-w-2xl">
                  Celtrix is a modern web-app scaffolder that sets up
                  full-stack web applications in seconds with preferred
                  technologies and configurable stack options.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {[
                    "Web App Scaffolding",
                    "Preset Stacks",
                    "Custom Stack Wizard",
                    "Node.js",
                    "React",
                    "Open Source",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] text-[#e5e7eb] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://celtrix.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0b0e14] px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                  >
                    <span>Live Site</span>
                    <span className="text-xs">&rarr;</span>
                  </a>

                  <a
                    href="https://github.com/celtrix-os/Celtrix"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 glass-pill px-5 py-2.5 rounded-xl text-xs font-medium text-white hover:text-[#fbbf24] transition-colors tactile-btn border border-white/[0.08]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right Terminal Mockup */}
              <div className="lg:col-span-5 bg-[#0b0e14]/90 rounded-2xl border border-white/[0.08] p-5 font-mono text-xs overflow-hidden backdrop-blur-lg">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-[#71717a]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <span className="text-[10px]">
                    celtrix / terminal
                  </span>
                </div>

                <div className="space-y-2 text-[#d1d5db]">
                  <div className="text-emerald-400">
                    $ npx celtrix my-app
                  </div>

                  <div className="text-white/90">
                    Choose your stack:
                  </div>

                  <div className="text-[#9ca3af] pl-3">
                    &gt; MERN
                  </div>

                  <div className="text-[#9ca3af] pl-3">
                    &nbsp;&nbsp;Next.js
                  </div>

                  <div className="text-[#fef3c7] pl-3">
                    &nbsp;&nbsp;Custom Stack
                  </div>

                  <div className="text-emerald-400 pt-1">
                    ✓ Full-stack application scaffolded.
                  </div>

                  <div className="text-[#71717a] text-[11px] pt-1">
                    Ready for development.
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