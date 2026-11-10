import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { cn } from "../lib/utils";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function ConsumerNav({ transparent = false }) {
  const loc = useLocation();
  const link = (to, label) => (
    <Link
      key={to}
      to={to}
      data-testid={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
      className={cn(
        "text-[13px] font-medium tracking-wide transition-colors",
        loc.pathname === to ? "text-brand-800" : "text-slate-mid hover:text-brand-800"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      data-testid="consumer-nav"
      className={cn(
        "sticky top-0 z-40 border-b border-canvas-200",
        transparent ? "bg-canvas-50/80 backdrop-blur-md" : "bg-canvas-50"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link to="/" data-testid="logo-link" aria-label="EventPilot AI home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {link("/", "Home")}
          {link("/about", "How it works")}
          <a href="/#features" className="text-[13px] font-medium tracking-wide text-slate-mid hover:text-brand-800">
            Features
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/plan"
            data-testid="nav-plan-cta"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-800 text-white hover:bg-brand-700 text-[13px] font-semibold rounded-full transition-colors"
          >
            <Sparkles size={14} /> Plan an event
          </Link>
        </div>
      </div>
    </header>
  );
}
