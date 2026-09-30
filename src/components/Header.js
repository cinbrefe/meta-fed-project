import Nav from './Nav';

function Header() {
	return (
		<header>
			<a href="/">
				<span className="offscreen">Little Lemon</span>
			</a>
			<Nav />
		</header>
	);
}

export default Header;
