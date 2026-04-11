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
      { name: t("bookCall"), href: "https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions" as const },
    ],
    [t("social")]: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/autonymo/" as const },
    ],
    [t("legal")]: [
      { name: t("privacy"), href: "#" as const },
      { name: t("terms"), href: "#" as const },
    ],
  };

  return (
    <div className="relative w-full max-w-site mx-auto z-10 px-3 sm:px-0">
      <footer
        className="bg-white border-x border-t border-sand rounded-t-xl overflow-hidden"
      >
        <div className="px-8 pt-12 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-10">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-1.5 mb-6 group">
                <Image
                  src="/logo.png"
                  alt="Autonymo"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                  loading="lazy"
                />
                <span className="font-heading text-2xl font-bold tracking-tight text-charcoal">
                  Autonymo
                </span>
              </Link>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="col-span-1">
                <h5 className="font-heading font-bold text-charcoal text-xs uppercase tracking-widest mb-4">
                  {title}
                </h5>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-text-muted hover:text-charcoal transition-colors text-sm font-medium flex items-center gap-1 group whitespace-nowrap"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:text-blue-primary" />
                      </Link>
                    </li>
                  ))}
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
