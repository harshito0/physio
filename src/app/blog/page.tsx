import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Physiotherapy & Wellness Blog | Zenlife Physio",
  description:
    "Evidence-based articles on posture, spine decompression, sports injury recovery protocols, and clinical nutrition by Dr. Sakshi Kocher.",
};

export default function BlogIndexPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumb items={[{ label: "Clinical Blog" }]} />

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full inline-block mb-3">
          Patient Education
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A3977] leading-tight">
          Physical Therapy &amp; Movement Science Insights
        </h1>
        <p className="mt-3 text-base text-[#0F172A]/80 leading-relaxed">
          Empowering you with research-backed knowledge to protect your joints, recover safely from sports
          injuries, and optimize daily physical vitality.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-3xl p-7 border border-[#E0F2FE] hover:border-[#0077B6] transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/5 flex flex-col justify-between"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A3977] bg-[#E0F2FE]/70 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3977] hover:text-[#0077B6] transition-colors leading-snug mb-3">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              {/* Subtitle / Excerpt */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {post.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[#F0F8FF] text-neutral-600 border border-[#E0F2FE]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-[#E0F2FE]/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0A3977]/10 text-[#0A3977] flex items-center justify-center font-bold text-[10px]">
                  SK
                </div>
                <div>
                  <span className="font-semibold text-neutral-800 block text-[11px]">
                    {post.author}
                  </span>
                  <span className="text-neutral-400 text-[10px]">{post.date}</span>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="font-bold text-[#0A3977] hover:text-[#0077B6] inline-flex items-center gap-1"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <CtaBanner />
    </div>
  );
}
