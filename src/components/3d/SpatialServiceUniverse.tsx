"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/data/services";

export default function SpatialServiceUniverse({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceDetail | null>(null);

  const categories = ["All", "Orthopedic", "Sports", "Rehabilitation", "Specialized"];

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A56B] bg-[#064E4B] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#C6A56B]/30 shadow-xs">
            Spatial Clinical Universe
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#064E4B] leading-tight">
            Comprehensive Clinical Offerings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Hover over any spatial card to inspect depth dimensions and clinical indications. Click to
            launch the full procedural dossier.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#064E4B] text-white shadow-md scale-105"
                  : "bg-white text-neutral-600 border border-[#DCE9E3] hover:border-[#0F766E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Spatial 3D Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
        {filteredServices.map((service, idx) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{
              y: -8,
              rotateX: 2,
              rotateY: -2,
              scale: 1.02,
              transition: { duration: 0.25 },
            }}
            className="group relative rounded-3xl p-7 bg-gradient-to-b from-white to-[#FAF8F5] border border-[#DCE9E3] hover:border-[#C6A56B] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            onClick={() => setActiveServiceModal(service)}
          >
            {/* Top spatial glow accent */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#14B8A6]/20 to-transparent blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

            <div>
              {/* Category & Duration Bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#064E4B]/10 text-[#064E4B] border border-[#064E4B]/20">
                  {service.category}
                </span>
                <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
                  {service.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-[#064E4B] group-hover:text-[#0F766E] transition-colors leading-snug mb-3">
                {service.title}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                {service.summary}
              </p>

              {/* Symptoms Preview */}
              <div className="space-y-1.5 mb-6">
                <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block">
                  Addressed Pathologies:
                </span>
                {service.symptoms.slice(0, 3).map((sym, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 border-t border-[#DCE9E3]/70 flex items-center justify-between">
              <span className="text-xs font-bold text-[#064E4B] group-hover:text-[#0F766E] inline-flex items-center gap-1.5 transition-colors">
                <span>Inspect Dossier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenBooking();
                }}
                className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#064E4B] text-[#064E4B] hover:text-white border border-[#DCE9E3] transition-colors"
              >
                Book
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Immersive Modal Detail View */}
      <AnimatePresence>
        {activeServiceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setActiveServiceModal(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 max-w-3xl w-full border border-[#DCE9E3] shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DCE9E3]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#064E4B] text-[#C6A56B] font-mono text-xs font-bold uppercase">
                    {activeServiceModal.category}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {activeServiceModal.duration}
                  </span>
                </div>
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-[#064E4B] mb-3">
                  {activeServiceModal.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {activeServiceModal.heroIntro}
                </p>
              </div>

              {/* Assessment & Procedure Walkthrough */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DCE9E3] space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#064E4B] block">
                    Diagnostic Assessment
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {activeServiceModal.assessmentProcedure.map((proc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0 mt-1.5" />
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#064E4B]/5 border border-[#0F766E]/20 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#0F766E] block">
                    Clinical Outcomes
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-800">
                    {activeServiceModal.clinicalBenefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-2 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="pt-4 border-t border-[#DCE9E3] flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={`/services/${activeServiceModal.slug}`}
                  className="text-xs font-bold text-[#064E4B] hover:text-[#0F766E] inline-flex items-center gap-1.5"
                >
                  <span>View Complete Service Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setActiveServiceModal(null);
                      onOpenBooking();
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#064E4B] hover:bg-[#0F766E] text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#C6A56B]" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
