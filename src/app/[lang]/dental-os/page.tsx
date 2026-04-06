"use client";

import { Link } from "@/i18n/navigation";
import {
  Heart,
  Calendar,
  ShieldCheck,
  FileText,
  Clock,
  Phone,
  Activity,
  ArrowUpRight,
  ArrowDown,
  Users,
  Stethoscope,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/*  Health Dashboard Illustration  */
function HealthIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="absolute -inset-12 bg-gradient-to-br from-green-500/[0.03] via-transparent to-sand/10 rounded-[3rem] pointer-events-none" />
      <div className="relative bg-white rounded-2xl border border-sand/80 shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 bg-light-gray border-b border-sand/60">
          <div className="flex gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-1.5 bg-white rounded-md border border-sand/60 px-2.5 py-1">
            <div className="w-3 h-3 rounded-sm bg-green-100 flex items-center justify-center">
              <Stethoscope className="w-2 h-2 text-green-600" />
            </div>
            <span className="text-[10px] text-text-muted font-medium">app.autonymo.com/practice</span>
          </div>
          <div className="w-14" />
        </div>
        <div className="flex">
          <div className="w-[52px] bg-charcoal flex flex-col items-center py-4 gap-3.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-white" />
            </div>
            {[Calendar, Users, Activity, FileText, ShieldCheck].map((Icon, i) => (
              <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}>
                <Icon className="w-3.5 h-3.5 text-white/40" />
              </div>
            ))}
            <div className="mt-auto w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">DR</span>
            </div>
          </div>
          <div className="flex-1 p-5 bg-cream/40 min-h-[340px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-sm font-bold text-charcoal">Today&apos;s Schedule</div>
                <div className="text-[10px] text-text-muted">Tuesday, 17 Jun · Dr. García&apos;s Clinic</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {[
                { label: "Appointments", value: "18", sub: "2 auto-filled", icon: Calendar },
                { label: "Show-up Rate", value: "96%", sub: "+12% vs last mo", icon: Users },
                { label: "Avg Wait", value: "4 min", sub: "−8 min improved", icon: Clock },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-2.5 border border-sand/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <stat.icon className="w-3 h-3 text-warm-gray" />
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{stat.sub}</span>
                  </div>
                  <div className="font-display text-lg font-bold text-charcoal leading-none">{stat.value}</div>
                  <div className="text-[9px] text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-sand/50 p-3 mb-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold text-charcoal">Morning Block</span>
                <span className="text-[9px] text-green-600 font-medium">100% booked</span>
              </div>
              <div className="space-y-1">
                {[
                  { time: "09:00", name: "Elena M.", type: "Follow-up", duration: "30m", status: "Checked In", color: "bg-green-400", barColor: "bg-green-100 border-green-200" },
                  { time: "09:30", name: "Javier P.", type: "New Patient", duration: "45m", status: "AI Intake Done", color: "bg-accent-blue", barColor: "bg-blue-50 border-blue-200" },
                  { time: "10:15", name: "Sofia L.", type: "Check-up", duration: "30m", status: "Reminder Sent", color: "bg-yellow-400", barColor: "bg-yellow-50 border-yellow-200" },
                  { time: "10:45", name: "Marco D.", type: "Consultation", duration: "30m", status: "Confirmed", color: "bg-green-400", barColor: "bg-green-50 border-green-200" },
                ].map((slot, i) => (
                  <div key={i} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 border ${slot.barColor}`}>
                    <span className="text-[9px] font-mono font-bold text-charcoal/60 w-8 shrink-0">{slot.time}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${slot.color} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold text-charcoal">{slot.name}</span>
                      <span className="text-[9px] text-text-muted ml-1">· {slot.type}</span>
                    </div>
                    <span className="text-[8px] font-medium text-text-muted bg-white px-1.5 py-0.5 rounded shrink-0">{slot.duration}</span>
                    <span className="text-[8px] font-medium text-green-600 shrink-0">{slot.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-sand/50 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal">Patient Satisfaction</span>
                <span className="text-[9px] text-accent-blue font-medium">96% this month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-cream rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{ width: '96%' }} />
                </div>
                <span className="text-[9px] font-bold text-green-600">96%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 12, x: 12 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-sand shadow-xl shadow-charcoal/10 p-3 flex items-center gap-2.5 z-10">
        <div className="w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
          <Phone className="w-4.5 h-4.5 text-accent-blue" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">Cancellation Recovered</div>
          <div className="text-[9px] text-text-muted">10:15 slot auto-filled from waitlist</div>
          <div className="text-[9px] text-green-600 font-medium mt-0.5">Revenue saved: €120</div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -8, x: -8 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-3 -left-3 bg-charcoal rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 z-10">
        <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center">
          <ShieldCheck className="w-3 h-3 text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">HIPAA Compliant</div>
          <div className="text-[8px] text-white/50">End-to-end encrypted</div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-2 right-12 bg-white rounded-lg shadow-md border border-sand px-2.5 py-1.5 flex items-center gap-1.5 z-10">
        <Activity className="w-3 h-3 text-green-500" />
        <span className="text-[9px] font-bold text-charcoal">No-shows ↓ 50%</span>
      </motion.div>
    </motion.div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-sand">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer">
          <span className="font-display text-base font-semibold text-charcoal pr-4">{question}</span>
          <ChevronDown className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
              <p className="text-text-muted text-sm leading-relaxed pb-5">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function HealthServicesOS() {
  const solutions = [
    { title: "Intelligent Patient Reactivation", promise: "Dormant patients come back for the care they need.", desc: "Dormant patients receive personalized WhatsApp messages based on their treatment history. Not a generic reminder \u2014 a relevant conversation about the care they need. They book directly from the chat." },
    { title: "Smart Appointment Booking", promise: "Patients book through WhatsApp, no back-and-forth.", desc: "Patients book through WhatsApp, integrated with your clinic software. Real-time availability checks \u2014 no double bookings, no back-and-forth." },
    { title: "Multi-Practitioner Scheduling", promise: "Every practitioner\u2019s schedule stays full, automatically.", desc: "Appointments coordinated across doctors, hygienists, and rooms automatically." },
    { title: "Automated Reminders & Follow-up", promise: "No-shows drop. Your team stays off the phone.", desc: "Confirmations, reminders, and post-visit follow-ups via WhatsApp. No-shows drop. Your team stays off the phone." },
    { title: "Post-Visit Review Collection", promise: "Your reputation grows without anyone asking at the front desk.", desc: "After each visit, patients get a simple prompt to leave a Google review. Your reputation grows without anyone asking at the front desk." },
  ];

  const faqs = [
    { q: "Do we need to change our clinic software?", a: "No. We connect to Gesden, Odontonet, Klini Kare, CliniWin, and others. Nothing changes for your team." },
    { q: "Do we need to change our WhatsApp number?", a: "No. Messages come from your clinic\u2019s number. Patients see your clinic, not a third party." },
    { q: "Will my front desk need to learn anything new?", a: "No. This is completely done for you. Their workload decreases \u2014 patients arrive pre-booked." },
    { q: "What about all the new incoming messages?", a: "We help manage them. The system handles conversations and booking automatically. For messages that need a human, we make sure nothing falls through." },
    { q: "Is this GDPR compliant?", a: "Yes. We only contact patients who have given consent. We help you manage consent records and ensure full compliance." },
    { q: "What do patients actually receive?", a: "Natural WhatsApp messages personalized to their treatment history. Not marketing blasts \u2014 real conversations." },
    { q: "How quickly will we see results?", a: "Most clinics see confirmed appointments within the first 2 weeks." },
    { q: "What if our schedule is already full?", a: "The system checks real-time availability. If you fill up, we pause or focus on low-occupancy periods." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-clip">
      {/*  T1: HERO  */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Dental Clinic OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your dentists treat.{" "}
                Our AI fills the chairs.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                We reactivate dormant patients via WhatsApp, automate booking, and manage
                patient communication. Deployed on your existing clinic software, managed by
                our team.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="https://cal.com/arnau-fabrega-nscdht/autonymo-dental-clinic-os" className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-colors active:scale-95">
                  Book a Free Assessment
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
                <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3.5 font-medium tracking-tight text-charcoal text-base rounded-xl bg-white border border-charcoal/15 hover:border-charcoal/30 transition-colors active:scale-95">
                  See how it works
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <HealthIllustration />
            </div>
          </div>
        </div>
      </section>

      {/*  T2: SOCIAL PROOF BAR  */}
      <section className="py-4 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium text-text-muted/60 tracking-wide">
            Deployed for dental clinics across Spain.
          </p>
        </div>
      </section>

      {/*  T3: THE PROBLEM  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">The Problem</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              The real cost of an empty chair.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Users, title: "Patients who should be coming back", desc: "Your database has hundreds of patients overdue for treatment. Nobody has time to reach out to all of them." },
              { icon: Calendar, title: "Your front desk is the bottleneck", desc: "Receptionists handle calls, scheduling, and billing all at once. Patient reactivation is always the first thing dropped." },
              { icon: Clock, title: "Revenue you can\u2019t see", desc: "A patient who comes for a hygiene generates far more than the cleaning fee. Every patient who doesn\u2019t come back is a cascade of treatments that never happens." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="p-6 rounded-xl bg-white border border-sand flex flex-col">
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
        industryExample="We don&apos;t send mass messages. We analyze each patient&apos;s history and reactivate them for the specific treatment they need."
        vendorItems={[
          "Sell software, disappear",
          "Blast generic SMS to your database",
          "One-size-fits-all messages",
          "No ongoing support",
        ]}
        ourItems={[
          "Connect to your clinic management system",
          "Personalized reactivation based on each patient\u2019s treatment history",
          "Conversations via WhatsApp, not spam",
          "Manage & optimize monthly",
        ]}
      />

      {/*  T5: SOLUTION PORTFOLIO  */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">What We Deploy</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Your clinic, fully equipped.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full p-6 rounded-xl bg-white border border-sand">
                <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1">{sol.title}</h4>
                <p className="text-accent-blue text-sm font-medium mb-3">{sol.promise}</p>
                <p className="text-text-muted text-sm leading-relaxed">{sol.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T6: CASE STUDY  */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">Case Study</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">90 days. One clinic. Real results.</h3>
            <p className="text-text-muted text-lg leading-relaxed">
              A dental clinic in Spain with 3+ dentists and over 9,000 patient records.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "759", label: "Patients contacted" },
              { value: "153", label: "Visits confirmed" },
              { value: "\u20AC16,000+", label: "Estimated revenue generated" },
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="p-6 rounded-xl bg-cream border border-sand text-center">
                <div className="font-display text-3xl font-bold text-charcoal mb-1">{metric.value}</div>
                <div className="text-text-muted text-sm">{metric.label}</div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="max-w-3xl p-6 rounded-xl bg-cream border border-accent-blue/20">
            <p className="text-charcoal text-sm leading-relaxed">
              Reactivated patients don&apos;t just come back for a cleaning. They come back into your ecosystem, and your doctors find treatments that would never have started otherwise. On average, every reactivated visit generated 4x more revenue than expected.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/*  T7: HOW WE WORK  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">How We Work</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">From first call to patients coming back in 3 weeks.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "Step 1", title: "We connect to your clinic software", desc: "We integrate with your existing system. No migration, no new tools." },
              { step: "Step 2", title: "The system starts reactivating your patient database", desc: "We analyze who\u2019s overdue and for what, and launch personalized WhatsApp conversations for each patient\u2019s specific situation." },
              { step: "Step 3", title: "We manage, optimize, and scale", desc: "We monitor weekly, refine messaging, and expand to new campaign types. The system gets smarter. You get more patients back." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-colors duration-500 flex flex-col">
                <span className="font-display text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/5 px-3 py-1 rounded-full self-start mb-5">{item.step}</span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*  T9: FAQ  */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">FAQ</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-12">Common questions</h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/*  T10: FINAL CTA  */}
      <FinalCTA
        verticalPhrase="your clinic"
        heading="Let&apos;s fill your chairs."
        subtitle="Book a free 30-minute assessment. We&apos;ll show you how many dormant patients your clinic has and what reactivating them could mean for your revenue."
        calLink="https://cal.com/arnau-fabrega-nscdht/autonymo-dental-clinic-os"
      />
    </div>
  );
}
