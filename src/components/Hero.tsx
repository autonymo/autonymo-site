"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Threads from "@/components/Threads";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RealEstateIllustration, DentalIllustration, IndustrialIllustration, CustomIllustration } from "@/components/CardIllustrations";
import { Settings2 } from "lucide-react";

export const Hero = () => {
  const t = useTranslations();

  const osCards = [
    {
      title: t("hero.cards.realEstate.title"),
      intro: t("hero.cards.realEstate.intro"),
      color: "bg-[#E8F0FE]",
      href: "/real-estate-os" as const,
      illustration: <RealEstateIllustration alt={t("hero.cards.realEstate.title")} />,
    },
    {
      title: t("hero.cards.dental.title"),
      intro: t("hero.cards.dental.intro"),
      color: "bg-[#F5F5F7]",
      href: "/dental-clinic-os" as const,
      illustration: <DentalIllustration alt={t("hero.cards.dental.title")} />,
    },
    {
      title: t("hero.cards.industrial.title"),
      intro: t("hero.cards.industrial.intro"),
      color: "bg-[#FEF3C7]",
      href: "/industrial-os" as const,
      illustration: <IndustrialIllustration alt={t("hero.cards.industrial.title")} />,
    },
  ];

  return (
    <div className="bg-cream rounded-b-3xl border-b border-sand/30 relative overflow-hidden">
      <section className="relative pt-32 pb-40 px-6 sm:pt-44 sm:pb-48 lg:pt-52 lg:pb-60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-cream/90 backdrop-blur-2xl rounded-full z-0" />

              <h1 className="relative z-10 font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                {t("hero.title")}
              </h1>

              <p className="relative z-10 mt-8 text-lg leading-8 text-charcoal/80 max-w-2xl mx-auto sm:text-xl">
                {t("hero.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"
                  className="inline-flex items-center justify-center font-medium tracking-tight text-white text-lg bg-charcoal rounded-xl px-8 py-3 cursor-pointer"
                >
                  {t("hero.cta")}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={{ pathname: "/", hash: "how-it-works" }}
                  className="relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-tight text-charcoal rounded-xl bg-white/80 border border-sand text-lg hover:bg-white hover:border-charcoal/30 transition-[background-color,border-color,transform] active:scale-95 cursor-pointer"
                >
                  {t("hero.seeHowItWorks")}
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        </div>

        {/* Threads Overlay */}
        <div className="absolute -top-[15%] left-0 right-0 bottom-0 z-0 pointer-events-none will-change-transform">
          <Threads
            color={[0.64, 0.62, 0.59]}
            amplitude={0.65}
            distance={0.04}
            enableMouseInteraction={false}
          />
        </div>
      </section>

      {/* Featured Platform Cards — Two-Group Split */}
      <section id="solutions" className="pb-16 px-6 bg-transparent relative z-10 -mt-20 sm:-mt-24 lg:-mt-32 will-change-transform">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
            {/* Group 1: Industry OS Products */}
            <div>
              <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-3 block">
                {t("hero.groupHeadings.purposeBuilt")}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {osCards.map((card, index) => (
                  <div key={index}>
                    <Link
                      href={card.href}
                      className="flex bg-white rounded-xl border border-sand p-6 relative flex-col h-full overflow-hidden group hover:border-warm-gray transition-colors duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <h3 className="font-heading text-2xl font-bold text-charcoal">
                          {card.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-warm-gray shrink-0 mt-1 group-hover:text-charcoal/70 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-[color,transform] duration-300" />
                      </div>

                      <p className="text-text-muted text-sm leading-relaxed mb-8 min-h-[3rem] line-clamp-3">
                        {card.intro}
                      </p>

                      <div className={`mt-auto rounded-2xl ${card.color} border border-sand/50 overflow-hidden`}>
                        {card.illustration}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2: Custom Solutions */}
            <div>
              <span className="font-display text-caption text-warm-gray font-bold tracking-[0.08em] uppercase mb-3 block">
                {t("hero.groupHeadings.tailored")}
              </span>
              <Link
                href="/custom-solutions"
                className="flex flex-col h-[calc(100%-2rem)] bg-charcoal rounded-xl p-6 relative overflow-hidden group hover:bg-black transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Settings2 className="w-4 h-4 text-amber-500" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 shrink-0 mt-1 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-[color,transform] duration-300" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  {t("hero.cards.custom.title")}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {t("hero.cards.custom.intro")}
                </p>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <CustomIllustration alt={t("hero.cards.custom.title")} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
