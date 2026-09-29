"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import BackgroundVideo from "@/components/BackgroundVideo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(900);

  // Measure viewport height dynamically for responsive scroll calibration
  useEffect(() => {
    setViewportHeight(window.innerHeight || 900);
    const handleResize = () => setViewportHeight(window.innerHeight || 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth progressive background dimming linked directly to scroll position:
  // - Top of Hero (0 to 25% scroll): pure vibrant video with minimal overlay (0 to 0.04)
  // - Mid Hero (55%): gentle progressive softening (0.35)
  // - Exiting Hero (88%): smooth darkening transition (0.76)
  // - Content sections (110%+): opaque background (0.94) for clean content readability
  const bgOverlayOpacity = useTransform(
    scrollY,
    [0, viewportHeight * 0.25, viewportHeight * 0.55, viewportHeight * 0.88, viewportHeight * 1.1],
    [0, 0.04, 0.35, 0.76, 0.94]
  );

  // Smooth inertial scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-[100dvh] bg-transparent text-[#fafafa] relative selection:bg-[#f59e0b]/30 selection:text-white">
      {/* Seamless Dual-Layer Video Background Engine (Fixed -z-10) */}
      <BackgroundVideo />

      {/* Dynamic Smooth Scroll-Driven Video Fade Layer (-z-[5]) */}
      <motion.div
        style={{ opacity: bgOverlayOpacity }}
        className="fixed inset-0 w-full h-full -z-[5] pointer-events-none bg-[#0b0e14]"
        aria-hidden="true"
      />

      {/* Subtle Analog Grain Overlay */}
      <div className="grain-overlay" />

      {/* Atmospheric Navigation Bar */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="relative z-10 flex flex-col [&_section:first-child>div:last-child:not(:first-child)]:hidden">
        {/* Full Viewport Video-Integrated Hero */}
        <Hero />

        {/* In-Depth Portfolio Sections */}
        <div className="relative">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
