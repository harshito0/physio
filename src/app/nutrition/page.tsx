import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Apple, HeartPulse, Sparkles, CheckCircle2, ShieldCheck, Flame, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Clinical Nutrition & Metabolic Wellness | Zenlife Physio",
  description:
    "Discover how clinical nutrition accelerates physical therapy, reduces systemic inflammation, and promotes cartilage and muscle recovery at Dr. Sakshi's Zenlife Physio.",
};

const NUTRITION_AREAS = [
  {
    title: "Anti-Inflammatory Joint Support",
    desc: "Targeted foods and phytonutrients (curcumin, omega-3s, polyphenols) that down-regulate inflammatory cytokines in osteoarthritis and chronic tendinopathy.",
  },
  {
    title: "Tendon & Ligament Collagen Synthesis",
    desc: "Strategic nutrient timing combining vitamin C, glycine, and proline prior to loading exercises to trigger maximum collagen cross-linking.",
  },
  {
    title: "Post-Surgical Muscle Recovery",
    desc: "Optimized protein distribution (leucine thresholding) to prevent muscle wasting (sarcopenia) during post-operative limb immobilization.",
  },
  {
    title: "Weight Management for Joint Unloading",
    desc: "Sustainable, non-crash metabolic planning that sheds axial load off arthritic knees and compressed lumbar discs while preserving lean muscle mass.",
  },
];

export default function NutritionPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb items={[{ label: "Clinical Nutrition" }]} />

      {/* Hero Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E0F2FE] shadow-md">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block">
            Biochemical Synergy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
            Clinical Nutrition &amp; Metabolic Wellness
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Physical therapy repairs your movement mechanics; clinical nutrition provides the cellular
            building blocks. Dr. Sakshi integrates evidence-based dietary strategies to accelerate tissue
            healing from the inside out.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/book-appointment?service=Nutrition%20guidance"
              className="px-6 py-3.5 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-bold text-xs transition-colors shadow-md"
            >
              Book Nutrition Consultation
            </Link>
            <Link
              href="/blog/nutrition-for-joint-cartilage-recovery"
              className="px-5 py-3.5 rounded-xl border border-[#E0F2FE] hover:bg-[#F0F8FF] text-[#0A3977] font-semibold text-xs transition-colors"
            >
              Read Clinical Article &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Clinical Nutrition Focus Areas */}
      <section className="space-y-8">
        <SectionHeading
          centered
          eyebrow="Targeted Nutritional Programs"
          title="How Nutrition Accelerates Physical Recovery"
          subtitle="Grounded in nutritional biochemistry to support joint longevity and muscular strength."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NUTRITION_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E0F2FE] shadow-xs hover:border-[#0077B6] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#0A3977]/10 text-[#0A3977] flex items-center justify-center font-serif text-lg font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0A3977] mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Physio + Nutrition Synergy Comparison */}
      <section className="bg-[#F0F8FF] rounded-3xl p-8 sm:p-12 border border-[#E0F2FE]">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
            Why Both Matter
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0A3977] mt-1">
            The Physio &amp; Nutrition Healing Loop
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
          <div className="bg-white p-6 rounded-2xl border border-[#E0F2FE] space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#0A3977]">
              1. Physical Therapy (The Mechanical Signal)
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              When you perform prescribed rehabilitation exercises, mechanical tension alerts fibroblasts
              and chondrocytes to begin collagen production and synovial fluid circulation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E0F2FE] space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#0A3977]">
              2. Clinical Nutrition (The Biochemical Fuel)
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Without essential amino acids, anti-inflammatory micronutrients, and hydration, the body
              lacks the raw biochemical materials required to construct durable, pain-free tissue.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Combine Movement &amp; Nutrition for Faster Healing"
        subtitle="Schedule a comprehensive clinical evaluation with Dr. Sakshi Kocher today."
      />
    </div>
  );
}
