/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#009ab7',
					secondary: '#00d5ff',
					accent: '#d89d00',
					neutral: '#2f252d',
					'base-100': '#1f2527',
					info: '#00b5ff',
					success: '#00da9c',
					warning: '#c59100',
					error: '#ca0f4d'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
