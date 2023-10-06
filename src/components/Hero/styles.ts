/* eslint-disable quotes */
export const styles = {
	heroDiv: {
		display: 'flex',
		alignments: 'flex-col justify-center items-center',
		sizes: 'h-[414px]',
		background: "bg-[url('/assets/img/wallpaper.jpeg')] bg-cover bg-no-repeat",
		breakpoints: 'md:h-[378px]',
		before: 'before:bg-dark-10 before:w-full before:h-full before:opacity-60'
	},

	textContainer: {
		display: 'flex',
		aligment: 'flex-col',
		sizes: 'w-11/12',
		spacings: 'gap-3',
		position: 'absolute'
	},

	heading_2: {
		typography: 'font-[700] text-dark-40 text-[28px]'
	},
  
	paragraph: {
		typography: 'font-[600] text-dark-40 md:w-1/3',
		breakpoints: 'md:w-1/3'
	}
} 