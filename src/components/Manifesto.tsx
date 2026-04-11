"use client";

import { useTranslations } from "next-intl";

export const Manifesto = () => {
  const t = useTranslations("manifesto");

  return (
    <section className="relative py-24 sm:py-32 px-6 bg-cream border-t border-sand/50 overflow-hidden">
      {/* Faded AUTONYMO text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span
          className="font-display font-extrabold tracking-tighter leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 14vw, 16rem)", color: "rgba(26, 26, 26, 0.04)" }}
        >
          AUTONYMO
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Lead statement */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-charcoal mb-8">
          {t("heading1")}
          <br />
          {t("heading2")}
        </h2>

        <div className="space-y-8 max-w-3xl">
          <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
            {t("paragraph1")}
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
            <span className="text-charcoal font-semibold">{t("weDo")}</span>{" "}{t("paragraph2")}
          </p>
        </div>

        {/* Closing punch */}
        <p className="mt-16 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-charcoal">
          {t("closing")}
        </p>
      </div>
    </section>
  );
};
