"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SkillLayer {
  id: string;
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    context: string;
  }[];
}

const stackLayers: SkillLayer[] = [
  {
    id: "frontend",
    category: "01 / Frontend & Client Systems",
    description: "Component-driven interfaces engineered for perceptual speed, deterministic state, and fluid micro-physics.",
    items: [
      { name: "React 19", level: "Advanced", context: "Concurrent features, Hooks architecture" },
      { name: "Next.js", level: "Advanced", context: "App Router, Server Components, SSR" },
      { name: "TypeScript", level: "Proficient", context: "Strict typing, generics, AST" },
      { name: "Tailwind CSS", level: "Advanced", context: "Custom tokens, responsive design" },
      { name: "Framer Motion", level: "Proficient", context: "Spring physics, orchestrations" },
      { name: "Web Vitals", level: "Proficient", context: "LCP/INP/CLS optimization" },
    ],
  },
  {
    id: "backend",
    category: "02 / Backend & Low-Level Systems",
    description: "Robust HTTP services, WebSocket concurrency, and C systems programming for OS-level primitives.",
    items: [
      { name: "Node.js", level: "Advanced", context: "Event loop, asynchronous runtime" },
      { name: "Express.js", level: "Advanced", context: "Middleware pipelines, REST APIs" },
      { name: "C (Systems)", level: "Proficient", context: "Paging, interrupts, memory layouts" },
      { name: "REST & WebSockets", level: "Proficient", context: "Real-time sync, idempotent endpoints" },
      { name: "Python", level: "Working Knowledge", context: "Scripting, algorithmic prototyping" },
    ],
  },
  {
    id: "databases",
    category: "03 / Persistence & Data Modeling",
    description: "Relational integrity with PostgreSQL and schema-flexible aggregation pipelines with MongoDB.",
    items: [
      { name: "PostgreSQL", level: "Proficient", context: "Relational schemas, indexing, RLS" },
      { name: "MongoDB", level: "Advanced", context: "Aggregation framework, Atlas replica" },
      { name: "Prisma ORM", level: "Proficient", context: "Type-safe migrations and queries" },
      { name: "Redis", level: "Proficient", context: "Caching strategies, session state" },
      { name: "MySQL", level: "Proficient", context: "Relational queries, ACID transactions" },
    ],
  },
  {
    id: "devops",
    category: "04 / Infrastructure & Workflow",
    description: "Deterministic deployment, containerized isolation, and Unix-grade developer tooling.",
    items: [
      { name: "Git & GitHub", level: "Advanced", context: "Branch protection, PR reviews, CI" },
      { name: "Linux / POSIX", level: "Proficient", context: "Shell scripting, process management" },
      { name: "Docker", level: "Proficient", context: "Containerization, multi-stage builds" },
      { name: "Vercel / Netlify", level: "Advanced", context: "Edge deployments, DNS configuration" },
      { name: "Postman", level: "Proficient", context: "API contract testing & mock servers" },
    ],
  },
];

export default function Skills() {
  const [activeLayer, setActiveLayer] = useState<string>("frontend");

  const selected = stackLayers.find((l) => l.id === activeLayer) || stackLayers[0];

  return (
    <section id="skills" className="py-24 md:py-32 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Monospace Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <span className="font-mono text-xs text-[#fed7aa] tracking-widest uppercase">
            // 03. Technical Stack &amp; Capabilities
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Architectural <span className="text-[#f59e0b] drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">competencies.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#d6d3d1] mt-2 max-w-xl">
              From hardware-adjacent systems routines in C to modern declarative frontend architecture.
            </p>
          </div>

          <div className="font-mono text-xs text-[#a8a29e] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[#fed7aa]">Stack updated: Q3 2026</span>
          </div>
        </div>

        {/* Asymmetric Technical Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Layer Selector Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {stackLayers.map((layer) => {
              const isActive = layer.id === activeLayer;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border tactile-btn flex flex-col gap-1.5 ${
                    isActive
                      ? "bg-[rgba(245,158,11,0.12)] border-[#f59e0b]/50 shadow-[0_0_30px_rgba(245,158,11,0.12)]"
                      : "bg-[#090807]/70 border-white/[0.06] hover:bg-white/[0.04] hover:border-amber-500/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs ${isActive ? "text-[#f59e0b] font-medium" : "text-[#a8a29e]"}`}>
                      {layer.category.split(" / ")[0]}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                    )}
                  </div>
                  <div className={`text-sm sm:text-base font-semibold ${isActive ? "text-white" : "text-[#d6d3d1]"}`}>
                    {layer.category.split(" / ")[1]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive (8 cols) */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border-amber-500/15">
            <div className="border-b border-white/[0.08] pb-6 mb-6">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selected.category.split(" / ")[1]}
                </h3>
                <span className="font-mono text-xs text-[#f59e0b] bg-[#f59e0b]/15 border border-[#f59e0b]/25 px-2.5 py-1 rounded-md">
                  {selected.items.length} TECHNOLOGIES
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#d6d3d1] leading-relaxed">
                {selected.description}
              </p>
            </div>

            {/* Structured Table / Item Grid */}
            <div className="divide-y divide-white/[0.06]">
              {selected.items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.03] px-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#fed7aa]/60 w-5">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-white">
                        {item.name}
                      </span>
                      <span className="hidden sm:inline-block mx-2 text-[#57534e]">&bull;</span>
                      <span className="text-xs text-[#a8a29e] block sm:inline">
                        {item.context}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[#fed7aa] border border-amber-500/20">
                      {item.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Architecture Note */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#a8a29e] font-mono gap-2">
              <span>Stack philosophy: Low latency, zero bloat, high leverage</span>
              <span className="text-[#fed7aa]">Strictly tested &amp; benchmarked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
