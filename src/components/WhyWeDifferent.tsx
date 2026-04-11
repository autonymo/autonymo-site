"use client";

import { useTranslations } from "next-intl";
import { X, Check } from "lucide-react";

interface WhyWeDifferentProps {
  industryExample: string;
  vendorItems?: string[];
  ourItems?: string[];
}

export default function WhyWeDifferent({ industryExample, vendorItems: vendorItemsProp, ourItems: ourItemsProp }: WhyWeDifferentProps) {
  const t = useTranslations("whyWeDifferent");

  const vendorItems = vendorItemsProp ?? [
    t("defaultVendor.item1"),
    t("defaultVendor.item2"),
    t("defaultVendor.item3"),
    t("defaultVendor.item4"),
  ];

  const ourItems = ourItemsProp ?? [
    t("defaultOur.item1"),
    t("defaultOur.item2"),
    t("defaultOur.item3"),
    t("defaultOur.item4"),
  ];

  return (
    <section className="py-24 px-6 bg-cream border-y border-sand">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
            {t("label")}
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
            {t("heading")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left - What Most Vendors Do */}
          <div className="p-8 rounded-2xl bg-white border border-sand">
            <h4 className="font-display text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-6">
              {t("vendorTitle")}
            </h4>
            <div className="space-y-4">
              {vendorItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-text-muted text-[15px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - What We Do */}
          <div className="p-8 rounded-2xl bg-charcoal text-white">
            <h4 className="font-display text-sm font-bold text-white/60 uppercase tracking-wider mb-6">
              {t("ourTitle")}
            </h4>
            <div className="space-y-4 mb-8">
              {ourItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-blue" />
                  </div>
                  <span className="text-white/80 text-[15px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm leading-relaxed border-t border-white/10 pt-6">
              {industryExample}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
