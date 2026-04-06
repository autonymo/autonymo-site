export const WhyUs = () => {
  const vendorItems = [
    "Sell you a platform and disappear",
    "Force you into their workflow",
    "Same product for every company",
    "Measure success by licenses sold",
  ];

  const ourItems = [
    "Audit your operations before proposing anything",
    "Build on top of your existing tools. No rip-and-replace",
    "Deploy solutions tailored to how your business actually works",
    "Measure success by the impact we generate for you",
  ];

  return (
    <section className="py-20 sm:py-28 px-6 bg-cream border-t border-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            Why Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            We don&apos;t sell software. We do the work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* What Most Vendors Do */}
          <div className="p-8 rounded-xl bg-white border border-sand">
            <h3 className="font-display text-sm font-bold text-text-muted uppercase tracking-widest mb-6">
              What Most Vendors Do
            </h3>
            <ul className="space-y-4">
              {vendorItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-warm-gray mt-0.5">✕</span>
                  <span className="text-text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div className="p-8 rounded-xl bg-charcoal text-white">
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6">
              What We Do
            </h3>
            <ul className="space-y-4">
              {ourItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent-blue mt-0.5">✓</span>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-text-muted max-w-3xl">
          For every €1 spent on software, €6 are spent on the work that software is supposed to do.{" "}
          <span className="text-charcoal font-semibold">We&apos;re here for the €6.</span>
        </p>
      </div>
    </section>
  );
};
