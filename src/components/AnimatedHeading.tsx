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
          <div key={lineIndex} className="block leading-tight">
            {chars.map((char, charIndex) => {
              // delay = (lineIndex * lineChars * 30ms) + (charIndex * 30ms)
              const charDelay = lineIndex * lineChars * 30 + charIndex * 30;

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
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}
