import './Header.css';
import Nav from '../Nav/Nav';
import logo from '../../../assets/logo-little-lemon.svg';

export default function Header() {
	return (
		<header className="site-header">
			<div className="container site-header__inner">
				<a href="/" className="site-header__logo" aria-label="Little Lemon Home">
					<img src={logo} alt="Little Lemon Logo" />
				</a>
				<Nav />
			</div>
		</header>
	);
}
