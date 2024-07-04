/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["LXGW WenKai GB Screen", ...defaultTheme.fontFamily.sans],
			serif: ["LXGW WenKai GB Screen", ...defaultTheme.fontFamily.serif],
			mono: ["Menlo", "Consolas", ...defaultTheme.fontFamily.mono],
			"default-sans": defaultTheme.fontFamily.sans,
			"default-serif": defaultTheme.fontFamily.serif,
			"default-mono": defaultTheme.fontFamily.mono,
		},
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
