"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#DCE9E3] overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base sm:text-lg font-bold text-[#064E4B]">
                {faq.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                  isOpen ? "bg-[#064E4B] text-white rotate-180" : "bg-[#DCE9E3]/50 text-[#064E4B]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#DCE9E3]/40">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
