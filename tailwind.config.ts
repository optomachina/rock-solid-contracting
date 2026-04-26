import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        basalt: "var(--rs-basalt)",
        caliche: "var(--rs-caliche)",
        iron: "var(--rs-iron)",
        "iron-hover": "var(--rs-iron-hover)",
        varnish: "var(--rs-varnish)",
        mesquite: "var(--rs-mesquite)",
        dust: "var(--rs-dust)",
        sand: "var(--rs-sand)",
        shadow: "var(--rs-shadow)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
