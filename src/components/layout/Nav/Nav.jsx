import { useRef, useState } from 'react';

import { siteLinks } from '../../../data/navigation';

import './Nav.css';

export default function Nav({ onReserveClick }) {
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

	const handleReserve = () => {
		setIsOpen(false);
		onReserveClick();
	};

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
				{siteLinks.map(({ label, href, action }) => (
					<li key={label} className="main-nav__item">
						{action === 'reserve' ? (
							<button type="button" className="main-nav__link main-nav__link--button" onClick={handleReserve}>
								{label}
							</button>
						) : (
							<a href={href} className="main-nav__link" onClick={() => setIsOpen(false)}>
								{label}
							</a>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
