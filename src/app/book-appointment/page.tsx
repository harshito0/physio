import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Calendar, Phone, MessageCircle, Clock, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import Breadcrumb from "@/components/Breadcrumb";
import { clinicInfo } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Sakshi's Zenlife Physio",
  description:
    "Schedule your one-on-one physiotherapy, sports injury rehabilitation, or clinical nutrition consultation with Dr. Sakshi Kocher.",
};

export default function BookAppointmentPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumb items={[{ label: "Book Consultation" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block mb-3">
          Clinical Scheduling
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
          Schedule Your Consultation with Dr. Sakshi
        </h1>
        <p className="mt-3 text-base text-[#0F172A]/80 leading-relaxed">
          Take the first step toward a pain-free, active life. Consultations are strictly one-on-one,
          ensuring undivided clinical attention for your biomechanical evaluation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Booking Form */}
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="p-12 text-center text-xs text-neutral-500">Loading booking interface...</div>}>
            <AppointmentForm />
          </Suspense>
        </div>

        {/* Right Column: Clinical Preparation & Advice */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#F0F8FF] rounded-3xl p-8 border border-[#E0F2FE] space-y-5">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3977] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0077B6]" />
              Preparing for Your Visit
            </h2>

            <ul className="space-y-3 text-xs text-neutral-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                <span>
                  <strong>Clothing:</strong> Wear comfortable, loose sports attire (track pants, t-shirt, shorts) that allows easy access to the affected joint or spine.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                <span>
                  <strong>Medical Records:</strong> Bring any previous X-ray, MRI, CT scans, or surgeon discharge summaries relevant to your condition.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                <span>
                  <strong>Evaluation Time:</strong> Allow 50 to 60 minutes for your initial consultation, postural screening, and first treatment.
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#E0F2FE] flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase text-neutral-400">
                Prefer Instant Booking by Phone?
              </span>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex items-center gap-2 text-xs font-bold text-[#0A3977] hover:text-[#0077B6]"
              >
                <Phone className="w-4 h-4 text-[#00AEEF]" />
                <span>Call {clinicInfo.phoneDisplay}</span>
              </a>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#0077B6] hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
                <span>Book directly over WhatsApp &rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E0F2FE] shadow-xs flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#0077B6] shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-[#0A3977] block">Ethical Clinical Commitment</span>
              <span className="text-neutral-500">
                No unnecessary packages or passive machine dependence. We focus on active functional recovery.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
