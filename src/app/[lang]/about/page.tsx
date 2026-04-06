"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function About() {
  const pillars = [
    {
      number: "01",
      title: "Consultative",
      desc: "We understand your business before we propose anything. Every engagement starts with an operational audit.",
    },
    {
      number: "02",
      title: "Hands-on",
      desc: "We don't hand you a login and walk away. We build, deploy, train your team, and stay on to manage.",
    },
    {
      number: "03",
      title: "Results-driven",
      desc: "We measure success by the impact we generate for your business. Not by features shipped or licenses sold.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-clip">
      {/* Hero */}
      <section className="relative pt-28 pb-32 px-6 sm:pt-40 sm:pb-40 bg-cream overflow-hidden">
        {/* Faded watermark */}
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-6 block font-display">
                About Autonymo
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.05]">
                We build AI systems
                <br />
                <span className="text-charcoal/40">that actually work.</span>
              </h1>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-text-muted sm:text-xl">
                Autonymo is an AI studio that helps businesses integrate
                artificial intelligence into their operations. Custom
                operating systems, not generic tools. We&apos;re consultative,
                hands-on, and results-driven.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-charcoal">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  Real Estate
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  Healthcare
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  Custom Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500"
              >
                <span className="font-display text-3xl font-bold text-sand/40 group-hover:text-accent-blue/40 transition-colors duration-300 mb-6 block">
                  {pillar.number}
                </span>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
                Our Story
              </h2>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
                Born from a simple observation.
              </h3>
              <div className="space-y-4 text-text-muted text-base leading-relaxed">
                <p>
                  Most businesses know they need AI, but they don&apos;t know where
                  to start. The market is flooded with generic chatbots and SaaS
                  tools that promise automation but deliver complexity.
                </p>
                <p>
                  We founded Autonymo to bridge that gap. We&apos;re the senior
                  advisor who also rolls up their sleeves, helping businesses
                  identify the highest-impact AI opportunities, then building
                  and deploying the systems to realize them.
                </p>
                <p>
                  Today, we work with teams across real estate, healthcare, and
                  enterprise to build AI systems that don&apos;t just look smart,
                  they adapt, deliver, and scale.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-white border border-sand">
              <div className="aspect-[4/3] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Autonymo"
                  width={120}
                  height={120}
                  className="opacity-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 bg-cream border-b border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
              The Founder
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              A team built to deliver.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div>
              <div className="h-full min-h-[400px] rounded-2xl bg-sand/40 border border-sand flex items-center justify-center overflow-hidden">
                <span className="text-warm-gray text-sm font-medium tracking-wide uppercase">
                  Photo
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                Arnau Fabrega
              </h3>
              <span className="text-accent-blue text-sm font-semibold tracking-wide uppercase mb-6">
                Founder &amp; CEO
              </span>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
                  I spent years at Deloitte helping large corporations in the financial industry. It was great training, but I kept noticing the same thing: AI was changing everything, and most businesses, especially small and mid-sized ones, had no idea what it could actually do for them.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
                  They didn&apos;t know where to start, and even if they did, the technology moves so fast that what worked six months ago is already outdated.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-charcoal font-medium">
                  I started Autonymo because I wanted to be on the other side, not advising from a slide deck, but actually building and running the systems that make a difference. That&apos;s what we do every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto p-12 md:p-20 rounded-2xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Want to work with us?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Whether you&apos;re exploring AI for the first time or scaling an
            existing system, we&apos;d love to talk.
          </p>
          <Link
            href="https://cal.com/arnau-fabrega-nscdht/autonymo-custom-solutions"
            className="inline-flex items-center justify-center font-medium tracking-tight text-white text-lg bg-accent-blue rounded-xl px-8 py-2.5 hover:opacity-90 transition-colors active:scale-95 cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
