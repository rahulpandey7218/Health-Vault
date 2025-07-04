// import type { Config } from "tailwindcss"

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border) / <alpha-value>)",
//         input: "hsl(var(--input) / <alpha-value>)",
//         ring: "hsl(var(--ring) / <alpha-value>)",
//         background: "hsl(var(--background) / <alpha-value>)",
//         foreground: "hsl(var(--foreground) / <alpha-value>)",
//         primary: {
//           DEFAULT: "hsl(var(--primary) / <alpha-value>)",
//           foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
//           foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
//           foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted) / <alpha-value>)",
//           foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent) / <alpha-value>)",
//           foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover) / <alpha-value>)",
//           foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card) / <alpha-value>)",
//           foreground: "hsl(var(--card-foreground) / <alpha-value>)",
//         },
//         sidebarBackground: "hsl(var(--sidebar-background) / <alpha-value>)",
//         sidebarForeground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
//         sidebarPrimary: "hsl(var(--sidebar-primary) / <alpha-value>)",
//         sidebarAccent: "hsl(var(--sidebar-accent) / <alpha-value>)",
//         sidebarBorder: "hsl(var(--sidebar-border) / <alpha-value>)",
//         sidebarRing: "hsl(var(--sidebar-ring) / <alpha-value>)",
//         chart1: "hsl(var(--chart-1) / <alpha-value>)",
//         chart2: "hsl(var(--chart-2) / <alpha-value>)",
//         chart3: "hsl(var(--chart-3) / <alpha-value>)",
//         chart4: "hsl(var(--chart-4) / <alpha-value>)",
//         chart5: "hsl(var(--chart-5) / <alpha-value>)",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         "fade-in": {
//           "0%": { opacity: "0", transform: "translateY(10px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "slide-in": {
//           "0%": { transform: "translateX(-100%)" },
//           "100%": { transform: "translateX(0)" },
//         },
//         "bounce-in": {
//           "0%": { transform: "scale(0.3)", opacity: "0" },
//           "50%": { transform: "scale(1.05)" },
//           "70%": { transform: "scale(0.9)" },
//           "100%": { transform: "scale(1)", opacity: "1" },
//         },
//         "pulse-slow": {
//           "0%, 100%": { opacity: "1" },
//           "50%": { opacity: "0.5" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in": "fade-in 0.6s ease-out",
//         "slide-in": "slide-in 0.5s ease-out",
//         "bounce-in": "bounce-in 0.6s ease-out",
//         "pulse-slow": "pulse-slow 2s ease-in-out infinite",
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//         "hero-pattern": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//         "card-gradient": "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
//       },
//       boxShadow: {
//         custom: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//         "custom-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//         "inner-custom": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
//         glow: "0 0 20px rgba(59, 130, 246, 0.5)",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }

// export default config





import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  // same as above...
} satisfies Config
