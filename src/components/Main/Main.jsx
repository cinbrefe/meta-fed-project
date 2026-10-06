import './Main.css';

import Hero from '../sections/Hero/Hero';
import Menu from '../sections/Menu/Menu';

function Main() {
	return (
		<main id="main-content" className="site-main">
			<Hero />
			<Menu />
		</main>
	);
}

export default Main;