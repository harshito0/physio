"use client";

import React, { useState } from "react";
import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { clinicInfo } from "@/data/clinic";

export interface InstagramPost {
  id: string;
  type: "Reel" | "Post" | "Clinical Tip";
  title: string;
  duration?: string;
  caption: string;
  likes: string;
  comments: string;
  tags: string[];
  gradient: string;
  accent: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "insta-cervical",
    type: "Reel",
    title: "Cervical Spondylosis: 3 Chin-Tuck Decompression Drills",
    duration: "0:48",
    caption:
      "Desk workers, stop ignoring that sharp pinch at the base of your skull! 3 targeted chin-tuck exercises to take 18kg of shearing stress off your C5-C7 vertebrae. Save this for your afternoon break!",
    likes: "1,480",
    comments: "62",
    tags: ["#CervicalSpondylosis", "#DeskPosture", "#DrSakshiPhysio", "#NeckPainRelief"],
    gradient: "from-[#064E4B] via-[#042624] to-[#0F766E]",
    accent: "#5EEAD4",
  },
  {
    id: "insta-sciatica",
    type: "Reel",
    title: "Lumbar Disc Herniation vs Sciatica: What You Must Avoid",
    duration: "1:12",
    caption:
      "Never do toe-touches or aggressive forward spinal flexion if your MRI shows an L4-L5 disc protrusion! Watch how McKenzie prone extensions centralize radiating nerve pain back toward the spine.",
    likes: "2,840",
    comments: "115",
    tags: ["#SciaticaRelief", "#McKenzieMethod", "#LumbarSpine", "#ZenlifePhysio"],
    gradient: "from-[#0F766E] via-[#064E4B] to-[#042624]",
    accent: "#C6A56B",
  },
  {
    id: "insta-cupping",
    type: "Clinical Tip",
    title: "Medical Myofascial Cupping Therapy in Action",
    duration: "0:35",
    caption:
      "How negative-pressure medical cupping stimulates subcutaneous blood perfusion, breaks stubborn fascial cross-links in the upper trapezius, and brings rapid chronic pain relief.",
    likes: "1,920",
    comments: "74",
    tags: ["#CuppingTherapy", "#MyofascialRelease", "#UpperBackPain", "#SportsRehab"],
    gradient: "from-[#042624] via-[#064E4B] to-[#021816]",
    accent: "#E5C687",
  },
  {
    id: "insta-shoulder",
    type: "Reel",
    title: "Rotator Cuff Tendinitis & Frozen Shoulder Protocol",
    duration: "0:55",
    caption:
      "Struggling to reach overhead or sleep on your shoulder? Here is the exact clinical progression from gentle Codman pendulum glides to eccentric external rotator cuff strengthening.",
    likes: "1,670",
    comments: "58",
    tags: ["#FrozenShoulder", "#RotatorCuffRehab", "#ShoulderPain", "#DrSakshi"],
    gradient: "from-[#064E4B] via-[#0F766E] to-[#042624]",
    accent: "#5EEAD4",
  },
  {
    id: "insta-nutrition",
    type: "Post",
    title: "4 Anti-Inflammatory Nutrients for Joint Cartilage",
    caption:
      "Rehabilitation works twice as fast when your body is supplied with proper biochemical building blocks: Type II Collagen peptides, Vitamin C, Zinc, and high-DHA Omega-3s. Swipe for dosages!",
    likes: "2,130",
    comments: "89",
    tags: ["#ClinicalNutrition", "#JointCartilage", "#AntiInflammatoryDiet", "#ZenlifeHealth"],
    gradient: "from-[#042624] via-[#064E4B] to-[#C6A56B]/40",
    accent: "#C6A56B",
  },
  {
    id: "insta-return-to-play",
    type: "Reel",
    title: "Sports Return-To-Play: Single-Leg Deceleration Screening",
    duration: "1:05",
    caption:
      "Clearing a competitive athlete after an ankle ligament tear or knee sprain requires meeting a 90%+ Limb Symmetry Index (LSI) on dynamic hop and deceleration tests.",
    likes: "3,260",
    comments: "142",
    tags: ["#SportsPhysio", "#ReturnToPlay", "#AgilityTesting", "#LigamentRehab"],
    gradient: "from-[#064E4B] via-[#042624] to-[#0F766E]",
    accent: "#5EEAD4",
  },
];

