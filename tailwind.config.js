/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "hsl(var(--color-main))",
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        neutral: "hsl(var(--color-neutral))",
        "neutral-accent": "hsl(var(--color-neutral-accent))",
        success: "hsl(var(--color-success))",
        error: "hsl(var(--color-error))",
      },
      gap: {
        main: "var(--spacing-main)",
        card: "var(--gap-card)",
      },
      padding: {
        main: "var(--padding-main)",
        card: "var(--padding-card)",
      },

      maxWidth: {
        section: "var(--max-width-section)",
        form: "var(--max-width-form)",
      },
    },
  },
  plugins: [],
};
