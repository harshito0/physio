"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Activity, ShieldCheck, Zap, Target, ArrowRight, Calendar, Award } from "lucide-react";

export default function KineticSportsMatrix({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeMetric, setActiveMetric] = useState<number>(0);

  const metrics = [
    {
      title: "Limb Symmetry Index (LSI)",
      target: "> 90% Threshold",
      desc: "Single-leg triple hop test and isokinetic dynamometry comparing injured vs uninjured limb before contact sport clearance.",
      stage: "Return-To-Play Benchmark",
    },
    {
      title: "Eccentric Tendon Remodeling",
      target: "Type-I Collagen Crosslink",
      desc: "Progressive mechanical tension stimulates tenocyte cellular repair in chronic Achilles, patellar, and rotator cuff tendinopathy.",
      stage: "Biological Remodeling",
    },
    {
      title: "Kinetic Chain Power Transfer",
      target: "360° Rotational Torque",
      desc: "Ensuring energy created by foot-ground impact safely disperses through pelvis and core without torque shearing the spine.",
      stage: "Biomechanical Balance",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-gradient-to-br from-[#061B36] via-[#0A3977] to-[#06152B] text-[#F0F8FF] rounded-3xl p-8 sm:p-14 border border-[#00AEEF]/40 shadow-2xl overflow-hidden relative">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00AEEF]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#00AEEF]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Athletic Overview */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0F2FE] bg-[#0A3977] px-4 py-2 rounded-full inline-block border border-[#00AEEF]/60 shadow-md">
              High Performance Athletic Recovery
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Science-Backed{" "}
              <span className="italic text-[#38BDF8] font-light">
                Sports Rehabilitation Wing
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#E2ECE7] leading-relaxed font-normal">
              Dr. Sakshi Kocher applies objective biomechanical benchmarks rather than subjective
              guesses. From acute ACL tears to runner&apos;s shin splints, we restore full muscular
              symmetry so you return to your sport faster, stronger, and protected from re-injury.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "ACL & Meniscus Protocols",
                "Rotator Cuff & Tennis Elbow",
                "High-Ankle Sprain Triage",
                "PEACE & LOVE Soft-Tissue Protocol",
              ].map((item, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#E0F2FE]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-[#0096C7] text-[#0A3977] font-bold text-xs tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Book Athletic Screening
              </button>
              <Link
                href="/sports-rehabilitation"
                className="px-6 py-3.5 rounded-2xl border border-white/20 hover:bg-white/10 text-white font-semibold text-xs text-center transition-colors"
              >
                Full Sports Wing Details &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Benchmark Matrix */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7DD3FC] block">
              OBJECTIVE CLINICAL CLEARANCE BENCHMARKS:
            </span>

            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveMetric(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeMetric === idx
                      ? "bg-white/20 border-[#00AEEF] shadow-xl scale-[1.01]"
                      : "bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-lg font-bold text-white">
                      {metric.title}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#E0F2FE] bg-[#0A3977] px-3 py-1 rounded-md border border-[#00AEEF]">
                      {metric.target}
                    </span>
                  </div>
                  <p className="text-xs text-[#E2ECE7] leading-relaxed mb-2 font-normal">
                    {metric.desc}
                  </p>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7DD3FC] font-semibold">
                    ● {metric.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
