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
      {/* 100% Pure, Vibrant, Seamless Dual-Layer Video Background */}
      <BackgroundVideo />

      {/* Atmospheric Navigation Bar */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Full Viewport 100% Unfiltered Video-Integrated Hero */}
        <Hero />

        {/* Subsequent Sections Transition Layer (Begins Only on Scroll) */}
        <div className="relative bg-gradient-to-b from-transparent via-[#0b0e14]/70 to-[#0b0e14]">
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
