import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { clinicInfo } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Terms and Conditions & Medical Disclaimer | Zenlife Physio",
  description:
    "Terms of service, clinic policies, and medical disclaimer for Dr. Sakshi's Zenlife Physio and Rehabilitation Centre.",
};

export default function TermsPage() {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

      <header className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C6A56B] bg-[#C6A56B]/10 px-3 py-1 rounded-full inline-block">
          Clinical Terms &amp; Policies
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E4B]">
          Terms and Conditions
        </h1>
        <p className="text-xs text-neutral-500">Effective Date: October 2026</p>
      </header>

      <div className="space-y-8 text-neutral-700 text-xs sm:text-sm leading-relaxed bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE9E3] shadow-xs">
        <section className="space-y-3 p-5 rounded-2xl bg-[#FAF8F5] border border-[#DCE9E3]">
          <h2 className="font-serif text-lg font-bold text-[#064E4B] uppercase tracking-wider">
            Critical Medical Disclaimer
          </h2>
          <p className="text-neutral-700">
            The content, graphics, 3D anatomical models, and educational articles provided on this website
            are created solely for general health informational and awareness purposes. Nothing on this website
            should be interpreted as a medical diagnosis, definitive clinical advice, or a guarantee of specific
            recovery outcomes.
          </p>
          <p className="text-neutral-700">
            Physiotherapy exercises and rehabilitation modalities carry indications and contraindications that
            require individualized physical examination by a qualified healthcare professional. Never delay or
            disregard professional medical advice because of something you have read online.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#064E4B]">1. Appointment Scheduling &amp; Consultations</h2>
          <p>
            Submitting an appointment request through this website registers an enquiry with our reception desk.
            An appointment is confirmed only once our clinic reception contacts you and confirms schedule
            availability.
          </p>
          <p>
            If you need to reschedule or cancel a confirmed appointment, we kindly request at least 4 hours of
            advance notice so your reserved clinical slot may be offered to other awaiting patients.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#064E4B]">2. Clinical Assessment &amp; Informed Consent</h2>
          <p>
            Prior to administering physical therapy modalities (such as electrotherapy, therapeutic ultrasound,
            dry cupping, or spinal traction), Dr. Sakshi Kocher will review your medical history and discuss
            the anticipated benefits and any mild transitory responses (such as temporary muscle soreness or
            cupping marks). Patients are encouraged to ask questions and may withdraw consent at any stage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#064E4B]">3. Intellectual Property</h2>
          <p>
            All website design, branding, custom 3D anatomical components, text, and educational materials are
            the intellectual property of {clinicInfo.name} and CodeKap. Reproduction or scraping without prior
            written authorization is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#064E4B]">4. Clinic Contact</h2>
          <p>
            For inquiries regarding our terms, please contact:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Clinic: {clinicInfo.name}</li>
            <li>Phone: {clinicInfo.phoneDisplay}</li>
            <li>Email: {clinicInfo.email}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
