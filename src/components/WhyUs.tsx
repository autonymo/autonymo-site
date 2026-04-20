"use client";

import { memo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

const ease = [0.22, 1, 0.36, 1] as const;

// Delays precomputed (no closures allocated per render).
const LEFT_FADE = [0.3, 0.4, 0.5, 0.6];
const LEFT_STRIKE = [0.9, 1.02, 1.14, 1.26];
const RIGHT_REVEAL = [1.7, 1.82, 1.94, 2.06];

const KineticHeadline = memo(function KineticHeadline({
  prefix,
  strike,
  middle,
  emphasis,
  suffix,
  play,
}: {
  prefix: string;
  strike: string;
  middle: string;
  emphasis: string;
  suffix: string;
  play: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <h2 className="font-display text-3xl sm:text-4xl md:text-[3.25rem] md:leading-[1.08] font-bold text-charcoal leading-tight tracking-tight">
      <span>{prefix} </span>
      <span className="relative inline-block whitespace-nowrap align-baseline">
        <motion.span
          className="relative text-charcoal"
          initial={{ color: "#1A1A1A" }}
          animate={play ? { color: "#6B6560" } : undefined}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.55, ease }}
        >
          {strike}
        </motion.span>
        {/* GPU-composited strike: scaleX transform instead of SVG pathLength */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]"
        >
          <motion.span
            className="block h-full origin-left rounded-full bg-text-muted/80"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            animate={play ? { scaleX: 1 } : undefined}
            transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.15, ease }}
          />
        </span>
      </span>
      <span>{middle}</span>
      <span className="relative inline-block whitespace-nowrap align-baseline">
        <motion.span
          className="relative font-extrabold"
          initial={{ fontWeight: 700 }}
          animate={play ? { fontWeight: 800 } : undefined}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.95, ease }}
        >
          {emphasis}
        </motion.span>
        {/* Underline: keep SVG curve but reveal via transform (GPU) */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 -bottom-1 sm:-bottom-1.5 h-[0.28em] origin-left"
          initial={reduce ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          animate={play ? { scaleX: 1, opacity: 1 } : undefined}
          transition={{
            scaleX: { duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.85, ease },
            opacity: { duration: 0.2, delay: reduce ? 0 : 0.85 },
          }}
        >
          <svg
            viewBox="0 0 100 6"
            preserveAspectRatio="none"
            className="w-full h-full overflow-visible"
          >
            <path
              d="M 1 4 Q 25 1, 50 3 T 99 2"
              fill="none"
              stroke="#2D7FF9"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </span>
      <span>{suffix}</span>
    </h2>
  );
});

type VendorRowProps = {
  item: string;
  index: number;
  isInView: boolean;
  reduce: boolean;
  active: boolean;
};

const VendorRow = memo(function VendorRow({
  item,
  index,
  isInView,
  reduce,
  active,
}: VendorRowProps) {
  return (
    <motion.li
      data-active={active}
      className="flex items-start gap-3"
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.35, delay: reduce ? 0 : LEFT_FADE[index], ease }}
    >
      <span
        className={[
          "mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full border shrink-0 transition-colors duration-300",
          active ? "border-text-muted/80 text-text-muted" : "border-warm-gray/50 text-warm-gray",
        ].join(" ")}
      >
        <span className="pulse-on-active inline-flex">
          <X className="w-3 h-3" strokeWidth={2.5} />
        </span>
      </span>
      <span className="relative leading-relaxed">
        <span
          className={[
            "block transition-colors duration-300",
            active ? "text-text-muted" : "text-warm-gray",
          ].join(" ")}
        >
          {item}
        </span>
        {/* GPU-composited strike */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px]"
        >
          <motion.span
            className={[
              "block h-full origin-left rounded-full bg-text-muted transition-opacity duration-200",
              active ? "opacity-100" : "opacity-60",
            ].join(" ")}
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : undefined}
            transition={{
              duration: reduce ? 0 : 0.32,
              delay: reduce ? 0 : LEFT_STRIKE[index],
              ease,
            }}
          />
        </span>
      </span>
    </motion.li>
  );
});

type OurRowProps = {
  item: string;
  index: number;
  isInView: boolean;
  reduce: boolean;
  active: boolean;
  onEnter: (i: number) => void;
  onLeave: () => void;
  onTap: (i: number) => void;
};

