import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Activity, Check } from "lucide-react";
import { ServiceDetail } from "@/data/services";

export default function ServiceCard({ service }: { service: ServiceDetail }) {
  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE9E3] hover:border-[#0F766E] transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/5 flex flex-col justify-between">
      <div>
        {/* Category & Duration */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#DCE9E3]/70 text-[#064E4B] border border-[#DCE9E3]">
            {service.category}
          </span>
          <span className="text-xs text-neutral-500 flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
            {service.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#064E4B] group-hover:text-[#0F766E] transition-colors leading-snug mb-3">
          {service.title}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 line-clamp-3">
          {service.summary}
        </p>

        {/* Symptoms Handled */}
        <div className="space-y-1.5 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
            Common Signs Addressed:
          </span>
          {service.symptoms.slice(0, 3).map((sym, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
              <Check className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{sym}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link & CTA */}
      <div className="pt-4 border-t border-[#DCE9E3]/60 flex items-center justify-between mt-auto">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E4B] group-hover:text-[#0F766E] transition-colors"
        >
          <span>Explore Clinical Protocol</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
          className="text-xs px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#064E4B] hover:text-white text-[#064E4B] font-semibold transition-colors border border-[#DCE9E3]"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
