"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const othersRotations = [
  "rotate-[-1.5deg] translate-x-1",
  "rotate-[1deg] -translate-x-0.5",
  "rotate-[-0.8deg] translate-x-1.5",
  "rotate-[1.8deg] -translate-x-1",
  "rotate-[-1.2deg] translate-x-0.5",
];

export const Manifesto = () => {
  const t = useTranslations("manifesto");
  const cardRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleScroll = () => {
      const rect = card.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Don't start until the card top reaches 40% from the top
      if (rect.top > windowH * 0.4) {
        setProgress(0);
        return;
      }

      // Animate over 3x the viewport height for a very slow expansion
      const start = windowH * 0.4;
      const raw = (start - rect.top) / (windowH * 3);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const borderRadius = `${(1 - progress) * 16}px`;
  const sectionPadding = `${(1 - progress) * 24}px`;
  // Interpolate from 80rem (1280px) to a value large enough to be effectively unconstrained
  const maxWidth = `${1280 + progress * 2720}px`;

  const othersKeys = ["others1", "others2", "others3", "others4", "others5"] as const;

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden transition-[padding] duration-700 ease-out"
      style={{ paddingLeft: sectionPadding, paddingRight: sectionPadding }}
    >
      <div
        ref={cardRef}
        className="relative mx-auto bg-charcoal px-8 sm:px-14 py-16 sm:py-20 overflow-hidden transition-[border-radius,max-width] duration-700 ease-out"
        style={{ borderRadius, maxWidth }}
      >
        {/* Faded AUTONYMO text watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          <span
            className="font-display font-extrabold tracking-tighter leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(6rem, 14vw, 16rem)", color: "rgba(255, 255, 255, 0.04)" }}
          >
            AUTONYMO
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left: copy */}
          <div className="flex-1 min-w-0">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-tight text-cream mb-10">
              {t("heading1")}
              <br />
              {t.rich("heading2", {
                hi: (chunks) => (
                  <span className="inline-block bg-cream text-charcoal px-3 py-0.5 rounded-lg">{chunks}</span>
                ),
              })}
            </h2>

            <div className="space-y-6 max-w-xl">
              <p className="text-lg sm:text-xl leading-relaxed text-cream/60">
                {t("paragraph1")}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed text-cream/60">
                <span className="text-cream font-semibold">{t("weDo")}</span>{" "}{t("paragraph2")}
              </p>
            </div>

            {t("closing") && (
              <p className="mt-16 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-cream">
                {t("closing")}
              </p>
            )}
          </div>

          {/* Right: comparison stack */}
          <div className="mt-14 lg:mt-0 w-full lg:w-[340px] shrink-0 flex flex-col gap-8">
            {/* Crumpled "others" stack */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cream/30 mb-4">
                {t("othersLabel")}
              </p>
              <div className="relative flex flex-col gap-1.5">
                {othersKeys.map((key, i) => (
                  <div
                    key={key}
                    className={`relative px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] ${othersRotations[i]}`}
                  >
                    <span className="text-sm text-cream/30 line-through decoration-cream/20">
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solid "us" card */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cream/30 mb-4">
                {t("usLabel")}
              </p>
              <div className="relative px-5 py-5 rounded-xl bg-cream/[0.08] border border-cream/[0.12] shadow-[0_0_40px_rgba(245,240,235,0.04)]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cream">
                    <svg className="h-3 w-3 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-cream leading-snug">
                      {t("usTitle")}
                    </p>
                    <p className="mt-1 text-sm text-cream/50 leading-relaxed">
                      {t("usDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
