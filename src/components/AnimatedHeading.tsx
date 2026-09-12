/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, CSSProperties } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export default function AnimatedHeading({
  text,
  className = "",
  delay = 200,
  style,
}: AnimatedHeadingProps) {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTriggered(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const lines = text.split("\n");

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const chars = Array.from(line);
        const lineChars = chars.length;

        return (
          <div key={lineIndex} className="block leading-tight flex flex-wrap gap-[0.3em]">
            {line.split(" ").map((word, wordIndex) => {
              const charOffset = line.split(" ").slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0);
              const chars = Array.from(word);

              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {chars.map((char, charIndex) => {
                    // delay = (lineIndex * lineChars * 30ms) + ((charOffset + charIndex) * 30ms)
                    const charDelay = lineIndex * 1500 + (charOffset + charIndex) * 30;

                    return (
                      <span
                        key={charIndex}
                        className="inline-block transition-all duration-500 ease-out"
                        style={{
                          opacity: isTriggered ? 1 : 0,
                          transform: isTriggered ? "translateX(0)" : "translateX(-18px)",
                          transitionDelay: `${charDelay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}
