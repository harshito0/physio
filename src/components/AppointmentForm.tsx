"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, CheckCircle2, AlertCircle, Send, MessageCircle, Phone, ArrowRight, Shield } from "lucide-react";
import { verifiedPracticeAreas, clinicInfo } from "@/data/clinic";

export default function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    email: "",
    service: defaultService || verifiedPracticeAreas[0],
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 1:00 PM)",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceCode: string;
    details: {
      patientName: string;
      service: string;
      date: string;
      time: string;
    };
  } | null>(null);
  const [todayStr, setTodayStr] = useState<string>("");

  useEffect(() => {
    setTodayStr(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side quick validation
    if (!formData.patientName.trim() || formData.patientName.trim().length < 2) {
      setErrorMessage("Please enter the patient's full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please provide a valid 10-digit mobile number so we can reach you.");
      return;
    }

    if (!formData.preferredDate) {
      setErrorMessage("Please select your preferred appointment date.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please check the consent box to authorize reception to contact you.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit appointment request.");
      }

      setSubmissionSuccess({
        referenceCode: data.referenceCode,
        details: data.details,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again or call the clinic.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success view
  if (submissionSuccess) {
    const waText = encodeURIComponent(
      `Hello Dr. Sakshi's Zenlife Physio team, I have submitted an appointment request (Ref: ${submissionSuccess.referenceCode}) for ${submissionSuccess.details.patientName}. Service: ${submissionSuccess.details.service} on ${submissionSuccess.details.date} (${submissionSuccess.details.time}). Please let me know available slots.`
    );
    const waUrl = `https://wa.me/917087391488?text=${waText}`;

    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E0F2FE] shadow-lg shadow-teal-950/5 text-center">
        <div className="w-16 h-16 rounded-full bg-[#0077B6]/10 text-[#0077B6] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
          Appointment Request Logged
        </span>
        <h3 className="text-2xl font-serif text-[#0A3977] font-bold mt-1 mb-2">
          Thank you, {submissionSuccess.details.patientName}
        </h3>
        <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
          Your request has been securely recorded. Our clinic reception will review Dr. Sakshi&apos;s schedule and
          call you to confirm your exact appointment timing.
        </p>

        {/* Reference details box */}
        <div className="bg-[#F8FAFC] rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 border border-[#E0F2FE] mb-6">
          <div className="flex justify-between items-center pb-2 border-b border-[#E0F2FE]">
            <span className="text-neutral-500 font-medium">Tracking Reference:</span>
            <span className="font-mono font-bold text-[#0A3977] text-sm">
              {submissionSuccess.referenceCode}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Service:</span>
            <span className="font-semibold text-neutral-800 text-right">
              {submissionSuccess.details.service}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Preferred Date:</span>
            <span className="font-semibold text-neutral-800">
              {submissionSuccess.details.date}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Time Window:</span>
            <span className="font-semibold text-neutral-800">
              {submissionSuccess.details.time}
            </span>
          </div>
        </div>

        {/* Immediate WhatsApp Confirmation Handoff */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0077B6] hover:bg-[#0A3977] text-white text-xs font-semibold transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
            <span>Confirm Faster on WhatsApp</span>
          </a>
          <button
            onClick={() => setSubmissionSuccess(null)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#E0F2FE] hover:bg-[#F8FAFC] text-[#0A3977] text-xs font-semibold transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E0F2FE] shadow-lg shadow-teal-950/5 relative"
    >
      {/* Honeypot field for anti-spam bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        aria-hidden="true"
      />

      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#00AEEF] flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-[#0077B6]" />
          Priority Clinical Booking
        </span>
        <h3 className="text-2xl font-serif text-[#0A3977] font-bold mt-1">
          Request Your Consultation
        </h3>
        <p className="text-xs text-neutral-600 mt-1">
          Fill in your details below. Consultations are scheduled one-on-one with Dr. Sakshi Kocher.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold block">Action needed:</span>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Patient Name */}
        <div>
          <label htmlFor="patientName" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
            Patient Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="patientName"
            type="text"
            required
            placeholder="e.g. Rajesh Sharma"
            value={formData.patientName}
            onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs text-[#0F172A] outline-none transition-all"
          />
        </div>

        {/* Contact Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs text-[#0F172A] outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
            Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs text-[#0F172A] outline-none transition-all"
          />
        </div>

        {/* Clinical Service */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
            Requested Specialty / Service <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs text-[#0F172A] outline-none transition-all bg-white"
          >
            {verifiedPracticeAreas.map((svc, i) => (
              <option key={i} value={svc}>
                {svc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            required
            min={todayStr}
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs text-[#0F172A] outline-none transition-all"
          />
        </div>

        {/* Preferred Time Window */}
        <div>
          <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
            Preferred Time Window
          </label>
          <select
            id="preferredTime"
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs text-[#0F172A] outline-none transition-all bg-white"
          >
            <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
            <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
            <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
            <option value="Flexible / Earliest Available">Flexible / Earliest Available</option>
          </select>
        </div>
      </div>

      {/* Message / Symptoms */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
          Brief Description of Pain or Injury <span className="text-neutral-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="e.g. Suffering from lower back pain radiating down my left leg for 3 weeks after gym workout..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-[#E0F2FE] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 text-xs text-[#0F172A] outline-none transition-all resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="mb-6 flex items-start gap-2.5">
        <input
          id="consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-0.5 h-4 w-4 rounded border-[#E0F2FE] text-[#0077B6] focus:ring-[#0077B6]"
        />
        <label htmlFor="consent" className="text-[11px] text-neutral-600 leading-snug">
          I consent to Dr. Sakshi&apos;s Zenlife Physio reception contacting me via phone, SMS, or WhatsApp regarding
          my appointment booking. My information will not be shared with external third parties.
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#0A3977] hover:bg-[#0077B6] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Checking Availability...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#00AEEF]" />
              <span>Confirm Appointment Request</span>
            </>
          )}
        </button>

        <a
          href={clinicInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto py-3 px-4 rounded-xl border border-[#E0F2FE] hover:border-[#00AEEF] text-[#0A3977] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 bg-[#F8FAFC]/60"
        >
          <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

      <div className="mt-4 pt-4 border-t border-[#E0F2FE]/60 flex items-center justify-between text-[11px] text-neutral-500">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#0077B6]" />
          Encrypted &amp; HIPAA-conscious privacy
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
          Prompt response within clinic hours
        </span>
      </div>
    </form>
  );
}
