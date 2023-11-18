/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {

		}
	},

	plugins: [require("daisyui")],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: [
			{
				custom: {
					primary: "#f1e8e6",
					secondary: "#edd2cb",
					neutral: "#f55951",
					accent: "#543c52",
					base: "#361d32"
				}
			}
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: false, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "dui", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
};

module.exports = config;
