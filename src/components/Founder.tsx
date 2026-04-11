"use client";

import { useTranslations } from "next-intl";

export const Founder = () => {
  const t = useTranslations("founder");
  return (
    <section className="py-24 sm:py-32 px-6 bg-cream border-t border-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            {t("label")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            {t("heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-2xl bg-sand/40 border border-sand flex items-center justify-center overflow-hidden">
              <span className="text-warm-gray text-sm font-medium tracking-wide uppercase">
                {t("photoPlaceholder")}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
              {t("name")}
            </h3>
            <span className="text-accent-blue text-sm font-semibold tracking-wide uppercase mb-6">
              {t("role")}
            </span>

            <blockquote className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-accent-blue/20 rounded-full" />
              <p className="text-lg sm:text-xl leading-relaxed text-text-muted pl-4">
                {t("bio1")}
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-text-muted pl-4 mt-6">
                {t("bio2")}
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-charcoal font-medium pl-4 mt-6">
                {t("bio3")}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
