"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Activity, RotateCcw, ZoomIn, Eye, ShieldCheck } from "lucide-react";

interface RegionInfo {
  name: string;
  tag: string;
  count: string;
  yRange: [number, number];
  description: string;
  clinicalNote: string;
}

const REGIONS: Record<string, RegionInfo> = {
  cervical: {
    name: "Cervical Spine",
    tag: "C1 - C7",
    count: "7 Vertebrae",
    yRange: [2.2, 3.8],
    description: "Supports head mobility, upper limb nerve plexuses, and cervical lordosis.",
    clinicalNote: "Common issues: Cervical spondylosis, forward head posture, radicular numbness.",
  },
  thoracic: {
    name: "Thoracic Cage",
    tag: "T1 - T12",
    count: "12 Vertebrae",
    yRange: [-0.5, 2.1],
    description: "Connects with the rib cage, anchoring respiratory mechanics and thoracic posture.",
    clinicalNote: "Common issues: Postural kyphosis, mid-back stiffness, breathing restriction.",
  },
  lumbar: {
    name: "Lumbar Spine",
    tag: "L1 - L5",
    count: "5 Large Vertebrae",
    yRange: [-2.6, -0.6],
    description: "Carries upper body weight, shock absorption, and lumbar flexion/extension.",
    clinicalNote: "Common issues: L4-L5/L5-S1 disc bulges, sciatica, chronic lower back ache.",
  },
  sacral: {
    name: "Sacrum & Pelvis",
    tag: "S1 - S5 / Base",
    count: "Fused Base",
    yRange: [-3.8, -2.7],
    description: "Distributes kinetic loads from the spine directly into the pelvic girdle.",
    clinicalNote: "Common issues: Sacroiliac (SI) joint dysfunction, pelvic asymmetry.",
  },
};

// Procedural Vertebra geometry generator
function VertebraUnit({
  y,
  scale,
  depth,
  isHighlighted,
  discHeight = 0.08,
}: {
  y: number;
  scale: [number, number, number];
  depth: number;
  isHighlighted: boolean;
  discHeight?: number;
}) {
  const boneColor = isHighlighted ? "#00AEEF" : "#F1F5F9";
  const discColor = isHighlighted ? "#00AEEF" : "#BAE6FD";

  return (
    <group position={[0, y, depth]}>
      {/* Vertebral Body (oval cylinder) */}
      <mesh castShadow receiveShadow scale={scale}>
        <cylinderGeometry args={[0.55, 0.52, 0.22, 24]} />
        <meshStandardMaterial
          color={boneColor}
          roughness={0.4}
          metalness={0.1}
          emissive={isHighlighted ? "#00AEEF" : "#000000"}
          emissiveIntensity={isHighlighted ? 0.4 : 0.0}
        />
      </mesh>

      {/* Intervertebral Disc */}
      <mesh position={[0, -0.14, 0]} scale={[scale[0] * 0.95, 1, scale[2] * 0.95]}>
        <cylinderGeometry args={[0.54, 0.54, discHeight, 20]} />
        <meshStandardMaterial
          color={discColor}
          transparent
          opacity={0.85}
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>

      {/* Posterior Arch & Spinous Process (protruding backward) */}
      <mesh position={[0, 0, -0.45 * scale[2]]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.18, 0.16, 0.55]} />
        <meshStandardMaterial color={boneColor} roughness={0.45} />
      </mesh>

      {/* Transverse Processes (left & right wings) */}
      <mesh position={[0.55 * scale[0], 0, -0.1]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.35, 0.12, 0.16]} />
        <meshStandardMaterial color={boneColor} roughness={0.45} />
      </mesh>
      <mesh position={[-0.55 * scale[0], 0, -0.1]} rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.35, 0.12, 0.16]} />
        <meshStandardMaterial color={boneColor} roughness={0.45} />
      </mesh>
    </group>
  );
}

