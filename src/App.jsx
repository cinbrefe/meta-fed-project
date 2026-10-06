import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import Menu from './components/sections/Menu/Menu';
import Testimonials from './components/sections/Testimonials/Testimonials';
import About from './components/sections/About/About';

function App() {
	return (
		<>
			<Header />
			<main id="main-content">
				<Hero />
				<Menu />
				<Testimonials />
				<About />
			</main>
			<Footer />
		</>
	);
}

export default App;
