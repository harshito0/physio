"use client";

import React, { useState } from "react";
import { treatmentProcessSteps } from "@/data/clinic";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function KineticTreatmentJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A56B] bg-[#064E4B] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#C6A56B]/30 shadow-xs">
          Recovery Architecture
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#064E4B] leading-tight">
          The Four-Step Kinetic Restoration Pathway
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
          From initial joint provocation tests through active athletic autonomy, our clinical process
          is transparent, systematic, and outcome-measured.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {treatmentProcessSteps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`rounded-3xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-[#064E4B] text-[#FAF8F5] border-[#C6A56B] shadow-2xl scale-[1.02]"
                  : "bg-white text-neutral-800 border-[#DCE9E3] hover:border-[#0F766E] shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <span
                  className={`font-serif text-4xl sm:text-5xl font-bold block mb-4 transition-colors ${
                    isSelected ? "text-[#C6A56B]" : "text-[#0F766E]/40"
                  }`}
                >
                  {step.step}
                </span>

                <h3
                  className={`font-serif text-xl font-bold mb-3 leading-snug ${
                    isSelected ? "text-[#FAF8F5]" : "text-[#064E4B]"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isSelected ? "text-[#DCE9E3]/85" : "text-neutral-600"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-current/15 flex items-center justify-between text-xs font-mono">
                <span className={isSelected ? "text-[#C6A56B]" : "text-neutral-400"}>
                  PHASE 0{idx + 1}
                </span>
                <span className={isSelected ? "text-[#14B8A6]" : "text-[#0F766E]"}>
                  ● ACTIVE CARE
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
