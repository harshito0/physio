"use client";

import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  RotateCcw,
  Eye,
  Layers,
  ZoomIn,
  ZoomOut,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import AnatomicalSpine3D from "./AnatomicalSpine3D";

interface BodyRegionData {
  id: string;
  name: string;
  anatomicalCode: string;
  category: string;
  biomechanicalTrigger: string;
  symptoms: string[];
  rehabProtocol: string[];
  recommendedServiceSlug: string;
}

const BODY_REGIONS: Record<string, BodyRegionData> = {
  cervical: {
    id: "cervical",
    name: "Cervical Spondylosis & Neck Articulation",
    anatomicalCode: "C1 - C7 SEGMENT",
    category: "Spine & Head Mobility",
    biomechanicalTrigger:
      "Forward head posture ('text neck') increases cervical joint shear up to 22kg, compressing facet joints and dehydrating discs.",
    symptoms: [
      "Stiffness at base of skull & upper trapezius",
      "Shooting nerve tingling into fingers (Radiculopathy)",
      "Cervicogenic tension headaches",
    ],
    rehabProtocol: [
      "Targeted cervical manual traction and joint mobilization",
      "Deep neck flexor (longus colli) motor retraining",
      "Ergonomic workstation monitor height adjustment",
    ],
    recommendedServiceSlug: "back-neck-spine",
  },
  thoracic: {
    id: "thoracic",
    name: "Thoracic Cage & Rib Expansion",
    anatomicalCode: "T1 - T12 POSTURAL SPHERE",
    category: "Postural & Respiratory",
    biomechanicalTrigger:
      "Sustained desk slumping locks thoracic vertebrae into kyphosis, reducing breathing expansion and overloading the neck.",
    symptoms: [
      "Aching between shoulder blades",
      "Shallow breathing and rib cage tightness",
      "Restricted golf swing or rotational sports mobility",
    ],
    rehabProtocol: [
      "Maitland thoracic spinal extension glides",
      "Myofascial cupping across periscapular fascial lines",
      "Active thoracic foam roller opening sequences",
    ],
    recommendedServiceSlug: "orthopedic-musculoskeletal",
  },
  lumbar: {
    id: "lumbar",
    name: "Lumbar Disc Herniation & Sciatica",
    anatomicalCode: "L1 - L5 CORE ANCHOR",
    category: "High Load Decompression",
    biomechanicalTrigger:
      "Repeated flexion under axial load presses L4-L5 or L5-S1 disc nucleus posteriorly, irritating the sciatic nerve root sheath.",
    symptoms: [
      "Electric radiating pain down hamstring, calf, and foot",
      "Morning lumbar stiffness or inability to stand straight",
      "Pain aggravated by prolonged sitting or coughing",
    ],
    rehabProtocol: [
      "McKenzie directional preference extension exercises",
      "Non-surgical spinal traction and manual decompression",
      "Deep core stabilization (Transverse Abdominis & Multifidus)",
    ],
    recommendedServiceSlug: "back-neck-spine",
  },
  sacrum: {
    id: "sacrum",
    name: "Sacroiliac (SI) Joint & Pelvic Balance",
    anatomicalCode: "S1 - S5 KINETIC KEYSTONE",
    category: "Pelvic & Gait Stability",
    biomechanicalTrigger:
      "Pelvic asymmetry or ligamentous laxity causes shearing stress at the sacroiliac joint, often aggravated by uneven gait or pregnancy.",
    symptoms: [
      "Unilateral lower back and deep buttock ache",
      "Discomfort with single-leg standing or stair climbing",
      "Pain rolling over in bed or getting out of a car",
    ],
    rehabProtocol: [
      "Sacroiliac joint manual realignment techniques",
      "Gluteus medius and pelvic floor neuromuscular activation",
      "Dynamic gait re-education and off-loader pelvic support",
    ],
    recommendedServiceSlug: "gait-balance-training",
  },
};

type ViewPreset = "front" | "back" | "lateral" | "top";
type VisualMode = "structure" | "neural" | "stress";

