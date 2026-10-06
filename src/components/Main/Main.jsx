import Hero from '../sections/Hero/Hero';
import Menu from '../sections/Menu/Menu';
import Testimonials from '../sections/Testimonials/Testimonials';

import './Main.css';

function Main() {
	return (
		<main id="main-content" className="site-main">
			<Hero />
			<Menu />
			<Testimonials />
		</main>
	);
}

export default Main;