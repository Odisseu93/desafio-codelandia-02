import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'

const  App = () => (
	<>
		<Header/>
		<h1 className='text-center font-[600] p-3'>JordanShoes</h1>
		<Hero />
		<main className='content'>
			<h3 className='p-2 pt-10 text-center font-[600] text-[2rem]'>Destaques</h3>
			<p className='text-center text-[20px] text-dark-20 pb-3 px-[.5rem]'>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
			<ProductList/>	
			<Footer/>
		</main>
	</>
)

export default App
