module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // admin console: fixed deep-navy palette
        bg: { app: "#070B1A", surface: "#0E1428", surfaceHover: "#161D38" },
        accent: {
          violet: "#8B5CF6", violetHover: "#7C3AED", indigo: "#818CF8",
          green: "#22C55E", red: "#EF4444", amber: "#F59E0B",
        },
        ink: { primary: "#F8FAFC", secondary: "#A5B0CC", muted: "#5B6685" },
        // consumer app: themed through CSS variables (light + dark), see index.css
        canvas: {
          50: "rgb(var(--canvas-50) / <alpha-value>)",
          100: "rgb(var(--canvas-100) / <alpha-value>)",
          200: "rgb(var(--canvas-200) / <alpha-value>)",
        },
        card: "rgb(var(--card) / <alpha-value>)",
        brand: {
          900: "rgb(var(--brand-900) / <alpha-value>)",
          800: "rgb(var(--brand-800) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          50: "rgb(var(--brand-50) / <alpha-value>)",
        },
        aura: {
          600: "rgb(var(--aura-600) / <alpha-value>)",
          500: "rgb(var(--aura-500) / <alpha-value>)",
          400: "rgb(var(--aura-400) / <alpha-value>)",
          200: "rgb(var(--aura-200) / <alpha-value>)",
        },
        rose: { 600: "rgb(var(--danger) / <alpha-value>)" },
        slate: {
          ink: "rgb(var(--ink) / <alpha-value>)",
          mid: "rgb(var(--ink-mid) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        serif: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
      },
      boxShadow: {
        glowIndigo: "0 0 0 1px rgba(129,140,248,0.5), 0 0 32px -4px rgba(129,140,248,0.5)",
        glowViolet: "0 0 0 1px rgba(139,92,246,0.6), 0 0 32px -4px rgba(139,92,246,0.55)",
        glowGreen: "0 0 0 1px rgba(34,197,94,0.55), 0 0 24px -6px rgba(34,197,94,0.55)",
      },
      keyframes: {
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(129,140,248,0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(129,140,248,0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "47%": { opacity: "1" },
          "50%": { opacity: "0.6" },
          "53%": { opacity: "1" },
        },
        edgeFlow: {
          "0%": { strokeDashoffset: "20" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 1.8s ease-out infinite",
        flicker: "flicker 4s linear infinite",
        edgeFlow: "edgeFlow 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
