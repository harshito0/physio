"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Calendar,
  ChevronDown,
  RotateCcw,
  ShieldCheck,
  X,
  Sparkles,
} from "lucide-react";
import AnatomicalSpine3D, { ANATOMICAL_HOTSPOTS, HotspotData } from "./AnatomicalSpine3D";
import { clinicInfo } from "@/data/clinic";

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
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#031D1B] via-[#042624] to-[#021816] text-[#FAF8F5] overflow-hidden flex flex-col justify-between pt-28 pb-10">
      {/* Background subtle architectural watermark (ultra-low opacity to never obstruct text) */}
      <div className="absolute inset-0 pointer-events-none select-none flex flex-col justify-center items-center overflow-hidden z-0 opacity-[0.04]">
        <span className="font-serif text-[18vw] leading-none tracking-tight font-black text-white">
          KINETIC
        </span>
        <span className="font-sans text-[14vw] leading-none font-black tracking-widest text-[#0F766E] uppercase -mt-10 sm:-mt-20">
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
          <ambientLight intensity={0.8} />
          <directionalLight position={[6, 8, 6]} intensity={1.5} castShadow />
          <directionalLight position={[-6, -4, -4]} intensity={0.7} color="#0F766E" />
          <pointLight position={[0, 0, 4]} intensity={0.9} color="#FFF8EB" />
          <pointLight position={[0, 3, 2]} intensity={0.7} color="#C6A56B" />

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
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#031D1B] via-[#031D1B]/90 to-transparent pointer-events-none z-15" />

      {/* Foreground Hero Interface Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Luxury Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 pt-2 sm:pt-6">
            {/* High-Contrast Luxury Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#064E4B]/95 border border-[#C6A56B] text-[11px] font-mono uppercase tracking-[0.22em] text-[#F5E6CA] shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-ping" />
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
              <span className="block sm:inline font-light italic text-[#E5C687] drop-shadow-sm">
                for a Pain-Free, Active Life.
              </span>
            </motion.h1>

            {/* Crisp Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-[#E2ECE7] leading-relaxed max-w-xl font-normal drop-shadow-xs"
            >
              Personalized physiotherapy, sports injury rehabilitation, and clinical nutrition support
              to restore your kinetic freedom. Led by{" "}
              <strong className="text-white font-semibold underline decoration-[#C6A56B] underline-offset-4">
                Dr. Sakshi Kocher
              </strong>.
            </motion.p>

            {/* CTAs with High Contrast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="pointer-events-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C6A56B] via-[#E2C792] to-[#B59357] text-[#042624] font-bold text-sm tracking-wider transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[#042624]" />
                <span>Book Appointment</span>
              </button>

              <a
                href="#body-explorer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-[#C6A56B]/60 backdrop-blur-md text-sm font-semibold transition-all hover:border-[#C6A56B] shadow-md"
              >
                <span>Launch 3D Body Lab</span>
                <ArrowRight className="w-4 h-4 text-[#C6A56B]" />
              </a>
            </motion.div>

            {/* Interactive Anatomical Quick Selector Pills */}
            <div className="pointer-events-auto pt-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C687] block font-bold">
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
                          ? "bg-[#C6A56B] text-[#042624] shadow-lg scale-105"
                          : "bg-[#064E4B]/90 text-[#E2ECE7] border border-white/20 hover:border-[#C6A56B]"
                      }`}
                    >
                      {spot.tag} • {spot.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Rotation status */}
            <div className="pointer-events-auto flex items-center gap-4 pt-2 text-xs font-mono text-[#DCE9E3]">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-white font-medium"
              >
                <RotateCcw className={`w-3.5 h-3.5 text-[#C6A56B] ${autoRotate ? "animate-spin-slow" : ""}`} />
                <span>Rotation: {autoRotate ? "Active" : "Paused"}</span>
              </button>
              <span className="hidden sm:inline text-neutral-300">• Drag 3D canvas to orbit 360°</span>
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
                  className="pointer-events-auto w-full max-w-md glass-panel-obsidian rounded-3xl p-6 sm:p-7 border border-[#C6A56B]/60 shadow-2xl space-y-4 bg-[#042624]/95"
                >
                  {/* HUD Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5C687] font-bold">
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
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0F766E] border border-[#14B8A6] text-[#5EEAD4] font-mono text-xs font-bold">
                        {activeData.tag}
                      </span>
                      <span className="text-xs text-[#E2ECE7] font-medium">{activeData.label}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      {activeData.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#E2ECE7] leading-relaxed">
                    {activeData.summary}
                  </p>

                  {/* Targeted Clinical Pathways with Crisp Contrast */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5C687] block font-bold">
                      Targeted Clinical Protocols:
                    </span>
                    {activeData.treatments.map((tx, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-white font-medium">
                        <ShieldCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
                        <span>{tx}</span>
                      </div>
                    ))}
                  </div>

                  {/* HUD Action Button */}
                  <div className="pt-3 border-t border-white/15">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 px-4 rounded-xl bg-[#0F766E] hover:bg-[#14B8A6] text-white font-bold text-xs tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#E5C687]" />
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex items-center justify-between pointer-events-none text-xs text-[#E2ECE7] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
          <span>DR. SAKSHI KOCHER • CONSULTANT PHYSIOTHERAPIST</span>
        </div>

        <a
          href="#body-explorer"
          className="pointer-events-auto flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE LAB</span>
          <ChevronDown className="w-4 h-4 text-[#C6A56B] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
