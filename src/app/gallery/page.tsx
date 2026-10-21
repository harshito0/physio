"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, Activity, Layers } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

interface GalleryItem {
  id: number;
  title: string;
  category: "Treatment Suites" | "Equipment & Modalities" | "Active Rehab" | "Consultation";
  description: string;
  specs: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Private Manual Therapy & Decompression Suite",
    category: "Treatment Suites",
    description:
      "Ergonomic multi-segment clinical plinths with motorized height adjustment for spinal traction and gentle joint mobilization.",
    specs: ["Motorized Hi-Low Clinical Plinths", "Hygienic Disposable Liners", "Quiet Acoustic Setting"],
  },
  {
    id: 2,
    title: "Advanced Electrotherapy & Ultrasound Station",
    category: "Equipment & Modalities",
    description:
      "Calibrated Interferential Therapy (IFT), TENS, and dual-frequency therapeutic ultrasound for deep tissue analgesia.",
    specs: ["Calibrated Multi-Waveform IFT", "1 & 3 MHz Ultrasound Heads", "Precise Dosage Regulation"],
  },
  {
    id: 3,
    title: "Active Functional Exercise & Posture Area",
    category: "Active Rehab",
    description:
      "Full-length posture alignment mirrors, wobble boards, and resistance loops for progressive neuromuscular motor retraining.",
    specs: ["Biomechanical Posture Grid", "Proprioceptive Balance Discs", "Graded Resistance Bands"],
  },
  {
    id: 4,
    title: "Targeted Myofascial Cupping & Soft-Tissue Station",
    category: "Equipment & Modalities",
    description:
      "Medical-grade silicone and polycarbonate vacuum cups for negative-pressure myofascial release and fascial unwinding.",
    specs: ["Surgical-Grade Silicone Cups", "Vacuum Pressure Gauge", "Autoclave Sterilization"],
  },
  {
    id: 5,
    title: "One-on-One Doctor Consultation Desk",
    category: "Consultation",
    description:
      "Private setting for in-depth medical history taking, MRI/X-ray review, and patient-centered rehabilitation goal setting.",
    specs: ["Full Radiography Viewbox", "Anatomical Spine Models", "Confidential Consultation"],
  },
  {
    id: 6,
    title: "Sports Agility & Return-To-Play Assessment Zone",
    category: "Active Rehab",
    description:
      "Dynamic testing surface for single-leg hop tests, agility ladder drills, and sport-specific deceleration mechanics.",
    specs: ["Non-Slip Shock Absorbing Floor", "Agility Timing Markers", "Limb Symmetry Measuring"],
  },
];

import InstagramGallerySection from "@/components/InstagramGallerySection";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { clinicInfo } from "@/data/clinic";

const CATEGORIES = [
  "All",
  "Instagram Reels & Clinical Feed",
  "Treatment Suites",
  "Equipment & Modalities",
  "Active Rehab",
  "Consultation",
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : activeCategory === "Instagram Reels & Clinical Feed"
      ? []
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const showInstagram =
    activeCategory === "All" || activeCategory === "Instagram Reels & Clinical Feed";
  const showFacilities =
    activeCategory !== "Instagram Reels & Clinical Feed";

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb items={[{ label: "Clinic Gallery" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block mb-3">
          Clinical Gallery &amp; Media
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
          Visual Tour &amp; Clinical Media Hub
        </h1>
        <p className="mt-3 text-base text-[#0F172A]/80 leading-relaxed">
          Explore Dr. Sakshi&apos;s modern rehabilitation facility, advanced electro-modalities, and
          follow her verified Instagram reels for daily exercise demonstrations and clinical education.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E0F2FE] pb-4">
        {CATEGORIES.map((cat) => {
          const isInstaTab = cat === "Instagram Reels & Clinical Feed";
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                isActive
                  ? "bg-[#0A3977] text-white shadow-sm"
                  : isInstaTab
                  ? "bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 text-[#0A3977] border border-[#FD1D1D]/30 hover:border-[#FD1D1D]"
                  : "bg-white text-neutral-600 border border-[#E0F2FE] hover:border-[#0077B6]"
              }`}
            >
              {isInstaTab && <InstagramIcon className={`w-3.5 h-3.5 ${isActive ? "text-[#38BDF8]" : "text-[#E1306C]"}`} />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Instagram Clinical Feed Section */}
      {showInstagram && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00AEEF]">
                Social Clinical Feed
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3977] mt-0.5">
                Instagram Reels &amp; Posture Guides (@{clinicInfo.instagramHandle})
              </h2>
            </div>
            <a
              href={clinicInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0077B6] hover:text-[#0A3977] inline-flex items-center gap-1.5"
            >
              <span>View full profile on Instagram</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <InstagramGallerySection />
        </section>
      )}

      {/* Physical Facility Suites Section */}
      {showFacilities && (
        <section className="space-y-6 pt-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0077B6]">
              Clinical Infrastructure
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3977] mt-0.5">
              Treatment Suites &amp; Specialized Equipment
            </h2>
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E0F2FE] hover:border-[#0077B6] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Visual Card Header */}
                  <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-[#0A3977]/10 via-[#0077B6]/15 to-[#E0F2FE]/50 flex flex-col items-center justify-center p-6 text-center border border-[#E0F2FE]/60 mb-5 relative overflow-hidden">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#0A3977] mb-2">
                      <Activity className="w-6 h-6 text-[#0077B6]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#0A3977]">
                      Zenlife Clinical Facility
                    </span>
                    <span className="text-xs font-serif font-bold text-[#0A3977]/90 mt-1">
                      {item.title}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#0A3977] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">{item.description}</p>

                  <div className="space-y-1.5 pt-2 border-t border-[#E0F2FE]/60">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0077B6] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E0F2FE]/60 flex items-center justify-between text-xs">
                  <span className="text-[#0077B6] font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Sanitized Daily
                  </span>
                  <Link
                    href="/book-appointment"
                    className="font-bold text-[#0A3977] hover:text-[#0077B6]"
                  >
                    Visit Clinic &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <CtaBanner />
    </div>
  );
}
