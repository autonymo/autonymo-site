"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Threads from "@/components/Threads";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const Hero = () => {
  const t = useTranslations();

  const cards = [
    {
      title: "Real Estate OS",
      intro: "Capture new owners before your competitors, respond to buyer leads in seconds, and automate contracts and coordination. Your agents focus on selling.",
      color: "bg-[#E8F0FE]",
      href: "/real-estate-os" as const,
    },
    {
      title: "Dental OS",
      intro: "Reactivate dormant patients via WhatsApp, automate booking and reminders, and fill empty chairs. Your front desk stops chasing, patients start coming back.",
      color: "bg-[#F5F5F7]",
      href: "/dental-os" as const,
    },
    {
      title: "Custom Solutions",
      intro: "We audit your operations, find where time and money are leaking, and build AI systems around how you actually work. No templates, no forced migrations.",
      color: "bg-[#F0F4F8]",
      href: "/custom-solutions" as const,
    },
  ];

  return (
    <div className="bg-cream rounded-b-3xl border-b border-sand/30 relative overflow-hidden">
      <section className="relative pt-32 pb-40 px-6 sm:pt-44 sm:pb-48 lg:pt-52 lg:pb-60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-cream/80 rounded-full -z-10" />

              <h1 className="relative z-10 font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                {t("hero.title")}
              </h1>

              <p className="relative z-20 mt-8 text-lg leading-8 text-charcoal/80 max-w-2xl mx-auto sm:text-xl">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="relative z-20 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                  See How It Works
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
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

      {/* Featured Platform Cards */}
      <section id="solutions" className="pb-16 px-6 bg-transparent relative z-10 -mt-20 sm:-mt-24 lg:-mt-32 will-change-transform">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {cards.map((card, index) => (
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

                  <div className={`mt-auto aspect-[4/3] rounded-2xl ${card.color} border border-sand/50 overflow-hidden relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-[1px] bg-charcoal/5 rotate-45" />
                      <div className="w-1/2 h-[1px] bg-charcoal/5 -rotate-45" />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                      <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                      <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-white/50 rounded-xl border border-white/50" />
                    <div className="absolute top-1/4 right-4 w-12 h-12 bg-white/80 rounded-lg shadow-sm" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
