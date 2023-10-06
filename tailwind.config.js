/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			brand: '#00AEFF',
	
			/* dark scale */
			dark: {
				10: '#181818', /* 100% */
				20: '#474747', /* 70% */
				30: '#EBE9EA', /* 20% */
				40: '#F9F9F9', /* 10% */
			},
	
			/* color system */
			system: {
				message: '#2962FF',
				success: '#0BB07B',
				warning: '#FFCE52',
				error: '#F03D3D',
				info: '#E0E0E0',
	
			}
		}
	},
}

