import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  HelpCircle,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/data/services";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { clinicInfo } from "@/data/clinic";

export function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Zenlife Physio`,
    description: service.summary,
    openGraph: {
      title: `${service.title} | Dr. Sakshi's Zenlife Physio`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb
        items={[
          { label: "Clinical Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Service Hero Header */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E0F2FE] shadow-md">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E0F2FE]/80 text-[#0A3977]">
              {service.category} Specialization
            </span>
            <span className="text-xs text-neutral-500 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
              {service.duration}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3977] leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            {service.heroIntro}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white text-xs font-bold transition-all shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#00AEEF]" />
              <span>Book Consultation for this Condition</span>
            </Link>
            <a
              href={`tel:${clinicInfo.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#E0F2FE] hover:bg-[#F0F8FF] text-[#0A3977] text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0077B6]" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      </section>

      {/* Symptoms Addressed & Clinical Assessment */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Symptoms / Indications */}
        <div className="bg-[#F0F8FF] rounded-3xl p-8 border border-[#E0F2FE]">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="w-5 h-5 text-[#0077B6]" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3977]">
              Common Symptoms &amp; Indications
            </h2>
          </div>
          <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
            If you are experiencing any of the following signs, this clinical protocol is designed to
            address the underlying dysfunction:
          </p>
          <ul className="space-y-3">
            {service.symptoms.map((symptom, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How Assessment Works */}
        <div className="bg-white rounded-3xl p-8 border border-[#E0F2FE] shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="w-5 h-5 text-[#00AEEF]" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3977]">
              How Assessment &amp; Diagnosis Works
            </h2>
          </div>
          <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
            Prior to applying any hands-on therapy, Dr. Sakshi conducts systematic physical tests to
            verify the root cause:
          </p>
          <ul className="space-y-3">
            {service.assessmentProcedure.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-[#0A3977]/10 text-[#0A3977] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Patients Can Expect & Key Benefits */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E0F2FE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              Session Walkthrough
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3977]">
              What to Expect During Your Treatment
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Sessions are structured to balance immediate symptomatic relief with long-term mechanical
              re-education:
            </p>
            <ul className="space-y-3 pt-2">
              {service.whatToExpect.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-[#0077B6] shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 space-y-4 bg-[#F0F8FF] p-6 sm:p-8 rounded-2xl border border-[#E0F2FE]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
              Clinical Outcomes
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0A3977]">
              Expected Rehabilitation Benefits
            </h3>
            <ul className="space-y-3 pt-2">
              {service.clinicalBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              Common Questions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3977] mt-1">
              Frequently Asked Questions: {service.shortTitle}
            </h2>
          </div>
          <FaqAccordion faqs={service.faqs} />
        </section>
      )}

      {/* Medical Responsibility Disclaimer */}
      <div className="p-6 rounded-3xl bg-[#F0F8FF] border border-[#E0F2FE] text-xs text-neutral-600 leading-relaxed">
        <strong>Medical Notice:</strong> Information on this page is educational and does not constitute
        individual diagnosis or a guarantee of clinical outcomes. Treatment plans are formulated strictly
        upon comprehensive physical examination by Dr. Sakshi Kocher.
      </div>

      <CtaBanner
        title={`Book Your ${service.shortTitle} Consultation`}
        subtitle="Experience one-on-one clinical care tailored to your anatomical needs."
      />
    </div>
  );
}