export default function InteractiveBodyExplorer({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeRegion, setActiveRegion] = useState<string>("lumbar");
  const [visualMode, setVisualMode] = useState<VisualMode>("structure");
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  const regionInfo = BODY_REGIONS[activeRegion] || BODY_REGIONS.lumbar;

  const setViewPreset = (preset: ViewPreset) => {
    setAutoRotate(false);
    if (!controlsRef.current) return;

    if (preset === "front") {
      controlsRef.current.reset();
      controlsRef.current.object.position.set(0, 0, 7.5);
    } else if (preset === "back") {
      controlsRef.current.object.position.set(0, 0, -7.5);
    } else if (preset === "lateral") {
      controlsRef.current.object.position.set(7.5, 0, 0);
    } else if (preset === "top") {
      controlsRef.current.object.position.set(0, 7.5, 0.5);
    }
    controlsRef.current.update();
  };

  const handleReset = () => {
    setAutoRotate(false);
    if (controlsRef.current) {
      controlsRef.current.reset();
      controlsRef.current.object.position.set(0, 0, 7.5);
      controlsRef.current.update();
    }
    setActiveRegion("lumbar");
  };

  return (
    <section id="body-explorer" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] bg-[#0A3977] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#00AEEF]/30 shadow-xs">
            Interactive Biomechanical Laboratory
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
            Explore 3D Human Anatomy &amp; Injury Pathways
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Rotate the 3D anatomical model, toggle view angles, inspect stress zones, and discover how
            clinical physical therapy restores damaged spinal segments.
          </p>
        </div>

        {/* View Angle Switcher Badges with Luxury Styling */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setViewPreset("front")}
            className="px-4 py-2 rounded-xl bg-white text-xs font-mono font-bold text-[#0A3977] border border-[#E0F2FE] hover:border-[#0077B6] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Anterior (Front)
          </button>
          <button
            onClick={() => setViewPreset("back")}
            className="px-4 py-2 rounded-xl bg-white text-xs font-mono font-bold text-[#0A3977] border border-[#E0F2FE] hover:border-[#0077B6] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Posterior (Back)
          </button>
          <button
            onClick={() => setViewPreset("lateral")}
            className="px-4 py-2 rounded-xl bg-white text-xs font-mono font-bold text-[#0A3977] border border-[#E0F2FE] hover:border-[#0077B6] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Lateral (Profile)
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl bg-[#0A3977] text-xs font-mono font-bold text-[#E0F2FE] border border-[#00AEEF]/50 flex items-center gap-1.5 hover:bg-[#0077B6] shadow-md transition-all active:scale-95"
            title="Reset 3D camera to default"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>Reset View</span>
          </button>
        </div>
      </div>

      {/* Main 3D Lab Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: 3D Canvas Studio */}
        <div className="lg:col-span-7 relative h-[560px] sm:h-[640px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#061B36] via-[#0A3977] to-[#06152B] border border-[#00AEEF]/30 shadow-2xl">
          {/* Top telemetry status bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-[#E0F2FE]">
              <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span>LAB MODE: 360° SPATIAL INSPECTION</span>
            </div>

            <div className="pointer-events-auto flex items-center gap-2">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium backdrop-blur-md transition-all ${
                  autoRotate
                    ? "bg-[#00AEEF] text-[#0A3977] font-bold"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {autoRotate ? "Orbiting" : "Static Drag"}
              </button>
            </div>
          </div>

          {/* Region selector buttons on the 3D model */}
          <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
            {Object.entries(BODY_REGIONS).map(([key, data]) => {
              const isActive = activeRegion === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveRegion(key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    isActive
                      ? "bg-[#00AEEF] text-[#0A3977] shadow-md scale-105"
                      : "bg-[#0A3977]/80 text-[#F0F8FF] border border-white/20 hover:bg-[#0077B6]"
                  }`}
                >
                  {data.anatomicalCode}
                </button>
              );
            })}
          </div>

          {/* Real 3D Canvas */}
          <Canvas
            camera={{ position: [0, 0, 7.5], fov: 42 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[6, 8, 6]} intensity={1.4} castShadow />
            <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#0077B6" />
            <pointLight position={[0, 0, 4]} intensity={0.8} color="#FFF8EB" />
            <pointLight position={[0, 3, 2]} intensity={0.6} color="#00AEEF" />

            <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
              <AnatomicalSpine3D
                selectedHotspot={activeRegion}
                onSelectHotspot={setActiveRegion}
                enableHotspots={true}
                autoRotate={autoRotate}
                rotationSpeed={0.4}
                showRibs={true}
              />
            </Float>

            <OrbitControls
              ref={controlsRef}
              enableZoom={true}
              enablePan={false}
              minDistance={4.5}
              maxDistance={11}
              rotateSpeed={0.7}
            />
          </Canvas>
        </div>

        {/* Right Column: In-Depth Diagnostic Dossier */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E0F2FE] shadow-lg flex flex-col justify-between">
          <div className="space-y-6">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E0F2FE]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0A3977] text-[#00AEEF]">
                {regionInfo.anatomicalCode}
              </span>
              <span className="text-xs font-semibold text-[#0077B6]">{regionInfo.category}</span>
            </div>

            {/* Region Title */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3977] leading-tight">
                {regionInfo.name}
              </h3>
            </div>

            {/* Biomechanical Root Trigger */}
            <div className="p-4 rounded-2xl bg-[#F0F8FF] border border-[#E0F2FE] space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-[#0077B6] block">
                Biomechanical Dysfunction Trigger:
              </span>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {regionInfo.biomechanicalTrigger}
              </p>
            </div>

            {/* Clinical Symptoms */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block font-mono">
                Common Patient Symptoms:
              </span>
              <ul className="space-y-2">
                {regionInfo.symptoms.map((sym, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shrink-0 mt-1.5" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Targeted Physiotherapeutic Protocol */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A3977] block font-mono">
                Dr. Sakshi&apos;s Rehabilitation Protocol:
              </span>
              <ul className="space-y-2">
                {regionInfo.rehabProtocol.map((protocol, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                    <span>{protocol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 mt-6 border-t border-[#E0F2FE] flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#00AEEF]" />
              <span>Schedule Targeted Care</span>
            </button>
            <a
              href={`/services/${regionInfo.recommendedServiceSlug}`}
              className="w-full sm:w-auto py-3 px-4 rounded-xl border border-[#E0F2FE] hover:border-[#0077B6] text-[#0A3977] text-xs font-semibold text-center transition-colors"
            >
              Service Protocol &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
