/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PresentationSlide {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  category?: string;
  content: {
    type: "title" | "overview" | "why-cards" | "why-stats" | "table" | "objectives" | "methodology" | "chart-compressive" | "chart-dual" | "chart-slump" | "list" | "references" | "thankyou";
    headline?: string;
    description?: string;
    bullets?: string[];
    table?: {
      headers: string[];
      rows: { characteristic: string; effect: string; detail?: string }[];
    };
    chartData?: any;
    author?: string;
    guide?: string;
    college?: string;
    sources?: string[];
  };
}

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: 1,
    slideNumber: 1,
    title: "EFFECT OF PARTIAL REPLACEMENT OF COARSE AGGREGATE BY PRE-TREATED WASTE PLASTIC ON STRENGTH OF CONCRETE",
    subtitle: "Department of Civil Engineering",
    category: "M.Tech Thesis Presentation",
    content: {
      type: "title",
      headline: "Effect of Partial Replacement of Coarse Aggregate by Pre-Treated Waste Plastic on Strength of Concrete",
      college: "Basaveshwar Engineering College (Autonomous)",
      author: "Rahul Bevinagidad (2BA20CSE10)",
      guide: "Prof. G.S. Hiremath",
    },
  },
  {
    id: 2,
    slideNumber: 2,
    title: "OVERVIEW",
    subtitle: "Research Roadmap & Structural Questions",
    content: {
      type: "overview",
      headline: "WHY ? • WHAT ? • HOW ?",
      bullets: [
        "Literature Review: Existing studies on polymer aggregate behavior",
        "Methodology: Sourcing, shredding, pre-treatment, casting, and curing",
        "Results: Compressive, Split-Tensile, Flexural strength & Slump testing",
        "Futurescope: Microstructural analysis and field applications",
        "References: Standard test codes (IS 10262) & international publications",
      ],
    },
  },
  {
    id: 3,
    slideNumber: 3,
    title: "WHY ?",
    subtitle: "Triad of Ecological & Industrial Pressure",
    content: {
      type: "why-cards",
      headline: "Intersecting Environmental and Material Challenges",
      bullets: [
        "Construction Industry: Astronomical global appetite for concrete aggregates depleting natural reserves.",
        "Stone Quarrying: Destructive mining, particulate emissions, silicosis, and ecological disruption.",
        "Plastics Industry: Exponential accumulation of non-biodegradable polymer waste and bottle caps.",
      ],
      sources: ["Global Aggregate Depletion Studies", "CPCB Polymer Waste Inventory"],
    },
  },
  {
    id: 4,
    slideNumber: 4,
    title: "WHY ? GLOBAL SCALE",
    subtitle: "Environmental Impact of Modern Concrete Production",
    content: {
      type: "why-stats",
      headline: "Concrete is the most widely used substance on the planet after water.",
      description: "Over 320 Mt produced in India, 2,300 Mt in China. Quarrying dust causes respiratory illness in 26.7% of surveyed quarry workers and chronic ocular irritation in 22.2%.",
      bullets: [
        "India: 320+ Million Metric Tonnes of annual cement/concrete output",
        "China: 2,300+ Million Metric Tonnes global production leader",
        "Health hazard: 26.7% cough/asthma incidents reported in quarrying proximity",
        "Critical urgency: Diverting plastic waste away from landfills into structural stabilization",
      ],
      sources: ["Statista", "The Guardian (John Vidal)", "Journal of Scientific Research and Reports"],
    },
  },
  {
    id: 5,
    slideNumber: 5,
    title: "LITERATURE SUMMARY",
    subtitle: "Characteristics vs. Effects of Plastic Aggregates in Concrete",
    content: {
      type: "table",
      table: {
        headers: ["Characteristics", "Observed Mechanical Effects", "Impact Description"],
        rows: [
          { characteristic: "Concrete Density", effect: "Decreases", detail: "Produces lightweight, reduced self-weight concrete" },
          { characteristic: "Modulus of Elasticity", effect: "Decreases", detail: "Lower stiffness, enhances deformability" },
          { characteristic: "Compressive Strength", effect: "Increases to peak (at 15%), then declines", detail: "Optimal particle-matrix interlocking achieved" },
          { characteristic: "Flexural Strength", effect: "Slight Reduction / Balances", detail: "High energy absorption under flexure" },
          { characteristic: "Crack Appearance", effect: "Delayed & Dispersed", detail: "Plastic fibers/particles arrest microcrack propagation" },
          { characteristic: "Water Absorption", effect: "Decreases significantly", detail: "Impermeable polymer surface resists water ingress" },
          { characteristic: "Abrasion Resistance", effect: "Increases", detail: "Tough elastic polymer surfaces withstand abrasive wear" },
        ],
      },
    },
  },
  {
    id: 6,
    slideNumber: 6,
    title: "OBJECTIVES",
    subtitle: "Target Benchmarks of the Investigation",
    content: {
      type: "objectives",
      bullets: [
        "1. TO OBTAIN A WORKABLE SLUMP: Ensure fresh concrete remains pumpable and easily placed without excessive bleeding or segregation.",
        "2. TO STUDY THE BEHAVIOUR OF PRE-TREATED PLASTIC: Quantify the mechanical effects of chemical surface conditioning on interfacial bond strength and load capacity.",
        "3. TO OBTAIN ENVIRONMENTALLY FRIENDLY CONCRETE: Divert post-consumer bottle cap plastic waste to lower natural quarry rock reliance.",
      ],
    },
  },
  {
    id: 7,
    slideNumber: 7,
    title: "METHODOLOGY",
    subtitle: "Experimental Protocol & Laboratory Workflow",
    content: {
      type: "methodology",
      bullets: [
        "Stage 1: Material Procurement — Collection of 53-grade OPC, river sand, natural granite aggregates, and HDPE/PP waste bottle caps.",
        "Stage 2: Shredding & Pre-Treatment — Mechanical shredding to 10-20mm nominal aggregate sizes followed by chemical surface conditioning for cementitious adhesion.",
        "Stage 3: Mix Design — Formulating control mix and trial batches with 0%, 5%, 10%, 15%, and 20% coarse aggregate replacement as per IS 10262.",
        "Stage 4: Mixing + Casting — Strict dry-mix and wet-mix cycles in mechanical drum mixers; casting into standard 150mm cubes, 150x300mm cylinders, and 100x100x500mm prisms.",
        "Stage 5: Curing + Testing — Water curing for 7, 14, and 28 days followed by non-destructive and destructive strength evaluation.",
        "Stage 6: Results & Comparative Analysis — Compilation of compressive, tensile, flexural, and slump metrics.",
      ],
    },
  },
  {
    id: 8,
    slideNumber: 8,
    title: "RESULTS: COMPRESSIVE STRENGTH",
    subtitle: "Compressive Strength (MPa) vs. Coarse Aggregate Replacement %",
    content: {
      type: "chart-compressive",
      headline: "15% Replacement achieved peak strength of 27.39 MPa at 28 Days",
      chartData: [
        { replacement: "0% (Control)", day7: 14.38, day14: 20.78, day28: 23.25 },
        { replacement: "5% Plastic", day7: 16.78, day14: 20.34, day28: 26.70 },
        { replacement: "10% Plastic", day7: 15.69, day14: 20.30, day28: 23.57 },
        { replacement: "15% Plastic", day7: 18.69, day14: 22.90, day28: 27.39, highlight: true },
        { replacement: "20% Plastic", day7: 15.30, day14: 16.15, day28: 20.30 },
      ],
    },
  },
  {
    id: 9,
    slideNumber: 9,
    title: "RESULTS: TENSILE & FLEXURE",
    subtitle: "Split Tensile and Flexure Strength vs. Coarse Aggregate Replacement %",
    content: {
      type: "chart-dual",
      chartData: {
        splitTensile: [
          { replacement: "0%", value: 2.20 },
          { replacement: "5%", value: 2.05 },
          { replacement: "10%", value: 2.12 },
          { replacement: "15%", value: 2.32 },
          { replacement: "20%", value: 1.90 },
        ],
        flexure: [
          { replacement: "0%", value: 3.72 },
          { replacement: "5%", value: 3.41 },
          { replacement: "10%", value: 3.55 },
          { replacement: "15%", value: 3.42 },
          { replacement: "20%", value: 2.62 },
        ],
      },
    },
  },
  {
    id: 10,
    slideNumber: 10,
    title: "RESULTS: WORKABILITY (SLUMP)",
    subtitle: "Slump Value (mm) vs. Coarse Aggregate Replacement %",
    content: {
      type: "chart-slump",
      headline: "Smooth polymer texture enhances slump from 110mm to 130mm",
      chartData: [
        { replacement: "0% Replacement", slump: 110 },
        { replacement: "5% Replacement", slump: 118 },
        { replacement: "10% Replacement", slump: 122 },
        { replacement: "15% Replacement", slump: 125 },
        { replacement: "20% Replacement", slump: 130 },
      ],
    },
  },
  {
    id: 11,
    slideNumber: 11,
    title: "FUTURESCOPE",
    subtitle: "Avenues for Extended Structural Exploration",
    content: {
      type: "list",
      bullets: [
        "Still a substantial research gap in commercial industrial standards for Pre-treated plastic coarse aggregates.",
        "Exploration of varied physical and chemical pre-treatment methods across diverse polymer categories (PP, PET, HDPE).",
        "Detailed examination of long-term bond strength degradation under freeze-thaw and cyclic thermal stresses.",
        "SEM (Scanning Electron Microscopy) and XRD microstructural studies to model intra-molecular C-S-H gel bonding.",
      ],
    },
  },
  {
    id: 12,
    slideNumber: 12,
    title: "REFERENCES",
    subtitle: "Foundational Literature & Standards Cited",
    content: {
      type: "references",
      bullets: [
        "[1] Ming’ate, Felix & Mohamed, Mohamed. (2016). Impact of Stone Quarrying on Environment & Livelihood in Kenya. JSRR.",
        "[2] Alkizwini, Rasha. (2020). Reuse Plastic and Glass Wastes as Partial Replacement of Concrete Components. JESTECH.",
        "[3] Mohammad, Ilham & Nariman, Nazim & Othman, Kaywan. (2020). Utilization of Waste Plastic in Concrete. EAJSE.",
        "[4] Ashish B. Tone et al. (2020). Use of E-Waste in Construction Industry. IRJET.",
        "[5] Saxena, Rajat & Gupta, Trilok et al. (2018). Mechanical & Durability Properties of Concrete Containing PET Waste. Scientia Iranica.",
        "[6] Zasiah Tafheem et al. (2018). Experimental Investigation of Post-Consumer Plastic as Coarse Aggregate. JMES.",
        "[7] Nur Hanis Zulkernain et al. (2021). Utilisation of plastic waste as aggregate in construction materials: A review. CBM.",
        "[8] Bureau of Indian Standards: IS 10262 (2009) Concrete Mix Proportioning Guidelines.",
      ],
    },
  },
  {
    id: 13,
    slideNumber: 13,
    title: "THANK YOU",
    subtitle: "Questions & Discussion",
    content: {
      type: "thankyou",
      headline: "THANK YOU",
      description: "Find this Presentation, Report and Further Resources Online at",
      bullets: ["https://raahul.super.site/"],
    },
  },
];
