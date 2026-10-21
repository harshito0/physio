"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import Breadcrumb from "@/components/Breadcrumb";
import { clinicInfo } from "@/data/clinic";

export default function ContactPage() {
  const [inquiryData, setInquiryData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb items={[{ label: "Contact Clinic" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block mb-3">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
          Contact Dr. Sakshi&apos;s Zenlife Physio
        </h1>
        <p className="mt-3 text-base text-[#0F172A]/80 leading-relaxed">
          We welcome inquiries regarding patient consultations, treatment protocols, and clinic availability.
          Reach out directly by phone, WhatsApp, or through the contact form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Verified Channels & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-[#E0F2FE] shadow-md space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#0A3977]">
              Clinic Contact Channels
            </h2>

            {/* Telephone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0077B6]/10 text-[#0077B6] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-neutral-400 block">
                  Telephone Consultation Line
                </span>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="font-serif text-lg font-bold text-[#0A3977] hover:text-[#0077B6] transition-colors"
                >
                  {clinicInfo.phoneDisplay}
                </a>
                <p className="text-xs text-neutral-500 mt-0.5">Click to call directly from your device</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-neutral-400 block">
                  Verified WhatsApp Channel
                </span>
                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#0077B6] hover:underline"
                >
                  Chat with Reception on WhatsApp &rarr;
                </a>
                <p className="text-xs text-neutral-500 mt-0.5">Send reports or ask about schedule slots</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/15 text-[#00AEEF] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-neutral-400 block">
                  Email Reception
                </span>
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-sm font-semibold text-[#0A3977] hover:text-[#0077B6] transition-colors break-all"
                >
                  {clinicInfo.email}
                </a>
                <p className="text-xs text-neutral-500 mt-0.5">For formal clinical correspondence</p>
              </div>
            </div>

            {/* YouTube Channel */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <YouTubeIcon className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-neutral-400 block">
                  YouTube Educational Channel
                </span>
                <a
                  href={clinicInfo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0A3977] hover:text-[#0077B6] transition-colors"
                >
                  @{clinicInfo.youtubeHandle} &rarr;
                </a>
                <p className="text-xs text-neutral-500 mt-0.5">Exercise tutorials &amp; posture tips</p>
              </div>
            </div>
          </div>

          {/* Location & Appointment Notice Box */}
          <div className="bg-[#F0F8FF] rounded-3xl p-6 border border-[#E0F2FE] space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#00AEEF]" />
              <h3 className="font-serif text-base font-bold text-[#0A3977]">
                Clinic Address &amp; Navigation
              </h3>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              <strong>Notice:</strong> {clinicInfo.addressNotice}
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              <strong>Timings:</strong> {clinicInfo.hoursNotice}
            </p>
          </div>
        </div>

        {/* Right Column: General Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E0F2FE] shadow-md">
            <h2 className="font-serif text-2xl font-bold text-[#0A3977] mb-2">
              Send an Online Enquiry
            </h2>
            <p className="text-xs text-neutral-600 mb-6">
              Have a question about a treatment or need help choosing the right service? Send us a message.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-[#F0F8FF] rounded-2xl border border-[#E0F2FE]">
                <div className="w-12 h-12 rounded-full bg-[#0077B6]/10 text-[#0077B6] mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0A3977] mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-xs text-neutral-600 max-w-md mx-auto mb-4">
                  Thank you for contacting Zenlife Physio. Our reception team will review your message
                  and respond within clinic operating hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#0A3977] text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Roy"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Inquiring about knee pain rehabilitation"
                      value={inquiryData.subject}
                      onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can Dr. Sakshi's clinic assist you?"
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#00AEEF]" />
                  <span>Send Message to Reception</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
