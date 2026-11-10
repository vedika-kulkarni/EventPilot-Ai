import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, ArrowRight, ShieldCheck, Wallet, CloudSun, CalendarCheck, Radio, Users,
  FileText, Search, ClipboardList, BarChart3, Scale, Wand2, UserCheck,
} from "lucide-react";
import ConsumerNav from "../components/ConsumerNav";
import ConsumerFooter from "../components/ConsumerFooter";

const AGENTS = [
  { icon: FileText, name: "Intake Agent", body: "Turns your sentence into a structured brief and screens it for safety and past dates." },
  { icon: Search, name: "Venue & Vendor Agent", body: "RAG search over the vendor catalog, matched on capacity, city, budget and preferences." },
  { icon: ClipboardList, name: "Planner Agent", body: "Builds the day timeline and an exact budget with a deterministic cost tool." },
  { icon: BarChart3, name: "Insights Agent", body: "Weather risk, countdown checklist, Lean / Balanced / Luxe packages and a health score." },
  { icon: Scale, name: "Compliance Agent", body: "Validates budget and policy, then approves, rejects or escalates to a human." },
  { icon: Wand2, name: "Budget Optimizer", body: "Over budget? Swaps in cheaper vendors, keeps your must-haves and re-runs validation." },
];

const FEATURES = [
  { icon: Wallet, title: "Budget optimizer", body: "See the original plan next to the optimized one, with every swap explained." },
  { icon: CloudSun, title: "Weather risk", body: "Seasonal climatology per city flags risky outdoor dates before you commit." },
  { icon: Radio, title: "Live agent stream", body: "Watch each agent work in real time, including retries and errors." },
  { icon: UserCheck, title: "Human approval gate", body: "Nothing is booked until a person explicitly approves the plan." },
  { icon: Users, title: "Guest invites", body: "RSVP links with meal preferences, a party playlist and a live countdown." },
  { icon: CalendarCheck, title: "Calendar & Markdown export", body: "Download an .ics with every checklist deadline, or a shareable Markdown plan." },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-canvas-50 text-slate-ink" data-testid="landing-root">
      <ConsumerNav transparent />

      <section className="relative overflow-hidden border-b border-canvas-200 bg-aurora" data-testid="hero-section">
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-700/20 rounded-full text-[11px] tracking-widest uppercase text-brand-800 font-mono">
              <Sparkles size={12} /> six agents · one human gate
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 font-serif font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight"
              data-testid="hero-title"
            >
              Describe the event.
              <br />
              <span className="bg-gradient-to-r from-brand-800 to-aura-600 bg-clip-text text-transparent">
                Your AI crew plans it.
              </span>
            </motion.h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-slate-mid">
              EventPilot AI turns one sentence into a costed, weather-checked, policy-validated plan.
              It fixes budget overruns on its own, and a human approves the plan before anything is booked.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/plan"
                data-testid="hero-cta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-800 text-white hover:bg-brand-700 rounded-full text-[14px] font-semibold transition-colors"
              >
                Start planning <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-canvas-200 hover:border-brand-700 rounded-full text-[14px] font-semibold text-slate-ink transition-colors"
              >
                How it works
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 rounded-2xl border border-canvas-200 bg-card shadow-xl shadow-brand-800/10 p-6"
          >
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-soft">example request</div>
            <p className="mt-2 text-[15px] leading-relaxed">
              “Plan a wedding for 150 guests in Bangalore with a budget of ₹8 lakh on December 18, outdoors.”
            </p>
            <ul className="mt-5 space-y-2.5 text-[13px] text-slate-mid">
              {["Intake: structured brief ✓", "Vendors: 3 venues matched via RAG ✓", "Compliance: over budget, optimizer engaged", "Human approval: waiting for you"].map((l, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${i === 3 ? "bg-aura-500 animate-pulse" : "bg-brand-700"}`} />
                  {l}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-5 lg:px-10 py-20" data-testid="features-section">
        <h2 className="font-serif font-bold text-3xl md:text-4xl tracking-tight">Built like a product, not a chatbot</h2>
        <p className="mt-3 text-slate-mid max-w-2xl">Everything a real planning team would hand you, from one request.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-canvas-200 bg-card p-6 hover:border-brand-700 transition-colors">
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-brand-50 text-brand-800"><Icon size={20} /></div>
              <h3 className="mt-4 font-semibold text-[16px]">{title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-mid">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-canvas-200 bg-canvas-100" data-testid="agents-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20">
          <h2 className="font-serif font-bold text-3xl md:text-4xl tracking-tight">How multi-agent planning works</h2>
          <p className="mt-3 text-slate-mid max-w-2xl">
            Six specialists share one graph state. Routing is conditional: an over-budget plan loops through the
            optimizer and back through planning and compliance until it fits or a human steps in.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AGENTS.map(({ icon: Icon, name, body }, i) => (
              <div key={name} className="rounded-2xl border border-canvas-200 bg-card p-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-brand-800 to-aura-500 text-white"><Icon size={20} /></div>
                  <span className="font-mono text-[11px] text-slate-soft">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-semibold text-[16px]">{name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-mid">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-[13px] text-slate-mid">
            <ShieldCheck size={16} className="text-brand-800" />
            Prompt-injection screening, PII redaction and a mandatory human approval step protect every plan.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20 text-center" data-testid="cta-section">
        <h2 className="font-serif font-bold text-3xl md:text-4xl tracking-tight">Ready to plan your next event?</h2>
        <p className="mt-3 text-slate-mid">Vendor prices come from a sample catalog and are not verified live quotes.</p>
        <Link
          to="/plan"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-brand-800 text-white hover:bg-brand-700 rounded-full text-[14px] font-semibold transition-colors"
        >
          Plan with EventPilot AI <ArrowRight size={16} />
        </Link>
      </section>

      <ConsumerFooter />
    </div>
  );
}
