"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export const HowItWorks = () => {
  const t = useTranslations("howItWorksSteps");

  const steps = [
    { key: "deploy", title: t("steps.step1.title"), description: t("steps.step1.description") },
    { key: "train", title: t("steps.step2.title"), description: t("steps.step2.description") },
    { key: "evolve", title: t("steps.step3.title"), description: t("steps.step3.description") },
  ];
  return (
    <section id="how-it-works" className="py-14 px-6 bg-cream border-y border-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="font-heading text-caption text-blue-primary font-bold tracking-[0.08em] uppercase mb-4">
            {t("label")}
          </h2>
          <h3 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            {t("heading")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500 flex flex-col relative"
            >
              <span className="font-heading text-3xl font-bold text-sand/40 group-hover:text-blue-primary/40 transition-colors duration-300 mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center justify-center h-44 mb-4">
                <Image
                  src={`/illustrations/${step.key}-removebg-preview.png`}
                  alt={step.title}
                  width={200}
                  height={200}
                  className="scale-[1.4]"
                  loading="lazy"
                />
              </div>

              <h4 className="font-heading text-xl font-bold text-charcoal mb-3">
                {step.title}
              </h4>
              <p className="text-text-muted leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
