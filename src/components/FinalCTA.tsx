"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  verticalPhrase: string;
  heading?: string;
  subtitle?: string;
  calLink?: string;
}

export default function FinalCTA({ verticalPhrase, heading, subtitle, calLink }: FinalCTAProps) {
  const t = useTranslations("finalCta");

  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-[80rem] mx-auto rounded-2xl bg-charcoal text-white relative overflow-hidden">
        <div className="p-6 sm:p-12 md:p-20 pb-8 md:pb-10 relative z-10 text-center flex flex-col items-center min-h-[320px] sm:min-h-[400px]">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {heading ?? t("defaultHeading", { verticalPhrase })}
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
            {subtitle ?? t("defaultSubtitle")}
          </p>
          <Link
            href={calLink ?? "https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"}
            className="inline-flex items-center justify-center gap-2 font-semibold tracking-tight text-charcoal text-base sm:text-lg bg-white rounded-xl px-6 sm:px-10 py-4 hover:opacity-90 transition-colors active:scale-95"
          >
            <span className="sm:hidden">{t("buttonShort")}</span>
            <span className="hidden sm:inline">{t("button")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-auto pt-8">
            {[t("checks.noCommitment"), t("checks.keepEverything"), t("checks.limitedSpots")].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/40" />
                <span className="text-white/50 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
