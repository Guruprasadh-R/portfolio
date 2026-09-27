"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "guruprasadh.raghavan@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
          <span className="font-mono text-xs text-[#9ca3af] tracking-widest uppercase">
            / 04. TRANSMISSION &amp; INQUIRIES
          </span>
        </div>

        {/* Asymmetric 5/7 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Outreach & Identity */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Initiate a{" "}
              <span className="text-gold-gradient font-serif italic">
                direct conversation.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#d1d5db] leading-relaxed">
              Available for full-time software engineering roles, systems engineering internships, and open-source contributions. Response time is typically within 24 hours.
            </p>

            {/* Tactile Direct Channels */}
            <div className="flex flex-col gap-3 pt-2">
              {/* Email Copy Card */}
              <div className="glass-panel p-4 rounded-2xl border border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[#fbbf24] flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider">Direct Inbox</div>
                    <div className="text-sm font-medium text-white truncate">{emailAddress}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="glass-pill px-3 py-1.5 rounded-lg text-xs font-mono text-[#d1d5db] hover:text-white transition-colors tactile-btn border border-white/[0.08]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? "Copied" : "Copy"}
                  </button>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0b0e14] px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all tactile-btn shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                  >
                    Send
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/guruprasadh-raghavan-a6a8b434a"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-2xl border border-white/[0.08] flex items-center justify-between gap-4 group hover:border-[#f59e0b]/40 transition-colors tactile-btn"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider">Professional Profile</div>
                    <div className="text-sm font-medium text-white group-hover:text-[#fbbf24] transition-colors">
                      linkedin.com/in/guruprasadh-raghavan
                    </div>
                  </div>
                </div>

                <span className="text-xs text-[#71717a] group-hover:text-white transition-colors">&rarr;</span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/Guruprasadh-R"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-2xl border border-white/[0.08] flex items-center justify-between gap-4 group hover:border-[#f59e0b]/40 transition-colors tactile-btn"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider">GitHub Organization &amp; Code</div>
                    <div className="text-sm font-medium text-white group-hover:text-[#fbbf24] transition-colors">
                      github.com/Guruprasadh-R
                    </div>
                  </div>
                </div>

                <span className="text-xs text-[#71717a] group-hover:text-white transition-colors">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/[0.08] shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
            <div className="mb-6 pb-4 border-b border-white/[0.06] flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-semibold text-white">Direct Message Transmission</h3>
                <p className="text-xs text-[#9ca3af] mt-0.5">Encrypted client dispatch to developer inbox</p>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                SECURE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-mono text-xs text-[#d1d5db] uppercase tracking-wider">
                    Your Name <span className="text-[#f59e0b]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0b0e14]/80 border border-white/[0.08] focus:border-[#f59e0b] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="font-mono text-xs text-[#d1d5db] uppercase tracking-wider">
                    Email Address <span className="text-[#f59e0b]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0b0e14]/80 border border-white/[0.08] focus:border-[#f59e0b] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className="font-mono text-xs text-[#d1d5db] uppercase tracking-wider">
                  Subject / Scope
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Software Engineering Opportunity / Project Architecture"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-[#0b0e14]/80 border border-white/[0.08] focus:border-[#f59e0b] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-mono text-xs text-[#d1d5db] uppercase tracking-wider">
                  Message Details <span className="text-[#f59e0b]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Briefly describe your team, timeline, or engineering problem..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0b0e14]/80 border border-white/[0.08] focus:border-[#f59e0b] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className={`w-full py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-200 tactile-btn flex items-center justify-center gap-2 ${
                  status === "success"
                    ? "bg-emerald-500 text-white"
                    : "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0b0e14] shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                }`}
              >
                {status === "idle" && (
                  <>
                    <span>Transmit Message</span>
                    <span className="text-xs">&rarr;</span>
                  </>
                )}
                {status === "submitting" && (
                  <span className="flex items-center gap-2 font-mono">
                    <span className="w-3 h-3 rounded-full border-2 border-[#0b0e14] border-t-transparent animate-spin" />
                    Transmitting...
                  </span>
                )}
                {status === "success" && (
                  <span className="flex items-center gap-2 font-mono">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Dispatched Successfully
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
