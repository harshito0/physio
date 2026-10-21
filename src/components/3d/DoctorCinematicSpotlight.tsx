"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, HeartPulse, Sparkles, Award, Phone, Calendar } from "lucide-react";
import { clinicInfo } from "@/data/clinic";

export default function DoctorCinematicSpotlight({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-[#F0F8FF] rounded-3xl p-8 sm:p-14 border border-[#E0F2FE] shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Architectural Framing */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-b from-[#0A3977] via-[#0077B6] to-[#061B36] p-8 text-white text-center border-2 border-[#00AEEF]/40 shadow-2xl space-y-4">
              <div className="w-24 h-24 rounded-full bg-white p-1 border-2 border-[#00AEEF] flex items-center justify-center mx-auto shadow-xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Dr. Sakshi's Zenlife Physio Clinic Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-[#F0F8FF]">Dr. Sakshi Kocher</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#00AEEF] mt-1 font-semibold">
                  Consultant Physiotherapist
                </p>
                <p className="text-xs text-[#E0F2FE]/80 mt-1">
                  Sports Rehabilitation &amp; Clinical Nutrition Specialist
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 text-left text-xs font-mono space-y-2 text-[#E0F2FE]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Strict 1-on-1 Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Physical &amp; Metabolic Dual Focus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Clinical Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] bg-[#0A3977] px-3.5 py-1.5 rounded-full inline-block border border-[#00AEEF]/30 shadow-xs">
              Clinical Leadership
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
              A Patient-First Philosophy Rooted in Biomechanical Truth
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              &ldquo;Too many patients are handed generic exercise sheets or left alone attached to
              machines. True recovery requires diagnosing the exact joint restriction, teaching the
              nervous system to fire the correct muscles, and fueling the healing tissue with clinical
              anti-inflammatory nutrition.&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E0F2FE] shadow-xs">
                <h4 className="font-serif text-base font-bold text-[#0A3977] mb-1">
                  Hands-On Manual Precision
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Every session includes direct joint mobilization, soft tissue release, and real-time
                  postural correction.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E0F2FE] shadow-xs">
                <h4 className="font-serif text-base font-bold text-[#0A3977] mb-1">
                  Metabolic Biochemical Support
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Guiding dietary strategies that down-regulate systemic inflammation and support cartilage
                  longevity.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-bold text-xs tracking-wider transition-colors shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#00AEEF]" />
                <span>Consult with Dr. Sakshi</span>
              </button>

              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl border border-[#E0F2FE] hover:border-[#0077B6] text-[#0A3977] font-semibold text-xs transition-colors bg-white"
              >
                Read Complete Biography &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
