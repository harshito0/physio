"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { clinicInfo } from "@/data/clinic";

export default function FloatingBookingExperience({
  isOpen,
  onClose,
  defaultService = "",
}: {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10002] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#C6A56B]/40 shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#DCE9E3] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#064E4B]">
                  PRIORITY CLINICAL SCHEDULING
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 transition-colors"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Appointment Form */}
            <AppointmentForm defaultService={defaultService} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
