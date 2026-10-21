import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { clinicInfo } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy | Zenlife Physio",
  description:
    "Patient health information privacy policy and data protection practices at Dr. Sakshi's Zenlife Physio.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <header className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block">
          Patient Data Protection
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3977]">
          Privacy Policy
        </h1>
        <p className="text-xs text-neutral-500">Last updated: October 2026</p>
      </header>

      <div className="space-y-8 text-neutral-700 text-xs sm:text-sm leading-relaxed bg-white rounded-3xl p-8 sm:p-12 border border-[#E0F2FE] shadow-xs">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0A3977]">1. Commitment to Patient Confidentiality</h2>
          <p>
            At {clinicInfo.name} (&quot;Zenlife Physio&quot;, &quot;we&quot;, &quot;us&quot;), protecting the privacy and
            confidentiality of your personal and health information is of paramount importance. This Privacy
            Policy outlines how we collect, handle, utilize, and protect your information when you access our
            website, submit an appointment request, or visit our clinic.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0A3977]">2. Information We Collect</h2>
          <p>When you interact with our website or book an appointment, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Identification &amp; Contact Details:</strong> Full name, telephone number, and email address.</li>
            <li><strong>Appointment Preferences:</strong> Requested clinical specialty, preferred date, and preferred time window.</li>
            <li><strong>Clinical Inquiries:</strong> Voluntary descriptions of symptoms, pain locations, or medical history provided in the appointment form or inquiry messages.</li>
            <li><strong>Technical Analytics:</strong> Standard non-personally identifiable server logs (IP address, browser type) used strictly for abuse prevention and rate-limiting.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0A3977]">3. How Your Information is Used</h2>
          <p>We use your information exclusively for legitimate healthcare operations:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Scheduling and confirming consultations with Dr. Sakshi Kocher.</li>
            <li>Direct clinical communication via phone, SMS, or WhatsApp regarding your rehabilitation appointments.</li>
            <li>Internal clinical record-keeping and diagnostic review.</li>
            <li>Responding to your direct inquiries and providing visit directions.</li>
          </ul>
          <p>
            <strong>We never sell, rent, trade, or distribute your personal or medical data to commercial third parties, marketers, or data brokers.</strong>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0A3977]">4. Data Security &amp; Retention</h2>
          <p>
            Appointment submissions transmitted through our digital forms are encrypted using industry-standard SSL/TLS
            encryption. Clinical physical records and electronic records are maintained with strict access restrictions,
            accessible only by authorized clinical staff.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0A3977]">5. Your Rights &amp; Inquiries</h2>
          <p>
            You have the right to request access to your submitted information, request corrections, or request
            the removal of non-mandatory contact details from our records at any time.
          </p>
          <p>
            For privacy-related questions, please contact our clinical reception at{" "}
            <a href={`mailto:${clinicInfo.email}`} className="text-[#0077B6] font-medium underline">
              {clinicInfo.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${clinicInfo.phone}`} className="text-[#0077B6] font-medium underline">
              {clinicInfo.phoneDisplay}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
