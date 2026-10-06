import { contactLinks, siteLinks, socialLinks } from '../../../data/navigation';
import logo from '../../../assets/images/svg/logo-little-lemon.svg';

import './Footer.css';

const companyLinks = [{ label: 'Home', href: '#top' }, ...siteLinks];

function FooterLinks({ links, onReserveClick }) {
	return (
		<ul className="site-footer__list">
			{links.map(({ label, href, action }) => (
				<li key={label}>
					{action === 'reserve' ? (
						<button type="button" className="site-footer__link site-footer__link--button" onClick={onReserveClick}>
							{label}
						</button>
					) : (
						<a className="site-footer__link" href={href}>
							{label}
						</a>
					)}
				</li>
			))}
		</ul>
	);
}

export default function Footer({ onReserveClick }) {
	return (
		<footer className="site-footer">
			<div className="container site-footer__inner">
				<img className="site-footer__logo" src={logo} alt="Little Lemon" width="191" height="53" loading="lazy" />

				<nav className="site-footer__column" aria-labelledby="footer-company">
					<h2 className="site-footer__title" id="footer-company">Company</h2>
					<FooterLinks links={companyLinks} onReserveClick={onReserveClick} />
				</nav>

				<address className="site-footer__column">
					<h2 className="site-footer__title">Contact</h2>
					<FooterLinks links={contactLinks} />
				</address>

				<nav className="site-footer__column" aria-labelledby="footer-social">
					<h2 className="site-footer__title" id="footer-social">Follow us</h2>
					<FooterLinks links={socialLinks} />
				</nav>
			</div>
		</footer>
	);
}
