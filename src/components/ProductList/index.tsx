import assets from '../../assets/images.json'

const productImages = assets.images.shoes

const ProductList = () => (
	<ul className='flex flex-wrap justify-center w-full'>
		{productImages.map((src, index: number) => (
			<li
				key={index}
				className='p-16 md:p-24'
				title={
					'Tênis Jordan ' +
					Number(index + 1) +
					'\n' +
					'valor ' +
					Math.floor(Math.random() * (2000 - 500 + 1) + 500)
						.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
						.toString()
				}
			>
				<img className='w-[250px] hover:opacity-90' src={src} alt={'Jordan shoe ' + index} />
			</li>
		))}
	</ul>
)

export default ProductList
