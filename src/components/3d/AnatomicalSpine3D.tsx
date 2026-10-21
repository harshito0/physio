"use client";

import React, { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export interface HotspotData {
  id: string;
  label: string;
  tag: string;
  position: [number, number, number];
  title: string;
  summary: string;
  treatments: string[];
}

export const ANATOMICAL_HOTSPOTS: Record<string, HotspotData> = {
  cervical: {
    id: "cervical",
    label: "Cervical Spine",
    tag: "C1 - C7",
    position: [0, 2.7, 0.4],
    title: "Cervical Spondylosis & Radicular Care",
    summary:
      "Supports head weight (5-22kg under tilt). Common site of forward head posture, disc compression, and radiating arm numbness.",
    treatments: ["Gentle Manual Traction", "Deep Neck Flexor Activation", "Posture Ergonomics"],
  },
  thoracic: {
    id: "thoracic",
    label: "Thoracic Cage",
    tag: "T1 - T12",
    position: [0, 0.8, -0.4],
    title: "Thoracic Kyphosis & Rib Mobility",
    summary:
      "Anchors breathing mechanics and upper body rotation. Chronic desk sitting causes stiffness and compensatory neck/lumbar strain.",
    treatments: ["Mulligan Joint Mobilization", "Myofascial Cupping", "Thoracic Extension Drills"],
  },
  lumbar: {
    id: "lumbar",
    label: "Lumbar Spine",
    tag: "L1 - L5",
    position: [0, -1.6, 0.5],
    title: "Lumbar Disc Herniation & Sciatica",
    summary:
      "Endures the highest compressive loads. L4-L5 and L5-S1 disc protrusions frequently impinge on the sciatic nerve root.",
    treatments: ["McKenzie Decompression", "Transverse Abdominis Core Bracing", "Neurodynamics"],
  },
  sacrum: {
    id: "sacrum",
    label: "Sacroiliac Base",
    tag: "S1 - S5",
    position: [0, -3.1, 0.3],
    title: "Pelvic Alignment & Kinetic Transfer",
    summary:
      "Transfers ground reaction forces from legs into spine. SI joint dysfunction can mimic sciatica and cause unilateral hip pain.",
    treatments: ["Pelvic Girdle Realignment", "Gluteal Strengthening", "Gait Retraining"],
  },
};

// Procedural Vertebra Unit
function VertebraMesh({
  y,
  zCurve,
  scale,
  isHighlighted,
  onPointerOver,
  onPointerOut,
  onClick,
}: {
  y: number;
  zCurve: number;
  scale: [number, number, number];
  isHighlighted: boolean;
  onPointerOver: () => void;
  onPointerOut: () => void;
  onClick: () => void;
}) {
  const boneColor = isHighlighted ? "#00AEEF" : "#F1F5F9";
  const emissiveColor = isHighlighted ? "#0077B6" : "#000000";

  return (
    <group
      position={[0, y, zCurve]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onPointerOver();
      }}
      onPointerOut={onPointerOut}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Vertebral body */}
      <mesh castShadow receiveShadow scale={scale}>
        <cylinderGeometry args={[0.54, 0.52, 0.22, 24]} />
        <meshStandardMaterial
          color={boneColor}
          roughness={0.35}
          metalness={0.15}
          emissive={emissiveColor}
          emissiveIntensity={isHighlighted ? 0.6 : 0.0}
        />
      </mesh>

      {/* Cartilage Disc */}
      <mesh position={[0, -0.13, 0]} scale={[scale[0] * 0.94, 1, scale[2] * 0.94]}>
        <cylinderGeometry args={[0.52, 0.52, 0.07, 20]} />
        <meshStandardMaterial
          color={isHighlighted ? "#00AEEF" : "#94A3B8"}
          roughness={0.2}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Posterior Spinous Process */}
      <mesh position={[0, 0, -0.42 * scale[2]]} rotation={[0.22, 0, 0]}>
        <boxGeometry args={[0.18, 0.16, 0.52]} />
        <meshStandardMaterial
          color={boneColor}
          roughness={0.4}
          emissive={emissiveColor}
          emissiveIntensity={isHighlighted ? 0.4 : 0.0}
        />
      </mesh>

      {/* Transverse Processes (wings) */}
      <mesh position={[0.52 * scale[0], 0, -0.08]} rotation={[0, 0.25, 0]}>
        <boxGeometry args={[0.34, 0.12, 0.16]} />
        <meshStandardMaterial color={boneColor} roughness={0.4} />
      </mesh>
      <mesh position={[-0.52 * scale[0], 0, -0.08]} rotation={[0, -0.25, 0]}>
        <boxGeometry args={[0.34, 0.12, 0.16]} />
        <meshStandardMaterial color={boneColor} roughness={0.4} />
      </mesh>
    </group>
  );
}

