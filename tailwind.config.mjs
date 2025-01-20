/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  primary: '#FF5843',
			  'primary-hover': '#ff4a33',
			},
			fontFamily: {
			  inter: ['Inter', 'sans-serif'],
			},
		}
	},
	plugins: [],
}
