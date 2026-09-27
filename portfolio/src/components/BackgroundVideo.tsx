"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay with sound might fail, but muted should succeed
      setIsPlaying(false);
    });

    const handleLoaded = () => setIsLoaded(true);
    video.addEventListener("loadeddata", handleLoaded);
    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
      {/* Background Video Element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/bg-poster.jpg"
        className={`w-full h-full object-cover scale-[1.02] transform-gpu transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-95"
        }`}
      >
        <source src="/bg-animation.mp4" type="video/mp4" />
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
          type="video/mp4"
        />
      </video>

      {/* Atmospheric Vignette & Twilight Color Tinting */}
      {/* 1. Left side darker gradient to keep hero text razor sharp */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090807]/90 via-[#090807]/50 to-[#090807]/20 pointer-events-none" />

      {/* 2. Top & Bottom subtle fade for navbar and smooth page depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090807]/70 via-transparent to-[#090807]/85 pointer-events-none" />

      {/* 3. Warm sunset ambient glow overlay */}
      <div className="absolute inset-0 bg-[#d97706]/[0.03] mix-blend-color-dodge pointer-events-none" />

      {/* 4. Film grain texture matching the video's analog 35mm grain */}
      <div className="grain-overlay" />

      {/* Ambient Control Pill (Pointer events enabled for interactive toggle) */}
      <div className="absolute bottom-6 right-6 z-30 pointer-events-auto hidden sm:flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 text-[11px] font-mono text-[#e7e5e4] hover:text-white transition-all tactile-btn shadow-lg"
          title={isPlaying ? "Pause ambient video" : "Play ambient video"}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>{isPlaying ? "Live Atmosphere" : "Atmosphere Paused"}</span>
          <span className="text-white/40">·</span>
          <span className="text-amber-300/80">3,420m</span>
        </button>
      </div>
    </div>
  );
}
