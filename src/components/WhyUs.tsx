"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";

const ease = [0.22, 1, 0.36, 1] as const;

export const WhyUs = () => {
  const t = useTranslations("whyUs");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-6 bg-cream border-t border-sand/50">
      <div className="max-w-[80rem] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            {t("label")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            {t("heading")}
          </h2>
        </motion.div>

        {/* Stacked cards container */}
        <div className="relative md:min-h-[28rem]">
          {/* Vendor card — behind, rotated, faded */}
          <motion.div
            className="relative md:absolute md:top-8 md:left-0 md:w-[46%] z-10 p-8 rounded-xl bg-white border border-sand"
            initial={{ opacity: 0, x: -30 }}
            animate={
              isInView
                ? { opacity: 0.55, x: 0, rotate: -2, scale: 0.92 }
                : {}
            }
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <h3 className="font-display text-sm font-bold text-text-muted uppercase tracking-widest mb-6">
              {t("vendorTitle")}
            </h3>
            <ul className="space-y-4">
              {vendorItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-warm-gray mt-0.5">✕</span>
                  <span className="text-text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our card — front, elevated, dominant */}
          <motion.div
            className="relative md:absolute md:top-0 md:right-0 md:w-[56%] z-20 -mt-6 md:mt-0 p-8 md:p-10 rounded-xl bg-charcoal text-white shadow-lg md:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, rotate: 1, scale: 1 }
                : {}
            }
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6">
              {t("ourTitle")}
            </h3>
            <ul className="space-y-4">
              {ourItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent-blue mt-0.5">✓</span>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stat badge — centered between cards */}
          <motion.div
            className="relative md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 z-30 mt-8 md:mt-0"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7, ease }}
          >
            <p className="text-sm sm:text-base text-text-muted leading-relaxed text-center md:text-left max-w-md">
              {t("bottomNote")}{" "}
              <span className="text-charcoal font-semibold">{t("bottomNoteHighlight")}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
