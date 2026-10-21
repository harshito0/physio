"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  HeartPulse,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Award,
  Zap,
  MapPin,
  Mail,
  MessageCircle,
} from "lucide-react";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import CinematicLoader from "@/components/3d/CinematicLoader";
import CinematicHero3D from "@/components/3d/CinematicHero3D";
import InteractiveBodyExplorer from "@/components/3d/InteractiveBodyExplorer";
import SpatialServiceUniverse from "@/components/3d/SpatialServiceUniverse";
import KineticSportsMatrix from "@/components/3d/KineticSportsMatrix";
import DoctorCinematicSpotlight from "@/components/3d/DoctorCinematicSpotlight";
import KineticTreatmentJourney from "@/components/3d/KineticTreatmentJourney";
import FloatingBookingExperience from "@/components/3d/FloatingBookingExperience";
import FaqAccordion from "@/components/FaqAccordion";
import AppointmentForm from "@/components/AppointmentForm";
import YouTubeVideoSection from "@/components/YouTubeVideoSection";
import CtaBanner from "@/components/CtaBanner";
import { clinicInfo, verifiedPracticeAreas } from "@/data/clinic";

const HOME_FAQS = [
  {
    question: "Do I need a doctor's referral before booking a physiotherapy session?",
    answer:
      "No direct physician referral is mandatory to consult with Dr. Sakshi Kocher. However, if you have existing radiological imaging (X-rays, MRI scans) or surgical discharge summaries, please bring them to your initial evaluation.",
  },
  {
    question: "What should I wear for my biomechanical assessment?",
    answer:
      "Wear comfortable, loose-fitting sports clothing (such as shorts, track pants, or an athletic t-shirt) that permits easy examination of joint angles, spinal segments, and active movement ranges.",
  },
  {
    question: "How long does each clinical consultation last?",
    answer:
      "Initial comprehensive evaluations typically take 50 to 60 minutes, including complete biomechanical testing, postural screening, and immediate first-line symptom relief. Follow-up sessions are 40 to 50 minutes.",
  },
  {
    question: "How does Zenlife Physio differ from generic therapy centers?",
    answer:
      "Every patient receives dedicated, one-on-one consultation with Dr. Sakshi Kocher rather than being rotated among assistants. We integrate advanced physical agents with hands-on manual joint glides and clinical metabolic nutrition for root-cause healing.",
  },
  {
    question: "How can I confirm my appointment slot?",
    answer:
      "You can submit the online booking request on this website, call reception directly at +91 70873 91488, or send a message directly on our verified WhatsApp channel.",
  },
];

