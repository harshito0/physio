"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu, X, ChevronRight, Activity, MessageCircle } from "lucide-react";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { clinicInfo } from "@/data/clinic";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Sports Rehab", href: "/sports-rehabilitation" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Clinical Announcement Bar */}
      <div className="bg-[#064E4B] text-[#DCE9E3] text-xs py-2 px-4 border-b border-[#0F766E]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6A56B] inline-block" />
            <span className="font-medium text-[#FAF8F5]">
              Dr. Sakshi&apos;s Zenlife Physio &amp; Rehabilitation Centre
            </span>
            <span className="hidden md:inline text-[#DCE9E3]/70">|</span>
            <span className="hidden md:inline text-xs text-[#DCE9E3]">
              Specialized Sports Rehabilitation &amp; Clinical Nutrition
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-[#FAF8F5]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span>{clinicInfo.phoneDisplay}</span>
            </a>
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors text-[#DCE9E3]"
              title="Chat with clinic on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={clinicInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-[#DCE9E3]"
              title={`Watch Dr. Sakshi on YouTube @${clinicInfo.youtubeHandle}`}
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-[#FF4B4B]" />
              <span className="hidden md:inline">YouTube</span>
            </a>
            <a
              href={clinicInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-[#DCE9E3]"
              title={`Follow Dr. Sakshi on Instagram @${clinicInfo.instagramHandle}`}
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
              <span className="hidden md:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#DCE9E3] py-3"
            : "bg-[#F8F6F0] py-4 border-b border-[#DCE9E3]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E4B] to-[#0F766E] flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 text-[#C6A56B]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#064E4B]">
                  Zenlife
                </span>
                <span className="text-xl sm:text-2xl font-light text-[#0F766E]">
                  Physio
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#202A2A]/70 font-semibold">
                Rehabilitation &amp; Nutrition
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[#064E4B] font-semibold"
                      : "text-[#202A2A]/80 hover:text-[#0F766E]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F766E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="p-2.5 rounded-xl border border-[#DCE9E3] hover:border-[#0F766E] text-[#064E4B] transition-colors"
              title="Click to Call Clinic"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#064E4B] hover:bg-[#0F766E] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#C6A56B]" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#064E4B] hover:bg-[#DCE9E3]/50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#DCE9E3] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#064E4B] text-white font-semibold"
                        : "text-[#202A2A] hover:bg-[#DCE9E3]/50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#C6A56B]" : "text-neutral-400"}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-[#DCE9E3] flex flex-col gap-3">
              <Link
                href="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#064E4B] text-white font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#C6A56B]" />
                <span>Book an Appointment</span>
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#DCE9E3] text-[#064E4B] font-medium text-xs bg-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Call Clinic</span>
                </a>
                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#DCE9E3] text-[#064E4B] font-medium text-xs bg-white"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
