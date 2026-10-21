import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {eyebrow && (
        <span
          className={`inline-block text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-3 px-3.5 py-1.5 rounded-full ${
            dark
              ? "bg-[#042624] text-[#F5E6CA] border border-[#C6A56B] shadow-sm"
              : "bg-[#064E4B] text-[#F5E6CA] border border-[#C6A56B]/50 shadow-xs"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] ${
          dark ? "text-white drop-shadow-sm" : "text-[#064E4B]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            dark ? "text-[#DCE9E3]/80" : "text-[#202A2A]/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
