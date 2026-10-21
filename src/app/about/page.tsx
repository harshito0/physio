import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, HeartPulse, Sparkles, CheckCircle2, Phone, Calendar, Stethoscope, BookOpen } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { clinicInfo, verifiedPracticeAreas } from "@/data/clinic";

export const metadata: Metadata = {
  title: "About Dr. Sakshi Kocher & Zenlife Physio",
  description:
    "Learn about Dr. Sakshi Kocher, Consultant Physiotherapist and founder of Zenlife Physio. Clinical background, patient-first philosophy, and evidence-based rehabilitation.",
};

export default function AboutPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb items={[{ label: "About Clinic & Doctor" }]} />

      {/* Hero Section */}
      <section className="max-w-4xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block mb-3">
          Clinical Leadership &amp; Ethics
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
          Dr. Sakshi Kocher &amp; The Zenlife Physio Philosophy
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#0F172A]/80 leading-relaxed">
          Founded on the principle that true recovery requires addressing the root biomechanical source
          of pain, Dr. Sakshi combines hands-on manual physiotherapy, targeted therapeutic modalities,
          and metabolic nutrition to restore long-term vitality.
        </p>
      </section>

      {/* Doctor Detailed Profile Box */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E0F2FE] shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Profile Visual Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-b from-[#0A3977] to-[#0A5C58] p-8 text-white text-center border-2 border-[#00AEEF]/30 shadow-xl">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-[#00AEEF]/50 flex items-center justify-center text-[#00AEEF] mx-auto mb-4">
                <Stethoscope className="w-12 h-12" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#F0F8FF]">Dr. Sakshi Kocher</h2>
              <p className="text-xs text-[#00AEEF] font-semibold mt-1">
                Consultant Physiotherapist
              </p>
              <p className="text-xs text-[#E0F2FE] mt-2">
                Sports Rehabilitation &amp; Clinical Nutrition Specialist
              </p>

              <div className="mt-6 pt-4 border-t border-white/20 text-left text-xs space-y-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#00AEEF] block">
                    Verified Practice Focus:
                  </span>
                  <span className="text-white text-xs">
                    Orthopedics, Spine Decompression, Sports Recovery
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#00AEEF] block">
                    Professional Registration:
                  </span>
                  <span className="text-[#E0F2FE] text-xs">
                    Registered Physiotherapist [Registration details verified with state council upon clinic records]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Bio & Practice Ethics */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3977]">
              Dedicated, Patient-First Clinical Care
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Dr. Sakshi Kocher established Zenlife Physio to deliver an alternative to crowded, impersonal
              therapy centers where patients are often left alone on machines. Under her care, every
              patient receives individual attention, thorough diagnostic assessments, and an adaptable
              exercise blueprint designed specifically for their body structure and daily physical demands.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Her dual expertise in physical rehabilitation and clinical nutrition bridges the gap between
              external joint mechanics and internal cellular healing. By helping patients reduce systemic
              inflammation through targeted nutritional habits, healing times for stubborn conditions like
              osteoarthritis and tendonitis are substantially reduced.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#F0F8FF] border border-[#E0F2FE]">
                <ShieldCheck className="w-5 h-5 text-[#0077B6] mb-2" />
                <h4 className="font-serif font-bold text-[#0A3977] mb-1">Evidence-Based Treatment</h4>
                <p className="text-neutral-600">
                  Every therapeutic modality and exercise sequence is selected based on clinical outcome data.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0F8FF] border border-[#E0F2FE]">
                <HeartPulse className="w-5 h-5 text-[#0077B6] mb-2" />
                <h4 className="font-serif font-bold text-[#0A3977] mb-1">Empowered Patient Education</h4>
                <p className="text-neutral-600">
                  We demystify your condition so you know exactly why you feel pain and how to prevent it.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="px-6 py-3 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-semibold text-xs transition-colors shadow-sm"
              >
                Schedule Consultation with Dr. Sakshi
              </Link>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="px-5 py-3 rounded-xl border border-[#E0F2FE] hover:bg-[#F0F8FF] text-[#0A3977] font-semibold text-xs transition-colors"
              >
                Call Clinic Reception
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Practice Areas Checklist */}
      <section className="bg-[#F0F8FF] rounded-3xl p-8 sm:p-12 border border-[#E0F2FE]">
        <SectionHeading
          eyebrow="Clinical Scope"
          title="Areas of Specialization at Zenlife Physio"
          subtitle="All treatments strictly follow evaluated clinical guidelines and ethical physiotherapy standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {verifiedPracticeAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-[#E0F2FE] flex items-start gap-3 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-[#0F172A]">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
