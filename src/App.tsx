/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import {
  Triangle,
  Cpu,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Maximize2,
} from "lucide-react";

// Import custom visual layout components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import FadeIn from "./components/FadeIn";
import AnimatedHeading from "./components/AnimatedHeading";
import SectionLabel from "./components/SectionLabel";
import PresentationViewer from "./components/PresentationViewer";

// Import data structures
import {
  CAREER_PATH,
  PROJECTS,
  SKILL_CARDS,
} from "./data";

export default function App() {
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/15 selection:text-white font-sans overflow-x-hidden pb-12">
      {/* Premium Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Persistent / Sticky Interactive Navbar */}
      <Navbar onSectionClick={scrollToSection} />

      {/* --------------------------------------------------
          SECTION 1: HERO (Full-Screen Video Background)
          -------------------------------------------------- */}
      <section
        id="hero"
        className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between"
      >
        {/* RAW, full-screen background video - NO overlays or gradients as requested */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Outer content container overlay */}
        <div className="relative z-10 flex-1 flex flex-col px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
          {/* Spacer to push content down to the bottom viewport */}
          <div className="flex-1" />

          {/* Hero Content positioned at the bottom */}
          <div className="pb-12 lg:pb-20 w-full">
            <div className="lg:grid lg:grid-cols-12 lg:items-end gap-12">
              {/* Left Column (8-cols width on desktop) */}
              <div className="lg:col-span-8">
                {/* Character-by-character revealing heading */}
                <AnimatedHeading
                  text={"Building structure\nthrough code and concrete."}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-6 tracking-tight leading-tight select-none"
                  style={{ letterSpacing: "-0.04em" }}
                  delay={200}
                />

                {/* Narrative pitch paragraph */}
                <FadeIn delay={800} duration={800}>
                  <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl font-light leading-relaxed">
                    Structural engineer and generative AI developer. Designing robust systems across physical infrastructure and digital products.
                  </p>
                </FadeIn>

                {/* Staggered action buttons */}
                <FadeIn delay={1200} duration={800}>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 cursor-none clickable focus:outline-none"
                    >
                      Say Hello
                    </button>
                    <button
                      onClick={() => scrollToSection("work")}
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-none clickable focus:outline-none"
                    >
                      View Work
                    </button>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column: Mini tagline / structural coordinate badge */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end mt-8 lg:mt-0">
                <FadeIn delay={1400} duration={800} className="w-full lg:w-auto">
                  <div className="liquid-glass border border-white/20 px-6 py-4 rounded-xl text-left lg:text-right inline-block">
                    <span className="text-xs uppercase tracking-[0.25em] text-gray-400 block mb-1">
                      DISCIPLINES
                    </span>
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-white tracking-tight">
                      Engineering. AI. Product.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 2: ABOUT (Structural Intelligence)
          -------------------------------------------------- */}
      <section
        id="about"
        className="bg-black py-16 lg:py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Heading and Label */}
          <FadeIn duration={800}>
            <div className="mb-3"><SectionLabel label="ABOUT" /></div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Where structure meets intelligence.
            </h2>
          </FadeIn>

          {/* Right Column: Bio and Grid Stats */}
          <div className="mt-8 lg:mt-0">
            <FadeIn delay={300} duration={800}>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 font-light">
                I'm Rahul Bevinagidad — a civil and structural engineer from
                Badami, Karnataka, who crossed disciplines into generative AI
                product development. I think in systems: load paths, data flows,
                structural hierarchies, and intelligent interfaces.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12 font-light">
                I bring an engineer's precision to AI product work. Whether
                it's designing a structural analysis framework or building an
                AI-powered product from zero, I care about what holds up under
                real-world conditions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 3: CAREER PATH
          01 CAREER PATH
          WHERE I AM / WHERE I'VE BEEN
          -------------------------------------------------- */}
      <section
        id="career"
        className="bg-[#060607] py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn duration={800}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                  01
                </span>
                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">
                  /
                </span>
                <SectionLabel label="CAREER PATH" />
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Where I am / where I've been.
            </h2>
          </FadeIn>

          {/* Career Path Timeline List */}
          <div className="mt-14 space-y-4">
            {CAREER_PATH.map((item, idx) => (
              <div key={item.id}>
                <FadeIn delay={idx * 150} duration={700}>
                  <div className="liquid-glass border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/25 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start md:items-center gap-6">
                      {/* Numeric Badge */}
                      <span className="text-2xl md:text-3xl font-mono text-neutral-500 group-hover:text-white transition-colors">
                        {item.number}
                      </span>

                      {/* Content */}
                      <div>
                        <h3 className="text-lg md:text-xl font-medium text-white tracking-tight group-hover:text-white transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sm md:text-base text-neutral-400 font-light mt-1">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    {/* Period / Department Tag */}
                    {item.period && (
                      <div className="md:text-right pl-12 md:pl-0">
                        <span className="inline-block text-xs font-mono text-neutral-500 uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          {item.period}
                        </span>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 4: WORK / BUILT SO FAR
          02 BUILT SO FAR
          TOOLS, PRODUCTS, AND EXPERIMENTS
          Things I've made.
          -------------------------------------------------- */}
      <section
        id="work"
        className="bg-[#080808] py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeIn duration={800}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                  02
                </span>
                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">
                  /
                </span>
                <SectionLabel label="BUILT SO FAR" />
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Things I've
              <br />
              made.
            </h2>
          </FadeIn>

          {/* Projects Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => {
              // Get status pill styles
              let statusClasses = "bg-neutral-800 text-neutral-300 border-neutral-700";
              if (project.status === "In Research" || project.status === "Research") {
                statusClasses = "bg-amber-950/40 text-amber-300 border-amber-900/50";
              } else if (project.status === "Building") {
                statusClasses = "bg-blue-950/40 text-blue-300 border-blue-900/50";
              } else if (project.status === "Live") {
                statusClasses = "bg-emerald-950/40 text-emerald-300 border-emerald-900/50";
              }

              return (
                <div key={project.id} className="h-full">
                  <FadeIn delay={150 * idx} duration={800} className="h-full">
                    <div className="liquid-glass border border-white/10 rounded-2xl p-8 flex flex-col justify-between h-full hover:border-white/20 transition-all duration-300 group">
                      <div>
                        {/* Top Category & Number */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-400 tracking-widest uppercase font-mono">
                            {project.category || project.tag}
                          </span>
                          {project.number && (
                            <span className="text-xs font-mono text-neutral-500">
                              {project.number}
                            </span>
                          )}
                          {project.status && (
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-xs font-medium border ${statusClasses}`}
                            >
                              {project.status}
                            </span>
                          )}
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-xl font-medium text-white mt-4 group-hover:text-gray-200 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-3 leading-relaxed font-light">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Stack Pills */}
                        {project.stack && project.stack.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-6">
                            {project.stack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-400 font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* External Link or Action */}
                        <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors cursor-none clickable font-light"
                            >
                              <span>Open project</span>
                              <span className="text-amber-400">↗</span>
                            </a>
                          ) : (
                            <span className="text-xs text-neutral-500 font-mono">
                              Exploration in progress
                            </span>
                          )}

                          <span className="text-xs text-gray-600 font-mono">
                            {project.id.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 5: ACADEMIC WORK
          ACADEMIC WORK
          BACHELOR'S / MASTER'S / DIPLOMA
          Academic work.
          -------------------------------------------------- */}
      <section
        id="academic"
        className="bg-[#050506] py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeIn duration={800}>
            <div className="flex flex-col gap-2">
              <SectionLabel label="ACADEMIC WORK" />
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Bachelor's &
              <br />
              Master's.
            </h2>
          </FadeIn>

          {/* Academic Projects Display */}
          <div className="mt-14 space-y-8">
            {/* MASTER'S PROJECT CARD */}
            <FadeIn delay={200} duration={800}>
              <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono tracking-wider">
                    <GraduationCap size={14} />
                    <span>MASTER’S PROJECT</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Presentation Action */}
                    <button
                      onClick={() => setIsPresentationModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs text-white bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-lg border border-white/10 transition cursor-none clickable font-medium"
                    >
                      <span>Presentation</span>
                      <span className="text-amber-400">↗</span>
                    </button>

                    {/* Research Paper Link */}
                    <a
                      href="https://doi.org/10.26634/jste.11.2.18969"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-lg border border-white/10 transition cursor-none clickable font-medium"
                    >
                      <span>Research paper</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                  Effect of Partial Replacement of Coarse Aggregates by Pre-Treated Plastic on Concrete
                </h3>

                <p className="text-sm md:text-base text-neutral-400 mt-4 leading-relaxed font-light max-w-3xl">
                  An investigation into using pre-treated plastic as a partial replacement for coarse aggregates in concrete. Evaluates mechanical characteristics across 0% to 20% replacement levels under IS 10262 guidelines.
                </p>

                <div className="text-xs text-neutral-500 font-mono mt-3">
                  Basaveshwar Engineering College (Autonomous) • Guide: Prof. G.S. Hiremath
                </div>

                {/* Embedded Interactive Slide Deck for Presentation */}
                <div className="mt-8 border-t border-white/10 pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                        Embedded Slide Deck (13 Slides)
                      </span>
                    </div>
                    <button
                      onClick={() => setIsPresentationModalOpen(true)}
                      className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-none clickable transition font-mono"
                    >
                      <span>Expand to Fullscreen</span>
                      <Maximize2 size={12} />
                    </button>
                  </div>

                  {/* Inline presentation viewer */}
                  <PresentationViewer />
                </div>
              </div>
            </FadeIn>

            {/* BACHELOR'S PROJECT CARD */}
            <FadeIn delay={400} duration={800}>
              <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition-all duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono tracking-wider mb-4">
                  <GraduationCap size={14} />
                  <span>BACHELOR’S PROJECT</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                  Aerial Survey by Total Station using Specially Designed Lab-Scale Drone
                </h3>

                <p className="text-sm md:text-base text-neutral-400 mt-4 leading-relaxed font-light max-w-3xl">
                  A multidisciplinary project sponsored by the Technical Education Quality Improvement Programme of the Government of India (TEQIP).
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-500">
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">
                    TEQIP Sponsored (Govt of India)
                  </span>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/5 text-neutral-400">
                    Drone Aerial Telemetry
                  </span>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/5 text-neutral-400">
                    Total Station Geodetic Control
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 6: SKILLS / DISCIPLINES
          -------------------------------------------------- */}
      <section
        id="skills"
        className="bg-black py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeIn duration={800}>
            <div className="mb-3"><SectionLabel label="SKILLS" /></div>
            <h2
              className="text-3xl md:text-4xl font-normal mt-4 text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Two disciplines. One system.
            </h2>
          </FadeIn>

          {/* Cards Grid */}
          <div className="lg:grid lg:grid-cols-2 gap-8 mt-16">
            {SKILL_CARDS.map((card, idx) => (
              <div key={idx} className="mb-8 lg:mb-0">
                <FadeIn delay={idx * 200} duration={800}>
                  <div className="liquid-glass border border-white/10 rounded-2xl p-8 hover:border-white/25 transition-all duration-300 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-light tracking-tight text-white">
                        {card.title}
                      </h3>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                        {card.iconType === "Triangle" ? (
                          <Triangle className="text-white w-6 h-6 stroke-[1.5]" />
                        ) : (
                          <Cpu className="text-white w-6 h-6 stroke-[1.5]" />
                        )}
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-1">
                      {card.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="text-sm text-gray-400 py-3 border-b border-white/5 flex items-center justify-between hover:text-white transition-colors group/skill"
                        >
                          <span className="font-light">{skill}</span>
                          <span className="text-[10px] text-gray-600 font-mono tracking-wider opacity-0 group-hover/skill:opacity-100 transition-opacity">
                            SYSTEM.VERIFIED
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 7: CONTACT
          -------------------------------------------------- */}
      <section
        id="contact"
          className="bg-black py-20 lg:py-28 px-6 md:px-12 lg:px-16 min-height-[60vh] flex items-center justify-center border-t border-white/5"
        >
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={800}>
              <div className="mb-3"><SectionLabel label="CONTACT" /></div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-normal mt-4 text-white leading-tight"
                style={{ letterSpacing: "-0.04em" }}
              >
                Let's build something.
              </h2>
              <p className="text-gray-400 mt-6 max-w-xl text-center mx-auto text-base md:text-lg leading-relaxed font-light">
                Whether it's a structural system, an AI product, or the intersection
                of both — I'm interested in projects that push disciplines forward.
              </p>
            </FadeIn>

            <FadeIn delay={200} duration={800}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                <a
                  href="mailto:rahulbevinagidad@yahoo.com"
                  className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-xl font-medium text-lg text-center hover:bg-gray-100 transition duration-200 cursor-none clickable block"
                >
                  Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-bevinagidad-7a4278229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto liquid-glass border border-white/20 text-white px-10 py-4 rounded-xl font-medium text-lg text-center hover:bg-white hover:text-black transition duration-300 cursor-none clickable flex items-center justify-center gap-2"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ExternalLink size={14} className="opacity-60" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

      {/* --------------------------------------------------
          FOOTER
          -------------------------------------------------- */}
      <footer className="bg-black border-t border-white/5 py-8 px-6 md:px-12 lg:px-16 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-neutral-600">
          <div>© 2026 Rahul Bevinagidad</div>
        </div>
      </footer>

      {/* Fullscreen Presentation Deck Modal */}
      {isPresentationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-5xl">
            <PresentationViewer
              isModal={true}
              onClose={() => setIsPresentationModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
