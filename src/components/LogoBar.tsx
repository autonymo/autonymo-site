"use client";

import { useTranslations } from "next-intl";
import { LogoLoop } from "@/components/LogoLoop";
import type { LogoItem } from "@/components/LogoLoop";

const logos: LogoItem[] = [
  { src: "/logos/anthropic.svg", alt: "Anthropic" },
  { src: "/logos/openai.svg", alt: "OpenAI" },
  { src: "/logos/mistral.svg", alt: "Mistral" },
  { src: "/logos/google.svg", alt: "Google" },
  { src: "/logos/cloudflare.svg", alt: "Cloudflare" },
  { src: "/logos/railway.svg", alt: "Railway" },
  { src: "/logos/vercel.svg", alt: "Vercel" },
];

export const LogoBar = () => {
  const t = useTranslations("nav");
  return (
    <div className="pt-10 pb-6 sm:pt-14 sm:pb-8">
      <p className="text-center text-sm font-medium text-warm-gray tracking-wide uppercase mb-5">
        {t("builtOn")}
      </p>
      {/* Mobile: smaller logos + tighter gap; Desktop: original sizing */}
      <div className="sm:hidden">
        <LogoLoop
          logos={logos}
          speed={30}
          logoHeight={32}
          gap={40}
          pauseOnHover
          fadeOut
          fadeOutColor="#F5F0EB"
          ariaLabel={t("techPartners")}
        />
      </div>
      <div className="hidden sm:block">
        <LogoLoop
          logos={logos}
          speed={30}
          logoHeight={52}
          gap={80}
          pauseOnHover
          fadeOut
          fadeOutColor="#F5F0EB"
          ariaLabel={t("techPartners")}
        />
      </div>
    </div>
  );
};
