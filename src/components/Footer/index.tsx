import { styles } from './styles'

import { objectToCssClasses as convert } from '../../utils/objectToCssClasses'

const { footer, paragraph } = styles

const Footer = () => (
	<footer className={convert(footer)}>
		<p className={convert(paragraph)}>Desenvolvido por
			<a className="md:hover:underline" rel="noreferrer noopener"
				href="https://www.ulisses.tec.br" target='_blank' >Ulisses Silvério</a> </p>
  
		<p  className={convert(paragraph)}>Design por
			<a className="md:hover:underline" rel="noreferrer noopener" 
				href="https://www.instagram.com/iuricode/" target='_blank' >Iuri Silva</a> </p>
	</footer>
)

export default Footer