"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";

export const HowItWorks = () => {
  const t = useTranslations("howItWorksSteps");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      key: "step1",
      phase: t("steps.step1.phase"),
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
      tags: ["No 6-month diagnostics", "No 80-slide decks"],
    },
    {
      key: "step2",
      phase: t("steps.step2.phase"),
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
      tags: ["No rip-and-replace", "No dead pilots"],
    },
    {
      key: "step3",
      phase: t("steps.step3.phase"),
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
      tags: ["No handoffs, ever", "Compound kicks in"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 px-6 sm:py-28 bg-cream border-y border-sand relative overflow-hidden"
    >
      <div className="max-w-[80rem] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-sm text-warm-gray font-bold tracking-[0.08em] uppercase mb-4"
          >
            {t("label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4 whitespace-nowrap"
          >
            {t("heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-text-muted italic"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Steps — single grid for circles + text, lines overflow into gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <div key={step.key} className="flex flex-col overflow-visible">
              {/* Circle + connector */}
              <div className="relative flex justify-center items-center mb-8 overflow-visible">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-charcoal flex items-center justify-center shrink-0 relative z-10"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.12, 0, 0.12],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-charcoal"
                  />
                  <span className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Dotted line: spans from circle right edge across the gap to next circle left edge */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] z-0 overflow-visible"
                    style={{ left: "calc(50% + 2.5rem)", width: "calc(100% - 2.5rem)" }}
                  >
                    <svg width="100%" height="2" className="overflow-visible">
                      <line
                        x1="0" y1="1" x2="100%" y2="1"
                        stroke="#1A1A1A"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                        strokeLinecap="round"
                        className="animate-dash-flow"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Step content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="font-display text-xs font-bold tracking-[0.08em] uppercase text-warm-gray mb-3">
                  {step.phase}
                </p>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.7 + index * 0.15 + tagIndex * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block px-3 py-1.5 text-xs font-medium text-text-muted bg-sand/40 rounded-full border border-sand/60"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
