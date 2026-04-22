"use client";

import dynamic from "next/dynamic";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

const Cal = dynamic(() => import("@calcom/embed-react"), { ssr: false });

export default function BookACall() {
  const t = useTranslations("bookCall");

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-clip">
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-[80rem] mx-auto relative">
          <div className="text-center mb-12">
            <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
              {t("hero.label")}
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl leading-[1.08] mb-4">
              {t("hero.heading")}
            </h1>
            <p className="text-lg leading-relaxed text-text-muted max-w-2xl mx-auto mb-6">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {(["item1", "item2", "item3"] as const).map((key, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                  <span className="text-charcoal text-sm font-medium">{t(`hero.badges.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-sand overflow-hidden">
            <Cal
              calLink="arnau-fabrega-nscdht/meeting-arnau-fabrega-artifexone"
              config={{
                layout: "month_view",
                theme: "light",
              }}
              style={{
                width: "100%",
                height: "700px",
                overflow: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              {t("whatHappensNext.label")}
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              {t("whatHappensNext.heading")}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["step1", "step2", "step3"] as const).map((key, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-sand"
              >
                <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                  {t(`whatHappensNext.steps.${key}.number`)}
                </span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{t(`whatHappensNext.steps.${key}.title`)}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{t(`whatHappensNext.steps.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
