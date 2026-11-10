import React from "react";

/** EventPilot AI mark: a paper-plane-style pilot arrow inside a gradient tile. */
export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="EventPilot AI logo">
      <defs>
        <linearGradient id="ep-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#ep-g)" />
      <path d="M10 21.5 29.5 11 22 30l-3.6-7.2L10 21.5Z" fill="#fff" fillOpacity=".95" />
      <path d="M18.4 22.8 29.5 11" stroke="#4F46E5" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="31" cy="30" r="2" fill="#C4B5FD" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="leading-tight">
        <span className="block font-serif font-extrabold text-[17px] text-slate-ink tracking-tight">
          EventPilot <span className="text-aura-600">AI</span>
        </span>
        <span className="block text-[9px] font-mono tracking-[0.28em] uppercase text-slate-soft -mt-0.5">
          multi-agent planning
        </span>
      </span>
    </span>
  );
}
