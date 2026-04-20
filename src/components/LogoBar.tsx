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
      {/* Full viewport width so logos scroll edge-to-edge, gradients mask outside the navbar bounds */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen">
        <div className="sm:hidden">
          <LogoLoop
            logos={logos}
            speed={30}
            logoHeight={32}
            gap={40}
            pauseOnHover
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
            ariaLabel={t("techPartners")}
          />
        </div>
        {/* Edge fades — opaque beyond the 80rem container, then a long smooth ease to transparent inside it */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #F5F0EB 0%, #F5F0EB calc(50% - 40rem), rgba(245,240,235,0.92) calc(50% - 36rem), rgba(245,240,235,0.6) calc(50% - 32rem), rgba(245,240,235,0.2) calc(50% - 28rem), transparent calc(50% - 24rem))",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10"
          style={{
            background:
              "linear-gradient(to left, #F5F0EB 0%, #F5F0EB calc(50% - 40rem), rgba(245,240,235,0.92) calc(50% - 36rem), rgba(245,240,235,0.6) calc(50% - 32rem), rgba(245,240,235,0.2) calc(50% - 28rem), transparent calc(50% - 24rem))",
          }}
        />
      </div>
    </div>
  );
};
