"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("blog");

  const featuredPost = {
    title: t("featured.title"),
    excerpt: t("featured.excerpt"),
    category: t("featured.category"),
    date: t("featured.date"),
    readTime: t("featured.readTime"),
  };

  const posts = [
    {
      title: t("posts.post1.title"),
      excerpt: t("posts.post1.excerpt"),
      category: t("posts.post1.category"),
      date: t("posts.post1.date"),
      readTime: t("posts.post1.readTime"),
    },
    {
      title: t("posts.post2.title"),
      excerpt: t("posts.post2.excerpt"),
      category: t("posts.post2.category"),
      date: t("posts.post2.date"),
      readTime: t("posts.post2.readTime"),
    },
    {
      title: t("posts.post3.title"),
      excerpt: t("posts.post3.excerpt"),
      category: t("posts.post3.category"),
      date: t("posts.post3.date"),
      readTime: t("posts.post3.readTime"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-clip">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-6 sm:pt-36 sm:pb-20 bg-cream overflow-hidden">
        <div className="max-w-[80rem] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mx-auto"
          >
            <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
              {t("hero.label")}
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl leading-[1.1]">
              {t("hero.heading")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-muted max-w-2xl mx-auto sm:text-xl">
              {t("hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group p-8 md:p-12 rounded-xl bg-white border border-sand hover:border-warm-gray transition-[border-color] duration-500 relative cursor-pointer"
          >
            <ArrowUpRight className="absolute top-8 right-8 md:top-12 md:right-12 w-6 h-6 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 transition-[color,transform] duration-300" />

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-widest">
                {t("featured.badge")}
              </span>
              <span className="px-3 py-1 rounded-full bg-cream text-[10px] font-bold text-warm-gray uppercase tracking-widest border border-sand">
                {featuredPost.category}
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-4xl font-bold text-charcoal mb-4 max-w-3xl leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-text-muted text-base leading-relaxed max-w-2xl mb-6">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center gap-4 text-warm-gray text-sm">
              <span>{featuredPost.date}</span>
              <span className="w-1 h-1 rounded-full bg-sand" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-[border-color] duration-500 flex flex-col relative cursor-pointer"
              >
                <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-[color,transform] duration-300" />

                <span className="px-2.5 py-0.5 rounded-full bg-cream border border-sand text-[9px] font-bold uppercase tracking-wider text-charcoal/40 w-fit mb-4">
                  {post.category}
                </span>

                <h3 className="font-display text-lg font-bold text-charcoal mb-3 leading-snug pr-6">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 text-warm-gray text-xs mt-auto pt-6 border-t border-sand/30">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-sand" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[80rem] mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t("newsletter.heading")}
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            {t("newsletter.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent-blue transition-colors"
            />
            <button className="px-6 py-3 rounded-lg bg-accent-blue text-white text-sm font-bold hover:bg-accent-blue/90 transition-[background-color,transform] active:scale-95">
              {t("newsletter.button")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
