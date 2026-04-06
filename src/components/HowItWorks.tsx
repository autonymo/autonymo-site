import Image from "next/image";

const steps = [
  {
    key: "deploy",
    title: "We audit your operations",
    description:
      "We map your processes, find where time and money are leaking, and identify the highest-impact opportunities. You get a clear picture of what\u2019s worth building before we build anything.",
  },
  {
    key: "train",
    title: "We build and deploy",
    description:
      "We take the highest-impact opportunity and build it. Live, working, integrated with your existing tools. First solution running in 4 weeks.",
  },
  {
    key: "evolve",
    title: "We train, manage, and expand",
    description:
      "We train your team on the new system, monitor performance, and keep improving it. When you\u2019re ready, we move to the next opportunity.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-14 px-6 bg-cream border-y border-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="font-heading text-caption text-blue-primary font-bold tracking-[0.08em] uppercase mb-4">
            How We Work
          </h2>
          <h3 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            From first call to live system in 4 weeks.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500 flex flex-col relative"
            >
              <span className="font-heading text-3xl font-bold text-sand/40 group-hover:text-blue-primary/40 transition-colors duration-300 mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center justify-center h-44 mb-4">
                <Image
                  src={`/illustrations/${step.key}-removebg-preview.png`}
                  alt={step.title}
                  width={200}
                  height={200}
                  className="scale-[1.4]"
                  loading="lazy"
                />
              </div>

              <h4 className="font-heading text-xl font-bold text-charcoal mb-3">
                {step.title}
              </h4>
              <p className="text-text-muted leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
