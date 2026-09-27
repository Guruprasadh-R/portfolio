"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRefA = useRef<HTMLVideoElement | null>(null);
  const videoRefB = useRef<HTMLVideoElement | null>(null);
  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const vA = videoRefA.current;
    const vB = videoRefB.current;
    if (!vA || !vB) return;

    // Strict DOM enforcement for autoplay policy in all modern browsers
    vA.muted = true;
    vA.defaultMuted = true;
    vB.muted = true;
    vB.defaultMuted = true;

    // Start playing video A
    const startInitialPlayback = async () => {
      try {
        await vA.play();
      } catch (err) {
        // Autoplay may require user interaction in strict environments
        console.warn("Autoplay deferred until user interaction", err);
      }
    };
    startInitialPlayback();

    // Fallback: unlock playback on first user touch/scroll/click
    const handleFirstInteraction = () => {
      if (vA.paused && activeVideo === "A") {
        vA.play().catch(() => {});
      } else if (vB.paused && activeVideo === "B") {
        vB.play().catch(() => {});
      }
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
    window.addEventListener("pointerdown", handleFirstInteraction, { passive: true });
    window.addEventListener("keydown", handleFirstInteraction, { passive: true });
    window.addEventListener("scroll", handleFirstInteraction, { passive: true });

    // Continuous high-precision RAF loop for seamless crossfade
    let animationFrameId: number;
    const FADE_TRIGGER_BEFORE_END = 1.4; // seconds before end to initiate crossfade

    const checkCrossfade = () => {
      const currentActive = activeVideo;
      const primaryVideo = currentActive === "A" ? vA : vB;
      const secondaryVideo = currentActive === "A" ? vB : vA;

      if (
        primaryVideo &&
        primaryVideo.duration > 0 &&
        !primaryVideo.paused &&
        !isTransitioningRef.current
      ) {
        const timeRemaining = primaryVideo.duration - primaryVideo.currentTime;

        if (timeRemaining <= FADE_TRIGGER_BEFORE_END && timeRemaining > 0) {
          isTransitioningRef.current = true;

          // Prepare and start secondary video from beginning
          secondaryVideo.currentTime = 0;
          secondaryVideo
            .play()
            .then(() => {
              // Trigger state change for CSS opacity transition
              setActiveVideo(currentActive === "A" ? "B" : "A");

              // After crossfade duration completes, pause and reset old video
              setTimeout(() => {
                try {
                  primaryVideo.pause();
                  primaryVideo.currentTime = 0;
                } catch {
                  // ignore
                }
                isTransitioningRef.current = false;
              }, 1300);
            })
            .catch(() => {
              // In case secondary failed to start, reset flag
              isTransitioningRef.current = false;
            });
        }
      }

      animationFrameId = requestAnimationFrame(checkCrossfade);
    };

    animationFrameId = requestAnimationFrame(checkCrossfade);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [activeVideo]);

  return (
    <div
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Fallback poster for instantaneous render before decode */}
      <img
        src="/bg-poster.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Primary Video Layer A - 100% natural, vibrant, zero dark tint */}
      <video
        ref={videoRefA}
        src="/bg-animation.mp4"
        preload="auto"
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
          activeVideo === "A" ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "opacity" }}
      />

      {/* Overlapping Video Layer B (Crossfade Twin) - 100% natural, vibrant, zero dark tint */}
      <video
        ref={videoRefB}
        src="/bg-animation.mp4"
        preload="auto"
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
          activeVideo === "B" ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "opacity" }}
      />
    </div>
  );
}
