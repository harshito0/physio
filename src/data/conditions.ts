export interface ConditionItem {
  slug: string;
  name: string;
  category: "Spine & Neck" | "Joints & Limbs" | "Sports" | "Neurological & Posture";
  summary: string;
  commonSymptoms: string[];
  underlyingCauses: string[];
  howPhysioHelps: string[];
  recommendedServices: { title: string; slug: string }[];
}

export const conditionsData: ConditionItem[] = [
  {
    slug: "cervical-spondylosis-neck-pain",
    name: "Cervical Spondylosis & Chronic Neck Pain",
    category: "Spine & Neck",
    summary:
      "Age-related or posture-induced wear and tear affecting cervical spinal discs and facet joints, leading to neck stiffness and radiating nerve pain.",
    commonSymptoms: [
      "Stiffness and aching along the back of the neck and base of skull",
      "Headaches starting at the nape of the neck (cervicogenic headache)",
      "Tingling, pins-and-needles, or weakness into shoulders, arms, or hands",
      "Grinding or popping sound when turning the head",
    ],
    underlyingCauses: [
      "Prolonged desk work with forward head posture ('text neck')",
      "Dehydration and height loss of cervical intervertebral discs",
      "Bone spur (osteophyte) formation causing foraminal narrowing",
    ],
    howPhysioHelps: [
      "Gentle cervical manual traction and vertebral mobilization",
      "Deep neck flexor activation to rebuild spinal stability",
      "Ergonomic computer screen height and sleeping pillow adjustment",
    ],
    recommendedServices: [
      { title: "Back, Neck & Spine Care", slug: "back-neck-spine" },
      { title: "Electrotherapy & Laser", slug: "electrotherapy-laser-ultrasound" },
    ],
  },
  {
    slug: "lumbar-spondylosis-sciatica",
    name: "Lumbar Spondylosis, Disc Bulge & Sciatica",
    category: "Spine & Neck",
    summary:
      "Compression or irritation of the sciatic nerve root by a lumbar disc herniation or spinal stenosis, causing electric radiating pain down the lower extremity.",
    commonSymptoms: [
      "Sharp, burning, or shooting pain travelling from lower back into the buttock, thigh, and calf",
      "Numbness or weakness in the foot or toes",
      "Worsening pain with prolonged sitting, coughing, or bending forward",
      "Difficulty standing up straight after being seated",
    ],
    underlyingCauses: [
      "Intervertebral disc protrusion pressing on L4, L5, or S1 nerve roots",
      "Facet joint hypertrophy or spinal canal narrowing",
      "Improper heavy lifting mechanics without abdominal brace",
    ],
    howPhysioHelps: [
      "Directional preference exercises (McKenzie Method) to centralize disc bulge",
      "Nerve gliding neurodynamics to reduce sciatic sheath adhesion",
      "Progressive core stabilization focusing on transverse abdominis",
    ],
    recommendedServices: [
      { title: "Back, Neck & Spine Care", slug: "back-neck-spine" },
      { title: "Orthopedic & Musculoskeletal", slug: "orthopedic-musculoskeletal" },
    ],
  },
  {
    slug: "frozen-shoulder-rotator-cuff",
    name: "Frozen Shoulder (Adhesive Capsulitis) & Rotator Cuff Tears",
    category: "Joints & Limbs",
    summary:
      "Progressive inflammatory tightening of the glenohumeral capsule or degenerative tears in the rotator cuff tendons restricting shoulder elevation.",
    commonSymptoms: [
      "Severe night pain when sleeping on the affected shoulder",
      "Inability to reach behind the back or fasten clothing",
      "Progressive stiffness leading to loss of overhead reach",
      "Dull ache deep within the deltoid and lateral arm",
    ],
    underlyingCauses: [
      "Idiopathic capsular fibrosis, often associated with diabetes or thyroid conditions",
      "Micro-tears in supraspinatus tendon from repetitive overhead loading",
      "Prolonged immobilization following a fall or minor fracture",
    ],
    howPhysioHelps: [
      "Graded Maitland and Mulligan joint glides to expand capsule volume",
      "Myofascial trigger point release of subscapularis and pectoralis minor",
      "Progressive scapular stabilization and rotator cuff isometric strengthening",
    ],
    recommendedServices: [
      { title: "Orthopedic & Musculoskeletal", slug: "orthopedic-musculoskeletal" },
      { title: "Cupping & Myofascial Release", slug: "cupping-myofascial-release" },
    ],
  },
  {
    slug: "knee-osteoarthritis-patellofemoral-pain",
    name: "Knee Osteoarthritis & Patellofemoral Joint Pain",
    category: "Joints & Limbs",
    summary:
      "Degeneration of knee articular cartilage or maltracking of the kneecap causing friction, crepitus, and pain during weight-bearing.",
    commonSymptoms: [
      "Deep aching around the knee during or after walking",
      "Morning knee joint stiffness lasting less than 30 minutes",
      "Crepitus (grating/crackling sounds) when climbing stairs or squatting",
      "Occasional joint swelling and feeling of instability or buckling",
    ],
    underlyingCauses: [
      "Wear of hyaline articular cartilage and reduction of synovial fluid",
      "Weakness of the quadriceps (vastus medialis oblique) and hip abductors",
      "Excess axial body weight placing repeated compressive load on joint surfaces",
    ],
    howPhysioHelps: [
      "Open and closed kinetic chain quadriceps and hamstring strengthening",
      "Knee distraction and manual patellar mobilizations",
      "Gait re-education and off-loader taping",
      "Anti-inflammatory metabolic nutrition counseling to support joint tissue",
    ],
    recommendedServices: [
      { title: "Orthopedic & Musculoskeletal", slug: "orthopedic-musculoskeletal" },
      { title: "Gait & Postural Correction", slug: "gait-balance-training" },
    ],
  },
  {
    slug: "sports-ligament-tendon-injuries",
    name: "Ligament Sprains (ACL/Ankle) & Tendonitis",
    category: "Sports",
    summary:
      "Overstretch or partial disruption of stabilizing ligaments or chronic micro-damage to tendons (Achilles, Patellar, Rotator Cuff).",
    commonSymptoms: [
      "Sudden popping sound accompanied by immediate joint swelling",
      "Tenderness directly over the tendon sheath, aggravated by explosive movement",
      "Instability and feeling like the joint will give out under weight",
      "Stiffness upon taking the first steps out of bed in the morning",
    ],
    underlyingCauses: [
      "Sudden deceleration, awkward landing, or high-velocity pivot in sport",
      "Rapid spikes in training intensity or volume without adequate rest",
      "Biomechanical asymmetry or deficient eccentric tendon strength",
    ],
    howPhysioHelps: [
      "Phase-specific eccentric loading protocols (Alfredson protocol)",
      "High-energy therapeutic modalities (Laser / Shockwave) to stimulate collagen synthesis",
      "Plyometric agility drills and return-to-play objective testing",
    ],
    recommendedServices: [
      { title: "Sports Injury Rehabilitation", slug: "sports-injury-rehabilitation" },
      { title: "Electrotherapy & Laser", slug: "electrotherapy-laser-ultrasound" },
    ],
  },
  {
    slug: "post-fracture-stiffness-surgical-recovery",
    name: "Post-Fracture Joint Stiffness & Arthroplasty Recovery",
    category: "Neurological & Posture",
    summary:
      "Loss of joint range, muscle atrophy, and adhesive scar formation following plaster cast immobilization or orthopedic surgical fixation.",
    commonSymptoms: [
      "Rigid limitation in bending or straightening the affected joint",
      "Marked muscle wasting in the immobilized limb",
      "Swelling around the ankle, wrist, or knee when upright",
      "Hesitancy and fear of placing full body weight onto the limb",
    ],
    underlyingCauses: [
      "Prolonged immobilization required for bone consolidation",
      "Surgical trauma causing fibrotic intra-articular adhesions",
      "Inhibition of neuromuscular motor firing (arthrogenic muscle inhibition)",
    ],
    howPhysioHelps: [
      "Safe, calibrated passive and active-assisted mobilization",
      "Surgical scar tissue mobilization to ensure smooth tissue gliding",
      "Progressive functional weight-bearing and gait training",
    ],
    recommendedServices: [
      { title: "Post-Surgical Rehabilitation", slug: "post-surgical-fracture-rehab" },
      { title: "Orthopedic & Musculoskeletal", slug: "orthopedic-musculoskeletal" },
    ],
  },
];
