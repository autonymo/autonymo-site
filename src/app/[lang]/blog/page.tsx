"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Blog() {
  const featuredPost = {
    title: "Why AI Agents Are the Future of Business Operations",
    excerpt: "The shift from static automation to intelligent agents is transforming how companies operate. Here's what business leaders need to know about the agent revolution, and how to prepare for it.",
    category: "AI Strategy",
    date: "Coming Soon",
    readTime: "8 min read"
  };

  const posts = [
    {
      title: "How We Reduced Insurance Processing Time by 35% with AI",
      excerpt: "A deep dive into how Health Services OS automates eligibility checks, pre-authorizations, and claims for healthcare practices.",
      category: "Case Study",
      date: "Coming Soon",
      readTime: "6 min read"
    },
    {
      title: "The Real Estate Agent's Guide to AI Lead Nurturing",
      excerpt: "From cold leads to warm prospects: how AI-powered follow-up sequences are changing the game for real estate teams.",
      category: "Real Estate",
      date: "Coming Soon",
      readTime: "5 min read"
    },
    {
      title: "Building Custom AI Agents: Our Technical Approach",
      excerpt: "A look behind the scenes at how we design, train, and deploy purpose-built AI agents for enterprise clients.",
      category: "Engineering",
      date: "Coming Soon",
      readTime: "10 min read"
    },
    {
      title: "AI Voice Agents: Beyond the Chatbot",
      excerpt: "Why voice AI is the most underrated automation channel, and how our clients use it to handle thousands of calls automatically.",
      category: "Product",
      date: "Coming Soon",
      readTime: "7 min read"
    },
    {
      title: "Data Privacy in the Age of AI Automation",
      excerpt: "How we build HIPAA-ready, GDPR-compliant AI systems without compromising on speed or capability.",
      category: "Security",
      date: "Coming Soon",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-clip">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-6 sm:pt-36 sm:pb-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
              Blog
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl leading-[1.05]">
              Insights on AI, automation, and growth.
            </h1>
            <p className="mt-8 text-lg leading-8 text-text-muted max-w-2xl sm:text-xl">
              Deep dives into the strategies, technology, and case studies behind modern AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
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
                Featured
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
        <div className="max-w-7xl mx-auto">
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
        <div className="max-w-7xl mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Stay ahead of the curve.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Get our latest insights on AI automation, delivered straight to your inbox. No spam, just value.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent-blue transition-colors"
            />
            <button className="px-6 py-3 rounded-lg bg-accent-blue text-white text-sm font-bold hover:bg-accent-blue/90 transition-[background-color,transform] active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
