"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger the entrance, in milliseconds. */
  delay?: number;
  /** Render as something other than a div (e.g. "li"). */
  as?: "div" | "li";
};

/**
 * Gently fades and lifts its children into view the first time they enter the
 * viewport. Honors prefers-reduced-motion by rendering fully visible at once.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Visibility is revealed via the observer callback (never synchronously in
    // the effect body). Users with prefers-reduced-motion still get revealed
    // content — globals.css neutralizes the transition so it appears instantly.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
