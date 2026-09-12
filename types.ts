/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  number?: string;
  tag: string;
  category?: string;
  title: string;
  description: string;
  stack?: string[];
  status?: "In Research" | "Building" | "Research" | "Live";
  link?: string;
}

export interface CareerItem {
  id: string;
  number: string;
  role: string;
  institution: string;
  department?: string;
  period?: string;
}

export interface AcademicProject {
  id: string;
  degree: "MASTER’S PROJECT" | "BACHELOR’S PROJECT" | "DIPLOMA";
  title: string;
  description: string;
  presentationAvailable?: boolean;
  researchPaperUrl?: string;
  grantOrGuide?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface SkillCardData {
  title: string;
  iconType: "Triangle" | "Cpu" | "Zap";
  skills: string[];
}

export interface StatItem {
  title: string;
  subtitle: string;
}
