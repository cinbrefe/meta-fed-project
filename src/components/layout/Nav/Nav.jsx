import { useRef, useState } from 'react';

import './Nav.css';

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Menu', href: '#menu' },
	{ label: 'Reservation', href: '#reservation' },
	{ label: 'Order Online', href: '#order' },
	{ label: 'Login', href: '#login' },
];

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleRef = useRef(null);

	// Close on Escape and move focus back to the toggle so keyboard users keep their place
	const handleKeyDown = (e) => {
		if (e.key === 'Escape' && isOpen) {
			setIsOpen(false);
			toggleRef.current.focus();
		}
	};

	const handleToggle = () => setIsOpen((open) => !open);

	return (
		<nav className="main-nav" aria-label="Main navigation" onKeyDown={handleKeyDown}>
			<button
				ref={toggleRef}
				type="button"
				className={`main-nav__toggle${isOpen ? ' main-nav__toggle--open' : ''}`}
				aria-label="Menu"
				aria-expanded={isOpen}
				aria-controls="primary-navigation"
				onClick={handleToggle}
			>
				<span className="main-nav__bar main-nav__bar--top" aria-hidden="true" />
				<span className="main-nav__bar main-nav__bar--middle" aria-hidden="true" />
				<span className="main-nav__bar main-nav__bar--bottom" aria-hidden="true" />
			</button>

			<ul
				id="primary-navigation"
				className={`main-nav__list${isOpen ? ' main-nav__list--open' : ''}`}
			>
				{navItems.map(({ label, href }) => (
					<li key={label} className="main-nav__item">
						<a href={href} className="main-nav__link" onClick={() => setIsOpen(false)}>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
