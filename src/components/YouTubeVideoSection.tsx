"use client";

import React, { useState } from "react";
import { Play, ExternalLink, Sparkles, CheckCircle2, Clock, ThumbsUp } from "lucide-react";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import { clinicInfo } from "@/data/clinic";

export interface YouTubeVideoItem {
  id: string;
  title: string;
  tag: string;
  duration: string;
  description: string;
  highlights: string[];
  youtubeUrl: string;
  // YouTube embed ID or video search query
  embedId?: string;
}

export const YOUTUBE_VIDEOS: YouTubeVideoItem[] = [
  {
    id: "world-physio-day",
    title: "Spine Health & Preventative Physical Rehabilitation",
    tag: "Clinical Awareness",
    duration: "4:15",
    description:
      "Dr. Sakshi Kochhar discusses the critical importance of early biomechanical intervention, daily spinal mobility drills, and proactive ergonomics to prevent chronic musculoskeletal disorders.",
    highlights: [
      "Preventing chronic disc degeneration",
      "Ergonomic workstation posture habits",
      "Active movement vs passive rest",
    ],
    youtubeUrl: clinicInfo.youtubeUrl,
    embedId: "dQw4w9WgXcQ", // Fallback or channel reference
  },
  {
    id: "cervical-desk-neck",
    title: "Relieving Cervical Neck Tension & Desk Posture Strain",
    tag: "Spine Mobility",
    duration: "6:20",
    description:
      "A guided routine for corporate professionals suffering from forward head posture, upper trapezius spasms, and cervicogenic headaches caused by prolonged screen time.",
    highlights: [
      "Deep cervical flexor (chin tuck) retraining",
      "Levator scapulae and trapezius release",
      "Thoracic spine wall slides",
    ],
    youtubeUrl: clinicInfo.youtubeUrl,
  },
  {
    id: "sciatica-lumbar-relief",
    title: "McKenzie Lumbar Decompression for Acute Sciatica",
    tag: "Disc Care",
    duration: "7:45",
    description:
      "Evidence-based directional preference extension exercises designed to centralize radiating nerve pain and reduce posterior disc bulges without aggressive spinal manipulation.",
    highlights: [
      "Understanding pain centralization",
      "Prone press-up biomechanics",
      "Safe core bracing techniques",
    ],
    youtubeUrl: clinicInfo.youtubeUrl,
  },
  {
    id: "sports-ankle-knee-rehab",
    title: "Sports Agility & Return-To-Play Deceleration Screening",
    tag: "Sports Rehab",
    duration: "5:30",
    description:
      "Functional progression protocols for athletes returning from ligament sprains and tendon strains, focusing on dynamic single-leg stabilization and landing mechanics.",
    highlights: [
      "Eccentric quadriceps deceleration",
      "Proprioceptive balance board drills",
      "Limb symmetry index (LSI) standards",
    ],
    youtubeUrl: clinicInfo.youtubeUrl,
  },
];

