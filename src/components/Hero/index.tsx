import { styles } from './styles'

import { objectToCssClasses as convert } from '../../utils/objectToCssClasses'

const { heroDiv, textContainer, heading_2, paragraph } = styles

const Hero = () => (
	<section className={'hero ' + convert(heroDiv)}>
  
		<div className={'hero__text ' + convert(textContainer)}>
   
			<h2 className={'hero__text__title' + convert(heading_2)}>A melhor loja de Jordan</h2>
   
			<p className={'hero__text__paragraph' + convert(paragraph)}>
				O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
				jogador Michael Jordan.
			</p>
		</div>
	</section>
)

export default Hero