export default function InstagramGallerySection() {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-10">
      {/* Instagram Profile Showcase Header Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#064E4B] via-[#042624] to-[#021816] text-white border border-[#C6A56B]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          {/* Instagram Gradient Ring Avatar */}
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-lg shrink-0">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#042624] p-1 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0F766E] to-[#C6A56B] flex items-center justify-center text-white">
                <InstagramIcon className="w-9 h-9" />
              </div>
            </div>
            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#14B8A6] border-2 border-[#042624] flex items-center justify-center text-[10px] font-bold">
              ✓
            </span>
          </div>

          {/* Profile Metadata */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                @{clinicInfo.instagramHandle}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C6A56B]/20 border border-[#C6A56B] text-[#F5E6CA] text-[10px] font-mono font-bold uppercase">
                Official Clinical Feed
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#DCE9E3] max-w-xl">
              <strong>Dr. Sakshi Kocher</strong> • Consultant Physiotherapist &amp; Sports Rehab
              Specialist. Daily rehabilitation reels, posture fixes, and clinical nutrition tips.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-[#E5C687] pt-1">
              <span>• Daily Spine &amp; Joint Reels</span>
              <span>• Exercise Demos</span>
              <span>• Clinical Q&amp;A</span>
            </div>
          </div>
        </div>

        {/* Follow on Instagram CTA */}
        <a
          href={clinicInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 shrink-0"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>Follow @{clinicInfo.instagramHandle}</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>

      {/* Instagram Posts & Reels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSTAGRAM_POSTS.map((post) => {
          const isLiked = likedPosts[post.id];
          return (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#DCE9E3] hover:border-[#0F766E] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between border-b border-[#DCE9E3]/60 bg-[#FAF8F5]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-0.5">
                      <div className="w-full h-full rounded-full bg-[#064E4B] flex items-center justify-center text-white text-[10px] font-bold">
                        SK
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#064E4B] block leading-tight">
                        {clinicInfo.instagramHandle}
                      </span>
                      <span className="text-[10px] text-neutral-500">Dr. Sakshi Kocher • Physio</span>
                    </div>
                  </div>

                  <a
                    href={clinicInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-[#0F766E] transition-colors p-1"
                    title="View post on Instagram"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Media Preview Stage */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${post.gradient} p-6 flex flex-col items-center justify-center text-center overflow-hidden`}
                >
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-clinical-grid-dark opacity-30 pointer-events-none" />

                  {/* Play / Reel Badge */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    {post.type === "Reel" ? (
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    ) : (
                      <InstagramIcon className="w-6 h-6" />
                    )}
                  </div>

                  <span className="relative z-10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                    {post.type} {post.duration && `• ${post.duration}`}
                  </span>

                  <h4 className="relative z-10 font-serif text-lg sm:text-xl font-bold text-white leading-snug px-2 drop-shadow-md">
                    {post.title}
                  </h4>

                  {/* Click to Watch Overlay Indicator */}
                  <a
                    href={clinicInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-xs text-xs font-bold text-[#F5E6CA]"
                  >
                    Watch Reel on Instagram &rarr;
                  </a>
                </div>

                {/* Post Action Bar (Interactive Like, Comment, Share) */}
                <div className="p-4 pb-2 flex items-center justify-between border-b border-[#DCE9E3]/50">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-1.5 text-xs text-neutral-700 hover:text-red-500 transition-colors"
                      aria-label="Like post"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isLiked ? "fill-red-500 text-red-500" : "text-neutral-600"
                        }`}
                      />
                      <span className="font-semibold text-[11px]">
                        {isLiked ? "Liked" : post.likes}
                      </span>
                    </button>

                    <a
                      href={clinicInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-700 hover:text-[#0F766E] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-neutral-600" />
                      <span className="font-semibold text-[11px]">{post.comments}</span>
                    </a>

                    <a
                      href={clinicInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-[#0F766E] transition-colors"
                      title="Share post"
                    >
                      <Share2 className="w-4 h-4" />
                    </a>
                  </div>

                  <Bookmark className="w-4 h-4 text-neutral-400" />
                </div>

                {/* Post Caption & Hashtags */}
                <div className="p-4 space-y-2">
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="text-[#064E4B] mr-1.5">
                      {clinicInfo.instagramHandle}
                    </strong>
                    {post.caption}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-[#0F766E] hover:underline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-4 pt-0">
                <a
                  href={clinicInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#FAF8F5] hover:bg-[#064E4B] hover:text-white text-[#064E4B] font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 border border-[#DCE9E3] hover:border-[#064E4B]"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>View Post on Instagram &rarr;</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
