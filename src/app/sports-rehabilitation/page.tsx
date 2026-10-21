import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ShieldCheck, Zap, CheckCircle2, ArrowRight, Award, Target, Flame } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Sports Rehabilitation & Athletic Recovery | Zenlife Physio",
  description:
    "Specialized sports injury rehabilitation, biomechanical movement screening, eccentric tendon loading, and objective return-to-play testing at Dr. Sakshi's Zenlife Physio.",
};

const SPORTS_PILLARS = [
  {
    icon: Target,
    title: "Functional Movement Screening (FMS)",
    desc: "We screen kinetic chain asymmetries, hip-knee-ankle alignment, and core rotational power to identify injury vulnerabilities before they become tears.",
  },
  {
    icon: Zap,
    title: "Phase-Specific Eccentric Loading",
    desc: "Achilles, patellar, and hamstring tendons remodel strongest under controlled eccentric tension, stimulating high-density type-I collagen synthesis.",
  },
  {
    icon: Activity,
    title: "Plyometric & Agility Progression",
    desc: "Controlled deceleration, cutting mechanics, and jump-landing training to restore neuromuscular reflex protection in high-speed sports.",
  },
  {
    icon: ShieldCheck,
    title: "Objective Return-To-Play Clearance",
    desc: "We test Limb Symmetry Index (>90%), triple hop test distance, and reactive agility before clearing athletes for full-contact competition.",
  },
];

export default function SportsRehabilitationPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb items={[{ label: "Sports Rehabilitation" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A3977] to-[#0A5C58] text-white rounded-3xl p-8 sm:p-14 border border-[#00AEEF]/30 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-white/10 px-3 py-1 rounded-full inline-block border border-white/20">
            Athletic Recovery Science
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F0F8FF] leading-tight">
            Sports Rehabilitation &amp; Athletic Performance Care
          </h1>
          <p className="text-sm sm:text-base text-[#E0F2FE] leading-relaxed">
            From competitive runners and footballers to dedicated gym athletes, Dr. Sakshi&apos;s
            rehabilitation protocols bridge the gap between acute tissue repair and peak athletic
            readiness.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/book-appointment?service=Sports%20Injuries%20and%20Athletic%20Rehabilitation"
              className="px-6 py-3.5 rounded-xl bg-[#F0F8FF] hover:bg-white text-[#0A3977] font-bold text-xs transition-colors shadow-md"
            >
              Book Athletic Assessment
            </Link>
            <Link
              href="/services/sports-injury-rehabilitation"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F0F8FF] border border-white/20 font-semibold text-xs transition-colors"
            >
              View Service Protocol &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Athletic Rehab */}
      <section className="space-y-8">
        <SectionHeading
          centered
          eyebrow="The Protocol"
          title="Engineered for Athletic Resilience"
          subtitle="How our sports medicine framework builds stronger, injury-resistant athletes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPORTS_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E0F2FE] shadow-xs hover:border-[#0077B6] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0077B6]/10 text-[#0077B6] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0A3977] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Common Sports Injuries Addressed */}
      <section className="bg-[#F0F8FF] rounded-3xl p-8 sm:p-12 border border-[#E0F2FE]">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
            Athletic Specialties
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0A3977] mt-1">
            Injuries We Frequently Manage
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {[
            "ACL & Meniscus Post-Operative Progression",
            "Ankle Inversion Sprains (ATFL / CFL tears)",
            "Hamstring & Quadriceps Muscle Strains",
            "Rotator Cuff Tendinopathy & Shoulder Impingement",
            "Patellar Tendonitis (Jumper's Knee)",
            "Shin Splints (Medial Tibial Stress Syndrome)",
            "Plantar Fasciitis in Distance Runners",
            "Tennis & Golfer's Elbow (Epicondylitis)",
            "Groin & Adductor Strains",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white border border-[#E0F2FE] flex items-center gap-3 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0" />
              <span className="font-medium text-[#0F172A]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to Return to Your Sport Stronger?"
        subtitle="Book a full athletic movement and injury assessment with Dr. Sakshi Kocher."
      />
    </div>
  );
}
