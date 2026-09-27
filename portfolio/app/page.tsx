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
      duration: 1.1,
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
    <div className="min-h-[100dvh] bg-[#090807] text-[#fafaf9] relative overflow-hidden">
      {/* Cinematic Looping Sunset Cloudscape Background Video */}
      <BackgroundVideo />

      {/* Dynamic Navigation Island */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
