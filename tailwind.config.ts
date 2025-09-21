import type { Config } from 'tailwindcss'
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./src/app/**/*.{ts,tsx,mdx}", "./src/components/**/*.{ts,tsx,mdx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        muted: "hsl(var(--muted))",
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
export default config