const PATIENT_STORIES = [
  {
    quote:
      "After suffering with severe sciatica and lower back pain for 6 months, Dr. Sakshi's spinal decompression and core exercises gave me relief within two weeks. I can finally sit at work and drive without agony.",
    patient: "Patient Recovery Case",
    condition: "Lumbar Disc Bulge & Sciatica",
    outcome: "Full functional return without surgical intervention",
  },
  {
    quote:
      "I had a Grade 2 ankle ligament sprain playing football. The sports rehabilitation protocol here, combining early mobilization with eccentric loading, got me back on the field with complete stability.",
    patient: "Athletic Rehabilitation Patient",
    condition: "Acute Ankle Inversion Sprain",
    outcome: "Return-to-play clearance in 5 weeks",
  },
  {
    quote:
      "Post-fracture stiffness in my elbow was preventing me from straightening my arm. The combination of gentle joint glides, therapeutic ultrasound, and home guidance restored my full range of motion.",
    patient: "Post-Fracture Patient",
    condition: "Post-Cast Elbow Stiffness",
    outcome: "Regained 100% active extension and flexion",
  },
];

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState("");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedServiceForBooking(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="flex flex-col overflow-hidden bg-[#F8FAFC]">
      {/* 1. CINEMATIC 3D LOADING SEQUENCE */}
      <CinematicLoader />

      {/* 2. FULL-SCREEN 3D OPENING HERO WITH REALISTIC FLOATING SPINE */}
      <CinematicHero3D onOpenBooking={() => handleOpenBooking()} />

      {/* 3. DEDICATED 360° INTERACTIVE 3D BODY & SPINE EXPLORER */}
      <InteractiveBodyExplorer onOpenBooking={() => handleOpenBooking()} />

      {/* 4. CREATIVE SERVICE UNIVERSE (SPATIAL 3D GLASS CARDS) */}
      <SpatialServiceUniverse onOpenBooking={() => handleOpenBooking()} />

      {/* 5. HIGH PERFORMANCE KINETIC SPORTS REHABILITATION WING */}
      <KineticSportsMatrix onOpenBooking={() => handleOpenBooking("Sports Injuries and Athletic Rehabilitation")} />

      {/* 6. CLINICAL LEADERSHIP & PHILOSOPHY SPOTLIGHT */}
      <DoctorCinematicSpotlight onOpenBooking={() => handleOpenBooking()} />

      {/* 7. FOUR-STEP KINETIC RESTORATION PATHWAY */}
      <KineticTreatmentJourney />

      {/* 8. NUTRITION & METABOLIC BIOCHEMISTRY INTEGRATION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#F0F8FF] rounded-3xl p-8 sm:p-14 border border-[#E0F2FE] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] bg-[#0A3977] px-3.5 py-1.5 rounded-full inline-block border border-[#00AEEF]/30 shadow-xs">
                Cellular Synthesis
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
                Clinical Nutrition: The Biochemical Engine of Tissue Repair
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Biomechanical rehabilitation works twice as fast when supported by targeted nutritional
                biochemistry. Dr. Sakshi pairs hands-on manual therapy with anti-inflammatory meal planning,
                connective tissue collagen synthesis, and post-surgical muscle preservation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6]" />
                  <span>Joint Cartilage &amp; Synovial Fluid Nourishment</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6]" />
                  <span>Post-Surgical Muscle Sarcopenia Prevention</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6]" />
                  <span>Down-Regulating Systemic Cytokines</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6]" />
                  <span>Athletic Fueling &amp; Electrolyte Homeostasis</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-4">
              <button
                onClick={() => handleOpenBooking("Nutrition guidance")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-bold text-xs tracking-wider transition-colors shadow-md text-center"
              >
                Schedule Nutrition Consult
              </button>
              <Link
                href="/nutrition"
                className="text-xs font-bold text-[#0A3977] hover:text-[#0077B6] inline-flex items-center gap-1.5"
              >
                <span>Read Full Nutritional Science Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. YOUTUBE CLINICAL REHABILITATION VIDEO HUB */}
      <YouTubeVideoSection />

      {/* 9. VERIFIED CLINICAL PATIENT OUTCOMES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] bg-[#0A3977] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#00AEEF]/30 shadow-xs">
            Measured Outcomes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
            Patient Recovery Journeys
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Real examples of functional restoration and pain-free living achieved through structured
            clinical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATIENT_STORIES.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E0F2FE] shadow-sm hover:border-[#0077B6] transition-all flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed mb-6">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-[#E0F2FE]/70 space-y-1 text-xs">
                <span className="font-serif font-bold text-[#0A3977] block text-sm">
                  {story.patient}
                </span>
                <span className="text-[#0077B6] font-medium block">{story.condition}</span>
                <span className="text-neutral-500 text-[11px] font-mono block">{story.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] bg-[#0A3977] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#00AEEF]/30 shadow-xs">
            Patient Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Clear clinical answers about appointments, examination format, and rehabilitation sessions.
          </p>
        </div>

        <FaqAccordion faqs={HOME_FAQS} />
      </section>

      {/* 11. EMBEDDED APPOINTMENT SYSTEM */}
      <section id="appointment-booking" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Suspense fallback={<div className="p-12 text-center text-xs text-neutral-500">Loading booking interface...</div>}>
          <AppointmentForm />
        </Suspense>
      </section>

      {/* 12. CLINIC LOCATION, VERIFIED CHANNELS & DIRECTIONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#F0F8FF] rounded-3xl p-8 sm:p-12 border border-[#E0F2FE]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] bg-[#0A3977] px-3 py-1 rounded-full inline-block mb-2 text-white">
              Connect Directly
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0A3977]">
              Clinic Location &amp; Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-xs">
              <Phone className="w-5 h-5 text-[#0077B6] mb-2" />
              <h4 className="font-serif text-base font-bold text-[#0A3977] mb-1">Direct Telephone</h4>
              <p className="text-xs text-neutral-600 mb-3">Consultation booking &amp; inquiries</p>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="text-xs font-bold text-[#0A3977] hover:text-[#0077B6] transition-colors"
              >
                {clinicInfo.phoneDisplay}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-xs">
              <MessageCircle className="w-5 h-5 text-[#00AEEF] mb-2" />
              <h4 className="font-serif text-base font-bold text-[#0A3977] mb-1">WhatsApp Direct</h4>
              <p className="text-xs text-neutral-600 mb-3">Instant chat, location &amp; slots</p>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0077B6] hover:underline"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-xs">
              <Mail className="w-5 h-5 text-[#00AEEF] mb-2" />
              <h4 className="font-serif text-base font-bold text-[#0A3977] mb-1">Email Reception</h4>
              <p className="text-xs text-neutral-600 mb-3">Formal clinical correspondence</p>
              <a
                href={`mailto:${clinicInfo.email}`}
                className="text-xs font-bold text-[#0A3977] hover:text-[#0077B6] transition-colors break-all"
              >
                {clinicInfo.email}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-[#0A3977]">Clinic Operating Notice</h5>
                <p className="text-xs text-neutral-600">{clinicInfo.addressNotice}</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-xs px-5 py-2.5 rounded-xl bg-[#0A3977] text-white font-semibold shrink-0 hover:bg-[#0077B6] transition-colors"
            >
              Directions Page
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FLOATING BOOKING MODAL (EMERGES SEAMLESSLY ANYWHERE) */}
      <FloatingBookingExperience
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedServiceForBooking}
      />

      {/* Floating Action Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenBooking()}
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0A3977] hover:bg-[#0077B6] text-white font-mono text-xs font-bold tracking-wider shadow-2xl border border-[#00AEEF]/50 transition-all hover:scale-105 active:scale-95"
          aria-label="Book appointment"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
          <span>BOOK APPOINTMENT</span>
        </button>
      </div>
    </div>
  );
}
