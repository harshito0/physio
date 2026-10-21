import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Stethoscope, AlertCircle } from "lucide-react";
import { conditionsData } from "@/data/conditions";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Conditions Treated | Spine, Joints & Sports Rehabilitation",
  description:
    "Explore common conditions treated at Dr. Sakshi's Zenlife Physio: cervical and lumbar spondylosis, sciatica, frozen shoulder, osteoarthritis, ligament sprains, and post-fracture stiffness.",
};

export default function ConditionsPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb items={[{ label: "Conditions Treated" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block mb-3">
          Clinical Pain Pathways
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
          Conditions We Treat at Zenlife Physio
        </h1>
        <p className="mt-3 text-base text-[#0F172A]/80 leading-relaxed">
          From acute sports tears to persistent cervical disc pain, our evidence-based rehabilitation
          protocols target the biomechanical root causes to restore painless function.
        </p>
      </div>

      {/* Conditions Grid */}
      <div className="space-y-12">
        {conditionsData.map((condition) => (
          <div
            key={condition.slug}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E0F2FE] shadow-sm hover:border-[#0077B6] transition-colors"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
                {condition.category}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3977] mb-3">
              {condition.name}
            </h2>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-4xl">
              {condition.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E0F2FE]/60 text-xs">
              {/* Symptoms */}
              <div className="bg-[#F0F8FF] p-5 rounded-2xl border border-[#E0F2FE]">
                <span className="font-bold uppercase tracking-wider text-[#0A3977] block mb-2">
                  Recognized Symptoms
                </span>
                <ul className="space-y-2">
                  {condition.commonSymptoms.map((sym, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6] shrink-0 mt-1.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Underlying Causes */}
              <div className="bg-[#F0F8FF] p-5 rounded-2xl border border-[#E0F2FE]">
                <span className="font-bold uppercase tracking-wider text-[#0A3977] block mb-2">
                  Underlying Biomechanical Causes
                </span>
                <ul className="space-y-2">
                  {condition.underlyingCauses.map((cause, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shrink-0 mt-1.5" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How Physio Helps */}
              <div className="bg-[#0A3977]/5 p-5 rounded-2xl border border-[#0077B6]/20">
                <span className="font-bold uppercase tracking-wider text-[#0077B6] block mb-2">
                  Physiotherapeutic Solution
                </span>
                <ul className="space-y-2">
                  {condition.howPhysioHelps.map((sol, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0077B6] shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Linked Recommended Services */}
            <div className="mt-6 pt-4 border-t border-[#E0F2FE]/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-neutral-500 font-medium">Recommended Services:</span>
                {condition.recommendedServices.map((svc, i) => (
                  <Link
                    key={i}
                    href={`/services/${svc.slug}`}
                    className="text-xs px-3 py-1 rounded-full bg-[#F0F8FF] border border-[#E0F2FE] text-[#0A3977] hover:border-[#0077B6] font-medium transition-colors"
                  >
                    {svc.title} &rarr;
                  </Link>
                ))}
              </div>

              <Link
                href={`/book-appointment?service=${encodeURIComponent(condition.name)}`}
                className="text-xs px-4 py-2 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-semibold transition-colors shadow-xs"
              >
                Schedule Evaluation for this Condition
              </Link>
            </div>
          </div>
        ))}
      </div>

      <CtaBanner />
    </div>
  );
}
