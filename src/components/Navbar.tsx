/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onSectionClick?: (id: string) => void;
}

export default function Navbar({ onSectionClick }: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (onSectionClick) {
      onSectionClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = ["About", "Career", "Work", "Academic", "Skills", "Contact"];

  return (
    <nav
      className={`transition-all duration-300 w-full left-0 right-0 z-50 ${
        isScrolled
          ? "fixed top-0 py-3 bg-black/40 backdrop-blur-md border-b border-white/5 shadow-2xl px-6 md:px-12 lg:px-16"
          : "absolute top-0 pt-6 px-6 md:px-12 lg:px-16"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between border border-white/10">
          {/* Left Logo */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="cursor-none clickable focus:outline-none flex items-center justify-center"
            aria-label="Home"
          >
            <svg viewBox="0 0 120 120" className="w-8 h-8 md:w-9 md:h-9">
              <circle cx="60" cy="60" r="55" fill="white" />
              <circle cx="60" cy="60" r="53" fill="black" />
              <g stroke="white" strokeWidth="4" fill="none" strokeLinecap="round">
                <path d="M 25 40 L 45 40 A 12.5 12.5 0 0 1 45 65 L 25 65" />
                <path d="M 45 65 A 12.5 12.5 0 0 1 57.5 77.5 L 57.5 90" />
                <path d="M 65 40 L 80 40 A 12.5 12.5 0 0 1 80 65 L 65 65" />
                <path d="M 65 65 L 85 65 A 12.5 12.5 0 0 1 85 90 L 65 90" />
              </g>
            </svg>
          </button>

          {/* Center Links (hidden on mobile, visible md+) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item.toLowerCase())}
                className="text-[10px] lg:text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-200 cursor-none clickable focus:outline-none font-mono"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick("contact")}
              className="bg-white text-black px-4 py-1.5 md:px-6 md:py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200 cursor-none clickable focus:outline-none"
            >
              Say Hello
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white p-1 focus:outline-none cursor-none clickable"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[76px] bg-black/95 border-b border-white/10 backdrop-blur-xl z-40 py-6 px-6 flex flex-col gap-2 transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.toLowerCase())}
              className="text-left text-sm uppercase tracking-wider text-white/80 hover:text-white py-2.5 border-b border-white/5 transition-colors font-mono"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
