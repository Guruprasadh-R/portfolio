"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-white/[0.08] relative bg-[#0b0e14]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Monogram and Editorial Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-[#0b0e14] font-bold text-xs flex items-center justify-center font-mono shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              G
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              Guruprasadh R
            </span>
          </div>
          <span className="hidden sm:inline-block text-[#52525b]">&bull;</span>
          <span className="text-xs text-[#9ca3af] font-mono">
            Vels University &bull; Chennai, IN (IST UTC+5:30)
          </span>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/Guruprasadh-R"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-[#9ca3af] hover:text-[#fbbf24] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/guruprasadh-raghavan-a6a8b434a"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-[#9ca3af] hover:text-[#fbbf24] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:guruprasadh.raghavan@gmail.com"
            className="font-mono text-xs text-[#9ca3af] hover:text-[#fbbf24] transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="glass-pill px-3 py-1.5 rounded-full font-mono text-[11px] text-[#d1d5db] hover:text-white flex items-center gap-1.5 transition-colors tactile-btn border border-white/[0.08]"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
