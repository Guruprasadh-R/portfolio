"use client";

import { useEffect, useRef } from "react";
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
      {/* Seamless Dual-Layer Video Background Engine */}
      <BackgroundVideo />

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
