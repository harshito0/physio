export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Orthopedic" | "Sports" | "Rehabilitation" | "Specialized" | "Wellness";
  summary: string;
  heroIntro: string;
  symptoms: string[];
  assessmentProcedure: string[];
  whatToExpect: string[];
  clinicalBenefits: string[];
  faqs: { question: string; answer: string }[];
  duration: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "orthopedic-musculoskeletal",
    title: "Orthopedic & Musculoskeletal Physiotherapy",
    shortTitle: "Orthopedic Care",
    category: "Orthopedic",
    summary:
      "Targeted diagnosis and manual therapy for chronic back ache, neck stiffness, degenerative arthritis, and joint restrictions.",
    heroIntro:
      "Orthopedic physiotherapy focuses on correcting structural imbalances, relieving compressed nerves, and restoring healthy range of motion in the spine, hips, knees, and peripheral joints.",
    symptoms: [
      "Persistent lower back ache or morning stiffness",
      "Sharp or shooting pain down the hip or leg (Sciatica)",
      "Cervical stiffness and neck tension radiating into shoulders",
      "Knee joint crepitus, grinding sensation, or swelling",
      "Difficulty climbing stairs, prolonged sitting, or lifting objects",
    ],
    assessmentProcedure: [
      "Palpation and spinal segment joint mobility testing",
      "Active and passive range-of-motion quantification with goniometry",
      "Special orthopedic provocative tests (Spurling, SLR, McMurray)",
      "Postural alignment and ergonomic load analysis",
    ],
    whatToExpect: [
      "Immediate pain modulation using manual joint glides and electrotherapy",
      "Targeted decompression and soft tissue release to ease muscular spasm",
      "Progressive therapeutic core and spinal stabilization exercises",
      "A tailored home maintenance regimen to prevent flare-ups",
    ],
    clinicalBenefits: [
      "Reduced dependence on pain medications",
      "Restoration of joint lubrication and biomechanical alignment",
      "Strengthened deep spinal stabilizing musculature",
      "Improved posture during prolonged desk work or driving",
    ],
    faqs: [
      {
        question: "How many sessions are typically needed for chronic back pain?",
        answer:
          "Most patients experience meaningful symptomatic relief within 4 to 6 sessions. Complete postural stabilization and strength progression generally take 3 to 6 weeks depending on chronicity.",
      },
      {
        question: "Do I need an MRI or X-ray before coming for treatment?",
        answer:
          "While previous radiological reports are helpful, you do not need to order a new scan beforehand unless indicated after clinical screening.",
      },
    ],
    duration: "45 - 60 minutes per session",
  },
  {
    slug: "back-neck-spine",
    title: "Back, Neck & Spine Care (Spondylosis & Sciatica)",
    shortTitle: "Spine Care",
    category: "Orthopedic",
    summary:
      "Specialized non-surgical spine decompression, cervical posture correction, and sciatica relief protocols.",
    heroIntro:
      "Our spine rehabilitation protocol addresses degenerative disc disease, cervical spondylosis, lumbar facet arthrosis, and radicular nerve impingement through precise manual decompression and neuromuscular stabilization.",
    symptoms: [
      "Numbness, tingling, or radiating electric sensations into arms or fingers",
      "Inability to stand or walk for long durations due to lumbar ache",
      "Neck stiffness aggravated by computer screens or smartphone use",
      "Sharp pain when bending forward, coughing, or sneezing",
      "Loss of cervical or lumbar spinal curvature",
    ],
    assessmentProcedure: [
      "Dermatomal sensation and myotomal motor strength mapping",
      "Neural tension testing (Femoral nerve, Sciatic nerve tension)",
      "Spinal segmental mobility and facet joint provocation",
      "Thoracic spine extension and rib cage expansion checks",
    ],
    whatToExpect: [
      "Gentle traction techniques and directional preference mobilization (Mckenzie based)",
      "Spinal stabilization training focusing on transversus abdominis and multifidus",
      "Therapeutic heating / ultrasound to relieve paraspinal spasm",
      "Ergonomic workspace guidance including chair, monitor, and lumbar support setups",
    ],
    clinicalBenefits: [
      "Decompression of irritated nerve roots",
      "Correction of forward head posture and cervical lordosis flattening",
      "Enhanced shock absorption in intervertebral discs",
      "Long-term self-management strategies for daily spinal health",
    ],
    faqs: [
      {
        question: "Can physiotherapy help avoid spine surgery for slipped disc?",
        answer:
          "Yes, conservative physiotherapy is recognized as the recommended first-line approach for lumbar disc herniation and sciatica, with high success rates in non-emergent cases.",
      },
      {
        question: "Is traction safe for cervical spondylosis?",
        answer:
          "Gentle, calibrated manual or mechanical traction is clinically evaluated and administered only after verifying safety and cervical arterial integrity.",
      },
    ],
    duration: "45 minutes per session",
  },
  {
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury & Athletic Rehabilitation",
    shortTitle: "Sports Rehab",
    category: "Sports",
    summary:
      "Accelerated recovery protocols for ligament sprains, muscle tears, runner's knee, and peak athletic return-to-play conditioning.",
    heroIntro:
      "Whether you are a competitive athlete, weekend runner, or gym enthusiast, our sports rehabilitation combines acute injury care with biomechanical movement screening to get you back to your sport stronger than before.",
    symptoms: [
      "Acute ligament sprains (ACL, PCL, ankle inversion sprains)",
      "Hamstring, quadriceps, or groin muscle strains",
      "Rotator cuff impingement or tennis/golfer's elbow",
      "Shin splints and plantar fasciitis in runners",
      "Fear of re-injury during cutting, pivoting, or sprinting",
    ],
    assessmentProcedure: [
      "Functional Movement Screen (FMS) and dynamic single-leg balance testing",
      "Isokinetic limb strength symmetry comparisons",
      "Sport-specific movement pattern and running gait video analysis",
      "Ligament laxity tests (Lachman, anterior drawer, talar tilt)",
    ],
    whatToExpect: [
      "Acute phase: Swelling control, lymphatic drainage, and gentle protected mobility",
      "Subacute phase: Eccentric tendon loading and kinetic chain strengthening",
      "Advanced phase: Plyometrics, agility drills, and sport-specific return-to-play testing",
      "Injury prevention blueprint covering warm-up protocols and recovery routines",
    ],
    clinicalBenefits: [
      "Faster, safer return to competitive training",
      "Restoration of muscular balance and limb symmetry index (>90%)",
      "Optimized kinetic chain power transfer",
      "Reduced risk of secondary tears or compensatory injuries",
    ],
    faqs: [
      {
        question: "When should I begin sports physio after an acute ankle sprain?",
        answer:
          "Starting within 24 to 48 hours allows us to initiate proper swelling management, protected weight-bearing, and early proprioceptive retraining, significantly cutting recovery time.",
      },
      {
        question: "Do you offer sport-specific drills inside the clinic?",
        answer:
          "Yes, our sports rehabilitation wing includes agility, jump-landing mechanics, and sport-specific movement conditioning before clearing athletes for play.",
      },
    ],
    duration: "60 minutes per session",
  },
  {
    slug: "post-surgical-fracture-rehab",
    title: "Post-Fracture Stiffness & Post-Surgical Rehabilitation",
    shortTitle: "Post-Surgical Rehab",
    category: "Rehabilitation",
    summary:
      "Structured recovery after orthopedic surgery, arthroscopy, joint replacement (TKR/THR), and post-cast fracture stiffness.",
    heroIntro:
      "Post-operative physiotherapy is critical for preventing joint contracture, breaking down adhesive scar tissue, and regaining full muscle power after cast removal or surgical fixation.",
    symptoms: [
      "Severe joint stiffness following cast or splint removal",
      "Post-surgical edema and tight, hypersensitive surgical scars",
      "Quadriceps or calf muscle atrophy following knee/ankle surgery",
      "Limping or altered gait pattern after hip or knee arthroplasty",
      "Inability to achieve full extension or flexion in operative joints",
    ],
    assessmentProcedure: [
      "Evaluation of surgical protocol milestones provided by your operating surgeon",
      "Measurement of active/passive ROM with strict contraindication awareness",
      "Incision site and surgical scar tissue mobility check",
      "Weight-bearing tolerance and assistive device progression audit",
    ],
    whatToExpect: [
      "Phase-specific protocol synchronized with your orthopedic surgeon's guidelines",
      "Gentle passive mobilization to regain joint angles without stressing surgical hardware",
      "Deep tissue and scar massage to restore soft tissue gliding",
      "Gait re-education from walker to crutches to independent unassisted walking",
    ],
    clinicalBenefits: [
      "Prevention of arthrofibrosis (permanent joint stiffness)",
      "Rapid restoration of independent mobility and stairs negotiation",
      "Safe progressive strength recovery without hardware failure risk",
      "Maximized longevity of prosthetic joint implants",
    ],
    faqs: [
      {
        question: "How soon after knee replacement surgery should physiotherapy begin?",
        answer:
          "Post-operative rehabilitation ideally begins on Day 1 or Day 2 post-surgery in accordance with orthopedic clearance, focusing on ankle pumps, quad sets, and early safe bed mobility.",
      },
    ],
    duration: "45 - 60 minutes per session",
  },
  {
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation & Balance Training",
    shortTitle: "Neuro Rehab",
    category: "Rehabilitation",
    summary:
      "Neuroplasticity-based therapy for stroke recovery, Parkinson's disease, peripheral neuropathy, and vestibular balance disorders.",
    heroIntro:
      "Our neurological physiotherapy harnesses neuroplasticity to rebuild neural pathways, improve postural balance, manage hypertonia/spasticity, and foster functional independence.",
    symptoms: [
      "Hemiparesis or weakness on one side of the body following stroke",
      "Tremors, muscle rigidity, and shuffling gait in Parkinson's disease",
      "Frequent loss of balance, falls, or fear of falling",
      "Foot drop and diminished proprioception in diabetic neuropathy",
      "Difficulty coordinating complex movements such as dressing or chair transfers",
    ],
    assessmentProcedure: [
      "Berg Balance Scale and Timed Up and Go (TUG) evaluation",
      "Modified Ashworth Scale for spasticity grading",
      "Sensory testing (proprioception, vibration, light touch)",
      "Functional task analysis and motor control staging (Brunnstrom)",
    ],
    whatToExpect: [
      "Task-oriented motor retraining using repetitive functional drills",
      "Dynamic balance and vestibular stabilization on wobble boards and foam surfaces",
      "Rood's and Bobath (NDT) facilitation techniques to modulate muscle tone",
      "Caregiver education and home safety adaptation counseling",
    ],
    clinicalBenefits: [
      "Enhanced postural stability and reduced fall risks",
      "Progressive regaining of hand function and unassisted walking",
      "Promotion of neuroplastic brain reorganization",
      "Greater dignity and everyday independence for patients and families",
    ],
    faqs: [
      {
        question: "Can someone who had a stroke months ago still improve?",
        answer:
          "Yes. While the first 3 to 6 months show the fastest spontaneous recovery, neuroplasticity continues with dedicated task-specific rehabilitation even in chronic phases.",
      },
    ],
    duration: "60 minutes per session",
  },
  {
    slug: "womens-health-prenatal-postnatal",
    title: "Women's Health, Antenatal & Postnatal Care",
    shortTitle: "Women's Health",
    category: "Specialized",
    summary:
      "Compassionate, specialized physiotherapy for pregnancy-related pelvic girdle pain, diastasis recti, and postpartum core restoration.",
    heroIntro:
      "Designed specifically for expectant and new mothers, our women's health physiotherapy provides safe, gentle care for pelvic girdle pain, postural adjustments, and safe return to fitness after delivery.",
    symptoms: [
      "Sacroiliac joint (SIJ) and pubic symphysis pain during pregnancy",
      "Postpartum abdominal separation (Diastasis Recti)",
      "Upper back ache from breastfeeding and baby carrying postures",
      "Pelvic floor weakness and mild urinary incontinence",
      "Core instability and lumbar fatigue after delivery",
    ],
    assessmentProcedure: [
      "Pelvic alignment and sacroiliac joint stability assessment",
      "Diastasis recti measurement using digital caliper or finger-width palpation",
      "Postural analysis across pregnancy trimesters or postpartum weeks",
      "Screening for contraindications and safe exercise clearance",
    ],
    whatToExpect: [
      "Trimester-safe pelvic floor activation and gentle hip openers",
      "Ergonomic guidance for nursing, lifting, and stroller handling",
      "Postnatal deep core rehabilitation tailored to vaginal or C-section births",
      "Kinesiology taping for pregnancy belly and lumbar support",
    ],
    clinicalBenefits: [
      "Safe, medication-free relief from pregnancy back and pelvic pain",
      "Support for an active, smoother labor and birth preparation",
      "Controlled closure of abdominal separation without strain",
      "Restored core strength and confidence in everyday movement",
    ],
    faqs: [
      {
        question: "Is prenatal physiotherapy safe throughout all trimesters?",
        answer:
          "Yes, our treatments are tailored to each specific trimester following obstetric guidelines and strictly avoiding contraindicated postures or modalities.",
      },
    ],
    duration: "45 minutes per session",
  },
  {
    slug: "electrotherapy-laser-ultrasound",
    title: "Electrotherapy, Laser & Shockwave Therapy",
    shortTitle: "Advanced Modalities",
    category: "Specialized",
    summary:
      "State-of-the-art modalities including Interferential Therapy (IFT), TENS, therapeutic ultrasound, and laser for deep cellular repair.",
    heroIntro:
      "Combining advanced physical agents with manual therapy accelerates cellular healing, suppresses nociceptive pain signals, and relaxes deep muscle spasms effectively.",
    symptoms: [
      "Stubborn calcific tendonitis or chronic plantar fasciitis",
      "Acute muscle spasms and trigger points resistant to gentle stretching",
      "Deep ligament sprains with lingering swelling",
      "Severe arthritic inflammation in knees or shoulders",
    ],
    assessmentProcedure: [
      "Tissue depth and chronicity grading",
      "Screening for cardiac pacemakers, active infections, or sensory deficits",
      "Skin sensitivity testing before thermal or electrical application",
    ],
    whatToExpect: [
      "Non-invasive application of calibrated frequencies (IFT, TENS, or Class-IV Laser)",
      "Pleasant tingling or soothing thermal sensation with no downtime",
      "Immediate reduction in acute localized pain and inflammatory swelling",
      "Immediate follow-up with active corrective exercises while pain is damped",
    ],
    clinicalBenefits: [
      "Enhanced local microcirculation and ATP cellular synthesis",
      "Rapid reduction of acute inflammatory exudates",
      "Desensitization of hyper-excitable peripheral pain receptors",
      "Softens rigid fibrotic adhesions and scar tissue",
    ],
    faqs: [
      {
        question: "Does electrotherapy hurt?",
        answer:
          "Not at all. Treatments like IFT and Ultrasound are gentle and feel like a mild, comfortable rhythmic vibration or soothing warmth.",
      },
    ],
    duration: "30 - 45 minutes per session",
  },
  {
    slug: "cupping-myofascial-release",
    title: "Cupping Therapy & Myofascial Release",
    shortTitle: "Cupping & MFR",
    category: "Specialized",
    summary:
      "Negative-pressure myofascial decompression and manual fascial release to unlock rigid muscular restrictions and stimulate blood flow.",
    heroIntro:
      "Myofascial release and cupping therapy create negative pressure that lifts restricted fascial layers, flushes metabolic stagnation, and restores painless tissue gliding.",
    symptoms: [
      "Chronic knotting in upper trapezius and shoulder blades",
      "Tight IT-band or persistent runner's hamstring tightness",
      "Restricted thoracic rotation in golfers, cricketers, or desk workers",
      "Fibromyalgia tender spots and localized muscle ache",
    ],
    assessmentProcedure: [
      "Fascial glide restriction mapping across kinetic chains",
      "Active trigger point identification via gentle sustained digital pressure",
      "Evaluation of circulatory status and skin integrity",
    ],
    whatToExpect: [
      "Application of medical-grade silicone or vacuum cups along fascial meridians",
      "Dynamic cupping with gentle active joint movement for deeper release",
      "Sustained manual fascial unwinding techniques",
      "Mild circular discoloration marks that harmlessly fade within 3 to 7 days",
    ],
    clinicalBenefits: [
      "Decompression of dense fascial adhesions",
      "Dramatic boost in local capillary micro-perfusion",
      "Immediate sense of muscular lightness and freedom",
      "Release of chronic postural tension in upper back and hips",
    ],
    faqs: [
      {
        question: "Are the circular marks from cupping bruises?",
        answer:
          "No, the circular marks are not traumatic bruises. They are cellular debris and stagnant blood drawn into the superficial lymphatic capillaries for cleansing, typically clearing in 3-7 days.",
      },
    ],
    duration: "40 minutes per session",
  },
  {
    slug: "gait-balance-training",
    title: "Gait & Postural Correction Training",
    shortTitle: "Gait & Balance",
    category: "Specialized",
    summary:
      "Biomechanical gait analysis and postural re-education for symmetrical, pain-free walking and active everyday living.",
    heroIntro:
      "Faulty gait mechanics and chronic posture faults silently overload joints. Our gait training uses biomechanical assessment to re-train efficient, balanced movement.",
    symptoms: [
      "Limping, asymmetrical weight distribution, or uneven shoe wear",
      "Severe forward head posture or rounded shoulders from prolonged sitting",
      "Inward knee collapsing (valgus) during walking or stair descent",
      "Fatigue or calf aching after short distances of walking",
    ],
    assessmentProcedure: [
      "Visual and instrumented gait phase analysis (stance, swing, heel strike)",
      "Foot arch evaluation (flat feet vs high arch supination)",
      "Pelvic drop (Trendelenburg sign) screening during single-leg stance",
    ],
    whatToExpect: [
      "Mirror biofeedback and step-by-step gait phase correction",
      "Targeted activation of gluteus medius and foot intrinsic muscles",
      "Dynamic balance challenges on uneven surfaces",
      "Footwear recommendations and supportive insole advice if indicated",
    ],
    clinicalBenefits: [
      "Elimination of compensatory limping",
      "Reduced strain on lumbar spine, hips, and knees",
      "Sustained improvement in walking endurance and energy efficiency",
      "Confidence in walking safely on uneven outdoor surfaces",
    ],
    faqs: [
      {
        question: "Can flat feet cause knee and back pain?",
        answer:
          "Yes. Overpronation in flat feet internally rotates the tibia and femur, which can create rotational stress on the knee joint and tilt the pelvis, frequently causing knee or lower back discomfort.",
      },
    ],
    duration: "45 minutes per session",
  },
];
