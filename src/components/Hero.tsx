"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Threads from "@/components/Threads";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RealEstateIllustration, DentalIllustration, CustomIllustration } from "@/components/CardIllustrations";
import { LogoBar } from "@/components/LogoBar";

export const Hero = () => {
  const t = useTranslations();

  const osCards = [
    {
      brand: t("hero.cards.realEstate.brand"),
      industry: t("hero.cards.realEstate.industry"),
      intro: t("hero.cards.realEstate.intro"),
      color: "bg-[#E8F0FE]",
      href: "/real-estate-os" as const,
      illustration: <RealEstateIllustration alt={t("hero.cards.realEstate.title")} />,
    },
    {
      brand: t("hero.cards.dental.brand"),
      industry: t("hero.cards.dental.industry"),
      intro: t("hero.cards.dental.intro"),
      color: "bg-[#F5F5F7]",
      href: "https://keishal.com",
      illustration: <DentalIllustration alt={t("hero.cards.dental.title")} />,
    },
  ];

  return (
    <div className="bg-cream rounded-b-3xl border-b border-sand/30 relative overflow-hidden">
      <section className="relative pt-24 pb-12 px-5 sm:pt-44 sm:pb-16 sm:px-6 lg:pt-52 lg:pb-20">
        <div className="max-w-[80rem] mx-auto">
          <div className="text-center">
            <div className="relative inline-block max-w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[140%] h-[140%] bg-cream/90 backdrop-blur-2xl rounded-full z-0" />

              <h1 className="relative z-10 font-heading text-[1.75rem] leading-[1.15] font-bold tracking-tight text-charcoal sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>

              {/* CTA Buttons */}
              <div className="relative z-10 mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="https://cal.com/arnau-fabrega-nscdht/artifexone-ai-partnership"
                    className="inline-flex w-full sm:w-auto items-center justify-center font-medium tracking-tight text-white text-base sm:text-lg bg-charcoal rounded-xl px-8 py-3.5 sm:py-3 cursor-pointer"
                  >
                    <span className="sm:hidden">{t("hero.ctaShort")}</span>
                    <span className="hidden sm:inline">{t("hero.cta")}</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href={{ pathname: "/", hash: "how-it-works" }}
                    className="relative inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 sm:py-3 font-medium tracking-tight text-charcoal rounded-xl bg-white/80 border border-sand text-base sm:text-lg hover:bg-white hover:border-charcoal/30 transition-[background-color,border-color,transform] active:scale-95 cursor-pointer"
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
        <div className="absolute inset-0 z-0 pointer-events-none will-change-transform">
          <Threads
            color={[0.64, 0.62, 0.59]}
            amplitude={0.65}
            distance={0.04}
            enableMouseInteraction={false}
          />
        </div>
      </section>

      {/* Featured Platform Cards — Two-Group Split */}
      <section id="solutions" className="pb-12 px-5 sm:pb-16 sm:px-6 bg-transparent relative z-10 will-change-transform">
        <div className="max-w-[80rem] mx-auto">
          <LogoBar />

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 mt-12 sm:mt-16">
            {/* Left group — industry-specific OSes */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <h2 className="font-heading text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-text-muted whitespace-nowrap">
                  {t("hero.groupHeadings.productized")}
                </h2>
                <div className="flex-1 h-px bg-sand" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                {osCards.map((card, index) => (
                  <Link
                    key={index}
                    href={card.href}
                    className="flex bg-white rounded-xl border border-sand p-4 sm:p-6 relative flex-col h-full overflow-hidden group hover:border-warm-gray transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                      <div className="min-w-0">
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                          {card.brand}
                        </h3>
                        <p className="font-heading text-sm text-text-muted mt-0.5">
                          {card.industry}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-warm-gray shrink-0 mt-1 group-hover:text-charcoal/70 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-[color,transform] duration-300" />
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-4 sm:mb-6 min-h-0 sm:min-h-[3rem] line-clamp-3">
                      {card.intro}
                    </p>

                    <div className={`mt-auto rounded-2xl ${card.color} border border-sand/50 overflow-hidden`}>
                      {card.illustration}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right group — AI Partnership */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <h2 className="font-heading text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-text-muted whitespace-nowrap">
                  {t("hero.groupHeadings.partnership")}
                </h2>
                <div className="flex-1 h-px bg-sand" />
              </div>

              <Link
                href="/custom-solutions"
                className="flex flex-col bg-charcoal rounded-xl p-4 sm:p-6 relative overflow-hidden group hover:bg-black transition-colors duration-300 cursor-pointer flex-1 min-h-[22rem]"
              >
                {/* radial accent overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(45,127,249,0.22),transparent_60%)]"
                />
                {/* faint grid */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px]"
                />

                <div className="relative flex items-start justify-between gap-3 mb-3 sm:mb-4">
                  <div className="min-w-0">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {t("hero.cards.custom.title")}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 shrink-0 mt-1 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-[color,transform] duration-300" />
                </div>

                <p className="relative text-white/70 text-[15px] leading-relaxed mb-4 sm:mb-6">
                  {t("hero.cards.custom.intro")}
                </p>

                <div className="relative mt-auto rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
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