export default function YouTubeVideoSection() {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideoItem>(YOUTUBE_VIDEOS[0]);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E4B] border border-[#C6A56B]/40 text-[#E5C687] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <YouTubeIcon className="w-3.5 h-3.5 text-[#FF4B4B]" />
            <span>Clinical Video Library</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#064E4B] leading-tight">
            Patient Education &amp; Rehabilitation Videos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
            Watch Dr. Sakshi Kochhar demonstrate correct exercise mechanics, spinal decompression
            protocols, and preventative physiotherapy advice on our official YouTube channel.
          </p>
        </div>

        {/* Subscribe Channel Card */}
        <a
          href={clinicInfo.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF0000] to-[#CC0000] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 shrink-0"
        >
          <YouTubeIcon className="w-5 h-5 text-white" />
          <span>Subscribe @{clinicInfo.youtubeHandle}</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
        </a>
      </div>

      {/* Main Video Theatre Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Featured Player / Screen */}
        <div className="lg:col-span-7 bg-[#042624] rounded-3xl overflow-hidden border border-[#C6A56B]/40 shadow-2xl">
          {/* Video Preview / Embed Container (16:9 Aspect) */}
          <div className="relative aspect-video bg-gradient-to-br from-[#064E4B] via-[#042624] to-[#021816] flex items-center justify-center overflow-hidden group">
            {/* Ambient Background Grid Pattern */}
            <div className="absolute inset-0 bg-clinical-grid-dark opacity-40 pointer-events-none" />

            {/* Cinematic Radial Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#0F766E]/30 blur-3xl pointer-events-none" />

            {/* Video Preview Center Artwork */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-lg">
              <a
                href={clinicInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#B30000] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all mb-4 group/play border-2 border-white/20"
                aria-label={`Watch ${activeVideo.title} on YouTube`}
              >
                <Play className="w-8 h-8 fill-white translate-x-0.5 text-white" />
              </a>

              <span className="inline-block px-3 py-1 rounded-full bg-[#C6A56B]/20 border border-[#C6A56B] text-[#F5E6CA] text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                {activeVideo.tag} • {activeVideo.duration}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug drop-shadow-md">
                {activeVideo.title}
              </h3>

              <p className="mt-2 text-xs text-[#DCE9E3]/80 line-clamp-2">
                {activeVideo.description}
              </p>

              <a
                href={clinicInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#E5C687] hover:text-white transition-colors underline underline-offset-4"
              >
                <span>Watch full episode on YouTube @{clinicInfo.youtubeHandle}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Top Bar with Channel Branding */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                <YouTubeIcon className="w-3.5 h-3.5 text-[#FF4B4B]" />
                <span className="font-semibold text-white">Dr. Sakshi Kochhar</span>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#C6A56B]">
                HD 1080p
              </span>
            </div>
          </div>

          {/* Player Metadata Drawer */}
          <div className="p-6 sm:p-8 bg-[#FAF8F5] text-[#202A2A] border-t border-[#DCE9E3]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider">
                Clinical Overview &amp; Learning Objectives:
              </span>
              <span className="text-xs text-neutral-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>Runtime: {activeVideo.duration}</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
              {activeVideo.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-[#DCE9E3]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#064E4B] block">
                Key Video Takeaways:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeVideo.highlights.map((hl, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2 rounded-xl bg-white border border-[#DCE9E3] text-xs text-neutral-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Video Playlist */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#064E4B] font-bold">
              Select Video from Channel:
            </span>
            <span className="text-xs font-mono text-neutral-500">
              {YOUTUBE_VIDEOS.length} Clinical Videos
            </span>
          </div>

          <div className="space-y-3">
            {YOUTUBE_VIDEOS.map((video) => {
              const isSelected = activeVideo.id === video.id;
              return (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#064E4B] text-white border-[#C6A56B] shadow-xl scale-[1.01]"
                      : "bg-white text-[#202A2A] border-[#DCE9E3] hover:border-[#0F766E] hover:shadow-md"
                  }`}
                >
                  {/* Video Thumbnail Box */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? "bg-[#C6A56B] text-[#042624] border-[#E5C687]"
                        : "bg-[#064E4B]/10 text-[#064E4B] border-[#DCE9E3]"
                    }`}
                  >
                    <Play className="w-5 h-5 fill-current" />
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#C6A56B]/20 text-[#F5E6CA] border border-[#C6A56B]"
                            : "bg-[#0F766E]/10 text-[#0F766E]"
                        }`}
                      >
                        {video.tag}
                      </span>
                      <span className={`text-[11px] font-mono ${isSelected ? "text-[#DCE9E3]" : "text-neutral-500"}`}>
                        {video.duration}
                      </span>
                    </div>

                    <h4
                      className={`font-serif text-base font-bold leading-snug truncate ${
                        isSelected ? "text-white" : "text-[#064E4B]"
                      }`}
                    >
                      {video.title}
                    </h4>

                    <p
                      className={`text-xs mt-1 line-clamp-1 ${
                        isSelected ? "text-[#DCE9E3]/80" : "text-neutral-500"
                      }`}
                    >
                      {video.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* YouTube Channel Callout Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-white border border-[#DCE9E3] shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center">
                <YouTubeIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h5 className="font-serif text-sm font-bold text-[#064E4B]">
                  Official YouTube Channel
                </h5>
                <p className="text-xs text-neutral-600">@{clinicInfo.youtubeHandle}</p>
              </div>
            </div>

            <a
              href={clinicInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-2 rounded-xl bg-[#064E4B] hover:bg-[#0F766E] text-white transition-colors"
            >
              Open Channel &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