const OurRow = memo(function OurRow({
  item,
  index,
  isInView,
  reduce,
  active,
  onEnter,
  onLeave,
  onTap,
}: OurRowProps) {
  return (
    <motion.li
      className="group relative flex items-start gap-3 pl-3 -ml-3 rounded-md cursor-default"
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: reduce ? 0 : RIGHT_REVEAL[index], ease }}
      onMouseEnter={() => onEnter(index)}
      onMouseLeave={onLeave}
      onClick={() => onTap(index)}
    >
      <span
        aria-hidden
        className={[
          "absolute left-0 top-1 bottom-1 w-px rounded-full transition-colors duration-300",
          active ? "bg-blue-primary/70" : "bg-blue-primary/0",
        ].join(" ")}
      />
      <span className="font-heading text-[11px] tabular-nums text-text-muted tracking-[0.1em] mt-1 w-5 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <motion.span
        className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-charcoal text-white shrink-0 shadow-[0_2px_10px_rgba(45,127,249,0.25)]"
        initial={reduce ? { scale: 1 } : { scale: 0 }}
        animate={isInView ? { scale: 1 } : undefined}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
          delay: reduce ? 0 : RIGHT_REVEAL[index] + 0.1,
        }}
      >
        <Check className="w-3 h-3" strokeWidth={3} />
      </motion.span>
      <span className="text-charcoal text-base leading-relaxed font-medium">{item}</span>
    </motion.li>
  );
});

export const WhyUs = () => {
  const t = useTranslations("whyUs");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduce = useReducedMotion() ?? false;
  const [hovered, setHovered] = useState<number | null>(null);

  const vendorItems = [
    t("vendorItems.item1"),
    t("vendorItems.item2"),
    t("vendorItems.item3"),
    t("vendorItems.item4"),
  ];

  const ourItems = [
    t("ourItems.item1"),
    t("ourItems.item2"),
    t("ourItems.item3"),
    t("ourItems.item4"),
  ];

  const handleEnter = (i: number) => setHovered(i);
  const handleLeave = () => setHovered(null);
  const handleTap = (i: number) => {
    setHovered(i);
    window.setTimeout(() => setHovered((cur) => (cur === i ? null : cur)), 1500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-6 bg-cream border-t border-sand/50 overflow-hidden [contain:layout_paint_style] [content-visibility:auto] [contain-intrinsic-size:1px_800px]"
    >
      {/* Static ledger-grid backdrop — rendered once, no animations */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[80rem] mx-auto">
        <motion.div
          className="mb-12 md:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease }}
        >
          <span className="font-display text-[11px] sm:text-xs text-accent-blue font-bold tracking-[0.14em] uppercase mb-4 block">
            {t("label")}
          </span>
          <KineticHeadline
            prefix={t("heading.prefix")}
            strike={t("heading.strike")}
            middle={t("heading.middle")}
            emphasis={t("heading.emphasis")}
            suffix={t("heading.suffix")}
            play={isInView}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-[11px] tracking-[0.14em] uppercase font-semibold text-text-muted whitespace-nowrap">
                {t("vendorTitle")}
              </span>
              <div className="flex-1 h-px bg-sand" />
            </div>

            <ul className="space-y-4">
              {vendorItems.map((item, i) => (
                <VendorRow
                  key={i}
                  item={item}
                  index={i}
                  isInView={isInView}
                  reduce={reduce}
                  active={hovered === i}
                />
              ))}
            </ul>
          </div>

          <div className="hidden md:flex relative self-stretch justify-center items-center">
            <div className="absolute inset-y-0 w-px bg-sand" />
            <span className="relative z-10 font-heading text-[10px] tracking-[0.18em] text-text-muted bg-cream border border-sand rounded-full px-2.5 py-1">
              VS
            </span>
          </div>

          <div className="md:hidden relative flex items-center justify-center my-2">
            <div className="absolute left-0 right-0 h-px bg-sand" />
            <span className="relative z-10 font-heading text-[10px] tracking-[0.18em] text-text-muted bg-cream border border-sand rounded-full px-2.5 py-1">
              VS
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-[11px] tracking-[0.14em] uppercase font-semibold text-accent-blue whitespace-nowrap">
                {t("ourTitle")}
              </span>
              <div className="flex-1 h-px bg-sand" />
            </div>

            <ul className="space-y-4">
              {ourItems.map((item, i) => (
                <OurRow
                  key={i}
                  item={item}
                  index={i}
                  isInView={isInView}
                  reduce={reduce}
                  active={hovered === i}
                  onEnter={handleEnter}
                  onLeave={handleLeave}
                  onTap={handleTap}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
