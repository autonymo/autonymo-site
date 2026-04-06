"use client";

import { Link } from "@/i18n/navigation";
import {
  Building2,
  TrendingUp,
  Users,
  MessageSquare,
  BarChart3,
  Bot,
  ArrowUpRight,
  ArrowDown,
  Clock,
  Target,
  CheckCircle2,
  Calendar,
  FileText,
  Bell,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/*  Dashboard Illustration  */
function RealEstateIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="absolute -inset-12 bg-gradient-to-br from-accent-blue/[0.03] via-transparent to-sand/10 rounded-[3rem] pointer-events-none" />
      <div className="relative bg-white rounded-2xl border border-sand/80 shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 bg-light-gray border-b border-sand/60">
          <div className="flex gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-1.5 bg-white rounded-md border border-sand/60 px-2.5 py-1">
            <div className="w-3 h-3 rounded-sm bg-accent-blue/15 flex items-center justify-center">
              <Building2 className="w-2 h-2 text-accent-blue" />
            </div>
            <span className="text-[10px] text-text-muted font-medium">app.autonymo.com/dashboard</span>
          </div>
          <div className="w-14" />
        </div>
        <div className="flex">
          <div className="w-[52px] bg-charcoal flex flex-col items-center py-4 gap-3.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-accent-blue flex items-center justify-center">
              <Building2 className="w-3.5 h-3.5 text-white" />
            </div>
            {[BarChart3, Users, MessageSquare, Calendar, FileText].map((Icon, i) => (
              <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}>
                <Icon className="w-3.5 h-3.5 text-white/40" />
              </div>
            ))}
            <div className="mt-auto w-7 h-7 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">JR</span>
            </div>
          </div>
          <div className="flex-1 p-5 bg-cream/40 min-h-[340px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-sm font-bold text-charcoal">Lead Pipeline</div>
                <div className="text-[10px] text-text-muted">Tuesday, 17 Jun · Barcelona Office</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {['bg-accent-blue', 'bg-green-500', 'bg-yellow-500'].map((bg, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                      <span className="text-[7px] font-bold text-white">{['A', 'M', 'C'][i]}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {[
                { label: "Active Leads", value: "247", trend: "+18%", icon: Users },
                { label: "Avg Response", value: "< 2m", trend: "−73%", icon: Clock },
                { label: "Conversion", value: "34%", trend: "+12%", icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-2.5 border border-sand/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <stat.icon className="w-3 h-3 text-warm-gray" />
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{stat.trend}</span>
                  </div>
                  <div className="font-display text-lg font-bold text-charcoal leading-none">{stat.value}</div>
                  <div className="text-[9px] text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-sand/50 p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal">Leads This Week</span>
                <span className="text-[9px] text-accent-blue font-medium">+24% vs last week</span>
              </div>
              <div className="flex items-end gap-1 h-10">
                {[35, 52, 41, 68, 55, 72, 48].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div className={`w-full rounded-sm ${i === 5 ? 'bg-accent-blue' : 'bg-accent-blue/20'}`} style={{ height: `${h * 0.55}%` }} />
                    <span className="text-[7px] text-warm-gray">{'MTWTFSS'[i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal uppercase tracking-wider">Live Feed</span>
                <span className="text-[9px] text-text-muted">12 new today</span>
              </div>
              {[
                { name: "Maria G.", avatar: "MG", property: "3BR Eixample", status: "Viewing Booked", time: "2m", dot: "bg-green-400", avatarBg: "bg-purple-100 text-purple-600" },
                { name: "Carlos R.", avatar: "CR", property: "2BR Gràcia", status: "AI Qualifying", time: "5m", dot: "bg-accent-blue", avatarBg: "bg-blue-100 text-blue-600" },
                { name: "Anna K.", avatar: "AK", property: "Penthouse Born", status: "Follow-up Sent", time: "12m", dot: "bg-yellow-400", avatarBg: "bg-amber-100 text-amber-600" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 border border-sand/30 mb-1.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${lead.avatarBg}`}>{lead.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-charcoal">{lead.name}</span>
                      <span className="text-[9px] text-text-muted truncate">· {lead.property}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${lead.dot}`} />
                      <span className="text-[9px] text-text-muted">{lead.status}</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-warm-gray shrink-0">{lead.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 12, x: 12 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-sand shadow-xl shadow-charcoal/10 p-3 flex items-center gap-2.5 z-10">
        <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-4.5 h-4.5 text-green-600" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">Deal Closed!</div>
          <div className="text-[9px] text-text-muted">Calle Mayor 12 · €285,000</div>
          <div className="text-[9px] text-green-600 font-medium mt-0.5">Commission: €8,550</div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -8, x: -8 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-3 -left-3 bg-charcoal rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 z-10">
        <div className="w-5 h-5 rounded-md bg-accent-blue flex items-center justify-center">
          <Bot className="w-3 h-3 text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">AI Agent Active</div>
          <div className="text-[8px] text-white/50">Handling 3 conversations</div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-2 right-12 bg-white rounded-lg shadow-md border border-sand px-2.5 py-1.5 flex items-center gap-1.5 z-10">
        <Bell className="w-3 h-3 text-accent-blue" />
        <span className="text-[9px] font-bold text-charcoal">4 new leads</span>
        <div className="w-4 h-4 rounded-full bg-accent-blue text-[8px] text-white font-bold flex items-center justify-center">4</div>
      </motion.div>
    </motion.div>
  );
}

/*  FAQ Accordion Item  */
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-sand">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        >
          <span className="font-display text-base font-semibold text-charcoal pr-4">{question}</span>
          <ChevronDown className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="text-text-muted text-sm leading-relaxed pb-5">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function RealEstateOS() {
  const solutions = [
    { title: "Intelligent CRM", promise: "All enquiries in one place, in real time.", desc: "A CRM built specifically for your agency \u2014 not a generic platform you have to adapt to. Connected to every major property portal in your market, so all enquiries flow into one place in real time. Lead management, viewing coordination, automated follow-ups, deal tracking, and agent activity \u2014 all in one system designed around how your team actually works." },
    { title: "Owner Capture", promise: "Contact new owners before your competitors.", desc: "New owners entering the market in your zone are identified and flagged automatically. Your team contacts them first \u2014 before competitors even know the listing exists. Automated outreach, review-then-send workflows, and a pipeline to track every opportunity." },
    { title: "Operations Management", promise: "Contracts in minutes, not hours.", desc: "Contracts generated in minutes, not hours. Bilingual documents, scheduling, task coordination, and reporting \u2014 all automated. Your agents stop doing admin and start doing what they were hired for." },
    { title: "Portfolio Reactivation", promise: "Stay top of mind with every past client.", desc: "Past clients and inactive owners receive personalized outreach \u2014 market updates, valuation insights, relevant opportunities. When they\u2019re ready to buy, sell, or list again, your agency is already top of mind." },
  ];

  const faqs = [
    { q: "Do we need to change our CRM?", a: "No, we can integrate with your current one. But our CRM is built specifically for real estate agencies and is more powerful than anything else on the market. Most agencies that see it choose to upgrade. Worth a conversation." },
    { q: "Do our agents need to learn new software?", a: "We guide your team through the full onboarding. The system is designed to fit into your existing workflow, and we make sure everyone is comfortable before going live." },
    { q: "What if my agency is small?", a: "The OS is designed for agencies with at least 3\u20135 people. That said, we can adapt to smaller teams if needed." },
    { q: "How is this different from buying a CRM?", a: "A CRM is a tool you configure yourself. This is an operating system we build and fine-tune for your agency. We handle onboarding, and we stay involved monthly to make sure it evolves with your business." },
    { q: "What portals do you integrate with?", a: "All major ones. Idealista, Fotocasa, Habitaclia, Pisos.com, and others. Every enquiry flows into your system in real time." },
    { q: "How quickly will we see results?", a: "First module live within 2\u20134 weeks. Most agencies see measurable impact within the first month." },
    { q: "What happens if we stop?", a: "You keep everything we built. No lock-in." },
    { q: "Do you work outside Spain?", a: "Yes. Our team works in English, Spanish, and Catalan." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-clip">
      {/*  T1: HERO  */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Real Estate OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your agents sell.{" "}
                Our AI runs the agency.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                A complete AI-powered operating system for your real estate agency. Built around
                your processes, deployed on your tools, fine-tuned for you. We guide you through
                onboarding and stay on to optimize it every month.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://cal.com/arnau-fabrega-nscdht/autonymo-real-estate-os"
                  className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-colors active:scale-95"
                >
                  Book a Free Assessment
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center px-6 py-3.5 font-medium tracking-tight text-charcoal text-base rounded-xl bg-white border border-charcoal/15 hover:border-charcoal/30 transition-colors active:scale-95"
                >
                  See how it works
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <RealEstateIllustration />
            </div>
          </div>
        </div>
      </section>

      {/*  T2: SOCIAL PROOF BAR  */}
      <section className="py-4 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium text-text-muted/60 tracking-wide">
            Deployed for agencies across Spain.
          </p>
        </div>
      </section>

      {/*  T3: THE PROBLEM  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              The Problem
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              Your agency runs on manual work. It doesn&apos;t have to.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Target,
                title: "Owners you\u2019re not capturing",
                desc: "Private owners list in your zone every week. By the time your team spots them, three agencies have already called.",
              },
              {
                icon: Clock,
                title: "Leads going cold",
                desc: "A buyer enquiry comes in at 8pm. By the time your agent sees it the next morning, they\u2019ve already moved on.",
              },
              {
                icon: FileText,
                title: "Agents doing ops instead of selling",
                desc: "Your best salespeople spend half their day on admin, coordination, and data entry instead of closing deals.",
              },
            ].map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.08}
                className="p-6 rounded-xl bg-white border border-sand flex flex-col"
              >
                <item.icon className="w-5 h-5 text-charcoal/30 mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T4: WHY WE'RE DIFFERENT  */}
      <WhyWeDifferent
        industryExample="This isn't off-the-shelf software. It's an operating system built around your agency. Your team operates it, we make sure it keeps getting better."
        vendorItems={[
          "Sell you a generic CRM",
          "Assume your team will figure it out",
          "Same platform for every agency",
          "No ongoing support",
        ]}
        ourItems={[
          "Build a system tailored to how your agency actually works",
          "Deploy on your existing tools and portals",
          "Guide your team through onboarding",
          "Monitor & optimize monthly",
        ]}
      />

      {/*  T5: SOLUTION PORTFOLIO  */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              What We Deploy
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
              Four modules. One operating system.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed">
              Every agency is different. We deploy the same core modules but fine-tune each one to your market, your team, and your processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.05}
              >
                <div className="h-full p-6 rounded-xl bg-white border border-sand">
                  <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-1">{sol.title}</h4>
                  <p className="text-accent-blue text-sm font-medium mb-3">{sol.promise}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T6: CASE STUDY  */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Case Study
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
              Already running. Already delivering.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed">
              The Real Estate OS is live for agencies across Spain. Here&apos;s what changes once it&apos;s deployed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Lead response: from over an hour to under 30 seconds", desc: "Every lead that comes in gets an instant, personalized response and is qualified automatically. Your agents only spend time on leads that are genuinely interested \u2014 no more chasing dead ends." },
              { title: "Viewings that book themselves", desc: "Once a lead is qualified and the broker confirms interest, viewings are scheduled automatically. No back-and-forth, no missed opportunities." },
              { title: "Owners always in the loop", desc: "Your owners receive automatic updates on every enquiry, viewing, and market change. They feel attended to without your agents sending a single manual message. Better service, zero extra work." },
              { title: "Your entire portfolio stays warm", desc: "Strategic, automated follow-ups keep every past owner and client top of mind. When they\u2019re ready to sell, list, or buy again, your agency is the first call \u2014 not a competitor they found online." },
              { title: "Hundreds of new owner contacts every month", desc: "The capture engine connects you with off-market owners in your zone before they list publicly. Your pipeline of exclusive listings grows on autopilot." },
            ].map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.08}
                className="p-6 rounded-xl bg-cream border border-sand flex flex-col"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-blue mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-text-muted text-sm leading-relaxed max-w-3xl italic">
            Every deployment is different because every agency is different. We fine-tune the system to your market, your team, and your workflows, then we stay on to manage and improve it month after month.
          </p>
        </div>
      </section>

      {/*  T7: HOW WE WORK  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              How We Work
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              From first call to live system in 4 weeks.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { step: "Step 1", title: "We audit your operations", desc: "We map your processes, identify where time and money are leaking, and define which modules to deploy first." },
              { step: "Step 2", title: "We deploy and fine-tune your OS", desc: "We build the system around your specific workflows, connect it to your existing tools, and go live with the highest-impact module first." },
              { step: "Step 3", title: "We monitor, optimize, and expand", desc: "Your team runs the system day-to-day. We check in monthly to review performance, fine-tune what\u2019s working, and roll out new modules when you\u2019re ready." },
            ].map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500 flex flex-col"
              >
                <span className="font-display text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/5 px-3 py-1 rounded-full self-start mb-5">
                  {item.step}
                </span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand">
            <h4 className="font-display text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-4">
              Portal Integrations
            </h4>
            <div className="flex flex-wrap gap-3 mb-3">
              {["Idealista", "Fotocasa", "Habitaclia", "Pisos.com"].map((portal, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-cream border border-sand text-sm font-medium text-charcoal">
                  {portal}
                </span>
              ))}
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              We integrate with every major portal in your market.
            </p>
          </div>
        </div>
      </section>

      {/*  T9: FAQ  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
            FAQ
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-12">
            Common questions
          </h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/*  T10: FINAL CTA  */}
      <FinalCTA
        verticalPhrase="your agency"
        heading="Let's talk about your agency."
        subtitle="Book a free 30-minute assessment. We'll map your operations and show you exactly where AI makes the biggest impact."
        calLink="https://cal.com/arnau-fabrega-nscdht/autonymo-real-estate-os"
      />
    </div>
  );
}