// Full Anatomical Column with Natural Curves
function SpinalColumn({
  activeRegion,
  autoRotate,
}: {
  activeRegion: string;
  autoRotate: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate 24 mobile vertebrae + sacrum with natural lordosis/kyphosis curve
  const vertebrae = useMemo(() => {
    const list = [];
    const total = 24;

    for (let i = 0; i < total; i++) {
      const progress = i / (total - 1);
      // y from +3.4 (C1) down to -3.0 (L5)
      const y = 3.4 - progress * 6.2;

      // Natural anatomical curvature in z-axis
      // Cervical lordosis (curves forward), Thoracic kyphosis (curves back), Lumbar lordosis (curves forward)
      let zCurve = 0;
      let regionTag = "cervical";

      if (i < 7) {
        regionTag = "cervical";
        const t = i / 6;
        zCurve = Math.sin(t * Math.PI) * 0.22 - 0.05;
      } else if (i < 19) {
        regionTag = "thoracic";
        const t = (i - 7) / 11;
        zCurve = -Math.sin(t * Math.PI) * 0.32 - 0.05;
      } else {
        regionTag = "lumbar";
        const t = (i - 19) / 4;
        zCurve = Math.sin(t * Math.PI) * 0.38 - 0.05;
      }

      // Vertebra scale increases from C1 down to L5
      const sizeMultiplier = 0.55 + progress * 0.75;
      const widthScale = sizeMultiplier * 1.1;
      const heightScale = sizeMultiplier * 0.95;
      const depthScale = sizeMultiplier * 1.0;

      list.push({
        id: i,
        y,
        depth: zCurve,
        scale: [widthScale, heightScale, depthScale] as [number, number, number],
        region: regionTag,
      });
    }

    return list;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Spinal Canal Light Guide (Spinal Cord Luminescence) */}
      <mesh position={[0, 0.2, -0.15]}>
        <cylinderGeometry args={[0.06, 0.08, 6.8, 16]} />
        <meshStandardMaterial
          color="#00AEEF"
          emissive="#0077B6"
          emissiveIntensity={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Vertebrae */}
      {vertebrae.map((v) => (
        <VertebraUnit
          key={v.id}
          y={v.y}
          depth={v.depth}
          scale={v.scale}
          isHighlighted={activeRegion === v.region}
        />
      ))}

      {/* Sacrum & Coccyx Base */}
      <group position={[0, -3.3, 0.2]}>
        <mesh scale={[1.4, 0.9, 0.8]}>
          <coneGeometry args={[0.7, 1.2, 16]} />
          <meshStandardMaterial
            color={activeRegion === "sacral" ? "#00AEEF" : "#E2E8F0"}
            roughness={0.4}
            metalness={0.1}
            emissive={activeRegion === "sacral" ? "#00AEEF" : "#000000"}
            emissiveIntensity={activeRegion === "sacral" ? 0.35 : 0.0}
          />
        </mesh>
      </group>
    </group>
  );
}

// Fallback when WebGL is unavailable or user has reduced-motion preference
function WebGLFallback({ activeRegion, onSelectRegion }: { activeRegion: string; onSelectRegion: (r: string) => void }) {
  const current = REGIONS[activeRegion] || REGIONS.lumbar;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F0F8FF] to-[#E0F2FE]/30 rounded-2xl border border-[#E0F2FE]">
      <div className="w-24 h-24 rounded-full bg-[#0A3977]/10 flex items-center justify-center text-[#0A3977] mb-4">
        <Activity className="w-12 h-12 stroke-[1.5]" />
      </div>
      <span className="text-xs font-semibold tracking-wider uppercase text-[#00AEEF] mb-1">
        Clinical Spine Anatomy
      </span>
      <h4 className="text-xl font-serif text-[#0A3977] font-bold mb-2">{current.name}</h4>
      <p className="text-xs text-neutral-600 text-center max-w-sm mb-4">{current.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.entries(REGIONS).map(([key, item]) => (
          <button
            key={key}
            onClick={() => onSelectRegion(key)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
              activeRegion === key
                ? "bg-[#0A3977] text-white shadow-sm"
                : "bg-white text-[#0F172A] border border-[#E0F2FE] hover:border-[#0077B6]"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SpineModel3D() {
  const [activeRegion, setActiveRegion] = useState<string>("lumbar");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // Check prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setAutoRotate(false);
      }
    }
  }, []);

  const activeInfo = REGIONS[activeRegion] || REGIONS.lumbar;

  return (
    <div className="relative w-full h-[520px] md:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#F0F8FF] via-[#F1F5F9]/60 to-[#E0F2FE]/40 border border-[#E0F2FE] shadow-lg shadow-teal-950/5">
      {/* Top Clinical Header Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E0F2FE] shadow-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0077B6] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0A3977]">
            Interactive 3D Rehabilitation Column
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md transition-all ${
              autoRotate
                ? "bg-[#0A3977] text-white shadow-xs"
                : "bg-white/90 text-[#0F172A] border border-[#E0F2FE] hover:bg-white"
            }`}
            title="Toggle 3D Rotation"
            aria-label="Toggle 3D Rotation"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${autoRotate ? "animate-spin-slow" : ""}`} />
            <span>{autoRotate ? "Rotating" : "Paused"}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas / Fallback */}
      {!hasWebGL || prefersReducedMotion ? (
        <WebGLFallback activeRegion={activeRegion} onSelectRegion={setActiveRegion} />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Studio Lighting tailored to medical model */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-6, -4, -3]} intensity={0.6} color="#0077B6" />
          <pointLight position={[0, 0, 4]} intensity={0.6} color="#FFF8EB" />
          <pointLight position={[0, 3, 2]} intensity={0.4} color="#00AEEF" />

          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <SpinalColumn activeRegion={activeRegion} autoRotate={autoRotate} />
          </Float>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.7}
            rotateSpeed={0.6}
          />
        </Canvas>
      )}

      {/* Interactive Anatomical Region Switcher Bar */}
      <div className="absolute top-16 left-4 z-20 flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A3977]/80 px-1">
          Explore Region
        </span>
        <div className="flex flex-col gap-1.5 bg-white/85 backdrop-blur-md p-1.5 rounded-2xl border border-[#E0F2FE] shadow-xs">
          {Object.entries(REGIONS).map(([key, info]) => {
            const isSelected = activeRegion === key;
            return (
              <button
                key={key}
                onClick={() => setActiveRegion(key)}
                className={`text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between gap-2.5 ${
                  isSelected
                    ? "bg-[#0A3977] text-white shadow-xs"
                    : "text-[#0F172A] hover:bg-[#E0F2FE]/40"
                }`}
              >
                <span>{info.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    isSelected
                      ? "bg-white/20 text-[#E0F2FE]"
                      : "bg-[#E0F2FE]/70 text-[#0A3977]"
                  }`}
                >
                  {info.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Clinical Diagnosis Card for Active Region */}
      <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E0F2FE] shadow-md max-w-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#0A3977] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0077B6]" />
                {activeInfo.name} ({activeInfo.tag})
              </span>
              <span className="text-[11px] bg-[#E0F2FE] text-[#0A3977] px-2 py-0.5 rounded-full font-medium">
                {activeInfo.count}
              </span>
            </div>
            <p className="text-xs text-neutral-600 line-clamp-1 mb-1">{activeInfo.description}</p>
            <p className="text-[11px] text-[#0077B6] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
              {activeInfo.clinicalNote}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
            <a
              href="#appointment-booking"
              className="text-xs px-3.5 py-2 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-semibold transition-colors shadow-xs flex items-center gap-1.5"
            >
              <span>Relieve Pain</span>
              <Activity className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
