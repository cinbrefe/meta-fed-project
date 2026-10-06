import { menuItems } from '../../../data/menu';
import CardGrid from '../../features/CardGrid/CardGrid';
import MenuCard from '../../features/MenuCard/MenuCard';

import './Menu.css';

export default function Menu() {
	return (
		<section id="menu" className="menu page-section">
			<div className="container menu__inner">
				<div className="menu__header">
					<h2 className="menu__title">This week's specials</h2>
					<a className="button button--primary" href="#top">Online Menu</a>
				</div>
				<CardGrid items={menuItems} renderItem={(dish) => <MenuCard {...dish} />} />
			</div>
		</section>
	);
}
