import { menuItems } from '../../../data/menu';
import CardGrid from '../../features/CardGrid/CardGrid';

import './Menu.css';

function Menu() {
	return (
		<section id="menu" className="menu page-section">
			<div className="container menu__inner">
				<div className="menu__header">
					<h2 className="menu__title">This week's specials</h2>
					<a className="button button--primary" href="#top">Online Menu</a>
				</div>
				<CardGrid items={menuItems} />
			</div>
		</section>
	);
}

export default Menu;