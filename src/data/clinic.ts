export interface ClinicData {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  doctorName: string;
  doctorTitle: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  youtubeHandle: string;
  youtubeUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappUrl: string;
  addressNotice: string;
  hoursNotice: string;
  logoUrl: string;
}

export const clinicInfo: ClinicData = {
  name: "Dr. Sakshi's Zenlife Physio Clinic",
  shortName: "Zenlife Physio",
  tagline: "Specialized Rehabilitation Clinic",
  subTagline: "Expert Physiotherapy for a Pain-Free, Active Life.",
  logoUrl: "/logo.png",
  doctorName: "Dr. Sakshi Kocher",
  doctorTitle: "Consultant Physiotherapist & Rehabilitation Specialist",
  phone: "+917087391488",
  phoneDisplay: "+91 70873 91488",
  email: "info.zenlifephysio@gmail.com",
  youtubeHandle: "sakshikochhar1488",
  youtubeUrl: "https://www.youtube.com/@sakshikochhar1488",
  instagramHandle: "dr.sakshi_zenlifephysio",
  instagramUrl: "https://www.instagram.com/dr.sakshi_zenlifephysio",
  whatsappUrl: "https://wa.me/917087391488?text=Hello%20Dr.%20Sakshi%2C%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20consultation%20at%20Zenlife%20Physio.",
  addressNotice: "Official clinic address to be verified with reception prior to your first physical visit.",
  hoursNotice: "Consultations by prior appointment: Monday to Saturday (Morning & Evening sessions available).",
};

export const verifiedPracticeAreas = [
  "Orthopedic and Musculoskeletal Physiotherapy",
  "Back Pain and Neck Pain Relief",
  "Cervical and Lumbar Spondylosis Care",
  "Frozen Shoulder and Rotator Cuff Rehabilitation",
  "Knee Pain and Osteoarthritis Management",
  "Sciatica and Disc-Related Decompression",
  "Sports Injuries and Athletic Rehabilitation",
  "Muscle and Tendon Strain Recovery",
  "Post-Fracture Stiffness and Post-Surgical Rehab",
  "Neurological Rehabilitation (Stroke, Parkinson's)",
  "Balance and Coordination Therapy",
  "Women's Health, Antenatal and Postnatal Care",
  "Electrotherapy (IFT / TENS / Therapeutic Ultrasound)",
  "Advanced Shockwave and Laser Therapy",
  "Cupping Therapy and Myofascial Release",
  "Gait and Postural Correction Training",
  "Clinical Nutrition & Metabolic Wellness Guidance",
];

export const treatmentProcessSteps = [
  {
    step: "01",
    title: "Comprehensive Clinical Assessment",
    description:
      "We begin with a detailed biomechanical evaluation, posture screening, muscle testing, and joint mobility analysis to pinpoint the root cause of your pain rather than masking symptoms.",
  },
  {
    step: "02",
    title: "Personalized Care Plan",
    description:
      "Dr. Sakshi creates a custom protocol integrating targeted manual therapy, electro-modalities, therapeutic exercise prescription, and ergonomic adjustments tailored to your lifestyle.",
  },
  {
    step: "03",
    title: "Targeted Hands-On Rehabilitation",
    description:
      "Sessions blend pain-relieving physical modalities (IFT, ultrasound, laser, cupping) with progressive active strengthening and functional movement re-education.",
  },
  {
    step: "04",
    title: "Long-Term Prevention & Follow-Up",
    description:
      "We equip you with personalized home exercise programs, ergonomic workstation corrections, and clinical nutrition support to prevent recurrence and keep you moving at your peak.",
  },
];

export const whyChooseZenlife = [
  {
    title: "Evidence-Based Clinical Protocol",
    description:
      "Every treatment strategy is grounded in current orthopedic and neurological rehabilitation research, avoiding guesswork and generic routine exercises.",
  },
  {
    title: "One-on-One Dedicated Attention",
    description:
      "You receive focused, individual consultation and hands-on therapy time with Dr. Sakshi Kocher, ensuring your progress is tracked closely at every session.",
  },
  {
    title: "Holistic Physio & Nutrition Integration",
    description:
      "We combine physical rehabilitation with anti-inflammatory metabolic nutrition to speed up tissue repair, reduce chronic inflammation, and optimize recovery.",
  },
  {
    title: "Advanced Modalities & Manual Skills",
    description:
      "From laser and shockwave therapies to specialized myofascial release, dry cupping, and gait retraining, we deploy modern therapeutic tools responsibly.",
  },
];
