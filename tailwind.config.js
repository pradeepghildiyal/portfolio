/** @type {import('tailwindcss').Config} */

// Tailwind Custom Theme
const multiThemePlugin = require("./multi-theme-plugin.cjs");
const themes = require("./themes.json");
// Custom Theme Ends

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"node_modules/preline/dist/*.js",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1240px",
		},
		darkMode: ["class", '[data-theme="dark"]'],
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		// require("daisyui"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		multiThemePlugin({ colorThemes: themes }),
		require("preline/plugin"),
	],
};
