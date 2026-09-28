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
  // - At 0 (Top of Hero): 0% overlay (100% vibrant, full brightness, pure video)
  // - User starts scrolling (18% of hero): very subtle tint begins (0.08)
  // - Halfway down hero (50%): video becomes progressively softer (0.45)
  // - Exiting hero (85%): transition deepens (0.82)
  // - Content sections (105%+): mostly/fully opaque background (0.95) for maximum content focus
  const bgOverlayOpacity = useTransform(
    scrollY,
    [0, viewportHeight * 0.18, viewportHeight * 0.5, viewportHeight * 0.85, viewportHeight * 1.05],
    [0, 0.08, 0.45, 0.82, 0.95]
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
      <main className="relative z-10 flex flex-col">
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
