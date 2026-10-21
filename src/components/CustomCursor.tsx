"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "link" | "canvas" | "hidden">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive3D = target.closest("[data-cursor='3d']");
      const clickable = target.closest("a, button, [role='button']");

      if (interactive3D) {
        setCursorVariant("canvas");
        setCursorText(interactive3D.getAttribute("data-cursor-text") || "DRAG 3D");
      } else if (clickable) {
        setCursorVariant("link");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setCursorVariant("hidden");
    const handleMouseEnter = () => setCursorVariant("default");

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Smooth Follower Ring / Pill */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "canvas" ? 2.4 : cursorVariant === "link" ? 1.6 : cursorVariant === "hidden" ? 0 : 1,
          opacity: cursorVariant === "hidden" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`fixed top-0 left-0 rounded-full border flex items-center justify-center transition-colors duration-200 ${
          cursorVariant === "canvas"
            ? "w-20 h-20 bg-[#064E4B]/80 border-[#C6A56B] backdrop-blur-md shadow-lg"
            : cursorVariant === "link"
            ? "w-12 h-12 bg-[#0F766E]/20 border-[#C6A56B] backdrop-blur-xs"
            : "w-8 h-8 border-[#0F766E]/60 bg-transparent"
        }`}
      >
        {cursorText && (
          <span className="text-[8px] font-bold tracking-widest text-[#FAF8F5] uppercase text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "canvas" ? 0 : cursorVariant === "link" ? 0.6 : 1,
          opacity: cursorVariant === "hidden" ? 0 : 1,
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C6A56B] shadow-xs"
      />
    </div>
  );
}
