"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu, X, ChevronRight, MessageCircle } from "lucide-react";
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
      <div className="bg-[#0A2540] text-[#E0F2FE] text-xs py-2 px-4 border-b border-[#0077B6]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] inline-block animate-pulse" />
            <span className="font-semibold text-white">
              Dr. Sakshi&apos;s Zenlife Physio Clinic
            </span>
            <span className="hidden md:inline text-[#E0F2FE]/60">|</span>
            <span className="hidden md:inline text-xs text-[#BAE6FD]">
              Specialized Sports Rehabilitation, Spine &amp; Clinical Nutrition
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>{clinicInfo.phoneDisplay}</span>
            </a>
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#22C55E] transition-colors text-[#E0F2FE]"
              title="Chat with clinic on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={clinicInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#FF4B4B] transition-colors text-[#E0F2FE]"
              title={`Watch Dr. Sakshi on YouTube @${clinicInfo.youtubeHandle}`}
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-[#E63946]" />
              <span className="hidden md:inline">YouTube</span>
            </a>
            <a
              href={clinicInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#E1306C] transition-colors text-[#E0F2FE]"
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
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#E0F2FE] py-2.5"
            : "bg-white py-3.5 border-b border-[#E0F2FE]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Official Logo & Wordmark in Left Corner */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full p-0.5 bg-white shadow-sm border border-[#BAE6FD] group-hover:scale-105 group-hover:shadow-md transition-all duration-300 overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Dr. Sakshi's Zenlife Physio Clinic Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#0A3977]">
                  Zenlife
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#00AEEF]">
                  Physio
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#0077B6] font-bold mt-1">
                Dr. Sakshi&apos;s Rehabilitation Clinic
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
                      ? "text-[#0A3977] font-bold"
                      : "text-[#334155] hover:text-[#0077B6]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00AEEF] to-[#0077B6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="p-2.5 rounded-xl border border-[#BAE6FD] hover:border-[#00AEEF] text-[#0A3977] hover:bg-[#F0F8FF] transition-all"
              title="Click to Call Clinic"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4 text-[#0077B6]" />
            </a>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0A3977] via-[#0077B6] to-[#00AEEF] hover:opacity-95 text-white text-sm font-semibold transition-all shadow-md shadow-sky-900/15 hover:shadow-lg hover:shadow-sky-500/20"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0A3977] hover:bg-[#F0F8FF] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E0F2FE] bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
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
                        ? "bg-[#0A3977] text-white font-bold"
                        : "text-[#0F172A] hover:bg-[#F0F8FF]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#00AEEF]" : "text-neutral-400"}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-[#E0F2FE] flex flex-col gap-3">
              <Link
                href="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0A3977] to-[#00AEEF] text-white font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book an Appointment</span>
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#BAE6FD] text-[#0A3977] font-semibold text-xs bg-[#F0F8FF]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0077B6]" />
                  <span>Call Clinic</span>
                </a>
                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#BAE6FD] text-[#0A3977] font-semibold text-xs bg-[#F0F8FF]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
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
