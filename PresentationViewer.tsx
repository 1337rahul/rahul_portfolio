/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  ExternalLink,
  Award,
  Layers,
  FlaskConical,
  BarChart3,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { PRESENTATION_SLIDES, PresentationSlide } from "../slidesData";

interface PresentationViewerProps {
  initialSlide?: number;
  onClose?: () => void;
  isModal?: boolean;
}

export default function PresentationViewer({
  initialSlide = 1,
  onClose,
  isModal = false,
}: PresentationViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlide - 1);
  const [isFullscreen, setIsFullscreen] = useState(isModal);

  const currentSlide: PresentationSlide = PRESENTATION_SLIDES[currentSlideIndex];
  const totalSlides = PRESENTATION_SLIDES.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div
      className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 bg-black/95 p-4 md:p-8 flex flex-col justify-between"
          : "liquid-glass border border-white/15 w-full shadow-2xl"
      }`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
            M.Tech Thesis Slide Deck • BEC Civil Dept
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-xs text-neutral-400 font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10">
            {String(currentSlideIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>

          <a
            href="https://doi.org/10.26634/jste.11.2.18969"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-none clickable"
          >
            <span>Research Paper</span>
            <ExternalLink size={12} />
          </a>

          {!isModal ? (
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition cursor-none clickable"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Slide Deck"}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-xs font-mono px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition cursor-none clickable"
            >
              Close ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Slide Presentation Stage */}
      <div className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex flex-col justify-between p-6 md:p-10 bg-gradient-to-b from-[#0c0c0e] to-[#050507] text-white">
        {/* Slide Top Metadata */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-amber-400/90 mb-1">
              Slide {String(currentSlide.slideNumber).padStart(2, "0")} {currentSlide.subtitle ? `· ${currentSlide.subtitle}` : ""}
            </div>
            <h3 className="text-lg md:text-2xl font-medium tracking-tight text-white leading-snug">
              {currentSlide.title}
            </h3>
          </div>
          <span className="text-3xl md:text-5xl font-light text-neutral-800 select-none font-mono">
            #{String(currentSlide.slideNumber).padStart(2, "0")}
          </span>
        </div>

        {/* Slide Dynamic Body Content */}
        <div className="my-auto py-4">
          {/* SLIDE TYPE 1: TITLE */}
          {currentSlide.content.type === "title" && (
            <div className="flex flex-col items-center justify-center text-center py-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs tracking-wider mb-6">
                <Award size={14} />
                <span>POST-GRADUATE STRUCTURAL RESEARCH</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white max-w-2xl leading-snug mb-6">
                Effect of Partial Replacement of Coarse Aggregate by Pre-Treated Waste Plastic on Strength of Concrete
              </h2>
              <div className="w-16 h-0.5 bg-amber-400/60 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg w-full bg-white/5 p-4 rounded-xl border border-white/10 text-xs md:text-sm">
                <div>
                  <div className="text-neutral-500 uppercase font-mono text-[10px]">Candidate</div>
                  <div className="text-white font-medium">{currentSlide.content.author}</div>
                  <div className="text-neutral-400 text-xs">M.Tech Structural Engineering</div>
                </div>
                <div>
                  <div className="text-neutral-500 uppercase font-mono text-[10px]">Research Guide</div>
                  <div className="text-white font-medium">{currentSlide.content.guide}</div>
                  <div className="text-neutral-400 text-xs">Professor, Dept of Civil Eng.</div>
                </div>
              </div>
              <div className="text-xs text-neutral-500 mt-4 font-mono">
                {currentSlide.content.college}
              </div>
            </div>
          )}

          {/* SLIDE TYPE 2: OVERVIEW */}
          {currentSlide.content.type === "overview" && (
            <div className="max-w-2xl mx-auto py-2">
              <div className="text-center font-mono text-base md:text-lg text-amber-300 mb-6 font-medium tracking-wide">
                {currentSlide.content.headline}
              </div>
              <div className="space-y-3">
                {currentSlide.content.bullets?.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 transition"
                  >
                    <span className="text-xs font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/10">
                      0{idx + 1}
                    </span>
                    <span className="text-sm text-neutral-300 leading-relaxed font-light">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE 3: WHY CARDS */}
          {currentSlide.content.type === "why-cards" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Layers size={16} />
                </div>
                <div className="font-medium text-white text-sm mb-2">Construction Industry</div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  World's largest consumer of raw natural resources. Natural stone aggregate extraction rapidly exhausts riverbeds and quarries.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <TrendingUp size={16} />
                </div>
                <div className="font-medium text-white text-sm mb-2">Stone Quarrying</div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Generates massive fine dust pollution, destroys natural topographies, causes occupational pulmonary disorders, and increases carbon footprints.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <FlaskConical size={16} />
                </div>
                <div className="font-medium text-white text-sm mb-2">Plastics Industry</div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Millions of tons of non-biodegradable bottle caps dumped annually. Repurposing as structural coarse aggregates provides a circular lifecycle.
                </p>
              </div>
            </div>
          )}

          {/* SLIDE TYPE 4: WHY STATS */}
          {currentSlide.content.type === "why-stats" && (
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="liquid-glass border border-white/10 rounded-xl p-4 text-center">
                <p className="text-base md:text-lg font-light text-white italic">
                  "{currentSlide.content.headline}"
                </p>
                <div className="text-xs text-neutral-500 mt-2 font-mono">— The Guardian / Statista</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-light text-amber-300 font-mono">320 Mt</div>
                  <div className="text-xs text-neutral-400 mt-1">Cement Produced in India (Annual)</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-light text-white font-mono">2,300 Mt</div>
                  <div className="text-xs text-neutral-400 mt-1">Cement Produced in China</div>
                </div>
              </div>

              <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-4">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                  Health & Environmental Findings
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-300 font-light">
                  <li>• 26.7% of surveyed quarry workers complained of chronic respiratory & cough issues</li>
                  <li>• 22.2% suffered persistent eye irritation from airborne granite quarry particulates</li>
                  <li>• Pre-treated waste plastics offer a viable pathway to reduce quarrying demand</li>
                </ul>
              </div>
            </div>
          )}

          {/* SLIDE TYPE 5: TABLE */}
          {currentSlide.content.type === "table" && (
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-neutral-950">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/10 uppercase font-mono text-[10px] text-neutral-300 tracking-wider">
                  <tr>
                    <th className="p-3">Characteristics</th>
                    <th className="p-3">Observed Effect</th>
                    <th className="p-3 hidden sm:table-cell">Structural Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {currentSlide.content.table?.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition">
                      <td className="p-3 font-medium text-white">{row.characteristic}</td>
                      <td className="p-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${
                            row.effect.includes("Increases") || row.effect.includes("Optimal")
                              ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40"
                              : row.effect.includes("Decreases")
                              ? "bg-amber-950/40 text-amber-300 border border-amber-800/40"
                              : "bg-white/5 text-neutral-300"
                          }`}
                        >
                          {row.effect}
                        </span>
                      </td>
                      <td className="p-3 text-neutral-400 hidden sm:table-cell font-light">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* SLIDE TYPE 6: OBJECTIVES */}
          {currentSlide.content.type === "objectives" && (
            <div className="max-w-2xl mx-auto space-y-4 py-2">
              {currentSlide.content.bullets?.map((obj, idx) => {
                const [title, ...rest] = obj.split(":");
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-300 flex items-center justify-center font-mono font-medium text-sm flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">{title}</div>
                      <div className="text-xs text-neutral-400 leading-relaxed font-light">
                        {rest.join(":")}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* SLIDE TYPE 7: METHODOLOGY */}
          {currentSlide.content.type === "methodology" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-2">
              {currentSlide.content.bullets?.map((stage, idx) => {
                const [stageHeader, ...details] = stage.split("—");
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded bg-amber-400/20 text-amber-300 font-mono text-[11px] flex items-center justify-center font-semibold">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-medium text-white">{stageHeader}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-light pl-7">
                      {details.join("—")}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* SLIDE TYPE 8: COMPRESSIVE STRENGTH BAR CHART */}
          {currentSlide.content.type === "chart-compressive" && (
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
                <span>Replacement Level (%)</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-blue-500 rounded-sm inline-block" /> 7 Days</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm inline-block" /> 14 Days</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-amber-400 rounded-sm inline-block" /> 28 Days</span>
                </div>
              </div>

              <div className="space-y-2.5 bg-neutral-950 p-4 rounded-xl border border-white/10">
                {currentSlide.content.chartData?.map((item: any, idx: number) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-white">
                      <span>{item.replacement}</span>
                      <span className={item.highlight ? "text-amber-400 font-mono font-bold" : "text-neutral-400 font-mono"}>
                        28d: {item.day28} MPa {item.highlight ? "★ PEAK" : ""}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 h-5">
                      {/* 7 Days bar */}
                      <div
                        className="bg-blue-500/80 rounded-sm flex items-center px-2 text-[10px] font-mono text-white"
                        style={{ width: `${(item.day7 / 30) * 100}%` }}
                      >
                        {item.day7}
                      </div>
                      {/* 14 Days bar */}
                      <div
                        className="bg-emerald-500/80 rounded-sm flex items-center px-2 text-[10px] font-mono text-white"
                        style={{ width: `${(item.day14 / 30) * 100}%` }}
                      >
                        {item.day14}
                      </div>
                      {/* 28 Days bar */}
                      <div
                        className={`${item.highlight ? "bg-amber-400 text-black font-semibold" : "bg-amber-400/80 text-white"} rounded-sm flex items-center px-2 text-[10px] font-mono`}
                        style={{ width: `${(item.day28 / 30) * 100}%` }}
                      >
                        {item.day28}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-xs text-amber-300 font-mono">
                {currentSlide.content.headline}
              </div>
            </div>
          )}

          {/* SLIDE TYPE 9: DUAL CHART TENSILE & FLEXURE */}
          {currentSlide.content.type === "chart-dual" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto py-2">
              {/* Split Tensile */}
              <div className="bg-neutral-950 p-4 rounded-xl border border-white/10">
                <div className="text-xs font-medium text-white mb-2 flex items-center justify-between">
                  <span>Split Tensile Strength (MPa)</span>
                  <span className="text-[10px] font-mono text-amber-400">Peak: 15% (2.32)</span>
                </div>
                <div className="space-y-2 mt-3">
                  {currentSlide.content.chartData?.splitTensile.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className="w-12 font-mono text-neutral-400 text-[11px]">{item.replacement}</span>
                      <div className="flex-1 bg-white/5 rounded-sm h-4 overflow-hidden">
                        <div
                          className="bg-rose-500/80 h-full rounded-sm flex items-center px-2 font-mono text-[10px] text-white"
                          style={{ width: `${(item.value / 3.0) * 100}%` }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flexure */}
              <div className="bg-neutral-950 p-4 rounded-xl border border-white/10">
                <div className="text-xs font-medium text-white mb-2 flex items-center justify-between">
                  <span>Flexure Strength (MPa)</span>
                  <span className="text-[10px] font-mono text-neutral-400">IS 516 Testing</span>
                </div>
                <div className="space-y-2 mt-3">
                  {currentSlide.content.chartData?.flexure.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className="w-12 font-mono text-neutral-400 text-[11px]">{item.replacement}</span>
                      <div className="flex-1 bg-white/5 rounded-sm h-4 overflow-hidden">
                        <div
                          className="bg-indigo-500/80 h-full rounded-sm flex items-center px-2 font-mono text-[10px] text-white"
                          style={{ width: `${(item.value / 4.5) * 100}%` }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SLIDE TYPE 10: SLUMP WORKABILITY */}
          {currentSlide.content.type === "chart-slump" && (
            <div className="max-w-xl mx-auto space-y-4 py-2">
              <div className="text-center text-xs font-mono text-amber-300">
                {currentSlide.content.headline}
              </div>
              <div className="bg-neutral-950 p-5 rounded-xl border border-white/10 space-y-3">
                {currentSlide.content.chartData?.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <span className="w-28 font-mono text-neutral-300 text-[11px]">{item.replacement}</span>
                    <div className="flex-1 bg-white/5 rounded-sm h-5 overflow-hidden">
                      <div
                        className="bg-sky-500/80 h-full rounded-sm flex items-center px-2 font-mono text-[11px] text-white font-medium"
                        style={{ width: `${(item.slump / 140) * 100}%` }}
                      >
                        {item.slump} mm
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-400 text-center font-light">
                Non-porous bottle cap surfaces do not absorb mix water, progressively increasing workability and ease of compaction.
              </p>
            </div>
          )}

          {/* SLIDE TYPE 11: FUTURESCOPE */}
          {currentSlide.content.type === "list" && (
            <div className="max-w-2xl mx-auto space-y-3 py-2">
              {currentSlide.content.bullets?.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition"
                >
                  <span className="text-amber-400 font-mono text-sm">→</span>
                  <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* SLIDE TYPE 12: REFERENCES */}
          {currentSlide.content.type === "references" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[280px] overflow-y-auto pr-2 py-2">
              {currentSlide.content.bullets?.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-neutral-400 font-mono leading-relaxed"
                >
                  {ref}
                </div>
              ))}
            </div>
          )}

          {/* SLIDE TYPE 13: THANK YOU */}
          {currentSlide.content.type === "thankyou" && (
            <div className="text-center py-10">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4">
                THANK YOU
              </h2>
              <p className="text-sm text-neutral-400 font-light mb-6">
                Find this Presentation, Report and Further Resources Online at
              </p>
              <a
                href="https://raahul.super.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-amber-300 bg-amber-400/10 border border-amber-400/30 px-5 py-2.5 rounded-xl hover:bg-amber-400/20 transition cursor-none clickable"
              >
                <span>https://raahul.super.site/</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Slide Bottom Controls and Thumbnails */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-none clickable"
            >
              <ChevronLeft size={14} />
              <span>Previous</span>
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-none clickable"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
            {PRESENTATION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-none clickable ${
                  idx === currentSlideIndex
                    ? "w-6 bg-amber-400"
                    : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
                title={`Jump to Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
