import React from "react";
import Link from "next/link";
import { Calendar, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { clinicInfo } from "@/data/clinic";

export default function CtaBanner({
  title = "Ready to Begin Your Pain-Free Recovery?",
  subtitle = "Schedule a comprehensive biomechanical evaluation with Dr. Sakshi Kocher. One-on-one personalized clinical care.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A3977] via-[#0A5C58] to-[#0077B6] text-white p-8 sm:p-12 lg:p-16 border border-[#00AEEF]/30 shadow-2xl">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#00AEEF]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#00AEEF]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#061B36] border border-[#00AEEF] text-[11px] font-mono font-bold uppercase tracking-widest text-[#E0F2FE] mb-4 shadow-lg">
          <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
          <span>Consultant Physiotherapy &amp; Sports Rehab</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight mb-4 drop-shadow-md">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-[#E2ECE7] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#0096C7] hover:from-[#E2C792] hover:to-[#00AEEF] text-[#061B36] font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4 text-[#061B36]" />
            <span>Book Your Appointment</span>
          </Link>

          <a
            href={`tel:${clinicInfo.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-all border border-[#00AEEF]/50 backdrop-blur-md shadow-md"
          >
            <Phone className="w-4 h-4 text-[#00AEEF]" />
            <span>Call {clinicInfo.phoneDisplay}</span>
          </a>

          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00AEEF]/25 hover:bg-[#00AEEF]/40 text-[#F0F8FF] font-semibold text-sm transition-all border border-[#00AEEF]/40 backdrop-blur-md"
          >
            <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
