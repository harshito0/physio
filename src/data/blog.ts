export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  category: "Spine Health" | "Sports Rehab" | "Clinical Nutrition" | "Recovery Science";
  excerpt: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "desk-posture-spine-health-guide",
    title: "The Ergonomics of Sitting: Preventing Cervical Spondylosis & Lumbar Strain",
    subtitle: "A clinical guide to structuring your workstation for pain-free posture and spinal longevity.",
    date: "October 14, 2026",
    readTime: "5 min read",
    author: "Dr. Sakshi Kocher",
    authorRole: "Consultant Physiotherapist",
    category: "Spine Health",
    excerpt:
      "Modern desk jobs force the human spine into prolonged static flexion, multiplying disc pressure by up to 200%. Learn practical, biomechanically sound adjustments to safeguard your cervical and lumbar spine.",
    content: [
      {
        sectionHeading: "The Biomechanics of Forward Head Posture ('Text Neck')",
        paragraphs: [
          "In a neutral upright posture, the adult human head weighs approximately 5 kg (11 lbs). However, for every 15 degrees of forward head tilt, the gravitational load placed upon the cervical spine doubles. At a typical 45-degree desk tilt, the cervical vertebrae and surrounding paraspinal musculature are enduring over 22 kg of continuous mechanical strain.",
          "Over months and years, this sustained strain dehydrates the intervertebral discs, causes micro-tears in the posterior ligamentous complex, and initiates early cervical spondylosis and bone spur formation.",
        ],
      },
      {
        sectionHeading: "Essential Workstation Ergonomic Rules",
        paragraphs: [
          "Eye Level Screen Height: The top third of your computer display should align precisely with your horizontal eye gaze. If using a laptop, an external stand and separate keyboard/mouse are essential.",
          "The 90-90-90 Rule: Maintain a 90-degree angle at your elbows, hips, and knees. Your feet must rest flat on the floor; if your chair is elevated, support your feet with an ergonomic footrest.",
          "Dynamic Lumbar Support: Ensure the curve of your chair supports your lower back's natural inward lordosis, preventing the pelvis from tucking into posterior tilt.",
        ],
      },
      {
        sectionHeading: "Micro-Breaks: The 30-Minute Movement Rule",
        paragraphs: [
          "No ergonomic chair, however expensive, can substitute for regular movement. Every 30 minutes, perform 60 seconds of gentle spinal decompression: chin tucks, seated thoracic extension over the chair back, and a standing hip flexor stretch.",
        ],
      },
    ],
    keyTakeaways: [
      "Keep the top of your screen at eye level to eliminate cervical torque.",
      "Support lumbar lordosis to prevent disc protrusion.",
      "Take a 60-second movement break every 30 minutes to nourish avascular spinal discs.",
    ],
    tags: ["Ergonomics", "Spine Health", "Neck Pain", "Spondylosis", "Postural Training"],
  },
  {
    slug: "sports-injury-recovery-peace-and-love",
    title: "Beyond R.I.C.E.: The Modern 'P.E.A.C.E. & L.O.V.E.' Protocol for Sports Injuries",
    subtitle: "Why excessive ice and anti-inflammatory pills can delay natural soft-tissue repair.",
    date: "September 28, 2026",
    readTime: "6 min read",
    author: "Dr. Sakshi Kocher",
    authorRole: "Consultant Physiotherapist",
    category: "Sports Rehab",
    excerpt:
      "For decades, RICE (Rest, Ice, Compression, Elevation) was the standard for sprains. Modern sports medicine has evolved: discover why early active loading and controlled inflammation yield superior healing.",
    content: [
      {
        sectionHeading: "The Flaws of Prolonged Ice and Anti-Inflammatory Use",
        paragraphs: [
          "Inflammation is not an enemy to be instantly eliminated; it is the first biological phase of soft tissue healing. When you apply excessive ice or consume high-dose NSAIDs immediately after a ligament sprain or muscle strain, you constrict local blood vessels and suppress the release of insulin-like growth factor-1 (IGF-1), delaying muscle and collagen regeneration.",
        ],
      },
      {
        sectionHeading: "Immediate Care: P.E.A.C.E.",
        paragraphs: [
          "P — Protect: Unload the injured limb immediately for the first 24 to 48 hours to minimize bleeding.",
          "E — Elevate: Keep the limb higher than the heart to promote interstitial fluid drainage.",
          "A — Avoid Anti-Inflammatory Modalities: Allow the natural physiological inflammatory cascade to proceed without chemical blunting.",
          "C — Compress: Use cohesive bandages or compression sleeves to limit joint swelling and hemorrhage.",
          "E — Educate: Understand that active recovery under guidance yields far faster outcomes than passive bed rest.",
        ],
      },
      {
        sectionHeading: "Subsequent Rehabilitation: & L.O.V.E.",
        paragraphs: [
          "L — Load: Early progressive mechanical loading promotes cellular collagen realignment.",
          "O — Optimism: Brain-body connection and psychological confidence directly influence pain modulation.",
          "V — Vascularization: Pain-free cardiovascular activity boosts blood supply to repair tissues.",
          "E — Exercise: Restore mobility, strength, and proprioception to prevent recurrent instability.",
        ],
      },
    ],
    keyTakeaways: [
      "Avoid blanket ice application and excessive NSAIDs during acute soft-tissue healing.",
      "Progress from brief protection directly into controlled mechanical loading.",
      "Early proprioceptive and eccentric training prevents long-term joint instability.",
    ],
    tags: ["Sports Medicine", "Injury Prevention", "PEACE and LOVE", "Ligaments", "Athletic Recovery"],
  },
  {
    slug: "nutrition-for-joint-cartilage-recovery",
    title: "Anti-Inflammatory Nutrition for Joint Cartilage & Faster Muscular Recovery",
    subtitle: "How clinical dietary synergy enhances physical therapy outcomes for arthritis and tendonitis.",
    date: "September 10, 2026",
    readTime: "5 min read",
    author: "Dr. Sakshi Kocher",
    authorRole: "Consultant Physiotherapist & Nutrition Specialist",
    category: "Clinical Nutrition",
    excerpt:
      "Physical therapy repairs biomechanics, while clinical nutrition delivers the raw biochemical building blocks required for collagen synthesis, cartilage protection, and systemic inflammation reduction.",
    content: [
      {
        sectionHeading: "The Biochemical Bridge: Why Physio + Nutrition Works Faster",
        paragraphs: [
          "Joint cartilage and tendons possess limited direct vascular blood supply. They receive nutrients primarily via synovial fluid diffusion during joint movement. When physical therapy exercises are paired with an anti-inflammatory, collagen-supportive nutritional plan, the diffusion of essential amino acids and anti-inflammatory compounds into the joint matrix is maximized.",
        ],
      },
      {
        sectionHeading: "Core Nutrients for Musculoskeletal Longevity",
        paragraphs: [
          "Omega-3 Fatty Acids (EPA/DHA): Powerful down-regulators of pro-inflammatory cytokines (IL-1beta, TNF-alpha) that degrade synovial tissue.",
          "Vitamin C and Bioflavonoids: Mandatory enzymatic co-factors for collagen hydroxylation, essential for repairing ruptured tendons and lax ligaments.",
          "Adequate High-Biological-Value Protein: Ensuring 1.2 to 1.6 grams per kilogram of body weight prevents sarcopenia and speeds post-surgical muscular hypertrophy.",
          "Curcumin and Boswellia: Clinically shown to inhibit COX-2 and 5-LOX enzymes with gut-friendly tolerability, reducing morning arthritic stiffness.",
        ],
      },
    ],
    keyTakeaways: [
      "Targeted nutrients diffuse into joint cartilage during active rehabilitation.",
      "Omega-3s and plant polyphenols naturally down-regulate chronic inflammatory cytokines.",
      "Adequate protein intake is essential for post-surgical muscle rebuilding.",
    ],
    tags: ["Nutrition", "Osteoarthritis", "Collagen", "Anti-inflammatory", "Joint Health"],
  },
];
