import { useEffect, useState } from 'react';

import Nav from '../Nav/Nav';
import logo from '../../../assets/images/svg/logo-little-lemon.svg';

import './Header.css';

export default function Header({ onReserveClick }) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);

		handleScroll(); // set the right state on load, e.g. after a refresh mid-page
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
			<a href="#main-content" className="skip-link">
				Skip to main content
			</a>
			<div className="container site-header__inner">
				<a href="/" className="site-header__logo">
					<img src={logo} alt="Little Lemon home" width="191" height="53" />
				</a>
				<Nav onReserveClick={onReserveClick} />
			</div>
		</header>
	);
}
