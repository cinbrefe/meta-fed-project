import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
	return (
		<header className="site-header">
			<a href="/" className="brand-link">
				<span className="offscreen">Little Lemon</span>
			</a>
			<Nav />
		</header>
	);
}

export default Header;
