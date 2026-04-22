"use client";

import { FadeIn } from "./ScrollAnimations";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <FadeIn delay={0}>
          <p className="font-cormorant text-gold text-sm sm:text-base tracking-[0.3em] uppercase mb-3">
            {subtitle}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={`font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
            light ? "text-text-dark" : "text-cream"
          }`}
        >
          {title}
        </h2>
      </FadeIn>
      {align === "center" && (
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
        </FadeIn>
      )}
      {description && (
        <FadeIn delay={0.3}>
          <p
            className={`mt-5 max-w-2xl font-inter text-sm sm:text-base leading-relaxed ${
              align === "center" ? "mx-auto" : ""
            } ${light ? "text-text-muted" : "text-text-secondary"}`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
