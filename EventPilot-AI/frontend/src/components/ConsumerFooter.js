import React from "react";
import { Link } from "react-router-dom";

export default function ConsumerFooter() {
  return (
    <footer
      data-testid="consumer-footer"
      className="border-t border-canvas-200 bg-canvas-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-[13px] text-slate-mid">
        <div className="md:col-span-2">
          <div className="font-serif text-xl text-slate-ink">
            EventPilot <span className="text-aura-600">AI</span>
          </div>
          <p className="mt-2 max-w-md leading-relaxed">
            Events planned by a team of six collaborating AI agents: intake, vendor
            research, planning, insights, compliance and budget optimization,
            with a human approving every plan before anything is booked.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-aura-600 mb-2">
            services
          </div>
          <ul className="space-y-1.5">
            <li>Weddings &amp; receptions</li>
            <li>Corporate offsites</li>
            <li>Birthdays &amp; parties</li>
            <li>Anniversaries</li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-aura-600 mb-2">
            company
          </div>
          <ul className="space-y-1.5">
            <li>
              <Link to="/about" className="hover:text-brand-800">
                How it works
              </Link>
            </li>
            <li>Cities: Bangalore · Mumbai · Delhi</li>
            <li>hello@eventpilot.example</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-canvas-200 py-3 text-[11px] text-slate-soft text-center">
        © EventPilot AI · Built on the open-source Gatherly project · Sample catalog data, not verified live prices
      </div>
    </footer>
  );
}
