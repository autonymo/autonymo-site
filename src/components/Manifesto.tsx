export const Manifesto = () => {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-cream border-t border-sand/50 overflow-hidden">
      {/* Faded AUTONYMO text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span
          className="font-display font-extrabold tracking-tighter leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 14vw, 16rem)", color: "rgba(26, 26, 26, 0.04)" }}
        >
          AUTONYMO
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Lead statement */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-charcoal mb-8">
          You know AI will change your business.
          <br />
          You just haven&apos;t started.
        </h2>

        <div className="space-y-8 max-w-3xl">
          <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
            Not because you don&apos;t want to. Not because you don&apos;t see it coming. But because you&apos;re busy running a business today. Hiring takes too long. Tools don&apos;t fit. And nobody on your team has the bandwidth to figure out what actually works.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
            <span className="text-charcoal font-semibold">We do.</span> Autonymo embeds into your operations, builds on the tools you already use, and improves your systems every month as the technology evolves. No disruption. No learning curve. Just results that compound.
          </p>
        </div>

        {/* Closing punch */}
        <p className="mt-16 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-charcoal">
          We don&apos;t care about hype. We care about what ships.
        </p>
      </div>
    </section>
  );
};
