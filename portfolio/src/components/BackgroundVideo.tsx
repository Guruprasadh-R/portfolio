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
      {/* Background Video Element - Stays alive & clearly visible across the entire page */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/bg-poster.jpg"
        className={`w-full h-full object-cover scale-[1.01] transform-gpu transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-95"
        }`}
      >
        <source src="/bg-animation.mp4" type="video/mp4" />
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Atmospheric Vignette - Non-intrusive, preserves maximum video visibility */}
      {/* Left text-support fade: Very soft so clouds & sky remain vivid */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d10]/70 via-[#0b0d10]/25 to-transparent pointer-events-none" />

      {/* Top & bottom gentle edge framing */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10]/40 via-transparent to-[#0b0d10]/60 pointer-events-none" />

      {/* Matching 35mm Analog Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Minimalist Live Atmosphere Pill */}
      <div className="absolute bottom-6 right-6 z-30 pointer-events-auto hidden sm:flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 text-[11px] font-mono text-[#d6d3d1] hover:text-white transition-all tactile-btn shadow-lg"
          title={isPlaying ? "Pause ambient video" : "Play ambient video"}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#cf966b] animate-pulse" />
          <span>{isPlaying ? "Edge Horizon" : "Paused"}</span>
          <span className="text-white/30">&bull;</span>
          <span className="text-[#cf966b]">3,420m</span>
        </button>
      </div>
    </div>
  );
}
