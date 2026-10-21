"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ShieldCheck, Sparkles } from "lucide-react";

const TELEMETRY_STEPS = [
  "INITIALIZING KINETIC CHAIN ENGINE...",
  "CALIBRATING 24 ANATOMICAL VERTEBRAE...",
  "SYNTHESIZING NEURAL CONDUCTION MESH...",
  "ALIGNING CLINICAL REHABILITATION SUITE...",
  "DIMENSION READY — RESTORING MOTION",
];

export default function CinematicLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoaded(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(prev + increment, 100);
        const nextStep = Math.min(Math.floor((next / 100) * (TELEMETRY_STEPS.length - 1)), TELEMETRY_STEPS.length - 1);
        setStepIndex(nextStep);
        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#061B36] text-[#F0F8FF] flex flex-col justify-between p-6 sm:p-12 pointer-events-auto select-none"
        >
          {/* Top telemetry bar */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#E0F2FE]/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-ping" />
              <span className="font-mono text-[#F0F8FF]">ZENLIFE PHYSIO 3D LAB</span>
            </div>
            <span className="font-mono text-[#00AEEF]">DR. SAKSHI KOCHER • REHABILITATION</span>
          </div>

          {/* Center Holographic Ring & Counter */}
          <div className="flex flex-col items-center justify-center my-auto space-y-8">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-[#0077B6]/40 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-dashed border-[#00AEEF]/40 animate-reverse-spin" />
              <div className="absolute inset-6 rounded-full bg-radial from-[#0077B6]/30 to-transparent blur-md" />

              {/* Central Numerical Counter */}
              <div className="relative z-10 text-center">
                <span className="font-serif text-5xl sm:text-6xl font-bold tracking-tighter text-[#F0F8FF]">
                  {progress}
                  <span className="text-xl sm:text-2xl text-[#00AEEF] font-sans font-light">%</span>
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#00AEEF] mt-1">
                  CALIBRATING
                </span>
              </div>
            </div>

            {/* Diagnostic Step Label */}
            <div className="text-center space-y-2 max-w-md">
              <p className="font-mono text-xs sm:text-sm text-[#E0F2FE] tracking-wider transition-all duration-150">
                {TELEMETRY_STEPS[stepIndex]}
              </p>
              {/* Progress track */}
              <div className="w-64 sm:w-80 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0077B6] via-[#00AEEF] to-[#00AEEF]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom telemetry readout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#E0F2FE]/50 font-mono">
            <span>ORTHOPEDIC • SPORTS REHABILITATION • CLINICAL NUTRITION</span>
            <span className="text-[#00AEEF]">EST. CLINICAL PRACTICE • ONE-ON-ONE CARE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
