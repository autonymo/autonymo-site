"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-clip">
      {/* Hero */}
      <section className="relative pt-28 pb-32 px-6 sm:pt-40 sm:pb-40 bg-cream overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          <span
            className="font-display font-extrabold tracking-tighter leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(6rem, 14vw, 16rem)", color: "rgba(26, 26, 26, 0.03)" }}
          >
            AUTONYMO
          </span>
        </div>

        <div className="max-w-[80rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-6 block font-display">
                {t("hero.label")}
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.05]">
                {t("hero.heading1")}
                <br />
                <span className="text-charcoal/40">{t("hero.heading2")}</span>
              </h1>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-text-muted sm:text-xl">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-24 px-6 bg-cream border-t border-sand/50">
        <div className="max-w-4xl mx-auto">
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            {t("theShift.label")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-10">
            {t("theShift.heading")}
          </h2>
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-text-muted">
            <p>
              {t("theShift.paragraph1")}
            </p>
            <p>
              {t("theShift.paragraph2")}
            </p>
            <p className="text-charcoal font-medium">
              {t("theShift.closing")}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-cream border-t border-sand/50">
        <div className="max-w-[80rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
                {t("whoWeAre.label")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-8">
                {t("whoWeAre.heading")}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-text-muted">
                <p>
                  {t("whoWeAre.paragraph1")}
                </p>
                <p>
                  {t("whoWeAre.paragraph2")}
                </p>
                <p>
                  {t("whoWeAre.paragraph3")}
                </p>
                <p className="text-charcoal font-medium">
                  {t("whoWeAre.paragraph4")}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-8 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-sand/40 mb-4 block">{t("whoWeAre.highlights.item1.number")}</span>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">{t("whoWeAre.highlights.item1.title")}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t("whoWeAre.highlights.item1.description")}</p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-sand/40 mb-4 block">{t("whoWeAre.highlights.item2.number")}</span>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">{t("whoWeAre.highlights.item2.title")}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t("whoWeAre.highlights.item2.description")}</p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-sand/40 mb-4 block">{t("whoWeAre.highlights.item3.number")}</span>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">{t("whoWeAre.highlights.item3.title")}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t("whoWeAre.highlights.item3.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            {t("whyWeExist.label")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            {t("whyWeExist.heading")}
          </h2>
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-white/60 max-w-3xl mx-auto">
            <p>
              {t("whyWeExist.paragraph1")}
            </p>
            <p>
              {t("whyWeExist.paragraph2")}
            </p>
            <p className="text-white font-medium">
              {t("whyWeExist.closing")}
            </p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-6 bg-cream border-b border-sand/50">
        <div className="max-w-[80rem] mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
              {t("theTeam.label")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              {t("theTeam.heading")}
            </h2>
            <p className="text-lg leading-relaxed text-text-muted">
              {t("theTeam.description1")}
            </p>
            <p className="text-lg leading-relaxed text-charcoal font-medium mt-4">
              {t("theTeam.description2")}
            </p>
          </div>

          {/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div>
              <div className="relative p-3">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent-blue/40 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent-blue/40 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent-blue/40 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent-blue/40 rounded-br-2xl" />
                <Image
                  src="/images/arnau-fabrega.png"
                  alt={t("theTeam.founder.imageAlt")}
                  width={560}
                  height={480}
                  className="rounded-xl object-cover w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                {t("theTeam.founder.name")}
              </h3>
              <span className="text-accent-blue text-sm font-semibold tracking-wide uppercase mb-6">
                {t("theTeam.founder.role")}
              </span>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
                  {t("theTeam.founder.bio1")}
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
                  {t("theTeam.founder.bio2")}
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-charcoal font-medium">
                  {t("theTeam.founder.bio3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto rounded-2xl bg-charcoal text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent-blue/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 pointer-events-none select-none opacity-[0.06] blur-sm" aria-hidden="true">
            <Image src="/logo.png" alt="" width={400} height={400} />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {t("cta.heading1")}
                <br />
                {t("cta.heading2")}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                {t("cta.description")}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <Link
                href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"
                className="inline-flex items-center justify-center font-medium tracking-tight text-charcoal text-base sm:text-lg bg-white rounded-xl px-6 sm:px-8 py-4 hover:bg-white/90 transition-colors active:scale-95 cursor-pointer"
              >
                <span className="sm:hidden">{t("cta.buttonShort")}</span>
                <span className="hidden sm:inline">{t("cta.button")}</span>
              </Link>
              <span className="text-white/30 text-sm">{t("cta.noCommitment")}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
