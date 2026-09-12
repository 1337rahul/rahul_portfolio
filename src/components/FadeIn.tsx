/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";

interface FadeInProps {
  key?: string | number;
  delay?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
  yOffset?: number;
}

export default function FadeIn({
  delay = 0,
  duration = 800,
  children,
  className = "",
  yOffset = 20,
}: FadeInProps) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        opacity: isRendered ? 1 : 0,
        transform: isRendered ? "translateY(0)" : `translateY(${yOffset}px)`,
      }}
    >
      {children}
    </div>
  );
}
