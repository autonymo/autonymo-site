"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, Globe, ArrowUpRight, Menu, X, Building2, Heart, Factory, Settings2 } from "lucide-react";
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
      cubeImage: "/images/real-estate-os-cube.png",
    },
    {
      title: t("dentalClinicOS"),
      description: t("dentalClinicOSDesc"),
      href: "/dental-clinic-os" as const,
      icon: Heart,
      color: "bg-[#F5F5F7]",
      iconColor: "text-emerald-600",
      cubeImage: "/images/dental-clinic-os-cube.png",
    },
    {
      title: t("industrialOS"),
      description: t("industrialOSDesc"),
      href: "/industrial-os" as const,
      icon: Factory,
      color: "bg-[#FEF3C7]",
      iconColor: "text-amber-600",
      cubeImage: "/images/industrial-os-cube.png",
    },
  ];

  const moreLinks = [
    { title: t("about"), href: "/about" as const },
    { title: t("blog"), href: "/blog" as const },
    { title: t("process"), href: { pathname: "/", hash: "how-it-works" } as const },
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
    <div ref={navRef} className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-site px-3 sm:px-0 will-change-transform">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-50 px-3 py-2 bg-white border-x border-b border-sand rounded-b-xl"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
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
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-muted hover:text-charcoal hover:bg-cream rounded-lg transition-colors focus:outline-none"
              >
                <Globe className="w-4 h-4" />
                {localeLabels[locale]}
                <ArrowDownRight
                  className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[calc(100%+8px)] right-0 w-36 bg-white border border-sand rounded-xl shadow-lg p-1 z-50"
                  >
                    <div className="flex flex-col gap-0.5">
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => switchLocale(loc)}
                          className={`w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-300 group flex items-center justify-between hover:bg-cream ${loc === locale
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
            className="absolute top-[calc(100%+6px)] left-3 right-3 sm:left-0 sm:right-0 z-40 hidden md:grid grid-cols-[3fr_1fr] gap-3"
          >
            {/* Group 1: Industry OS Products */}
            <div>
              <span className="font-display text-[10px] text-accent-blue font-bold tracking-[0.08em] uppercase mb-2 block px-1">
                {t("purposeBuilt")}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {osProducts.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeAll}
                    className="flex flex-col h-full group bg-white border border-sand/80 rounded-2xl shadow-lg p-5 relative overflow-hidden hover:border-warm-gray hover:shadow-xl transition-colors duration-300"
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.color} pointer-events-none`} style={{ opacity: 0 }} />

                    <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-sand group-hover:text-charcoal/50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-colors duration-300" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div
                        className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300`}
                      >
                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>

                      <h4 className="font-heading text-[15px] font-bold text-charcoal mb-1.5 leading-tight group-hover:underline underline-offset-4">
                        {item.title}
                      </h4>

                      <p className="text-text-muted text-[11px] leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>

                      <div className={`mt-auto aspect-square rounded-lg ${item.color} border border-sand/50 overflow-hidden`}>
                        <Image
                          src={item.cubeImage}
                          alt={item.title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover scale-125"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Group 2: Custom Solutions */}
            <div>
              <span className="font-display text-[10px] text-warm-gray font-bold tracking-[0.08em] uppercase mb-2 block px-1">
                {t("tailored")}
              </span>
              <Link
                href="/custom-solutions"
                onClick={closeAll}
                className="flex flex-col h-[calc(100%-1.5rem)] group bg-charcoal rounded-2xl shadow-lg p-5 relative overflow-hidden hover:bg-black transition-colors duration-300"
              >
                <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-colors duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <Settings2 className="w-4 h-4 text-amber-500" />
                  </div>

                  <h4 className="font-heading text-[15px] font-bold text-white mb-1.5 leading-tight group-hover:underline underline-offset-4">
                    {t("customSolutions")}
                  </h4>

                  <p className="text-white/50 text-[11px] leading-relaxed flex-1">
                    {t("customSolutionsDesc")}
                  </p>

                  <p className="mt-auto pt-4 border-t border-white/10 text-white/30 text-[10px]">
                    No templates. No migrations.
                  </p>
                </div>
              </Link>
            </div>
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
            className="absolute top-[calc(100%+6px)] left-3 right-3 sm:left-0 sm:right-0 z-40 hidden md:grid grid-cols-2 gap-2"
          >
            <div className="bg-white border border-sand rounded-2xl shadow-lg p-6 h-full relative overflow-hidden">
              <div className="absolute -bottom-10 right-8 pointer-events-none select-none opacity-[0.08] blur-[2px]" aria-hidden="true">
                <Image src="/logo.png" alt="" width={320} height={320} />
              </div>
              <div className="relative z-10 flex flex-col gap-0.5 items-start">
                {moreLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={closeAll}
                    className="group flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-cream transition-colors duration-300 w-full max-w-[240px]"
                  >
                    <span className="text-sm font-medium text-text-muted group-hover:text-charcoal transition-colors duration-300">
                      {link.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-white border border-sand rounded-2xl shadow-lg p-5 flex flex-col overflow-hidden">
                <h5 className="text-sm font-bold text-charcoal mb-1">
                  {t("newsletter")}
                </h5>
                <p className="text-sm text-text-muted leading-relaxed mb-3">
                  {t("newsletterDesc")}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 px-3 py-2 text-xs rounded-lg border border-sand bg-white text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-blue-primary/40 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-charcoal rounded-lg hover:bg-black transition-colors active:scale-95 shrink-0"
                  >
                    {t("subscribe")}
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/blog"
                  onClick={closeAll}
                  className="bg-white border border-sand rounded-2xl shadow-lg p-4 flex flex-col hover:border-warm-gray transition-colors group cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-sm font-bold text-charcoal">
                      {t("blogs")}
                    </h5>
                    <ArrowUpRight className="w-3.5 h-3.5 text-warm-gray group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-colors duration-300" />
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed">
                    {t("blogsDesc")}
                  </p>
                </Link>

                <div className="bg-charcoal rounded-2xl shadow-lg p-4 flex flex-col overflow-hidden">
                  <h5 className="text-sm font-bold text-white mb-2">
                    {t("social")}
                  </h5>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href="https://www.linkedin.com/company/autonymo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <img src="/icons/linkedin.svg" alt="LinkedIn" width={14} height={14} className="invert" />
                    </a>
                  </div>
                </div>
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
            className="absolute top-[calc(100%+6px)] left-0 right-0 md:hidden z-40 bg-white border border-sand rounded-xl shadow-xl p-4"
          >
            <div className="mb-3">
              <h5 className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-2">
                {t("purposeBuilt")}
              </h5>
              <div className="flex flex-col gap-1">
                {osProducts.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeAll}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-cream transition-colors"
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
              </div>
            </div>

            <div className="border-t border-sand/50 my-2" />

            <div className="mb-3">
              <h5 className="text-[10px] font-bold text-warm-gray uppercase tracking-widest mb-2">
                {t("tailored")}
              </h5>
              <Link
                href="/custom-solutions"
                onClick={closeAll}
                className="flex items-center gap-3 py-2 px-3 rounded-xl bg-charcoal/5 hover:bg-charcoal/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-charcoal/10 flex items-center justify-center shrink-0">
                  <Settings2 className="w-4 h-4 text-amber-600" />
                </div>
                <h4 className="font-heading text-sm font-bold text-charcoal">
                  {t("customSolutions")}
                </h4>
              </Link>
            </div>

            <div className="border-t border-sand/50 my-2" />

            <div className="mb-3">
              <h5 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                {t("more")}
              </h5>
              <div className="flex flex-col gap-0.5">
                {moreLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={closeAll}
                    className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-cream transition-colors"
                  >
                    <span className="text-sm font-medium text-text-muted">
                      {link.title}
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
              className="flex items-center justify-center gap-1.5 w-full px-5 py-2.5 text-sm font-semibold text-white bg-charcoal rounded-xl hover:bg-opacity-90 transition-[background-color,transform] active:scale-95"
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
