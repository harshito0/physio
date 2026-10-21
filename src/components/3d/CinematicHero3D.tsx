"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  RotateCcw,
  ShieldCheck,
  X,
} from "lucide-react";
import AnatomicalSpine3D, { ANATOMICAL_HOTSPOTS, HotspotData } from "./AnatomicalSpine3D";

export default function CinematicHero3D({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>("lumbar");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isHudOpen, setIsHudOpen] = useState<boolean>(true);

  const activeData: HotspotData =
    (selectedHotspot && ANATOMICAL_HOTSPOTS[selectedHotspot]) || ANATOMICAL_HOTSPOTS.lumbar;

  const handleSelectHotspot = (id: string) => {
    setSelectedHotspot(id);
    setIsHudOpen(true);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#06152B] via-[#0A2540] to-[#06152B] text-white overflow-hidden flex flex-col justify-between pt-28 pb-10">
      {/* Background subtle architectural watermark */}
      <div className="absolute inset-0 pointer-events-none select-none flex flex-col justify-center items-center overflow-hidden z-0 opacity-[0.04]">
        <span className="font-serif text-[18vw] leading-none tracking-tight font-black text-white">
          KINETIC
        </span>
        <span className="font-sans text-[14vw] leading-none font-black tracking-widest text-[#00AEEF] uppercase -mt-10 sm:-mt-20">
          ALIGNMENT
        </span>
      </div>

      {/* 3D WebGL Canvas Layer - Positioned with right-bias on desktop so spine never blocks text */}
      <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing lg:translate-x-[15%]">
        <Canvas
          camera={{ position: [0, 0, 7.8], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[6, 8, 6]} intensity={1.6} color="#FFFFFF" castShadow />
          <directionalLight position={[-6, -4, -4]} intensity={0.8} color="#0077B6" />
          <pointLight position={[0, 0, 4]} intensity={1.0} color="#E0F2FE" />
          <pointLight position={[0, 3, 2]} intensity={0.9} color="#00AEEF" />

          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <AnatomicalSpine3D
              selectedHotspot={selectedHotspot}
              onSelectHotspot={handleSelectHotspot}
              autoRotate={autoRotate}
              rotationSpeed={0.3}
              showRibs={true}
            />
          </Float>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.7}
            rotateSpeed={0.6}
          />
        </Canvas>
      </div>

      {/* Soft gradient scrim on the left on desktop to guarantee 100% crystal clear text contrast */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#06152B] via-[#06152B]/90 to-transparent pointer-events-none z-15" />

      {/* Foreground Hero Interface Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 pt-2 sm:pt-6">
            {/* High-Contrast Luxury Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0A3977]/90 border border-[#00AEEF] text-[11px] font-mono uppercase tracking-[0.22em] text-[#E0F2FE] shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-ping" />
              <span>Move Better. Feel Stronger. Live Healthier.</span>
            </motion.div>

            {/* Oversized Luxury Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.04] drop-shadow-md"
            >
              Expert Physiotherapy{" "}
              <span className="block sm:inline font-light italic text-[#38BDF8] drop-shadow-sm">
                for a Pain-Free, Active Life.
              </span>
            </motion.h1>

            {/* Crisp Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-[#E0F2FE] leading-relaxed max-w-xl font-normal drop-shadow-xs"
            >
              Personalized physiotherapy, sports injury rehabilitation, and clinical nutrition support
              to restore your kinetic freedom. Led by{" "}
              <strong className="text-white font-semibold underline decoration-[#00AEEF] underline-offset-4">
                Dr. Sakshi Kocher
              </strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="pointer-events-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00AEEF] via-[#0077B6] to-[#0A3977] text-white font-bold text-sm tracking-wider transition-all shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>

              <a
                href="#body-explorer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-[#00AEEF]/60 backdrop-blur-md text-sm font-semibold transition-all hover:border-[#00AEEF] shadow-md"
              >
                <span>Launch 3D Body Lab</span>
                <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
              </a>
            </motion.div>

            {/* Interactive Anatomical Quick Selector Pills */}
            <div className="pointer-events-auto pt-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00AEEF] block font-bold">
                Select Anatomical Region:
              </span>
              <div className="flex flex-wrap gap-2">
                {Object.values(ANATOMICAL_HOTSPOTS).map((spot) => {
                  const isSelected = selectedHotspot === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => handleSelectHotspot(spot.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                        isSelected
                          ? "bg-[#00AEEF] text-[#06152B] shadow-lg shadow-cyan-500/30 scale-105"
                          : "bg-[#0A3977]/80 text-[#E0F2FE] border border-white/20 hover:border-[#00AEEF]"
                      }`}
                    >
                      {spot.tag} • {spot.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Rotation status */}
            <div className="pointer-events-auto flex items-center gap-4 pt-2 text-xs font-mono text-[#BAE6FD]">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-white font-medium"
              >
                <RotateCcw className={`w-3.5 h-3.5 text-[#00AEEF] ${autoRotate ? "animate-spin-slow" : ""}`} />
                <span>Rotation: {autoRotate ? "Active" : "Paused"}</span>
              </button>
              <span className="hidden sm:inline text-[#E0F2FE]/70">• Drag 3D canvas to orbit 360°</span>
            </div>
          </div>

          {/* Right Column: Floating Diagnostic HUD for Active 3D Hotspot */}
          <div className="lg:col-span-5 w-full flex justify-end pt-2 sm:pt-6">
            <AnimatePresence mode="wait">
              {isHudOpen && activeData && (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="pointer-events-auto w-full max-w-md glass-panel-obsidian rounded-3xl p-6 sm:p-7 border border-[#00AEEF]/50 shadow-2xl space-y-4 bg-[#0A2540]/95"
                >
                  {/* HUD Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#BAE6FD] font-bold">
                        3D ANATOMICAL TELEMETRY
                      </span>
                    </div>
                    <button
                      onClick={() => setIsHudOpen(false)}
                      className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close HUD"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Anatomical Segment Title */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0077B6] border border-[#00AEEF] text-[#E0F2FE] font-mono text-xs font-bold">
                        {activeData.tag}
                      </span>
                      <span className="text-xs text-[#E0F2FE] font-medium">{activeData.label}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      {activeData.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#E0F2FE] leading-relaxed">
                    {activeData.summary}
                  </p>

                  {/* Targeted Clinical Pathways */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00AEEF] block font-bold">
                      Targeted Clinical Protocols:
                    </span>
                    {activeData.treatments.map((tx, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-white font-medium">
                        <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span>{tx}</span>
                      </div>
                    ))}
                  </div>

                  {/* HUD Action Button */}
                  <div className="pt-3 border-t border-white/15">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00AEEF] hover:from-[#00AEEF] hover:to-[#0077B6] text-white font-bold text-xs tracking-wider transition-colors shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>Schedule Treatment for {activeData.label}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Interactive Scroll Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex items-center justify-between pointer-events-none text-xs text-[#E0F2FE] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
          <span>DR. SAKSHI KOCHER • CONSULTANT PHYSIOTHERAPIST</span>
        </div>

        <a
          href="#body-explorer"
          className="pointer-events-auto flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
        >
          <span>SCROLL TO EXPLORE LAB</span>
          <ChevronDown className="w-4 h-4 text-[#00AEEF] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
