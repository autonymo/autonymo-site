"use client";

export const Founder = () => {
  return (
    <section className="py-24 sm:py-32 px-6 bg-cream border-t border-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block">
            The Founder
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            A team built to deliver.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-2xl bg-sand/40 border border-sand flex items-center justify-center overflow-hidden">
              <span className="text-warm-gray text-sm font-medium tracking-wide uppercase">
                Photo
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
              Arnau Fabrega
            </h3>
            <span className="text-accent-blue text-sm font-semibold tracking-wide uppercase mb-6">
              Founder &amp; CEO
            </span>

            <blockquote className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-accent-blue/20 rounded-full" />
              <p className="text-lg sm:text-xl leading-relaxed text-text-muted pl-4">
                I spent years at Deloitte helping large corporations in the financial industry. It was great training, but I kept noticing the same thing: AI was changing everything, and most businesses, especially small and mid-sized ones, had no idea what it could actually do for them.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-text-muted pl-4 mt-6">
                They didn&apos;t know where to start, and even if they did, the technology moves so fast that what worked six months ago is already outdated.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-charcoal font-medium pl-4 mt-6">
                I started Autonymo because I wanted to be on the other side, not advising from a slide deck, but actually building and running the systems that make a difference. That&apos;s what we do every day.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
