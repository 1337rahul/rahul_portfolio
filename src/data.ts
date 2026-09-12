/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, StatItem, SkillCardData, ProcessStep, CareerItem, AcademicProject } from "./types";

export const STATS: StatItem[] = [
  {
    title: "Civil & Structural",
    subtitle: "Engineering background",
  },
  {
    title: "Generative AI",
    subtitle: "Product development",
  },
  {
    title: "Multidisciplinary",
    subtitle: "Systems thinker",
  },
  {
    title: "Badami, KA",
    subtitle: "India",
  },
];

export const CAREER_PATH: CareerItem[] = [
  {
    id: "career-01",
    number: "01",
    role: "Assistant Professor",
    institution: "Government Engineering College Naragund",
    period: "Currently serving as",
  },
  {
    id: "career-02",
    number: "02",
    role: "Design Engineer",
    institution: "Gati Shakti (South Western Railways) HQ",
    period: "Infrastructure Design & Planning",
  },
  {
    id: "career-03",
    number: "03",
    role: "Assistant Professor",
    institution: "Government Engineering College - Talakal (KOPPAL)",
    period: "Academic Faculty",
  },
  {
    id: "career-04",
    number: "04",
    role: "QA/QC Engineer",
    institution: "Inspection Official for Government of Karnataka Infrastructure Projects",
    period: "Quality Assurance & Structural Inspection",
  },
  {
    id: "career-05",
    number: "05",
    role: "Lecturer",
    institution: "Government Polytechnic Kamadolli",
    period: "Academic Faculty",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "project-sieve",
    number: "01",
    tag: "Civil / quality engineering",
    category: "Civil / quality engineering",
    title: "Sieve Analysis & Particle Size Distribution Calculator",
    description: "IS 2386 and IS 383 standards-led calculator for sieve analysis and particle size distribution with automated gradation curves and compliance reporting.",
    stack: ["TypeScript", "Vite", "Civil Standards", "IS 2386", "IS 383"],
    status: "Live",
    link: "https://sieve-analysis-and-psd-calculator-319108758290.asia-southeast1.run.app/",
  },
  {
    id: "project-structdesign",
    number: "02",
    tag: "Structural engineering",
    category: "Structural engineering",
    title: "StructDesign.Pro",
    description: "Professional structural design tool for beams, columns, slabs, and footings adhering strictly to Indian Standard IS 456:2000 specifications.",
    stack: ["React", "Structural FEA", "IS 456:2000", "Design Codes"],
    status: "Live",
    link: "https://strdesign.lovable.app/",
  },
  {
    id: "project-curveit",
    number: "03",
    tag: "Railway engineering",
    category: "Railway engineering",
    title: "Curve.it — Railway Curve Designer",
    description: "A railway curve designer for Broad Gauge (BG) railways with real-time compliance checks, transition curves, and land-use alignment analysis.",
    stack: ["Web Application", "Railway Geometry", "BG Standards", "Land-Use"],
    status: "Live",
    link: "https://claude.ai/public/artifacts/45cf3142-0c37-4ee3-9273-4dd1ab26511d",
  },
  {
    id: "project-parampare",
    number: "04",
    tag: "Client website",
    category: "Client website",
    title: "Parampare — eCommerce website",
    description: "A freelance eCommerce digital platform built for a client, featuring modern product cataloging, frictionless cart experience, and high performance.",
    stack: ["React", "TypeScript", "Tailwind CSS", "eCommerce"],
    status: "Live",
    link: "https://parampare.lovable.app/",
  },
  {
    id: "project-voicetocad",
    number: "05",
    tag: "AI PRODUCT",
    category: "AI / Parametric Design",
    title: "Voice-to-CAD System",
    description: "Exploring the frontier of converting voice commands directly into CAD drawings inside engineering software. Bridges NLP and parametric design.",
    stack: ["Python", "NLP", "AutoCAD API", "LLM"],
    status: "In Research",
  },
];

export const ACADEMIC_WORK: AcademicProject[] = [
  {
    id: "academic-masters",
    degree: "MASTER’S PROJECT",
    title: "Effect of Partial Replacement of Coarse Aggregates by Pre-Treated Plastic on Concrete",
    description: "An investigation into using pre-treated plastic as a partial replacement for coarse aggregates in concrete. Evaluates mechanical characteristics across 0% to 20% replacement levels under IS 10262 guidelines.",
    presentationAvailable: true,
    researchPaperUrl: "https://doi.org/10.26634/jste.11.2.18969",
    grantOrGuide: "Basaveshwar Engineering College (Autonomous) • Guide: Prof. G.S. Hiremath",
  },
  {
    id: "academic-bachelors",
    degree: "BACHELOR’S PROJECT",
    title: "Aerial Survey by Total Station using Specially Designed Lab-Scale Drone",
    description: "A multidisciplinary project sponsored by the Technical Education Quality Improvement Programme of the Government of India (TEQIP). Integrates high-precision Total Station control points with aerial sensor telemetry.",
    presentationAvailable: false,
    grantOrGuide: "Sponsored by TEQIP (Technical Education Quality Improvement Programme, Govt. of India)",
  },
];

export const SKILL_CARDS: SkillCardData[] = [
  {
    title: "Engineering",
    iconType: "Triangle",
    skills: [
      "Structural Analysis",
      "Civil Engineering",
      "AutoCAD",
      "Revit",
      "Load Calculations",
      "Foundation Design",
      "RCC Design",
      "Site Supervision",
    ],
  },
  {
    title: "Generative AI & Product",
    iconType: "Cpu",
    skills: [
      "Generative AI",
      "LLM Integration",
      "Python",
      "Prompt Engineering",
      "React",
      "TypeScript",
      "Node.js",
      "Product Development",
      "Mobile Apps",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Structural Thinking",
    body: "Every system has load paths — whether a building or a product. I start by understanding the forces at play and where failures occur.",
  },
  {
    number: "02",
    title: "Intelligent Design",
    body: "I apply engineering precision to software. AI features must be reliable under real conditions, not just demos.",
  },
  {
    number: "03",
    title: "Ship and Iterate",
    body: "Good engineering evolves. I build functional v1s fast, learn from real use, and improve with discipline.",
  },
];
