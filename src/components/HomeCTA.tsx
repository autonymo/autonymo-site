"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const HomeCTA = () => {
  const t = useTranslations("cta");

  return (
    <section className="py-14 px-3 sm:px-6 bg-cream">
      <div className="max-w-[80rem] mx-auto p-6 sm:p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden shadow-lg">
        <div className="flex flex-col items-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t("title")} <br />
            {t("titleLine2")}
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <Link
            href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"
            className="inline-flex items-center justify-center font-medium tracking-tight text-charcoal text-base sm:text-lg bg-white rounded-xl px-6 sm:px-8 py-4 hover:bg-white/90 transition-colors active:scale-95"
          >
            <span className="sm:hidden">{t("buttonShort")}</span>
            <span className="hidden sm:inline">{t("button")}</span>
            <ArrowUpRight className="ml-2 w-5 h-5 text-charcoal" />
          </Link>
        </div>
      </div>
    </section>
  );
};
