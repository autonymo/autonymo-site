"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, Globe, ArrowUpRight, Menu, X, Building2, Handshake, Check } from "lucide-react";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import Image from "next/image";

export const Navbar = () => {
  const t = useTranslations("nav");
  const tLang = useTranslations("languages");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  type MenuState = null | "solutions" | "lang" | "more" | "mobile";
  const [openMenu, setOpenMenu] = useState<MenuState>(null);
  const isSolutionsOpen = openMenu === "solutions";
  const isLangOpen = openMenu === "lang";
  const isMoreOpen = openMenu === "more";
  const isMobileOpen = openMenu === "mobile";
  const navRef = useRef<HTMLDivElement>(null);

  const osProducts = [
    {
      title: t("realEstateOS"),
      description: t("realEstateOSDesc"),
      href: "/real-estate-os" as const,
      icon: Building2,
      color: "bg-[#E8F0FE]",
      iconColor: "text-blue-600",
      checkColor: "text-blue-600",
      glow: "bg-blue-500/20",
      hoverTint: "group-hover:bg-[#E8F0FE]/40",
      bullets: [
        t("realEstateOSBullet1"),
        t("realEstateOSBullet2"),
        t("realEstateOSBullet3"),
      ],
    },
    {
      title: t("dentalClinicOS"),
      description: t("dentalClinicOSDesc"),
      href: "/dental-clinic-os" as const,
      icon: ToothIcon,
      color: "bg-[#E8F7F1]",
      iconColor: "text-emerald-600",
      checkColor: "text-emerald-600",
      glow: "bg-emerald-500/20",
      hoverTint: "group-hover:bg-[#E8F7F1]/50",
      bullets: [
        t("dentalClinicOSBullet1"),
        t("dentalClinicOSBullet2"),
        t("dentalClinicOSBullet3"),
      ],
    },
  ];

  const moreItems = [
    {
      title: t("about"),
      description: "Learn who we are, what we stand for, and how we work.",
      href: "/about" as const,
    },
    {
      title: t("blog"),
      description: t("blogsDesc"),
      href: "/blog" as const,
    },
  ];

  const locales: Locale[] = ["en", "es", "ca"];
  const localeLabels: Record<Locale, string> = {
    en: "EN",
    es: "ES",
    ca: "CA",
  };

  const closeAll = () => setOpenMenu(null);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[80rem] px-3 sm:px-0 will-change-transform">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-50 px-3 py-2 bg-white border-x border-b border-sand rounded-b-xl"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group">
            <Image src="/logo.png" alt="Autonymo" width={44} height={44} className="shrink-0 w-auto" style={{ height: "54px", marginTop: "-13px", marginBottom: "-13px", marginRight: "-6px" }} />
            <span className="font-heading text-xl font-bold tracking-tight text-charcoal">
              Autonymo
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div>
              <button
                onClick={() => setOpenMenu(isSolutionsOpen ? null : "solutions")}
                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-charcoal transition-colors focus:outline-none"
              >
                {t("solutions")}
                <ArrowDownRight
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            <Link
              href={{ pathname: "/", hash: "how-it-works" }}
              onClick={closeAll}
              className="text-sm font-medium text-text-muted hover:text-charcoal transition-colors"
            >
              {t("process")}
            </Link>
            <div>
              <button
                onClick={() => setOpenMenu(isMoreOpen ? null : "more")}
                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-charcoal transition-colors focus:outline-none"
              >
                {t("more")}
                <ArrowDownRight
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setOpenMenu(isLangOpen ? null : "lang")}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 text-sm font-medium text-text-muted hover:text-charcoal hover:bg-cream rounded-lg transition-colors focus:outline-none"
              >
                <Globe className="w-4 h-4" />
                {localeLabels[locale]}
                <ArrowDownRight
                  className={`w-3 h-3 hidden sm:block transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[calc(100%+14px)] right-0 w-44 bg-white border border-sand rounded-2xl shadow-lg p-2 z-50"
                  >
                    <div className="flex flex-col gap-1">
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => switchLocale(loc)}
                          className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-xl transition-colors duration-300 flex items-center justify-between hover:bg-cream ${loc === locale
                            ? "text-charcoal bg-cream"
                            : "text-text-muted hover:text-charcoal"
                            }`}
                        >
                          {tLang(loc)}
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-blue-primary transition-opacity duration-300 ${loc === locale ? "opacity-100" : "opacity-0"
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book a Call CTA */}
            <Link
              href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"
              className="hidden sm:flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-charcoal rounded-lg hover:bg-opacity-90 transition-[background-color,transform] active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4" />
              {t("bookCall")}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpenMenu(isMobileOpen ? null : "mobile")}
              className="md:hidden p-2 text-charcoal hover:bg-cream rounded-lg transition-colors"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Solutions Mega Menu — Two-Group Split */}
      <AnimatePresence>
        {isSolutionsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+6px)] left-3 right-3 sm:left-0 sm:right-0 z-40 hidden md:grid grid-cols-3 gap-3"
          >
            {osProducts.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={closeAll}
                className={`flex flex-col min-h-[260px] group bg-white border border-sand/80 rounded-2xl shadow-lg p-5 relative overflow-hidden hover:border-warm-gray hover:shadow-xl transition-all duration-300 ${item.hoverTint}`}
              >
                <div className={`pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full ${item.glow} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-sand group-hover:text-charcoal/50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 z-10" />

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3 ring-1 ring-inset ring-black/5 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <item.icon className={`w-[18px] h-[18px] ${item.iconColor}`} />
                  </div>

                  <h4 className="font-heading text-base font-bold text-charcoal mb-1.5 leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-text-muted text-[11px] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="flex flex-col gap-2 mb-5">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] leading-snug text-charcoal/80">
                        <Check className={`mt-0.5 w-3.5 h-3.5 shrink-0 ${item.checkColor}`} strokeWidth={2.5} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3 border-t border-sand/60 flex items-center gap-1 text-[12px] font-semibold text-charcoal">
                    <span>{t("readMore")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}

            <Link
              href="/custom-solutions"
              onClick={closeAll}
              className="flex flex-col min-h-[260px] group bg-charcoal rounded-2xl shadow-lg p-5 relative overflow-hidden hover:bg-black transition-colors duration-300"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/10 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:14px_14px]" />

              <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 z-10" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-white/10 ring-1 ring-inset ring-white/15 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  <Handshake className="w-[18px] h-[18px] text-white" />
                </div>

                <h4 className="font-heading text-base font-bold text-white mb-1.5 leading-tight">
                  {t("customSolutions")}
                </h4>

                <p className="text-white/60 text-[11px] leading-relaxed mb-4">
                  {t("customSolutionsDesc")}
                </p>

                <ul className="flex flex-col gap-2 mb-5">
                  {[
                    t("customSolutionsBullet1"),
                    t("customSolutionsBullet2"),
                    t("customSolutionsBullet3"),
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] leading-snug text-white/85">
                      <Check className="mt-0.5 w-3.5 h-3.5 shrink-0 text-white" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-1 text-[12px] font-semibold text-white">
                  <span>{t("readMore")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* More Mega Menu */}
      <AnimatePresence>
        {isMoreOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+6px)] left-3 right-3 sm:left-0 sm:right-0 z-40 hidden md:grid grid-cols-3 gap-2"
          >
            {/* Col 1: About + Blog in one card */}
            <div className="flex flex-col bg-white border border-sand/80 rounded-2xl shadow-lg p-6 min-h-[340px]">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Company</p>
              <div className="flex flex-col gap-1">
                {moreItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeAll}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-cream transition-colors duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-charcoal group-hover:underline underline-offset-4 leading-tight mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sand group-hover:text-charcoal/50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 2: Newsletter */}
            <div className="flex flex-col bg-charcoal rounded-2xl shadow-lg p-6 relative overflow-hidden min-h-[340px]">
              <h4 className="font-heading text-base font-bold text-white mb-2 leading-tight">
                {t("newsletter")}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed mb-6">
                {t("newsletterDesc")}
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="flex flex-col gap-2 mt-auto"
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-white/10 bg-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 text-sm font-semibold text-charcoal bg-white rounded-lg hover:bg-cream transition-colors active:scale-95"
                >
                  {t("subscribe")}
                </button>
              </form>
            </div>

            {/* Col 3: Social */}
            <div className="flex flex-col bg-white border border-sand/80 rounded-2xl shadow-lg p-6 min-h-[340px]">
              <h4 className="font-heading text-base font-bold text-charcoal mb-2 leading-tight">
                {t("social")}
              </h4>
              <p className="text-text-muted text-xs leading-relaxed mb-6">
                Follow us for AI insights and updates.
              </p>
              <div className="flex flex-col gap-2 mt-auto">
                <a
                  href="https://www.linkedin.com/company/autonymo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-sand/80 hover:border-warm-gray hover:bg-cream transition-all group"
                >
                  <img src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
                  <span className="text-sm font-medium text-charcoal">LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-warm-gray group-hover:text-charcoal ml-auto transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+6px)] left-0 right-0 md:hidden z-40 bg-white border border-sand rounded-xl shadow-xl p-4 max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            <div className="mb-3">
              <h5 className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-2">
                {t("solutions")}
              </h5>
              <div className="flex flex-col gap-1">
                {osProducts.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeAll}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-cream transition-colors"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center shrink-0`}
                    >
                      <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                    </div>
                    <h4 className="font-heading text-sm font-bold text-charcoal">
                      {item.title}
                    </h4>
                  </Link>
                ))}
                <Link
                  href="/custom-solutions"
                  onClick={closeAll}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-cream transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-charcoal flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-charcoal">
                    {t("customSolutions")}
                  </h4>
                </Link>
              </div>
            </div>

            <div className="border-t border-sand/50 my-2" />

            <div className="mb-3">
              <h5 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                {t("more")}
              </h5>
              <div className="flex flex-col gap-0.5">
                {moreItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeAll}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-cream transition-colors"
                  >
                    <span className="text-sm font-medium text-text-muted">
                      {item.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-warm-gray" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-sand/50 my-2" />

            <Link
              href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"
              onClick={closeAll}
              className="flex items-center justify-center gap-1.5 w-full px-5 py-3 text-sm font-semibold text-white bg-charcoal rounded-xl hover:bg-opacity-90 transition-[background-color,transform] active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4" />
              {t("bookCall")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
