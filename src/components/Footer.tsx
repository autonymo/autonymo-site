"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    [t("solutions")]: [
      { name: t("realEstateOS"), href: "/real-estate-os" as const },
      { name: t("dentalClinicOS"), href: "/dental-clinic-os" as const },
      { name: t("customSolutions"), href: "/custom-solutions" as const },
    ],
    [t("company")]: [
      { name: t("aboutUs"), href: "/about" as const },
      { name: t("blog"), href: "/blog" as const },
      { name: t("bookCall"), href: "https://cal.com/arnau-fabrega-nscdht/artifexone-ai-partnership" as const },
    ],
    [t("social")]: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/artifexone/" as const,
        icon: "/icons/linkedin.png",
      },
    ],
    [t("legal")]: [
      { name: t("privacy"), href: "#" as const },
      { name: t("terms"), href: "#" as const },
    ],
  };

  return (
    <div className="relative w-full max-w-[80rem] mx-auto z-10 px-3 sm:px-0">
      <footer
        className="bg-white border-x border-t border-sand rounded-t-xl overflow-hidden"
      >
        <div className="px-5 sm:px-8 pt-12 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-10">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center mb-4 group">
                <Image
                  src="/wordmark-charcoal-transparent.png"
                  alt="ArtifexOne"
                  width={900}
                  height={160}
                  className="shrink-0 w-auto"
                  style={{ height: "32px" }}
                  loading="lazy"
                />
              </Link>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                {t("tagline")}
              </p>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="col-span-1">
                <h5 className="font-heading font-bold text-charcoal text-xs uppercase tracking-widest mb-4">
                  {title}
                </h5>
                <ul className="space-y-2.5">
                  {links.map((link) => {
                    const icon = "icon" in link ? link.icon : undefined;
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          aria-label={link.name}
                          className="text-text-muted hover:text-charcoal transition-colors text-sm font-medium flex items-center gap-1 group whitespace-nowrap"
                        >
                          {icon ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-charcoal group-hover:bg-black transition-colors">
                              <Image
                                src={icon}
                                alt={link.name}
                                width={18}
                                height={18}
                                className="shrink-0"
                              />
                            </span>
                          ) : (
                            <>
                              {link.name}
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:text-blue-primary" />
                            </>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-sand/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-muted text-xs font-medium">
              {t("copyright", { year: currentYear })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
