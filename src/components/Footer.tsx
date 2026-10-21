import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck, HeartPulse, Clock } from "lucide-react";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { clinicInfo, verifiedPracticeAreas } from "@/data/clinic";

export default function Footer() {
  return (
    <footer className="bg-[#064E4B] text-[#DCE9E3] pt-16 pb-10 border-t border-[#0F766E]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#0F766E]/40">
          {/* Column 1: Clinic Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F766E] to-[#C6A56B] flex items-center justify-center text-white shadow-md">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-[#FAF8F5]">Zenlife</span>
                <span className="text-xl font-light text-[#C6A56B]"> Physio</span>
              </div>
            </div>
            <p className="text-xs text-[#DCE9E3]/85 leading-relaxed">
              Dr. Sakshi&apos;s Zenlife Physio and Rehabilitation Centre delivers evidence-based orthopedic
              physiotherapy, athletic rehabilitation, and clinical nutrition support to restore painless,
              confident human movement.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-[#FAF8F5]">
                <ShieldCheck className="w-4 h-4 text-[#C6A56B]" />
                <span className="font-medium">Dr. Sakshi Kocher (Consultant Physiotherapist)</span>
              </div>
              <div className="flex items-start gap-2 text-[#DCE9E3]/70">
                <Clock className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                <span>Consultations strictly by scheduled appointment</span>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Services */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#FAF8F5] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
              Core Clinical Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/services/orthopedic-musculoskeletal"
                  className="hover:text-white transition-colors"
                >
                  Orthopedic &amp; Joint Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/services/back-neck-spine" className="hover:text-white transition-colors">
                  Cervical &amp; Lumbar Spine Decompression
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sports-injury-rehabilitation"
                  className="hover:text-white transition-colors"
                >
                  Sports Injuries &amp; Ligament Tear Rehab
                </Link>
              </li>
              <li>
                <Link
                  href="/services/post-surgical-fracture-rehab"
                  className="hover:text-white transition-colors"
                >
                  Post-Fracture Stiffness &amp; Arthroplasty
                </Link>
              </li>
              <li>
                <Link
                  href="/services/neurological-rehabilitation"
                  className="hover:text-white transition-colors"
                >
                  Neurological Recovery &amp; Balance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/womens-health-prenatal-postnatal"
                  className="hover:text-white transition-colors"
                >
                  Women&apos;s Health &amp; Postnatal Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electrotherapy-laser-ultrasound"
                  className="hover:text-white transition-colors"
                >
                  Laser, Ultrasound &amp; Electrotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cupping-myofascial-release"
                  className="hover:text-white transition-colors"
                >
                  Cupping Therapy &amp; Myofascial Release
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#FAF8F5] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
              Clinic Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Meet Dr. Sakshi &amp; Clinic Philosophy
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-white transition-colors">
                  Conditions &amp; Pain Pathways Treated
                </Link>
              </li>
              <li>
                <Link href="/sports-rehabilitation" className="hover:text-white transition-colors">
                  Sports Rehabilitation Wing
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="hover:text-white transition-colors">
                  Clinical Nutrition &amp; Metabolic Health
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Clinic &amp; Equipment Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Physiotherapy &amp; Wellness Articles
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-white transition-colors font-semibold text-[#C6A56B]">
                  Schedule an Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Clinic Location &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Channels */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#FAF8F5] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
              Contact &amp; Connect
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0F766E]/30 hover:bg-[#0F766E]/50 transition-colors border border-[#0F766E]/60 text-[#FAF8F5]"
              >
                <Phone className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span className="font-medium">{clinicInfo.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${clinicInfo.email}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0F766E]/30 hover:bg-[#0F766E]/50 transition-colors border border-[#0F766E]/60 text-[#FAF8F5] break-all"
              >
                <Mail className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>{clinicInfo.email}</span>
              </a>

              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-[#14B8A6]/20 hover:bg-[#14B8A6]/30 transition-colors border border-[#14B8A6]/40 text-[#FAF8F5]"
              >
                <MessageCircle className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>Direct WhatsApp Consultation</span>
              </a>

              <a
                href={clinicInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0F766E]/30 hover:bg-[#0F766E]/50 transition-colors border border-[#0F766E]/60 text-[#FAF8F5]"
              >
                <YouTubeIcon className="w-4 h-4 text-[#FF4B4B] shrink-0" />
                <span>YouTube @{clinicInfo.youtubeHandle}</span>
              </a>

              <a
                href={clinicInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0F766E]/30 hover:bg-[#0F766E]/50 transition-colors border border-[#0F766E]/60 text-[#FAF8F5]"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C] shrink-0" />
                <span>Instagram @{clinicInfo.instagramHandle}</span>
              </a>

              <div className="pt-2 text-[11px] text-[#DCE9E3]/70 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A56B] shrink-0 mt-0.5" />
                <span>{clinicInfo.addressNotice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Areas Pill Ticker */}
        <div className="py-6 border-b border-[#0F766E]/40">
          <p className="text-[11px] uppercase tracking-wider text-[#C6A56B] font-semibold mb-3">
            Clinical Practice Focus Areas
          </p>
          <div className="flex flex-wrap gap-2">
            {verifiedPracticeAreas.slice(0, 10).map((area, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-1 rounded-full bg-[#0F766E]/30 border border-[#0F766E]/50 text-[#DCE9E3]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Legal, Medical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#DCE9E3]/70">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            <strong>Medical Disclaimer:</strong> Information on this website is for health education purposes
            and does not substitute for individualized clinical assessment by a qualified physiotherapist.
            Treatment plans are formulated strictly upon hands-on diagnostic examination.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#0F766E]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DCE9E3]/70">
          <p>© 2026 {clinicInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Made with</span>
            <span className="text-red-500 inline-block">❤️</span>
            <a
              href="https://codekap.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A56B] hover:text-[#FAF8F5] underline underline-offset-4 decoration-[#C6A56B]/60 hover:decoration-white font-semibold transition-colors"
            >
              CodeKap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
