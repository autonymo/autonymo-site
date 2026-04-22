"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const othersRotations = [
  "rotate-[-1.5deg] translate-x-1",
  "rotate-[1deg] -translate-x-0.5",
  "rotate-[-0.8deg] translate-x-1.5",
  "rotate-[1.8deg] -translate-x-1",
  "rotate-[-1.2deg] translate-x-0.5",
];

// Length of pinned scroll track after the section enters the viewport,
// expressed as a fraction of the viewport height. 0.8 = ~0.8 screens of
// scroll during which the card animates from boxed to edge-to-edge.
const SCROLL_RANGE_VH = 0.8;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const Manifesto = () => {
  const t = useTranslations("manifesto");
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      pin.style.setProperty("--p", "1");
      pin.style.setProperty("--p-eased", "1");
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const track = rect.height - windowH;
      const raw = track > 0 ? -rect.top / track : 0;
      const p = Math.min(1, Math.max(0, raw));
      pin.style.setProperty("--p", p.toString());
      pin.style.setProperty("--p-eased", easeOutCubic(p).toString());
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const othersKeys = ["others1", "others2", "others3", "others4", "others5"] as const;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100vh + ${SCROLL_RANGE_VH * 100}vh)` }}
    >
      <div
        ref={pinRef}
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={
          {
            // defaults in case JS hasn't run yet (SSR / hydration flash)
            ["--p" as string]: "0",
            ["--p-eased" as string]: "0",
            paddingLeft: "calc((1 - var(--p-eased)) * 24px)",
            paddingRight: "calc((1 - var(--p-eased)) * 24px)",
          } as React.CSSProperties
        }
      >
        <div
          className="relative mx-auto bg-charcoal px-8 sm:px-14 py-16 sm:py-20 overflow-hidden w-full"
          style={{
            borderRadius: "calc((1 - var(--p-eased)) * 16px)",
            maxWidth: "min(calc(80rem + var(--p) * (100vw - 80rem)), 100vw)",
          }}
        >
          {/* Faded ARTIFEXONE text watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
            aria-hidden="true"
          >
            <span
              className="font-display font-extrabold tracking-tighter leading-none whitespace-nowrap"
              style={{ fontSize: "clamp(6rem, 14vw, 16rem)", color: "rgba(255, 255, 255, 0.04)" }}
            >
              ARTIFEXONE
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
              {/* Voided "others" stack */}
              <div>
                <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cream/35">
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M2 2l8 8M10 2l-8 8" />
                  </svg>
                  {t("othersLabel")}
                </p>
                <div className="relative flex flex-col gap-2">
                  {othersKeys.map((key, i) => (
                    <div
                      key={key}
                      className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-dashed border-cream/10 overflow-hidden ${othersRotations[i]}`}
                      style={{ background: `rgba(255,255,255,${0.03 - i * 0.004})` }}
                    >
                      {/* × marker tile */}
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border border-cream/20">
                        <svg
                          className="h-2.5 w-2.5 text-cream/45"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.6}
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M2 2l8 8M10 2l-8 8" />
                        </svg>
                      </div>

                      <span className="relative z-10 text-sm text-cream/40 line-through decoration-cream/25">
                        {t(key)}
                      </span>

                      {/* Diagonal cancel slash across the whole card */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        aria-hidden="true"
                      >
                        <div className="absolute left-[-10%] top-1/2 h-px w-[120%] rotate-[-4deg] bg-cream/15" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solid "us" card */}
              <div>
                <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cream/40">
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream/60 opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream" />
                  </span>
                  {t("usLabel")}
                </p>

                <div className="relative">
                  {/* Ambient outer glow */}
                  <div
                    className="pointer-events-none absolute -inset-2 rounded-[1.25rem] opacity-70 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(60% 80% at 50% 0%, rgba(245,240,235,0.22), transparent 70%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Gradient hairline border */}
                  <div
                    className="relative rounded-2xl p-px"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(245,240,235,0.45) 0%, rgba(245,240,235,0.12) 35%, rgba(245,240,235,0.04) 100%)",
                    }}
                  >
                    <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-charcoal px-6 py-6">
                      {/* Inner radial highlight */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(120% 100% at 0% 0%, rgba(245,240,235,0.10), transparent 55%)",
                        }}
                        aria-hidden="true"
                      />

                      <div className="relative flex items-start gap-4">
                        {/* Activity glyph tile */}
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-charcoal shadow-[0_10px_30px_-8px_rgba(245,240,235,0.45)]">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M3 12h3.5l2.2-7 4 14 2.3-7H21" />
                          </svg>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-lg font-semibold leading-snug tracking-tight text-cream">
                            {t("usTitle")}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-cream/60">
                            {t("usDescription")}
                          </p>
                        </div>
                      </div>

                      {/* Compounding bars */}
                      <div
                        className="relative mt-6 flex h-7 items-end gap-1.5"
                        aria-hidden="true"
                      >
                        {[0.18, 0.28, 0.4, 0.55, 0.74, 0.96].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-cream/10 to-cream/70"
                            style={{ height: `${h * 100}%` }}
                          />
                        ))}
                      </div>
                    </div>
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
