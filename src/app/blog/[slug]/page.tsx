import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, User, CheckCircle2, ArrowRight, Share2, ShieldCheck, Stethoscope } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Zenlife Physio Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#064E4B] bg-[#DCE9E3]/70 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-neutral-500 flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#064E4B] leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed italic">
          {post.subtitle}
        </p>

        {/* Author Byline */}
        <div className="pt-4 border-t border-[#DCE9E3] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#064E4B]/10 text-[#064E4B] flex items-center justify-center font-bold text-sm">
              <Stethoscope className="w-5 h-5 text-[#0F766E]" />
            </div>
            <div>
              <span className="font-bold text-[#064E4B] block text-sm">
                {post.author}
              </span>
              <span className="text-neutral-500">{post.authorRole} • Published on {post.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {post.tags.map((t, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-neutral-600 border border-[#DCE9E3]"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Key Takeaways Box */}
      <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#DCE9E3]">
        <h3 className="font-serif text-lg font-bold text-[#064E4B] mb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0F766E]" />
          Key Clinical Takeaways
        </h3>
        <ul className="space-y-2.5">
          {post.keyTakeaways.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Article Body Content */}
      <div className="space-y-10 text-neutral-800 text-sm sm:text-base leading-relaxed">
        {post.content.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#064E4B] pt-4">
              {section.sectionHeading}
            </h2>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-neutral-700 leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DCE9E3] text-xs text-neutral-500 leading-relaxed">
        <strong>Medical Notice:</strong> This article is published for educational and awareness purposes.
        If you are experiencing acute pain or severe neurological symptoms, consult a qualified physiotherapist
        or medical doctor for an in-person clinical examination before initiating exercise.
      </div>

      <CtaBanner
        title="Suffering from Similar Symptoms?"
        subtitle="Book an in-person physical assessment with Dr. Sakshi Kocher at Zenlife Physio."
      />
    </article>
  );
}
