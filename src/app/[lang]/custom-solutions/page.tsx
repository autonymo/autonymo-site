"use client";

import { Link } from "@/i18n/navigation";
import { CustomIllustration } from "@/components/CardIllustrations";
import {
  Cpu,
  Code2,
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  Clock,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/*  Custom Workflow Illustration  */
function WorkflowIllustration({ alt }: { alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="rounded-2xl border border-sand overflow-hidden flex items-center justify-center">
        <CustomIllustration alt={alt} />
      </div>
    </motion.div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-sand">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer">
          <span className="font-display text-base font-semibold text-charcoal pr-4">{question}</span>
          <ChevronDown className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
              <p className="text-text-muted text-sm leading-relaxed pb-5">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function CustomSolutions() {
  const t = useTranslations("customSolutionsPage");

  const solutions = [
    { title: t("solutions.items.item1.title"), desc: t("solutions.items.item1.description") },
    { title: t("solutions.items.item2.title"), desc: t("solutions.items.item2.description") },
    { title: t("solutions.items.item3.title"), desc: t("solutions.items.item3.description") },
    { title: t("solutions.items.item4.title"), desc: t("solutions.items.item4.description") },
    { title: t("solutions.items.item5.title"), desc: t("solutions.items.item5.description") },
  ];

  const faqs = [
    { q: t("faq.items.item1.question"), a: t("faq.items.item1.answer") },
    { q: t("faq.items.item2.question"), a: t("faq.items.item2.answer") },
    { q: t("faq.items.item3.question"), a: t("faq.items.item3.answer") },
    { q: t("faq.items.item4.question"), a: t("faq.items.item4.answer") },
    { q: t("faq.items.item5.question"), a: t("faq.items.item5.answer") },
    { q: t("faq.items.item6.question"), a: t("faq.items.item6.answer") },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-clip">
      {/*  T1: HERO  */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 left-0 w-[141%] h-[1px] bg-warm-gray/[0.08] origin-top-left rotate-45" />
            <div className="absolute top-0 right-0 w-[141%] h-[1px] bg-warm-gray/[0.08] origin-top-right -rotate-45" />
          </div>
        </div>
        <div className="max-w-[80rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                {t("hero.label")}
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                {t("hero.heading")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                {t("hero.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions" className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-colors active:scale-95">
                  <span className="sm:hidden">{t("hero.ctaPrimaryShort")}</span>
                  <span className="hidden sm:inline">{t("hero.ctaPrimary")}</span>
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
                <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3.5 font-medium tracking-tight text-charcoal text-base rounded-xl bg-white border border-charcoal/15 hover:border-charcoal/30 transition-colors active:scale-95">
                  {t("hero.ctaSecondary")}
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <WorkflowIllustration alt={t("hero.imageAlt")} />
            </div>
          </div>
        </div>
      </section>

      {/*  T2: SOCIAL PROOF BAR  */}
      {/* Skipped, no real client data yet */}

      {/*  T3: THE PROBLEM  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">{t("problem.label")}</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              {t("problem.heading")}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Clock, title: t("problem.items.item1.title"), desc: t("problem.items.item1.description") },
              { icon: Code2, title: t("problem.items.item2.title"), desc: t("problem.items.item2.description") },
              { icon: Cpu, title: t("problem.items.item3.title"), desc: t("problem.items.item3.description") },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="p-6 rounded-xl bg-white border border-sand flex flex-col">
                <item.icon className="w-5 h-5 text-charcoal/30 mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T4: WHY WE'RE DIFFERENT  */}
      <WhyWeDifferent
        industryExample={t("solutions.promise")}
      />

      {/*  T5: SOLUTION PORTFOLIO  */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">{t("solutions.label")}</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t("solutions.heading")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="h-full p-6 rounded-xl bg-white border border-sand">
                  <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-3">{sol.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T6: HOW TO GET STARTED  */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-[80rem] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">{t("howToStart.label")}</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">{t("howToStart.heading")}</h3>
            <div className="flex flex-col items-center gap-4 mb-12">
              {[
                { label: t("howToStart.steps.step1.label"), desc: t("howToStart.steps.step1.description") },
                { label: t("howToStart.steps.step2.label"), desc: t("howToStart.steps.step2.description") },
                { label: t("howToStart.steps.step3.label"), desc: t("howToStart.steps.step3.description") },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  {i > 0 && <div className="w-px h-6 bg-sand mb-4" />}
                  <ScrollReveal delay={i * 0.1} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-5 sm:px-8 py-4 rounded-xl bg-cream border border-sand w-full sm:w-auto">
                    <span className="font-display text-sm font-bold text-accent-blue uppercase">{step.label}</span>
                    <span className="text-text-muted text-sm">{step.desc}</span>
                  </ScrollReveal>
                </div>
              ))}
            </div>
            <Link href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions" className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-colors active:scale-95">
              <span className="sm:hidden">{t("hero.ctaPrimaryShort")}</span>
              <span className="hidden sm:inline">{t("hero.ctaPrimary")}</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/*  T7: PROCESS  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">{t("howItWorks.label")}</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t("howItWorks.heading")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([1, 2, 3] as const).map((n, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500 flex flex-col">
                <span className="font-display text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/5 px-3 py-1 rounded-full self-start mb-5">{t(`howItWorks.steps.step${n}.label`)}</span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{t(`howItWorks.steps.step${n}.title`)}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{t(`howItWorks.steps.step${n}.description`)}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T8: WHAT TO EXPECT  */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-[80rem] mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">{t("benchmarks.label")}</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t("benchmarks.heading")}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              t("benchmarks.items.item1.description"),
              t("benchmarks.items.item2.description"),
              t("benchmarks.items.item3.description"),
              t("benchmarks.items.item4.description"),
            ].map((text, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="flex items-start gap-3 p-4 rounded-xl bg-cream border border-sand">
                <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-charcoal leading-relaxed">{text}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T9: FAQ  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">{t("faq.label")}</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-12">{t("faq.heading")}</h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/*  T10: FINAL CTA  */}
      <FinalCTA
        verticalPhrase={t("finalCta.verticalPhrase")}
        heading={t("finalCta.heading")}
        subtitle={t("finalCta.subtitle")}
      />
    </div>
  );
}
