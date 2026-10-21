"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceDetail } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

const CATEGORIES = ["All", "Orthopedic", "Sports", "Rehabilitation", "Specialized"] as const;

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((svc) => svc.category === selectedCategory);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumb items={[{ label: "Clinical Services" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C6A56B] bg-[#C6A56B]/10 px-3 py-1 rounded-full inline-block mb-3">
          Specialized Offerings
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#064E4B] leading-tight">
          Evidence-Based Physiotherapy Services
        </h1>
        <p className="mt-3 text-base text-[#202A2A]/80 leading-relaxed">
          Explore our complete range of clinical rehabilitation protocols. Every service is administered
          one-on-one by Dr. Sakshi Kocher with personalized care plans.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#DCE9E3] pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-[#064E4B] text-white shadow-sm"
                : "bg-white text-neutral-600 border border-[#DCE9E3] hover:border-[#0F766E]"
            }`}
          >
            {cat} {cat === "All" ? `(${servicesData.length})` : ""}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {/* Clinical Disclaimer Banner */}
      <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#DCE9E3] text-xs text-neutral-600 leading-relaxed">
        <strong>Clinical Notice:</strong> Specific physical therapy techniques, modalities (such as laser,
        shockwave, or electrotherapy), and exercise intensities are selected only after comprehensive hands-on
        clinical assessment by Dr. Sakshi Kocher. Contraindications are strictly checked for every patient.
      </div>

      <CtaBanner />
    </div>
  );
}