// Procedural Thoracic Rib Pair
function RibPair({ y, z, width }: { y: number; z: number; width: number }) {
  return (
    <group position={[0, y, z]}>
      {/* Left Rib Arc */}
      <mesh position={[width * 0.65, -0.05, 0.2]} rotation={[0.15, 0.4, 0.35]}>
        <torusGeometry args={[width * 0.55, 0.045, 12, 28, Math.PI * 0.7]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.4} transparent opacity={0.65} />
      </mesh>
      {/* Right Rib Arc */}
      <mesh position={[-width * 0.65, -0.05, 0.2]} rotation={[0.15, -0.4, -0.35]}>
        <torusGeometry args={[width * 0.55, 0.045, 12, 28, Math.PI * 0.7]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.4} transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

// Floating Golden Particle Nebula
function FloatingParticles({ count = 180 }: { count?: number }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00AEEF"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function AnatomicalSpine3D({
  selectedHotspot,
  onSelectHotspot,
  enableHotspots = true,
  autoRotate = true,
  rotationSpeed = 0.35,
  showRibs = true,
}: {
  selectedHotspot: string | null;
  onSelectHotspot: (id: string) => void;
  enableHotspots?: boolean;
  autoRotate?: boolean;
  rotationSpeed?: number;
  showRibs?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  // Generate 24 mobile vertebrae with realistic lordosis/kyphosis curvature
  const vertebraeList = useMemo(() => {
    const list = [];
    const count = 24;

    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const y = 3.3 - t * 6.2;
      let zCurve = 0;
      let region = "cervical";

      if (i < 7) {
        // Cervical lordosis (curves forward)
        region = "cervical";
        const progress = i / 6;
        zCurve = Math.sin(progress * Math.PI) * 0.25 - 0.05;
      } else if (i < 19) {
        // Thoracic kyphosis (curves back)
        region = "thoracic";
        const progress = (i - 7) / 11;
        zCurve = -Math.sin(progress * Math.PI) * 0.35 - 0.05;
      } else {
        // Lumbar lordosis (curves forward)
        region = "lumbar";
        const progress = (i - 19) / 4;
        zCurve = Math.sin(progress * Math.PI) * 0.42 - 0.05;
      }

      const size = 0.54 + t * 0.8;
      list.push({
        id: i,
        y,
        zCurve,
        region,
        scale: [size * 1.08, size * 0.95, size * 1.0] as [number, number, number],
      });
    }
    return list;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      <FloatingParticles />

      {/* Glowing Neural Cord / Spinal Canal */}
      <mesh position={[0, 0.2, -0.12]}>
        <cylinderGeometry args={[0.07, 0.09, 6.7, 16]} />
        <meshStandardMaterial
          color="#00AEEF"
          emissive="#0077B6"
          emissiveIntensity={0.9}
          roughness={0.15}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Vertebrae Column */}
      {vertebraeList.map((v) => {
        const isHighlight =
          selectedHotspot === v.region || hoveredSegment === v.region;
        return (
          <React.Fragment key={v.id}>
            <VertebraMesh
              y={v.y}
              zCurve={v.zCurve}
              scale={v.scale}
              isHighlighted={isHighlight}
              onPointerOver={() => setHoveredSegment(v.region)}
              onPointerOut={() => setHoveredSegment(null)}
              onClick={() => onSelectHotspot(v.region)}
            />
            {/* Ribs on Thoracic vertebrae */}
            {showRibs && v.region === "thoracic" && v.id % 2 === 0 && (
              <RibPair y={v.y} z={v.zCurve} width={v.scale[0] * 1.6} />
            )}
          </React.Fragment>
        );
      })}

      {/* Sacrum & Pelvic Keystone Base */}
      <group position={[0, -3.2, 0.25]}>
        <mesh scale={[1.45, 1.0, 0.85]}>
          <coneGeometry args={[0.75, 1.3, 16]} />
          <meshStandardMaterial
            color={selectedHotspot === "sacrum" ? "#00AEEF" : "#E2E8F0"}
            roughness={0.4}
            metalness={0.1}
            emissive={selectedHotspot === "sacrum" ? "#0077B6" : "#000000"}
            emissiveIntensity={selectedHotspot === "sacrum" ? 0.6 : 0.0}
          />
        </mesh>
      </group>

      {/* 3D Interactive Hotspot Beacons */}
      {enableHotspots &&
        Object.values(ANATOMICAL_HOTSPOTS).map((spot) => {
          const isActive = selectedHotspot === spot.id;
          return (
            <group
              key={spot.id}
              position={spot.position}
              onClick={(e) => {
                e.stopPropagation();
                onSelectHotspot(spot.id);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredSegment(spot.id);
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                setHoveredSegment(null);
                document.body.style.cursor = "auto";
              }}
            >
              {/* Inner Luminous Core */}
              <mesh>
                <sphereGeometry args={[isActive ? 0.16 : 0.11, 20, 20]} />
                <meshStandardMaterial
                  color={isActive ? "#38BDF8" : "#00AEEF"}
                  emissive={isActive ? "#00AEEF" : "#0A3977"}
                  emissiveIntensity={isActive ? 2.2 : 1.0}
                  roughness={0.1}
                />
              </mesh>

              {/* Outer Glowing Ring */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[isActive ? 0.28 : 0.2, 0.02, 16, 32]} />
                <meshStandardMaterial
                  color={isActive ? "#BAE6FD" : "#38BDF8"}
                  emissive={isActive ? "#00AEEF" : "#0077B6"}
                  emissiveIntensity={isActive ? 1.8 : 0.8}
                  transparent
                  opacity={isActive ? 0.9 : 0.6}
                />
              </mesh>
            </group>
          );
        })}
    </group>
  );
}
